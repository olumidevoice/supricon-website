import CustomHero from "../../components/common/CustomHero";
import Faqs from "../home/Faqs";
import ContactSection from "./ContactSection";

const ContactPage = () => {
    return (
        <div>
            <CustomHero
                title="contact Us"
                desc={
                    <div className="">
                        We are here to connect and build the future with you.
                    </div>
                }
            />

            <ContactSection />

            <Faqs />
        </div>
    );
};

export default ContactPage;
