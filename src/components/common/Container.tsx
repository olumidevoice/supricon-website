import { type ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div
            className={`
            w-full mx-auto px-4
            sm:px-6 
            md:px-8 
            lg:px-10 
            xl:px-[60px] 
            ${className || ""}
        `}
        >
            {children}
        </div>
    );
};

export default Container;
