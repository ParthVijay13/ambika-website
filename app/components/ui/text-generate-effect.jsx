
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({ words, className }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-dark-slate opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={`font-bold ${className}`}>
            <div className="mt-4">
                <div className="text-dark-slate text-2xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
