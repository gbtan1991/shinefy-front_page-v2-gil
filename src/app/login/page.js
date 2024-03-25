import "./Login.css";

const Login = () => {
  return (
    <div className="login-container flex flex-col items-center justify-center gap-4">
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
        <form action="/login" method="post">
          <h1 className="signup-card-title mb-10 text-center">Welcome Back!</h1>

          <div className="flex flex-col">
            <label htmlFor="email" className="signup-label mb-2">
              Email:
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
            <label htmlFor="password" className="signup-label mb-2">
              Password:
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

          <div>
            <a
              href="/login"
              className="signup-account-link flex justify-center"
            >
              Forgot Password?
            </a>
          </div>

          <div>
            <button type="submit" className="signup-submit-button my-5">
              Login
            </button>
          </div>

          <div className="signup-account-text">
            No account yet?{" "}
            <a href="/login" className="signup-account-link">
              Register here.
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

export default Login;
