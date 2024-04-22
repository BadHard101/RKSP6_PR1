import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from "../../Button/Button.jsx";
import {toggleAgreement} from "../../../store/slices/agreementSlice.jsx";

const AgreementForm = () => {
    const {agreementAccepted} = useSelector(state => state.agreement);
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        dispatch(toggleAgreement());
        console.log(agreementAccepted);
    };

    return (
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: "center",
            margin: '1rem'
        }}>
            <label>
                <input
                    type="checkbox"
                    checked={agreementAccepted}
                    onChange={handleCheckboxChange}
                />
                Я принимаю пользовательское соглашение
            </label>
            <br/>
            <Button type="submit" disabled={!agreementAccepted}>
                Подтвердить соглашение
            </Button>
        </form>
    );
};

export default AgreementForm;
