import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    curtainColor?: string;
}

export default function ParallaxImage({ src, alt, className = "", curtainColor = "#B8860B" }: ParallaxImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {/* The Curtain Overlay */}
            <motion.div
                initial={{ y: "0%" }}
                whileInView={{ y: "-100%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 z-20"
                style={{ backgroundColor: curtainColor }}
            />

            {/* The Parallax Image */}
            <motion.div style={{ scale }} className="w-full h-full">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </motion.div>
        </div>
    );
}
