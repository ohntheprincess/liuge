"use client";
import './globals.css';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  const messages = [
    <>🌟 山东小哥哥，<br />👋 刘哥你好呀！</>,
    "❓ 下一个问题：今天你开心吗？ 😄",
    "🎉 当然你一定会开心，因为你已经在和我聊天啦！😎\n明天你也会一样开心哦 🌈✨ 祝你明天不要累 😴💤"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 to-teal-100 p-4 font-sans">
      
      <AnimatePresence mode="wait">
        {step <= 3 && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full max-w-md p-6 bg-white rounded-3xl shadow-2xl text-center"
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 whitespace-pre-line">
              {messages[step - 1]}
            </h1>

            {step === 1 && (
              <button
                onClick={nextStep}
                className="px-8 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:scale-110 transition-transform duration-300"
              >
                下一步
              </button>
            )}

            {step === 2 && (
              <div className="flex justify-center gap-4">
                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:scale-110 transition-transform duration-300"
                >
                  开心 😄
                </button>
                <button
                  onClick={nextStep}
                  className="px-8 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:scale-110 transition-transform duration-300"
                >
                  开心 😎
                </button>
              </div>
            )}

            {step === 3 && (
              <p className="mt-4 text-lg md:text-xl text-teal-700">
                🎉 祝你开心每一天！✨🌈
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
