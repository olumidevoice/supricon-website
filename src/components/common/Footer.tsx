import { Link } from "react-router";
import { Call, Email, Location } from "../icons";
import Container from "./Container";
import SubcribeForm from "../Footer/SubcribeForm";
import Socials from "../Footer/Socials";

const Footer = () => {
    return (
        <div className="bg-black-25  ">
            <div className="md:pt-[3.75rem] pt-[1.75rem] pb-10 ">
                <Container className="flex flex-col md:flex-row gap-10 justify-between text-sm md:text-base ">
                    <div className="">
                        <FooterInfo />
                    </div>
                    <div className="md:max-w-[20.3125rem]">
                        <MoreInfo />
                    </div>
                    <div className="md:max-w-[25rem]">
                        <NewsLetter />
                    </div>
                </Container>
            </div>
            <Container>
                <div className="border-t border-t-black-100 py-5 md:py-10 font-ss3 f_center text-black-400">
                    Copyright ©2025 Supricon. All rights reserved.
                </div>
            </Container>
        </div>
    );
};

export default Footer;

const FooterInfo = () => {
    const infoData = [
        {
            label: "info@supricon.com",
            url: "mailto:info@supricon.com",
            icon: <Email />,
        },
        {
            label: "+234 700SUPRICON ; +234 7069512932",
            url: "tel:+2347069512932",
            icon: <Call />,
        },
        {
            label: "A306 Alhaja Mogaji Complex, Ogba, Lagos.",
            // url: "tel:+2347069512932",
            icon: <Location />,
        },
    ];

    return (
        <div>
            <img
                src="/images/logo.svg"
                alt="footer logo"
                className="h-[3.75rem]"
            />
            <div className="mt-5">
                <div className="">
                    {infoData?.map((item) => {
                        return (
                            <a
                                href={item?.url}
                                key={item?.label}
                                className="flex items-center gap-2 mb-3 text-black-400"
                            >
                                <div className="">{item?.icon}</div>
                                <div className="">{item?.label}</div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const MoreInfo = () => {
    const quickLinks = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "About Us",
            url: "/about",
        },
        {
            title: "Our Services",
            url: "/services",
        },
        {
            title: "Contact Us",
            url: "/contact",
        },
    ];

    const MorePages = [
        {
            title: "Articles",
            url: "/articles",
        },
        {
            title: "Error 404",
            url: "/404",
        },
        {
            title: "FAQs",
            url: "/faq",
        },
    ];

    return (
        <div className="flex justify-start md:justify-between md:flex-row gap-10 ">
            <div className="w-fit">
                <h3 className="text-black-200 font-bold text-lg">
                    Quick Links
                </h3>

                <div className="mt-3 gap-1">
                    {quickLinks?.map((link) => {
                        return (
                            <Link
                                to={link?.url}
                                key={link?.title}
                                className=" block py-2"
                            >
                                {link?.title}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="w-fit">
                <h3 className="text-black-200 font-bold text-lg">More Pages</h3>
                <div className="mt-3 gap-1">
                    {MorePages?.map((link) => {
                        return (
                            <Link
                                to={link?.url}
                                key={link?.title}
                                className=" block py-2"
                            >
                                {link?.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const NewsLetter = () => {
    return (
        <div className="w-full">
            <h2 className="font-bold text-lg md:text-2xl">
                Subscribe to Our Newsletter
            </h2>
            <div className="" mt-2>
                <p className="text-black-400 mt-2">
                    Subscribe to our newsletter to receive the latest updates
                    and exclusive offers.
                </p>
                <div className="">
                    <SubcribeForm />
                </div>
                <div className="">
                    <Socials />
                </div>
            </div>
        </div>
    );
};
