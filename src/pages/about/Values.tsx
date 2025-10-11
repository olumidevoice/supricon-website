import { Card, CardContent } from "../../components/ui/card";
import Container from "../../components/common/Container";
import { Num, NumClear } from "../../components/icons";

const Values = () => {
    const values = [
        {
            title: "INTEGRITY",
            description: "Transparency and trust in every deal.",
            align: "left",
        },
        {
            title: "INNOVATION",
            description: "Driving modern solutions in commerce and finance.",
            align: "right",
        },
        {
            title: "GROWTH",
            description:
                "Creating opportunities for businesses and individuals.",
            align: "left",
        },
        {
            title: "EXCELLENCE",
            description: "Delivering quality services across all sectors.",
            align: "right",
        },
    ];

    return (
        <div className="bg-black-25">
            <section className="py-16 md:py-[6.25rem] ">
                <Container className="max-w-[75rem]">
                    <h2 className="text-center heading_2">OUR VALUES</h2>

                    <div className="relative flex flex-col gap-16 md:gap-10 mt-10">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l border-dashed border-blue-400" />

                        {values.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${
                                    item.align === "left"
                                        ? "md:justify-start justify-center "
                                        : "md:justify-end justify-center"
                                }`}
                            >
                                {/* Connector dot */}
                                {index === 0 ? (
                                    <Num className="absolute top-0  md:-top-1 left-1/2 transform -translate-x-1/2   z-10" />
                                ) : (
                                    <NumClear className="absolute top-0  md:-top-1 left-1/2 transform -translate-x-1/2   z-10" />
                                )}

                                {/* Value Card */}
                                <Card className="w-[90%] md:w-[45%] shadow-none  transition-all rounded-xs  border-black-100 py-10 bg-white">
                                    <CardContent className="">
                                        <h3 className="text-2xl font-semibold mb-2 text-black-500">
                                            {item.title}
                                        </h3>
                                        <p className="text-black-400 text-sm">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Values;
