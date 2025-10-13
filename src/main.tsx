import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";
import ScrollToTop from "./components/common/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <App />
            <Toaster richColors />
        </BrowserRouter>
    </StrictMode>
);
