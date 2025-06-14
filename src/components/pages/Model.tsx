import React from 'react';
import {adidasArr, AdidasItem} from "./Adidas.tsx";
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma.tsx";

type crossModels = {
    [key: string]: (AdidasItem[] | PumaItem[]);
}

const crossModels: crossModels =  {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    {/*для перехода на отдельную модель кроссовка*/
    }

    //todo: необхожимо убрать хардкод массива
    const params = useParams();
    console.log(params);

    const {model, id} = useParams<{ model: string, id: string }>();
    // Если у вас роут: /model/:id
    // И текущий URL: /model/42
    // То useParams() вернёт объект: { id: "42" }
    // string потому что все параметры URL всегда строки

    const currentModel = model
        ? crossModels[model]?.find(item => item.id === Number(id))
        : null


    return (
        <>
            {currentModel
                ? <div style={{display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                    <h2>{currentModel.model}</h2>
                    <img src={currentModel.picture} alt={currentModel.model}/>
                    <p>Цена: {currentModel.price}</p>
                    <p>Коллекция: {currentModel.collection}</p>
                </div>
                : <div>Модель не найдена!</div>}
        </>

    );
};