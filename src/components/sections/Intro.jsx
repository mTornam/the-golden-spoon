import React from 'react'

const Intro = () => {
  return (
    <section className='bg-spoon-cream py-20'>
      <div className="container mx-auto px-6 ">

        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2 text-left">
            <span className='text-spoon-sage font-bold tracking-widest uppercase text-xs mb-2'>The Essence</span>
            <h3 className='font-serif text-4xl text-spoon-charcoal mb-6'>Honoring the Ingredients</h3>

            <p className='text-gray-600 leading-relaxed mb-6'>
              Every dish tells a story. From the smoky aroma of our signature Jollof to the delicate spice of our Kelewele, we curate flavors that resonate with history and innovation.
            </p>

            <div className="flex items-center space-x-4 text-spoon-gold text-2xl">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-spoon-gold shadow-2xl mx-auto">
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" alt="" className='w-full h-full object-cover cursor-pointer' />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Intro