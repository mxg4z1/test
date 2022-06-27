import * as AiIcons from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer-area md:pt-[120px] pt-[60px]">
      <div className="footer-top">
        <div className="custom-container flex justify-center">
          <div className="lm:grid xl:grid-cols-4 lm:grid-cols-12 xl:gap-x-[30px] gap-[30px]">
            <div className="max-lg:col-span-12">
              <div className="footer-logo">
                <Image
                  src="/images/logo/logo-footer.webp"
                  alt="Logo"
                  width={300}
                  height={100}
                />
              </div>
            </div>
            <div className="fixed-lg:col-span-2 fixed-md:col-span-3 fixed-lm:col-span-5 max-sm:pt-[35px]">
              <div className="footer-widget-item">
                <h2 className="title">Contact</h2>
                <div className="text-gray-500">
                  <div className="mb-2 mt-4">
                    <span className="text-gray-700 font-semibold">Email: </span>
                    <br />
                    <Link href="mailto:dan@mrjunkaway.com">
                      <a className="hover:text-black transition-all mb-2">
                        dan@mrjunkaway.com
                      </a>
                    </Link>
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-700 font-semibold">
                      Text or Call:
                    </span>
                    <br />
                    <Link href="tel:+0084-912-3548-073">
                      <a className="hover:text-black transition-all mb-2">
                        +1 509-475-8228
                      </a>
                    </Link>
                  </div>
                  <div>
                    <span className="text-gray-700 font-semibold">
                      Find us on
                    </span>
                    <br />
                    <Link href="https://m.me/danny.charles.7568">
                      <a className="hover:text-black transition-all mb-2">
                        Facebook
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed-lg:col-span-2 fixed-md:col-span-3 fixed-lm:col-span-5 max-sm:pt-[35px]">
              <div className="footer-widget-item">
                <h2 className="title"> Service Areas</h2>
                <div className="text-gray-700 uppercase mt-2">
                  <ul className="contact-info mt-[25px]">
                    <li>Spokane County, WA</li>
                    <li>Kootenai County, ID</li>
                    <li>Stevens County, WA</li>
                    <li>Lincoln County, WA</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="fixed-lg:col-span-2 fixed-md:col-span-2 fixed-lm:col-span-6 max-sm:pt-[30px]">
              <div className="footer-widget-item">
                <h2 className="title">MrJunkaway</h2>
                <ul className="footer-list mt-[25px]">
                  <li>
                    <Link href="#about">About</Link>
                  </li>
                  <li>
                    <Link href="#contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="#projects">Projects</Link>
                  </li>{" "}
                  <li>
                    <Link href="#testimonials">Testimonial</Link>
                  </li>
                  <li>
                    <Link href="#craigslist">More about us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="custom-container">
          <div className="inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9">
            <div className="md:grid md:grid-cols-3 flex flex-col">
              <div className="md:col-span-1 max-lm:order-last max-lm:pt-[10px]">
                <div className="copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]">
                  {`© ${new Date().getFullYear()}`}
                  <span className="mx-1 text-gray-600">
                    &middot; Mr. Junkaway
                  </span>
                </div>
              </div>
              <div className="md:col-span-1">
                <ul className="footer-social-link md:mb-0 mb-[10px] flex justify-center">
                  <li>
                    <Link href="https://m.me/danny.charles.7568">
                      <a>Facebook</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-1">
                <ul className="footer-language flex md:justify-end justify-center">
                  <li className="mr-8">
                    <Link href="#">
                      <a className="text-[#30373E] text-[14px] leading-6 uppercase transition-all hover:text-[#263a4f]">
                        Eng
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
