import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface Props {
    value: number;
    suffix?: string;
    duration?: number;
}

const AnimatedCounter: React.FC<Props> = ({ value, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.floor(progress * value));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref} className="font-serif font-black">
            {count.toLocaleString()}{suffix}
        </span>
    );
};

export default AnimatedCounter;
