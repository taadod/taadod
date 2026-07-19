import { Loader } from "lucide-react";

function LoadingSpinner({ height }) {
  return (
    <div
      style={{ minHeight: height }}
      className="w-full flex justify-center items-center">
      <Loader size={36} className="animate-spin" />
    </div>
  );
}


export default LoadingSpinner;