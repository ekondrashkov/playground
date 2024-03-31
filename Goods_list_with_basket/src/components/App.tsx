import "./app.css"

import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom"
import { composeWithDevTools } from "@redux-devtools/extension"
import { createStore } from "redux"

import { rootReducer } from "../store/store"
import { Basket } from "./Layout/Basket/Basket"
import { Layout } from "./Layout/Layout"
import { Products } from "./Layout/Products/Products"

const store = createStore(rootReducer, composeWithDevTools())

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                
                    <Layout>
                        <Routes>
                            <Route path="/products/" element={<Products />} />
                            <Route path="/" element={<Navigate to="/products" replace />} />
                            <Route path="/basket/" element={<Basket />} />
                            <Route path="/*" element={<Navigate to="/products/" replace />} />
                        </Routes>
                    </Layout>
                
            </Provider>
        </BrowserRouter>
    )
}

export default App