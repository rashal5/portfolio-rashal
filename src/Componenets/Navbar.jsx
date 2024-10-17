import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-18">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <a href="https://www.instagram.com/_rashal" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
          
        </a>
      </div>
      

      {/* Social Icons Section */}
      <div className="m-2 flex items-center justify-center gap-4 text-3xl">
        <a className="bgp"
          href="https://www.linkedin.com/in/rashal5 "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ color: "white" }}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/rashal5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ color: "white" }}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/_rashal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ color: "white" }}
        >
          <FaInstagram />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
