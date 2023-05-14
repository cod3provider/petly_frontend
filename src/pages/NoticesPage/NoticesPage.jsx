import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Title} from "../NewsPage/NewsPage.styled.js";


export default function NoticesPage() {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>NoticesPage</title>
                </Helmet>
                <Title>Hello Pasha це сторінка NoticesPage</Title>
            </div>
        </HelmetProvider>
    );
}
