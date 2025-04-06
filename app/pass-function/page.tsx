import { normalFunction } from "./action/client";
import { serverAction } from "./action/server";
import ClientButton from "./ClientButton";

export default function Index() {
  return (
    <div className="p-4">
      <ClientButton onClick={serverAction} />
    </div>
  );
}
