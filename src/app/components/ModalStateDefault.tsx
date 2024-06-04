import React from "react";

interface Props {
  nextState: (number: number) => void;
}

const ModalStateDefault: React.FC<Props> = ({ nextState }) => {
  return (
    <div>
      <h1>Create a new account</h1>
      <p>Already have an account?</p>
      <div className="btn__wrapper">
        <button>Continue with Google</button>
        <button onClick={() => nextState(1)}>Continue with email</button>
      </div>
      <p className="breakline">OR</p>
      <div className="btn__wrapper">
        <button>Apple</button>
        <button>Facebook</button>
      </div>
    </div>
  );
};

export default ModalStateDefault;
