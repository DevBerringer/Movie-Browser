import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header bg-dark">
      🎬 Entertainment Hub 📺
    </span>
  );
};

export default Header;