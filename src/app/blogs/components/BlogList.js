import React from 'react';
import BlogCard from './BlogCard';

const renderBlogPosts = (data) => {
  return data.map((blog, index) => (
    <div key={index}>
      <BlogCard
        id={blog.id}
        slug={blog.slug}
        title={blog.title.rendered}
        content={blog.content.rendered}
        featImage={blog._embedded["wp:featuredmedia"][0].source_url}
        category={blog._embedded["wp:term"][0][0].name}
        date={blog.date}
      />
    </div>
  ));
};

const renderFilteredBlogPosts = (data, selectedCategory) => {
  return data
    .filter(blog => blog._embedded["wp:term"][0][0].name === selectedCategory)
    .map((filteredBlog, index) => (
      <div key={index}>
        <BlogCard
          id={filteredBlog.id}
          slug={filteredBlog.slug}
          title={filteredBlog.title.rendered}
          content={filteredBlog.content.rendered}
          featImage={filteredBlog._embedded["wp:featuredmedia"][0].source_url}
          category={filteredBlog._embedded["wp:term"][0][0].name}
          date={filteredBlog.date}
        />
      </div>
    ));
};

const BlogList = ({ data, selectedCategory }) => {
  return (
    <div className="mb-1np0 grid min-h-[50rem] w-full grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-14 xl:grid-cols-3 blog-container">
      {selectedCategory === "All Categories" ? 
        renderBlogPosts(data) 
        : 
        renderFilteredBlogPosts(data, selectedCategory)
      }
    </div> 
  );
};

export default BlogList;
