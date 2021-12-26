import React, {useState} from 'react';
import {Select, Input, Button} from 'antd';
import {SearchOutlined} from "@ant-design/icons";

const Filter = () => {
    const { Option } = Select;
    const { rooms, setRooms } = useState();
    const { costMin, setCostMin } = useState(0);
    const { costMax, setCostMax } = useState(0);

    //TODO вынести комнаты в отдельный файл
    const roomsChildren = [
        <Option key={'Студия'}>Студия</Option>,
        <Option key={1}>1 Комната</Option>,
        <Option key={2}>2 Комнаты</Option>,
        <Option key={3}>3 Комнаты</Option>,
        <Option key={4}>4 Комнаты</Option>,
    ];
    //TODO вынести метро в отдельный файл
    const metroChildren = [
        <Option key={'Василеостровская'}>Василеостровская</Option>,
        <Option key={'Петроградская'}>Петроградская</Option>,
    ];

    //TODO Написать валидацию фильтров цены
    const handleCostMin = (value) => {
        value < 0 ? setCostMin(0) : setCostMin(value);
    }
    const handleCostMax = (value) => {

    }
    //TODO написать переход по поиску с передачей данных

    return (
        //TODO стилизовать инпуты и кнопку
        <div className="search-block">`
            <div className="search">
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: 200 }}
                    placeholder="Кол-во комнат"
                    size="large"
                >
                    {roomsChildren}
                </Select>
                <Input placeholder="Цена от" size="large" style={{ width: 200 }} value={costMin} onChange={handleCostMin} />
                <Input placeholder="Цена до" size="large" style={{ width: 200 }} value={costMax} onChange={handleCostMax} />
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: 200 }}
                    placeholder="Метро"
                    size="large"
                >
                    {metroChildren}
                </Select>
                <Button icon={<SearchOutlined />}>Искать</Button>
            </div>
        </div>
    );
};

export default Filter;