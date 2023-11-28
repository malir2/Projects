import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" bg-gradient-to-tl from-pink-200 via-gray-300 to-yellow-200 h-screen flex justify-center items-center">
      <form className="flex max-w-md flex-col gap-4 w-[60%] sm:w-[90%] bg-primary/80 backdrop-blur-lg p-[40px] rounded-lg">
        <h1 className="text-3xl text-white text-center">Login</h1>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Link to="/">
          <Button
            type="submit"
            className="bg-white text-primary w-[30%] sm:w-[40%] hover:scale-105 transition-all"
          >
            Submit
          </Button>
        </Link>
        <p className="text-black text-md text-center sm:text-[12px]">
          Don't have any account.
          <Link to="/sign-up" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
