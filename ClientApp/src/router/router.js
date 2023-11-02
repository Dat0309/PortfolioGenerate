import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import FullPage from '../pages/FullPage/FullPage';
import CaseStudy from '../pages/CaseStudy/CaseStudy';
const Router = createBrowserRouter([
    {
        path: "/",
        element: <FullPage />,
    },
    {
        path: "/casestudy",
        element: <CaseStudy />,
    },

]);

export default Router;