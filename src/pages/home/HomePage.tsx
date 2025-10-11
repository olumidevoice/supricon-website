import About from "./About";
import Connect from "./Connect";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Offers from "./Offers";
import Stats from "./Stats";

const HomePage = () => {
    return (
        <div className="bg-black-25">
            <Hero />
            <Stats />
            <About />
            <Offers />
            <Connect />
            <Faqs />
        </div>
    );
};

export default HomePage;
