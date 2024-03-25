export default function SuggestedBlogs() {
  return (
    <div className="blog-suggested-blog-container flex flex-row gap-x-3 px-3 font-karla">
      <div className=" flex flex-col items-center justify-center rounded bg-[#D9D9D9] p-2">
        <img
          src="/images/global/image-placeholder.png"
          alt="Filter Icon"
          className="self-center"
        />
      </div>

      <div className="h-full w-full">
        <p className="mb-3 text-[12px] text-[#AEAEAE]">
          A WEEK AGO <span className="ml-1"> 5 MIN READ</span>
        </p>
        <p className="mb-4 text-base leading-[100%] text-[#7BDCDE]">
          Est volutpat tellus risus ac mi hendrerit pharetra.
        </p>
        <div className="flex flex-row items-center gap-x-6">
          <button
            value="AI Video Generator"
            className="rounded bg-[#8844DA] px-5 py-1 text-[12px] text-white transition duration-300 hover:bg-[#4d2fbb]"
          >
            TIKTOK
          </button>
          <p className="text-[12px] text-[#AEAEAE]">by Shinefy</p>
        </div>
      </div>
    </div>
  );
}
