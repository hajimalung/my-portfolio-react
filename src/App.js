import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppError from "./components/AppError";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEhZk1wYRKrkqy7iaiEqUCz8MUhrJlJqo",
  authDomain: "hajimalung-77d29.firebaseapp.com",
  projectId: "hajimalung-77d29",
  storageBucket: "hajimalung-77d29.appspot.com",
  messagingSenderId: "497406756643",
  appId: "1:497406756643:web:9922f550235cec37f42e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = ()=>{
    return (
        <div className="app-container">
            <Header />
            <div className="body-container">
                <Outlet />
            </div>
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