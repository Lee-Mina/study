import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "쳇틀렸다 그래도 원리는 알았어",
    "이렇게 하면 되잖아",
    "오.. 이렇게 하는거구나",
    "state는 배열로 변수를 설정할 수 있음",
    "리액트는 이런식으로 코드를 훨씬 줄일 수 있구나",
  ]);
  let posts = "강남고기맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div classNamd="list">
        <h3>{글제목[0]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div classNamd="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div classNamd="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div classNamd="list">
        <h3>{글제목[3]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div classNamd="list">
        <h3>{글제목[4]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div classNamd="list">
        <h3>{글제목[5]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div classNamd="list">
        <h3>{글제목[6]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
