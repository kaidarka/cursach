import {ADD_ROUTE, LIST_ROUTE, MAIN_ROUTE} from "./utils/consts";
import List from "./components/List/List";
import AddFlat from "./components/AddFlat/AddFlat";
import Home from "./components/Home";

export const publicRoutes =  [
    {
        path: LIST_ROUTE,
        Component: List
    },
    {
        path: MAIN_ROUTE,
        Component: Home
    },
 ]
export const privateRoutes =  [
    {
        path: MAIN_ROUTE,
        Component: Home
    },
    {
        path: ADD_ROUTE,
        Component: AddFlat
    },
    {
        path: LIST_ROUTE,
        Component: List
    },
]