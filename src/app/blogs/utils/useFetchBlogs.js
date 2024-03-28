import { useEffect, useState } from "react";

export const useFetchBlogs = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const resData = await fetch("http://localhost/test-cms/wpCMS/wp-json/wp/v2/posts?_embed");
                const fetchedBlogData = await resData.json();
                setData(fetchedBlogData);
            } catch (error) {
                console.error("Error in fetching Blog Data:", error.message);
            }
        };
        fetchBlogData();
    }, []);
    
    return data;
}