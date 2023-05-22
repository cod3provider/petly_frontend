import { NoticesCategoriesNavLink, NoticesCategoriesNavUl } from "./NoticesCategoriesNav.styled";
import styles from "./NoticesCategoriesNav.module.css"

const NoticesCategoriesNav = () => {
    return <NoticesCategoriesNavUl>
        <li>
            <NoticesCategoriesNavLink to="/notices/sell" className={styles.link}>sell</NoticesCategoriesNavLink>
        </li>
        <li>
            <NoticesCategoriesNavLink to="/notices/lost-found" className={styles.link}>lost/found</NoticesCategoriesNavLink>
        </li>
        <li>
            <NoticesCategoriesNavLink to="/notices/for-free" className={styles.link}>in good hands</NoticesCategoriesNavLink>
        </li>
        <li>
            <NoticesCategoriesNavLink to="/notices/favorite" className={styles.link}>favorite ads</NoticesCategoriesNavLink>
        </li>
        <li>
            <NoticesCategoriesNavLink to="/notices/own" className={styles.link}>my ads</NoticesCategoriesNavLink>
        </li>
    </NoticesCategoriesNavUl>;
}

export default NoticesCategoriesNav;