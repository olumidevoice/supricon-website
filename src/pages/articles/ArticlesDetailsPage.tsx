import Container from "../../components/common/Container";
import SectionBadge from "../../components/common/SectionBadge";
import PopularArticles from "./PopularArticles";
import RelatedArticles from "./RelatedArticles";

const ArticlesDetailsPage = () => {
    return (
        <div className="bg-black-25 py-[2.5rem] md:py-[6.25em]">
            <Container>
                <div className=" ">
                    <div className="flex flex-col md:flex-row gap-[1.5rem] md:gap-[3.75rem] pb-[3rem]">
                        <div className="">
                            <SectionBadge text="10 May, 2025" />

                            <h2 className="heading_3 mt-1">
                                Enter The Longest Extended Article Title Inside
                                this Particular Space Get in Touch With Us
                            </h2>

                            <p className="mt-5 text-black-400 md:text-lg">
                                Supricon Limited is a diversified company
                                registered in Nigeria under the Companies and
                                Allied Matters Act, 2020. Established to provide
                                solutions across trade, commerce, supply, and
                                financial innovation, Supricon connects
                                businesses with opportunities that drive growth.
                            </p>
                        </div>

                        <div className=" max-w-[31.25rem] w-full">
                            <PopularArticles />
                        </div>
                    </div>
                </div>
            </Container>

            <RelatedArticles />
        </div>
    );
};

export default ArticlesDetailsPage;
