import { Mouse } from "../../components/icons";

const Travel = () => {
    const services = [
        {
            title: "Travel & Tourism",
            points: [
                "Organizing local and international tours.",
                "Travel ticketing and bookings.",
                "Tourism services, packages, and experiences.",
                "Supporting business and leisure travelers with end-to-end solutions.",
            ],
            image: "/images/service/s_5.png",
            align: "left",
        },
    ];
    return (
        <div>
            <div className="">
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Travel;
