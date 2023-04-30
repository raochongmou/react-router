import React, { PureComponent } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HomeGoods from "./pages/HomeGoods";
import AboutRecommend from "./pages/AboutRecommend";
import Music from "./pages/Music";
import User from "./pages/User";

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Link to={"/home"}>首页</Link>
        <Link to={"/about"}>关于</Link>
        <Link to={"/user?username=小饶&age=18"}>用户</Link>

        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="/home/goods/:id" element={<HomeGoods />} />
          </Route>
          <Route path="/about" element={<About />}>
            <Route path="/about/recommend" element={<AboutRecommend />}>
              <Route path="/about/recommend/music" element={<Music />} />
            </Route>
          </Route>
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    );
  }
}

export default App;
