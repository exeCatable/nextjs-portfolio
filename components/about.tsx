"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { aboutMe } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.7);

  const description = aboutMe.map((about) => (
    <p className="mb-3" key={about.description}>
      {about.description}
    </p>
  ));
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>
        About <span className="text-indigo-700 dark:text-indigo-500">me</span>
      </SectionHeading>
      {description}
    </motion.section>
  );
}
