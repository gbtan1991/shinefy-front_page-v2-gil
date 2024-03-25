import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import FeaturesAndBenefits from "@/app/about/components/FeaturesAndBenefits";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

export default function About() {
  return (
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">About Us</h1>
          <h3 className="global-header-text-2 mb-6 max-w-[720px] md:text-center">
            Build your Wealth with Shinefy now!
          </h3>
          <p className="global-header-text-3 md:text-center">
            Last updated 14 September, 2023
          </p>
        </div>
      </header>

      <section className="global-section-container-under-header px-[5%] pb-12 xl:px-[18%]">
        <div className="mt-[-8rem] flex flex-col-reverse items-center justify-center gap-y-10 py-8 lg:flex-row lg:gap-16">
          <div className="w-full px-0 md:px-5 lg:w-auto lg:px-0">
            <div className="about-text-card my-5">
              <h2 className="global-header-text-1 mb-5 hidden md:block">
                Your Staple Shinefy Product -
              </h2>
              <h2 className="global-header-text-2 mb-6 hidden max-w-[600px] md:block">
                An ultimate platform to channel your creativity!
              </h2>
              <p className="global-header-text-3 max-w-[90vw] lg:max-w-[600px]">
                Shinefy is a complete AI tool that helps content creators craft
                AI videos and collect passive income - all in one click.
                Shinefy&apos;s mission is to help every content creator, or
                anyone who wants to make money online thrive with AI, starting
                with online growth on the leading AI video generator and tools
                like AI Text to Image Generation, Website Scraper, AI Image to
                Image generation, and more. Today, over 100,000 users around the
                world rely on Shinefy to boost their online growth and earnings.
              </p>
            </div>
          </div>

          <div>
            <a
              href="https://www.youtube.com/watch?v=PL3PXYFdlsU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/global/training-video-thumbnail.png"
                alt="Shine Ai Training Video thumbnail"
                width="540px"
                className="mx-auto max-w-full"
              />
            </a>
          </div>
        </div>
      </section>

      <FeaturesAndBenefits />

      {/* *** Temporarily returns empty div for partial deployment - JOHN 06/10/23 *** */}
      {/* <ContactForm /> */}

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
}
