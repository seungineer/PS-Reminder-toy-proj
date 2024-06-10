import React, { useEffect, useState } from "react";
import BulletBoard from "../components/BulletBoard";
import { useRecoilState } from "recoil";
import { postsState } from "../shared/Store";
import { useNavigate } from "react-router-dom";
import { SlPlus } from "react-icons/sl";
import axios from 'axios';

const Home = () => {
    // subject, content 상태값 추가
    const [posts, setPosts] = useRecoilState(postsState)
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('http://43.201.17.0:8080/')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          setError(error);
        });
    }, []);
  
    
    return (
        <>
            {/* axios test */}
            {error && <div>Error: {error.message}</div>}
            {(!data) && <div>Loading...</div>}
            <div className="flex w-full flex-wrap justify-center gap-4 p-4">
                {data.length > 0 ? (
                    data.map((post) => <div key={post.id}>{post.title}</div>)
                ) : (
                    <div>게시물이 없습니다.</div>
                )}
            </div>
            {/* card 영역 */}
            <div className="flex w-full flex-wrap justify-center gap-4 p-4">
                {posts.length > 0 ? (
                    posts.map((post) => <BulletBoard post={post} setPosts={setPosts} />)
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
