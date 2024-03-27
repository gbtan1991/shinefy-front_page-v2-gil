import React from 'react'

const BlogHeader = () => {
  return (
    
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">
            Blog Posts
          </h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Feature Articles
          </h3>
          <p className="global-header-text-3 max-w-[620px] md:text-center">
            Choose from these list to read more about topics relevant to your
            content and curiosities.
          </p>
        </div>
      </header>
    
  )
}

export default BlogHeader
