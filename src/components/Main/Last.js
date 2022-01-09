import React from 'react';
import useFirestore from "../hooks/useFirestore";


const Last = () => {

    const flats = useFirestore('flats');
    return (
        <section className="main">
            <div className="options-section">
                <div className="options-tittle">Последние варианты</div>
                <div className="options">
                    {flats.docs.slice(0, 6)
                        .sort((a,b) => a.date < b.date ? 1 : -1)
                        .map(item => {
                        return (
                            <div key={item.cost} className="option">
                                <img src={item.image} className="option-image"/>
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