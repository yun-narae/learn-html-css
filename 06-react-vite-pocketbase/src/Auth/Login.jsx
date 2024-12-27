import { useState } from "react";
import pb from "../lib/pocketbase";
import { useForm } from "react-hook-form";

function Login({ setIsLoggedIn }) {
  const { register, handleSubmit } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [dummy, setDummy] = useState(0);

  const isLoggedInStatus = pb.authStore.isValid;

  async function login(data) {
    console.log(data);
    setLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.email, data.password);
      // Set the isLoggedIn state to true on successful login
      setIsLoggedIn(true);
      // Optionally, you can save the login status to localStorage
      localStorage.setItem("isLoggedIn", "true");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  function logout() {
    pb.authStore.clear();
    setDummy(Math.random());
    setIsLoggedIn(false); // Set the isLoggedIn state to false on logout
    localStorage.removeItem("isLoggedIn");
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
      <h1 className="text-2xl mb-4">Login</h1>
      <p className="py-4">
        {isLoggedInStatus
          ? `You are: ${pb.authStore.model.email}`
          : "You are not logged in!"}
      </p>
      {isLoggedInStatus && (
        <button
          className="border rounded-md bg-gray-400 py-1 px-4"
          onClick={logout}
        >
          Logout
        </button>
      )}

      {!isLoggedInStatus && (
        <form
          className="flex flex-col w-full justify-center items-center space-y-4"
          onSubmit={handleSubmit(login)}
        >
          <input
            className="border rounded-md p-1"
            type="text"
            placeholder="input email"
            {...register("email")}
          />
          <input
            className="border rounded-md p-1"
            type="password"
            placeholder="input password"
            {...register("password")}
          />
          <button
            className="border rounded-md bg-gray-400 py-1 px-4"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading" : "Login"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
