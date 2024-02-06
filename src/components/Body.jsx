import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components
import Browse from "./Browse";
import HomePage from "./HomePage";

const Body = () => {
  const Login = lazy(() => import("./Login"));

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
