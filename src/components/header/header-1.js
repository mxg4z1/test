import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { OffcanvasData } from "./offcanvas-data";
import WhiteLogo from "./white-logo";

function HeaderOne() {
  const [offcanvas, setOffcanvas] = useState(false);
  const showOffcanvas = () => setOffcanvas(!offcanvas);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const router = useRouter();
  const headerCss = `flex lg:justify-between justify-end items-center`;
  return (
    <Fragment>
      <header className="absolute w-full z-10">
        <div className="sticky-holder header-section sticky-style-1">
          <div className="custom-container container">
            <div className="grid grid-cols-12 items-center leading-[120px]">
              <div className="lg:col-span-3 col-span-6 mr-4">
                <WhiteLogo />
              </div>
              <div className="lg:col-span-6 lg:block hidden ml-3">
                <nav>
                  <ul className="main-menu text-white">
                    <li className={router.pathname == "/" ? "active" : ""}>
                      <Link href="/">
                        <a>
                          <span>Home</span>
                        </a>
                      </Link>
                    </li>
                    <li className={router.pathname == "/about" ? "active" : ""}>
                      <Link href="#about">
                        <a>
                          <span>About</span>
                        </a>
                      </Link>
                    </li>
                    <li
                      className={router.pathname == "/projects" ? "active" : ""}
                    >
                      <Link href="#services">
                        <a>
                          <span>Services</span>
                        </a>
                      </Link>
                    </li>
                    <li className={router.pathname == "/posts" ? "active" : ""}>
                      <Link href="#testimonials">
                        <a>
                          <span>Testimonials</span>
                        </a>
                      </Link>
                    </li>
                    <li className={router.pathname == "/posts" ? "active" : ""}>
                      <a href="mailto:dan@mrjunkaway.com">
                        <span>Request Quote</span>
                      </a>
                    </li>
                    <li
                      className={router.pathname == "/contact" ? "active" : ""}
                    >
                      <Link href="#footer">
                        <a>
                          <span>Contact</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="lg:col-span-3 col-span-6">
                <div className={`outer-box ${headerCss}`}>
                  <ul className="language-list text-white">
                    <li></li>
                    <li></li>
                  </ul>
                  <div className="offcanvas-area">
                    <div className="offcanvas">
                      <button
                        className="menu-bars flex text-white text-[24px]"
                        aria-label="Right Align"
                      >
                        <FaBars onClick={showOffcanvas} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap"
        }
      >
        <nav className="offcanvas-menu">
          <ul className="offcanvas-menu-items" onClick={showOffcanvas}>
            <li className="navbar-toggle flex justify-between items-center pb-[15px]">
              <div className="logo">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo/logo-footer.webp"
                      alt="Logo"
                      width={150}
                      height={50}
                    />
                  </a>
                </Link>
              </div>
              <button
                className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                aria-label="Right Align"
              >
                <AiOutlineClose />
              </button>
            </li>
            {OffcanvasData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href="#">
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default HeaderOne;
