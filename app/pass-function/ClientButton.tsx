"use client";

interface ClientButtonProps {
  onClick: () => void;
}

export default function ClientButton({ onClick }: ClientButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={onClick}
    >
      ClientComponent
    </button>
  );
}
