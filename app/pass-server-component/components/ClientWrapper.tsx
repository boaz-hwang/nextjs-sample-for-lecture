"use client";

export default function ClientWrapper({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div>
      <p>This is a Client Component</p>
      {/* <ServerContent /> */}
      <div>{children}</div>
    </div>
  );
}
