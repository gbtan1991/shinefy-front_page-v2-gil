import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-2">
        <div>
          <img
            src="/images/global/shineranker-logo-colored.png"
            alt="Shine Ranker Logo"
            width="62px"
            height="62px"
            className="global-shineranker-image"
          />
        </div>
        <div>
          <h1 className="global-shineranker-text">SHINE RANKER</h1>
        </div>
      </div>
      <div className="signup-card">
        <form action="/signup" method="post">
          <h1 className="signup-card-title mb-10 text-center">
            Create an Account
          </h1>

          <div className="flex flex-col">
            <label htmlFor="email" className="signup-label mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="signup-input mb-3"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="firstname" className="signup-label mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter Your Name"
              className="signup-input mb-3"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="signup-label mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="signup-input mb-3"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirm-password" className="signup-label mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              className="signup-input mb-3"
              required
            />
          </div>

          <div>
            <label className="signup-checkbox-label">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="signup-checkbox mr-1"
                required
              />
              I agree to Shine Ranker&apos;s
              <a
                href="/legal/terms-of-use"
                target="_blank"
                className="signup-checkbox-link ml-1"
              >
                Terms of Use
              </a>
            </label>
          </div>

          <div>
            <button type="submit" className="signup-submit-button my-5">
              Register
            </button>
          </div>

          <div className="signup-account-text">
            Already have an account?{" "}
            <a href="/login" className="signup-account-link">
              Log in
            </a>
          </div>
        </form>
      </div>

      <div className="signup-shineranker-text mt-5">
        <a href="/about" className="signup-shineranker-link">
          Shine Ranker
        </a>{" "}
        firmly upholds the responsible application of AI,
        <br />
        built upon a foundation of ethical principles prioritizing the
        well-being of individuals.
      </div>
    </div>
  );
};

export default Signup;
