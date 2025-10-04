"use client";

import { motion } from "motion/react";
import { ComponentProps } from "react";

type MotionDivProps = ComponentProps<typeof motion.div> & {
	children: React.ReactNode;
};

export default function MotionDiv({ children, ...props }: MotionDivProps) {
	return <motion.div {...props}>{children}</motion.div>;
}
