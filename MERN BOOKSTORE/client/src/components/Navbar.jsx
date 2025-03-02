import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Dropdown } from "flowbite-react";

// react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { useAuth } from "../contacts/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const { isLoggedIn, logout } = useAuth();

  console.log(user);
  // const [isUploadMenuOpen, setUploadMenuOpen] = useState(false);

  // Toggle Menu
  const ToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // navItems here
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Thế giới sách", path: "/shop" },
    { link: "Tác giả", path: "/author" },
    ...(isLoggedIn
      ? [
          { link: "Quản lý sách", path: "/admin/dashboard" },
          { link: "Đăng xuất", path: "/logout" },
        ]
      : [
          {
            link: user ? user : "Đăng nhập",
            path: user ? "/logout" : "/account/signin",
          },
          { link: "Tạo tài khoản", path: "/account/signup" },
        ]),
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2x1 font-bold text-blue-700 flex items-center gap-2 nav-link"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          {/* nav items for large device */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700 nav-link"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for lg device */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/* Menu btn for mobile device */}
          <div className="md:hidden">
            <button
              onClick={ToggleMenu}
              className="text-black focus:outline:none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>

          {/* nav Items for sm device */}
          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-white uppercase cursor-pointer nav-link"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
