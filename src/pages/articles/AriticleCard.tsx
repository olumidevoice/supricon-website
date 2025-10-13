import { Link } from "react-router";
import type { ArticleType } from "../../types/types";

const AriticleCard = ({ article }: { article: ArticleType }) => {
    return (
        <>
            <Link
                to={article.url}
                key={article.id}
                className="relative overflow-hidden rounded-xs min-h-[25rem] md:min-h-[30rem]  group"
            >
                {/* Background image */}
                <img
                    src={`/images/blog/b_sample.jpg`}
                    alt={article.title}
                    className="w-full h-full max-h-full max-w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                    style={{
                        background:
                            "linear-gradient(0deg, rgba(45, 172, 207, 0.4), rgba(45, 172, 207, 0.4)), linear-gradient(180deg, rgba(45, 172, 207, 0) 0%, #2DACCF 100%)",
                    }}
                />

                {/* Text content */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-sm font-ss3 mb-1">{article.date}</p>
                    <h3 className="font-semibold text-2xl max-w-[19.125rem] leading-tight line-clamp-2">
                        {article.title}
                    </h3>
                </div>
            </Link>
        </>
    );
};

export default AriticleCard;
