import ReactDOM from "react-dom/client"
import Header from "./components/Header";

const App = ()=>{
    return (
        <div className="app-container">
            <Header />
        </div>);
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);