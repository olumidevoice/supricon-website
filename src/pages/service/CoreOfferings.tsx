import Container from "../../components/common/Container";
import { Activity, Bag, Bills, Card1, Gift } from "../../components/icons";

const CoreOfferings = () => {
    const data = [
        {
            title: "Payments",
            desc: " Seamless cross-border payments that allow individuals and businesses to pay suppliers in multiple countries within minutes — not days.",
            icon: <Activity />,
        },
        {
            title: "Virtual Card Services",
            desc: "Secure cards for online payments, subscriptions, and international transactions.",
            icon: <Card1 />,
        },
        {
            title: "Bills & Utilities",
            desc: "Easy settlement of recurring bills and utility payments with just a few clicks.",
            icon: <Bills />,
        },
        {
            title: "Gift Cards Marketplace",
            desc: "Instant access to global and local gift cards.",
            icon: <Gift />,
        },
        {
            title: "Lending & Credit Facilities",
            desc: "Flexible loans and credit support tailored for both individuals and SMEs.",
            icon: <Bag />,
        },
    ];

    return (
        <div className="py-[3rem] md:py-[6.25rem] bg-blue-500">
            <Container className="">
                <div className="">
                    <h2 className="heading_2 text-center text-white">
                        Our Core Offerings
                    </h2>

                    <div className="mt-10">
                        <div className="grid  md:grid-cols-2 gap-10">
                            {data?.slice(0, 2)?.map((item) => {
                                return (
                                    <div
                                        className="border border-white p-5 md:p-10 rounded-xs bg-white/8"
                                        key={item?.title}
                                    >
                                        <div className="size-[3.75rem] bg-blue-400 rounded-xs f_center">
                                            {item?.icon}
                                        </div>

                                        <h2 className="heading_3 text-white mt-5 md:mt-10">
                                            {item?.title}
                                        </h2>
                                        <div className="md:mt-5 mt-3 text-white max-w-[31.25rem]">
                                            {item?.desc}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grid  md:grid-cols-3 mt-10 gap-10">
                            {data?.slice(2, 6)?.map((item) => {
                                return (
                                    <div
                                        className="border border-white p-5 md:p-10 rounded-xs bg-white/8"
                                        key={item?.title}
                                    >
                                        <div className="size-[3.75rem] bg-blue-400 rounded-xs f_center">
                                            {item?.icon}
                                        </div>

                                        <h2 className="heading_3 text-white mt-5 md:mt-10">
                                            {item?.title}
                                        </h2>
                                        <div className="md:mt-5 mt-3 text-white max-w-[31.25rem]">
                                            {item?.desc}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* ************* */}
                        <div
                            className={`relative flex items-center  justify-center `}
                        >
                            {/* Connector dot */}
                            <div className="relative h-[10.25rem] mt-5">
                                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l border-dashed border-white" />
                                <div className="absolute -bottom-1   left-1/2 transform -translate-x-1/2 border border-white size-7   z-10 f_center rounded-xs">
                                    <div className="bg-white size-5 rounded-xs"></div>
                                </div>
                            </div>
                        </div>
                        <div className=" max-w-[50rem] mt-6 bg-white/8 mx-auto text-center">
                            <div className="border border-white p-5 md:p-10 rounded-xs">
                                <h2 className="heading_3 text-white mt-5 md:mt-10">
                                    Why It Matters
                                </h2>
                                <div className="md:mt-5 mt-3 text-white max-w-[40rem] mx-auto tracking-[0%]">
                                    Traditional banks can take days to process
                                    international transfers — Supricon cuts that
                                    down to minutes, helping businesses move
                                    faster and individuals stay in control of
                                    their finances.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CoreOfferings;
