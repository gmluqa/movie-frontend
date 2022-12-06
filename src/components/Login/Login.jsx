import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./loginSlice";
import { Button, Checkbox, Form, Input } from "antd";
import { decodeToken } from "react-jwt";
import { loginUser } from "../../services/login.service";

const Login = () => {
  const [messageText, setMessageText] = useState({ message: "" });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const onFinish = async values => {
    let res = await loginUser(values);

    // assuming res is invalid
    if (res == "Invalid E-mail or password.") {
      setMessageText({
        message: res,
      });
    } else {
      let decoded = decodeToken(res);
      
      let userType = decoded.UserType;
      
      dispatch(login(res));

      // here we set the raw JWT to localstorage
      localStorage.setItem("JWT", JSON.stringify(res));
      // here we set the decoded JWT to localstorage
      localStorage.setItem("UserInfo", JSON.stringify(decodeToken(res)));

      if (userType == "User") {
        navigate("../user-area");
      } else if (userType == "Admin") {
        navigate("../admin-area");
      } else {
        setMessageText({
          message: "Me has roto la app, enorabuena",
        });
      }
    }
  };
  const onFinishFailed = errorInfo => {};

  return (
    <div className="loginDesign">
      <Form
        name="basic"
        style={{width:"20em" , height: "20em",  marginTop:"5em", marginRight:"5em" }}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              className: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

       

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="messageText">{messageText.message}</div>
    </div>
  );
};

export default Login;
