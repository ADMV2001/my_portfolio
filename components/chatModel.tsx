"use client"

import { useState, useRef, useEffect, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import { X, Send, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

import Image from "next/image";

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

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', parts: [{ text: "Hi there! I'm Minula's Personal AI Assistant. Ask me anything about Minula's skills, education, or projects. What would you like to know?" }] }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
    }
  }, [isOpen]);

  // MODIFIED: This function now handles streaming responses
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', parts: [{ text: input }] };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: messages, // Send history up to the user's message
          message: currentInput,
        }),
      });

      if (!response.body) {
        throw new Error("Response body is null");
      }

      // Prepare for streaming
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponse = '';
      
      // Add a placeholder for the bot's message
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: '' }] }]);

      // Read the stream
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botResponse += decoder.decode(value, { stream: true });
        
        // Update the last message (the bot's response) in real-time
        setMessages(prev => {
          const updatedMessages = [...prev];
          updatedMessages[updatedMessages.length - 1].parts[0].text = botResponse;
          return updatedMessages;
        });
      }

    } catch (error) {
      console.error("Failed to fetch stream response:", error);
      const errorMessage: Message = { role: 'model', parts: [{ text: "Sorry, something went wrong." }] };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* ... The rest of your modal JSX remains the same ... */}
        {/* ... Header, Chat Area, Input Area ... */}
         <div className="fixed inset-0 overflow-y-auto bg-black/20 backdrop-blur-md">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Panel className="w-full max-w-2xl h-[80vh] flex flex-col transform rounded-2xl bg-black/50 backdrop-blur-xl border border-gray-700 shadow-xl transition-all">
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-[#81E7AF]">Personal AI Assistant</Dialog.Title>
                  <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 cursor-pointer"><X className="w-5 h-5 text-gray-400" /></button>
                </div>
                <div className="flex-grow p-4 overflow-y-auto space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                      {msg.role === 'model' && <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center"><Image src="/bot.png" alt="Bot" layout="fill" objectFit="cover" /></div>}
                      <div className={`prose prose-invert px-4 py-2 rounded-lg max-w-xs sm:max-w-sm md:max-w-md ${msg.role === 'user' ? 'bg-[#81E7AF] text-black prose-p:text-black prose-strong:text-black' : 'bg-gray-700 text-white'}`}>
                        <ReactMarkdown>{msg.parts[0].text}</ReactMarkdown>
                      </div>
                      {msg.role === 'user' && <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-600 flex items-center justify-center"><User className="w-5 h-5 text-white" /></div>}
                    </div>
                  ))}
                   {isLoading && messages[messages.length-1]?.role !== 'model' && (
                    <div className="flex items-start gap-3">
                      <div className="relative w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center"><Image src="/bot.png" alt="Bot" layout="fill" objectFit="cover" /></div>
                      <div className="px-4 py-2 rounded-lg bg-gray-700 text-white">...</div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
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