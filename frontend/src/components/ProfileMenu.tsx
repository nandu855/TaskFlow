export default function ProfileMenu() {
  const user = JSON.parse(
    localStorage.getItem("user") ||
      "{}"
  );

  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="font-bold">

        {user.name}

      </h2>

      <p className="text-gray-500">

        {user.email}

      </p>

    </div>
  );
}