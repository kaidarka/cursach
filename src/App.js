import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import Header from "./components/Header";


function App() {

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
