import { Link } from "react-router";

interface Article {
    id: number;
    title: string;
    image: string;
    url: string;
}

const popularArticles: Article[] = [
    {
        id: 1,
        title: "ENTER ARTICLE TITLE IN THIS SPACE",
        image: "/images/article1.jpg",
        url: "/articles/1",
    },
    {
        id: 2,
        title: "ENTER ARTICLE TITLE IN THIS SPACE",
        image: "/images/article2.jpg",
        url: "/articles/2",
    },
    {
        id: 3,
        title: "ENTER ARTICLE TITLE IN THIS SPACE",
        image: "/images/article3.jpg",
        url: "/articles/3",
    },
];
const PopularArticles: React.FC = () => {
    return (
        <section className="bg-white border border-black-100 p-6 md:p-8 w-full max-w-[25rem] rounded-xs">
            <h2 className="text-[1rem] md:text-[1.75rem] font-bold mb-6 text-black">
                POPULAR ARTICLES
            </h2>

            <div className="space-y-6">
                {popularArticles.map((article) => (
                    <Link
                        to={article.url}
                        key={article.id}
                        className="flex items-center gap-5 group cursor-pointer"
                    >
                        <img
                            src={"/images/blog/b_sample.jpg"}
                            alt={article.title}
                            className="w-[7.5rem] h-20 object-cover rounded-xs transition-transform duration-300 group-hover:scale-105"
                        />
                        <div>
                            <h3 className="text-sm md:text-base font-semibold leading-snug text-black group-hover:text-blue-500 transition-colors">
                                {article.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default PopularArticles;
