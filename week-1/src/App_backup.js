import React, { useState } from "react";
import "./App.css";

//1. 버튼 컴포넌트 생성
function CustomButton(props) {
  const {color, onClick, children} = props
  
  if (color)
    return (
  <button
      style={{background: color, color: "white"}}
      onClick={onClick}
  >
    {children}
  </button>
    );

  return <button onClick={props.onClick}>{props.children}</button>
}

function User(props) {
  return(
    <div className="square-style">
      <div>
        {props.user.age}살 - {props.user.name}
      </div>
      {/* 버튼 -> 컴포넌트 전환 */}
      <CustomButton color ="red" onClick={() => props.handleDelete(props.user.id)}>
        삭제하기
      </CustomButton>
    </div>
  );
}

const App = () => {
  const [users, setUsers] = useState([
    {id: 1, age: 20, name: "감자"}
  ]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    }
    setUsers([...users, newUser])
    console.log(users)
    console.log(users.length)
  }
  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList)
  }

  return (
    <div className="app-style">
      <input value={name} placeholder="이름 입력 칸" onChange={(e) => setName(e.target.value)} />
      <input value={age} placeholder="나이 입력 칸" onChange={(e) => setAge(e.target.value)} />
      <CustomButton color ="green" onClick={addUserHandler}>추가하기!</CustomButton>
      {users.map((user) => {
        if (user.age < 25)
          return <User user = {user} key={user.id} handleDelete={deleteUserHandler}/>
        else return null
      })}
    </div>
  );
};

export default App;