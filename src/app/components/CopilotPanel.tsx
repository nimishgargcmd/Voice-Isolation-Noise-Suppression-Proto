import React, { useState, useRef, useEffect } from "react";
import svgPaths from "@/imports/svg-hkfro4s1er";
import svgPathsNew from "@/imports/svg-1ql4uf57ul";
import svgPathsShortcuts from "@/imports/svg-h1sx0zpetf";
import svgPathsLoader from "@/imports/svg-fiyowz3zpr";
import svgPathsStop from "@/imports/svg-72r67vcw7b";
import svgPathsInputBox from "@/imports/svg-p86rbi3s64";
import addButtonSvg from "@/imports/svg-421nqr9b2v";
import arrowEnterSvg from "@/imports/svg-voj4kib3uf";
import imgLoader from "figma:asset/06b957a6d5437e60ed69b99fca47228844e73887.png";
import { MultitaskingPanel } from "@/app/components/MultitaskingPanel";
import { NativeInputBar } from "@/app/components/NativeInputBar";
import { CollapsedInputBox } from "@/app/components/CollapsedInputBox";
import { HorizontalScrollContainer } from "@/app/components/HorizontalScrollContainer";
import { sendCopilotMessage, type MeetingContext } from "@/app/lib/llm";
import { useVersion } from "@/app/versioning/VersionContext";
import { isMvpFamily } from "@/app/versioning/versions";
import { useTheme } from "@/app/theme/ThemeContext";

interface CopilotPanelProps {
  onClose: () => void;
  meetingContext?: MeetingContext;
  messages: Array<{
    text: string;
    isUser: boolean;
    isLoading?: boolean;
    followUpPrompts?: string[];
    media?: { url: string; type: string }[];
  }>;
  setMessages: React.Dispatch<React.SetStateAction<Array<{
    text: string;
    isUser: boolean;
    isLoading?: boolean;
    followUpPrompts?: string[];
    media?: { url: string; type: string }[];
  }>>>;
}

export function CopilotPanel({ onClose, meetingContext, messages, setMessages }: CopilotPanelProps) {
  const { activeVersionId } = useVersion();
  const isFy27Mvp = isMvpFamily(activeVersionId);
  const { theme } = useTheme();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [selectedPromptIndex, setSelectedPromptIndex] = useState<number | null>(null);
  
  // State to track if Copilot is thinking
  const [isThinking, setIsThinking] = useState(false);
  const [lastPrompt, setLastPrompt] = useState<string>("");
  const [promptSource, setPromptSource] = useState<'keyboard' | 'button'>('keyboard');
  const [focusCursorAtEnd, setFocusCursorAtEnd] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const userMessageRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Files selected from the collapsed input's + button, to be passed to the keyboard overlay
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);

  // Typewriter effect state
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);
  const typewriterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastTypedMessageRef = useRef<string>("");

  // Function to parse and format Copilot responses
  const formatResponse = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;
    let key = 0;

    const flushList = () => {
      if (currentList) {
        if (currentList.type === 'ul') {
          elements.push(
            <ul key={key++} className="list-disc ms-[25.5px] leading-[22px]">
              {currentList.items.map((item, idx) => (
                <li key={idx} className="text-[17px] tracking-[-0.41px] leading-[22px]" style={{ fontFamily: 'var(--font-sf-pro)' }}>{item}</li>
              ))}
            </ul>
          );
        } else {
          elements.push(
            <ol key={key++} className="list-decimal ms-[25.5px] leading-[22px]">
              {currentList.items.map((item, idx) => (
                <li key={idx} className="text-[17px] tracking-[-0.41px] leading-[22px]" style={{ fontFamily: 'var(--font-sf-pro)' }}>{item}</li>
              ))}
            </ol>
          );
        }
        currentList = null;
      }
    };

    lines.forEach((line) => {
      const bulletMatch = line.match(/^(\s*)(•|\-|\*)\s+(.*)$/);
      const numberMatch = line.match(/^(\s*)(\d+\.)\s+(.*)$/);

      if (bulletMatch) {
        const content = bulletMatch[3];
        if (!currentList || currentList.type !== 'ul') {
          flushList();
          currentList = { type: 'ul', items: [] };
        }
        currentList.items.push(content);
      } else if (numberMatch) {
        const content = numberMatch[3];
        if (!currentList || currentList.type !== 'ol') {
          flushList();
          currentList = { type: 'ol', items: [] };
        }
        currentList.items.push(content);
      } else {
        flushList();
        if (line.trim() || elements.length > 0) {
          elements.push(
            <div key={key++} className="leading-[22px]">
              {line || '\u00A0'}
            </div>
          );
        }
      }
    });

    flushList();
    return elements;
  };

  const prompts = [
    "Help me understand",
    "Help me answer",
    "What can I ask",
  ];

  // FY27 MVP "bebop" empty-state suggestion chips (Figma 233:38071).
  const bebopPrompts = [
    "Recap the meeting since I joined",
    "Action items on me",
    "Share Meeting Fundamentals.pptx in chat",
  ];

  // Suggested questions for each prompt type
  const promptSuggestions: Record<string, string[]> = {
    "Help me understand": [
      "what is the action item on my team?",
      "the key points discussed so far?",
      "what was just said in simpler terms?",
    ],
    "Help me answer": [
      "how should we prioritize the Q2 roadmap?",
      "what are the main risks with this approach?",
      "how does this impact the timeline we discussed?",
      "what resources do we need for implementation?",
      "how do we ensure cross-team alignment?",
      "what are the success metrics for this initiative?",
    ],
    "What can I ask": [
      "open questions",
      "security risks",
      "timelines",
      "dependencies",
      "resource allocation",
      "success criteria",
    ],
  };

  // Mock talking points for "Help me answer" responses
  const answerTalkingPoints: Record<string, string> = {
    "how should we prioritize the Q2 roadmap?": "Based on the discussion, here are key talking points:\n\n• Customer impact should be the primary driver - focus on features affecting the most users\n• Consider technical dependencies mentioned earlier\n• Balance quick wins with strategic long-term initiatives\n• Align with the revenue goals discussed in the previous section",
    
    "what are the main risks with this approach?": "Here are the key risks to address:\n\n• Resource constraints mentioned by the engineering team\n• Timeline dependencies on the third-party integration\n• Potential scope creep if requirements aren't clearly defined\n• Market timing concerns raised earlier in the discussion",
    
    "how does this impact the timeline we discussed?": "Key timeline considerations:\n\n• This adds approximately 2-3 weeks based on similar past projects\n• Dependencies on design completion need to be factored in\n• Testing and QA will require additional buffer time\n• Consider the holiday schedule impact mentioned earlier",
    
    "what resources do we need for implementation?": "Resource requirements to mention:\n\n• 2-3 engineers for 4-6 weeks based on scope discussed\n• Design support for the UI components mentioned\n• QA resources for comprehensive testing\n• Product management oversight for stakeholder alignment",
    
    "how do we ensure cross-team alignment?": "Alignment strategies to propose:\n\n• Weekly syncs with stakeholders as suggested earlier\n• Clear documentation of decisions and rationale\n• Regular status updates via the agreed communication channels\n• Defined escalation path for blockers and dependencies",
    
    "what are the success metrics for this initiative?": "Success metrics to propose:\n\n• User adoption rate tracking (target: 60% in first month)\n• Performance improvements based on earlier benchmarks\n• Customer satisfaction scores post-launch\n• Reduction in support tickets related to this workflow",
  };

  // Gap-filling questions for "What can I ask?" categories
  const gapFillingQuestions: Record<string, string> = {
    "open questions": "Here are open questions that haven't been addressed yet:\n\n• What problem are we ultimately trying to solve for our users?\n• How does this align with our broader strategic objectives?\n• What assumptions are we making that we should validate?\n• Are there alternative approaches we haven't considered?\n• What would success look like from the customer's perspective?",
    
    "security risks": "Security considerations that need clarification:\n\n• What data privacy implications does this solution have?\n• How will we handle user authentication and authorization?\n• Are there compliance requirements (GDPR, SOC2, etc.) we need to address?\n• What's our plan for vulnerability management and security testing?\n• How will we ensure secure data transmission and storage?",
    
    "timelines": "Timeline details that need clarification:\n\n• What are the hard deadlines and why?\n• Which milestones are flexible vs. fixed?\n• What's our contingency plan if we encounter delays?\n• How does this timeline align with other team dependencies?\n• When do we need to make go/no-go decisions?",
    
    "dependencies": "Dependencies that haven't been fully explored:\n\n• Which teams or external parties do we depend on?\n• What technical dependencies could block our progress?\n• Are there licensing or vendor agreements we need in place?\n• What infrastructure or tools need to be ready before we start?\n• How will we handle dependency delays or changes?",
    
    "resource allocation": "Resource questions that need answers:\n\n• Do we have the right skill sets on the team?\n• What happens if key team members become unavailable?\n• Are there budget constraints we should be aware of?\n• Will this require hiring or contracting additional help?\n• How will this impact other projects the team is working on?",
    
    "success criteria": "Success criteria that need definition:\n\n• What metrics will we use to measure success?\n• How will we know if we've achieved our objectives?\n• What's the minimum viable outcome vs. stretch goals?\n• Who are the stakeholders that need to approve this?\n• What feedback loops will we establish to measure progress?",
  };

  // Responses for "Help me understand" prompts
  const understandingResponses: Record<string, string> = {
    "what is the action item on my team?": "Based on the meeting discussion, here are the action items for your team:\n\n• Complete the technical design document by Friday\n• Review the API specifications with the backend team\n• Set up the testing environment for the new feature\n• Schedule a follow-up meeting with stakeholders for next week",
    
    "the key points discussed so far?": "Here's a summary of the key points:\n\n• The project timeline has been moved up by 2 weeks\n• We're prioritizing mobile experience over desktop for this release\n• Budget approval is pending from leadership by end of week\n• Cross-team dependencies with Platform team need to be resolved\n• User research findings suggest focusing on simplicity over features",
    
    "what was just said in simpler terms?": "Let me simplify that:\n\nThe team is saying we need to focus on delivering the core functionality first, rather than trying to build everything at once. We'll launch with the basic features that solve the main user problem, then add more capabilities in future updates based on user feedback.",
  };

  // Fallback responses used when LLM call fails
  const getFallbackResponse = (textToSend: string): string => {
    if (textToSend === "List action items") {
      return "Here are the action items from the meeting:\n\n• Sarah to finalize Q2 roadmap presentation by Friday\n• Engineering team to review API integration proposal\n• Mark to schedule follow-up with design team next week\n• Update stakeholder deck with latest metrics by Wednesday\n• Product team to gather user feedback on prototype";
    } else if (textToSend === "List open questions") {
      return "Open questions that need answers:\n\n• What's the budget allocation for Q2 initiatives?\n• How do we prioritize between customer requests and technical debt?\n• What's the rollout timeline for international markets?\n• Do we have the necessary resources for this scope?\n• What are the key risks we need to mitigate?";
    } else if (textToSend === "Recap in detail") {
      return "Meeting Recap:\n\nThe team discussed the Q2 product roadmap with focus on three key initiatives.\n\nKey decisions made:\n• Prioritizing mobile experience over desktop features\n• Allocating 60% of engineering resources to core platform\n• Delaying international launch until Q3 for quality assurance";
    } else if (textToSend === "Generate agenda") {
      return "Next Meeting Agenda:\n\n1. Review Q2 roadmap priorities (15 min)\n2. Address open questions (20 min)\n3. Action item updates (10 min)\n4. Next steps and assignments (10 min)";
    } else if (textToSend.startsWith("Help me answer ")) {
      const question = textToSend.replace("Help me answer ", "");
      return answerTalkingPoints[question] ?? "Based on the discussion, I'd recommend addressing the key points raised earlier and aligning with the team's priorities.";
    } else if (textToSend.startsWith("What can I ask around ") || textToSend.startsWith("What can I ask? around ")) {
      const category = textToSend.replace("What can I ask around ", "").replace("What can I ask? around ", "").replace("?", "");
      return gapFillingQuestions[category] ?? "Here are some questions you might consider asking based on the discussion so far.";
    } else if (textToSend.startsWith("Help me understand ")) {
      const question = textToSend.replace("Help me understand ", "");
      return understandingResponses[question] ?? "Based on the meeting context, the team is discussing next steps and priorities.";
    }
    return "Based on the meeting context, here's what I found:\n\n• The team is aligned on moving forward with the proposed approach\n• There are a few open questions around timeline and resources\n• I recommend following up with stakeholders for additional input";
  };

  // Function to generate contextual follow-up prompts based on the response
  const generateFollowUpPrompts = (responseText: string, userPrompt: string): string[] => {
    // Check what type of response this was and generate relevant follow-ups
    if (userPrompt === "List action items") {
      return [
        "Who is responsible for these?",
        "What are the deadlines?",
        "Are there any blockers?"
      ];
    } else if (userPrompt === "List open questions") {
      return [
        "Which should we prioritize?",
        "Who can answer these?",
        "What's the impact if unresolved?"
      ];
    } else if (userPrompt === "Recap in detail") {
      return [
        "What are the next steps?",
        "Who needs to be informed?",
        "What are the risks?"
      ];
    } else if (userPrompt === "Generate agenda") {
      return [
        "Who should attend?",
        "What's the best time?",
        "Any pre-reads needed?"
      ];
    } else if (userPrompt.startsWith("Help me answer")) {
      return [
        "What else should I consider?",
        "Are there any risks?",
        "How do I present this?"
      ];
    } else if (userPrompt.startsWith("What can I ask")) {
      return [
        "Which is most critical?",
        "Who should address these?",
        "What's the timeline?"
      ];
    } else if (userPrompt.startsWith("Help me understand")) {
      return [
        "Can you elaborate further?",
        "What are the implications?",
        "What should I do next?"
      ];
    } else {
      // Default follow-ups for any other question
      return [
        "Tell me more about this",
        "What are the next steps?",
        "Are there any concerns?"
      ];
    }
  };

  const handleStopThinking = () => {
    // Cancel the timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Remove loading message
    setMessages(prevMessages => {
      const filteredMessages = prevMessages.filter(msg => !msg.isLoading);
      
      // If from keyboard, also remove the user message and restore prompt
      if (promptSource === 'keyboard') {
        // Remove the last user message
        const withoutLastUserMessage = filteredMessages.slice(0, -1);
        
        // Restore the prompt text and open keyboard with cursor at end
        setPromptText(lastPrompt);
        setFocusCursorAtEnd(true);
        setIsKeyboardOpen(true);
        
        // Reset focusCursorAtEnd after a short delay to allow the effect to run
        setTimeout(() => {
          setFocusCursorAtEnd(false);
        }, 100);
        
        return withoutLastUserMessage;
      }
      
      // If from button, remove both user and loading messages
      return filteredMessages.slice(0, -1);
    });

    setIsThinking(false);
    setIsTyping(false);
    setLastPrompt("");
  };

  const handlePromptClick = (prompt: string, index: number) => {
    if (selectedPromptIndex === index) {
      // Re-clicking the same prompt - generate a new suggestion
      const suggestions = promptSuggestions[prompt];
      const currentText = promptText.replace(`${prompt} `, "").replace(`${prompt} around `, "").replace("?", "");
      const currentSuggestionIndex = suggestions.findIndex(s => s === currentText || promptText.includes(s));
      const nextIndex = (currentSuggestionIndex + 1) % suggestions.length;
      
      // Format differently for "What can I ask?" vs other prompts
      if (prompt === "What can I ask") {
        setPromptText(`${prompt} around ${suggestions[nextIndex]}?`);
      } else {
        setPromptText(`${prompt} ${suggestions[nextIndex]}`);
      }
    } else {
      // New prompt selected - show first suggestion and open keyboard
      setSelectedPromptIndex(index);
      const suggestions = promptSuggestions[prompt];
      
      // Format differently for "What can I ask?" vs other prompts
      if (prompt === "What can I ask") {
        setPromptText(`${prompt} around ${suggestions[0]}?`);
      } else {
        setPromptText(`${prompt} ${suggestions[0]}`);
      }
      
      setIsKeyboardOpen(true);
    }
  };

  const handleSendPrompt = (files?: File[], textOverride?: string) => {
    const textToSend = textOverride ?? promptText;

    if (textToSend.trim() || (files && files.length > 0)) {
      const media = files?.map(file => ({
        url: URL.createObjectURL(file),
        type: file.type,
      }));

      // Save prompt info for potential cancellation
      setLastPrompt(textToSend);
      // Set source based on whether text came from a button (textOverride) or keyboard
      setPromptSource(textOverride ? 'button' : 'keyboard');

      // Add user message + loading indicator in one call (no setTimeout race)
      setMessages([...messages, { text: textToSend, isUser: true, media }, { text: '', isUser: false, isLoading: true }]);
      setIsThinking(true);

      // Call LLM for response (falls back to hardcoded on error)
      const conversationHistory = messages.filter(m => !m.isLoading).map(m => ({
        text: m.text,
        isUser: m.isUser,
      }));

      // Helper: apply response after a guaranteed delay so the thinking GIF is always visible
      const showResponseAfterDelay = (responseText: string) => {
        setTimeout(() => {
          setMessages(prevMessages => {
            const filteredMessages = prevMessages.filter(msg => !msg.isLoading);
            return [...filteredMessages, { text: responseText, isUser: false, followUpPrompts: generateFollowUpPrompts(responseText, textToSend) }];
          });
          setIsThinking(false);
          setLastPrompt("");
        }, 4000);
      };

      sendCopilotMessage(textToSend, conversationHistory, meetingContext)
        .then(llmResponse => showResponseAfterDelay(llmResponse))
        .catch(() => showResponseAfterDelay(getFallbackResponse(textToSend)));

      setPromptText("");
      setIsKeyboardOpen(false);
      setSelectedPromptIndex(null);
    }
  };

  const submitPromptCardResponse = (prompt: string, _response: string) => {
    setLastPrompt(prompt);
    setPromptSource('button');

    // Add user message + loading indicator in one call (no setTimeout race)
    setMessages([...messages, { text: prompt, isUser: true }, { text: '', isUser: false, isLoading: true }]);
    setIsThinking(true);

    // Call LLM for response (falls back to hardcoded on error)
    const conversationHistory = messages.filter(m => !m.isLoading).map(m => ({
      text: m.text,
      isUser: m.isUser,
    }));

    const showResponseAfterDelay = (responseText: string) => {
      setTimeout(() => {
        setMessages(prevMessages => {
          const filteredMessages = prevMessages.filter(msg => !msg.isLoading);
          return [
            ...filteredMessages,
            { text: responseText, isUser: false, followUpPrompts: generateFollowUpPrompts(responseText, prompt) }
          ];
        });
        setIsThinking(false);
        setLastPrompt("");
      }, 4000);
    };

    sendCopilotMessage(prompt, conversationHistory, meetingContext)
      .then(llmResponse => showResponseAfterDelay(llmResponse))
      .catch(() => showResponseAfterDelay(getFallbackResponse(prompt)));
  };

  const handleKeyboardClose = () => {
    setIsKeyboardOpen(false);
    setSelectedPromptIndex(null);
    // Don't clear promptText — preserve user's input for when they reopen
    setPendingFiles([]);
  };

  const handleInputBoxClick = () => {
    // Only open keyboard if not thinking
    if (!isThinking) {
      setIsKeyboardOpen(true);
    }
  };

  const handleAddButtonClick = () => {
    // Trigger file input
    if (fileInputRef.current && !isThinking) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      // Store files and open keyboard so they're passed as initialFiles
      setPendingFiles(fileArray);
      setIsKeyboardOpen(true);
    }
    // Reset input so the same file can be re-selected
    if (e.target) e.target.value = '';
  };

  // Track whether the last message is loading — when it flips from loading to
  // response, messages.length stays the same but this dep changes, so effects fire.
  const lastIsLoading = messages.length > 0 ? messages[messages.length - 1].isLoading : undefined;

  // Auto-scroll when a new message is added or response replaces loading
  useEffect(() => {
    if (messages.length > 0 && messagesContainerRef.current) {
      const lastMessage = messages[messages.length - 1];
      const container = messagesContainerRef.current;

      // When loading indicator appears, scroll to bottom to show it
      if (lastMessage.isLoading) {
        requestAnimationFrame(() => {
          container.scrollTo({
            top: container.scrollHeight,
            behavior: 'smooth',
          });
        });
        return;
      }

      // When a new Copilot response appears (loading replaced by text), scroll down
      if (!lastMessage.isUser && !lastMessage.isLoading && lastMessage.text) {
        requestAnimationFrame(() => {
          container.scrollTo({
            top: container.scrollHeight,
            behavior: 'smooth',
          });
        });
        return;
      }

      // Skip other non-user messages
      if (!lastMessage.isUser) {
        return;
      }

      // Find the index of this last user message
      let lastUserMessageIndex = -1;
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].isUser) {
          lastUserMessageIndex = i;
          break;
        }
      }

      if (lastUserMessageIndex !== -1) {
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const messageElement = userMessageRefs.current.get(lastUserMessageIndex);

            if (messageElement && container) {
              // Calculate the scroll target
              const baseScrollPosition = messageElement.offsetTop - container.offsetTop;

              // Scroll to 100px from top
              const scrollTarget = Math.max(0, baseScrollPosition - 100);

              container.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
              });
            }
          });
        });
      }
    }
  }, [messages.length, lastIsLoading]);

  // Typewriter effect for Copilot responses
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    
    // Start typewriter effect when a new Copilot message appears
    // Only trigger if we haven't already typed this message
    if (lastMessage && !lastMessage.isUser && !lastMessage.isLoading && lastMessage.text && lastMessage.text !== lastTypedMessageRef.current) {
      let cancelled = false;
      
      // Use setTimeout to defer state updates to avoid updating during render
      const initTimeout = setTimeout(() => {
        if (cancelled) return;
        
        setIsTyping(true);
        setDisplayedText("");
        
        const fullText = lastMessage.text;
        const words = fullText.split(/(\s+)/); // split keeping whitespace
        const totalWords = words.length;
        const duration = 600; // 0.6 seconds total
        const intervalTime = duration / totalWords;

        let currentWordIndex = 0;

        const typeNextWord = () => {
          if (cancelled) return;

          if (currentWordIndex < totalWords) {
            currentWordIndex++;
            setDisplayedText(words.slice(0, currentWordIndex).join(""));
            typewriterTimeoutRef.current = setTimeout(typeNextWord, intervalTime);
          } else {
            setIsTyping(false);
            lastTypedMessageRef.current = fullText;
          }
        };

        typeNextWord();
      }, 0);
      
      return () => {
        cancelled = true;
        clearTimeout(initTimeout);
        if (typewriterTimeoutRef.current) {
          clearTimeout(typewriterTimeoutRef.current);
          typewriterTimeoutRef.current = null;
        }
      };
    }
  }, [messages.length, lastIsLoading]);

  // Keep scrolling to bottom as typewriter reveals more text
  useEffect(() => {
    if (isTyping && messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      const interval = setInterval(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth',
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  // Title with verified badge icon
  const titleWithIcon = (
    <div className="flex items-center gap-[4px]">
      <span>Copilot</span>
      <div className="w-[17.465px] h-[17.465px]">
        <svg className="block size-full text-fy27-icon-success" fill="none" viewBox="0 0 17.4648 17.4648">
          <path d={svgPaths.p352b780} fill="currentColor" />
        </svg>
      </div>
    </div>
  );

  // Stop button component
  const stopButton = (
    <button
      onClick={handleStopThinking}
      className="absolute right-[13px] top-[8px] z-10"
    >
      <div className="bg-[rgba(88,75,223,0.3)] content-stretch flex items-center justify-center relative rounded-[99px] shrink-0 size-[32px]">
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
            <path d={svgPathsStop.p3460ed00} fill="#584BDF" />
          </svg>
        </div>
      </div>
    </button>
  );

  // Prompt input footer component
  const promptInput = (
    <div className="px-[16px] py-[10px] relative">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {/* FY27 MVP bebop composer (Figma 964:29786): surface/raised pill, 28px radius,
          circular icon.primary + button, black-disc send. Else: legacy dark pill. */}
      {isFy27Mvp ? (
        <div className="relative rounded-[28px] p-[6px] bg-fy27-surface-raised w-full flex items-center gap-[2px]">
          <button
            onClick={handleAddButtonClick}
            aria-label="Add attachment"
            className="shrink-0 size-[40px] grid place-items-center rounded-full text-fy27-icon-primary active:opacity-60 transition-opacity"
          >
            <svg className="size-[24px]" fill="currentColor" viewBox="0 0 16 16">
              <path d={addButtonSvg.p23b109c0} />
            </svg>
          </button>

          <button onClick={handleInputBoxClick} className="flex-[1_0_0] min-w-0 flex items-center h-[40px] pl-[4px]">
            <p className="text-fy27-text-secondary text-[17px] tracking-[-0.43px] leading-[22px] text-left truncate w-full" style={{ fontFamily: 'var(--font-sf-pro)' }}>
              Ask Copilot privately
            </p>
          </button>

          {isThinking ? (
            <button
              onClick={(e) => { e.stopPropagation(); handleStopThinking(); }}
              aria-label="Stop generating"
              className="shrink-0 size-[40px] grid place-items-center rounded-full text-fy27-icon-dominant cursor-pointer active:opacity-60 transition-opacity"
            >
              <svg className="size-[18px]" fill="currentColor" viewBox="0 0 20 20">
                <path d={svgPathsStop.p3460ed00} />
              </svg>
            </button>
          ) : promptText.trim() ? (
            /* Filled: mic + equaliser collapse to the send glyph in icon.dominant. */
            <button
              onClick={() => handleSendPrompt()}
              aria-label="Send"
              className="shrink-0 size-[40px] grid place-items-center rounded-full text-fy27-icon-dominant active:opacity-60 transition-opacity"
            >
              <svg className="w-[17px] h-[20px]" fill="currentColor" viewBox="0 0 17 20">
                <path d={svgPathsInputBox.p39d05380} />
              </svg>
            </button>
          ) : (
            /* Default (Figma 978:32141): mic + equaliser glyphs (icon.primary); EQ in a Surface/Primary disc. */
            <>
              <button
                onClick={handleInputBoxClick}
                aria-label="Dictate"
                className="shrink-0 size-[40px] grid place-items-center rounded-full text-fy27-icon-primary active:opacity-60 transition-opacity"
              >
                <svg className="w-[14px] h-[20px]" fill="currentColor" viewBox="0 0 14 20">
                  <path d="M13.25 9C13.6297 9 13.9435 9.28215 13.9932 9.64823L14 9.75V10.25C14 13.8094 11.245 16.7254 7.75098 16.9817L7.75 19.25C7.75 19.6642 7.41421 20 7 20C6.6203 20 6.30651 19.7178 6.25685 19.3518L6.25 19.25L6.25002 16.9818C2.83323 16.7316 0.122835 13.938 0.00406027 10.4863L0 10.25V9.75C0 9.33579 0.335786 9 0.75 9C1.1297 9 1.44349 9.28215 1.49315 9.64823L1.5 9.75V10.25C1.5 13.077 3.73445 15.3821 6.5336 15.4956L6.75 15.5H7.25C10.077 15.5 12.3821 13.2656 12.4956 10.4664L12.5 10.25V9.75C12.5 9.33579 12.8358 9 13.25 9ZM7 0C9.20914 0 11 1.79086 11 4V10C11 12.2091 9.20914 14 7 14C4.79086 14 3 12.2091 3 10V4C3 1.79086 4.79086 0 7 0ZM7 1.5C5.61929 1.5 4.5 2.61929 4.5 4V10C4.5 11.3807 5.61929 12.5 7 12.5C8.38071 12.5 9.5 11.3807 9.5 10V4C9.5 2.61929 8.38071 1.5 7 1.5Z" />
                </svg>
              </button>
              <button
                onClick={handleInputBoxClick}
                aria-label="Voice"
                className="shrink-0 size-[40px] grid place-items-center rounded-full bg-fy27-surface text-fy27-icon-primary active:opacity-60 transition-opacity"
              >
                <svg className="w-[16px] h-[18px]" fill="currentColor" viewBox="0 0 16.0011 18">
                  <path d="M7.99889 0C8.37858 0 8.69238 0.282154 8.74204 0.648229L8.74889 0.75V17.25C8.74889 17.6642 8.4131 18 7.99889 18C7.61919 18 7.3054 17.7178 7.25573 17.3518L7.24889 17.25V0.75C7.24889 0.335786 7.58467 0 7.99889 0ZM4.25383 3C4.63353 3 4.94732 3.28215 4.99699 3.64823L5.00383 3.75V14.25C5.00383 14.6642 4.66805 15 4.25383 15C3.87414 15 3.56034 14.7178 3.51068 14.3518L3.50383 14.25V3.75C3.50383 3.33579 3.83962 3 4.25383 3ZM11.7439 3C12.1236 3 12.4374 3.28215 12.4871 3.64823L12.4939 3.75V14.25C12.4939 14.6642 12.1582 15 11.7439 15C11.3642 15 11.0505 14.7178 11.0008 14.3518L10.9939 14.25V3.75C10.9939 3.33579 11.3297 3 11.7439 3ZM0.75 6C1.1297 6 1.44349 6.28215 1.49315 6.64823L1.5 6.75V11.25C1.5 11.6642 1.16421 12 0.75 12C0.370304 12 0.0565088 11.7178 0.00684643 11.3518L0 11.25V6.75C0 6.33579 0.335786 6 0.75 6ZM15.2511 6C15.6308 6 15.9446 6.28215 15.9942 6.64823L16.0011 6.75V11.2487C16.0011 11.6629 15.6653 11.9987 15.2511 11.9987C14.8714 11.9987 14.5576 11.7165 14.5079 11.3504L14.5011 11.2487V6.75C14.5011 6.33579 14.8369 6 15.2511 6Z" />
                </svg>
              </button>
            </>
          )}
        </div>
      ) : (
      <div className="relative rounded-[1000px] h-[48px] bg-black opacity-67 w-full">
        <div className="absolute content-stretch flex gap-[12px] items-center left-0 pl-[6px] pr-[8px] top-[6px] w-full">
          <button onClick={handleAddButtonClick}>
            {/* Add button */}
            <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center rounded-[40px] shrink-0 size-[36px]">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 16 16">
                <path d={addButtonSvg.p23b109c0} />
              </svg>
            </div>
          </button>

          {/* Placeholder text */}
          <button onClick={handleInputBoxClick} className="flex flex-[1_0_0] flex-col h-[24px] justify-center min-h-px min-w-px">
            <p className="text-[#6e6e6e] text-[17px] tracking-[-0.41px] leading-[22px] text-left whitespace-pre-wrap" style={{ fontFamily: 'var(--font-sf-pro)' }}>
              Ask Copilot privately
            </p>
          </button>

          {/* Send button - only show when NOT thinking */}
          {!isThinking && (
            <div className="content-stretch flex items-center justify-center shrink-0 size-[32px]">
              <div className="content-stretch flex items-center shrink-0">
                <svg className="w-[17.387px] h-[20px]" fill="#a6a6a6" viewBox="0 0 17 20">
                  <path d={svgPathsInputBox.p39d05380} />
                </svg>
              </div>
            </div>
          )}

          {/* Stop button - only show when thinking */}
          {isThinking && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleStopThinking();
              }}
              className="bg-[rgba(135,139,251,0.3)] content-stretch flex items-center justify-center rounded-[99px] shrink-0 size-[32px] cursor-pointer"
            >
              <div className="relative shrink-0 size-[20px]">
                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsStop.p3460ed00} fill="#878BFB" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      )}
    </div>
  );

  return (
    <>
      <MultitaskingPanel
        title={titleWithIcon}
        onClose={onClose}
        showFooter={true}
        footerComponent={promptInput}
      >
        {/* Scrollable Content - Prompts positioned near bottom for easy tap access */}
        <div className="flex flex-col justify-end h-full">
          {messages.length === 0 ? (
            isFy27Mvp ? (
              /* FY27 MVP bebop empty state (Figma 233:38071): left greeting + vertical pill chips. */
              <div className="flex flex-col justify-end h-full pb-[8px]">
                <div className="px-[24px] pt-[20px] pb-[10px]">
                  <p className="text-fy27-text-primary text-[22px] leading-[28px] tracking-[-0.26px] font-semibold" style={{ fontFamily: 'var(--font-sf-pro)' }}>
                    Udayan, need help in your meeting?
                  </p>
                </div>
                <div className="flex flex-col items-start gap-[12px] px-[20px] pb-[8px]">
                  {bebopPrompts.map((p) => (
                    <button
                      key={p}
                      onClick={() => submitPromptCardResponse(p, "")}
                      className="inline-flex items-center min-h-[40px] px-[12px] py-[8px] rounded-full bg-fy27-surface-chat-incoming text-fy27-text-primary text-[15px] leading-[20px] tracking-[-0.23px] font-semibold active:opacity-60 transition-opacity"
                      style={{ fontFamily: 'var(--font-sf-pro)' }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
            <div className="flex flex-col h-full px-[22px] pb-[8px] pt-[0px] pr-[0px] pl-[0px]">
              {/* Large Copilot Logo in center */}
              <div className="flex items-center justify-center flex-1">
                <div className="w-[48px] h-[48px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 48 48">
                    <path d={svgPathsNew.p8e63130} fill="#616161" />
                  </svg>
                </div>
              </div>

              {/* Horizontally scrollable prompt cards */}
              <HorizontalScrollContainer>
                <div className="flex gap-[8px]">
                  {/* List action items */}
                  <button
                    className="bg-[#212121] flex flex-col items-center justify-center px-[16px] py-[12px] rounded-[20px] relative shrink-0 min-w-[140px] ml-[16px]"
                    onClick={() => submitPromptCardResponse(
                      "List action items",
                      "Here are the action items from the meeting:\n\n• Sarah to finalize Q2 roadmap presentation by Friday\n• Engineering team to review API integration proposal\n• Mark to schedule follow-up with design team next week\n• Update stakeholder deck with latest metrics by Wednesday\n• Product team to gather user feedback on prototype"
                    )}
                  >
                    <div className="absolute border-[#3d3d3d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-col gap-[8px] items-start h-[52px]">
                      <div className="w-[24px] h-[24px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                          <path d={svgPathsNew.p1ad6dd00} fill="url(#paint0_linear_72_6731)" />
                          <path d={svgPathsNew.p2ba29680} fill="url(#paint1_linear_72_6731)" />
                          <path d={svgPathsNew.pf9d92c0} fill="url(#paint2_linear_72_6731)" />
                          <path d={svgPathsNew.p1bd7aa00} fill="url(#paint3_linear_72_6731)" />
                          <path d={svgPathsNew.p1d6e7300} fill="url(#paint4_linear_72_6731)" />
                          <defs>
                            <linearGradient id="paint0_linear_72_6731" x1="9.35" x2="20.9" y1="3" y2="19" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#36DFF1" />
                              <stop offset="1" stopColor="#0094F0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_72_6731" x1="9.35" x2="20.9" y1="3" y2="19" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#36DFF1" />
                              <stop offset="1" stopColor="#0094F0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_72_6731" x1="9.35" x2="20.9" y1="3" y2="19" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#36DFF1" />
                              <stop offset="1" stopColor="#0094F0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_72_6731" x1="9.35" x2="20.9" y1="3" y2="19" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#36DFF1" />
                              <stop offset="1" stopColor="#0094F0" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_72_6731" x1="3.66463" x2="7.23209" y1="6.12697" y2="19.1474" gradientUnits="userSpaceOnUse">
                              <stop offset="0.125321" stopColor="#9C6CFE" />
                              <stop offset="1" stopColor="#7A41DC" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-[15px] text-white tracking-[-0.23px] leading-[20px] font-semibold" style={{ fontFamily: 'var(--font-sf-pro)' }}>
                        List action items
                      </div>
                    </div>
                  </button>

                  {/* List open questions */}
                  <button
                    className="bg-[#212121] flex flex-col items-center justify-center px-[16px] py-[12px] rounded-[20px] relative shrink-0 min-w-[140px]"
                    onClick={() => submitPromptCardResponse(
                      "List open questions",
                      "Open questions that need answers:\n\n• What's the budget allocation for Q2 initiatives?\n• How do we prioritize between customer requests and technical debt?\n• What's the rollout timeline for international markets?\n• Do we have the necessary resources for this scope?\n• What are the key risks we need to mitigate?"
                    )}
                  >
                    <div className="absolute border-[#3d3d3d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-col gap-[8px] items-start h-[52px]">
                      <div className="w-[24px] h-[24px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                          <g>
                            <path d={svgPathsNew.p2f963280} fill="url(#paint0_radial_72_6703)" />
                            <path d={svgPathsNew.p2f963280} fill="url(#paint1_linear_72_6703)" />
                            <path d={svgPathsNew.p2f963280} fill="url(#paint2_radial_72_6703)" fillOpacity="0.2" />
                            <path d={svgPathsNew.p2f963280} fill="url(#paint3_radial_72_6703)" fillOpacity="0.2" />
                            <path d={svgPathsNew.p2f963280} fill="url(#paint4_radial_72_6703)" fillOpacity="0.2" />
                            <path d={svgPathsNew.p2f963280} fill="url(#paint5_radial_72_6703)" fillOpacity="0.2" />
                          </g>
                          <rect fill="url(#paint6_linear_72_6703)" height="8.44835" rx="0.777036" width="1.55407" x="11.2217" y="9.99927" />
                          <rect fill="url(#paint7_linear_72_6703)" height="2.99933" rx="0.777036" width="1.55407" x="11.2217" y="5.99829" />
                          <path d={svgPathsNew.p23ee2c00} fill="url(#paint8_linear_72_6703)" />
                          <path d={svgPathsNew.p5711100} fill="url(#paint9_linear_72_6703)" />
                          <path d={svgPathsNew.p3115a700} fill="url(#paint10_linear_72_6703)" />
                          <defs>
                            <radialGradient id="paint0_radial_72_6703" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.93147 17.1801 -25.9278 8.28513 6.99964 3.96344)">
                              <stop stopColor="#FFE06B" />
                              <stop offset="0.376456" stopColor="#FFA43D" />
                              <stop offset="1" stopColor="#E67505" />
                            </radialGradient>
                            <linearGradient id="paint1_linear_72_6703" x1="12.0002" x2="12.0002" y1="2" y2="21.9993" gradientUnits="userSpaceOnUse">
                              <stop offset="0.792411" stopColor="#D34719" stopOpacity="0" />
                              <stop offset="0.834821" stopColor="#D34719" />
                              <stop offset="1" stopColor="#D34719" stopOpacity="0" />
                            </linearGradient>
                            <radialGradient id="paint2_radial_72_6703" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.65212 9.96846) rotate(46.8183) scale(1.98967 1.59078)">
                              <stop offset="0.165145" stopColor="#741C06" />
                              <stop offset="0.854115" stopColor="#741C06" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint3_radial_72_6703" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.0002 7.77419) rotate(90) scale(2.50675 1.88007)">
                              <stop offset="0.165145" stopColor="#741C06" />
                              <stop offset="0.854115" stopColor="#741C06" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint4_radial_72_6703" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.3281 9.89567) rotate(133.802) scale(2.38941 1.79206)">
                              <stop offset="0.165145" stopColor="#741C06" />
                              <stop offset="0.854115" stopColor="#741C06" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint5_radial_72_6703" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.0002 13.7143) rotate(-180) scale(1.91514 5.51584)">
                              <stop offset="0.165145" stopColor="#741C06" />
                              <stop offset="0.777027" stopColor="#741C06" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="paint6_linear_72_6703" x1="11.9987" x2="11.9987" y1="9.99927" y2="18.4521" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFF2BE" />
                              <stop offset="0.43735" stopColor="#FFD638" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_72_6703" x1="11.2217" x2="12.7758" y1="7.49796" y2="7.49796" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFF2BE" />
                              <stop offset="1" stopColor="#FFD638" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_72_6703" x1="8.15351" x2="9.1988" y1="9.81483" y2="8.76953" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFF2BE" />
                              <stop offset="1" stopColor="#FFD638" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_72_6703" x1="14.7631" x2="15.8005" y1="8.80883" y2="9.84627" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFF2BE" />
                              <stop offset="1" stopColor="#FFD638" />
                            </linearGradient>
                            <linearGradient id="paint10_linear_72_6703" x1="11.3463" x2="12.2893" y1="17.4961" y2="19.9948" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFC7A3" />
                              <stop offset="1" stopColor="#FF9C70" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-[15px] text-white tracking-[-0.23px] leading-[20px] font-semibold" style={{ fontFamily: 'var(--font-sf-pro)' }}>
                        List open questions
                      </div>
                    </div>
                  </button>

                  {/* Recap in detail */}
                  <button
                    className="bg-[#212121] flex flex-col items-center justify-center px-[16px] py-[12px] rounded-[20px] relative shrink-0 min-w-[140px]"
                    onClick={() => submitPromptCardResponse(
                      "Recap in detail",
                      "Meeting Recap:\n\nThe team discussed the Q2 product roadmap with focus on three key initiatives: mobile app improvements, API integration, and international expansion.\n\nKey decisions made:\n• Prioritizing mobile experience over desktop features\n• Allocating 60% of engineering resources to core platform\n• Delaying international launch until Q3 for quality assurance\n\nNext steps include finalizing the budget proposal, conducting user research, and scheduling technical design reviews with the engineering team."
                    )}
                  >
                    <div className="absolute border-[#3d3d3d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-col gap-[8px] items-start h-[52px]">
                      <div className="w-[24px] h-[24px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                          <path d={svgPathsShortcuts.p28fa8f00} fill="url(#paint0_linear_72_6890)" />
                          <path d={svgPathsShortcuts.p1478d900} fill="url(#paint1_linear_72_6890)" />
                          <path d={svgPathsShortcuts.p1fd6c380} fill="url(#paint2_linear_72_6890)" />
                          <path d={svgPathsShortcuts.p3f35a800} fill="url(#paint3_linear_72_6890)" />
                          <defs>
                            <linearGradient id="paint0_linear_72_6890" x1="13.1372" x2="15.4437" y1="8.46783" y2="14.7088" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFA43D" />
                              <stop offset="1" stopColor="#FB5937" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_72_6890" x1="0.996656" x2="6.04366" y1="16.9505" y2="21.9671" gradientUnits="userSpaceOnUse">
                              <stop offset="0.255" stopColor="#FFD394" />
                              <stop offset="1" stopColor="#FF921F" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_72_6890" x1="20.2399" x2="17.1376" y1="3.7506" y2="6.66782" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F97DBD" />
                              <stop offset="1" stopColor="#DD3CE2" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_72_6890" x1="16.4946" x2="11.4203" y1="8.95455" y2="6.7359" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FF921F" />
                              <stop offset="1" stopColor="#FFE994" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-[15px] text-white tracking-[-0.23px] leading-[20px] font-semibold" style={{ fontFamily: 'var(--font-sf-pro)' }}>
                        Recap in detail
                      </div>
                    </div>
                  </button>

                  {/* Generate agenda */}
                  <button
                    className="bg-[#212121] flex flex-col items-center justify-center px-[16px] py-[12px] rounded-[20px] relative shrink-0 min-w-[140px] mr-[16px]"
                    onClick={() => submitPromptCardResponse(
                      "Generate agenda",
                      "Next Meeting Agenda:\n\n1. Review Q2 roadmap priorities (15 min)\n   • Discuss resource allocation\n   • Confirm timeline milestones\n\n2. Address open questions (20 min)\n   • Budget approval status\n   • International expansion scope\n   • Technical dependencies\n\n3. Action item updates (10 min)\n   • Design review completion\n   • API integration progress\n   • Stakeholder feedback\n\n4. Next steps and assignments (10 min)"
                    )}
                  >
                    <div className="absolute border-[#3d3d3d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
                    <div className="flex flex-col gap-[8px] items-start h-[52px]">
                      <div className="w-[24px] h-[24px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                          <g>
                            <path d={svgPathsShortcuts.p372dba80} fill="url(#paint0_linear_72_6914)" />
                            <path d={svgPathsShortcuts.p372dba80} fill="url(#paint1_radial_72_6914)" fillOpacity="0.5" />
                          </g>
                          <path d={svgPathsShortcuts.p3f00a500} fill="url(#paint2_linear_72_6914)" />
                          <path d={svgPathsShortcuts.p3efeb200} fill="url(#paint3_linear_72_6914)" />
                          <path d={svgPathsShortcuts.p37eed1f0} fill="url(#paint4_linear_72_6914)" />
                          <path d={svgPathsShortcuts.p25864f00} fill="url(#paint5_linear_72_6914)" />
                          <path d={svgPathsShortcuts.p8e10880} fill="url(#paint6_linear_72_6914)" />
                          <defs>
                            <linearGradient id="paint0_linear_72_6914" x1="15.2" x2="16.8215" y1="2" y2="18.8699" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#6CE0FF" />
                              <stop offset="1" stopColor="#4894FE" />
                            </linearGradient>
                            <radialGradient id="paint1_radial_72_6914" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-8.66667 9.09353 -5.69747 -4.77248 20.6667 2.625)">
                              <stop offset="0.362364" stopColor="#4A43CB" />
                              <stop offset="1" stopColor="#4A43CB" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="paint2_linear_72_6914" x1="16.4883" x2="14.7383" y1="4.91667" y2="7.83333" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#9FF0F9" />
                              <stop offset="1" stopColor="#B3E0FF" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_72_6914" x1="15.0296" x2="18.7298" y1="16.3085" y2="20.0179" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFA43D" />
                              <stop offset="1" stopColor="#FB5937" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_72_6914" x1="11.3868" x2="14.4562" y1="19.976" y2="23.042" gradientUnits="userSpaceOnUse">
                              <stop offset="0.255" stopColor="#FFD394" />
                              <stop offset="1" stopColor="#FF921F" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_72_6914" x1="21.9045" x2="19.9256" y1="13.1155" y2="15.0159" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F97DBD" />
                              <stop offset="1" stopColor="#DD3CE2" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_72_6914" x1="19.6573" x2="16.4883" y1="16.292" y2="14.9024" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FF921F" />
                              <stop offset="1" stopColor="#FFE994" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-[15px] text-white tracking-[-0.23px] leading-[20px] font-semibold" style={{ fontFamily: 'var(--font-sf-pro)' }}>
                        Generate agenda
                      </div>
                    </div>
                  </button>
                  {/* Spacer to ensure right padding is visible when scrolled to end */}
                  <div style={{ width: '0px', height: '1px', flexShrink: 0 }} />
                </div>
              </HorizontalScrollContainer>
            </div>
            )
          ) : (
            <div ref={messagesContainerRef} className="flex flex-col gap-[16px] overflow-y-auto px-[22px] pb-[8.732px]">
              {messages.map((message, index) => {
                // Only show follow-up prompts on the last Copilot message
                const isLastCopilotMessage = !message.isUser && index === messages.length - 1;
                // Determine text to show (typewriter effect for last message)
                const textToShow = isLastCopilotMessage && isTyping ? displayedText : message.text;
                
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      if (message.isUser && el) {
                        userMessageRefs.current.set(index, el);
                      }
                    }}
                    className="flex flex-col gap-[8px]"
                  >
                    {message.isUser ? (
                      // User message - show as purple bubble aligned right
                      <div className="flex flex-col items-end gap-[4px]">
                        {/* Media attachments */}
                        {message.media && message.media.length > 0 && (
                          <div className="flex gap-[4px] flex-wrap justify-end max-w-[80%]">
                            {message.media.map((item, idx) => (
                              <div key={idx} className="rounded-[12px] overflow-hidden max-w-[200px]">
                                {item.type.startsWith('image/') ? (
                                  <img src={item.url} alt="attachment" className="w-full h-auto" />
                                ) : (
                                  <div className="w-[200px] h-[150px] bg-[#2a2a2a] flex items-center justify-center rounded-[12px]">
                                    <div className="text-white text-[48px]">🎥</div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        {/* Text bubble - only show if there's text */}
                        {message.text && (
                          <div className={isFy27Mvp
                            ? "bg-fy27-surface-chat-incoming flex items-center justify-end px-[16px] py-[12px] rounded-[16px] max-w-[80%]"
                            : "bg-[#584bdf] content-stretch flex items-center justify-end px-[16.533px] py-[12.4px] rounded-[16.533px] max-w-[80%]"}>
                            <p
                              className={`text-[17px] tracking-[-0.41px] leading-[22px] ${isFy27Mvp ? "text-fy27-text-primary" : "text-white"}`}
                              style={{ fontFamily: 'var(--font-sf-pro)', wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                            >
                              {message.text}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Copilot response - show without bubble
                      <div className="flex flex-col gap-[12px]">
                        {message.isLoading ? (
                          // Loading state with Copilot icon and morse code animation
                          <div className="flex gap-[6px] items-center">
                            <div className="w-[20px] h-[20px]">
                              <svg className="block size-full" fill="none" viewBox="0 0 20.2314 20.2314">
                                <path d={svgPathsLoader.p36523980} fill="#808080" />
                              </svg>
                            </div>
                            <div className="w-[37px] h-[4px]">
                              <img alt="" className="w-full h-full object-cover" src={imgLoader} />
                            </div>
                          </div>
                        ) : (
                          <>
                            {/* AI generated badge with Copilot icon — bebop (MVP) drops it. */}
                            {!isFy27Mvp && (
                              <div className="flex items-center gap-[4px]">
                                <div className="w-[20.231px] h-[20.231px]">
                                  <svg className="block size-full" fill="none" viewBox="0 0 20.2314 20.2314">
                                    <path d={svgPathsLoader.p36523980} fill="#808080" />
                                  </svg>
                                </div>
                                <div className="bg-[#3d3d3d] content-stretch flex items-center justify-center px-[8.093px] py-[2.023px] rounded-[8.093px]">
                                  <p className="text-[12.139px] leading-[16.185px] text-[#d6d6d6]" style={{ fontFamily: 'var(--font-sf-pro)' }}>
                                    AI generated
                                  </p>
                                </div>
                              </div>
                            )}

                            {/* Copilot response text - plain text without bubble */}
                            <div className="flex items-center w-full">
                              <div
                                className={`flex-1 text-[17px] tracking-[-0.41px] leading-[22px] ${isFy27Mvp ? "text-fy27-text-primary" : "text-white"}`}
                                style={{ fontFamily: 'var(--font-sf-pro)' }}
                              >
                                {formatResponse(textToShow)}
                              </div>
                            </div>

                            {/* Follow-up prompt pills - only on the most recent Copilot message after typing. */}
                            {isLastCopilotMessage && !isTyping && message.followUpPrompts && message.followUpPrompts.length > 0 && (
                              isFy27Mvp ? (
                                /* bebop: outline-only pills, stacked vertically, right-aligned, no arrow (Figma 233:39667). */
                                <div className="flex flex-col items-end gap-[8px] py-[4px]">
                                  {message.followUpPrompts.map((prompt, idx) => (
                                    <button
                                      key={idx}
                                      className="flex items-center justify-center px-[14px] py-[10px] rounded-[16px] border border-fy27-surface-border shrink-0 max-w-full active:opacity-60 transition-opacity"
                                      onClick={() => handleSendPrompt(undefined, prompt)}
                                    >
                                      <p className="text-fy27-text-primary text-[15px] tracking-[-0.23px] leading-[20px] text-left" style={{ fontFamily: 'var(--font-sf-pro)' }}>
                                        {prompt}
                                      </p>
                                    </button>
                                  ))}
                                </div>
                              ) : (
                              <HorizontalScrollContainer className="-mx-[22px] px-[22px] py-[4px]">
                                <div className="flex gap-[12px] items-center">
                                  {message.followUpPrompts.map((prompt, idx) => (
                                    <button
                                      key={idx}
                                      className="content-stretch flex gap-[8px] items-center justify-center p-[12px] rounded-[12px] shrink-0 relative"
                                      onClick={() => handleSendPrompt(undefined, prompt)}
                                    >
                                      <div className="absolute border-[#878bfb] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
                                      <div className="flex flex-col gap-[5.822px] items-start rounded-[5.822px]">
                                        <p className="text-[17px] tracking-[-0.41px] leading-[22px] text-white whitespace-nowrap font-normal" style={{ fontFamily: 'var(--font-sf-pro)' }}>
                                          {prompt}
                                        </p>
                                      </div>
                                      <div className="h-[20px] w-[17.387px]">
                                        <svg className="block size-full" fill="white" viewBox="0 0 17.3869 20">
                                          <path d={arrowEnterSvg.p4a6f140} />
                                        </svg>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </HorizontalScrollContainer>
                              )
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </MultitaskingPanel>
      {isKeyboardOpen && (
        <NativeInputBar
          value={promptText}
          onChange={setPromptText}
          onSend={(files) => {
            handleSendPrompt(files);
            setPendingFiles([]);
          }}
          onClose={handleKeyboardClose}
          placeholder="Ask Copilot privately"
          theme={isFy27Mvp ? theme : "dark"}
          showPrompts={!isFy27Mvp}
          prompts={prompts}
          selectedPromptIndex={selectedPromptIndex}
          onPromptClick={handlePromptClick}
          focusCursorAtEnd={focusCursorAtEnd}
          initialFiles={pendingFiles}
        />
      )}
    </>
  );
}