import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function Switch({ isOn, ...props }) {
  const className = `switch ${isOn ? "on" : "off"}`;

  return (
    <motion.div animate className={className} {...props}>
      <motion.div animate />
    </motion.div>
  );
}

export default function App() {
  const [isOn, setIsOn] = useState(false);

  return <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />;
}
