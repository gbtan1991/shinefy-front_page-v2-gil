import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import "../LegalPages.css";

const AffiliatePromotions = () => {
  return (
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">Legal</h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Affiliate Promotions
          </h3>
          <p className="global-header-text-3 md:text-center">
            Last Updated 29 July, 2023
          </p>
        </div>
      </header>

      <div className="px-[5%] xl:px-[20%]">
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
                Affiliate Promotions
              </a>
            </div>

            <div className="mb-16">
              <h2 className="legal-title-text mb-8">
                Affiliate Promotions Terms & Conditions
              </h2>
              <p className="legal-content-text-2 ">
                Read carefully before joining this program. You agree that you
                are NOT allowed to do the following things if approved for the
                affiliate program. By doing any of the following, you will be
                terminated from the program and agree that any commissions will
                be forfeited without recourse:
              </p>
            </div>

            <div className="mb-16 md:mb-0 md:px-12 lg:px-24">
              <p className="legal-content-text-2">
                1. You are NOT permitted to conduct e-mail promotions in a 3rd
                party system
                <br />
                - all e-mail contacts MUST be your OWN opt in e-mail list.
                <br />
                <br />
                2. You cannot buy solo ads, use safe lists, use spam or anything
                similar.
                <br />
                <br />
                3. You must NOT run &quot;negative&quot; PPC or iframe domain
                campaigns such as &quot;Product name / author name scam&quot; or
                any other method to attract controversial click thru rates that
                an ordinary person would deem to portray a negative view of the
                product. This creates a very bad image for our company and the
                individuals featured in the products and you will be terminated
                from the program instantly.
                <br />
                <br />
                4. You should avoid using the raw affiliate link if you can. All
                affiliates are encouraged to utilize redirect links in e-mails
                and website campaigns and not the direct affiliate link you will
                receive. This increases conversions for both of us. (But
                ultimately the choice is up to you)
                <br />
                <br />
                5. You cannot earn commission on your own purchase. Any
                &apos;self&apos; purchase commission may be nullified or held
                back.
                <br />
                <br />
                6. iframes, review sites and cloaked domains are permitted as
                long as they do not contain offensive or negative domain URLs.
                <br />
                <br />
                7. Affiliate payments will be set as automatic payments after 30
                days of your referral&apos;s successful purchase.
                <br />
                <br />
                8. Please describe briefly how you will be promoting and any
                links to your own websites.
                <br />
                <br />
                9. We run a legitimate business, which means that we always
                correctly illustrate and represent our products and their
                features and benefits to the customer. Please make sure you do
                the same. Anyone found using misleading claims, inaccurate
                information or false testimonials (or anything that does not
                comply with FTC guidelines) will have their affiliate account
                revoked immediately.
                <br />
                <br />
                10. Vendor reserves the right to TERMINATE any affiliate if
                found to be breaking any rules and using grey-hat/black-hat
                marketing practices to drive sales or for any other reason.
                <br />
                <br />
                11. Affiliates CANNOT create social media pages with the product
                name, official logo or brand name to avoid confusion and prevent
                abuse. Anyone found using &quot;brand name&quot; &quot;website
                name&quot; or &quot;product images&quot; on their Facebook fan
                page or other social platform to promote the product without
                permission will be banned immediately!
                <br />
                <br />
                12. You may not give cash rebates as it may increase refund
                rates. Cash rebates of any kind are not permitted.
              </p>
            </div>
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

export default AffiliatePromotions;
