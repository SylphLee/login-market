"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
  ok: string[];
}

export default function FormButton({ text, ok }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        disabled={pending}
        className="primary-btn h-10 disabled:bg-neutral-400 rounded-full
       disabled:text-neutral-300 disabled:cursor-not-allowed">
        {pending ? "로딩 중" : text}
      </button>
      {ok.map((ok, index) => (
        <div
          key={index}
          className="div-btn h-10 mt-3 bg-green-400 rounded-md disabled:bg-green-400 text-neutral-800
         disabled:cursor-not-allowed">
          {ok}
        </div>
      ))}
    </div>
  );
}