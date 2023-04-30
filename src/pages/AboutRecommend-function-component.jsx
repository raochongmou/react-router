import React, { memo } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Music from "./Music";

const AboutRecommend = memo(() => {
  const navigates = useNavigate();
  function jumpToPage(path) {
    navigates(path);
  }
  return (
    <div>
      <h2>AboutRecommend page</h2>
      <button onClick={e => jumpToPage("/home/goods")}>跳转</button>
      {/* <button onClick={e => jumpToPage("/about/recommend/music")}>跳转</button> */}
      {/* <Music /> */}
      {/* <Outlet /> */}
    </div>
  );
});

export default AboutRecommend;
