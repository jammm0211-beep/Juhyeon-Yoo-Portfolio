"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractivePortfolioLanding() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-6 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)]" />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-10 relative z-10"
          >
            {/* Title */}
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold text-center tracking-tight"
            >
              Open the window to explore my work
            </motion.h1>

            {/* Window */}
            <motion.div
              layoutId="window"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer bg-sky-200 border-4 border-sky-400 rounded-2xl shadow-2xl w-64 h-64 flex flex-col items-center justify-center backdrop-blur"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-7xl"
              >
                🪟
              </motion.div>

              <p className="mt-4 text-sm text-slate-700 font-medium">
                Click to open
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            layoutId="window"
            initial={{ borderRadius: 16 }}
            animate={{ borderRadius: 24 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-3xl relative z-10"
          >
            <div className="bg-white text-slate-800 rounded-2xl shadow-2xl p-8 md:p-10 space-y-8 relative">

              {/* Back Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-14 left-0 text-sm text-slate-300 hover:text-white transition"
              >
                ← Back to window
              </button>

              {/* Header */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Hi, I'm Juhyeon Yoo
                </h1>

                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  A Solution-Oriented Strategist: Connecting Technical Innovation with Real-World Execution
                </p>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Projects
                </h2>

                <div className="space-y-4">

                  {/* Project 1 */}
                  <a
                    href="https://www.notion.so/APP-Sejong-University-Power-Management-Automation-System-33c9514f5c46813e89b6eb813c6b1449"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-xl p-5 hover:shadow-md hover:-translate-y-1 transition"
                  >
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="font-semibold text-base md:text-lg">
                        APP) Sejong University Power Management Automation System
                      </h3>

                      <span className="px-3 py-1 text-xs font-medium border rounded-md bg-slate-100 text-slate-700">
                        Technical PM & Designer
                      </span>
                    </div>
                  </a>

                  {/* Project 2 */}
                  <a
                    href="https://www.notion.so/WEB-Escalator-Fall-Detection-on-Subway-station-33c9514f5c4681828982c8fb2c899463"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-xl p-5 hover:shadow-md hover:-translate-y-1 transition"
                  >
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="font-semibold text-base md:text-lg">
                        WEB) AI CCTV Incident Detection System
                      </h3>

                      <span className="px-3 py-1 text-xs font-medium border rounded-md bg-slate-100 text-slate-700">
                        Technical PM & Data Analysist
                      </span>
                    </div>
                  </a>

                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() =>
                  window.open(
                    "https://www.notion.so/Juhyeon-Yoo-s-Portfolio-33c9514f5c46803c9356fae50e9c0645",
                    "_blank"
                  )
                }
                className="mt-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition"
              >
                Open Full Notion Portfolio
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}