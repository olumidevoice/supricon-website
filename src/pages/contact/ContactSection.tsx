import Container from "../../components/common/Container";
import SectionBadge from "../../components/common/SectionBadge";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
    return (
        <div className="bg-black-25 py-[3rem] md:py-[6.25rem]">
            <Container className="md:px-[3.75rem]">
                <div className="flex flex-col-reverse md:flex-row gap-[3.75rem]">
                    <div className="bg-white px-5 py-10 w-full md:p-10">
                        <SectionBadge text="Contact Form" />
                        <h2 className="heading_3 mt-1">Get in Touch With Us</h2>
                        <p className="mt-5 text-black-400 md:text-lg">
                            Fill out the form below.
                        </p>
                        <div className="mt-5 md:mt-10">
                            <ContactForm />
                        </div>
                    </div>
                    <div className=" max-w-[31.25rem] w-full">
                        <ContactInfo />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactSection;
