import CountUp from "react-countup";
import Container from "../../components/common/Container";

const Stats = () => {
    const countData = [
        {
            count: 10,
            topText: "Years of",
            bottomText: "Experience",
        },
        {
            count: 60,
            topText: "Projects",
            bottomText: "Completed",
        },
        {
            count: 100,
            topText: "Satisfied",
            bottomText: "Clients",
        },
        {
            count: 10,
            topText: "Global",
            bottomText: "Awards",
        },
    ];
    return (
        <div className="bg-blue-500 py-[3.75rem]">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {countData?.map((item) => {
                        return (
                            <div
                                className="flex gap-3 items-center text-white"
                                key={item?.topText}
                            >
                                <h3 className="text-[2.75rem] md:text-[3.25rem] font-bold ">
                                    <CountUp
                                        start={0}
                                        end={item?.count}
                                        duration={3.5}
                                        separator=","
                                    />
                                    +
                                </h3>
                                <div className="text-sm md:text-base">
                                    <p className="">{item?.topText}</p>
                                    <p className="">{item?.bottomText}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Stats;
