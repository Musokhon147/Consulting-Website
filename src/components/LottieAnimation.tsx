import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
    url: string;
    className?: string;
    loop?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ url, className = "w-64 h-64", loop = true }) => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error("Lottie fetch error:", err));
    }, [url]);

    if (!animationData) return <div className={className} />;

    return (
        <div className={className}>
            <Lottie
                animationData={animationData}
                loop={loop}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default LottieAnimation;
