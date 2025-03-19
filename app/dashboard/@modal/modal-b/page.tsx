"use client";
import Button from "@/app/_components/Button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";

export default function ModalB() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const navigateTo = (path: string) => {
    startTransition(() => {
      router.push(path);
    });
  };

  const handleClickToClose = () => {
    router.back();
  };

  const handleClickToRefresh = () => {
    navigateTo("/dashboard");
  };

  useEffect(() => {
    if (!isPending && pathname === "/dashboard") {
      window.location.reload();
    }
  }, [isPending, pathname]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white flex flex-col gap-4 p-4 rounded-lg">
        <h1>B</h1>
        <div className="flex flex-col gap-4">
          <Button variant="outline" onClick={handleClickToClose}>
            Close B
          </Button>

          <Button onClick={handleClickToRefresh}>Close all</Button>
        </div>
      </div>
    </div>
  );
}
