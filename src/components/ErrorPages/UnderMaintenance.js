import ErrorPagesFooter from "@/components/Footer/ErrorPagesFooter";

export default function UnderMaintenance() {
  return (
    <div className="h-[100vh] lg:h-[120vh]">
      <div className="global-bg-to-linear-gradient-purple flex h-[60%] flex-row justify-center px-[5%] lg:h-[55%] xl:px-[15%] 2xl:px-[20%]">
        <div className="flex w-full flex-col items-center justify-end pb-16">
          <h1 className="global-error-text-2 mb-8">We’ll be back soon!</h1>
          <h2 className="global-header-text-1 mb-8 text-center">
            We are always after your best experience.
          </h2>
          <p className="global-header-text-3 text-center">
            Our website will be back before you know it.
            <br />
            Check out our socials to stay updated.
          </p>
        </div>
      </div>
      <div className="global-bg-to-dark-purple flex h-[40%] flex-row items-end lg:h-[50%]">
        <ErrorPagesFooter />
      </div>
      <div className="absolute left-0 top-0 mt-[10vh] hidden h-[60vh] w-full flex-row lg:flex lg:h-[90vh]">
        <div className="flex h-full w-[70%] flex-row items-end 2xl:w-[65%]">
          <img
            src="/images/ErrorPage/electrical-cord-icon.png"
            alt="electrical cord vector image"
            // width="170px"
            className="mb-10 ml-[-5px]"
          />
        </div>
        <div className="2lx:w-[35%] flex h-full w-[30%] flex-row items-end pb-[8rem]">
          <img
            src="/svg/ErrorPage/electrical-inlit-icon.svg"
            alt="electrical inlit vector image"
            // width="170px"
            className="2xl:max-w-auto max-w-[110px] md:mb-5 lg:ml-16 xl:max-w-[150px] 2xl:ml-0 "
          />
        </div>
      </div>
    </div>
  );
}
