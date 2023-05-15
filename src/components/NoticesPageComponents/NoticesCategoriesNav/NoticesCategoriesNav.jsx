import { NavLink } from "react-router-dom";

const NoticesCategoriesNav = () => {
    return <ul>
        <li>
            <NavLink to="/notices/sell">sell</NavLink>
        </li>
        <li>
            <NavLink to="/notices/lost-found">lost/found</NavLink>
        </li>
        <li>
            <NavLink to="/notices/for-free">in good hands</NavLink>
        </li>
    </ul>;
}

export default NoticesCategoriesNav;