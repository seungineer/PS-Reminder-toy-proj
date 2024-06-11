import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";      
import { isRefreshState, postsState, tempdataState } from "../shared/Store";
import { useNavigate } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";
import axios from "axios";

function Today () {
    // subject, content 상태값 추가
    const [db, setDb] = useState([]);
    const [randomIndex, setRandomIndex] = useState(0);
    const [error, setError] = useState(null);
    const [isRefresh, setIsRefresh] = useRecoilState(isRefreshState);
    const [source, setSource] = useRecoilState(postsState);
    
    const navigate = useNavigate();
    console.log(source)
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    let day = formattedDate.split('.')[2]
    let todaysQuestion_idx = day % source.length;

    console.log(source)

    // useEffect(() => {
    //     console.log(db)
    //     console.log(Math.random())
    //     setRandomIndex(Math.round(Math.random() * db.length));
    //     console.log(randomIndex)
    //     console.log(db[randomIndex]);
    // },[]);
    

    function onTitleClick() {
        window.open(`https://${source[todaysQuestion_idx].link}`);
    }
    return (
        <div> 
            <button onClick={()=>navigate('/Home')} className="mb-3">
                <SlArrowLeftCircle className = "" size={40}/>
            </button>
            <div>
            <h1 className="text-2xl mb-2 text-center font-semibold text-gray-900 dark:text-white">오늘의 문제</h1>
            <div style={{width:"100%"}}>
            <div
                style={{
                    width: "420px",
                    border: "0.5px solid black",
                    borderRadius: "10px",
                    padding: "5px",
                }}
            >
                
                <div className="relative overflow-x-auto">
                    <div>
                        <h2 onClick={onTitleClick} className="text-2xl text-center underline font-semibold text-gray-900 dark:text-white">{source[todaysQuestion_idx].title}</h2>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    다시 풀어보고 싶은 정도
                                </th>
                                <td className="px-6 py-4">
                                    {source[todaysQuestion_idx].score}
                                </td>
                                
                                
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    풀었던 날짜
                                </th>
                                <td className="px-6 py-4">
                                    {source[todaysQuestion_idx].created_at}
                                </td>
                            
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    남겼던 메모
                                </th>
                                <td className="px-6 py-4">
                                    {source[todaysQuestion_idx].content}
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Today;
