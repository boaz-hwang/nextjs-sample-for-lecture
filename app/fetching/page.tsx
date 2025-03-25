import { Suspense } from "react";
import Blogs from "./Blogs";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">데이터 패칭 테스트</h1>
      <h2 className="text-xl font-bold mb-4">프론트엔드 최신 기술 정보들</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Blogs />
      </Suspense>
    </main>
  );
}
