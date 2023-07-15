export default async function Register() {
  return (
    <div className="mt-4 p-4 flex justify-center items-center w-full">
      <form>
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
                autoComplete="on"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-semibold">
                Password
              </label>
              <input
                name="password"
                type="password"
                autoComplete="off"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <input
                type="checkbox"
                className="accent-indigo-600"
                name="remember"
              />
              <span className="ml-2 font-bold text-indigo-500">
                Remember me
              </span>
            </div>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
