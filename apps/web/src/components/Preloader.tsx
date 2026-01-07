import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
    const [draw, setDraw] = useState(false);

    useEffect(() => {
        setDraw(true);
    }, []);

    const text = "FRESHMAN";

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
            <div className="relative">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 600 100"
                    className="w-[80vw] max-w-[600px] h-auto"
                >
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="font-serif font-black italic tracking-tighter text-6xl md:text-8xl"
                        fill="transparent"
                        stroke="#FFB800"
                        strokeWidth="2"
                        strokeDasharray="1000"
                        strokeDashoffset={draw ? 0 : 1000}
                        style={{
                            transition: "stroke-dashoffset 2.5s cubic-bezier(0.25, 1, 0.5, 1)",
                        }}
                    >
                        {text}
                    </text>

                    {/* Glow Effect */}
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="font-serif font-black italic tracking-tighter text-6xl md:text-8xl blur-md opacity-50"
                        fill="transparent"
                        stroke="#FFB800"
                        strokeWidth="1"
                        strokeDasharray="1000"
                        strokeDashoffset={draw ? 0 : 1000}
                        style={{
                            transition: "stroke-dashoffset 2.5s cubic-bezier(0.25, 1, 0.5, 1)",
                        }}
                    >
                        {text}
                    </text>
                </svg>

                {/* Subtitle Reveal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute -bottom-12 left-0 right-0 text-center"
                >
                    <span className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">
                        Academy
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
