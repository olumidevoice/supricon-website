import { Link } from "react-router";
import Container from "../../components/common/Container";
import { Button } from "../../components/ui/button";

const Hero = () => {
    return (
        <div className="f_center md:min-h-[600px] bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.4)),url('/images/hero.jpg')] bg-center bg-cover  bg-no-repeat py-20">
            <Container>
                <div className="">
                    <h1 className=" max-w-[62.5rem] heading_1 mx-auto text-center">
                        Empowering Businesses, Connecting Opportunities
                    </h1>
                    <p className="mt-5 max-w-[37.5rem] text-center mx-auto text-black-400 text-base">
                        Supricon Limited is a Nigerian company built to trade,
                        connect, and finance the future. From general trading
                        and supply chain solutions to our fintech, we are
                        redefining how businesses grow and thrive.
                    </p>
                    <div className="f_center mt-5md: mt-10">
                        <Link to="contact" className="max-w-[10rem] w-full">
                            <Button variant={"primary"} className=" w-full">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
