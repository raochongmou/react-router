import React from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "./routers";

// export class App extends PureComponent {
export default function(props) {
  // render() {
  return (
    <div>
      <Link to={"/home"}>首页</Link>
      <Link to={"/about"}>关于</Link>
      <Link to={"/user?username=小饶&age=18"}>用户</Link>
      {useRoutes(routes)}
      {/* <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="/home/goods/:id" element={<HomeGoods />} />
          </Route>
          <Route path="/about" element={<About />}>
            <Route path="/about/recommend" element={<AboutRecommend />}>
              <Route path="/about/recommend/music" element={<Music />} />
            </Route>
          </Route>
          <Route path="/user" element={<User />} />
        </Routes> */}
    </div>
  );
  // }
}

// export default App;
