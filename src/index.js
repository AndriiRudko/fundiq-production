import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import TaskOne from "./components/TaskOne/TaskOne";
import TaskTwo from "./components/TaskTwo/TaskTwo";
import TaskZero from "./components/TaskZero/TaskZero";
import TaskThree from "./components/TaskThree/TaskThree";
import TaskFour from "./components/TaskFour/TaskFour";
import TaskFive from "./components/TaskFive/TaskFive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/tasks/0",
        element: <TaskZero />,
      },
      {
        path: "/tasks/1",
        element: <TaskOne />,
      },
      {
        path: "/tasks/2",
        element: <TaskTwo />,
      },
      {
        path: "/tasks/3",
        element: <TaskThree />,
      },
      {
        path: "/tasks/4",
        element: <TaskFour />,
      },
      {
        path: "/tasks/5",
        element: <TaskFive />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
