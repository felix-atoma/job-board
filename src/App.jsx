import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import BrowseJobs from "./pages/BrowseJob";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import ApplyForm from "./components/Applyform";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "browse-jobs", element: <BrowseJobs /> },
      { path: "job/:jobId", element: <JobDetails /> }, 
      { path: "job/:jobId/apply", element: <ApplyForm /> }, // Fixed path
      { path: "/login", element: <Login /> },
      { path: "contact", element: <Contact /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
