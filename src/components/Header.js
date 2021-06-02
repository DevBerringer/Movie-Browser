import "./Header.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";


const Header = () => {

  const history = useHistory();

  const titleBtn = () => {
    history.push('/')
  }

  const searchBtn = () => {
    history.push('/search')
  }

  return (
    <div className="header bg-dark"
          onClick={() => window.scroll(0, 0)}>
      <span onClick={titleBtn} className="header_title">
        🎬 Entertainment Browser 📺
      </span>
      <Button style={{color: "white"}}
              onClick={searchBtn}
      >
        Find Movies or Shows
      </Button>
    </div>
  );
};

export default Header;
