import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import "../LegalPages.css";

const FacebookDisclaimer = () => {
  return (
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">Legal</h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Facebook Disclaimer
          </h3>
          <p className="global-header-text-3 md:text-center">
            Last Updated 29 July, 2023
          </p>
        </div>
      </header>

      <div className="px-[5%] xl:px-[18%]">
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
                Facebook Disclaimer
              </a>
            </div>

            <div className="mb-16">
              <h2 className="legal-title-text mb-8">Introduction</h2>
              <p className="legal-content-text-2 ">
                This site is not part of the Facebook website or Facebook Inc.
                <br />
                Additionally, this site is NOT endorsed by Facebook in any way.
                <br />
                FACEBOOK is a trademark of FACEBOOK, Inc.
              </p>
            </div>

            <div className="mb-16">
              <p className="legal-content-text to-header-color mb-8">
                Complete details for Facebook’s legal terms are available at:
              </p>
              <p className="legal-content-text-2">
                All Facebook policies are available at:{" "}
                <a
                  href="https://www.facebook.com/policies/"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://www.facebook.com/policies/
                </a>
              </p>
            </div>

            <div className="mb-16">
              <h2 className="legal-title-text-2 mb-8">Advertising</h2>
              <p className="legal-content-text-2">
                Facebook provides a platform to deliver advertising but the
                opinions and or views expressed from Research Based Solutions
                (“Shine Ranker, LLC”) are not representative of Facebook, Inc.
                <br />
                <br />
                Shine Ranker, LLC provides third-party management of Facebook
                advertising on behalf of Shine Ranker, LLC customers. The
                pinions and or views expressed from such campaigns are not
                representative of Facebook, Inc.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="legal-title-text-2 mb-8">Fan page</h2>
              <p className="legal-content-text-2 mb-16">
                The opinions and or views expressed on Shine Ranker, LLC social
                media platforms, including, but not limited to, our blogs and
                Facebook pages, represent the thoughts of individual bloggers
                and online communities, and not those necessarily of Shine
                Ranker, LLC or any of its corporate partners, affiliates or any
                of their officers, employees, staff or members of its respective
                board of directors.
                <br />
                <br />
                The opinions and views expressed on these pages do not in any
                way reflect the views of the site they are posted on, other
                sites affiliated with the site, the staff involved with
                maintaining the site or any members of the site.
                <br />
                The opinions or views expressed on Shine Ranker, LLC social
                media platforms are not representative of Facebook, Inc.
                <br />
                <br />
                While Shinefy, LLC makes reasonable efforts to monitor
                and/or moderate content posted on its social media platforms, we
                do not moderate all comments and cannot always respond in a
                timely manner to online requests for information.
                <br />
                <br />
                Shinefy, LLC reserves the sole right to review, edit and/or
                delete any comments it deems are inappropriate. Comments
                including but not limited to the following may be deleted or
                edited by the moderators:
              </p>

              <p className="legal-content-text-2 px-5 md:px-10 lg:px-20">
                1. Abusive or hurtful comments about a blogger or another
                participant;
                <br />
                <br />
                2. Off-topic and redundant comments (this includes promotion or
                solicitation of events, groups, pages, Websites, organizations,
                products and programs not related to or affiliated with the
                Shinefy, LLC);
                <br />
                <br />
                Comments that use foul language or &quot;hate speech&quot; (for
                example, including but not limited to racial, ethnic or gender
                bashing language);
                <br />
                <br />
                3. Personal attacks or defamatory statements or comments (i.e.,
                making negative personal or untrue comments about a
                participant), instead of just criticizing his/her posting,
                opinion or comments; and Comments that violate the privacy of
                any individual;
                <br />
                <br />
                4. Information posted on any of Shinefy, LLC&apos;s websites
                or on its Facebook page is not intended to be medical advice and
                should not be considered medical advice, nor is it intended to
                replace consultation with a qualified physician or other health
                care provider.
              </p>
            </div>

            <p className="legal-content-text-2 mb-20 md:mb-0">
              By submitting content to any of Shine Ranker, LLC&apos;s social
              media sites, you understand and acknowledge that this information
              is available to the public, and that Shine Ranker, LLC may use
              this information for internal and external promotional purposes
              and fundraising purposes.
              <br />
              <br />
              Please note that other participants may use your posted
              information beyond the control of Shine Ranker, LLC. If you do not
              wish to have the information you have made available via this site
              used, published, copied and/or reprinted, please do not post on
              this page.
            </p>
          </div>
        </div>
      </div>

      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
};

export default FacebookDisclaimer;
