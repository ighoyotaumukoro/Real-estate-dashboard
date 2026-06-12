import React, { useState } from "react";
import logo from "../../assets/BOC-logo.png";
import { Link,  useLocation } from "react-router-dom";

function NavIcon({ children }) {
  return <span style={{ flexShrink: 0 }}>{children}</span>;
}
function MediaLibrary(){
const [sidebarOpen, setSidebarOpen] = useState(false);

  // Inside Dashboard component:
  const location = useLocation();

const navItems = [
    {
      label: "Dashboard",
      to: "/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7.5 2.5H3.33a.83.83 0 00-.83.83V7.5c0 .46.37.83.83.83H7.5c.46 0 .83-.37.83-.83V3.33A.83.83 0 007.5 2.5z"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.67 2.5H12.5a.83.83 0 00-.83.83V7.5c0 .46.37.83.83.83h4.17c.46 0 .83-.37.83-.83V3.33a.83.83 0 00-.83-.83z"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.67 11.67H12.5a.83.83 0 00-.83.83v4.17c0 .46.37.83.83.83h4.17c.46 0 .83-.37.83-.83V12.5a.83.83 0 00-.83-.83z"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 11.67H3.33a.83.83 0 00-.83.83v4.17c0 .46.37.83.83.83H7.5c.46 0 .83-.37.83-.83V12.5a.83.83 0 00-.83-.83z"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Properties",
      to: "/properties",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M8.33 10h3.34M8.33 6.67h3.34M11.67 17.5V15c0-.44-.18-.87-.49-1.18A1.67 1.67 0 0010 13.33c-.44 0-.86.18-1.18.49-.31.31-.49.74-.49 1.18v2.5"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 18.33V4.17C5 3.73 5.18 3.3 5.49 2.99 5.8 2.68 6.22 2.5 6.67 2.5h6.66c.45 0 .87.18 1.18.49.31.31.49.74.49 1.18v14.16"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 18.33H3.33a1.67 1.67 0 01-1.66-1.66v-5.84C1.67 9.39 2.51 8.33 3.33 8.33H5M15 18.33h1.67a1.67 1.67 0 001.66-1.66V7.5a1.67 1.67 0 00-1.66-1.67H15"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Agents",
      to: "/agent",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M13.33 17.5v-1.67a3.33 3.33 0 00-3.33-3.33H5A3.33 3.33 0 001.67 15.83V17.5"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 9.17a3.33 3.33 0 100-6.67 3.33 3.33 0 000 6.67zM13.33 2.61a3.33 3.33 0 010 6.45M18.33 17.5v-1.67a3.33 3.33 0 00-2.5-3.22"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Media Library",
      to: "/media",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect
            x="2.5"
            y="2.5"
            width="15"
            height="15"
            rx="1.67"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 9.17a1.67 1.67 0 100-3.34 1.67 1.67 0 000 3.34zM17.5 12.5l-2.93-2.93a1.67 1.67 0 00-2.36 0L5 17.5"
            stroke="currentColor"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Settings",
      to: "/settings",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M8.05918 3.44712C8.10509 2.96407 8.32945 2.51549 8.68843 2.18902C9.0474 1.86255 9.5152 1.68164 10.0004 1.68164C10.4857 1.68164 10.9535 1.86255 11.3124 2.18902C11.6714 2.51549 11.8958 2.96407 11.9417 3.44712C11.9693 3.75916 12.0716 4.05997 12.2401 4.32407C12.4086 4.58817 12.6382 4.80779 12.9096 4.96435C13.1809 5.12091 13.486 5.20979 13.7989 5.22347C14.1119 5.23715 14.4235 5.17523 14.7075 5.04295C15.1484 4.84277 15.6481 4.8138 16.1092 4.96169C16.5703 5.10958 16.9599 5.42374 17.2021 5.84304C17.4443 6.26233 17.5219 6.75676 17.4197 7.23009C17.3175 7.70343 17.0428 8.1218 16.6492 8.40378C16.3928 8.58366 16.1836 8.82262 16.0391 9.10047C15.8946 9.37832 15.8192 9.68687 15.8192 10C15.8192 10.3132 15.8946 10.6217 16.0391 10.8996C16.1836 11.1774 16.3928 11.4164 16.6492 11.5963C17.0428 11.8783 17.3175 12.2966 17.4197 12.77C17.5219 13.2433 17.4443 13.7377 17.2021 14.157C16.9599 14.5763 16.5703 14.8905 16.1092 15.0384C15.6481 15.1863 15.1484 15.1573 14.7075 14.9571C14.4235 14.8248 14.1119 14.7629 13.7989 14.7766C13.486 14.7903 13.1809 14.8792 12.9096 15.0357C12.6382 15.1923 12.4086 15.4119 12.2401 15.676C12.0716 15.9401 11.9693 16.2409 11.9417 16.553C11.8958 17.036 11.6714 17.4846 11.3124 17.8111C10.9535 18.1375 10.4857 18.3184 10.0004 18.3184C9.5152 18.3184 9.0474 18.1375 8.68843 17.8111C8.32945 17.4846 8.10509 17.036 8.05918 16.553C8.03163 16.2408 7.92926 15.9399 7.76073 15.6757C7.5922 15.4115 7.36249 15.1918 7.09104 15.0352C6.81959 14.8786 6.5144 14.7898 6.20133 14.7762C5.88825 14.7626 5.57651 14.8247 5.29251 14.9571C4.85158 15.1573 4.35195 15.1863 3.89084 15.0384C3.42974 14.8905 3.04015 14.5763 2.79791 14.157C2.55567 13.7377 2.47811 13.2433 2.58031 12.77C2.68251 12.2966 2.95718 11.8783 3.35084 11.5963C3.60719 11.4164 3.81645 11.1774 3.96092 10.8996C4.10538 10.6217 4.1808 10.3132 4.1808 10C4.1808 9.68687 4.10538 9.37832 3.96092 9.10047C3.81645 8.82262 3.60719 8.58366 3.35084 8.40378C2.95773 8.12166 2.68355 7.70345 2.58159 7.23044C2.47964 6.75743 2.55718 6.2634 2.79916 5.84438C3.04114 5.42536 3.43027 5.11127 3.89092 4.96315C4.35157 4.81504 4.85083 4.84348 5.29168 5.04295C5.57564 5.17523 5.8873 5.23715 6.20026 5.22347C6.51322 5.20979 6.81829 5.12091 7.08962 4.96435C7.36096 4.80779 7.59059 4.58817 7.75906 4.32407C7.92754 4.05997 8.02991 3.75916 8.05751 3.44712"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  
  

  return (
    <>
     
      <div className="boc-root">
        <div
          className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
          onClick={() => setSidebarOpen(false)}
        />

        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <img src={logo} alt="BOC Logo" className="sidebar-logo" />

          <nav>
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`nav-item ${isActive ? "active" : ""}`}
                  onClick={() => setSidebarOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  {isActive && <span className="nav-bar" />}
                  <NavIcon>{item.icon}</NavIcon>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-bottom">
            <a
              href="#"
              className="nav-item"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.5 2.5H17.5V7.5M8.33 11.67L17.5 2.5M15 10.83v5a1.67 1.67 0 01-1.67 1.67H4.17A1.67 1.67 0 012.5 15.83V6.67A1.67 1.67 0 014.17 5h5"
                  stroke="#99A1AF"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              View Website
            </a>
            <a
              href="#"
              className="nav-item danger"
              onClick={(e) => e.preventDefault()}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M13.33 14.17L17.5 10l-4.17-4.17M17.5 10H7.5M7.5 17.5H4.17A1.67 1.67 0 012.5 15.83V4.17A1.67 1.67 0 014.17 2.5H7.5"
                  stroke="#ef4444"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sign Out
            </a>
          </div>
        </aside>

        <div className="main-content">
          <header className="topbar">
            <button
              className="hamburger"
              onClick={() => setSidebarOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <input
              type="text"
              className="search-input"
              placeholder="Search listings, agents, enquiries..."
            />

            <div className="topbar-right">
              <button className="bell-btn" aria-label="Notifications">
                <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                  <path
                    d="M16.56 25.5a1.94 1.94 0 003.88 0M10.72 20.77a1.18 1.18 0 00.9 1.4h12.76a1.18 1.18 0 00.9-1.4c-1.11-1.14-2.28-2.36-2.28-6.1a5 5 0 00-10 0c0 3.74-1.18 4.96-2.28 6.1z"
                    stroke="#99A1AF"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="21"
                    y="9"
                    width="6"
                    height="6"
                    rx="3"
                    fill="#003A8C"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <div className="user-info">
                <p className="d-none user-name">Demo Admin</p>
                <p className="d-none user-role">SUPER ADMIN</p>
              </div>

              <div className="avatar">
                <Link to="/adminlogin">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="20"
                      fill="#2A478D"
                      fill-opacity="0.1"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="19.5"
                      stroke="#2A478D"
                      stroke-opacity="0.1"
                    />
                    <path
                      d="M25.8334 27.5V25.8333C25.8334 24.9493 25.4822 24.1014 24.8571 23.4763C24.232 22.8512 23.3841 22.5 22.5001 22.5H17.5001C16.616 22.5 15.7682 22.8512 15.1431 23.4763C14.5179 24.1014 14.1667 24.9493 14.1667 25.8333V27.5"
                      stroke="#003A8C"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.0001 19.1667C21.841 19.1667 23.3334 17.6743 23.3334 15.8333C23.3334 13.9924 21.841 12.5 20.0001 12.5C18.1591 12.5 16.6667 13.9924 16.6667 15.8333C16.6667 17.6743 18.1591 19.1667 20.0001 19.1667Z"
                      stroke="#003A8C"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </header>

          <main className="page-body">
            <div className="page-header">
              <div>
                <p className="page-title text-start text-start h2 fw-bold ">Media Library</p>
                <p className="fe-semibold">
                  Manage all property images and assets
                </p>
              </div>
              <div className="header-actions">
                <button className="btn-primary">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3.75 9h10.5M9 3.75v10.5"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Add New Property
                </button>
              </div>
            </div>

            <div className="stats-card bg-white border-0 shadow sm mb-4 col-12 p-3 rounded-3  ">
              <div className="row mx-auto justify-content-evenly">
                <input
                  type="text"
                  className="col-12 col-lg-8 search-input fw-bold"
                  placeholder="Search by filename or property..."
                />
                
                <input
                  type="text"
                  className="col-12 col-lg-2 search-input fw-bold rounded-4"
                  placeholder="All Property"
                />

                
              </div>
            </div>

            <div className="col-12">
              <div className="row g-3">
                <img src="/images/Hotel-4.jpg" className="col-lg-3" style={{borderRadius:'30px'}}/>
                <img src="/images/Hotel-3.jpg" className="col-lg-3"style={{borderRadius:'30px'}}/>
                <img src="/images/Hotel-2.jpg" className="col-lg-3"style={{borderRadius:'30px'}}/>
                <img src="/images/Hotel-one.jpg" className="col-lg-3"style={{borderRadius:'30px'}}/>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default MediaLibrary;
