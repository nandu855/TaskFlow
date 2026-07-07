export default function WelcomeCard() {
  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12)
    greeting = "Good Morning";

  else if (hour < 17)
    greeting = "Good Afternoon";

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white p-10 shadow-xl mb-8">

      <h1 className="text-4xl font-bold">

        {greeting},

        {user.name}

        👋

      </h1>

      <p className="mt-4 text-lg">

        Let's finish today's work.

      </p>

    </div>
  );
}