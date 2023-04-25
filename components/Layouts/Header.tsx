"use client";
import Link from "next/link";
import ThawLogoSvg from "../Svg/ThawLogoSvg";
import { HeaderMenuList } from "./HeaderMenuList";
import HeaderMenuCard from "./HeaderMenuCard";
import BellSvg from "../Svg/HeaderMenuSvg/BellSvg";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
      const pathname = usePathname();
    return (
        <section className="bg-primary h-[44px]">
            <nav className="mx-auto flex items-center w-[1440px] h-full">
                <div className="flex items-center justify-between gap-2 navbar">
                    <div className="flex items-center h-6 gap-4">
                        <Link href={"/#"}>
                            <ThawLogoSvg />
                        </Link>

                        <svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="1" height="22" fill="#1C487C" />
                        </svg>

                        <div className="dropdown header-menu">
                            <label tabIndex={0} className="text-sm btn btn-ghost rounded-btn">
                                Acme Company
                            </label>
                            <ul
                                tabIndex={0}
                                className="p-2 mt-4 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li>
                                    <a>Item 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="flex items-center gap-2 h-11">
                        {HeaderMenuList.map((item) => (
                            <HeaderMenuCard
                                key={item.name}
                                active={item.link == pathname}
                                link={item.link}
                                icon={item.icon}
                                title={item.name}
                            />
                        ))}
                    </ul>
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <BellSvg />
                            <div
                                className="absolute -top-1 -right-1
                             w-1.5 h-1.5 rounded-full bg-active-menu"
                            ></div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}>
                                <Image width={32} height={32} src={"/assets/avater.png"} alt="profile picture" />
                            </label>
                            <div tabIndex={0} className="p-6 bg-white shadow w-72 dropdown-content rounded-box">
                                <div className="flex items-center gap-2">
                                    <div className="mb-2 avatar">
                                        <div className="w-12 h-12 rounded-full">
                                            <img src="/assets/avatarX2.png" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-primary-text whitespace-nowrap">John Williams</span>
                                        <span className="block">john@email.com</span>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <ul className="flex flex-col gap-3">
                                    <li className="flex flex-row justify-start gap-2 cursor-pointer text-accent"><div><img src="/assets/profile-icon.png" className="inline-block w-4 "/></div><span>Profile Settings</span></li>
                                    <li className="flex flex-row justify-start gap-2 cursor-pointer text-accent"><div><img src="/assets/logout-icon.png" className="inline-block w-4 "/></div><span>Log out</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;
