import { useContext, useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { handleLogin, handleSignUp, error } = useContext(authContext);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  // function validatePassword(rule, value, callback) {
  //   let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
  //   if (regex.text(value)) {
  //     callback();
  //   } else {
  //     callback(
  //       "Password should contain at least one digit,one lower case,one upper case, 8 from the mentioned characters"
  //     );
  //   }
  // }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    if (isLogin) {
      handleLogin(email, password, navigate);
    } else {
      handleSignUp(email, password, navigate);
    }
  };
  return (
    <Row
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Col span={15}>
        {error ? <Alert description={error} type="error" /> : null}
        <div className="forms" style={{ backgroundColor: "ivory" }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Username!" },
                {
                  type: "email",
                  message: "It is not valid email",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
                // {
                //   validator: validatePassword,
                // },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {isLogin ? "log in" : "Sign up"}
              </Button>
              <br />
              {isLogin ? (
                <>
                  Or <span onClick={() => setIsLogin(false)}>register now!</span>
                </>
              ) : (
                <>
                  Have an account?{" "}
                  <span onClick={() => setIsLogin(true)}>Log in</span>
                </>
              )}
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Auth;
