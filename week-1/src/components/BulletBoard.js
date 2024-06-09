import React, { useState } from 'react';
import { postsState } from '../shared/Store';
import { useRecoilState } from 'recoil';

// setPosts 함수를 불러와서 수정할 수도 있지만,
// 이렇게 되면 어떤 컴포넌트에서 어떻게 수정되는지 복잡해지면서
// 관리하기 어려울 수 있음 -> 상태 관리 라이브러리 사용

// Home에서 액자 만들고,
// bullet board에서 내용 채워주면서 isModify인지 보고, true면 인풋태그에 값 넣어주기
// false면 텍스트로 뿌리기

// 사용자 로그인 정보에 따라 props 변경될 수 있음
function BulletBoard({post}) {
    const [subject, setSubject] = useState(post.subject);
    const [content, setContent] = useState(post.content);
    console.log(post)
    const [isModify, setIsModify] = useState(false);
    const [posts, setPosts] = useRecoilState(postsState)
    
    function onDeleteHandler(id) {
      setPosts(posts.filter((post) => post.id !== id));
    }

    function onModifyHandler() {
        setIsModify(true); 
    }

    const onSaveHandler = (id) => {
        setPosts(prevPosts => {
            const newPosts = [...prevPosts]; // Create a copy of the posts array
            const index = newPosts.findIndex(post => post.id === id);
            newPosts[index] = { id: index, subject: subject, content: content }; // Update the specific post
            return newPosts;
        });
        setIsModify(false);
    };
    
    return (
        <>
          <div 
            className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
        {/* 제목, 내용 표시(수정일 때, 아닐 때) */}
        {isModify ? (
            <>
            <input onChange={(e) => {setSubject(e.target.value)}} className="block mt-0.5 p-2.5 w-full text-lg font-bold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={post.subject}></input>
            <textarea rows="3" onChange={(e) => {setContent(e.target.value)}} className="block mt-0.5 mb-1.5 p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={post.content}></textarea>
            </>
        ) : (<>
            <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{post.subject}</h1>
            <p className="mb-3 text-sm font-light text-gray-700 dark:text-gray-400">{post.content}</p></>)
        }
        {/* 버튼 표시(수정일 때, 아닐 때) */}
        {isModify ? (
            <>
            <div className="flex justify-start gap-2">
              <a // 수정 버튼에 게시물 ID 전달
                href={`/post/${post.id}/edit`} 
                className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => {
                    e.preventDefault();
                    console.log(`save post with id: ${post.id}`);
                    if (!isModify) {
                        onModifyHandler();
                    }
                    else {
                        onSaveHandler(post.id);
                    };
                    
                }}
              >
                Save
              </a>
              </div>
            </>
        ) : ( <>
            <div className="flex justify-start gap-2">
              <a // 수정 버튼에 게시물 ID 전달
                href={`/post/${post.id}/edit`} 
                className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => {
                    e.preventDefault();
                    console.log(`modify post with id: ${post.id}`);
                    onModifyHandler();
                }}
              >
                Modify
              </a>
              <a // 삭제 버튼에 게시물 ID 전달
                href={`/post/${post.id}/delete`}
                onClick= {(e) => {
                    e.preventDefault();
                    console.log(`delete post with id: ${post.id}`);
                    onDeleteHandler(post.id);
                } }   
                className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Delete
              </a>
            </div>
            </> 
        )}
            </div>
            </>
    );
}
export default BulletBoard;