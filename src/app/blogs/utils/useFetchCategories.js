    import {useState, useEffect} from 'react';

    //Custom Hook for Fetching Categories

    export const useFetchCategories = () => {
        const [categories, setCategories] = useState([]);
        

        useEffect(() => {
            const fetchCategories = async () => {
                try {
                    
                    const res = await fetch("http://localhost/test-cms/wpCMS/wp-json/wp/v2/categories");
                    const fetchedCategories = await res.json();
                    const allCategoriesFirst = [{ name: "All Categories"}, ...fetchedCategories];
                    setCategories(allCategoriesFirst);
                }  catch (error) {
                    console.error("Error in fetching Categories:", error.message);
                } 
            };
            fetchCategories();
        
        }, []);
        
        return categories;
    };