"use client";

import { useState, useEffect } from "react";

import BlogCard from "./components/BlogCard";
import BlogPostsFilter from "./components/BlogPostsFilter";
import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import OneTimeDeal from "@/components/OneTimeDeal/page";

import { styled } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Pagination from "@mui/material/Pagination";

import "./Blogs.css";
import CategoryList from "./components/CategoryList";
import BlogHeader from "./components/BlogHeader";

const StyledPaginationComponent = styled(Pagination)(({ theme }) => ({
  "& ul > li:first-child > button": {
    backgroundColor: "transparent",
    color: "#8844DA",
  },
  "& ul > li:last-child > button": {
    backgroundColor: "transparent",
    color: "#8844DA",
  },
  "& ul > li:not(:first-child):not(:last-child) > .Mui-selected": {
    backgroundColor: "#AEAEAE",
    color: "#FFF",
    borderRadius: "0",
  },
  "& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)": {
    backgroundColor: "#8844DA",
    color: "#FFF",
    borderRadius: "0",
  },
  "& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected):hover":
    {
      backgroundColor: "transparent",
      border: "2px solid #8844DA",
    },
  selected: {
    border: "1px solid red",
  },
}));

export default function Blogs() {
  // Fetch Categories
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Fetch Blogs
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "http://localhost/test-cms/wpCMS/wp-json/wp/v2/categories",
        ); //CHANGE TO ENV
        const fetchedCategories = await res.json();
        const allCategoriesFirst = [
          { name: "All Categories" },
          ...fetchedCategories,
        ];
        setCategories(allCategoriesFirst);

        const resData = await fetch(
          "http://localhost/test-cms/wpCMS/wp-json/wp/v2/posts?_embed",
        ); //CHANGE TO ENV
        const fetchedData = await resData.json();
        setData(fetchedData);
      } catch (error) {
        console.log("Error fetching categories", error.message);
      }
    };
    fetchCategories();
  }, []);

  console.log(data);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);
  
 


  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BlogHeader />

      <section className="mb-10 px-[5%] lg:px-[10%] 2xl:px-[18%]">
        <div className="mt-[-17rem] flex flex-col items-center">
          
          
         <CategoryList  categories={categories} handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory}/>
            
           
          

          <div className="mb-10 flex h-20 w-full flex-row items-center justify-between">
            <div className="mr-5 flex flex-row gap-2">
              <button className="border-2 border-[#8844DA] text-white transition duration-300 hover:border-[#462eac] hover:bg-[#462eac] ">
                <KeyboardArrowLeftIcon />
              </button>
              <button className="border-2 border-[#8844DA] text-white transition duration-300 hover:border-[#462eac] hover:bg-[#462eac] ">
                <KeyboardArrowRightIcon />
              </button>
            </div>

            <div className="relative flex flex-row gap-4">
              <input
                className="blogs-filter-input w-full rounded px-5 md:min-w-[18rem]"
                placeholder="filter"
              />
              <BlogPostsFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </div>
          </div>

          {/* <div className="mb-1np0 grid min-h-[50rem] w-full grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-14 xl:grid-cols-3 blog-container" >
          {selectedCategory === "All Categories" ? 
  data.map((blog, index) => (
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
  )) 
  : 
  data.filter(blog => blog._embedded["wp:term"][0][0].name === selectedCategory).map((filteredBlog, index) => (
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
  ))
}
          </div> */}

          <div className="mb-10 flex h-20 w-full flex-col items-center justify-between gap-y-10 md:flex-row md:gap-y-0">
            <div className="flex flex-row gap-2">
              <button
                onClick={scrollUp}
                className="grid-back-to-top-btn px-2 py-1 text-white"
              >
                <ArrowUpwardIcon
                  style={{ marginRight: "25px", color: "#8844DA" }}
                />
                <span className="grid-back-to-top-text">Back to Top</span>
              </button>
            </div>

            <StyledPaginationComponent
              count={3}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </section>

      <OneTimeDeal />

      <ContactInfo />

      <FooterPage />
    </>
  );
}
