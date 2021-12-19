import React from 'react';
import {flats} from "../../flats";


const Last = () => {
    return (
        <section className="main">
            <div className="options-section">
                <div className="options-tittle">Последние варианты</div>
                <div className="options">
                    {flats.map(item => {
                        return (
                            <div className="option">
                                <img src={process.env.PUBLIC_URL + item.img} className="option-image"/>
                                <div className="option-description">
                                    <div className="option-description-line1">
                                        <div>{item.cost} р.</div>
                                        <div>{item.square} кв. м</div>
                                    </div>
                                    <div className="option-description-line2">м. {item.metro}</div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
};

export default Last;