/**
 * Keyword-based fallback reply, used when the LLM call fails. Lifted verbatim
 * from the in-meeting ChatPanel so the meeting chat and the DM pages share the
 * same offline fallback behavior.
 */
export function generateContextualResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes("?")) {
    if (lowerMessage.includes("when") || lowerMessage.includes("time") || lowerMessage.includes("schedule")) {
      return "Let me check my calendar. How about next Tuesday at 2pm?";
    } else if (lowerMessage.includes("who") || lowerMessage.includes("assign")) {
      return "I can take that on. I'll update the team once it's done.";
    } else if (lowerMessage.includes("how")) {
      return "Good question. I think we should follow the same approach we used last quarter.";
    } else if (lowerMessage.includes("what") || lowerMessage.includes("which")) {
      return "I'm thinking option 2 makes more sense given our timeline. What do you think?";
    } else if (lowerMessage.includes("where")) {
      return "I'll share the link in the chat right after this.";
    } else if (lowerMessage.includes("why")) {
      return "That's because we got feedback from stakeholders to prioritize mobile first.";
    } else {
      return "That's a great question. Let me follow up with you after the call.";
    }
  } else if (lowerMessage.includes("thanks") || lowerMessage.includes("thank")) {
    return "No problem! Happy to help.";
  } else if (lowerMessage.includes("agree") || lowerMessage.includes("sounds good") || lowerMessage.includes("perfect")) {
    return "Great, glad we're aligned on this!";
  } else if (lowerMessage.includes("meeting") || lowerMessage.includes("call")) {
    return "I'll send out the invite. Does the same time next week work for everyone?";
  } else if (lowerMessage.includes("design") || lowerMessage.includes("figma") || lowerMessage.includes("mockup")) {
    return "The designs look good! I'll review them in more detail and share my feedback.";
  } else if (lowerMessage.includes("timeline") || lowerMessage.includes("deadline") || lowerMessage.includes("schedule")) {
    return "We should be able to hit that deadline if we start this week.";
  } else if (lowerMessage.includes("test") || lowerMessage.includes("bug") || lowerMessage.includes("issue")) {
    return "I noticed that too. Let me file a ticket and we can prioritize it for the next sprint.";
  } else if (lowerMessage.includes("share") || lowerMessage.includes("send") || lowerMessage.includes("link")) {
    return "Just shared it in the team channel. Let me know if you can't access it.";
  } else if (lowerMessage.includes("mobile") || lowerMessage.includes("app")) {
    return "Agreed. Mobile should definitely be our priority given the user data.";
  } else if (lowerMessage.includes("update") || lowerMessage.includes("status") || lowerMessage.includes("progress")) {
    return "We're making good progress. Should have an update by end of day.";
  } else if (lowerMessage.includes("help") || lowerMessage.includes("support")) {
    return "Of course! What do you need help with?";
  } else {
    const genericResponses = [
      "Totally agree with that approach.",
      "Makes sense. Let's move forward with that.",
      "Good point! I hadn't thought of it that way.",
      "That works for me. Let's do it.",
      "I like that idea. Let's discuss it more in the meeting.",
      "Sounds like a solid plan. I'm on board.",
    ];
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  }
}
