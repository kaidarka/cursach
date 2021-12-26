import React, {useState} from 'react';
import { Select, Input } from 'antd';

const Filter = () => {
    const { Option } = Select;
    const { rooms, setRooms } = useState();
    const { costMin, setCostMin } = useState(0);
    const { costMax, setCostMax } = useState(0);

    const roomsChildren = [
        <Option key={'Студия'}>Студия</Option>,
        <Option key={1}>1 Комната</Option>,
        <Option key={2}>2 Комнаты</Option>,
        <Option key={3}>3 Комнаты</Option>,
        <Option key={4}>4 Комнаты</Option>,
    ];
    const metroChildren = [
        <Option key={'Василеостровская'}>Василеостровская</Option>,
        <Option key={'Петроградская'}>Петроградская</Option>,
    ];


    const handleCostMin = (value) => {
        value < 0 ? setCostMin(0) : setCostMin(value);
    }
    const handleCostMax = (value) => {

    }

    return (
        <div className="search-block">
            <div className="search">
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Кол-во комнат"
                    size="large"
                >
                    {roomsChildren}
                </Select>
                <Input placeholder="Цена от" size="large" value={costMin} onChange={handleCostMin} />
                <Input placeholder="Цена до" size="large" value={costMax} onChange={handleCostMax} />
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Метро"
                    size="large"
                >
                    {metroChildren}
                </Select>
            </div>
        </div>
    );
};

export default Filter;