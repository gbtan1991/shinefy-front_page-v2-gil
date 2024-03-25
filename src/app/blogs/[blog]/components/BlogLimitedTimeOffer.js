export default function BlogLimitedTimeOffer() {
    return (
        <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-12 px-0 text-center lg:mb-0 lg:text-start">
                <h2 className="mb-5 font-karla text-[24px] font-bold leading-[120%] text-white">
                    Limited-Time Offer
                </h2>
                <h1 className="mb-5 font-montserrat text-[28px] font-bold leading-[120%] text-[#7bdcde] md:mb-2.5">
                    Best Shinefy tools
                </h1>
                <p className="mb-2.5 max-w-[380px] font-karla text-base leading-[120%] text-white">
                    Don’t miss this chance to get the discounted package and start on your
                    journey towards a growing income using AI.
                </p>
            </div>
            <a
                href="https://realchasereiner.kartra.com/page/shinefyai2"
                rel="noreferrer"
                // target="_blank"
                className="limited-time-offer-btn flex min-w-[220px] items-center justify-center"
            >
                Grab this Deal!
            </a>
        </div>
    );
}
