import { Link } from "react-router";
import Container from "../../components/common/Container";
import { Button } from "../../components/ui/button";

const NotFoundPage = () => {
    return (
        <div className="py-16 md:py-[6.25rem]">
            <Container>
                <div className="flex flex-col items-center justify-center   px-4">
                    <h1 className="  heading_3 text-[10rem] font-extrabold md:text-[12.5rem]">
                        <span className="text-blue-500">4</span>
                        <span className="">0</span>
                        <span className="text-blue-500">4</span>
                    </h1>
                    <h2 className="text-xl md:text-3xl font-semibold text-gray-700 ">
                        SORRY WE CAN'T FIND THAT PAGE!
                    </h2>
                    <p className="text-black-400 md:text-lg text-center mt-5">
                        The page you are looking for does not exist. It might
                        have been moved or deleted.
                    </p>
                    <Link to="/" className="mt-10">
                        <Button variant={"primary"} className="w-[10.1875rem]">
                            Go Back Home
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFoundPage;
