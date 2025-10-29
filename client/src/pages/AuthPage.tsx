import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin ? <Login /> : <Signup />}
      <p>
        {isLogin ? "Don't have an account ?" : "Already have an account ?"}
        <button onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
