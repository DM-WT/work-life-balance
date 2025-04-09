"use client";
import { useState } from "react";
export default function QuizCard({ title, text, onAnswer }) {
  const [input, setInput] = useState("");
  return (
    <div className="bg-blue-50 p-4 rounded-xl">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="mb-2">{text}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={() => onAnswer?.(input)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}