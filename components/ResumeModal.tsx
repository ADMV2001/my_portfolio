// components/ResumeModal.js
"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { X } from 'lucide-react'

export default function ResumeModal({ isOpen, onClose, resumeUrl }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* The modal panel */}
            <Dialog.Panel className="w-full max-w-4xl h-[90vh] transform overflow-hidden rounded-2xl bg-black text-left align-middle shadow-xl transition-all flex flex-col border-1 border-gray-800">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-black to-gray-900">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                  Resume Preview
                </Dialog.Title>
                <button
                  type="button"
                  className="rounded-full p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex-grow">
                <iframe
                  src={resumeUrl}
                  className="w-full h-full"
                  title="Resume Preview"
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}