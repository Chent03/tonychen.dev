"use client";

import { useState, useEffect, FC } from "react";

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
}

export const TypingEffect: FC<TypingEffectProps> = ({
  text,
  typingSpeed = 100,
}) => {
  const [visibleText, setVisibleText] = useState<string>("");

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index < text.length) {
        setVisibleText((prevText) => prevText + text.charAt(index));
        index++;
      }

      if (index === text.length) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(typeText, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return <>{visibleText}</>;
};
