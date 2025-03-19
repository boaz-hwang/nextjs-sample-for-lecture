import Link from "next/link";
import {
  DASHBOARD_PATHNAME,
  FETCHING_PATHNAME,
  PAGE_TRANSITION_PATHNAME,
} from "@/src/constant/pathname";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">홈 페이지</h1>
      <div className="flex flex-col gap-4">
        <Link href={PAGE_TRANSITION_PATHNAME}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            페이지 이동 애니메이션 테스트
          </button>
        </Link>
        <Link href={DASHBOARD_PATHNAME}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            모달 테스트
          </button>
        </Link>

        <Link href={FETCHING_PATHNAME}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            데이터 패칭 테스트
          </button>
        </Link>
      </div>
    </main>
  );
}
