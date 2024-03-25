import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import "../../LegalPages.css";

const Addendum = () => {
  return (
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">Legal</h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Latest terms and Conditions
          </h3>
          <p className="global-header-text-3 md:text-center">
            Last Updated 23 Feb, 2024
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
                Latest terms and Conditions
              </a>
            </div>

            <div className="mb-8">
              <h2 className="legal-title-text mb-8">
                Service Availability and Quality
              </h2>
              <p className="legal-content-text-2 ">
                We are constantly improving the Services to make them better.
                <br />
                <br />
                The Services are subject to modification and change, including
                but not limited to the art style of Assets, the algorithms used
                to generate the Assets, and features available to the Customer.
                No guarantees are made with respect to the Services’ quality,
                stability, uptime or reliability. Please do not create any
                dependencies on any attributes of the Services or the Assets. We
                will not be liable to You or Your downstream customers for any
                harm caused by Your dependency on the Service.
                <br />
                <br />
                Both the Services and the Assets are provided to Customer on an
                &quot;AS IS&quot; basis, without warranties or conditions of any
                kind, either express or implied, including, without limitation,
                any warranties or conditions of Title, Non-Infringement,
                Merchantability, Or Fitness For A Particular Purpose. You are
                solely responsible for determining the appropriateness of using
                or redistributing the Assets and assume any risks associated
                with use of the Services.
              </p>
            </div>

            <div className="mb-16">
              <p className="legal-content-text to-header-color mb-8">
                You may not use the Service to try to violate the intellectual
                property rights of others, including copyright, patent, or
                trademark rights. Doing so may subject you to a permanent ban
                from the Service.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="legal-title-text-2 mb-8">Your Information</h2>
              <p className="legal-content-text-2">
                By using the Services, You may provide Shinefy with personal
                information like Your email address, user name, billing
                information, favorites, image outputs, and text prompts that You
                enter, or sample images that You upload to the Service
              </p>
            </div>

            <div className="mb-8">
              <h2 className="legal-title-text-2 mb-8">Your Content Rights</h2>
              <div className="legal-content-text-2 mb-16">
                You own all Assets You create with the Services to the fullest
                extent possible under applicable law.
                <br />
                <br />
                <span className="legal-content-text to-header-color">
                  There are some exceptions:
                </span>
                <br />
                <br />
                <div className="legal-content-text-2 px-5 md:px-10 lg:px-20">
                  • Your ownership is subject to any obligations imposed by this
                  Agreement and the rights of any third-parties.
                  <br />
                  <br />• If you upscale the images of others, these images
                  remain owned by the original creators.
                </div>
                <br />
                Please consult Your own lawyer if You want more information
                about the state of current intellectual property law in Your
                jurisdiction. Your ownership of the Assets you created persists
                even if in subsequent months You downgrade or cancel Your
                membership.
              </div>
            </div>

            <div className="mb-2">
              <h2 className="legal-title-text-2 mb-8">
                The Content Rights You Give to Shinefy
              </h2>
              <p className="legal-content-text-2 mb-16">
                By using the Services, You grant to Shinefy, its successors, and
                assigns a perpetual, worldwide, non-exclusive, sublicensable
                no-charge, royalty-free, irrevocable copyright license to
                reproduce, prepare derivative works of, publicly display,
                publicly perform, sublicense, and distribute text, videos and
                image prompts You input into the Services, as well as any Assets
                produced by You through the Service. This license survives
                termination of this Agreement by any party, for any reason.
              </p>
            </div>

            <div className="mb-2">
              <h2 className="legal-title-text-2 mb-8">
                DMCA and Takedowns Policy
              </h2>
              <div className="legal-content-text-2 mb-16">
                We respect the intellectual property rights of others. If you
                believe that material located on or linked to by the Services
                violates your copyright or trademark, please send a notice of
                claimed infringement to{" "}
                <a href="mailto:support@shineranker.com?subject=Takedown Request">
                  support@shineranker.com
                </a>{" "}
                with the subject{" "}
                <span className="text-base font-bold">
                  &quot;Takedown Request&quot;
                </span>{" "}
                , and include the following:
                <br />
                <br />
                <div className="legal-content-text-2 px-8 md:px-10 lg:px-20">
                  - Your physical or electronic signature.
                  <br />
                  <br />- Identification of the copyrighted work (or mark) you
                  believe to have been infringed, or if the claim involves
                  multiple works, a representative list of such works.
                  <br />
                  <br />- Identification of the material you believe to be
                  infringing in a sufficiently precise and detailed manner to
                  allow us to locate that material.
                  <br />
                  <br />- Adequate information by which we can contact you
                  (including your name, postal address, telephone number, and,
                  if available, email address).
                  <br />
                  <br />- A statement that you have a good faith belief that use
                  of the copyrighted material is not authorized by the copyright
                  owner, its agent, or the law.
                  <br />
                  <br />- A statement that the information in the written notice
                  is accurate.
                  <br />
                  <br />- A statement, under penalty of perjury, that you are
                  authorized to act on behalf of the copyright owner.
                  <br />
                  <br />- If the copyright owner’s rights arise under the laws
                  of a country other than the United States, please identify the
                  country.
                </div>
              </div>
            </div>

            <div className="mb-2">
              <h2 className="legal-title-text-2 mb-8">
                Limitation of Liability and Indemnity
              </h2>
              <p className="legal-content-text-2 mb-16">
                We provide the service as is, and we make no promises or
                guarantees about it.
                <br />
                <br />
                You understand and agree that we will not be liable to You or
                any third party for any loss of profits, use, goodwill, or data,
                or for any incidental, indirect, special, consequential or
                exemplary damages, however they arise.
                <br />
                <br />
                You are responsible for Your use of the service. If You harm
                someone else, commit legal violations or get into a dispute with
                someone else, we will not be involved.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="legal-title-text mb-8">Community Guidelines</h2>
              <div className="legal-content-text-2 px-8 md:px-10 lg:px-20">
                <br />
                <div className="respect-policy">
                  <p>
                    <span className="number">1.</span> Be kind and respect each
                    other and staff. Do not create images or use text prompts
                    that are inherently disrespectful, aggressive, hateful, or
                    otherwise abusive. Violence or harassment of any kind will
                    not be tolerated.
                  </p>
                </div>
                <br />
                <div className="respect-policy">
                  <p>
                    <span className="number">2.</span> No adult content or
                    gore. Please avoid making visually shocking or disturbing
                    content.
                  </p>
                </div>
                <br />
                <div className="respect-policy">
                  <p>
                    <span className="number">3.</span>Respect others’ creations.
                    Do not distribute or publicly repost the creations of others
                    without their permission.
                  </p>
                </div>
                <br />
                <div className="respect-policy">
                  <p>
                    <span className="number">4.</span> You may not use the
                    Services to generate images for political campaigns, or to
                    try to influence the outcome of an election.
                  </p>
                </div>
                <br />
                <div className="respect-policy">
                  <p>
                    <span className="number">5.</span> You may not use the
                    Services or the Assets to attempt to or to actually deceive
                    or defraud anyone.
                  </p>
                </div>
                <br />
                <div className="respect-policy">
                  <p>
                    <span className="number">6.</span> You may not use the
                    Services for illegal activity nor may you upload images to
                    our servers that involve illegal activity, or where the
                    uploading itself may be illegal.
                  </p>
                </div>
                <br />
                <div className="respect-policy">
                  <p>
                    <span className="number">7.</span> You may not intentionally
                    mislead recipients of the Assets about their nature or
                    source..
                  </p>
                </div>
                <br />
                <div className="respect-policy">
                  <p>
                    <span className="number">8.</span> Respect others’ rights.
                    Do not upload others’ private information.
                  </p>
                  <br />
                  <div className="respect-policy">
                    <p>
                      <span className="number">9.</span> Be careful about
                      sharing. It’s OK to share Your creations outside of the
                      Shinefy community but please consider how others might
                      view Your content.
                    </p>
                  </div>
                  <br />
                  <div className="respect-policy">
                    <p>
                      <span className="number">10.</span> Any violations of
                      these rules may lead to bans from our services. Behave
                      respectfully or lose Your rights to use the Service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12 flex flex-row justify-center">
          <p className="global-bg-to-dark-purple global-header-text-3 max-w-[720px] px-8 py-5 text-center md:px-20 md:py-8">
            <span className=" text-tiffanyblue text-2xl font-bold">
              Agreement to Billing Terms and Conditions
            </span>
            <br />
            <br />
            <span className="legal-content-text-2 mt-2">
              By signing up for a Shinefy LLC subscription, you are agreeing to
              our Shinefy LLC Subscription, Billing & Refund Policy.
            </span>
          </p>
        </div>
      </div>

      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
};

export default Addendum;
