import React from 'react'
import menuData from './MenuData'


const Categories = ({ menuType, activeCategory, setActiveCategory }) => {
  const filteredData = menuData.filter((item) => item.type === menuType)

  const categories = ['All', ...new Set(filteredData.map((item) => item.category))]


  return (
    <>
      {
        categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`
            px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer
            ${activeCategory === category
                ? 'text-spoon-charcoal border-b-2 border-spoon-gold'
                : 'text-gray-400 hover:text-spoon-sage border-b-2 border-transparent'}
          `} >
            {category}
          </button>
        ))
      }
    </>
  )
}

export default Categories