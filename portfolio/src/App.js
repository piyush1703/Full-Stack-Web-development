import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Piyush's Portfolio</h1>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-200" href="#about">About</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200" href="#projects">Projects</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-800">
          My name is Piyush, and I am currently pursuing B.Tech in Electrical Engineering from IIT Kanpur. I love playing cricket and chess in my free time.
        </p>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-800">
              Description of Project 1...
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-800">
              Description of Project 2...
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-800">
              Description of Project 3...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-300 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-800">
          You can reach me at piyush@example.com.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>© 2023 Piyush. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;







