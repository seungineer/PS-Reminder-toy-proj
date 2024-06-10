import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // id, password 상태값 추가
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onIdChangeHandler = (e) => {
        setId(e.target.value);
    };
    const onPasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const onLoginClick = () => {
        // 서버에 id와 password 전송
        axios.post(`${process.env.REACT_APP_REQUEST_URL}/api/auth/login`, {
            "username" : id,
            "password" : password,
        })
            .then((data) => {
            // 토큰 response 처리
            const token = data.headers.authorization;
            // 토큰을 localStorage에 저장
            localStorage.setItem("token", token);
            navigate("/Home");
            })
            .catch((error) => {
            console.error("Error:", error);
            });
    };
    return (
        <>
        <div
                style={{
                    width: "100%",
                    border: "0.5px solid black",
                    borderRadius: "10px",
                    padding: "5px",
                }}
            >
                <div>
                    <label
                        htmlFor="아이디"
                        className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        아이디
                    </label>
                </div>
                <div>
                    <input
                        id="아이디"
                        onChange={onIdChangeHandler}
                        className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Writes the ids Here."
                        type="text"
                    ></input>
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        패스워드
                    </label>
                </div>
                <div>
                    <input
                        id="message"
                        onChange={onPasswordChangeHandler}
                        className="block mb-1.5 p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Writes the passwords Here."
                        type="password"
                    ></input>
                </div>
                <div style={{ display: "flex", justify: "center" }}>
                    <button
                        type="button"
                        onClick={onLoginClick}
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-1.2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
                disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={ password.length < 3}
                        style={{ borderRadius: "4px" }}
                    >
                        로그인
                    </button>
                </div>
            </div>
        </>
    );
};
export default Login;
