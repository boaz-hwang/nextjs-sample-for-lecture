import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Example page</h1>
      Here is Example page
      <div className="flex gap-4">
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
