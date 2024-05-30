import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "tippy.js/dist/tippy.css";

import style from "./Header.module.scss";
import images from "../../../assets/images";
import Search from "../Search";
import Button from "../../../component/Button";
import { getIconDefinition } from "../../../component/Icons";
import Image from "../../../component/Image";
import Menu from "../../../component/popper/menu/menu";
import * as userService from "../../../services/userService";

interface user {
  avatar: string;
  name: string;
  role: string;
  email: string;
}

const cx = classNames.bind(style);

const listItem: Array<any> = [
  {
    title: "Profile",
    link: "/profile",
    icon: <FontAwesomeIcon icon={getIconDefinition("user")} />,
  },
  {
    title: "Settings",
    link: "/settings",
    icon: <FontAwesomeIcon icon={getIconDefinition("cog")} />,
  },
  {
    title: "Logout",
    link: "/auth",
    icon: <FontAwesomeIcon icon={getIconDefinition("sign-out-alt")} />,
  },
];

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<user>({} as user);
  const [accessToken, setaccessToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      if (localStorage.getItem("token") !== null) {
        const localToken = localStorage.getItem("token") as string;
        const access_token = JSON.parse(localToken).token;
        setaccessToken(access_token);
        const refresh_token = JSON.parse(localToken).refreshToken;
        try {
          const response = await userService.getUser(accessToken);
          localStorage.setItem("user", JSON.stringify(response.user));
          setUser(response.user);
          setIsLogin(true);
          return;
        } catch (error: any) {
          try {
            const response = await userService.RefreshToken(refresh_token);
            const token = {
              token: response.token,
              refreshToken: refresh_token,
            };
            localStorage.setItem("token", JSON.stringify(token));
            return;
          } catch (error: any) {
            navigate("/auth?variant=login");
          }
        }
      } else {
        setIsLogin(false);

        return;
      }
    };

    handleLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin, accessToken]);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to="/">
          <img src={images.logo} alt="logo" className={cx("spax-logo")}></img>
        </Link>
        <Search />

        {isLogin ? (
          <>
            <div className={cx("action")}>
              <Link to="/upload-video">
                <Button
                  outline
                  medium
                  iconLeft={
                    <FontAwesomeIcon
                      icon={getIconDefinition("arrow-up-from-bracket")}
                    />
                  }
                  text="Upload"
                />
              </Link>
              <Button
                outline
                medium
                iconLeft={
                  <FontAwesomeIcon icon={getIconDefinition("signal")} />
                }
                text="Stream"
              />
            </div>
            <Menu items={listItem}>
              <Image
                className={cx("avatar")}
                src={user.avatar ? user.avatar : images.noImages}
                alt="avatar"
              />
            </Menu>
          </>
        ) : (
          <>
            <div className={cx("action")}>
              <Link to="/auth?variant=login">
                <Button text="Login" primary medium />
              </Link>
              <Link to="/auth?variant=register">
                <Button text="Register" primary outline />
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

// const Header = () => {
//   function onMenuToggle(e: any) {
//     const navlinks = document.querySelector(".navLinks");
//     if (navlinks) {
//       e.name = e.name === "menu" ? "close" : "menu";
//       navlinks.classList.toggle("left-[0%]");
//     }
//   }
//   return (
//     <header className=" relative shadow-lg px-3 py-2">
//       <nav className="flex justify-between">
//         <div className="w-[130px] md:w-[200px] flex items-center">
//           <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" />
//         </div>
//         <div className="flex items-center gap-3">
//           <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
//             <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
//               <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
//                 <a href="#">Home</a>
//               </li>
//               <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
//                 <a href="#">Faculty</a>
//               </li>
//               <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
//                 <a href="#">Courses</a>
//               </li>
//               <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
//                 <a href="#">About Us</a>
//               </li>
//               <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
//                 <a href="#">Contact us</a>
//               </li>
//             </ul>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full "
//             >
//               Login
//             </button>
//             {/* <ion-icon name="menu" onclick="onMenuToggle(this)" class="text-[30px] cursor-pointer md:hidden"></ion-icon> */}
//             <button
//               type="button"
//               onClick={onMenuToggle}
//               className="text-[30px] cursor-pointer md:hidden"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
