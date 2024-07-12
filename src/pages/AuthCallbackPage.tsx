import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    const createUserAndNavigate = async () => {
      if (user?.sub && user?.email && !hasCreatedUser.current) {
        await createUser({ auth0Id: user.sub, email: user.email });
        hasCreatedUser.current = true;
        navigate("/");
      }
    };

    createUserAndNavigate();
  }, [createUser, navigate, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
