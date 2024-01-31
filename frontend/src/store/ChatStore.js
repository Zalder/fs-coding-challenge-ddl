import { create } from "zustand";

export const useChatStore = create((set) => ({
  messages: [],
  username: "",
  addMessage: (newMessage) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
  setMessages: (messages) => set(() => ({ messages: messages })),
  setUsername: (newUsername) => set(() => ({ username: newUsername })),
}));
