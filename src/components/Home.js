import React, {useState} from 'react';
import Last from "./Main/Last";
import Map from "./Main/Map";
import Footer from "./Footer";
import Hero from "./Main/Hero";
import List from "./List/List";

const Home = () => {
    const [ filter, setFilter ] = useState(null)
    if (filter === null) {
        return (
            <>
                <Hero filter={filter} setFilter={setFilter}/>
                <Last/>
                <Map/>
                <Footer/>
            </>
        );
    } else {
        return (
            <>
                <Hero setFilter={setFilter} filter={filter}/>
                <List filter={filter} />
                <Footer/>
            </>
        )
    }
};

export default Home;