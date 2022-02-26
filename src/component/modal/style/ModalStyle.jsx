import styled from 'styled-components';
import { Container, Div } from '../../../Styled';

export const ModalContainer = styled(Container)`
    position: relative;
    height: 160px;
`
export const ModalButton = styled(Div)`
    margin: auto auto;
    background-color: black;
    color: white;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
`
export const ModalPopup = styled(Div)`
    width: 140px;
    height: 140px;
    background-color: lightgray;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(calc(-50%));
    display: none;
`