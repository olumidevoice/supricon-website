import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/404/NotFoundPage";
import AboutPage from "../pages/about/AboutPage";
import FaqPage from "../pages/Faq/FaqPage";
import ServicePage from "../pages/service/ServicePage";
import ContactPage from "../pages/contact/ContactPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>

            <Route path="*" element={<MainLayout />}>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
