import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded ${className} ${
        variant === "primary"
          ? "bg-blue-500 text-white"
          : "bg-white text-blue-500 border border-blue-500"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
