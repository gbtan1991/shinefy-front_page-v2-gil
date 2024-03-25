
import { useRouter } from "next/navigation";

import EastIcon from "@mui/icons-material/East";

export default function BlogCard({ handleChangeCategory, selectedCategory, title, featImage, category, date, content, slug, id }) {

  const truncateAndStripHtml = (html, maxLength) => {
    // Replace HTML entities with their corresponding characters
    const decodedHtml = html.replace(/&#[0-9]+;/g, (match) => {
      // Convert HTML entity to corresponding character
      const charCode = parseInt(match.substring(2, match.length - 1));
      return String.fromCharCode(charCode);
    });
    // Remove HTML tags while preserving single quotes
    const strippedHtml = decodedHtml.replace(/<[^>'"]*('[^']*'[^>'"]*|"[^"]*"[^>'"]*)*>/g, "");
    // Truncate the stripped content to the specified maxLength
    const truncatedContent = strippedHtml.substring(0, maxLength) + "...";
    return truncatedContent;
  };

  const router = useRouter();

  const handleViewItems = (link) => {
    router.push(`/blogs/${link}`);
  };

  return (
    <div className="min-h-[30rem] bg-[#0D0D0D] pb-8">
      <div className="mb-6 flex justify-center bg-[#D9D9D9]">
        <img
          src={featImage}
          alt="Filter Icon"
          className="h-[300px] w-full self-center"
        />
      </div>
      <div className="mb-6 flex flex-col items-start justify-between gap-y-5 px-6 lg:flex-row lg:items-center lg:gap-y-0">
        <button
          value={category}
          onClick={handleChangeCategory}
          className={`global-outlined-btn-2 active-radio whitespace-nowrap rounded px-5 py-4 text-white`}
        >
          {category}
        </button>
        <p className="text-end font-karla text-[14px] leading-[120%] text-white">
          {new Date(date).toLocaleDateString()}
        </p>
      </div>
      <div className="px-6">
        <p className="mb-6 font-montserrat text-[21px] font-bold leading-[120%] text-[#7bdcde]">
         {title}
        </p>
        <p className="mb-3 font-karla text-base leading-[120%] text-white ">
          {truncateAndStripHtml(content, 150)}
        </p>

        <button
          onClick={() => handleViewItems(slug)}
          className="blogs-card-read-more-btn p-3"
        >
          <span className="mr-10">Read More</span>
          <EastIcon style={{ width: "15px" }} />
        </button>
      </div>
    </div>
  );
}
