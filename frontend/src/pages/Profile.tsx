import { User, Mail, Award, CheckCircle } from "lucide-react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-8">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl">

        <div className="flex flex-col items-center">

          <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-white">

            <User size={60} />

          </div>

          <h1 className="text-4xl font-bold mt-5">
            {user.name || "User"}
          </h1>

          <div className="flex items-center mt-3 text-gray-600">
            <Mail className="mr-2" size={18} />
            {user.email || "No Email"}
          </div>

        </div>

        <div className="grid grid-cols-2 gap-6 mt-10">

          <div className="bg-blue-50 rounded-2xl p-6 text-center">

            <CheckCircle className="mx-auto text-green-600" size={40} />

            <h2 className="text-3xl font-bold mt-3">0</h2>

            <p className="text-gray-600">Completed Tasks</p>

          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 text-center">

            <Award className="mx-auto text-yellow-600" size={40} />

            <h2 className="text-3xl font-bold mt-3">Beginner</h2>

            <p className="text-gray-600">Level</p>

          </div>

        </div>

      </div>

    </div>
  );
}