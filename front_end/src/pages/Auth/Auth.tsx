import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import RingLoader from "react-spinners/RingLoader";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Auth.module.scss";
import Image from "../../component/Image";
import images from "../../assets/images";
import Button from "../../component/Button";
import * as authService from "../../services/authService";

type registerFormInput = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

type loginFormInput = {
  username: string;
  password: string;
};

type accuracyFormInput = {
  email: string;
  code: string;
};

const cx = classNames.bind(styles);

const Auth = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<registerFormInput>();
  const {
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors },
  } = useForm<loginFormInput>();

  const {
    register: accuracyRegister,
    handleSubmit: accuracyHandleSubmit,
    formState: { errors: accuracyErrors },
  } = useForm<accuracyFormInput>();

  const navigate = useNavigate();
  const [variant, setVariant] = useState<"login" | "register" | "accuracy">(
    "accuracy"
  );
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const toastify = (message: string, type: "success" | "error") => {
    return toast(message, {
      type,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const onSubmit: SubmitHandler<registerFormInput> = async (data) => {
    try {
      setLoading(true);
      localStorage.setItem("userData", JSON.stringify(data));
      const response = await authService.register(
        data.email,
        data.username,
        data.password
      );
      setVariant("accuracy");
      setLoading(false);
      toastify("Register successfully", "success");
    } catch (error: any) {
      setLoading(false);
      toastify(error?.response?.data.error, "error");
      return;
    }
  };
  const onLoginSubmit: SubmitHandler<loginFormInput> = async (data) => {
    try {
      setLoading(true);
      localStorage.setItem("userData", JSON.stringify(data));
      const response = await authService.login(data.username, data.password);
      setLoading(false);
      localStorage.setItem("token", JSON.stringify(response));
      toastify("Login successfully", "success");
      navigate("/");
    } catch (error: any) {
      setLoading(false);
      toastify(error?.response?.data.error, "error");
      if (error?.response?.data.error === "User not active") {
        setTimeout(() => {
          setVariant("accuracy");
        }, 5000);
      }
    }
  };
  const onAccuracySubmit: SubmitHandler<accuracyFormInput> = async (data) => {
    try {
      setLoading(true);
      const localData = localStorage.getItem("userData");
      data.email = JSON.parse(localData as string).username;

      const response = await authService.accuracy(data);
      setLoading(false);
      toastify("Accuracy successfully", "success");
      // navigate("/");
    } catch (error: any) {
      setLoading(false);
      toastify(error?.response?.data.error, "error");
    }
  };

  useEffect(() => {
    const param = new URLSearchParams(location.search);
    const variant = param.get("variant") as "login" | "register";
    if (variant) {
      setVariant(variant);
    }
  }, [location.search]);

  const handleSwitch = () => {
    setVariant((prev) => (prev === "login" ? "register" : "login"));
  };
  return (
    <div className={cx("wrapper")}>
      <RingLoader color="#fe2c55" loading={loading} size={150} />
      {!loading && (
        <div className={cx("inner")}>
          <Image className={cx("logo")} src={images.logo} alt="logo" />

          {variant === "accuracy" ? (
            <form
              className={cx("login-form")}
              onSubmit={accuracyHandleSubmit(onAccuracySubmit)}
            >
              <h1>Nhập mã xác thực</h1>
              <div className={cx("input-group")}>
                <label>Mã xác thực</label>
                <input
                  type="text"
                  {...accuracyRegister("code", { required: true })}
                />
                {accuracyErrors.code && (
                  <p className="text-red-500">Code is required</p>
                )}
              </div>
              <Button medium primary text="Xác thực" />
              <Button className={cx("text-lg")} text="Gửi lại mã xác thực" />
            </form>
          ) : (
            <>
              {variant === "login" ? (
                <form
                  className={cx("login-form")}
                  onSubmit={loginHandleSubmit(onLoginSubmit)}
                >
                  <div className={cx("input-group")}>
                    <label>Username</label>
                    <input
                      type="text"
                      {...loginRegister("username", { required: true })}
                    />
                    {loginErrors.username && (
                      <p className="text-red-500">Username is required</p>
                    )}
                  </div>
                  <div className={cx("input-group")}>
                    <label>Password</label>
                    <input
                      type="password"
                      {...loginRegister("password", { required: true })}
                    />
                    {loginErrors.password && (
                      <p className="text-red-500">Password is required</p>
                    )}
                  </div>
                  <Button
                    medium
                    primary
                    text="Login"
                    className={cx("login-btn")}
                  />
                  <span>
                    Don't have account?
                    <span onClick={handleSwitch} className={cx("switch-btn")}>
                      Register
                    </span>
                  </span>
                </form>
              ) : (
                <form
                  className={cx("login-form")}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className={cx("input-group")}>
                    <label>Email</label>
                    <input
                      type="text"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="text-red-500">Email is required</p>
                    )}
                  </div>
                  <div className={cx("input-group")}>
                    <label>Username</label>
                    <input
                      type="text"
                      {...register("username", { required: true })}
                    />
                    {errors.username && (
                      <p className="text-red-500">Username is required</p>
                    )}
                  </div>

                  <div className={cx("input-group")}>
                    <label>Password</label>
                    <input
                      type="password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <p className="text-red-500">Password is required</p>
                    )}
                  </div>
                  <div className={cx("input-group")}>
                    <label>Confirm password</label>
                    <input
                      type="password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                          value === watch("password") ||
                          "The passwords do not match",
                      })}
                      aria-invalid={errors.confirmPassword ? "true" : "false"}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500">
                        {errors.confirmPassword.type === "validate" &&
                          errors.confirmPassword.message}
                        {errors.confirmPassword.type === "required" &&
                          "Confirm password is required"}
                      </p>
                    )}
                  </div>
                  <Button
                    medium
                    primary
                    text="Register"
                    className={cx("login-btn")}
                    // type="submit"
                  />
                  <span>
                    Have an account?
                    <span onClick={handleSwitch} className={cx("switch-btn")}>
                      Login
                    </span>
                  </span>
                </form>
              )}
            </>
          )}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Auth;
