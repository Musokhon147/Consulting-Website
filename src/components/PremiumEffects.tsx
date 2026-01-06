import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const Magnetic: React.FC<{ children: React.ReactElement; strength?: number }> = ({ children, strength = 0.5 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        x.set(deltaX * strength);
        y.set(deltaY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
};

export const Unmask: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
    <div className="unmask-container">
        <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay }}
        >
            {children}
        </motion.div>
    </div>
);

export const GrainOverlay: React.FC = () => <div className="grain-overlay" />;

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            const target = e.target as HTMLElement;
            setIsHovering(
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') !== null ||
                target.closest('a') !== null ||
                target.classList.contains('cursor-pointer')
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className={isHovering ? 'cursor-hover' : ''}>
            <div
                className="custom-cursor hidden lg:block"
                style={{ '--cursor-x': `${position.x}px`, '--cursor-y': `${position.y}px` } as any}
            />
            <div
                className="custom-cursor-ring hidden lg:block"
                style={{ '--cursor-x': `${position.x}px`, '--cursor-y': `${position.y}px` } as any}
            />
        </div>
    );
};

export const MeshBackground: React.FC = () => (
    <div className="mesh-gradient transition-colors duration-500">
        <div className="mesh-blob w-[50vw] h-[50vw] bg-academy-navy/10 dark:bg-academy-orange/10 top-[-10%] left-[-10%] transition-colors duration-500" />
        <div className="mesh-blob w-[40vw] h-[40vw] bg-academy-gold/10 dark:bg-academy-gold/5 bottom-[-10%] right-[-10%] transition-colors duration-500" />
        <div className="mesh-blob w-[30vw] h-[30vw] bg-academy-orange/5 dark:bg-white/5 top-[20%] right-[10%] transition-colors duration-500" />
    </div>
);

export default CustomCursor;
