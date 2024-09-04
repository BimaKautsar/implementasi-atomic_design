import React from "react";
import Button from "./componen/elements/Button";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please enter your details
        </p>
        <form action="">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="text"
              id="email"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
              placeholder="********"
            />
          </div>
          <Button classNamebg-blue-600>Login</Button>
        </form>
      </div>
    </div>
  );
}
