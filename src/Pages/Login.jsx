import React from "react";

const Login = () => {
  return (
    <div className="hero bg-base-200 flex-grow">
      <div className="hero-content flex-col w-full">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="flex items-center mt-2 space-x-2">
            <p className="text-md font-semibold">Don't have an account?</p>
            <a href="/register" className="text-md font-semibold text-primary">
              Register
            </a>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
