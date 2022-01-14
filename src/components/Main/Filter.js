import React, {useState} from 'react';
import {Select, Input, Button} from 'antd';
import {SearchOutlined} from "@ant-design/icons";
import {metroChildren, roomsChildren} from "../../utils/consts";

const Filter = ({ setFilter }) => {
    const [ rooms, setRooms ] = useState(null);
    const [ metro, setMetro ] = useState(null);
    const [ costMin, setCostMin ] = useState(null);
    const [ costMax, setCostMax ] = useState(null);



    const searchButton = () => {
        if (rooms == null && metro == null && costMin == null && costMax == null){
            setFilter(null)
        } else {
        setFilter({
            rooms: rooms,
            minCost: costMin,
            maxCost: costMax,
            metro: metro,
        })}

    }
    const handleRooms = (e) => {
        e.length === 0 ? setRooms(null) : setRooms(e);
    }

    const handleCostMin = (e) => {
        e.target.value === "" ? setCostMin(null) : setCostMin(e.target.value);
    }

    const handleCostMax = (e) => {
        e.target.value === "" ? setCostMax(null) : setCostMax(e.target.value);
    }
    const handleMetro = (e) => {
        e.length === 0 ? setMetro(null) : setMetro(e);
    }

    return (
        //TODO стилизовать инпуты и кнопку
        <div className="search-block">`
            <div className="search">
                <Select
                    className="search-input"
                    mode="multiple"
                    allowClear
                    style={{ width: 200 }}
                    placeholder="Кол-во комнат"
                    size="large"
                    onChange={handleRooms}
                >
                    {roomsChildren}
                </Select>
                <Input className="search-input" placeholder="Цена от" size="large" style={{ width: 200 }} value={costMin} onChange={handleCostMin}/>
                <Input className="search-input" placeholder="Цена до" size="large" style={{ width: 200 }} value={costMax} onChange={handleCostMax}/>
                <Select
                    className="search-input"
                    mode="multiple"
                    allowClear
                    style={{ width: 200 }}
                    placeholder="Метро"
                    size="large"
                    onChange={handleMetro}
                >
                    {metroChildren}
                </Select>
                <Button className="search__button" icon={<SearchOutlined />} onClick={searchButton}>Искать</Button>
            </div>
        </div>
    );
};

export default Filter;