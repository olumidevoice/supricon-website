import CustomHero from "../../components/common/CustomHero";
import Connect from "../home/Connect";
import Faqs from "../home/Faqs";
import CoreOfferings from "./CoreOfferings";
import ServicesList from "./ServicesList";
import Travel from "./Travel";

const ServicePage = () => {
    return (
        <div>
            <CustomHero
                title="Our Services"
                desc={
                    <div className="max-w-[50rem]">
                        Supricon Limited is structured to serve in multiple
                        sectors
                    </div>
                }
            />
            <ServicesList />
            <CoreOfferings />
            <Travel />
            <Connect />
            <Faqs />
        </div>
    );
};

export default ServicePage;
