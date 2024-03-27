import React from 'react'
import CategoryButtons from './CategoryButtons'

const CategoryList = ({ categories, handleChangeCategory, selectedCategory }) => {
  return (
    <div className="mb-10 flex max-w-[800px] flex-wrap justify-center gap-3">
      {categories.map((category, index) => (
        <div key={index}>
          <CategoryButtons categories={category} handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory}/>      
        </div>
        
      ))}
    </div>
  )
}

export default CategoryList
