import React from 'react';

import About from './components/About';
import Navbar from './components/Navbar'

export default function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
    </main>
  );
}

/*
<Projects />
<Skills />
<Testimonials />
<Contact />
*/
