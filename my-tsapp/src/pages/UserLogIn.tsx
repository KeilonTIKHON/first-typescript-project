import { useState, useEffect } from "react";

import Header from '../component/header';

import { Button, Checkbox, Form, Input, } from 'antd';

import { collection, getDoc, onSnapshot, doc, addDoc } from 'firebase/firestore';
import db from "../config/firebase"

import {store, LogOut, LogIn} from '../assets/store'

import { Link } from "react-router-dom";
import { Footer } from "../component/footer";

export const Login = () => {
    const [users, setUsers] = useState<any>([])
    const [userName, setUserName] = useState<any>([])
    useEffect(
        () => {
            const unsubscribe = store.subscribe(()=>{

            })
            onSnapshot(collection(db, "Users"), (snapshot) => {
                setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                
            },

            )

        }
        ,
        []
    );
    const login = async (values:any) =>{
        const formValues = values
        console.log(formValues)
        const ifNickname = users.filter((user:any)=>user.username === formValues.username)
        const ifPass = users.filter((user:any)=>user.password === formValues.password)
        console.log(ifNickname)
        if(ifNickname[0] && ifPass[0]){
            
            setUserName(ifNickname[0])
            store.dispatch(
                {type:'logIn', payload: {username:ifNickname[0].username,
                    usericon:ifNickname[0].usericon
                } }
            )
            
        }
        return 0
    }
    return (
        <>
            <Header classname={'Header'}></Header>
            <div className="backImg">
                <div className="regback">
                    <div className="logForm">
                        <h1 className="usHeader">Login</h1>
                        <Form

                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember1: true,

                            }}
                            onFinish={(values) => {login(values)}}
                            onFinishFailed={() => { console.log('hi') }}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                    {
                                        min: 3,
                                        max:20,
                                        message: 'username must be at least 4 characters',
                                    },
                                    {
                                        max: 12,
                                        message: 'username cannot be longer than 12 characters',
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
                                        min: 5,
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            

                            <Form.Item
                                name="remember1"
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
                                <Button type="primary" htmlType="submit" id='subm'>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <Link to={'/register'} style={{ textDecoration: 'none' }}><div className="loginorregister">Register</div></Link>
                    </div>
                </div>

            </div>
            <Footer></Footer>

        </>


    )
}