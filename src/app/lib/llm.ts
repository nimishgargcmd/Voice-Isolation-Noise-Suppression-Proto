// LLM helper — calls the Vite dev-server proxy at /api/openai
// which forwards to OpenAI Chat Completions API.

export interface MeetingContext {
  meetingTitle: string;
  agendaItems: Array<{ title: string; duration: number; status: string }>;
  currentTopic: string;
  participantCount: number;
  raisedHands: string[];
  isTimerPaused: boolean;
}

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

// ── Core fetch helper ──────────────────────────────────────────────

async function callOpenAI(
  messages: ChatMessage[],
  maxTokens = 300,
): Promise<string> {
  const res = await fetch("/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, max_tokens: maxTokens }),
  });

  const data = await res.json();

  if (data.error) {
    throw new Error(typeof data.error === "string" ? data.error : data.error.message ?? "LLM request failed");
  }

  return data.choices?.[0]?.message?.content?.trim() ?? "";
}

// ── Chat panel: simulate a meeting participant ─────────────────────

export async function sendChatMessage(
  userText: string,
  participantName: string,
  conversationHistory: Array<{ sender: string; text: string; isMe: boolean }>,
  meetingTitle: string,
): Promise<string> {
  const system = [
    `You are simulating a meeting participant named "${participantName}" in a Microsoft Teams video call.`,
    `The meeting is titled "${meetingTitle}".`,
    "Respond naturally in 1-2 short sentences, like a real coworker would in a work chat.",
    "Be conversational, helpful, and concise. Do not use emojis. Do not use markdown formatting.",
    "Never break character or mention that you are an AI.",
    "IMPORTANT: Never prefix your response with your name or any label like '[Name]:'. Just reply with the message text directly.",
  ].join(" ");

  // Build conversation history (last 10 messages)
  const history: ChatMessage[] = conversationHistory.slice(-10).map((msg) => ({
    role: msg.isMe ? ("user" as const) : ("assistant" as const),
    content: msg.text,
  }));

  // Add the new user message
  history.push({ role: "user", content: userText });

  const messages: ChatMessage[] = [{ role: "system", content: system }, ...history];

  return callOpenAI(messages, 150);
}

// ── DM page: simulate a 1:1 chat recipient ─────────────────────────

export async function sendDMMessage(
  userText: string,
  recipientName: string,
  conversationHistory: Array<{ sender: string; text: string; isMe: boolean }>,
): Promise<string> {
  const system = [
    `You are simulating "${recipientName}" replying in a 1:1 direct-message chat in Microsoft Teams.`,
    "Respond naturally in 1-2 short sentences, like a real coworker texting a colleague.",
    "Be conversational, warm, and concise. Do not use emojis. Do not use markdown formatting.",
    "Never break character or mention that you are an AI.",
    "IMPORTANT: Never prefix your response with your name or any label like '[Name]:'. Just reply with the message text directly.",
  ].join(" ");

  const history: ChatMessage[] = conversationHistory.slice(-10).map((msg) => ({
    role: msg.isMe ? ("user" as const) : ("assistant" as const),
    content: msg.text,
  }));
  history.push({ role: "user", content: userText });

  const messages: ChatMessage[] = [{ role: "system", content: system }, ...history];
  return callOpenAI(messages, 150);
}

// ── RTT panel: simulate a spoken line from a meeting participant ───

export async function sendRttUtterance(
  participantName: string,
  meetingTitle: string,
  currentTopic: string,
  recentTranscript: Array<{ name: string; text: string }>,
): Promise<string> {
  const system = [
    `You are simulating what "${participantName}" says out loud in a live Microsoft Teams meeting titled "${meetingTitle}".`,
    currentTopic ? `The current agenda topic is "${currentTopic}".` : "",
    "Produce ONE short spoken line (1 sentence, ~6-16 words) as if transcribed live from the call.",
    "Sound like natural spoken conversation, not written chat — it can be a thought, question, or reaction.",
    "Do not repeat what was just said. Do not use emojis or markdown.",
    "Never break character or mention that you are an AI.",
    "IMPORTANT: Never prefix with a name or label. Reply with the spoken text only.",
  ].filter(Boolean).join(" ");

  const history: ChatMessage[] = recentTranscript.slice(-8).map((line) => ({
    role: "assistant" as const,
    content: `${line.name}: ${line.text}`,
  }));
  history.push({ role: "user", content: `What does ${participantName} say next?` });

  const messages: ChatMessage[] = [{ role: "system", content: system }, ...history];
  return callOpenAI(messages, 60);
}

// ── Copilot panel: AI meeting assistant ────────────────────────────

export async function sendCopilotMessage(
  userText: string,
  conversationHistory: Array<{ text: string; isUser: boolean }>,
  meetingContext?: MeetingContext,
): Promise<string> {
  const contextLines: string[] = [
    "You are Microsoft Teams Copilot, an AI meeting assistant embedded in a Teams video call.",
    "Help the user with meeting-related queries: summarizing discussions, listing action items, answering questions about the meeting, and providing recommendations.",
    "Use bullet points for lists. Keep responses focused and concise (3-6 bullet points for lists, 2-3 sentences for explanations).",
    "Do not use emojis. Use plain text, not markdown headers.",
  ];

  if (meetingContext) {
    contextLines.push("");
    contextLines.push("CURRENT MEETING CONTEXT:");
    contextLines.push(`Meeting title: ${meetingContext.meetingTitle}`);
    contextLines.push(`Participants: ${meetingContext.participantCount} people in the call`);
    contextLines.push(`Current agenda topic: "${meetingContext.currentTopic}" ${meetingContext.isTimerPaused ? "(timer paused)" : "(timer running)"}`);
    contextLines.push("Agenda:");
    meetingContext.agendaItems.forEach((item, i) => {
      contextLines.push(`  ${i + 1}. "${item.title}" — ${item.duration} min — ${item.status}`);
    });
    if (meetingContext.raisedHands.length > 0) {
      contextLines.push(`Raised hands: ${meetingContext.raisedHands.join(", ")}`);
    }
  }

  const system = contextLines.join("\n");

  // Build conversation history (last 10 messages)
  const history: ChatMessage[] = conversationHistory
    .filter((m) => !m.isUser || m.text.trim())
    .slice(-10)
    .map((msg) => ({
      role: msg.isUser ? ("user" as const) : ("assistant" as const),
      content: msg.text,
    }));

  history.push({ role: "user", content: userText });

  const messages: ChatMessage[] = [{ role: "system", content: system }, ...history];

  return callOpenAI(messages, 500);
}
