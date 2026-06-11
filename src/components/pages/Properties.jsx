import React, { useState } from "react";
import logo from "../../assets/BOC-logo.png";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function NavIcon({ children }) {
  return <span style={{ flexShrink: 0 }}>{children}</span>;
}

function Properties() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [viewedProperty, setViewedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const handleOpen = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProperty(null);
    setViewedProperty(null);
  };

  const properties = [
    {
      id: 1,
      assigned: "Sarah Johnson",
      image1: "src/assets/Hotel-3.jpg",
      image2: "src/assets/Hotel-one.jpg",
      image3: "src/assets/Hotel-3.jpg",
      name: "Luxury 3 bedroom",
      name1: "Luxury 3 bedroom",
      name2: "Luxury 4 bedroom",
      name3: "Luxury 3 bedroom",
      type: "Duplex",
      location: "Lekki Phase 1",
      location1: "Lekki Phase 1",
      city: "Lagos",
      mode: "Buy",
      price: "₦120,000,000",

      price1: "₦125,000,000",
      agent: "Agent Sarah Johnson",
      agenttitle: "Senior Property Consultant",
      agentimg: "src/assets/myphoto.JPG",
      bedrooms: "3",
      status: "ACTIVE",
      image: "src/assets/Hotel-3.jpg",
      amenities: ["Swimming Pool", "Gym", "24/7 Security"],
    },
    {
      id: 2,
      assigned: "Micheal Chen",
      image1: "src/assets/Hotel-2.jpg",
      image2: "src/assets/Hotel-4.jpg",
      image3: "src/assets/Hotel-2.jpg",
      name: "Luxury 5 bedroom",
      name1: "Luxury 5 bedroom",
      name2: "Luxury 7 bedroom",
      name3: "Luxury 5 bedroom",
      type: "Duplex",
      agenttitle: "Leasing Specialist",
      location: "Ikoyi",
      location1: "Ikoyi",
      city: "Lagos",
      mode: "Lease",
      agentimg: "src/assets/IMG_E1863.JPG",
      bedrooms: "5",
      price: "₦250,000,000",
      price1: "₦400,000,000",

      agent: "Agent Michael Chen",
      status: "ACTIVE",
      image: "src/assets/Hotel-2.jpg",
      amenities: ["Swimming Pool", "Gym", "24/7 Security", "Garden"],
    },
  ];

  const [drawerMode, setDrawerMode] = useState(null);

  const handleOpenAdd = () => {
    setDrawerMode("add");
    setIsOpen(true);
    setSelectedProperty(null);
    setViewedProperty(null);
  };

  const handleOpenClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setDrawerMode(null);
      setSelectedProperty(null);
      setViewedProperty(null);
    }, 300);
  };

  const handleSubmit = (newProperty) => {
    const propertyToAdd = {
      id: Date.now(),
      ...newProperty,
      image: newProperty.image || "/placeholder.jpg",
    };
  };

  const handleOpenEdit = (property) => {
    setDrawerMode("edit");
    setIsOpen(true);
    setSelectedProperty(null);
    setViewedProperty(null);
  };

  const handleDeleteClick = (property) => {
    setSelectedProperty(property);
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    setDeleteModal(false);
    setSuccessModal(true);
    onSubmit?.("delete");
    console.log("property deleted", selectedProperty.id);
  };

  const handleOpenView = (property) => {
    setDrawerMode("view");
    setIsOpen(true);
    setSelectedProperty(null);
    setViewedProperty(property);
  };

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
      setIsOpen(false);
    };

    const handlePublishAddClick = () => {
      setPublishAddModal(true);
      
    };
    
    const confirmPublish = () => {
      setPublishModal(false);
      onSubmit?.("publish");
      console.log("Listing published");
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
              Add Property
            </label>
            <button
              className="btn-close"
              style={{ width: "5px" }}
              onClick={handleClose}
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
            onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
            Your property details has been listed and updated to the platform. Viewers will be able to see property and its details.
          </Modal.Body>
          <Modal.Footer className="border-0">
        
              <Button
              onClick={handleCancelAddClick}
                type="button"
                className=""
                variant=""
                style={{ backgroundColor: " #003A8C", color: "white", width:"57vh"}}
              >
                Return to dashboard
              </Button>
            
          </Modal.Footer>
        </Modal>
      </form>
    );
  };

  

  const EditPropertyForm = ({ onSubmit }) => {
    
    const [publishModal, setPublishModal] = useState(false);
    const handleCancelClick = () => {
      setIsOpen(false);
    };

    const handlePublishClick = () => {
      setPublishModal(true);
      
    };
    
    const confirmPublish = () => {
      setPublishModal(false);
      onSubmit?.("publish");
      console.log("Listing published");
    };
    const [formData, , setFormData] = useState({});
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
              Edit Property
            </label>
            <button
              className="btn-close"
              style={{ width: "5px" }}
              onClick={handleClose}
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
            onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
                className="w-100 p-2 bg-light text-dark rounded-3 border"
                type="text"
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
          <div className="col-12 align-content-center">
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
        <div className="row justify-content-end mt-3">
          <button
            onClick={handleCancelClick}
            className="col-3 p-1 me-2 btn-sm border rounded-3"
            style={{ border: "1px solid #F3F4F6" }}
          >
            Cancel Listing
          </button>
          <button
            onClick={handlePublishClick}
            className="col-3 p-1 btn-sm rounded-3 text-white"
            style={{ backgroundColor: "#003A8C" }}
          >
            Publish Listing
          </button>
        </div>
        
        <Modal
          show={publishModal}
          onHide={() => setPublishModal(false)}
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
            <Modal.Title>Property Updated Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your property has been updated to the platform. Viewers
            will be able to see property and its details.
          </Modal.Body>
          <Modal.Footer className="border-0">
            
              <Button
              onClick={handleCancelClick}
                type="button"
                className=""
                variant=""
                style={{ backgroundColor: " #003A8C", color: "white", width:"57vh"}}
              >
                Return to dashboard
              </Button>
        
          </Modal.Footer>
        </Modal>
      </form>
    );
  };

  const EditIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
      <path
        d="M22.1161 12.5413C22.4686 12.1889 22.6666 11.7109 22.6667 11.2125C22.6668 10.7141 22.4688 10.2361 22.1165 9.8836C21.7641 9.53112 21.2861 9.33307 20.7877 9.33301C20.2893 9.33295 19.8113 9.53088 19.4588 9.88326L10.5615 18.7826C10.4067 18.9369 10.2922 19.127 10.2281 19.3359L9.34745 22.2373C9.33022 22.2949 9.32892 22.3562 9.34369 22.4145C9.35845 22.4728 9.38873 22.5261 9.43132 22.5686C9.4739 22.6111 9.5272 22.6413 9.58556 22.656C9.64392 22.6707 9.70516 22.6693 9.76279 22.6519L12.6648 21.7719C12.8736 21.7084 13.0636 21.5947 13.2181 21.4406L22.1161 12.5413Z"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 11.333L20.6667 13.9997"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const DeleteIcon = () => (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
      <path
        d="M14.6665 15.333V19.333"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3335 15.333V19.333"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6668 12V21.3333C20.6668 21.687 20.5264 22.0261 20.2763 22.2761C20.0263 22.5262 19.6871 22.6667 19.3335 22.6667H12.6668C12.3132 22.6667 11.9741 22.5262 11.724 22.2761C11.474 22.0261 11.3335 21.687 11.3335 21.3333V12"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12H22"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3335 11.9997V10.6663C13.3335 10.3127 13.474 9.97358 13.724 9.72353C13.9741 9.47348 14.3132 9.33301 14.6668 9.33301H17.3335C17.6871 9.33301 18.0263 9.47348 18.2763 9.72353C18.5264 9.97358 18.6668 10.3127 18.6668 10.6663V11.9997"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ViewIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.37468 16.2322C9.31912 16.0826 9.31912 15.9179 9.37468 15.7682C9.91581 14.4561 10.8344 13.3343 12.0139 12.5448C13.1934 11.7554 14.5807 11.334 16 11.334C17.4193 11.334 18.8067 11.7554 19.9862 12.5448C21.1657 13.3343 22.0842 14.4561 22.6253 15.7682C22.6809 15.9179 22.6809 16.0826 22.6253 16.2322C22.0842 17.5443 21.1657 18.6662 19.9862 19.4556C18.8067 20.2451 17.4193 20.6665 16 20.6665C14.5807 20.6665 13.1934 20.2451 12.0139 19.4556C10.8344 18.6662 9.91581 17.5443 9.37468 16.2322Z"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
        stroke="#99A1AF"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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

        <div
          className="main-content"
          style={{
            filter: isOpen ? "blur(3px)" : "none",
            transition: "filter 0.3s ease",
            pointerEvents: isOpen ? "none" : "auto",
          }}
        >
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
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect
                      width="40"
                      height="40"
                      rx="20"
                      fill="#2A478D"
                      fillOpacity="0.1"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="19.5"
                      stroke="#2A478D"
                      strokeOpacity="0.1"
                    />
                    <path
                      d="M25.8334 27.5V25.8333C25.8334 24.9493 25.4822 24.1014 24.8571 23.4763C24.232 22.8512 23.3841 22.5 22.5001 22.5H17.5001C16.616 22.5 15.7682 22.8512 15.1431 23.4763C14.5179 24.1014 14.1667 24.9493 14.1667 25.8333V27.5"
                      stroke="#003A8C"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.0001 19.1667C21.841 19.1667 23.3334 17.6743 23.3334 15.8333C23.3334 13.9924 21.841 12.5 20.0001 12.5C18.1591 12.5 16.6667 13.9924 16.6667 15.8333C16.6667 17.6743 18.1591 19.1667 20.0001 19.1667Z"
                      stroke="#003A8C"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </header>

          <main className="page-body">
            <div className="page-header">
              <div>
                <p className="page-title text-start h2 fw-bold">Properties</p>
                <p className="fw-semibold">
                  Manage all your property listings from one place
                </p>
              </div>
              <div className="header-actions">
                <button className="btn-outline">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 11.25V2.25"
                      stroke="#1A1D24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
                      stroke="#1A1D24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.25 7.5L9 11.25L12.75 7.5"
                      stroke="#1A1D24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Export CSV
                </button>
                <button onClick={handleOpenAdd} className="btn-primary">
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

            <div className="stats-card bg-white border-0 shadow-sm mb-4 col-12 p-3 rounded-4">
              <div className="row mx-auto">
                <input
                  type="text"
                  className="col-12 col-lg-6 search-input"
                  placeholder="Search by title, location or agent..."
                />
                <input
                  type="text"
                  className="col-12 col-lg-1 search-input mx-auto"
                  placeholder="All Status"
                />
                <input
                  type="text"
                  className="col-12 col-lg-2 search-input rounded-2"
                  placeholder="All Type"
                />
                <svg
                  className="col-2 col-lg-1"
                  width="36"
                  height="39"
                  viewBox="0 0 36 39"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="35"
                    height="38"
                    rx="11.5"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="35"
                    height="38"
                    rx="11.5"
                    stroke="#E5E7EB"
                  />
                  <path
                    d="M16.5002 25.5C16.5002 25.6394 16.5389 25.776 16.6122 25.8946C16.6854 26.0131 16.7903 26.109 16.915 26.1713L18.415 26.9213C18.5293 26.9784 18.6564 27.0054 18.7842 26.9996C18.9119 26.9938 19.036 26.9555 19.1447 26.8882C19.2535 26.8209 19.3432 26.727 19.4054 26.6153C19.4676 26.5036 19.5003 26.3779 19.5002 26.25V21C19.5004 20.6283 19.6386 20.2699 19.888 19.9943L25.3052 14.0025C25.4023 13.8949 25.4662 13.7615 25.489 13.6184C25.5119 13.4753 25.4929 13.3286 25.4341 13.1962C25.3754 13.0637 25.2796 12.951 25.1582 12.8718C25.0368 12.7927 24.8951 12.7503 24.7502 12.75H11.2502C11.1052 12.7501 10.9633 12.7922 10.8417 12.8712C10.7201 12.9503 10.624 13.0629 10.5651 13.1955C10.5062 13.328 10.487 13.4748 10.5098 13.618C10.5327 13.7613 10.5965 13.8948 10.6937 14.0025L16.1125 19.9943C16.3619 20.2699 16.5 20.6283 16.5002 21V25.5Z"
                    stroke="#99A1AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="stat-card rounded-4 shadow-sm">
              <div
                className="row fw-semibold text-muted px-3 py-2"
                style={{ fontSize: "18px", borderBottom: "1px solid #f3f4f6" }}
              >
                <div className="col-2 col-lg-3 col-md-2 text-start">
                  PROPERTY
                </div>
                <div className="col-2 col-lg-3 col-md-2">LOCATION</div>
                <div className="col-1 col-lg-1 col-md-1">TYPE</div>
                <div className="col-1 col-lg-1 col-md-1">MODE</div>
                <div className="col-2 col-lg-1 col-md-2">PRICE</div>
                <div className="col-2 col-lg-1 col-md-2">STATUS</div>
                <div className="col-2 col-lg-2 col-md-2">ACTION</div>
              </div>

              {properties.map((property) => (
                <div
                  key={property.id}
                  className="row align-items-center px-3 py-3"
                  style={{
                    borderBottom: "1px solid #f3f4f6",
                    cursor: "pointer",
                  }}
                  onClick={() => handleOpen(property)}
                >
                  <div className="col-2 col-lg-3 col-md-2 d-flex align-items-center gap-3">
                    <img
                      src={property.image}
                      className="rounded-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ fontSize: "14px" }}>
                      <p className="mb-0 fw-bold text-dark">{property.name}</p>
                      <p className="mb-0 text-secondary">{property.agent}</p>
                    </div>
                  </div>
                  <div
                    className="col-2 col-lg-3 col-md-2"
                    style={{ fontSize: "14px" }}
                  >
                    <p className="mb-0 fw-semibold text-dark">
                      {property.location}
                    </p>
                    <p className="mb-0 text-secondary fw-light">
                      {property.city}
                    </p>
                  </div>
                  <div
                    className="col-1 col-lg-1 col-md-1"
                    style={{ fontSize: "14px" }}
                  >
                    {property.type}
                  </div>
                  <div className="col-1 col-lg-1 col-md-1">
                    <span
                      className="px-2 py-1 rounded-2"
                      style={{
                        fontSize: "13px",
                        color: "#2A478D",
                        backgroundColor: "#eef2ff",
                      }}
                    >
                      {property.mode}
                    </span>
                  </div>
                  <div
                    className="col-2 col-lg-1 col-md-2"
                    style={{ fontSize: "14px" }}
                  >
                    {property.price}
                  </div>
                  <div className="col-2 col-lg-1 col-md-2">
                    <span
                      className="px-2 py-1 rounded-4 d-inline-flex align-items-center gap-1"
                      style={{
                        fontSize: "13px",
                        color: "#00A63E",
                        backgroundColor: "#e4ffee",
                      }}
                    >
                      <svg width="8" height="8" viewBox="0 0 6 6" fill="none">
                        <rect width="6" height="6" rx="3" fill="#00A63E" />
                      </svg>
                      {property.status}
                    </span>
                  </div>
                  <div className="col-lg-2 col-md-2 d-flex align-items-center gap-1 justify-content-center">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenEdit(property);
                      }}
                    >
                      <EditIcon />
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenView(property);
                      }}
                    >
                      <ViewIcon />
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteClick(property);
                      }}
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                </div>
              ))}
              <Modal
                show={deleteModal}
                onHide={() => setDeleteModal(false)}
                centered
                backdrop="static"
                contentClassName="blur-modal"
                className="text-center"
              >
                <svg
                  className="align-self-center mt-3"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.125 9.625L33.0405 27.1689C32.7633 31.6512 32.6249 33.8924 31.5014 35.5038C30.9458 36.3004 30.2307 36.9728 29.4012 37.478C27.7237 38.5 25.4782 38.5 20.9872 38.5C16.4905 38.5 14.242 38.5 12.5633 37.4761C11.7334 36.97 11.018 36.2964 10.4627 35.4984C9.33954 33.8845 9.20404 31.6402 8.93307 27.1516L7.875 9.625"
                    stroke="#EF4343"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5.25 9.625H36.75M28.0975 9.625L26.9029 7.16053C26.1093 5.52346 25.7124 4.70491 25.028 4.19442C24.8762 4.08118 24.7154 3.98044 24.5473 3.89322C23.7893 3.5 22.8797 3.5 21.0604 3.5C19.1954 3.5 18.263 3.5 17.4924 3.90971C17.3217 4.00052 17.1587 4.10533 17.0053 4.22305C16.3129 4.75423 15.9261 5.60271 15.1526 7.29971L14.0926 9.625"
                    stroke="#EF4343"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16.625 28.875V18.375"
                    stroke="#EF4343"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M25.375 28.875V18.375"
                    stroke="#EF4343"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>

                <Modal.Header className="align-self-center border-0">
                  <Modal.Title>Delete Property</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  The property will be deleted and viewers will no longer be
                  able to see this property and the details.
                </Modal.Body>
                <Modal.Footer className="justify-content-between border-0">
                  <Button
                    type="button"
                    className=""
                    variant="outline-secondary"
                    onClick={() => setDeleteModal(false)}
                    style={{ width: "200px" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    className="text-white"
                    variant=""
                    onClick={confirmDelete}
                    style={{ backgroundColor: "#EF4343", width: "200px" }}
                  >
                    Yes, Delete
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal
                show={successModal}
                onHide={() => setSuccessModal(false)}
                centered
                backdrop="static"
                contentClassName="blur-modal"
                className="text-center"
              >
                <svg
                className="mt-3 align-self-center"
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
                    d="M39.9997 56.6663C49.2044 56.6663 56.6663 49.2044 56.6663 39.9997C56.6663 30.7949 49.2044 23.333 39.9997 23.333C30.7949 23.333 23.333 30.7949 23.333 39.9997C23.333 49.2044 30.7949 56.6663 39.9997 56.6663Z"
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
                  <Modal.Title>Property Deleted Successfully</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Your property details has been removed from the platform.
                  Viewers will no longer be able to see property and its
                  details.
                </Modal.Body>
                <Modal.Footer className="justify-content-between border-0">
                  
                  <Button
                  
                    type="button"
                    className="text-white"
                    variant=""
                    onClick={() => setSuccessModal(false)}
                    style={{ backgroundColor: "#003A8C", width:"57vh" }}
                  >
                    Return to Dashboard
                  </Button>
            
                </Modal.Footer>
              </Modal>

              <p
                className="text-secondary fw-light px-3 py-2 text-start"
                style={{ fontSize: "18px" }}
              >
                Showing 1–{properties.length} of 147 properties
              </p>
            </div>
          </main>
        </div>

        {isOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ zIndex: 1040, cursor: "pointer" }}
            onClick={handleOpenClose}
          />
        )}

        <div
          className="drawer position-fixed top-0 end-0 h-100 bg-white shadow-lg overflow-auto"
          style={{
            zIndex: 1050,
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {drawerMode === "add" && <AddPropertyForm onSubmit={handleSubmit} />}

          {drawerMode === "edit" && (
            <EditPropertyForm onSubmit={handleSubmit} />
          )}

          {drawerMode === "view" && viewedProperty && (
            <div className="m-3">
              <div className="border-bottom">
                <div className="d-flex justify-content-between align-items-center mb-0 pb-0">
                  <h6 className="mb-0" style={{ fontSize: "25px" }}>
                    Property Assigned to {viewedProperty.assigned}
                  </h6>
                  <button
                    className="btn-close"
                    style={{ width: "5px" }}
                    onClick={handleClose}
                    aria-label="Close"
                  />
                </div>
                <p className="h5 fw-light text-secondary text-start">
                  Manage Listings for agent
                </p>
              </div>
              <div className="row mt-2">
                <div className="col-12 col-lg-2 col-md-2 d-flex align-items-center gap-3">
                  <img
                    src={viewedProperty.image1}
                    className="rounded-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                </div>
                <p className="col-12 col-lg-2 fw-bolder ms-2 text-nowrap text-start">
                  {viewedProperty.name1}
                  <span
                    className="btn btn-sm me-2 position-absolute end-0"
                    style={{ backgroundColor: "#34CA6C", color: "white" }}
                  >
                    {viewedProperty.status}
                  </span>
                  <span
                    className="btn btn-sm mt-5 position-absolute end-0 text-white"
                    style={{ backgroundColor: "#003A8C", marginRight: "100px" }}
                  >
                    <svg
                      className="me-2"
                      width="14"
                      height="14"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1208_9181)">
                        <path
                          d="M7.05782 2.27112C7.23405 2.09493 7.33308 1.85594 7.33311 1.60674C7.33314 1.35753 7.23417 1.11852 7.05798 0.942286C6.88179 0.76605 6.6428 0.667023 6.3936 0.666992C6.14439 0.666961 5.90538 0.765927 5.72915 0.942119L1.28048 5.39179C1.20309 5.46895 1.14585 5.56396 1.11382 5.66845L0.673482 7.11912C0.664867 7.14795 0.664217 7.17857 0.671599 7.20774C0.678982 7.2369 0.694122 7.26353 0.715414 7.28479C0.736706 7.30604 0.763356 7.32114 0.792535 7.32848C0.821714 7.33581 0.852335 7.33511 0.881149 7.32645L2.33215 6.88645C2.43654 6.8547 2.53154 6.79782 2.60882 6.72079L7.05782 2.27112Z"
                          stroke="white"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 1.66699L6.33333 3.00033"
                          stroke="white"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1208_9181">
                          <rect width="8" height="8" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Edit
                  </span>
                  <span className="btn btn-sm shadow-sm  me-2 mt-5 position-absolute end-0 text-dark">
                    <svg
                      className="me-2"
                      width="18"
                      height="18"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.859052 5.14539C0.824326 5.05185 0.824326 4.94894 0.859052 4.85539C1.19726 4.03533 1.77135 3.33416 2.50854 2.84077C3.24573 2.34738 4.11282 2.08398 4.99988 2.08398C5.88695 2.08398 6.75404 2.34738 7.49123 2.84077C8.22842 3.33416 8.80251 4.03533 9.14072 4.85539C9.17544 4.94894 9.17544 5.05185 9.14072 5.14539C8.80251 5.96545 8.22842 6.66663 7.49123 7.16002C6.75404 7.65341 5.88695 7.9168 4.99988 7.9168C4.11282 7.9168 3.24573 7.65341 2.50854 7.16002C1.77135 6.66663 1.19726 5.96545 0.859052 5.14539Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    View
                  </span>
                  <p className="col-12 col-lg-2 fw-lighter ms-0 text-nowrap">
                    <svg
                      className="me-1"
                      width="16"
                      height="16"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33317 4.16634C8.33317 6.24676 6.02525 8.41342 5.25025 9.08259C5.17806 9.13688 5.09017 9.16624 4.99984 9.16624C4.9095 9.16624 4.82162 9.13688 4.74942 9.08259C3.97442 8.41342 1.6665 6.24676 1.6665 4.16634C1.6665 3.28229 2.01769 2.43444 2.64281 1.80932C3.26794 1.1842 4.11578 0.833008 4.99984 0.833008C5.88389 0.833008 6.73174 1.1842 7.35686 1.80932C7.98198 2.43444 8.33317 3.28229 8.33317 4.16634Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 5.41699C5.69036 5.41699 6.25 4.85735 6.25 4.16699C6.25 3.47664 5.69036 2.91699 5 2.91699C4.30964 2.91699 3.75 3.47664 3.75 4.16699C3.75 4.85735 4.30964 5.41699 5 5.41699Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {viewedProperty.location},{viewedProperty.city}
                    <p className="col-12 col-lg-2 fw-bolder ms-0 text-nowrap">
                      {viewedProperty.price}
                    </p>
                  </p>
                </p>
              </div>
              <div className="row mt-2">
                <div className="col-12 col-lg-2 col-md-2 d-flex align-items-center gap-3">
                  <img
                    src={viewedProperty.image2}
                    className="rounded-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                </div>
                <p className="col-12 col-lg-2 fw-bolder ms-2 text-nowrap text-start">
                  {viewedProperty.name2}
                  <span
                    className="btn btn-sm me-2 position-absolute end-0"
                    style={{ backgroundColor: "#34CA6C", color: "white" }}
                  >
                    {viewedProperty.status}
                  </span>
                  <span
                    className="btn btn-sm mt-5 position-absolute end-0 text-white"
                    style={{ backgroundColor: "#003A8C", marginRight: "100px" }}
                  >
                    <svg
                      className="me-2"
                      width="14"
                      height="14"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1208_9181)">
                        <path
                          d="M7.05782 2.27112C7.23405 2.09493 7.33308 1.85594 7.33311 1.60674C7.33314 1.35753 7.23417 1.11852 7.05798 0.942286C6.88179 0.76605 6.6428 0.667023 6.3936 0.666992C6.14439 0.666961 5.90538 0.765927 5.72915 0.942119L1.28048 5.39179C1.20309 5.46895 1.14585 5.56396 1.11382 5.66845L0.673482 7.11912C0.664867 7.14795 0.664217 7.17857 0.671599 7.20774C0.678982 7.2369 0.694122 7.26353 0.715414 7.28479C0.736706 7.30604 0.763356 7.32114 0.792535 7.32848C0.821714 7.33581 0.852335 7.33511 0.881149 7.32645L2.33215 6.88645C2.43654 6.8547 2.53154 6.79782 2.60882 6.72079L7.05782 2.27112Z"
                          stroke="white"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 1.66699L6.33333 3.00033"
                          stroke="white"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1208_9181">
                          <rect width="8" height="8" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Edit
                  </span>
                  <span className="btn btn-sm shadow-sm  me-2 mt-5 position-absolute end-0 text-dark">
                    <svg
                      className="me-2"
                      width="18"
                      height="18"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.859052 5.14539C0.824326 5.05185 0.824326 4.94894 0.859052 4.85539C1.19726 4.03533 1.77135 3.33416 2.50854 2.84077C3.24573 2.34738 4.11282 2.08398 4.99988 2.08398C5.88695 2.08398 6.75404 2.34738 7.49123 2.84077C8.22842 3.33416 8.80251 4.03533 9.14072 4.85539C9.17544 4.94894 9.17544 5.05185 9.14072 5.14539C8.80251 5.96545 8.22842 6.66663 7.49123 7.16002C6.75404 7.65341 5.88695 7.9168 4.99988 7.9168C4.11282 7.9168 3.24573 7.65341 2.50854 7.16002C1.77135 6.66663 1.19726 5.96545 0.859052 5.14539Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    View
                  </span>
                  <p className="col-12 col-lg-2 fw-lighter ms-0 text-nowrap">
                    <svg
                      className="me-1"
                      width="16"
                      height="16"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33317 4.16634C8.33317 6.24676 6.02525 8.41342 5.25025 9.08259C5.17806 9.13688 5.09017 9.16624 4.99984 9.16624C4.9095 9.16624 4.82162 9.13688 4.74942 9.08259C3.97442 8.41342 1.6665 6.24676 1.6665 4.16634C1.6665 3.28229 2.01769 2.43444 2.64281 1.80932C3.26794 1.1842 4.11578 0.833008 4.99984 0.833008C5.88389 0.833008 6.73174 1.1842 7.35686 1.80932C7.98198 2.43444 8.33317 3.28229 8.33317 4.16634Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 5.41699C5.69036 5.41699 6.25 4.85735 6.25 4.16699C6.25 3.47664 5.69036 2.91699 5 2.91699C4.30964 2.91699 3.75 3.47664 3.75 4.16699C3.75 4.85735 4.30964 5.41699 5 5.41699Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    {viewedProperty.location1},{viewedProperty.city}
                    <p className="col-12 col-lg-2 fw-bolder ms-0 text-nowrap">
                      {viewedProperty.price1}
                    </p>
                  </p>
                </p>
              </div>
              <div className="row mt-2">
                <div className="col-12 col-lg-2 col-md-2 d-flex align-items-center gap-3">
                  <img
                    src={viewedProperty.image1}
                    className="rounded-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                </div>
                <p className="col-12 col-lg-2 fw-bolder ms-2 text-nowrap text-start">
                  {viewedProperty.name1}
                  <span
                    className="btn btn-sm me-2 position-absolute end-0"
                    style={{ backgroundColor: "#34CA6C", color: "white" }}
                  >
                    {viewedProperty.status}
                  </span>
                  <span
                    className="btn btn-sm mt-5 position-absolute end-0 text-white"
                    style={{ backgroundColor: "#003A8C", marginRight: "100px" }}
                  >
                    <svg
                      className="me-2"
                      width="14"
                      height="14"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1208_9181)">
                        <path
                          d="M7.05782 2.27112C7.23405 2.09493 7.33308 1.85594 7.33311 1.60674C7.33314 1.35753 7.23417 1.11852 7.05798 0.942286C6.88179 0.76605 6.6428 0.667023 6.3936 0.666992C6.14439 0.666961 5.90538 0.765927 5.72915 0.942119L1.28048 5.39179C1.20309 5.46895 1.14585 5.56396 1.11382 5.66845L0.673482 7.11912C0.664867 7.14795 0.664217 7.17857 0.671599 7.20774C0.678982 7.2369 0.694122 7.26353 0.715414 7.28479C0.736706 7.30604 0.763356 7.32114 0.792535 7.32848C0.821714 7.33581 0.852335 7.33511 0.881149 7.32645L2.33215 6.88645C2.43654 6.8547 2.53154 6.79782 2.60882 6.72079L7.05782 2.27112Z"
                          stroke="white"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 1.66699L6.33333 3.00033"
                          stroke="white"
                          stroke-width="0.833333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1208_9181">
                          <rect width="8" height="8" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Edit
                  </span>
                  <span className="btn btn-sm shadow-sm  me-2 mt-5 position-absolute end-0 text-dark">
                    <svg
                      className="me-2"
                      width="18"
                      height="18"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.859052 5.14539C0.824326 5.05185 0.824326 4.94894 0.859052 4.85539C1.19726 4.03533 1.77135 3.33416 2.50854 2.84077C3.24573 2.34738 4.11282 2.08398 4.99988 2.08398C5.88695 2.08398 6.75404 2.34738 7.49123 2.84077C8.22842 3.33416 8.80251 4.03533 9.14072 4.85539C9.17544 4.94894 9.17544 5.05185 9.14072 5.14539C8.80251 5.96545 8.22842 6.66663 7.49123 7.16002C6.75404 7.65341 5.88695 7.9168 4.99988 7.9168C4.11282 7.9168 3.24573 7.65341 2.50854 7.16002C1.77135 6.66663 1.19726 5.96545 0.859052 5.14539Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    View
                  </span>
                  <p className="col-12 col-lg-2 fw-lighter ms-0 text-nowrap">
                    <svg
                      className="me-1"
                      width="16"
                      height="16"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33317 4.16634C8.33317 6.24676 6.02525 8.41342 5.25025 9.08259C5.17806 9.13688 5.09017 9.16624 4.99984 9.16624C4.9095 9.16624 4.82162 9.13688 4.74942 9.08259C3.97442 8.41342 1.6665 6.24676 1.6665 4.16634C1.6665 3.28229 2.01769 2.43444 2.64281 1.80932C3.26794 1.1842 4.11578 0.833008 4.99984 0.833008C5.88389 0.833008 6.73174 1.1842 7.35686 1.80932C7.98198 2.43444 8.33317 3.28229 8.33317 4.16634Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 5.41699C5.69036 5.41699 6.25 4.85735 6.25 4.16699C6.25 3.47664 5.69036 2.91699 5 2.91699C4.30964 2.91699 3.75 3.47664 3.75 4.16699C3.75 4.85735 4.30964 5.41699 5 5.41699Z"
                        stroke="#99A1AF"
                        stroke-width="0.833333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {viewedProperty.location},{viewedProperty.city}
                    <p className="col-12 col-lg-2 fw-bolder ms-0 text-nowrap">
                      {viewedProperty.price}
                    </p>
                  </p>
                </p>
              </div>
            </div>
          )}

          {drawerMode === null && selectedProperty && (
            <div className="d-flex flex-column h-100">
              <div className="d-flex justify-content-between align-items-center px-4 pt-4 pb-2 mb-3 border-bottom pb-4 border-1">
                <h6 className="mb-0 fw-bold">Property Details</h6>
                <button
                  className="btn-close"
                  style={{ width: "5px" }}
                  onClick={handleClose}
                  aria-label="Close"
                />
              </div>
              <div className="flex-grow-1 overflow-auto px-4 pb-4">
                <img
                  src={selectedProperty.image}
                  className="w-100 mb-3"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="fw-bold mb-0">{selectedProperty.name}</h6>
                  <h6 className="fw-bold mb-0" style={{ color: "#2A478D" }}>
                    {selectedProperty.price}
                  </h6>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                    {selectedProperty.location}, {selectedProperty.city}
                  </p>
                  <span
                    className="px-2 py-1 rounded-2"
                    style={{ fontSize: "12px" }}
                  >
                    {selectedProperty.mode}
                  </span>
                </div>
                <div className="row text-center mb-3 g-2">
                  {[
                    {
                      icon: (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <g clipPath="url(#bed)">
                            <path
                              d="M1.667 3.333V16.667"
                              stroke="#99A1AF"
                              strokeWidth="1.667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.667 6.667H16.667C17.109 6.667 17.533 6.843 17.845 7.155C18.158 7.468 18.334 7.892 18.334 8.334V16.667"
                              stroke="#99A1AF"
                              strokeWidth="1.667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.667 14.167H18.334"
                              stroke="#99A1AF"
                              strokeWidth="1.667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 6.667V14.167"
                              stroke="#99A1AF"
                              strokeWidth="1.667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="bed">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ),
                      value: selectedProperty.bedrooms,
                      label: "BEDROOMS",
                    },
                    {
                      icon: (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M8.334 3.333L6.667 5"
                            stroke="#99A1AF"
                            strokeWidth="1.667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.167 15.833V17.5"
                            stroke="#99A1AF"
                            strokeWidth="1.667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.667 10H18.334"
                            stroke="#99A1AF"
                            strokeWidth="1.667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.833 15.833V17.5"
                            stroke="#99A1AF"
                            strokeWidth="1.667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.5 4.167L6.35 3.018C6.11 2.776 5.804 2.608 5.47 2.537C5.136 2.465 4.788 2.491 4.469 2.613C4.15 2.734 3.872 2.946 3.671 3.222C3.469 3.497 3.352 3.826 3.333 4.167V14.167C3.333 14.609 3.509 15.033 3.821 15.345C4.134 15.658 4.558 15.833 5 15.833H15C15.442 15.833 15.866 15.658 16.178 15.345C16.491 15.033 16.667 14.609 16.667 14.167V10"
                            stroke="#99A1AF"
                            strokeWidth="1.667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                      value: "6",
                      label: "BATHROOMS",
                    },
                    {
                      icon: (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.667 2.5H4.167C3.725 2.5 3.301 2.676 2.988 2.988C2.676 3.301 2.5 3.725 2.5 4.167V6.667"
                            stroke="#99A1AF"
                            strokeWidth="1.667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.5 6.667V4.167C17.5 3.725 17.324 3.301 17.012 2.988C16.699 2.676 16.275 2.5 15.833 2.5H13.333"
                            stroke="#99A1AF"
                            strokeWidth="1.667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.5 13.333V15.833C2.5 16.275 2.676 16.699 2.988 17.012C3.301 17.324 3.725 17.5 4.167 17.5H6.667"
                            stroke="#99A1AF"
                            strokeWidth="1.667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.333 17.5H15.833C16.275 17.5 16.699 17.324 17.012 17.012C17.324 16.699 17.5 16.275 17.5 15.833V13.333"
                            stroke="#99A1AF"
                            strokeWidth="1.667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                      value: "450 SQM",
                      label: "AREA",
                    },
                    {
                      icon: (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <g clipPath="url(#car)">
                            <path
                              d="M15.834 14.167H17.5C18 14.167 18.334 13.833 18.334 13.333V10.833C18.334 10.083 17.75 9.416 17.084 9.25C15.584 8.833 13.334 8.333 13.334 8.333C13.334 8.333 12.25 7.167 11.5 6.417C11.084 6.083 10.584 5.833 10 5.833H4.167C3.667 5.833 3.25 6.167 3 6.583L1.834 9C1.723 9.322 1.667 9.659 1.667 10V13.333C1.667 13.833 2 14.167 2.5 14.167H4.167"
                              stroke="#99A1AF"
                              strokeWidth="1.667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.833 15.833C6.754 15.833 7.5 15.087 7.5 14.167C7.5 13.246 6.754 12.5 5.833 12.5C4.913 12.5 4.167 13.246 4.167 14.167C4.167 15.087 4.913 15.833 5.833 15.833Z"
                              stroke="#99A1AF"
                              strokeWidth="1.667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.5 14.167H12.5"
                              stroke="#99A1AF"
                              strokeWidth="1.667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.167 15.833C15.087 15.833 15.833 15.087 15.833 14.167C15.833 13.246 15.087 12.5 14.167 12.5C13.246 12.5 12.5 13.246 12.5 14.167C12.5 15.087 13.246 15.833 14.167 15.833Z"
                              stroke="#99A1AF"
                              strokeWidth="1.667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="car">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ),
                      value: "4",
                      label: "PARKING",
                    },
                  ].map(({ icon, value, label }) => (
                    <div key={label} className="col-3">
                      <div
                        className="rounded-3 py-2 d-flex flex-column align-items-center"
                        style={{ backgroundColor: "#f9fafb" }}
                      >
                        {icon}
                        <p
                          className="fw-bold mb-0 mt-1"
                          style={{ fontSize: "13px" }}
                        >
                          {value}
                        </p>
                        <p
                          className="text-secondary mb-0"
                          style={{ fontSize: "11px" }}
                        >
                          {label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p
                  className="text-muted mb-1 text-start mt-4"
                  style={{ fontSize: "12px", fontWeight: 600 }}
                >
                  DESCRIPTION
                </p>
                <p
                  className="text-secondary mb-3 text-start"
                  style={{ fontSize: "13px" }}
                >
                  A stunning contemporary duplex in the heart of Lekki Phase 1.
                </p>
                <p
                  className="text-muted mb-2 text-start mt-4"
                  style={{ fontSize: "12px", fontWeight: 600 }}
                >
                  AMENITIES
                </p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {selectedProperty.amenities.map((a) => (
                    <span
                      key={a}
                      className="px-2 py-1 rounded-2"
                      style={{
                        fontSize: "12px",
                        backgroundColor: "#f3f4f6",
                        color: "#6b7280",
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <p
                  className="text-muted mb-2 text-start mt-4"
                  style={{ fontSize: "12px", fontWeight: 600 }}
                >
                  ASSIGNED AGENT
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={selectedProperty.agentimg}
                    className="rounded-5"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p className="mb-0 fw-bold" style={{ fontSize: "14px" }}>
                      {selectedProperty.agent}
                    </p>
                    <p
                      className="mb-0 text-secondary text-start"
                      style={{ fontSize: "12px" }}
                    >
                      {selectedProperty.agenttitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Properties;
