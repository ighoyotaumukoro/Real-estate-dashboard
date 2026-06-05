import React from "react";
import HeroBg from "../../assets/Adminloginimg.jpg";

function AdminLogin() {
  const heroWrapperStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${HeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "",
  };

  const cardWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "550px",
  };

  return (
    <>
      <div style={heroWrapperStyle}>
        <div style={cardWrapperStyle}>
          <div className="pt-5 pe-5 ps-5 pb-4 rounded-5 card bg-white w-100">
            <form>
              {/* Logo */}
              <div className="d-flex justify-content-center mb-3">
                <img
                  src="src/assets/BOC-logo.png"
                  style={{ height: "80px", objectFit: "contain" }}
                  alt="BOC Logo"
                />
              </div>

              {/* Title */}
              <p className="fw-bold h3 mb-1">Admin Login</p>
              <p className="text-secondary">Securely login to your account</p>

              
              <p className="text-start fw-semibold mb-1 mt-4 text-secondary">Email Address</p>
              <input
                type="email"
                className="bg-light w-100 p-2"
                style={{ border: "1px solid grey", borderRadius: "5px" }}
              />

              
              <p className="text-start fw-semibold mb-1 mt-4 text-secondary">Password</p>
              <input
                type="password"
                className="bg-light w-100 p-2 text-dark"
                style={{ border: "1px solid grey", borderRadius: "5px" }}
              />

          
              <div className="d-flex justify-content-between align-items-center mt-3">
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  Remember me
                </p>
                <span
                  className="fw-semibold text-primary"
                  style={{ fontSize: "12px", cursor: "pointer" }}
                >
                  Forgot Password?
                </span>
              </div>

              {/* Submit */}
              <div
                className="btn w-100 rounded-4 mt-4"
                style={{ backgroundColor: "#2a478d", color: "white" }}
              >
                Submit
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33325 8H12.6666"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 3.33301L12.6667 7.99967L8 12.6663"
                    stroke="white"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              {/* Footer */}
              <div
                className="text-secondary fw-semibold mt-4 text-center"
                style={{ fontSize: "12px" }}
              >
                By logging in, you agree to our Terms and Privacy Policy.
                <p className="mb-0">Protected by reCAPTCHA.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
