import React from 'react';
import {useParams} from "react-router-dom";

const Card = () => {
    const { id } = useParams();

    return(
        <div className="hero-info">
            <div className="info">
                <div className="info-image"></div>
                <div className="info-text">
                    <div>
                        <div className="info-text-price">35000 р.</div>
                        <div className="info-text-square">29 кв. м</div>
                    </div>
                    <div className="info-text-subway">м. Василеостровская</div>
                    <div className="info-text-tittle">Описание</div>
                    <div className="info-text-description">Стильная квартира возле метро Василеостровская. Развитая
                        инфраструктура , множество магазинов , кафе.
                        Полноценная кухня, диван раскладывается. Комфортный диван для просмотра телевизора и сна.
                        Посудомоечная машина, плита, холодильник, смарт тв
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;