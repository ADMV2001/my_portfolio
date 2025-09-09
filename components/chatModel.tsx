// In components/ChatModal.tsx
"use client"

import { useState, useRef, useEffect, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function ChatModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  // Handle the very first message when the modal opens
  useEffect(() => {
  if (isOpen && messages.length === 0) {
    setIsLoading(true);
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ history: [], message: "Hello" }),
    })
    .then(res => {
      if (!res.ok) {
        // If the server response is not OK, throw an error to be caught
        throw new Error('API response was not ok.');
      }
      return res.json();
    })
    .then(data => {
      setMessages([{ role: 'model', parts: [{ text: data.text }] }]);
    })
    .catch(error => {
      // Log the error and show a message to the user
      console.error("Failed to get initial greeting:", error);
      setMessages([{ role: 'model', parts: [{ text: "Sorry, I can't connect right now. Please try again later." }] }]);
    })
    .finally(() => {
      // This part ALWAYS runs, ensuring the input is re-enabled
      setIsLoading(false);
    });
  }
}, [isOpen, messages.length]);

    useEffect(() => {
  if (!isOpen) {
    setMessages([]);
  }
}, [isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: messages,
          message: input
        }),
      });
      const data = await res.json();
      const botMessage: Message = { role: 'model', parts: [{ text: data.text }] };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to fetch chat response:", error);
      const errorMessage: Message = { role: 'model', parts: [{ text: "Sorry, something went wrong." }] };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Panel className="w-full max-w-2xl h-[80vh] flex flex-col transform rounded-2xl bg-black/50 backdrop-blur-xl border border-gray-700 shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-[#81E7AF]">Personal Assistant</Dialog.Title>
                  <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10"><X className="w-5 h-5 text-gray-400" /></button>
                </div>
                {/* Chat Area */}
                <div className="flex-grow p-4 overflow-y-auto space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                      {msg.role === 'model' && <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#81E7AF] flex items-center justify-center"><Bot className="w-5 h-5 text-black" /></div>}
                      <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.role === 'user' ? 'bg-[#81E7AF] text-black' : 'bg-gray-700 text-white'}`}>
                        {msg.parts[0].text}
                      </div>
                      {msg.role === 'user' && <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-600 flex items-center justify-center"><User className="w-5 h-5 text-white" /></div>}
                    </div>
                  ))}
                   {isLoading && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#81E7AF] flex items-center justify-center"><Bot className="w-5 h-5 text-black" /></div>
                      <div className="px-4 py-2 rounded-lg bg-gray-700 text-white">Typing...</div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
                {/* Input Area */}
                <div className="p-4 border-t border-gray-700">
                  <form onSubmit={handleSend} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about Minula..."
                      className="flex-grow bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#81E7AF]"
                      disabled={isLoading}
                    />
                    <button type="submit" className="bg-[#81E7AF] rounded-lg p-2 disabled:opacity-50" disabled={isLoading}>
                      <Send className="w-5 h-5 text-black" />
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}