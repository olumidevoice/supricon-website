import { Link } from "react-router";
import Container from "../../components/common/Container";
import SectionBadge from "../../components/common/SectionBadge";
import { Button } from "../../components/ui/button";

const About = ({ hideButton }: { hideButton?: boolean }) => {
    return (
        <div className=" py-[3.5rem] md:py-[6.25rem] bg-white">
            <Container>
                <div className="flex items-center justify-center flex-col md:flex-row gap-10 md:gap-20">
                    <div className="">
                        <img src="/images/about.png" alt="" className="" />
                    </div>
                    <div className="">
                        <div className="">
                            <SectionBadge text="About Supricon" />
                            <h1 className="heading_2 mt-1">Who We Are</h1>
                            <div className="mt-5 space-y-6 text-black-400 md:text-lg max-w-[37.5rem]">
                                <p className="">
                                    Supricon Limited is a diversified company
                                    registered in Nigeria under the Companies
                                    and Allied Matters Act, 2020. Established to
                                    provide solutions across trade, commerce,
                                    supply, and financial innovation, Supricon
                                    connects businesses with opportunities that
                                    drive growth.
                                </p>
                                <p className="">
                                    We build sustainable business networks and
                                    financial solutions that empower
                                    individuals, merchants, and organizations.
                                </p>
                            </div>

                            {!hideButton && (
                                <Link to="about" className="mt-10 block">
                                    <Button
                                        className="max-w-[10rem] w-full"
                                        variant={"primary"}
                                    >
                                        Learn More
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
