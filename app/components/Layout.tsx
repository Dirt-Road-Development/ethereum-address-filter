import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <>
            <Navigation />
            <div id="layout-container">
                {props.children}
            </div>
            <Footer />
        </>
    );
}