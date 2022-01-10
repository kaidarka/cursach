import React from 'react';
import Filter from "./Filter";

const Hero = ({ setFilter, filter }) => {
    return (
        <div className={filter == null ? "hero" : "hero hero_hide"}>
            <Filter setFilter={setFilter}/>
        </div>
    );
};

export default Hero;