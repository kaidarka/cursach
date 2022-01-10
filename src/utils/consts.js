import {Select} from "antd";

export const LIST_ROUTE = '/list';
export const ADD_ROUTE = '/add';
export const MAIN_ROUTE = '/';

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
];