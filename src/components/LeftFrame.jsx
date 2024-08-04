import React from "react";
import "../css/LeftFrame.css";

function LeftFrame() {
  return (
    <div className="leftFrame">
      <h1>Welcome Back</h1>
      <h6>Please enter your details</h6>
      <div>Log in with Apple</div>
      <div class="separator">
        <span>or</span>
      </div>
      <div>
        <input type="email" name="email" id="email" placeholder="email" />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
      </div>
      <div>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <span>Remember For 30 days</span>
      </div>
      <button>Login</button>
      <div>
        <span>Don't have an account ? Signup</span>
      </div>
    </div>
  );
}

export default LeftFrame;
