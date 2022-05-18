import './App.css';
import CreateCustomer from "./component/CreateCustomer";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (<>
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<CreateCustomer/>}/>
                    <Route path={"/create-customer"} element={<CreateCustomer/>}/>
                    <Route path={"*"} element={<CreateCustomer/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    </>);
}

export default App;
