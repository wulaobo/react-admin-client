import React from 'react'

import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './login.less'
import logo from './images/logo.png'

export default class Login extends React.Component {

    onFinish = values => {
        console.log('Received values of form: ', values);

    };

    render() {
        return (<div className="login">
            <header className="login-header">
                <img src={logo} alt="logo"></img>
                <h1>React项目: 后台管理系统</h1>
            </header>
            <section className='login-content'>
                <h2>用户登录</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, whitespace: false, message: '必须输入用户名', },
                            { min: 4, message: '用户名最少为4位', },
                            { max: 12, message: '用户名最多为12位', },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字，下划线组成', },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, whitespace: false, message: '必须输入密码', },
                            { min: 4, message: '密码最少为4位', },
                            { max: 12, message: '密码最多为12位', },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '密码必须是英文，数字，下划线组成', },

                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        {/* Or <a href="">register now!</a> */}
                    </Form.Item>
                </Form>
            </section>

        </div>)
    }


}

