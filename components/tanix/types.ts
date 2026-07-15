export type Sender = "user" | "assistant";

export interface TanixMessage {
  id: string;
  sender: Sender;
  text: string;
  timestamp: Date;
}

export interface QuickAction {
  id: string;
  label: string;
  prompt: string;
}

export interface TanixState {
  isOpen: boolean;
  isTyping: boolean;
  messages: TanixMessage[];
}

export interface TanixContextType extends TanixState {
  open: () => void;
  close: () => void;
  toggle: () => void;

  addUserMessage: (text: string) => void;
  addAssistantMessage: (text: string) => void;

  setTyping: (typing: boolean) => void;
  clearMessages: () => void;
}