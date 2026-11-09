import React, { FC, ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FadeIn from "./FadeIn";

type ContainerProps = {
    children: ReactNode;
};

const PageContainer: FC<ContainerProps> = ({ children }) => {
    return (
        <FadeIn>
            <Header />
            <div className="center" >
                {children}
            </div>
            <Footer />
        </FadeIn>
    );
};

export default PageContainer;
