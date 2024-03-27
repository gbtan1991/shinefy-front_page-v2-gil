import React from 'react'

const CategoryButtons = ({ categories, handleChangeCategory, selectedCategory }) => {
  return (
    <>
    <button
                  value={categories.name}
                  onClick={handleChangeCategory}
                  className={`global-outlined-btn-2 whitespace-nowrap rounded px-5 py-4 text-white ${
                    selectedCategory == categories.name ? "active-radio" : ""
                  }`}
                >
                  {categories.name}
                </button>
    </>
  )
}

export default CategoryButtons
