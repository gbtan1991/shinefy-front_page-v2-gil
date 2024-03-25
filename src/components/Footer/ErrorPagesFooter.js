import SocialLinksButtons from "../SocialLinks/SocialLinksButtons";

import "./Footer.css";

const ErrorPagesFooter = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 xl:text-left">
        <div className="flex flex-col items-center justify-center xl:px-24">
          <div className="mb-8 flex justify-center gap-2 md:gap-5 lg:justify-start">
            <SocialLinksButtons />
          </div>

          <hr className="mb-3 w-full opacity-75" />
          <br />

          <p className="text-center text-sm text-white">
            © 2022 - 2023 Copyright. Shinefy Tools.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ErrorPagesFooter;
