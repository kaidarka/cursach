import React, {useContext, useState } from 'react';
import {Context} from "../../index";
import {Button, Form, Input, Select} from "antd";
import TextArea from "antd/es/input/TextArea";
import {Option} from "antd/es/mentions";
import ProgressBar from "./ProgressBar";
import {Redirect} from "react-router-dom";

const AddFlat = () => {
    const {firestore} = useContext(Context);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [validate, setValidate] = useState(false);
    const types = ['image/png', 'image/jpeg'];

    const changeImgHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Выберите подходящий файл (png/jpeg)');
        }
    }
    const id = Math.floor(Math.random() * 100000).toLocaleString();
    const onFinish = (values) => {
        const collectionFlats = firestore.collection('flats');
        collectionFlats.add({
            ids: id,
            date: new Date(),
            image: url,
            description: values.description,
            metro: values.metro,
            cost: values.cost,
            square: values.square,
            rooms: values.rooms,
        });
        setValidate(true);
    }

    const onFinishFailed = ({errorInfo}) => {
        setError(errorInfo);
    }
    if (validate) {
        return <Redirect to={'/'}/>
    } else {
        return (
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 10}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <input type='file' onChange={changeImgHandler}/>
                {error && <div className="error">{error}</div>}
                {file && <div className="success">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} setUrl={setUrl}/>}

                <Form.Item
                    label="Описание"
                    name="description"
                    rules={[{required: true, message: 'Ведите описание!'}]}
                >
                    <TextArea rows={5}/>
                </Form.Item>

                <Form.Item
                    label="Цена"
                    name="cost"
                    rules={[{required: true, message: 'Ведите цену!'}]}
                >
                    <Input prefix="₽" suffix="РУБ" style={{width: 200}}/>
                </Form.Item>

                <Form.Item
                    label="Площадь"
                    name="square"
                    rules={[{required: true, message: 'Ведите площадь!'}]}
                >
                    <Input suffix="кв. м" style={{width: 200}}/>
                </Form.Item>

                <Form.Item
                    label="Кол-во комнат"
                    name="rooms"
                    rules={[{required: true, message: 'Выберете метро!'}]}
                >
                    <Select
                        style={{width: 200}}
                    >
                        <Option value="0">Студия</Option>
                        <Option value="1">1 Комната</Option>
                        <Option value="2">2 Комнаты</Option>
                        <Option value="3">3 Комнаты</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Метро"
                    name="metro"
                    rules={[{required: true, message: 'Выберете метро!'}]}
                >
                    <Select
                        showSearch
                        style={{width: 200}}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="Василеостровская">Василеостровская</Option>
                        <Option value="Петроградская">Петроградская</Option>
                    </Select>
                </Form.Item>


                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <button className="save-btn" type="submit">Сохранить</button>
                </Form.Item>
            </Form>
        );
    }
}

export default AddFlat;