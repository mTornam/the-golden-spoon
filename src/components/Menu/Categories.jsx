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
                ? 'text-bowl-charcoal border-b-2 border-bowl-gold'
                : 'text-gray-400 hover:text-bowl-sage border-b-2 border-transparent'}
          `} >
            {category}
          </button>
        ))
      }
    </>
  )
}

export default Categories