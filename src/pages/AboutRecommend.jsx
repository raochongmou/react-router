import { PureComponent } from "react";
import { useNavigate } from "react-router-dom";

class AboutRecommend extends PureComponent {
  // const navigates = useNavigate();
  constructor() {
    super();
    this.state = {
      list: [
        {
          title: "流行歌曲",
          name: "周杰伦",
          id: 1
        },
        {
          title: "粤语歌曲",
          name: "张学友",
          id: 2
        },
        {
          title: "乐队歌曲",
          name: "李荣浩",
          id: 3
        }
      ]
    };
  }

  // jumpToPage(path) {
  //   const { navigate } = this.props.router;
  //   navigate(path);
  // }
  liClick(id) {
    const { navigate } = this.props.router;
    navigate(`/home/goods/${id}`);
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        <h2>AboutRecommend page</h2>
        {list.map(({ id, title, name }) => {
          return (
            <li key={id} onClick={() => this.liClick(id)}>
              {name}--{title}
            </li>
          );
        })}
        {/* <button onClick={e => this.jumpToPage("/home/goods")}>跳转</button> */}
      </div>
    );
  }
}

function withRouter(WrapperComponent) {
  return props => {
    const navigate = useNavigate();
    return <WrapperComponent {...props} router={{ navigate }} />;
  };
}

export default withRouter(AboutRecommend);
