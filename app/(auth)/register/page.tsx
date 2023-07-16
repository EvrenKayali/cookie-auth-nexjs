import { SubmitButton } from "@/components/ui/submit-button";
import { getSession, signIn } from "@/lib/auth";
import { register } from "@/lib/userManager";
import Link from "next/link";
import { redirect } from "next/navigation";
import * as Mailjet from "node-mailjet";

export default async function Register() {
  async function registerUser(data: FormData) {
    "use server";

    const email = data.get("email") as string;
    const password = data.get("password") as string;

    const user = await register({ email: email, password: password });

    // const client = Mailjet.Client.apiConnect(
    //   process.env.MAILJET_API_KEY!,
    //   process.env.MAILJET_API_SECRET!
    // );

    // const request = client.post("send", { version: "v3.1" }).request({
    //   Messages: [
    //     {
    //       From: {
    //         Email: "evrenkayali@hotmail.com",
    //         Name: "Evren",
    //       },
    //       To: [
    //         {
    //           Email: "altintassemre@gmail.com",
    //           Name: "Emre",
    //         },
    //       ],
    //       Subject: "Greetings from Auth Cookies.",
    //       TextPart: "Thanks for registration",
    //       HTMLPart:
    //         "<h3>Dear Emre, welcome to <a href='https://www.mailjet.com/'>Auth Cookies</a>!</h3><br />May the force be with you!",
    //       CustomID: "AppGettingStartedTest",
    //     },
    //   ],
    // });

    await signIn({ email: user.email, sub: String(user.id) });

    return { error: "email or password incorrect" };
  }
  const session = await getSession();
  if (session.isAuthanticated) {
    redirect("/");
  }
  return (
    <div className="mt-4 p-4 flex justify-center items-center w-full">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" action={registerUser}>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-htmlhtmlFor=set-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <SubmitButton type="submit" className="w-full ">
              Create an account
            </SubmitButton>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
