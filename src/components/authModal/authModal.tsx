import { useContext } from "react";
import { Auth } from "components/context";
import { createPortal } from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "UI/button/button";
import { useAppSelector } from "hooks/useAppSelector";
import Input from "UI/input/input";
import ErrorMessage from "UI/errorMessage/errorMessage";
import { StyleDivModal, StyledForm } from "./authModal.Styled";

import { TUser, TInput } from "types";

const schema = yup.object().shape({
  username: yup.string().required("Заполните поле"),
  password: yup
    .string()
    .required("No password provided.")
    .min(5, "Password is too short - should be 5 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const AuthModal = (): JSX.Element => {
  const root = document.querySelector("#root");
  const isAuth = useAppSelector((state) => state.reducer.isAuth);
  const { login } = useContext(Auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TUser> = async (data: TUser) => {
    login(data);
  };

  const infoInputs: TInput[] = [
    {
      textError: errors.username?.message,
      name: "username",
      placeholder: "Имя пользователя",
      type: "text",
      register: register("username"),
    },
    {
      textError: errors.password?.message,
      name: "password",
      placeholder: "Пароль",
      type: "password",
      register: register("password"),
    },
  ];

  return (
    <>
      {root &&
        createPortal(
          <StyleDivModal>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <h2>Авторизируйтесь для доступа к сайту</h2>
              {infoInputs.map((input, index) => (
                <Input key={index} {...input} />
              ))}
              {isAuth === false ? (
                <ErrorMessage>Имя и/или пароль неверные</ErrorMessage>
              ) : (
                false
              )}
              <Button disabled={isSubmitting}>Login</Button>
            </StyledForm>
          </StyleDivModal>,
          root,
        )}
    </>
  );
};

export default AuthModal;
