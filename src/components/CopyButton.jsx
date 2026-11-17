import { useState } from "react";

export default function CopyButton({ text, className = "" }) {
  const [label, setLabel] = useState("복사");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setLabel("복사됨");
    } catch {
      setLabel("복사 실패");
    }
    setTimeout(() => setLabel("복사"), 1500);
  };
  return (
    <button type="button" className={`copy ${className}`} onClick={copy}>
      {label}
    </button>
  );
}
