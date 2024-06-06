import React from "react";

const Home = () => {
    return (
        <div style={{ width: '100%', border: '0.5px solid black', borderRadius: '10px', padding:'5px' }}>
            <div>
            <label htmlFor="message" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Subjects</label>
            </div>
            <div>
            <textarea id="message" rows="1" className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Writes the Subjects Here."></textarea>
            </div>
            <div>
            <label htmlFor="message" className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">Contents</label>
            </div>
            <div>
            <textarea id="message" rows="4" className="block mb-1.5 p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Writes the Contents Here."></textarea>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">등록하기</button>
            </div>
        </div>
    );
};
export default Home;