import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import HelpIcon from "@mui/icons-material/Help";

import "./FAQ.css";

const FAQ = () => {
  return (
    <>
      <header className="global-header-section-bg flex min-h-[48rem] flex-col px-[5%] pt-[16rem] md:items-center lg:pt-[15.5rem] xl:px-[18%]">
        <h2 className="global-header-text-1 mb-6 md:text-center">About Us</h2>
        <h1 className="global-header-text-2 mb-6 md:text-center">
          Frequently Asked Questions
        </h1>
        <p className="global-header-text-3 md:text-center">
          Last updated 14 September, 2023
        </p>
      </header>

      <section className="global-section-container-under-header mb-12 px-[5%] xl:px-[18%]">
        <div className="global-content-container-under-header mb-14">
          <a href="/">Home</a>
          <span> {`>`} </span>
          <a href="#" className="global-category-current">
            Frequently Asked Questions
          </a>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="global-header-text-1 mb-6 ">Here are our</h2>
          <h2 className="global-header-text-2 mb-6">
            Frequently Asked Questions
          </h2>

          <p className="global-header-text-3 max-w-[720px]">
            We may have already answered your questions. Check out these tabs to
            find answers. If you ever need assistance, please feel free to out
            to us through the contact form below.
          </p>
        </div>

        {/* First Column */}
        <div className="mt-8 flex flex-col md:mt-14 lg:p-8">
          <Accordion className="mui-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>What is Shinefy</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="mui-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                Shinefy is an AI and SEO tool designed to create viral content,
                improve online presence and optimize pages to generate leads and
                traffic. It’s aimed to serve businesses, marketers, content
                creators, website owners and aspirants.
                <br />
                <br />
                See full details about Shinefy <a href="/about">here</a>.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mui-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>What are the features of Shinefy Tools?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="mui-accordion-details">
              <ul className="mui-accordion-ul mb-6 ml-7 max-w-[96%]">
                <li className="mb-6">
                  <p className="global-header-text-3 max-w-[96%]">
                    <span className="font-bold text-violet-500">
                      AI Video Generating tools:{" "}
                    </span>
                    for your content creation needs
                  </p>
                </li>

                <li className="mb-6">
                  <p className="global-header-text-3 max-w-[96%]">
                    <span className="font-bold text-violet-500">
                      SEO Tools:{" "}
                    </span>
                    for your websites optimization and conversion
                  </p>
                </li>

                <li className="mb-6">
                  <p className="global-header-text-3 max-w-[96%]">
                    <span className="font-bold text-violet-500">
                      VIP Group:{" "}
                    </span>
                    for your passive income through affiliate marketing
                  </p>
                </li>
              </ul>

              <p className="global-header-text-3 max-w-[96%]">
                Read more about the features of Shinefy tool{" "}
                <a href="/tools">here</a>.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mui-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>How much does Shinefy cost?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="mui-accordion-details">
              <p className="global-header-text-3 max-w-[1020px]">
                Starter plan costs $97 monthly and Annual Shinefy Pass is $497 a
                year with 43% discount. All plans come with unlimited access to
                all features and tools. The plan is auto renewed until the
                subscription is canceled by the user. Users can switch from
                initial paid subscription to another subscription, but will
                forfeit the former’s inclusions. See full details of Pricing
                Plan <a href="/pricing">here</a>.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mui-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>What are the benefits of Shinefy?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="mui-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                It gives - comprehensive AI and SEO tool, AI Driven Service,
                User-friendly interface. Time Saving and Scalable solution.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mui-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>How to create a Shinefy account?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="mui-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                Just go to the top menu of this page and click{" "}
                <span className="text-[#8844DA]">sign up</span> to register, or
                simple click{" "}
                <a
                  href="https://realchasereiner.kartra.com/page/shinefyai2"
                  rel="noreferrer"
                  target="_blank"
                >
                  this link
                </a>
                .
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mui-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>How to use Shinefy?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="mui-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                After creating an account, login using your registered email and
                password. Get familiar with the dashboard. On the left panel,
                click and see all features tools to create your awesome content.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mui-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>Is there a free trial for Shinefy?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="mui-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                Shinefy offers promos from time to time with limited access to
                its features, which is ideal for testing the new tool before
                committing to a paid plan. Follow us on our social media
                channels to get the latest updates on promos.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>

      <div className="flex flex-col items-center  justify-center gap-x-5 bg-[#100826] px-[5%] py-20 lg:flex-row xl:px-[20%]">
        <HelpIcon sx={{ color: "#8844DA", width: "40px", height: "40px" }} />
        <p className="mt-6 text-center font-montserrat text-[32px] font-bold text-white lg:mt-0 lg:text-start">
          Have more questions? Contact our Customer Support!
        </p>
      </div>

      <section className="bg-[#0D0D0D] px-[5%] py-20 xl:px-[20%]">
        <div className="flex flex-col gap-10   md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="global-header-text-1">Shinefy</h2>
            <h2 className="global-header-text-2 my-2 whitespace-nowrap pt-2">
              Vision-Mission
            </h2>
          </div>

          <p className="global-header-text-3 lg:max-w-[720px]">
            We may ahve already answered your questions. Check out these tabs to
            find answers. If you ever need assistance, please feel to reach out
            to us through the contact form below.
          </p>
        </div>
      </section>

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
};

export default FAQ;
