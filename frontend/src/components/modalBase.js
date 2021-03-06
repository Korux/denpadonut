import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import { getModal } from '../redux/selectors';
import { setModalShow, setModalState, setScrollable } from '../redux/actions';

import ModalAddSong from './modalAddSong';
import ModalEditSong from './modalEditSong';
import ModalDeleteSong from './modalDeleteSong';

const ModalContainer = styled.div`
    opacity :  ${({show}) => show ? '1' : '0'};
    pointer-events :  ${({show}) => show ? 'auto' : 'none'};
    width : auto;
    height : auto;
    background-color : ${({ theme }) => theme.modalColor};
    z-index : 999;
    position : fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius : 15px;
`;

const ModalDim = styled.a`
    display: inline-block;
    opacity :  ${({show}) => show ? '0.5' : '0'};
    pointer-events :  ${({show}) => show ? 'auto' : 'none'};
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 997;
    top: 0;
    left: 0;
`;

function ModalBase(){

    var modal = useSelector(getModal);
    const dispatch = useDispatch();

    const hideModal = () => {
        dispatch(setModalShow(false));
        dispatch(setModalState("none"));
    };

    useEffect(() => {
        dispatch(setScrollable(!modal.show));
    },[modal]);

    return(
        <Fragment>
            <ModalDim show={modal.show} onClick={hideModal}/>
            <ModalContainer show={modal.show}>
                {modal.type === "add" && <ModalAddSong/>}
                {modal.type === "edit" && <ModalEditSong/>}
                {modal.type === "delete" && <ModalDeleteSong/>}
            </ModalContainer>
        </Fragment>
    );
}

export default ModalBase;
