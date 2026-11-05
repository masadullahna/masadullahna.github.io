import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center gap-4 border-b p-4">
      <Link to="/" className="hover:underline font-medium">Home</Link>
      <Link to="/about" className="hover:underline font-medium">About</Link>
    </header>
  );
};

export default Header;
