import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import HeadingComponent from "../Header";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


test("Should the component Render",()=>{
    render(
    <BrowserRouter>
        <Provider store={store}>
            <HeadingComponent />
        </Provider>
    </BrowserRouter>
    )
})