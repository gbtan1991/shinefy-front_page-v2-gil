"use client";

import { useRef, useState } from "react";

import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";

export default function BlogPostsFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [dateFilter, setDateFilter] = useState("");
  const [filterSelectedCategory, setFilterSelectedCategory] = useState(selectedCategory);
  const filterDialogRef = useRef();

 
  const handleSelectCategory = (categoryName) => {   
    setFilterSelectedCategory(categoryName);
  }

  const showFilterDialog = () => {
    if (!filterIsOpen) {
      setFilterIsOpen(true);
      filterDialogRef.current.show();
      
    } else {
      setFilterIsOpen(false);
      setFilterSelectedCategory(selectedCategory)
      filterDialogRef.current.close();
    }
  };

  const hideFilterDialog = () => {
    setDateFilter("");
    setFilterIsOpen(false);
    filterDialogRef.current.close();
  };

  const applyFilters = () => {
    setSelectedCategory(filterSelectedCategory); 
    setFilterIsOpen(false);
    filterDialogRef.current.close();
  };

  return (
    <>
      <button onClick={showFilterDialog}>
        <FilterListIcon className="h-10 w-10 text-[#8844DA] transition duration-300 hover:text-[#4d2fbb]" />
      </button>

      <dialog
        ref={filterDialogRef}
        className="absolute top-[55px] w-full bg-[#110a27] p-5 font-karla md:min-w-[18rem] z-10"
      >
        <p className="mb-4 text-xl text-[#4d2fbb]">Refined Results</p>

        <hr className="mb-4 border border-[#190e3c]" />

        <p className="mb-3 text-base text-[#4d2fbb]">Category</p>
        <div className="flex flex-row flex-wrap gap-1">
          {categories.map((category, index) => (
            <div key={index}>
              <button
                onClick={() => handleSelectCategory(category.name)}
                className={`blogs-filter-unactive-btn mb-3 rounded px-4 py-2 text-white ${
                  filterSelectedCategory == category.name
                    ? "blogs-filter-active-btn "
                    : ""
                }`}
              >
                <p className="text-sm text-white">{category.name}</p>
              </button>
            </div>
          ))}
        </div>

        <hr className="mb-4 border border-[#190e3c]" />

        <p className="mb-3 text-base text-[#4d2fbb]">Date</p>
        <div className="mb-3 flex flex-row justify-start gap-x-8">
          <button
            onClick={() => setDateFilter("Month")}
            className={`rounded px-4 py-2 ${
              dateFilter == "Month"
                ? "blogs-filter-active-btn"
                : "blogs-filter-unactive-btn"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setDateFilter("Year")}
            className={`rounded px-4 py-2 ${
              dateFilter == "Year"
                ? "blogs-filter-active-btn"
                : "blogs-filter-unactive-btn"
            }`}
          >
            Year
          </button>
        </div>

         <hr className="mb-4 border border-[#190e3c]" />
{/*
        <p className="mb-5 text-base text-[#4d2fbb]">Popularity</p>
        <button className="mb-1 flex flex-row justify-center whitespace-nowrap px-2 py-1 text-white">
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
        </button>
        <button className="mb-1 flex flex-row justify-center whitespace-nowrap px-2 py-1 text-white">
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
        </button>
        <button className="mb-1 flex flex-row justify-center whitespace-nowrap px-2 py-1 text-white">
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
        </button>
        <button className="mb-1 flex flex-row justify-center whitespace-nowrap px-2 py-1 text-white">
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
        </button>
        <button className="mb-1 flex flex-row justify-center whitespace-nowrap px-2 py-1 text-white">
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
        </button> */}

        <div className="mt-5 flex flex-row justify-evenly">
          <button
            onClick={hideFilterDialog}
            className="blogs-filter-unactive-btn rounded px-6 py-2 text-[#8844DA]"
          >
            Cancel
          </button>
          <button
            onClick={() => applyFilters(filterSelectedCategory)}
            className="blogs-filter-active-btn rounded px-6 py-2 text-[#8844DA]"
          >
            Apply
          </button>
        </div>
      </dialog>
    </>
  );
}
