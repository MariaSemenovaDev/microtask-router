import React from 'react';
import {adidasArr} from "./Adidas.tsx";
import {useParams} from "react-router";

export const Model = () => {
    {/*для перехода на отдельную модель кроссовка*/
    }
    const params = useParams();


    const { id } = useParams<{ id: string }>();
    // Если у вас роут: /model/:id
    // И текущий URL: /model/42
    // То useParams() вернёт объект: { id: "42" }
    // string потому что все параметры URL всегда строки

    const model = adidasArr.find((item) => item.id === Number(id));

    if (!model) {
        return <div>Модель не найдена!</div>;
    }

    return (
        <div>
            <h2>{model.model}</h2>
            <img src={model.picture} alt={model.model}/>
            <p>Цена: {model.price}</p>
            <p>Коллекция: {model.collection}</p>
        </div>
    );
};
