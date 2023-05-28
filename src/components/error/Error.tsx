import { SmileySad } from "@phosphor-icons/react";

interface ErrorProps {
  refetch: unknown;
}

function Error({ refetch }: ErrorProps) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center gap-3">
        <SmileySad color="white" size={70} />
        <button
          className="rounded-lg bg-red-500 py-2 px-3 text-white"
          type="button"
          radius="md"
          onClick={refetch}>
          Reload
        </button>
      </div>
    </div>
  );
}

export default Error;
