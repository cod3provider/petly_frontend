import { NoticesCategoriesNavLink, NoticesCategoriesNavUl } from "./NoticesCategoriesNav.styled";

const NoticesCategoriesNav = () => {
    return <NoticesCategoriesNavUl>
        <li>
            <NoticesCategoriesNavLink to="/notices/sell">sell</NoticesCategoriesNavLink>
        </li>
        <li>
            <NoticesCategoriesNavLink to="/notices/lost-found">lost/found</NoticesCategoriesNavLink>
        </li>
        <li>
            <NoticesCategoriesNavLink to="/notices/for-free">in good hands</NoticesCategoriesNavLink>
        </li>
        <li>
            <NoticesCategoriesNavLink to="/notices/favorite">favorite ads</NoticesCategoriesNavLink>
        </li>
        <li>
            <NoticesCategoriesNavLink to="/notices/own">my ads</NoticesCategoriesNavLink>
        </li>
    </NoticesCategoriesNavUl>;
}

export default NoticesCategoriesNav;