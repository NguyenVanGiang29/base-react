import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { login } from "./sliceAuth";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(login({ username: "giang", password: "291198" }));
  }, [dispatch]);
  return (
    <div
      onClick={() => {
        navigate("/task");
      }}
    >
      Auth
    </div>
  );
};

export default Auth;
