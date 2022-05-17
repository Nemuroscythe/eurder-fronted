import './App.css';
import CreateCustomer from "./component/CreateCustomer";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
    return (<>
        <div className="App">
            <Header/>
            <CreateCustomer/>
            <Footer/>
        </div>
    </>);
}

export default App;
