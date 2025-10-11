import Faqs from "../home/Faqs";
import CustomHero from "../../components/common/CustomHero";

const FaqPage = () => {
    return (
        <div>
            <CustomHero
                title={
                    <>
                        Got Questions?
                        <br /> We've Got Answers!
                    </>
                }
                desc={
                    <div className="max-w-[50rem] mx-auto">
                        Find answers to commonly asked questions about Supricon,
                        what we do, and how to reach us.
                    </div>
                }
            />
            <Faqs hideInfo />
        </div>
    );
};

export default FaqPage;
