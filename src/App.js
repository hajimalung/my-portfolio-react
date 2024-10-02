import ReactDOM from "react-dom/client"

const App = ()=>{
    return (<>React App Rendering!</>);
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);