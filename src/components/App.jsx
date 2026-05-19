import React from "react";
import blogData from "../data/blog";

import About from "./About"
import Header from "./Header"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header name = {blogData.name}></header>
      <About img = {blogData.img} about = {blogData.about}/>
      <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;
