import { Helmet, HelmetProvider } from "react-helmet-async";

function HelmetComponent({ title, description }) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    )
}

export default HelmetComponent