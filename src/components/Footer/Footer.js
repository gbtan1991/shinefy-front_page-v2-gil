import SocialLinksButtons from "../SocialLinks/SocialLinksButtons";

import "./Footer.css";

const FooterPage = () => {
  return (
    <footer className="bg-[#4D2FBB] px-[5%] lg:px-[10%] xl:px-[15%] 2xl:px-[20%] ">
      <div className="py-16 xl:py-[5.6rem]">
        <div className="flex flex-col items-center justify-center gap-10 xl:flex-row xl:items-start 2xl:px-20">
          <div className="mb-6">
            <a href="/" className="mb-6 flex justify-center xl:justify-start">
              <img
                src="/images/global/footer-shinefy-logo.png"
                alt="Shine Ranker Logo"
                width="270px"
                height="63px"
              />
            </a>

            <p className="footer-tagline mb-4 flex justify-center pl-2 xl:justify-start">
              Earn money with Shinefy Tools
            </p>

            <div className="flex justify-center gap-2 pl-2 md:gap-3">
              <SocialLinksButtons />
            </div>
          </div>

          <div className="flex w-full flex-col justify-evenly gap-10 pt-2 md:flex-row xl:w-4/5">
            <ul className="flex flex-col text-center md:text-left">
              <li className="mb-4">
                <p className="footer-heading-title">Product</p>
              </li>

              <li className="mb-1">
                <a href="/tools" className="footer-links-text">
                  Website Scraper Tool
                </a>
              </li>

              <li className="mb-1">
                <a href="/tools" className="footer-links-text">
                  Video Generation Tool
                </a>
              </li>

              <li className="mb-1">
                <a href="/tools" className="footer-links-text">
                  AI Text to Image Tool
                </a>
              </li>

              <li className="mb-1">
                <a href="/tools" className="footer-links-text">
                  AI Image to Image Tool
                </a>
              </li>
            </ul>

            <ul className="flex flex-col flex-wrap text-center md:text-left">
              <li className="mb-4">
                <h1 className="footer-heading-title">Legal</h1>
              </li>

              <li className="mb-1">
                <a href="/legal/terms-of-use" className="footer-links-text">
                  Terms of Use
                </a>
              </li>

              <li className="mb-1">
                <a href="/legal/refund" className="footer-links-text">
                  Refund & Cancelation
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="/legal/earnings-disclaimer"
                  className="footer-links-text"
                >
                  Earnings Disclaimer
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="/legal/facebook-disclaimer"
                  className="footer-links-text"
                >
                  Facebook Disclaimer
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="/legal/affiliate-promotions"
                  className="footer-links-text"
                >
                  Affiliate Promotions
                </a>
              </li>
            </ul>

            <ul className="flex flex-col flex-wrap text-center md:text-left">
              <li className="mb-4">
                <h1 className="footer-heading-title">About</h1>
              </li>

              <li className="mb-1">
                <a href="/about" className="footer-links-text">
                  Shinefy
                </a>
              </li>

              <li className="mb-1">
                <a href="/faq" className="footer-links-text">
                  FAQ
                </a>
              </li>

              <li className="mb-1">
                <a href="/tools" className="footer-links-text">
                  Tools
                </a>
              </li>

              <li className="mb-1">
                <a href="/pricing" className="footer-links-text">
                  Pricing
                </a>
              </li>
            </ul>

            <ul className="flex flex-col flex-wrap text-center md:text-left">
              <li className="mb-4">
                <h1 className="footer-heading-title">Support</h1>
              </li>

              <li className="mb-1">
                <a
                  href="https://discord.gg/BnfsXW2Jma"
                  className="footer-links-text"
                  rel="noreferrer"
                  target="_blank"
                >
                  Discord Community
                </a>
              </li>

              <li className="mb-1">
                <a
                  href="https://www.facebook.com/shineranker"
                  className="footer-links-text"
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook Community
                </a>
              </li>

              <li className="">
                <a
                  href="https://discord.gg/BnfsXW2Jma"
                  className="footer-links-text"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;