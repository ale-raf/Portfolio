import { Helmet, HelmetProvider } from "react-helmet-async";

function HelmetComponent(props) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Helmet>
        </HelmetProvider>
    )
}

export default HelmetComponent