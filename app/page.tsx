"use client";
import './globals.css';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 to-teal-200 p-4 font-sans">
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
            {/* Step 1 */}
            {step === 1 && (
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                <span className="mr-2 text-yellow-500">🌟</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500">
                  山东小哥哥，
                </span>
                <br />
                <span className="mr-2 text-yellow-500">👋</span>刘哥你好呀！
              </h1>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-teal-700">
                  ❓ 下一个问题：今天你开心吗？
                </h1>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:scale-110 transition-transform duration-300"
                  >
                    开心 😄
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:scale-110 transition-transform duration-300"
                  >
                    开心 😎
                  </button>
                </div>
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <p className="mt-4 text-lg md:text-xl text-teal-800 font-semibold">
                🎉 当然你一定会开心，因为你已经在和我聊天啦！😎
                <br />
                明天你也会一样开心哦 🌈✨
                <br />
                祝你明天不要累 😴💤
              </p>
            )}

            {/* ปุ่ม Step 1 */}
            {step === 1 && (
              <button
                onClick={nextStep}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:scale-110 transition-transform duration-300"
              >
                下一步
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
