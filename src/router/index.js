import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import User from '../components/User/User';
import Github from '../components/Github/Github';
import { githubInfoLoader } from '../components/Github/GithubApiCall';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "github",
                element: <Github/>,
                loader: githubInfoLoader
            },
            {
                path: "user/:id",
                element: <User/>
            },
        ]
    },
    {
        path: "*",
        element: <Home/>
    }
]);