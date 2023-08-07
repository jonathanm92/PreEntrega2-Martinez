
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Error from "./pages/Error";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bulma/css/bulma.css";


function App(){

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ItemListContainer greeting={"Bienvenidos al eCommerce de Jonas"}/>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos al eCommerce de Jonas"}/>}/>
                        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}


export default App;