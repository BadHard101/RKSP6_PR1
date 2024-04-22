import React, { useState } from "react";

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем обновление страницы по умолчанию
        handleClick(email, pass);
    };

    return (
        <div className="container mt-5"> {/* Добавляем контейнер Bootstrap с отступом сверху */}
            <div className="row justify-content-center"> {/* Выравниваем по центру */}
                <div className="col-md-6"> {/* Устанавливаем ширину */}
                    <div className="form-group"> {/* Группа формы */}
                        <form onSubmit={handleSubmit}> {/* Добавляем обработчик отправки формы */}
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control" // Стилизуем инпут
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control" // Стилизуем инпут
                                id="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="Enter password"
                            />

                            <button
                                type="submit"
                                className="btn btn-primary" // Стилизуем кнопку
                            >
                                {title}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Form};
