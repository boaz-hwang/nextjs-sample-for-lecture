"use client";
import Button from "@/app/_components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ModalB() {
  const router = useRouter();

  const handleClickToClose = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[200px] h-[200px] flex flex-col gap-4 p-4 rounded-lg">
        <h1>A</h1>
        <div className="flex flex-col gap-4">
          <Button variant="outline" onClick={handleClickToClose}>
            Close A
          </Button>

          <Link href="/dashboard/modal-b">
            <Button className="w-full">Open B</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
