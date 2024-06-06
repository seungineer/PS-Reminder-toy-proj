// styled-components에서 styled 라는 키워드를 import 합니다.
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

// styled키워드를 사용해서 styled-components 방식대로 컴포넌트를 만듭니다. 
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.bdcolor};
  margin: 20px;
`;

const boxList = ["red", "green", "blue"]

const getBoxName = (color) => {
    switch(color) {
        case "red":
            return "빨간박스";
        case "green":
            return "초록박스";
        case "blue":
            return "파란박스";
        default:
            return "검정박스";
    }
}

const App = () => {
    return (
        <>
        <GlobalStyle />
        <div>
        {boxList.map((color) => (
          <StBox bdcolor = {color}>{getBoxName(color)}</StBox>
          )
        )}
        </div>
        </>
    );
};

export default App;