import { Container } from 'postcss'
import React from 'react'

function Hero() {
  return (
    <>
    <div>
    <section className="container mx-auto bg-gray-100 dark:bg-gray-800 py-14 flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Welcome to LibraryPRO
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          At LibraryPRO, we put users at the heart of our design. Our intuitive library management system is crafted to enhance your library experience. Enjoy seamless navigation, personalized recommendations. Whether you’re managing a growing collection or finding your next great read, LibraryPRO makes it easy and enjoyable for every user.
          </p>
          
        </div>
        <div className="lg:w-1/4 ml-20 mx-auto">
          <img src="https://via.placeholder.com/500" alt="Library Management System" className="w-full rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>

    </div>
    </>
  )
}

export default Hero
