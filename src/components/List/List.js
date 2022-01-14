import React from 'react';
import useFirestore from "../hooks/useFirestore";
import {NavLink} from "react-router-dom";

const List = ({ filter }) => {
    const flats  = useFirestore('flats');
    let filteredFlats
    filteredFlats = flats.docs;
    if (filter.rooms != null) {
        filteredFlats = filteredFlats.filter(flat => filter.rooms.toLocaleString().includes(flat.rooms));
    }
    if (filter.minCost != null) {
        filteredFlats = filteredFlats.filter(flat => Number(flat.cost) >= filter.minCost);
    }
    if (filter.maxCost != null) {
        filteredFlats = filteredFlats.filter(flat => Number(flat.cost) <= filter.maxCost);
    }
    if (filter.metro != null) {
        filteredFlats = filteredFlats.filter(flat => filter.metro.includes(flat.metro));
    }
    return (
        <div className="options">
            {filteredFlats.sort((a, b) => a.date < b.date ? 1 : -1)
                .map(item => {
                    return (
                        <NavLink key={item.ids} to={`/${item.ids}`}>
                            <div className="option">
                                <img src={item.image} className="option-image"/>
                                <div className="option-description">
                                    <div className="option-description-line1">
                                        <div><b>{item.cost}</b> р.</div>
                                        <div><b className="option-bold">{item.square}</b> кв. м</div>
                                    </div>
                                    <div className="option-description-line2">м. {item.metro}</div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}

        </div>
    );
};

export default List;