import usePagination from '@mui/material/usePagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

import { List, Item, Dots, Arrow } from './Pagination.styled';

/**
 *
 * @param {number} count общее количество страниц;
 * @param {function} setPage функция обновления стейта текущей страницы;
 * @param {number} page стейт текущей страницы;
 * @param {number} mt margin-top;
 * @param {number} mb margin-bottom;
 */
const Pagination = ({ count, setPage, page, mt, mb }) => {
  //   const [Page, setPage] = useState(1);

  const props = {
    count,
    page,
    onChange: (event, page) => {
      if (page > count || page < 1) {
        return;
      }

      setPage(page);
    },
  };

  const { items } = usePagination(props);

  return (
    <nav>
      <List mt={mt} mb={mb}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = (
              <Dots {...item}>
                <BsThreeDots />
              </Dots>
            );
          } else if (type === 'page') {
            children = (
              <Item {...item} selected={selected}>
                {page}
              </Item>
            );
          } else {
            children = (
              <Arrow {...item}>
                {type === 'next' && <FaArrowRight />}
                {type === 'previous' && <FaArrowLeft />}
              </Arrow>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
};

export default Pagination;
