import React from 'react';
import RouterDia from "../../assets/images/Reactrouter.png"

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={RouterDia}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Welcome to my React Router project!
                        </h2>
                        <p className="mt-6 text-gray-600">
                        My project utilizes the power of React Router and the React Router DOM package to create dynamic, single-page web applications with smooth navigation and seamless user experiences.
                        </p>
                        <p className="mt-4 text-gray-600">
                        With React Router, we've built a robust and flexible routing system that allows users to navigate through different pages without the need for refreshing the browser. Whether you're building a simple portfolio website or a complex web application, React Router simplifies the process of managing your application's routes.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Key features of our project include:
                        </p>
                        <ul className='flex flex-col gap-1 pt-2 pl-12 list-disc'>
                            <li><span className='font-bold'>Dynamic Routing:</span> Easily define routes for different pages of my application</li>
                            <li><span className='font-bold'>Nested Routing:</span> Create nested routes to build complex applications with ease.</li>
                            <li><span className='font-bold'>URL Parameters:</span> Easily extract and utilize parameters from the URL within your components.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}