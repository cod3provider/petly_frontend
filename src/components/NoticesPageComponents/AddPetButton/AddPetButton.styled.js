import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { HiOutlinePlus } from 'react-icons/hi';
import { NavLink } from "react-router-dom";

export const AddPetButtonIcon= styled(HiOutlinePlus)`
    color: #ffffff;
    width: 24px;
    height: 24px;
`;

export const AddPetButtonLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 16px;
    color: #ffffff;
    position: absolute;
    right: 20px;
    top: 460px;
    z-index: 2;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: ${theme.baseColors.accentButtonColor};
`;

