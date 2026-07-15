"use client";

import { useTanix } from "./hooks";

import TanixMessages from "./TanixMessages";
import TanixQuickActions from "./TanixQuickActions";
import TanixWelcome from "./TanixWelcome";

export default function TanixContent() {
  const { messages } = useTanix();

  const hasMessages = messages.length > 0;

  return (
    <main className="flex-1 overflow-y-auto bg-gradient-to-b from-white via-slate-50 to-white">

      {hasMessages ? (
        <TanixMessages />
      ) : (
        <>
          <TanixWelcome />
          <TanixQuickActions />
        </>
      )}

    </main>
  );
}