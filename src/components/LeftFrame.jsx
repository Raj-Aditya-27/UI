import React from "react";
import "../css/LeftFrame.css";

function LeftFrame() {
  return (
    <div className="leftFrame">
      <h3><span className="specialColor">Welcome</span> Back</h3>
      <h6>Please enter your details</h6>
      <div className="apple">Log in with Apple</div>
      <div class="separator">
        <span>or</span>
      </div>
      <div className="email">
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>
      <div className="password">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="remember">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <p>Remember For 30 days</p>
      </div>
      <button>Log in</button>
      <div className="signup">
        <span>Don't have an account ? Signup</span>
      </div>
    </div>
  );
}

export default LeftFrame;
