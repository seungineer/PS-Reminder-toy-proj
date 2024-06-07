import React from 'react';



// 사용자 로그인 정보에 따라 props 변경될 수 있음
function BulletBoard({ posts }) {
    return (
      <div className="flex w-full flex-wrap-reverse justify-center gap-4 p-4">
        {posts.map((post) => (
          <div 
            key={post.id} // map 함수 사용 시 key prop 필수
            className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{post.subject}</h1>
            <p className="mb-3 text-sm font-light text-gray-700 dark:text-gray-400">{post.content}</p>
            <div className="flex justify-end">
              <a // 수정 버튼에 게시물 ID 전달
                href={`/posts/${post.id}/edit`} 
                className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Modify
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default BulletBoard;