import {Select} from "antd";

export const ADD_ROUTE = '/add';
export const MAIN_ROUTE = '/';
export const CARD_ROUTE = '/:id';

const { Option } = Select;

export const roomsChildren = [
    <Option key={'Студия'} value={0}>Студия</Option>,
    <Option key={1} value={1}>1 Комната</Option>,
    <Option key={2} value={2}>2 Комнаты</Option>,
    <Option key={3} value={3}>3 Комнаты</Option>,
    <Option key={4} value={4}>4 Комнаты</Option>,
];

export const metroChildren = [
    <Option key={'Василеостровская'}>Василеостровская</Option>,
    <Option key={'Петроградская'}>Петроградская</Option>,
    <Option key={'Обводный канал'}>Обводный канал</Option>,
    <Option key={'Фрунзенская'}>Фрунзенская</Option>,
    <Option key={'Лиговский проспект'}>Лиговский проспект</Option>,
    <Option key={'Черная речка'}>Черная речка</Option>,
];