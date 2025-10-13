import CustomHero from "../../components/common/CustomHero";
import Connect from "../home/Connect";
import ArticleList from "./ArticleList";

const ArticlesPage = () => {
    return (
        <div>
            <CustomHero
                title="Supricon Articles"
                desc={
                    <div className="max-w-[50rem]">
                        Discover expert insights, industry trends, project
                        spotlights, and helpful tips that will inspire your next
                        project.
                    </div>
                }
            />
            <ArticleList />
            <Connect />
        </div>
    );
};

export default ArticlesPage;
