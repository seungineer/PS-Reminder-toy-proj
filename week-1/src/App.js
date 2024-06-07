import React from "react";
import Router from "./shared/Router";
// styled-components에서 styled 라는 키워드를 import 합니다.
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import {RecoilRoot} from 'recoil';

const App = () => {
    return (
        <RecoilRoot>
            <GlobalStyle />
            <Router />
        </RecoilRoot>
    );
};

export default App;