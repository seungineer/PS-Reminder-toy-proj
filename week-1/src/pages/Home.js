import React, { useEffect, useState } from "react";
import BulletBoard from "../components/BulletBoard";
import { useRecoilState } from "recoil";
import { isRefreshState, postsState } from "../shared/Store";
import { useNavigate } from "react-router-dom";
import { SlPlus } from "react-icons/sl";
import axios from 'axios';

const Home = () => {
    // subject, content 상태값 추가
    const [isRefresh, setIsRefresh] = useRecoilState(isRefreshState);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_REQUEST_URL}/api/post`,{
            headers: {
                Authorization: `${localStorage.getItem("token")}`,
            },
        })   
        .then(response => {
            console.log("successfully loaded")
            setData(response.data.data.posts)
        })
        .catch(error => {
            setError(error);
        });
    }, []);
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_REQUEST_URL}/api/post`,{
            headers: {
                Authorization: `${localStorage.getItem("token")}`,
            },
        })
        .then(response => {
            setData(response.data.data.posts)
        })
        .catch(error => {
            setError(error);
        });
    }, [isRefresh]);
  
    return (
        <>
            {/* card 영역 */}
            <div className="flex w-full flex-wrap justify-center gap-4 p-4">
                {data.length > 0 ? (
                    data.sort((a,b) => b.id).map((post) => <BulletBoard post={post} setData={setData} />)
                ) : (
                    <div>게시물이 없습니다.</div>
                )}
            </div>
            {/* 글쓰기 페이지 이동 버튼 */}
            <button onClick={()=>navigate('/write')} className="fixed bottom-5 right-5 p-3 ">
                <SlPlus size={70}/>
            </button>
        </>
    );
};
export default Home;
