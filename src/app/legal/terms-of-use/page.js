import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import "../LegalPages.css";
import Link from "next/link";

const TermsOfUse = () => {
  return (
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">Legal</h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Terms of Use
          </h3>
          <p className="global-header-text-3 md:text-center">
            Last Updated 23 Feb, 2024
          </p>
        </div>
      </header>

      {/* Contents */}
      <section className="px-[5%] xl:px-[18%]">
        <div className="mt-[-9rem] flex">
          <div className="flex flex-col justify-center">
            <div className="legal-categories mb-10 inline">
              <a href="/" className="legal-category">
                Home
              </a>
              <span> {`>`} </span>
              <a href="/" className="legal-category">
                Legal
              </a>
              <span> {`>`} </span>
              <a href="#" className="legal-category legal-category-current">
                Terms of Use Legal
              </a>
            </div>
            

            <div className="mb-12">
              <h2 className="legal-title-text mb-8">Addendum</h2>
              <p className="legal-content-text">
                Please read our
                <Link href="/legal/terms-of-use/addendum">
                  {" "}
                  latest terms and conditions
                </Link>
                . This document supersedes any related terms listed below.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="legal-title-text mb-8">Introduction</h2>
              <p className="legal-content-text">
                Welcome to Shinefy, LLC, located at
                <a
                  href="https://shinefy.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  https://shinefy.com/
                </a>
                . The following terms and conditions govern your use of our
                website. By accessing this website, it is assumed that you fully
                accept and agree to abide by all the terms and conditions stated
                on this page. If you do not agree with any of these terms and
                conditions, please refrain from using Shinefy’s website.
              </p>
            </div>

            <div className="mb-12">
              <h5 className="legal-title-text-2 mb-8">Indemnification</h5>
              <p className="legal-content-text-2">
                You agree to indemnify Shinefy, LLC to the fullest extent
                possible from any and all liabilities, costs, demands, causes of
                action, damages, and expenses (including reasonable
                attorney&apos;s fees) resulting from your breach of any
                provisions in these Terms.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="legal-title-text-2 mb-8">Severability</h2>
              <p className="legal-content-text-2">
                If any provision of these Terms is deemed invalid under
                applicable law, such provision shall be deleted without
                affecting the remaining provisions herein.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="legal-title-text-2 mb-8">Variation of Terms</h2>
              <p className="legal-content-text-2">
                Shinefy, LLC reserves the right to revise these Terms at any
                time as it deems fit. It is your responsibility to review these
                Terms regularly to ensure you understand all conditions
                governing the use of this website.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="legal-title-text-2 mb-8">
                Governing Law and Jurisdiction
              </h2>
              <p className="legal-content-text-2">
                These Terms will be governed by and interpreted in accordance
                with the laws of the location where the company operates. You
                submit to the non-exclusive jurisdiction of the state and
                federal courts located in that area for the resolution of any
                disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
};

export default TermsOfUse;
