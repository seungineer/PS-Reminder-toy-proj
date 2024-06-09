import React, { useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";      
import { postsState } from "../shared/Store";
import { useNavigate } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";

const WritePost = () => {
    // subject, content 상태값 추가
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useRecoilState(postsState)
    const idRef = useRef(useRecoilValue(postsState).length + 1);
    const navigate = useNavigate();
    const onSubjectChangeHandler = (e) => {
        setSubject(e.target.value);
    };
    const onContentChangeHandler = (e) => {
        setContent(e.target.value);
    };

    const onPostClick = () => {
        console.log("post button clicked!");
        const newPost = {
            id: idRef.current,
            subject,
            content,
        };
        setPosts([...posts, newPost]);
        idRef.current += 1;
        navigate("/");
    };
    return (
        <> 
        <button onClick={()=>navigate('/')} className="mb-3">
            <SlArrowLeftCircle className = "" size={40}/>
        </button>
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
                        htmlFor="message"
                        className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Subjects
                    </label>
                </div>
                <div>
                    <textarea
                        id="message"
                        onChange={onSubjectChangeHandler}
                        rows="1"
                        className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Writes the Subjects Here."
                    ></textarea>
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Contents
                    </label>
                </div>
                <div>
                    <textarea
                        id="message"
                        onChange={onContentChangeHandler}
                        rows="4"
                        className="block mb-1.5 p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Writes the Contents Here."
                    ></textarea>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                        type="button"
                        onClick={onPostClick}
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-4 py-1.2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
                disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={subject.length < 10}
                        style={{ borderRadius: "4px" }}
                    >
                        Post
                    </button>
                </div>
            </div>
        </>
    );
};
export default WritePost;
