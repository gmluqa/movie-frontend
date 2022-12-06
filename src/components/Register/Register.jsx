import "./Register.css";
import React, { useState } from "react";

import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
const { Option } = Select;

import { registerUser } from "../../services/register.service";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const onFinish = async values => {
    let res = await registerUser(values);
    setRegisterMessage(res);
    // register service called(values)
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  // Here are the hooks
  const [registerMessage, setRegisterMessage] = useState("");
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  // Here is the input handler
  const inputHandler = e => {
    setCriteria(e.target.value);
  };

  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map(domain => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));

  return (
    
    <div className="registerDesign">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        style={{
          // width: "70em",
          // height: "20em",
          marginTop: "5em",
          // marginRight: "15em",
          alignItems:"center",
          justifyContent:"center",
          flexDirection: "column"
        }}
        labelCol={{
          span: 8,
        }}
        // wrapperCol={{
        //   span: 16,
        // }}
      
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: (
                <div style={{ color: "white" }}>
                  The input is not valid E-mail!
                </div>
              ),
            },
            {
              required: true,
              message: (
                <div style={{ color: "white" }}>Please input your E-mail!</div>
              ),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: (
                <div style={{ color: "white" }}>
                  Please input your password!
                </div>
              ),
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm password: "
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: (
                <div style={{ color: "white" }}>
                  Please confirm your password!
                </div>
              ),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  <div style={{ color: "white" }}>
                    The two passwords that you entered do not match!
                  </div>
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: (
                <div style={{ color: "white" }}>
                  Please input your nickname!
                </div>
              ),
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      <div style={{ color: "white" }}>
                        You must accept the agreement.
                      </div>
                    ),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="#">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        <div>{registerMessage}</div>
      </Form>
      </div>
     
  );
};
export default Register;
