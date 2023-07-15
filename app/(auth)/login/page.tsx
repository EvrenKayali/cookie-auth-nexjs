import { redirect } from "next/navigation";
import { getSession, signIn } from "@/lib/auth";
import Link from "next/link";

export default async function Login() {
  async function login(data: FormData) {
    "use server";

    const email = data.get("email");
    const password = data.get("password");
    const remember = data.get("remember");

    if (email === "test@test.com" && password === "123") {
      await signIn({ email, sub: "1" }, Boolean(remember));
    }

    return { error: "email or password incorrect" };
  }

  const session = await getSession();
  if (session.isAuthanticated) {
    redirect("/");
  }

  return (
    <div className="mt-4 p-4 flex justify-center items-center w-full">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action={login}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    name="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-blue-500">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    // <div className="mt-4 p-4 flex justify-center items-center w-full">
    //   <form action={login}>
    //     <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-2xl max-w-sm">
    //       <div className="space-y-4">
    //         <h1 className="text-center text-2xl font-semibold text-gray-600">
    //           Login
    //         </h1>

    //         <div>
    //           <label className="block mb-1 text-gray-600 font-semibold">
    //             Email
    //           </label>
    //           <input
    //             type="text"
    //             className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
    //             name="email"
    //             autoComplete="on"
    //           />
    //         </div>
    //         <div>
    //           <label className="block mb-1 text-gray-600 font-semibold">
    //             Password
    //           </label>
    //           <input
    //             name="password"
    //             type="password"
    //             autoComplete="off"
    //             className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
    //           />
    //         </div>
    //         <div>
    //           <input
    //             type="checkbox"
    //             className="accent-indigo-600"
    //             name="remember"
    //           />
    //           <span className="ml-2 font-bold text-indigo-500">
    //             Remember me
    //           </span>
    //         </div>
    //       </div>
    //       <button className="mt-4 w-full bg-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
    //         Login
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}
