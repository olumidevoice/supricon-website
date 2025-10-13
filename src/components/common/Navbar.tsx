import { useState } from "react";
import Container from "./Container";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { cn } from "../../lib/utils";

interface NavBarType {
    isTransparent?: boolean;
}

const Navbar: React.FC<NavBarType> = ({ isTransparent = false }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Our Services" },
    ];
    const close = () => {
        setIsSidebarOpen(false);
    };
    return (
        <>
            {/* Desktop Navbar */}
            <nav
                className={cn(
                    "block bg-white text-black-500",
                    isTransparent && "bg-transparent"
                )}
            >
                <Container className="">
                    <div className="flex items-center justify-between py-2 md:h-[6.25rem]">
                        <div className="flex-shrink-0">
                            <img
                                src="/images/logo.svg"
                                alt="logo"
                                className="h-14"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.href}
                                        to={item.href}
                                        className=" py-2 rounded-md   hover:text-blue-500"
                                        viewTransition
                                    >
                                        {({ isActive }) => (
                                            <span
                                                className={
                                                    isActive
                                                        ? "text-blue-500 border-b-2 border-b-blue-500 font-semibold"
                                                        : ""
                                                }
                                            >
                                                {item?.label}
                                            </span>
                                        )}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <Link to="contact">
                            <Button
                                variant={"primary"}
                                className="w-full max-w-[10rem] hidden md:block"
                            >
                                Contact Us
                            </Button>
                        </Link>

                        <button
                            className="z-50 md:hidden text-2xl cursor-pointer"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            {isSidebarOpen ? (
                                <IoCloseOutline className="text-red-700 text-3xl" />
                            ) : (
                                <LuMenu />
                            )}
                        </button>
                    </div>
                </Container>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black-25  transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                onClick={close}
            >
                <div className="flex-shrink-0 border-b border-b-gray-200 p-6 py-4">
                    <img src="/images/logo.svg" alt="logo" className="h-14" />
                </div>
                <div className="p-6">
                    <nav>
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <NavLink
                                        key={item.href}
                                        to={item.href}
                                        className=" py-2 rounded-md text-sm font-medium hover:text-blue-500"
                                        viewTransition
                                        onClick={close}
                                    >
                                        {({ isActive }) => (
                                            <span
                                                className={
                                                    isActive
                                                        ? "text-blue-500 border-b-2 border-b-blue-500 "
                                                        : ""
                                                }
                                            >
                                                {item?.label}
                                            </span>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <Button variant={"primary"} className="w-full mt-5">
                            Contact Us
                        </Button>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
