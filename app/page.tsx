import Link from "next/link";
import {
  DASHBOARD_PATHNAME,
  FETCHING_PARALLEL_PATHNAME,
  FETCHING_PATHNAME,
  FETCHING_PRELOAD_PATHNAME,
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

        <h1 className="text-xl font-bold mb-4">데이터 패칭 테스트</h1>
        <Link href={FETCHING_PATHNAME}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Data Fetching
          </button>
        </Link>

        <Link href={FETCHING_PARALLEL_PATHNAME}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Parallel Data Fetching
          </button>
        </Link>

        <Link href={FETCHING_PRELOAD_PATHNAME}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Preload Data Fetching
          </button>
        </Link>
      </div>
    </main>
  );
}
