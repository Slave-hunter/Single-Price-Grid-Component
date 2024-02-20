import React from 'react';




function Home() {
  return (
    <div className='border border-gray-300 w-1/2 h-[550px] mx-auto mt-20 rounded-lg flex flex-col shadow-md shadow-yellow-800'>

      <div className='flex flex-col items-start bg-white p-4 m-4'>
        <h1 className='font-bold text-2xl text-blue-800  prose'>Join our community</h1>
        <p className='text-yellow-300  text-xl mt-2  '>30-day, hassle-free money back guarantee</p>
        <p className='text-gray-400 mt-2'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
      </div>

      <div className="flex mt-10 flex-grow flex-col md:flex-row">

        <section className='flex flex-col items-start bg-blue-800 w-full md:w-1/2 p-5 rounded '>
          <h2 className='text-2xl font-bold text-white m-4'>Monthly subscription</h2>
          <p>

          
          <span className='text-4xl font-bold text-white m-4'>$29</span>
          <span className='text-gray-400 m-4'>Per month</span>
          </p>
          <p className='text-gray-300 m-4'>Full access for less than $1 a day</p>
          <button className='bg-yellow-300 rounded p-4 w-60 mx-auto hover:bg-white cursor-pointer'>Get started</button>
        </section>

        <section className='flex flex-col items-start bg-blue-500 w-full md:w-1/2 p-5 rounded mt-10 md:mt-0'>
          <h2 className='text-2xl font-bold text-white m-4'>Why Us</h2>
          <p className='text-gray-200 m-3'>Tutorials by industry experts<br/>Peer &amp; expert code review<br/>Coding exercises<br/>Access to our GitHub repos<br/>Community forum<br/>Flashcard decks<br/>New videos every week</p>
        </section>

      </div>

    </div>
  );
}

export default Home;
