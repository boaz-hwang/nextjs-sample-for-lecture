import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Settings page</h1>
      <Link href="/settings">Open Settings modal</Link>
      <Link href="/">go to home page</Link>
    </div>
  );
}
