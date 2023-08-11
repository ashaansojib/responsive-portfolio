import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Project from "../projects/Project";
import Resume from "../resume/Resume";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Project />
            },
            {
                path: '/resume',
                element: <Resume />
            }
        ]
    }
]);

export default router;