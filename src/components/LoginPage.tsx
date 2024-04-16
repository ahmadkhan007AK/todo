import {
  EyeInvisibleOutlined,
  EyeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd"; // Import Form from antd
import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../App.css";
import { loginSuccess } from "../redux/authSlice";

interface Props {
  handleAuth?: (isLoggedIn: boolean) => void;
}

function LoginPage({ handleAuth }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to manage password visibility
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (values: { email: string; password: string }) => {
    if (values.email != "" && values.password != "") {
      // dispatch(loginSuccess());
      dispatch(
        loginSuccess({ email: values.email, password: values.password })
      );
      console.log("Logging in...");
      handleAuth && handleAuth(true);
      navigate("/home");
    }
    //  else {
    //   dispatch(loginFailure("Invalid credentials"));
    // }
  };

  return (
    <div className="appBg">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required")
            .matches(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              "Invalid email format"
            ),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={handleLogin}
      >
        {(
          { values, handleChange, errors, touched, handleSubmit } // Destructure handleSubmit
        ) => (
          <Form className="formstyle" onFinish={handleSubmit}>
            {" "}
            {/* Use onFinish from antd Form */}
            <div className="logo">
              {/* # symbol in full yellow color */}
              <Typography.Title level={1} style={{ position: "relative" }}>
                SuaLogo
                <span
                  style={{
                    color: "yellow",
                    fontSize: "80px",
                    position: "absolute",
                    top: "-23px",
                  }}
                >
                  #
                </span>
              </Typography.Title>
            </div>
            <Form.Item
              name="email"
              validateStatus={errors.email && touched.email ? "error" : ""}
              help={touched.email && errors.email}
            >
              <Input
                suffix={<UserOutlined />}
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus={
                errors.password && touched.password ? "error" : ""
              }
              help={touched.password && errors.password}
            >
              <Input.Password
                placeholder="Enter your password"
                type={passwordVisible ? "text" : "password"}
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
                value={values.password}
                onChange={handleChange}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              LOGIN
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
