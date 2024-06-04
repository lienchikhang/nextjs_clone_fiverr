import React from "react";

const ModalStateDefaultLogin = () => {
  return (
    <div>
      <h1>Sign in to your account</h1>
      <p>Don’t have an account?</p>
      <div className="btn__wrapper">
        <button>Continue with Google</button>
        <button>Continue with email/username</button>
      </div>
      <p className="breakline">OR</p>
      <div className="btn__wrapper">
        <button>Apple</button>
        <button>Facebook</button>
      </div>
    </div>
  );
};

export default ModalStateDefaultLogin;
