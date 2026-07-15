"use client";

import TanixMessage from "./TanixMessage";
import { useTanix } from "./hooks";
import TanixTyping from "./TanixTyping";

export default function TanixMessages() {
  
  const { messages, isTyping } = useTanix();

  return (
    <div className="flex flex-1 flex-col gap-4 px-6 py-6">

      {messages.map((message) => (
        <TanixMessage
          key={message.id}
          message={message}
        />
      ))}

      {isTyping && <TanixTyping />}

    </div>
  );
}