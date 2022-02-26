import React, {uesState} from 'react';
import { ModalButton } from '../style/ModalStyle';

export const ModalButtonComp = () =>{

    const onClick = ()=> {
        console.log('hi');
    }

    return(
        <>
            <ModalButton onClick={onClick}>Modal</ModalButton>    
        </>
    )
}


