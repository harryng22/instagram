import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const history = useNavigate();

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);
  return <div>Login</div>;
};
export default Login;
