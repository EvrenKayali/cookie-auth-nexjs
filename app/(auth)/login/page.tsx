import { redirect } from "next/navigation";
import { generateKeysIfNotExist, getSession, signIn } from "@/lib/auth";

export default async function Login() {
  async function login(data: FormData) {
    "use server";

    const email = data.get("email");
    const password = data.get("password");

    await generateKeysIfNotExist();

    if (email === "test@test.com" && password === "123") {
      await signIn({ email, sub: "1" });
    }

    return { error: "email or password incorrect" };
  }

  const session = await getSession();
  if (session.isAuthanticated) {
    redirect("/");
  }

  return (
    <div className="mt-4 p-4 flex justify-center items-center w-full">
      <form action={login}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-2xl max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Login
            </h1>

            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                Email
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                name="email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
