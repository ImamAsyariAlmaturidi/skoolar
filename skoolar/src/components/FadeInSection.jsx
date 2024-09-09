import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once when the section is in view
        threshold: 0.1,    // Trigger when 10% of the element is visible
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
