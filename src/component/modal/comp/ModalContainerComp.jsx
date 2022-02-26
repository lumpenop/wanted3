import React, {} from 'react';
import { ModalContainer } from '../style/ModalStyle';
import { ModalButtonComp } from './ModalButtonComp';
import { ModalPopupComp } from './ModalPopupComp';

export const ModalContainerComp = () => {

    

    return(
        <>
            <ModalContainer>
                <ModalButtonComp>
                </ModalButtonComp>
                <ModalPopupComp>

                </ModalPopupComp>
            </ModalContainer>
        </>
    )
}

