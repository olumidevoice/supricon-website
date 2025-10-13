import { Link } from "react-router";
import Container from "../../components/common/Container";
import SectionBadge from "../../components/common/SectionBadge";
import { Button } from "../../components/ui/button";
import AriticleCard from "./AriticleCard";
import type { ArticleType } from "../../types/types";

const RelatedArticles = () => {
    const articles: ArticleType[] = [
        {
            id: 1,
            title: "ENTER ARTICLE TITLE IN THIS SPACE",
            date: "10 May, 2025",
            image: "/images/article1.jpg",
            url: "/articles/1",
        },
        {
            id: 2,
            title: "ENTER ARTICLE TITLE IN THIS SPACE",
            date: "10 May, 2025",
            image: "/images/article2.jpg",
            url: "/articles/2",
        },
        {
            id: 3,
            title: "ENTER ARTICLE TITLE IN THIS SPACE",
            date: "10 May, 2025",
            image: "/images/article3.jpg",
            url: "/articles/3",
        },
    ];
    return (
        <div className="py-[3rem] md:py-[6.25rem] bg-white ">
            <Container>
                <div className="">
                    <div className="f_btw gap-4 flex-col md:flex-row items-start  md:items-end">
                        <div className="">
                            <SectionBadge text="Supricon Articles" />
                            <h2 className="heading_2 mt-1 uppercase">
                                Related Articles
                            </h2>
                        </div>

                        <Link to="">
                            <Button
                                variant={"primary"}
                                className="w-full  max-w-[10rem]"
                            >
                                View All Articles
                            </Button>
                        </Link>
                    </div>

                    {/* blog list */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 ">
                        {articles.map((article) => (
                            <AriticleCard article={article} key={article.id} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RelatedArticles;
