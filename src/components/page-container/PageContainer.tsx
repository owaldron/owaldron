import React, { FC, ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

type ContainerProps = {
    children: ReactNode;
};

const PageContainer: FC<ContainerProps> = ({ children }) => {
    return (
        <article>
            <Header />
            <div className="center" >
                {children}
            </div>
            <Footer />
        </article>
    );
};

export default PageContainer;
