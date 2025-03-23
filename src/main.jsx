import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { App } from "./routes/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home";
import { Bag } from "./routes/bag";
import { Provider } from "react-redux";
import { MunchStore } from "./store/MunchStore";

import { PlaceOrder } from "./routes/Placeorder";
import { OrderDone } from "./routes/orderdone";
import { SignIn } from "./routes/Loginform/SignIns";
import { SignUp } from "./routes/Loginform/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "bag",
        element: <Bag />,
      },
      {
        path: "placeorder",
        element: <PlaceOrder />,
      },
      {
        path: "orderdone",
        element: <OrderDone />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={MunchStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
