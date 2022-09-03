import React from "react";
import { useState } from "react";
// import motion
import { motion } from "framer-motion";

function Switch({ isOn, ...props }) {
  const className = `switch ${isOn ? "on" : "off"}`;

  // add motion to div - motion.div
  return (
    // add the animate prop before the className
    <motion.div animate className={className} {...props}>
      {/* add motion to the inner div */}
      <motion.div animate />
    </motion.div>
  );
}

export default function App() {
  const [isOn, setIsOn] = useState(false);

  return <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />;
}
