import React from 'react';
import useFirestore from "../hooks/useFirestore";


const Last = () => {

    const flats = useFirestore('flats');
    return (
        <section className="main">
            <div className="options-section">
                <div className="options-tittle">Последние варианты</div>
                <div className="options">
                    {flats.docs.slice(0, 6).map(item => {
                        return (
                            <div key={item.cost} className="option">
                                <img src={item.image} className="option-image"/>
                                <div className="option-description">
                                    <div className="option-description-line1">
                                        <div><b>{item.cost}</b> р.</div>
                                        <div><b className="option-bold">{item.square}</b> кв. м</div>
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