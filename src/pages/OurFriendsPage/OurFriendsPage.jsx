import { Helmet, HelmetProvider } from 'react-helmet-async';
import {Title} from "../NewsPage/NewsPage.styled.js";



export default function OurFriendsPage() {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>OurFriendsPage</title>
                </Helmet>
                <Title>Hello Pasha це сторінка OurFriendsPage</Title>
            </div>
        </HelmetProvider>
    );
}
