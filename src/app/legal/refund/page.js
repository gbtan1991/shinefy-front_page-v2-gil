import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import "../LegalPages.css";



const Refund = () => {
  return (
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">Legal</h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Subscription Agreement
          </h3>
          <p className="global-header-text-3 md:text-center">
            Last Updated 15 March, 2024
          </p>
        </div>
      </header>

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
                Subscription Agreement
              </a>
            </div>
            <div className="mb-16">
              <h2 className="legal-title-text mb-8">
                Shinefy LLC Subscription, Billing & Refund Policy
              </h2>
              <p className="legal-content-text">
                We at Shinefy LLC strive to provide our customers with the best
                possible service. However, we understand that there may be
                instances where you may need to cancel your subscription and
                request a refund. Please review our{" "}
                <a
                  href="#refund-policies"
                  className="text-xl font-semibold uppercase underline"
                >
                  refund policy
                </a>{" "}
                carefully before making a purchase.
              </p>
              <br />
              <p className="legal-content-text">
                Use of Shinefy products and services (including but not limited
                to Shinefy LLC, Chase Reiner) constitutes your acceptance of and
                agreement to comply with this section.
                <br />
                <br />
                All accounts are set up on a prepaid basis. Payment must be
                received by Shinefy LLC before any billable product or service
                is provided/activated. In the event of a trial period, payment
                information must be on file before the Client&lsquo;s account is
                created.
                <br />
                <br />
                Client is required to keep a valid credit/debit card on file to
                charge for recurring monthly subscription fees. All recurring
                subscriptions are automatically invoiced and charged to the
                credit/debit card on file.
                <br />
                <br />
                Trial subscriptions are limited to one trial per person, per
                product. The purchase and subsequent cancellation of multiple
                trials may result in permanent closure of the account. If it is
                determined that any Client fails to pay the agreed upon monthly
                or annual payments by exploitation of any self-billing feature,
                all associated accounts may be terminated immediately, without
                warning. Subscription billing is based on the availability of
                products and services within the parameters defined by
                client&lsquo;s package(s).
                <br />
                <br />
                Payment receipts are provided electronically with each purchase
                and may also be provided upon client&lsquo;s request.
              </p>
            </div>
            {/* <div className="mb-16"> */}
            <div>
              <h5 className="legal-title-text-2 mb-20">Billing Cycle</h5>

              <div className="mb-16">
                <Accordion className="mui-accordion">
                  <AccordionSummary
                    expandIcon={
                      <div className="expand-icon-container">
                        <div className="expand-icon"></div>
                      </div>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="question p-6"
                  >
                    <p>Credit/Debit Card Billing</p>
                  </AccordionSummary>
                  <hr className="jus ml-[1.75%] max-w-[95%]" />
                  <AccordionDetails className="mui-accordion-details">
                    <p className="global-header-text-3 max-w-[96%]">
                      All credit/debit cards are automatically charged on the
                      Client&lsquo;s specific billing cycle date.
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
                    className="question p-6"
                  >
                    <p>Payment failure</p>
                  </AccordionSummary>
                  <hr className="jus ml-[1.75%] max-w-[95%]" />
                  <AccordionDetails className="mui-accordion-details">
                    <p className="global-header-text-3 max-w-[96%]">
                      In the event a credit/debit card fails to charge
                      successfully, access to the product will immediately
                      cease.
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
                    className="question p-6"
                  >
                    <p>Deactivation</p>
                  </AccordionSummary>
                  <hr className="jus ml-[1.75%] max-w-[95%]" />
                  <AccordionDetails className="mui-accordion-details">
                    <p className="global-header-text-3 max-w-[96%]">
                      Shinefy reserves the right to remove Client application
                      data from its servers after nonpayment.
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
                    className="question p-6"
                  >
                    <p>Cancellation</p>
                  </AccordionSummary>
                  <hr className="jus ml-[1.75%] max-w-[95%]" />
                  <AccordionDetails className="mui-accordion-details">
                    <p className="global-header-text-3 max-w-[96%]">
                      Cancellation of a subscription immediately stops automatic
                      subscription billing. If there is time remaining in a
                      subscription period, access to the service will remain
                      open until the end of the prepaid billing cycle.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>

              {/* <p className="legal-content-text-2 max-w-[51rem]">
                  Please note that cancelling your subscription may take effect
                  immediately or at the end of the pre-paid period. We will
                  confirm the cancellation of your subscription within 1 to 3
                  business days after receiving your request.
              </p> */}
            </div>

            <div className="mb-20">
              <h2 className="legal-title-text-2 mb-8">Subscription Billing</h2>
              <p className="legal-content-text-2">
                Invoices are generated and payments are collected at the
                beginning of each billing period. Client billing periods
                typically begin on the day of the month (or year for yearly
                plans) in which the Client purchases the Shinefy LLC
                subscription.
                <br />
                <br />
                Clients must request to cancel their subscriptions at least 10
                days prior to their next billing date to avoid being charged on
                the billing date.
                <br />
                <br />
                Shinefy LLC will not prorate any portion of unused subscription
                services. All subscription fees are nonrefundable except as
                described below.
              </p>
            </div>

            {/* <div className="mb-20">
                <h2 className="legal-title-text-2 mb-8">Refund Policies</h2>
                <p className="legal-content-text-2">
                  Refunds for Shinefy subscriptions are NOT AVAILABLE !!!. All
                  subscriptions must be cancelled 10 days before the next
                  billing date to avoid charge.
                  <br />
                  Refunds will not be given for unused or partially used
                  subscriptions.
                </p>
              </div>


            <div className="mb-36">
              <h2 className="legal-title-text-2 mb-8">
                Cancellation Process / Creating a cancellation request
              </h2>
              <p className="legal-content-text-2">
                A request to cancel a Shinefy LLC Product must be initiated at
                least 10 days prior to the next invoice date.
                <br />
                <br />
                For Shinefy users, cancellation can also be done via email
                atsupport@shineranker.comor self service in Client&lsquo;s
                Account.
                <br />
                <br />
                Any other request to cancel a Shinefy LLC Product must be made
                via the customer support portal with a Shinefy LLC
                representative at least 10 days prior to the next invoice date.
                Clients are encouraged to keep records of all communications
                regarding cancellation. Until a cancellation request is made, or
                a cancellation processed via the self-service portal, Shinefy
                LLC will continue to treat Client&lsquo;s Account as an open
                account. Unless canceled, the billing cycle will continue,
                possibly resulting in a past due account that may be turned over
                to a third-party collection service.
                <br />
                <br />
                It is imperative to contact a Shinefy LLC representative,
                utilize the self-service option, or submit an online ticket if
                Client wishes to initiate cancellation of its Shinefy LLC
                account.
                <br />
                <br />
                Client Data may be deleted at the discretion of Shinefy LLC when
                Client&lsquo;s account is closed for any reason.
              </p>
            </div> */}

            <section id="refund-policies">
              <div className="mb-20">
                <h2 className="legal-title-text-2 mb-8">Refund Policies</h2>
                <span className="legal-content-text to-header-color">
                  7-Day Refund Policy
                </span>
                <p className="legal-content-text-2 mb-4 mt-4">
                  We offer a 7-day refund policy for all initial purchases,
                  including Shinefy Light, Shinefy Starte, and Shinefy Go Big
                  (annually) subscriptions. If you are not satisfied with our
                  service within the first 7 days of your purchase, you may
                  request a refund.
                </p>
                <span className="legal-content-text to-header-color">
                  Non-Refundable Renewals
                </span>
                <p className="legal-content-text-2 mb-4 mt-4">
                  Once your subscription renews or rebills, the refund option is
                  no longer available. This means that if you continue to use
                  our service after the initial period and your account is
                  charged for the renewal, you cannot request a refund for that
                  renewal payment.
                </p>
                <span className="legal-content-text to-header-color">
                  Unused or Partially Used Subscriptions
                </span>
                <p className="legal-content-text-2 mb-4 mt-4">
                  Please note that refunds will not be given for unused or
                  partially used subscriptions. We only provide refunds within
                  the 7-day period from the date of your initial purchase.
                </p>
              </div>
            </section>

            <div className="mb-36">
              <h2 className="legal-title-text-2 mb-8">
                Cancellation Process / Creating a cancellation request
              </h2>
              <p className="legal-content-text-2">
                To request a refund, you must initiate the cancellation process
                within the first 7 days of your purchase.
                <br />
                <br />
                You can do this by contacting our customer support team at
                support@shineranker.com or self service in Client&lsquo;s
                Account.
                <br />
                <br />
                We encourage you to keep records of all communications regarding
                cancellation and refund requests for your reference.
                <br />
                <br />
                It is imperative to contact a Shinefy LLC representative,
                utilize the self-service option, or submit an online ticket if
                Client wishes to initiate cancellation of its Shinefy LLC
                account.
                <br />
                <br />
                Client Data may be deleted at the discretion of Shinefy LLC when
                Client&lsquo;s account is closed for any reason.
              </p>
            </div>


            <div className="mb-12 flex flex-row justify-center">
              <p className="global-bg-to-dark-purple global-header-text-3 max-w-[720px] px-8 py-5 text-center md:px-20 md:py-8">
                <span className=" text-tiffanyblue text-2xl font-bold">
                  Agreement to Billing Terms and Conditions
                </span>
                <br />
                <br />
                <span className="legal-content-text-2 mt-2">
                  By signing up for a Shinefy LLC subscription, you are agreeing
                  to our Shinefy LLC Subscription, Billing & Refund Policy.
                </span>
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

export default Refund;
