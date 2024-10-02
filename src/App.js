import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppError from "./components/AppError";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = ()=>{
    return (
        <div className="app-container">
            <Header />
            <Outlet />
            <Footer />
        </div>);
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
            path:"/",
            element:<Body />,
            },
            {
                path:"/resume",
                element:<Resume />
            },
            {
                path:"/projects",
                element:<Projects />
            },
            {
                path:"/contact",
                element:<Contact />
            }
        ],
        errorElement:<AppError />
    }
]);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<RouterProvider router={appRouter} />);