import { ShieldAlert } from "lucide-react";

export default function AccessRequest() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-4 min-w-screen bg-stone-900">
      <div className="flex flex-col items-center w-full max-w-md gap-6 p-8 pt-10 rounded-lg ring-1 ring-stone-700">
        <ShieldAlert className="text-red-500 size-12" />
        <div className="flex flex-col items-center w-full gap-2">
          <h1 className="text-4xl font-semibold text-center text-stone-200">No Access</h1>
          <div className="pb-4 text-lg text-center text-stone-400">
            You do not have access to view this page, please contact{" "}
            <a href="mailto:info@toastedmarshmallow.co" className="font-bold">
              info@toastedmarshmallow.co
            </a>{" "}
            to request access.
          </div>
        </div>
      </div>
    </div>
  );
}
