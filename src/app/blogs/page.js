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
import { useFetchCategories } from "./utils/useFetchCategories";
import { useFetchBlogs } from "./utils/useFetchBlogs";
import BlogList from "./components/BlogList";

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
  // FETCH CATEGORIES
  const categories = useFetchCategories();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // CHANGING CATEGORY
  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  // FETCH BLOGS
  const data = useFetchBlogs();



  // FILTERING BLOGS BY TEXT
const mappedData = data;
const [filterText, setFilterText] = useState("");

const handleFilterTextChange = (event) => {
  setFilterText(event.target.value);
}


const filteredMappedData = Object.values(mappedData).filter((item) => {
    return item.title.rendered.toLowerCase().includes(filterText.toLowerCase()) ||
    item.content.rendered.toLowerCase().includes(filterText.toLowerCase()) 
});



  // PAGINATION SET UP

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = filteredMappedData.slice(firstPostIndex, lastPostIndex);

  //PAGINATION PAGE COUNTER
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    countAllPages();
  }, [filteredMappedData, postsPerPage]);

  const countAllPages = () => {
    setPageCount(Math.ceil(filteredMappedData.length / postsPerPage));
  };

  //PAGINATION EVENTS

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
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
          <CategoryList
            categories={categories}
            handleChangeCategory={handleChangeCategory}
            selectedCategory={selectedCategory}
          />

          <div className="mb-10 flex h-20 w-full flex-row items-center justify-end">
            <div className="relative flex flex-row gap-4">
              <input
               className="blogs-filter-input w-full rounded px-5 md:min-w-[18rem]"
               placeholder="filter"
               value={filterText}
               onChange={handleFilterTextChange}
              />
              <BlogPostsFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </div>

          <BlogList data={currentPost} selectedCategory={selectedCategory} />

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
              count={pageCount}
              page={currentPage}
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
