import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const SplineModel = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <motion.div
            className="w-full h-screen bg-gray-900 relative flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Loading Spinner */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Spline Scene */}
            <Spline
                scene="https://prod.spline.design/8XuvLZ3YmrAFyq1N/scene.splinecode"
                onLoad={handleLoad}  
            />
        </motion.div>
    );
};

export default SplineModel;
