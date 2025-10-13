import Container from "../../components/common/Container";
import type { ArticleType } from "../../types/types";
import AriticleCard from "./AriticleCard";

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
    {
        id: 4,
        title: "ENTER ARTICLE TITLE IN THIS SPACE",
        date: "10 May, 2025",
        image: "/images/article4.jpg",
        url: "/articles/4",
    },
    {
        id: 5,
        title: "ENTER ARTICLE TITLE IN THIS SPACE",
        date: "10 May, 2025",
        image: "/images/article5.jpg",
        url: "/articles/5",
    },
    {
        id: 6,
        title: "ENTER ARTICLE TITLE IN THIS SPACE",
        date: "10 May, 2025",
        image: "/images/article6.jpg",
        url: "/articles/6",
    },
];

const ArticleList: React.FC = () => {
    return (
        <section className="py-10 md:py-20 bg-white">
            <Container className="md:px-[7.5rem]">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <AriticleCard article={article} key={article.id} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ArticleList;
