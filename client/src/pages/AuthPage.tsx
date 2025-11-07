import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Box, Link, Typography } from "@mui/material";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Box
      // sx={{ placeItems: "center" }}
      margin="auto"
      width="40vw"
      boxShadow="0 5px 5px 0 #ccc"
      borderRadius="5px"
      padding="20px"
      marginTop="2vh"
    >
      {isLogin ? <Login /> : <Signup />}
      <Typography
        display="flex"
        alignItems="center"
        margin="10px 0"
        justifyContent="center"
        gap={1}
      >
        <Typography>
          {isLogin ? "Don't have an account ?" : "Already have an account ?"}
        </Typography>
        <Link
          onClick={() => setIsLogin((prev) => !prev)}
          sx={{ cursor: "pointer" }}
          data-testid="linkToSignupOrLogin"
        >
          {isLogin ? "Sign Up" : "Log In"}
        </Link>
      </Typography>
    </Box>
  );
};

export default AuthPage;
