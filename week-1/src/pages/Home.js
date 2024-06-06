import React from "react";

const Home = () => {
    return (
        <div>
            <div className="mb-6"> 
                <label htmlFor="default-input" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">제목</label>
                <input 
                    type="text" 
                    id="default-input" 
                    className="bg-gray-50 borderborder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <label htmlFor="default-input" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                <input 
                    type="text" 
                    id="default-input" 
                    className="bg-gray-50 borderborder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">등록하기</button>
        </div>
    );
};
export default Home;