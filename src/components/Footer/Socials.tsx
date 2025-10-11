import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Socials = () => {
    const socailsData = [
        {
            name: "facebook",
            link: "https://www.facebook.com/supricon.io",
            icon: <FaFacebookF />,
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/supricon.io/",
            icon: <RiInstagramFill />,
        },
        {
            name: "Twitter",
            link: "https://twitter.com/supricon_io",
            icon: <FaXTwitter />,
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/@supricon",
            icon: <FaYoutube />,
        },
    ];
    return (
        <div className="mt-5">
            <div className=" flex items-center justify-end gap-4">
                {socailsData?.map((item, index) => (
                    <a
                        href={item.link}
                        key={index}
                        className="f_center space-x-2 size-7 border border-black-100 rounded-full hover:bg-black-100 hover:text-white transition-colors text-blue-500 text-xs"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Socials;
