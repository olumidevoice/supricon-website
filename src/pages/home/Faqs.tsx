import { Link } from "react-router";
import SectionBadge from "../../components/common/SectionBadge";
import { Button } from "../../components/ui/button";
import Container from "../../components/common/Container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { PiMinus } from "react-icons/pi";
import { cn } from "../../lib/utils";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

const Faqs = ({ hideInfo = false }: { hideInfo?: boolean }) => {
    const [openItem, setOpenItem] = useState<string>("item-1");
    const faqData: FaqItem[] = [
        {
            id: "item-1",
            question: "What is Supricon Limited known for?",
            answer: "Supricon Limited specializes in providing innovative business solutions across multiple sectors, including digital, financial, and retail services.",
        },
        {
            id: "item-2",
            question: "How can I contact customer support?",
            answer: "You can reach our support team via the contact form on our website or email us directly at support@Supriconlimited.com.",
        },
        {
            id: "item-3",
            question: "Do you offer international services?",
            answer: "Yes, our services extend globally, with dedicated teams handling regional compliance and client needs.",
        },
        {
            id: "item-4",
            question: "Can I request a custom solution for my business?",
            answer: "Absolutely. We work closely with clients to develop tailor-made solutions that align with specific goals and challenges.",
        },
        {
            id: "item-5",
            question: "Where is your headquarters located?",
            answer: "Our main office is located in Lagos, Nigeria, with satellite offices in select international markets.",
        },
    ];

    return (
        <div className="">
            <Container className="">
                <div className="border-b border-b-black-100 md:py-[6.25rem] py-[3rem]  flex flex-col-reverse md:flex-row items-start justify-center md:gap-[5rem] gap-5">
                    <div className="w-full max-w-[38.75rem]">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            value={openItem}
                            onValueChange={setOpenItem}
                        >
                            {faqData.map((faq) => (
                                <AccordionItem
                                    key={faq.id}
                                    value={faq.id}
                                    className="border-b-0"
                                    data-aos="fade-up"
                                >
                                    <AccordionTrigger className="border-b border-b-black-100 py-6 rounded-none text-black-500 font-semibold text-base md:text-[1.25rem] cursor-pointer">
                                        {faq.question}

                                        {openItem === faq?.id ? (
                                            <PiMinus className="text-blue-500 text-2xl" />
                                        ) : (
                                            <IoAdd className="text-blue-500 text-2xl" />
                                        )}
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance mt-5 text-base text-black-400">
                                        <p>{faq.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <Link
                            to={hideInfo ? "/contact" : "/faq"}
                            className={cn(
                                `mt-10 max-w-[14.4375rem] md:hidden block mx-auto`,
                                hideInfo && "md:block"
                            )}
                        >
                            <Button className="w-full" variant={"primary"}>
                                Have Other Questions?
                            </Button>
                        </Link>
                    </div>

                    {!hideInfo && <FaqInfo />}
                </div>
            </Container>
        </div>
    );
};

export default Faqs;

const FaqInfo = () => {
    return (
        <div className="max-w-[31.25rem] w-full">
            <div className="">
                <SectionBadge text="About Supricon" />
                <h1 className="heading_2 mt-1">
                    Got Questions? <br />
                    We've Got Answers!
                </h1>
                <div className="mt-5 space-y-6 text-black-400 md:text-lg max-w-[37.5rem]">
                    <p className="">
                        Find answers to commonly asked questions about Supricon,
                        what we do, and how to reach us.
                    </p>
                </div>

                <Link to="/faq" className="mt-10 hidden md:block ">
                    <Button
                        className="max-w-[14.4375rem] w-full"
                        variant={"primary"}
                    >
                        Have Other Questions?
                    </Button>
                </Link>
            </div>
        </div>
    );
};
