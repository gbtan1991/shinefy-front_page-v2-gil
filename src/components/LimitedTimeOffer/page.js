import "./LimitedTimeOffer.css";

const LimitedTimeOffer = () => {
    return (
        <section className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-between space-x-0 py-36 md:py-28 lg:flex-row lg:space-x-28 lg:py-20 xl:space-x-44">
                <div className="mb-12 px-4 text-center md:px-0 lg:mb-0 lg:text-start">
                    <h2 className="global-header-text-1 mb-5">Limited-Time Offer</h2>
                    <h1 className="global-header-text-2 mb-5 px-10 md:mb-2.5  md:px-0">
                        Best Shinefy tools
                    </h1>
                    <p className="global-header-text-3 mb-2.5 max-w-[700px]">
                        Don’t miss this chance to get the discounted package and start on
                        your journey towards a growing income using AI.
                    </p>
                </div>
                <a
                    href="https://realchasereiner.kartra.com/page/shinefyai2"
                    rel="noreferrer"
                    // target="_blank"
                    className="limited-time-offer-btn flex items-center justify-center px-14"
                >
                    Grab this Deal!
                </a>
            </div>
        </section>
    );
};

export default LimitedTimeOffer;
