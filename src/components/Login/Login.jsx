import React, {useState,useEffect} from "react"; 
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {userData, login} from "../userSlice";
import { loginUser } from "../../services/apiCalls";
import "./Login.css";

import { Button, Checkbox, Form, Input } from "antd";
// import { Link } from "react-router-dom";
// import { formatCountdown } from "antd/es/statistic/utils";
// import { set } from "immer/dist/internal";

const Login = () => {

// HOOKS  
  const [criteria,setCriteria] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userlogin = useSelector(userData);
  
  const [user, setUser] = useState({
    email: '',
    password: ''
});

// HANDLERS 

  // const criteriaHandler = (e) => {
  //   set.Criteria (e.target.value);
  // }
 
  const inputHandler = (e) => {
    setUser((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const logout = () => {
    dispatch(userout({ userlog: {} }))
    return navigate("/login");
};

  useEffect(() => {
  if (userlogin?.userlog?.token !== undefined) {
      navigate("/user-area");
  };
}, []);

const logMe = () => {
         
  loginUser(user)
      .then(data => {
          console.log(data);
      })

  dispatch(login({token: token}));

  setTimeout(()=>{
      navigate("/user-area");
  },1000);

};

  const onFinish = values => {
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginDesign">
      <Form
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
          label="Username"
          name="username"
          onChange={(e) => inputHandler(e)}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input type ="text" />
        </Form.Item>
        <Form.Item
        name="email"
        label="E-mail"
        onChange={(e) => inputHandler(e)}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          onChange={(e) => inputHandler(e)}
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
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick ={()=> logMe()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
