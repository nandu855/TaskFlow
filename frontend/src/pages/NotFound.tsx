import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg">

        <AlertTriangle
          size={70}
          className="mx-auto text-red-500"
        />

        <h1 className="text-5xl font-bold mt-6">
          404
        </h1>

        <p className="text-gray-500 mt-4">
          Page not found.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
        >
          Back to Dashboard
        </Link>

      </div>
    </div>
  );
}