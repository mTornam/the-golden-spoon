import React from 'react'

const About = () => {
  return (
    <section id='About' className='bg-spoon-charcoal text-white'>
      <div className="flex flex-col md:flex-row h-auto">

        <div className="relative w-full md:w-1/2 h-96 md:h-auto">
          <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-spoon-charcoal">
          <span className='text-spoon-gold font-bold tracking-widest uppercase text-xs mb-4'>Since 2015</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-light text-lg">
            Founded with a simple mission: to honor our roots. Executive Chef Elena Rostova combines classic French techniques with the bold, vibrant flavors of West Africa.
          </p>
          <p className="text-gray-300 leading-relaxed font-light text-lg">
            Our kitchen is a place of creativity, and our dining room is a place of comfort. From the bustling streets of Accra to the refined plates on your table, we bridge the gap between tradition and modernity.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="font-serif italic text-xl text-spoon-gold">"Food is the ingredient that binds us together."</p>
            <p className="text-sm text-gray-400 mt-2">- Chef Elena Rostova</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About