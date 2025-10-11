import { Link } from "react-router";
import Container from "../../components/common/Container";
import { Button } from "../../components/ui/button";

const Connect = () => {
    return (
        <div className="bg-blue-500 text-white py-[2.5rem] md:py-[5rem]">
            <Container>
                <div className="flex flex-col md:flex-row gap-7 md:gap-[7.5rem] md:items-end ">
                    <div className="max-w-[48.25rem] md:pl-10">
                        <h2 className="heading_2 text-white uppercase">
                            Let’s connect and <br /> build the future together.
                        </h2>
                    </div>

                    <Link to="/contact" className="max-w-[10rem] w-full">
                        <Button
                            variant={"outline"}
                            className=" w-full text-white border-white"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Connect;
