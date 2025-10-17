import { Link } from "react-router";
import Container from "../../components/common/Container";
import SectionBadge from "../../components/common/SectionBadge";
import { Button } from "../../components/ui/button";

const Offers = () => {
    const servicesData = [
        {
            id: 1,
            title: "RETAIL & TRADING",
            url: "/services#",
        },
        {
            id: 2,
            title: "SUPPLY & DISTRIBUTION",
            url: "/services#",
        },
        {
            id: 3,
            title: "SERVICEsS & AGENCY",
            url: "/services#",
        },
        {
            id: 4,
            title: "DIGITAL & FINANCIAL SOLUTIONS",
            url: "/services#",
        },
        {
            id: 5,
            title: "TRAVEL & TOURISM",
            url: "/services#",
        },
    ];

    return (
        <div className=" py-[3.5rem] md:py-[6.25rem] ">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    <div className="">
                        <SectionBadge text="Supricon Services" />
                        <h2 className="heading_2 mt-1 max-w-[20rem]">
                            What we Offer you
                        </h2>
                        <p className="mt-5 max-w-[20rem]">
                            Supricon Limited is structured to serve in multiple
                            sectors
                        </p>
                        <Button
                            className="max-w-[10rem] w-full mt-10"
                            variant={"outline"}
                        >
                            Learn More
                        </Button>
                    </div>
                    <>
                        {servicesData?.map((item) => {
                            return (
                                <Link
                                    to={item?.url}
                                    className="border block rounded-xs border-black-100  bg-white  h-[18.75rem] w-full p-10"
                                    key={item?.id}
                                    data-aos="flip-up"
                                >
                                    <div className="flex flex-col justify-between min-h-full ">
                                        <div className="">
                                            <img
                                                src={`/images/offers/f_${item?.id}.svg`}
                                                alt="offers icons"
                                                className="size-[60px]"
                                            />
                                        </div>

                                        <div className="text-xl text-[1.3rem]  md:text-[1.75rem] font-semibold">
                                            {item?.title}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </>
                </div>
            </Container>
        </div>
    );
};

export default Offers;
