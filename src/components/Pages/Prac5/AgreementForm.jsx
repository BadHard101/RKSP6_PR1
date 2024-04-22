import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from "../../Button/Button.jsx"; // Предполагается, что у вас есть компонент Button
import { toggleAgreement } from "../../../store/slices/agreementSlice.jsx"; // Предполагается, что у вас есть action creator для переключения соглашения
import Header from "../../Header/Header.jsx"; // Предполагается, что у вас есть компонент Header

const AgreementForm = () => {
    const { agreementAccepted } = useSelector(state => state.agreement);
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        dispatch(toggleAgreement());
        console.log(agreementAccepted);
    };

    return (
        <>
            <Header />
            <div className="container mt-5"> {/* Добавляем контейнер Bootstrap с отступом */}
                <form style={{ maxWidth: '400px', margin: '0 auto' }}> {/* Максимальная ширина формы и выравнивание по центру */}
                    <div className=""> {/* Группа формы для лейбла и чекбокса */}
                        <div className="form-check"> {/* Для стилизации чекбокса */}
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="agreementCheckbox"
                                checked={agreementAccepted}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="agreementCheckbox">
                                Я принимаю пользовательское соглашение
                            </label>
                        </div>
                    </div>
                    <Button type="submit" disabled={!agreementAccepted} className="btn btn-primary"> {/* Стилизация кнопки */}
                        Подтвердить соглашение
                    </Button>
                </form>
            </div>
        </>
    );
};

export default AgreementForm;
