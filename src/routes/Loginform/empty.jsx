// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./App.css";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { App } from "./routes/App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Home } from "./routes/Home";
// import { Dashboard } from "./routes/Dashboard";
// import { Bag } from "./routes/bag";
// import { Provider } from "react-redux";
// import { MunchStore } from "./store/MunchStore";
// import { TotalProducts } from "./routes/TotalProducts";
// import { PlaceOrder } from "./routes/Placeorder";
// import { OrderDone } from "./routes/orderdone";
// import { SignIn } from "./routes/Loginform/SignIns";
// import { SignUp } from "./routes/Loginform/SignUp";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SignIn />,
//   },
//   {
//     path: "/signUp",
//     element: <SignUp />,
//   },
//   {
//     path: "/app",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "bag",
//         element: <Bag />,
//       },
//       {
//         path: "totalproducts",
//         element: <TotalProducts />,
//       },
//       {
//         path: "Placeorder",
//         element: <PlaceOrder />,
//       },
//       {
//         path: "orderdone",
//         element: <OrderDone />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={MunchStore}>
//       <RouterProvider router={router} />
//     </Provider>
//   </StrictMode>
// );
