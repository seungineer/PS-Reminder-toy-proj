import { atom } from "recoil";

const postsState = atom({
    key: "postsState",
    default: [
        { "id":1,
			"title":"1. Two Sum",
			"content":"이 문제는 매우 쉬움",
			"link":"leetcode.com/problems/two-sum",
			"category":"LeetCode",
			"score":3,
			"author":"test",
			"created_at":"2024/06/11 16:44",
			"updated_at":"2024/06/11 16:44",}
    ],
});

const tempdataState = atom({
    key: "tempdataState",
    default: [
        ],
});

const isRefreshState = atom({
    key: "isRefreshState",
    default: false,
});

const sourceState = atom({
    key: "sourceState",
    default: [],
});

export { postsState, tempdataState, isRefreshState, sourceState };