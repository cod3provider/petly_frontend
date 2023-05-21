import styled from 'styled-components';
import { theme } from '../../../utils/theme.jsx';

// export const Card = styled.li`
//   //border: 1px solid #ccc;
//   padding: 15px 30px;
//   text-align: center;
//   background: #ffffff;
//   box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
//   border-radius: 40px;
//
//   //@media (max-width: 767px) {
//   //  width: 360px;
//   //  height: 250px;
//   //  margin: 0 auto;
//   //}
// `;
//
// export const CardImage = styled.img`
//   justify-content: start;
//   width: 100px;
//   height: auto;
//   //object-fit: cover;
//
//   // @media ${theme.breakpoints.tablet.media} {
//   //   width: 125px;
//   // }
//   //
//   // @media ${theme.breakpoints.desktop.media} {
//   //   width: 145px;
//   // }
// `;
//
// export const FriendLink = styled.a`
//   font-weight: 700;
//   font-size: ${theme.fontSizes.ml};
//   line-height: 1.35;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: ${theme.baseColors.accentColor};
//   transition: all 250ms linear;
//
// //  ADD HOVER <-
// `;
//
// export const ContactLinks = styled.ul`
//   display: flex;
//   //flex-direction: column;
//   justify-content: space-around;
//   margin-top: 10px;
//   color: #111111;
// `;
//
// export const LinkWrap = styled.li`
//
// `;

export const Card = styled.div`
  //border: 1px solid #ccc;
  padding: 15px 30px;
  text-align: center;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  //@media (max-width: 767px) {
  //  width: 360px;
  //  height: 250px;
  //  margin: 0 auto;
  //}
`;

export const CardImage = styled.img`
  width: 100px;
  height: auto;
  align-self: flex-start;
  //object-fit: cover;

  @media ${theme.breakpoints.tablet.media} {
    width: 125px;
  }

  @media ${theme.breakpoints.desktop.media} {
    width: 145px;
  }
`;

export const FriendName = styled.a`
  font-weight: 700;
  font-size: ${theme.fontSizes.ml};
  line-height: 1.35;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.baseColors.accentColor};
  transition: all 250ms linear;

  [data-tooltip]:hover::after {
    content: attr(data-tooltip);
    opacity: 1;/* Выводим текст */
  }

//  ADD HOVER <-
`;

export const FriendLink = styled.a`
  
  // text-decoration: none;
  // color: inherit;
  // font-weight: 500;
  // font-size: 12px;
  // line-height: 16px;
  color: #111111;
  //cursor: pointer;
  transition: color 250ms linear;
  
  &:hover {
    color: #54ADFF;
  }
  
  // @media ${p => p.theme.breakpoints.tablet.media} {
  //   font-size: 14px;
  //   line-height: 19px;
  // }
  // @media ${p => p.theme.breakpoints.desktop.media} {
  //   font-size: 16px;
  //   line-height: 22px;
  // }
`

export const ContactLinks = styled.div`
  display: flex;
  //flex-direction: column;
  //justify-content: space-around;
  margin-top: 10px;
  color: #111111;
  gap: 20px;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  @media ${p => p.theme.breakpoints.tablet.media} {
    font-size: 14px;
    line-height: 19px;
  }
  @media ${p => p.theme.breakpoints.desktop.media} {
    font-size: 16px;
    line-height: 22px;
  }
`;


export const ContactsItem = styled.li`
  text-align: start;
`;

export const ContactText = styled.p`
  color: #111111;

  [data-tooltip] {
    position: relative; /* Относительное позиционирование */
  }
  [data-tooltip]::after {
    content: attr(data-tooltip); /* Выводим текст */
    position: absolute; /* Абсолютное позиционирование */
    width: 300px; /* Ширина подсказки */
    left: 0; top: 0; /* Положение подсказки */
    background: #3989c9; /* Синий цвет фона */
    color: #fff; /* Цвет текста */
    padding: 0.5em; /* Поля вокруг текста */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Параметры тени */
    pointer-events: none; /* Подсказка */
    opacity: 0; /* Подсказка невидима */
    transition: 1s; /* Время появления подсказки */
  }
  [data-tooltip]:hover::after {
    opacity: 1; /* Показываем подсказку */
    top: 2em; /* Положение подсказки */
  }
`
