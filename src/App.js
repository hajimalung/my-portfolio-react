import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";

const App = ()=>{
    return (
        <div className="app-container">
            <Header />
            <Body />
        </div>);
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);