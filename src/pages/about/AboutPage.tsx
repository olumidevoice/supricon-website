import CustomHero from "../../components/common/CustomHero";
import About from "../home/About";
import Connect from "../home/Connect";
import Faqs from "../home/Faqs";
import Aims from "./Aims";
import Values from "./Values";

const AboutPage = () => {
    return (
        <div>
            <CustomHero
                title="About Supricon"
                desc={
                    <div className="max-w-[50rem]">
                        Learn more about Supricon and our commitment to
                        excellent solutions and discover our mission, vision,
                        values, and history.
                    </div>
                }
            />

            <About hideButton />
            <Aims />
            <Values />
            <Connect />
            <Faqs />
        </div>
    );
};

export default AboutPage;
