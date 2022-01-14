import React from 'react';
import {useParams} from "react-router-dom";
import useFirestore from "../hooks/useFirestore";

const Card = () => {
    const { id } = useParams();
    const flats  = useFirestore('flats');
    const flat = flats.docs.filter(flat => flat.ids === id);
    if (flat.length !== 0) {
        return (
            <div className="hero-info">
                <div className="info">
                    <div className="info-image">
                        <img src={flat[0].image} alt=""/>
                    </div>
                    <div className="info-text">
                        <div>
                            <div className="info-text-price">{flat[0].cost} р.</div>
                            <div className="info-text-square">{flat[0].square} кв. м</div>
                        </div>
                        <div className="info-text-subway">м. {flat[0].metro}</div>
                        <div className="info-text-tittle">Описание</div>
                        <div className="info-text-description">{flat[0].description}</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>Загрузка</div>
    }
};

export default Card;