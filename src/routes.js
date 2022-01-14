import {ADD_ROUTE, CARD_ROUTE, MAIN_ROUTE} from "./utils/consts";
import AddFlat from "./components/AddFlat/AddFlat";
import Home from "./components/Home";
import Card from "./components/Card/Card";

export const publicRoutes =  [
    {
        path: CARD_ROUTE,
        Component: Card
    },
    {
        path: MAIN_ROUTE,
        Component: Home
    },
 ]
export const privateRoutes =  [
    {
        path: ADD_ROUTE,
        Component: AddFlat
    },
    {
        path: MAIN_ROUTE,
        Component: Home
    },
    {
        path: CARD_ROUTE,
        Component: Card
    },
]