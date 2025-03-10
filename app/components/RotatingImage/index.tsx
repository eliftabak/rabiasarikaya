'use client';

import { motion, useScroll, useTransform } from "framer-motion";

type RotatingImageProps = {
  src: string;
  className?: string;
};

const RotatingImage: React.FC<RotatingImageProps> = ({ src, className }) => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); 

  return (
    <motion.img 
      src={src} 
      className={className} 
      style={{ rotate }} 
      alt="rotating-image"
    />
  );
};

export default RotatingImage;