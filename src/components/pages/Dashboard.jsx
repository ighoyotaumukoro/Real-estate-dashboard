import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PurchaseTypeChart from "./PurchaseTypeChart";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function NavIcon({ children }) {
  return <span style={{ flexShrink: 0 }}>{children}</span>;
}

function Dashboard() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [viewedProperty, setViewedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProperty, setIsOpenProperty] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState(null);

  const handleOpenAdd = () => {
    setDrawerMode("add");
    setIsOpen(true);
    setSelectedAgent(null);
  };

  const handleOpenClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setDrawerMode("null");
      setSelectedAgent(null);
    }, 300);
  };

  const handleSubmit = (newAgent) => {
    const agentToAdd = {
      id: Date.now(),
      ...newAgent,
      image: newAgent.image || "/placeholder.jpg",
    };
  };

  // Add Property

  const AddPropertyForm = ({ onSubmit }) => {
    const [formData, , setFormData] = useState({
      name: "",
      type: "",
      decription: "",
      agent: "",
      price: "",
      featured: "",
      image: "",
    });

    
    const [publishAddModal, setPublishAddModal] = useState(false);
    const handleCancelAddClick = () => {
      setIsOpenProperty(false);
    };

    const handlePublishAddClick = () => {
      setPublishAddModal(true);
    };
    

    const confirmPublish = () => {
      setPublishModal(false);
      onSubmit?.("publish");
      console.log("Listing published");
    };

    const handleChangeProperty = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        [name]: type === "checkbox" ? checked : value,
      }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

    return (
      <form
        className="m-3"
        style={{ fontSize: "12px" }}
        onSubmit={handleSubmitProperty}
      >
        <div className="mb-3 text-start">
          <div className="d-flex justify-content-between">
            <label
              className="fw-bold form-label mb-0"
              style={{ fontSize: "20px" }}
            >
              Add Property
            </label>
            <button
              className="btn-close"
              style={{ width: "5px" }}
              onClick={handleCloseProperty}
              aria-label="Close"
            />
          </div>
          <p
            className="text-muted pb-2 border-bottom"
            style={{ fontSize: "12px" }}
          >
            Draft Saved at 3:42PM
          </p>
          <p className="h5 mb-2" style={{ color: "#003A8C" }}>
            Basic Information
          </p>
          <p className="text-muted mb-0">PROPERTY TITLE</p>
          <input
            type="text"
            name="name"
            style={{ fontSize: "12px" }}
            className="form-control bg-light"
            placeholder="e.g Luxury 5 bedroom duplex"
            onChange={handleChangeProperty}
            required
          />
        </div>
        <div className="row mb-0 text-start">
          <label className="col-6 form-label text-secondary">
            PROPERTY TYPE
            <select
              name="type"
              className="bg-light form-select text-secondary"
              style={{ fontSize: "12px" }}
              onChange={handleChangeProperty}
              required
            >
              <option value="">Select Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Duplex">Duplex</option>
            </select>
          </label>
          <label className="col-6 form-label text-secondary">
            FEATURED
            <p
              className="bg-light p-2 rounded-3 text-secondary border"
              style={{ border: "1px solid #F3F4F6" }}
            >
              <input type="checkbox" className="me-1" />
              Show on homepage
            </p>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label text-start d-flex text-secondary">
            DESCRIPTION
          </label>
          <p>
            <input
              placeholder="Describe the property features, neighbourhood, and highlights..."
              type="text"
              className="bg-light w-100 pb-5 ps-2 pt-2 rounded-3 text-secondary border"
              style={{ border: "1px solid #F3F4F6", fontSize: "12px" }}
            />
          </p>
        </div>
        <div className="row mb-0 text-start">
          <label className="col-6 form-label text-secondary">
            ASSIGN AGENT
            <select
              name="type"
              className="bg-light form-select text-secondary"
              style={{ fontSize: "12px" }}
              onChange={handleChangeProperty}
              required
            >
              <option value="">Assign property to agent</option>
              <option value="001">Agent 001 - Chariss Forbes</option>
              <option value="002">Agent 002 - Boluwatife Cole</option>
              <option value="003">Agent 003 - Ephraim Johnson</option>
              <option value="004">Agent 004 - Adeleke David</option>
            </select>
          </label>
          <label className="col-6 form-label text-secondary">
            AMENITIES
            <select
              name="type"
              className="bg-light form-select text-secondary"
              style={{ fontSize: "12px" }}
              onChange={handleChangeProperty}
              required
            >
              <option value="">Select available amenities</option>
              <option value="pool">Swimming Pool</option>
              <option value="gym">Gym</option>
              <option value="security">24/7 Security</option>
              <option value="gen">Backup Generator</option>
              <option value="cctv">CCTV</option>
              <option value="kitchen">Fitted Kitchen</option>
              <option value="ac">Air Conditioning</option>
              <option value="borehole">Borehole</option>
              <option value="parking">Parking</option>
              <option value="garden">Garden</option>
            </select>
          </label>
        </div>
        <div className="justify-content-start mt-2 text-secondary">
          <p className="h5 mb-2 text-start" style={{ color: "#003A8C" }}>
            Price & Mode
          </p>
          <div className="row text-start">
            <div className="col-6">
              <p className="mb-1">Price (₦)</p>
              <input
                className="w-100 p-2 bg-light rounded-3 border"
                type="number"
                style={{ border: "1px solid #F3F4F6" }}
              />
            </div>
            <div className="col-6">
              <p className="mb-1">LISTING TYPE</p>
              <p className="row">
                <p
                  className="btn col-2 bg-light border rounded-3 ms-3 me-2"
                  style={{
                    fontSize: "12px",
                    width: "60px",
                    border: "1px solid #F3F4F6",
                  }}
                >
                  Buy
                </p>
                <p
                  className="btn col-2 bg-light border rounded-3 me-2"
                  style={{
                    fontSize: "12px",
                    width: "60px",
                    border: "1px solid #F3F4F6",
                  }}
                >
                  Rent
                </p>
                <p
                  className="btn col-2 bg-light border rounded-3"
                  style={{
                    fontSize: "12px",
                    width: "68px",
                    border: "1px solid #F3F4F6",
                  }}
                >
                  Lease
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="justify-content-start mt-2 text-secondary">
          <p className="h5 mb-2 text-start" style={{ color: "#003A8C" }}>
            Media Upload
          </p>
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-lg-6 align-content-center">
                <div className="bg-light rounded-3">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.5"
                      y="2.5"
                      width="63"
                      height="63"
                      rx="31.5"
                      fill="white"
                    />
                    <rect
                      x="3.5"
                      y="2.5"
                      width="63"
                      height="63"
                      rx="31.5"
                      stroke="#F3F4F6"
                    />
                    <path
                      d="M35 22V38"
                      stroke="#D1D5DC"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M41.6668 28.6667L35.0002 22L28.3335 28.6667"
                      stroke="#D1D5DC"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M47 38V43.3333C47 44.0406 46.719 44.7189 46.219 45.219C45.7189 45.719 45.0406 46 44.3333 46H25.6667C24.9594 46 24.2811 45.719 23.781 45.219C23.281 44.7189 23 44.0406 23 43.3333V38"
                      stroke="#D1D5DC"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="fw-bolder mb-1 text-dark">
                    Click or drag images to upload
                  </p>
                  <p className="text-secondary" style={{ fontSize: "10px" }}>
                    Up to 20 high-quality JPG, PNG or WEBP (max 5MB each)
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 align-content-center">
                <div className="bg-light rounded-3">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.5"
                      y="2.5"
                      width="63"
                      height="63"
                      rx="31.5"
                      fill="white"
                    />
                    <rect
                      x="3.5"
                      y="2.5"
                      width="63"
                      height="63"
                      rx="31.5"
                      stroke="#F3F4F6"
                    />
                    <path
                      d="M35 22V38"
                      stroke="#D1D5DC"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M41.6668 28.6667L35.0002 22L28.3335 28.6667"
                      stroke="#D1D5DC"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M47 38V43.3333C47 44.0406 46.719 44.7189 46.219 45.219C45.7189 45.719 45.0406 46 44.3333 46H25.6667C24.9594 46 24.2811 45.719 23.781 45.219C23.281 44.7189 23 44.0406 23 43.3333V38"
                      stroke="#D1D5DC"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="fw-bolder mb-1 text-dark">
                    Click or drag images to upload
                  </p>
                  <p className="text-secondary" style={{ fontSize: "10px" }}>
                    Up to 20 high-quality JPG, PNG or WEBP (max 5MB each)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end mt-3">
          <button
           onClick={handleCancelAddClick}
            className="col-3 p-1 me-2 btn-sm border rounded-3"
            style={{ border: "1px solid #F3F4F6" }}
          >
            Cancel Listing
          </button>
          <button
            onClick={handlePublishAddClick}
            className="col-3 p-1 btn-sm rounded-3 text-white"
            style={{ backgroundColor: "#003A8C" }}
          >
            Publish Listing
          </button>
        </div>
        
        <Modal
          show={publishAddModal}
          onHide={() => setPublishAddModal(false)}
          centered
          backdrop="static"
          contentClassName="blur-modal"
          className="text-center"
        >
          <svg
            className="align-self-center mt-3"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z"
              fill="#DCFCE7"
            />
            <path
              d="M40.0002 56.6663C49.2049 56.6663 56.6668 49.2044 56.6668 39.9997C56.6668 30.7949 49.2049 23.333 40.0002 23.333C30.7954 23.333 23.3335 30.7949 23.3335 39.9997C23.3335 49.2044 30.7954 56.6663 40.0002 56.6663Z"
              stroke="#00A63E"
              stroke-width="3.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35 40.0003L38.3333 43.3337L45 36.667"
              stroke="#00A63E"
              stroke-width="3.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Modal.Header className="align-self-center border-0">
            <Modal.Title>Property Listed Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your property details has been listed and updated to the platform.
            Viewers will be able to see property and its details.
          </Modal.Body>
          <Modal.Footer className="border-0">
            
              <Button
              onClick={handleCancelAddClick}
                type="button"
                className=""
                variant=""
                style={{
                  backgroundColor: " #003A8C",
                  color: "white",
                  width: "57vh",
                }}
              >
                Return to dashboard
              </Button>
            
          </Modal.Footer>
        </Modal>
        
      </form>
    );
  };

  const handleOpenProperty = () => {
    setDrawerMode("addproperty");
    setIsOpenProperty(true);
    setIsOpen(false);
    setSelectedProperty(null);
    setViewedProperty(null);
  };

  const handleCloseProperty = () => {
    setIsOpen(false);
    setIsOpenProperty(false);
    setTimeout(() => {
      setDrawerMode(null);
      setSelectedProperty(null);
      setViewedProperty(null);
    }, 300);
  };

  const handleSubmitProperty = (newProperty) => {
    const propertyToAdd = {
      id: Date.now(),
      ...newProperty,
      image: newProperty.image || "/placeholder.jpg",
    };
  };

  // Add agent
  const AddAgentForm = ({ onSubmit }) => {
    const [addAgentModal, setAddAgentModal] = useState(false);
    const [formData, , setFormData] = useState({
      name: "",
      type: "",
      decription: "",
      agent: "",
      price: "",
      featured: "",
      image: "",
    });

    const handleAddAgent = () => {
      setAddAgentModal(true);
      
    };

    const confirmAddAgent = () => {
      AddAgentModal(false);
      onSubmit?.("addagent");
      console.log("Agent Added")
    
    };

    const handleCancelAgent= () => {
      setIsOpen(false);
    };

    

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        [name]: type === "checkbox" ? checked : value,
      }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

    return (
      <form
        className="m-3"
        style={{ fontSize: "12px" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3 text-start">
          <div className="d-flex justify-content-between">
            <label
              className="fw-bold form-label mb-0"
              style={{ fontSize: "20px" }}
            >
              Add Agent
            </label>
            <button
              className="btn-close "
              style={{ width: "5px" }}
              onClick={handleOpenClose}
              aria-label="Close"
            />
          </div>

          <p className="text-muted mb-1 mt-4">FULL NAME</p>
          <input
            type="text"
            name="name"
            style={{ fontSize: "12px" }}
            className="form-control bg-light"
            placeholder="e.g Sarah Johnson"
            onChange={handleChange}
            required
          />

          <p className=" text-muted mb-1 mt-4">
            JOB TITLE
            <input
              type="text"
              name="name"
              style={{ fontSize: "12px" }}
              className="form-control bg-light"
              placeholder="e.g Senior consultant"
              onChange={handleChange}
              required
            />
          </p>

          <div className="row mb-0 text-start">
            <p className="col-6  text-muted mb-1 mt-4">
              EMAIL
              <input
                type="email"
                name="name"
                style={{ fontSize: "12px" }}
                className="form-control bg-light"
                placeholder="sarah@boc.com"
                onChange={handleChange}
                required
              />
            </p>
            <p className="col-6  text-muted mb-1 mt-4">
              PHONE
              <input
                type="text"
                name="name"
                style={{ fontSize: "12px" }}
                className="form-control bg-light"
                placeholder="+234..."
                onChange={handleChange}
                required
              />
            </p>
          </div>

          <div className="mb-3 ">
            <label className=" form-label text-start d-flex text-secondary ">
              BIO
            </label>
            <p>
              <input
                placeholder="Short professional bio..."
                type="text"
                className="bg-light w-100 pb-5 ps-2 pt-2 rounded-3 text-secondary border"
                style={{ border: "1px solid #F3F4F6", fontSize: "12px" }}
              />
            </p>
          </div>
          <label className=" form-label text-start d-flex text-secondary ">
            SPECIALIZATION
          </label>
          <div
            className="row justify-content-evenly"
            style={{ marginBottom: "70%" }}
          >
            <p
              className="btn col-3 bg-light border  rounded-3 ms-3 me-2"
              style={{
                fontSize: "12px",

                border: "1px solid #F3F4F6",
              }}
            >
              Sales
            </p>
            <p
              className="btn col-3 bg-light border rounded-3 me-2"
              style={{
                fontSize: "12px",

                border: "1px solid #F3F4F6",
              }}
            >
              Rentals
            </p>
            <p
              className="btn col-3 bg-light border rounded-3 "
              style={{
                fontSize: "12px",

                border: "1px solid #F3F4F6",
              }}
            >
              Commercial
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          
          <button
          onClick={handleCancelAgent}
            className="col-5 p-1 me-2 btn-sm  border rounded-3"
            style={{ border: "1px solid  #F3F4F6" }}
          >
            Cancel
          </button>
          <button
            onClick={handleAddAgent}
            className="col-5 p-1 btn-sm rounded-3 text-white"
            style={{ backgroundColor: " #003A8C" }}
          >
            Add Agent
          </button>
        
        </div>
        <Modal
          show={addAgentModal}
          onHide={() => setAddAgentModal(false)}
          centered
          backdrop="static"
          contentClassName="blur-modal"
          className="text-center"
        >
          <svg
            className="align-self-center mt-3"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z"
              fill="#DCFCE7"
            />
            <path
              d="M40.0002 56.6663C49.2049 56.6663 56.6668 49.2044 56.6668 39.9997C56.6668 30.7949 49.2049 23.333 40.0002 23.333C30.7954 23.333 23.3335 30.7949 23.3335 39.9997C23.3335 49.2044 30.7954 56.6663 40.0002 56.6663Z"
              stroke="#00A63E"
              stroke-width="3.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35 40.0003L38.3333 43.3337L45 36.667"
              stroke="#00A63E"
              stroke-width="3.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Modal.Header className="align-self-center border-0">
            <Modal.Title>Agent Added Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            The Agent has been listed and viewers will be able to see property
            assigned to the agent and their contact information.
          </Modal.Body>
          <Modal.Footer className="border-0">
            
              <Button
               onClick={handleCancelAgent}
                type="button"
                className=""
                variant=""
                style={{
                  backgroundColor: " #003A8C",
                  color: "white",
                  width: "57vh",
                }}
              >
                Return to dashboard
              </Button>
        
          </Modal.Footer>
        </Modal>
        
      </form>
    );
  };

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

  const listings = [
    {
      name: "Luxury 4-bedroom Duplex",
      location: "Lekki Phase-1, Lagos Island",
      price: "₦125,000,000",
      img: "/images/Hotel-one.jpg",
    },
    {
      name: "Luxury 5-bedroom Duplex",
      location: "Lekki Phase-1, Lagos Island",
      price: "₦250,000,000",
      img: "/images/Hotel-2.jpg",
    },
    {
      name: "Luxury 3-bedroom Duplex",
      location: "Lekki Phase-1, Lagos Island",
      price: "₦120,000,000",
      img: "/images/Hotel-3.jpg",
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
          <img src="/images/BOC-logo.png" alt="BOC Logo" className="sidebar-logo" />

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
              href="http://localhost:5174"
              className="nav-item"
              target="_blank"
              rel="noopener noreferrer"
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
                <p className="page-title pe-5 text-start h2 fw-bold ">
                  Dashboard Overview
                </p>
                <p className="fw-semibold">
                  Welcome back, here's what's happening today
                </p>
              </div>
              <div className="header-actions">
                <button onClick={handleOpenAdd} className="btn-outline">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3.75 9h10.5M9 3.75v10.5"
                      stroke="#111827"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Add Agent
                </button>
                <button onClick={handleOpenProperty} className="btn-primary">
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

            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-card-top">
                  <span className="stat-label">
                    <span className="stat-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M8.33 10h3.34M8.33 6.67h3.34M11.67 17.5V15c0-.44-.18-.87-.49-1.18A1.67 1.67 0 0010 13.33c-.44 0-.86.18-1.18.49-.31.31-.49.74-.49 1.18v2.5"
                          stroke="#003A8C"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 17.5V4.17C5 3.25 5.75 2.5 6.67 2.5h6.66C14.25 2.5 15 3.25 15 4.17V17.5"
                          stroke="#003A8C"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 17.5H3.33A1.67 1.67 0 011.67 15.83V10c0-.92.74-1.67 1.66-1.67H5M15 17.5h1.67A1.67 1.67 0 0018.33 15.83V7.5a1.67 1.67 0 00-1.66-1.67H15"
                          stroke="#003A8C"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Total Listing
                  </span>
                  <span className="badge-green">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M9 3H6v3M9 3L5 7l-2-2L1 7"
                        stroke="#00a63e"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    12%
                  </span>
                </div>
                <div className="stat-value text-start">143</div>
              </div>

              <div className="stat-card">
                <div className="stat-card-top">
                  <span className="stat-label">
                    <span className="stat-icon">
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
                          rx="12"
                          fill="#2A478D"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M11.7183 20.2898C11.6489 20.1027 11.6489 19.8969 11.7183 19.7098C12.3948 18.0697 13.5429 16.6673 15.0173 15.6806C16.4917 14.6938 18.2259 14.167 20 14.167C21.7741 14.167 23.5083 14.6938 24.9827 15.6806C26.4571 16.6673 27.6053 18.0697 28.2817 19.7098C28.3511 19.8969 28.3511 20.1027 28.2817 20.2898C27.6053 21.9299 26.4571 23.3323 24.9827 24.3191C23.5083 25.3058 21.7741 25.8326 20 25.8326C18.2259 25.8326 16.4917 25.3058 15.0173 24.3191C13.5429 23.3323 12.3948 21.9299 11.7183 20.2898Z"
                          stroke="#003A8C"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20C22.5 18.6193 21.3807 17.5 20 17.5C18.6193 17.5 17.5 18.6193 17.5 20C17.5 21.3807 18.6193 22.5 20 22.5Z"
                          stroke="#003A8C"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    Active Listings
                  </span>
                  <span className="badge-green">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M9 3H6v3M9 3L5 7l-2-2L1 7"
                        stroke="#00a63e"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    5%
                  </span>
                </div>
                <div className="stat-value text-start">89</div>
              </div>

              <div className="stat-card">
                <div className="stat-card-top">
                  <span className="stat-label">
                    <span className="stat-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M13.33 17.5v-1.67a3.33 3.33 0 00-3.33-3.33H5A3.33 3.33 0 001.67 15.83V17.5"
                          stroke="#003A8C"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 9.17a3.33 3.33 0 100-6.67 3.33 3.33 0 000 6.67zM13.33 2.61a3.33 3.33 0 010 6.45M18.33 17.5v-1.67a3.33 3.33 0 00-2.5-3.22"
                          stroke="#003A8C"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Total Agents
                  </span>
                </div>
                <div className="stat-value text-start">12</div>
              </div>
            </div>
            <div className="col-12 row g-1">
              <div className="section-card col-12 col-lg-8">
                <div className="section-header d-flex start-0 fw-semibold">
                  Recently Listings
                </div>
                {listings.map((item, i) => (
                  <div className="listing-row" key={i}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="listing-img"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="listing-img-placeholder"
                      style={{ display: "none" }}
                    >
                      IMG
                    </div>
                    <div className="listing-info">
                      <div className="listing-name text-start">{item.name}</div>
                      <div className="text-start listing-loc">
                        {item.location}
                      </div>
                    </div>
                    <div className="listing-right">
                      <span className="listing-price">{item.price}</span>
                      <button className="buy-btn">Buy</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-4">
                <PurchaseTypeChart />
              </div>
            </div>
          </main>
        </div>
      </div>
      <div
        className="drawer position-fixed top-0 end-0 h-100 bg-white shadow-lg overflow-auto"
        style={{
          zIndex: 1050,
          transform:
            isOpen || isOpenProperty ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          width: "400px",
        }}
      >
        {drawerMode === "add" && <AddAgentForm onSubmit={handleSubmit} />}
        {drawerMode === "view" && selectedAgent && (
          <AgentDetails property={selectedAgent} />
        )}

        {drawerMode === "addproperty" && (
          <AddPropertyForm onSubmit={handleSubmitProperty} />
        )}
      </div>
    </>
  );
}

export default Dashboard;
