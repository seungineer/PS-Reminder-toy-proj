import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";      
import { isRefreshState, postsState, tempdataState } from "../shared/Store";
import { useNavigate } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";
import axios from "axios";
import Rating from 'react-rating';


const WritePost = () => {
    // subject, content 상태값 추가
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Leet Code");
    const [link, setLink] = useState("");
    const [titlePlaceholder, setTitlePlaceholder] = useState("");
    const [linkPlaceholder, setLinkPlaceholder] = useState("");
    const [score, setScore] = useState(0);

    const idRef = useRef(useRecoilValue(postsState).length + 1);
    
    const [posts, setPosts] = useRecoilState(postsState);
    const [tempdata, setTempdata] = useRecoilState(tempdataState);
    const [isRefresh, setIsRefresh] = useRecoilState(isRefreshState);
    
    const navigate = useNavigate();

    const onSubjectChangeHandler = (e) => {
        setSubject(e.target.value);
    };
    const onContentChangeHandler = (e) => {
        setContent(e.target.value);
    };

    const onPostClick = () => {
        console.log("post button clicked!");
        const newServerPost = {
            "title":subject,
            "content":content,
            "link":link,
            "category":category,
            "score":score,
            "author":"test",
            "password":"test" 
            };
        // 서버에 post 전송
        axios.post(`${process.env.REACT_APP_REQUEST_URL}/api/post`, newServerPost, {
            headers: {
            Authorization: `${localStorage.getItem("token")}`,
            },
        })
            .then(response => {
            console.log("Post request successful!");
            // Handle the response if needed
            setIsRefresh(!isRefresh);
            })
            .catch(error => {
            console.error("Error sending post request:", error);
            // Handle the error if needed
            });
        idRef.current += 1;
        
        setTempdata({"subject": "", "content": ""});
        navigate("/Home");
    };

    const onSaveClick = () => {
        console.log("save button clicked!");
        setTempdata({"subject": subject, "content": content});
    }

    const onLinkChangeHandler = (e) => {
        setLink(e.target.value);
    }

    const handleRadioChange = (event) => {
        setCategory(event.target.value);
        };
    const onScoreChangeHandler = (value) => {
        setScore(value);
    }

    useEffect(() => {
        // category 값이 변경될 때마다 placeholder 업데이트
        switch (category) {
          case 'Leet Code':
            setTitlePlaceholder('ex) 1. Two Sum');
            setLinkPlaceholder('ex) leetcode.com/problems/two-sum/');
            break;
          case '백준':
            setTitlePlaceholder('ex) 1000. A+B');
            setLinkPlaceholder('ex) acmicpc.net/problem/1000');
            break;
          default:
            setTitlePlaceholder('ex) 1. Two Sum');
            setLinkPlaceholder('ex) leetcode.com/problems/two-sum/');
        }
          }, [category]); // category가 변경될 때만 useEffect 실행

    return (
        <> 
        <button onClick={()=>navigate('/Home')} className="mb-3">
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
                <div className="mb-4">
                <div>
                    <label
                        htmlFor="카테고리"
                        className="block mb-3 text-sm font-semibold text-gray-900 dark:text-white"
                    >
                        Category
                    </label>
                </div>
                {/* Category Radio Section */}
                <div>
                <div class="flex items-center mb-2">
                    <input checked={category ==='Leet Code'} id="default-radio-1" type="radio" value="Leet Code" name="default-radio" onChange={handleRadioChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label checked={category ==='백준'} for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Leet Code</label>
                </div>
                <div class="flex items-center mb-2">
                    <input id="default-radio-2" type="radio" value="백준" name="default-radio" onChange={handleRadioChange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">백준</label>
                </div>
                </div>
                </div>
                <div className="mb-4">
                    <div>
                    <label
                        htmlFor="message"
                        className="block mb-0.5 text-sm font-semibold text-gray-900 dark:text-white"
                    >
                        How much you want to solve it again?
                    </label>
                    </div>
                    <div>
                    <Rating
                        start={0}
                        stop={10}
                        step={1}
                        initialRating={6}
                        onChange={onScoreChangeHandler}
                    />
                    </div>
                </div>
                
                {/* Subjects 입력 Section */}
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-0.5 text-sm font-semibold text-gray-900 dark:text-white"
                    >
                        Problem Title
                    </label>
                </div>
                <div>
                    <textarea
                        id="message"
                        onChange={onSubjectChangeHandler}
                        rows="1"
                        className="block mb-4 p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={titlePlaceholder}
                        defaultValue={tempdata.subject}
                    ></textarea>
                </div>

                {/* Link 입력 Section */}
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-0.5 text-sm font-semibold text-gray-900 dark:text-white"
                    >
                        Problem Link
                    </label>
                </div>
                <div>
                    <textarea
                        id="message"
                        onChange={onLinkChangeHandler}
                        rows="1"
                        className="block mb-4 p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={linkPlaceholder}
                        defaultValue={tempdata.subject}
                    ></textarea>
                </div>

                {/* Contents 입력 Section */}
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-0.5 text-sm font-semibold text-gray-900 dark:text-white"
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
                        defaultValue={tempdata.content}
                    ></textarea>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                        type="button"
                        onClick={onSaveClick}
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 py-1.2 mx-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
                disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={subject.length < 1}
                        style={{ borderRadius: "4px" }}
                    >
                        임시 저장
                    </button>
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
