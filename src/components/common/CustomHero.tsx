import type { ReactNode } from "react";
import Container from "./Container";

interface heroTypes {
    title: string | ReactNode;
    desc: ReactNode;
}

const CustomHero: React.FC<heroTypes> = ({ title, desc }) => {
    return (
        <div
            className="py-[3.75rem] relative bg-cover bg-center"
            style={{
                backgroundImage: `
                linear-gradient(0deg, rgba(45, 172, 207, 0.4), rgba(45, 172, 207, 0.4)),
                linear-gradient(180deg, rgba(45, 172, 207, 0) 0%, #2DACCF 100%),
                url('/images/customHero.jpg')
            `,
            }}
        >
            <Container className="f_center">
                <div className="">
                    <h1 className="text-center heading_1 text-white uppercase">
                        {title}
                    </h1>
                    <div className="mt-2 mb-[1.0625rem] md:mt-5 text-center text-base text-white md:text-xl">
                        {desc}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CustomHero;
