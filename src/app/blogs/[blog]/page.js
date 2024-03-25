import BlogLimitedTimeOffer from "./components/BlogLimitedTimeOffer";
import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";
import SocialLinksButtons from "@/components/SocialLinks/SocialLinksButtons";
import SuggestedBlogs from "./components/SuggestedBlogs";
import "../Blogs.css";
import next from "next";

async function getBlog(slug) {
  try {
    const res = await fetch(`http://localhost/test-cms/wpCMS/wp-json/wp/v2/posts?_embed&slug=${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }

    const data = await res.json();
    return data[0]; // Assuming only one blog post is returned
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}



export default async function SingleBlog({ params }) {
  const fetchedBlog = await getBlog(params.blog);


 
function formatDate(dateString) {
  const date = new Date(dateString);
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, '0');
  
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

  return (
    <>
      <section className="global-header-section-bg px-[5%] pt-[16rem] lg:pt-[11rem] xl:px-[10%] 2xl:px-[20%]">
        <div className="mb-10 font-karla text-[16px] italic leading-[120%] text-[#ECECEC]">
          <a href="/">Home</a>
          <span> {`>`} </span>
          <a href="/blogs">Blogs</a>
          <span> {`>`} </span>
          <span className="text-[#AEAEAE]">{fetchedBlog.title.rendered}</span>
        </div>

        <div className="mb-10 flex w-full flex-col gap-x-10 lg:flex-row">
          <div className="border border-[#4d2fbb] p-2 pb-12 font-karla md:p-5">
            <p className="mb-4 font-montserrat text-[21px] font-bold leading-[120%] text-[#7BDCDE]">
            {fetchedBlog.title.rendered}
            </p>
            <p className="mb-4 text-[12px] text-[#AEAEAE]">
              <span>{formatDate(fetchedBlog.date)}</span>
            </p>
            <div className="mb-8 flex justify-center rounded bg-[#D9D9D9] ">
              <img
                src={fetchedBlog._embedded['wp:featuredmedia'][0].source_url}
                alt="Featured Image"
                className="w-full h-full"
              />
            </div>
            <p className="mb-8 text-base leading-[120%] text-white" dangerouslySetInnerHTML={{__html: fetchedBlog.content.rendered}}>
              {/* content is rendered here by dangerouslySetInnerHTML */}
            </p>
            <p className="mb-6 text-[18px] font-bold leading-[120%] text-[#7BDCDE]">
              
            </p>
            <p className="mb-8 text-base leading-[120%] text-white">
            
            </p>

            <div className="mb-8 bg-[#150e3b] px-4 py-10 md:p-10">
              <BlogLimitedTimeOffer />
            </div>

            <p className="mb-6 text-[18px] font-bold leading-[120%] text-[#7BDCDE]">
              
            </p>

            <p className="mb-6 text-base leading-[120%] text-white">
              
            </p>

            <p className="mx-auto mb-6 max-w-[500px] text-base leading-[120%] text-white">
              
            </p>

            <p className="mb-16 text-base leading-[120%] text-white">
              
            </p>

            <button
              value="AI Video Generator"
              className="global-outlined-btn-2 active-radio mb-10 rounded p-2 text-white"
            >
              SHARE THIS!
            </button>

            <div className="flex w-full flex-row justify-between md:max-w-[300px]">
              <SocialLinksButtons />
            </div>
          </div>

          <div className="mt-20 lg:mt-0">
            <div className="mb-8 w-full rounded bg-[#8844DA] px-4 py-5 font-karla">
              <p className="mb-3 text-center text-[20px] font-bold text-white lg:text-start">
                Stay Connected!
              </p>
              <p className="mb-4 px-2 text-center text-base leading-[120%] text-white lg:text-start">
                Subscribe to Shinefy newsletter and get the latest updates on
                generating income using AI tools.
              </p>
              <div className="flex flex-row">
                <input
                  className="blog-input w-full rounded-l bg-[#7c3fd3] px-4 text-center lg:text-start"
                  placeholder="Enter email address"
                />
                <button className="rounded-r bg-[#3DCB80] px-4 py-3 text-white transition duration-300 hover:bg-[#3a287c] md:px-14 lg:px-4">
                  Send
                </button>
              </div>
            </div>

            <div className="blog-limited-time-offer-card-bg mb-8 flex min-h-[35rem] flex-col items-center justify-center rounded px-8 lg:items-start xl:min-h-[40rem] xl:px-12">
              <p className="mb-4 font-karla text-[18px] text-[#3DCB80]">
                LIMITED-TIME OFFER
              </p>
              <p className="custom-text-1 mb-4 whitespace-nowrap px-2 py-4 text-center font-montserrat text-[65px] font-bold leading-[89%] text-white lg:text-start lg:text-[55px] xl:text-[65px]">
                BEST <br /> $1 DEAL
              </p>
              <p className="mb-8 w-full text-center font-montserrat text-[24px] font-bold leading-[120%] text-white md:w-[70%] lg:w-full lg:text-start">
                Start creating content that will give you a flowing passive
                income.
              </p>
              <a
                href="https://realchasereiner.kartra.com/page/shinefyai2"
                rel="noreferrer"
                target="_blank"
                className="limited-time-offer-btn flex w-[150px] max-w-[20rem] items-center justify-center"
              >
                Sign Up Today!
              </a>
            </div>

            <div className="mb-8 flex w-full flex-col gap-y-7 rounded bg-[#0e0a2c] px-3 pb-10 pt-5 font-karla">
              <p className="text-[20px] font-bold text-white">Related Topics</p>

              <SuggestedBlogs />
              <SuggestedBlogs />
              <SuggestedBlogs />
            </div>
          </div>
        </div>
      </section>

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
}
