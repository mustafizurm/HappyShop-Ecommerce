import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./route/route.jsx";
import UserProvider from "./context/useUserContext.jsx";


createRoot(document.getElementById("root")).render(
    <UserProvider>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </UserProvider>
);
