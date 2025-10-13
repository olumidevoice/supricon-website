import Container from "../../components/common/Container";
import { Organization, Target } from "../../components/icons";

const Aims = () => {
    const data = [
        {
            title: "Our Mission",
            desc: "To build sustainable business networks and financial solutions that empower individuals, merchants, and organizations.",
            icon: <Organization />,
        },
        {
            title: "Our Vision",
            desc: "To be Africa’s trusted partner in trade, commerce, and finance.",
            icon: <Target />,
        },
    ];
    return (
        <div className="bg-blue-500 py-[4rem] md:py-[5rem]">
            <Container>
                <div className="flex justify-center md:flex-row flex-col gap-10">
                    {data?.map((item) => {
                        return (
                            <div
                                className="border border-white p-5 md:p-10 rounded-xs"
                                key={item?.title}
                            >
                                <div className="size-[3.75rem] bg-blue-400 rounded-xs f_center">
                                    {item?.icon}
                                </div>

                                <h2 className="heading_4 text-white mt-5 md:mt-10">
                                    {item?.title}
                                </h2>
                                <div className="md:mt-5 mt-3 text-white max-w-[31.25rem]">
                                    {item?.desc}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Aims;
