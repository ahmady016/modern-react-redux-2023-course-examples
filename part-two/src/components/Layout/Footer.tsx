import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Part Two™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li><Link to="." className="mr-4 hover:underline md:mr-6">Home</Link></li>
                    <li><Link to="button" className="mr-4 hover:underline md:mr-6">Button</Link></li>
                    <li><Link to="accordion" className="mr-4 hover:underline md:mr-6">Accordion</Link></li>
                    <li><Link to="dropdown" className="mr-4 hover:underline md:mr-6">Dropdown</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
