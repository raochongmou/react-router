import Home from "../pages/Home";
import About from "../pages/About";
import HomeGoods from "../pages/HomeGoods";
import AboutRecommend from "../pages/AboutRecommend";
import Music from "../pages/Music";
import User from "../pages/User";

export default [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home/goods/:id",
        element: <HomeGoods />
      }
    ]
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "/about/recommend",
        element: <AboutRecommend />,
        children: [
          {
            path: "/about/recommend/music",
            element: <Music />
          }
        ]
      }
    ]
  },
  {
    path: "/user",
    element: <User />
  }
];
