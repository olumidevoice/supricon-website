import { Mouse } from "../../components/icons";

const ServicesList = () => {
    const services = [
        {
            title: "RETAIL & TRADING",
            points: [
                "Shops, stores, and outlets management.",
                "General trading across industries.",
            ],
            image: "/images/service/s_1.png",
            align: "right",
        },
        {
            title: "SUPPLY & DISTRIBUTION",
            points: [
                "Import and export services.",
                "Wholesale and retail supply chain solutions.",
                "Distribution of raw materials, semi-finished goods, and agricultural produce.",
            ],
            image: "/images/service/s_2.png",
            align: "left",
        },
        {
            title: "SERVICES & AGENCY",
            points: [
                "Acting as agents in business transactions.",
                "Offering services and solutions across industries.",
            ],
            image: "/images/service/s_3.png",
            align: "right",
        },
        {
            title: "Digital and finantial solutions",
            desc: "At Supricon, our fintech arm is designed to make money movement simple, fast, and borderless. We are building secure financial solutions for individuals and businesses that go beyond traditional banking delays.",
            url: "https://crestwave.ng/",
            urlText: "crestwave.ng",
            image: "/images/service/s_4.png",
            align: "left",
        },
    ];

    return (
        <div>
            <div className="flex flex-col ">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${
                            service.align === "left"
                                ? "md:flex-row-reverse"
                                : ""
                        }   overflow-hidden `}
                    >
                        {/* Image */}
                        <div className="md:w-1/2 w-full h-64 md:h-auto">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="md:w-1/2  w-full p-8 md:px-[5rem] flex flex-col justify-center">
                            <h3 className="heading_2 mb-4 max-w-[31.875rem]  uppercase">
                                {service.title}
                            </h3>

                            {service?.points && (
                                <ul className="space-y-2">
                                    {service.points.map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex max-w-[32.5rem]  md:text-lg font-ss3 items-start gap-2 text-black-400"
                                        >
                                            <Mouse className="w-4 h-4 text-blue-500 mt-1" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {service?.urlText && (
                                <div>
                                    <a
                                        href={service.url}
                                        className="text-blue-500 underline font-ss3 font-semibold"
                                    >
                                        {" "}
                                        {service.urlText}
                                    </a>
                                </div>
                            )}

                            {service?.desc && (
                                <div>
                                    <div className=" max-w-[32.5rem] flex mt-5 md:text-lg font-ss3 items-start gap-2 text-black-400">
                                        {service.desc}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesList;
