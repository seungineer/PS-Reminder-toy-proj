import React from "react";
import BulletBoard from "../components/BulletBoard";
import { useRecoilState } from "recoil";
import { postsState } from "../shared/Store";
import { useNavigate } from "react-router-dom";
import { SlPlus } from "react-icons/sl";

const Home = () => {
    // subject, content 상태값 추가
    const [posts, setPosts] = useRecoilState(postsState)
    const navigate = useNavigate();

    return (
        <>
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
