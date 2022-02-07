import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase-config";

const SignUp = () => {
  
  return (
    <div className="container bg-light">
      <h1 className="text-primary">Sign Up</h1>
      <form>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-12">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="form-row"></div>

        <button
          type="submit"
          className="btn btn-primary mb-4 mt-4"
          // onClick={register}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
