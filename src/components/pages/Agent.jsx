import React, { useState } from "react";
import logo from "../../assets/BOC-logo.png";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function NavIcon({ children }) {
  return <span style={{ flexShrink: 0 }}>{children}</span>;
}

function Agent() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Property Consultant",
      image: "/images/myphoto.JPG",
      specializations: ["SALES", "COMMERCIAL"],
      listings: 3,
      visibility: "Visible",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Leasing Specialist",
      image: "/images/IMG_E1863.JPG",
      specializations: ["RENTALS"],
      listings: 3,
      visibility: "Visible",
    },
  ];
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

  const handleDeleteClick = () => {
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    setDeleteModal(false);
    setSuccessModal(true);
    onSubmit?.("delete");
    console.log("property deleted");
  };

  const handleSubmit = (newAgent) => {
    const agentToAdd = {
      id: Date.now(),
      ...newAgent,
      image: newAgent.image || "/placeholder.jpg",
    };
  };

  // Add Agent//
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

    const handleCancelAddClick = () => {
      setIsOpen(false);
    };

    const handleSaveAddClick = () => {
      setAddAgentModal(true);
    };

    const confirmAddAgent = () => {
      setAddAgentModal(false);
      onSubmit?.("addagent");
      console.log("Agent Added");
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
            onClick={handleCancelAddClick}
            className="col-5 p-1 me-2 btn-sm  border rounded-3"
            style={{ border: "1px solid  #F3F4F6" }}
          >
            Cancel
          </button>
          <button
            onClick={handleSaveAddClick}
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
  // Edit agent //
  const handleOpenEdit = () => {
    setDrawerMode("edit");
    setIsOpen(true);
    setSelectedAgent(null);
  };

  const EditAgentForm = ({ onSubmit }) => {
    const [editAgentModal, setEditAgentModal] = useState(false);
    const [formData, , setFormData] = useState({
      name: "",
      type: "",
      decription: "",
      agent: "",
      price: "",
      featured: "",
      image: "",
    });

    const handleEditAgent = () => {
      setEditAgentModal(true);
    };

    const confirmEditAgent = () => {
      AddAgentModal(false);
      onSubmit?.("editagent");
      console.log("Agent updated");
    };

    const handleCancelAgent = () => {
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
              Edit Agent
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
            onClick={handleEditAgent}
            className="col-5 p-1 btn-sm rounded-3 text-white"
            style={{ backgroundColor: " #003A8C" }}
          >
            Save Agent
          </button>
        </div>
        <Modal
          show={editAgentModal}
          onHide={() => setEditAgentModal(false)}
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
            <Modal.Title>Agent Details Updated Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            The Agent has been updated and viewers will be able to see property
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

  const EmailIcon = () => (
    <svg width="40" height="40" viewBox="0 0 26 26" fill="none">
      <rect width="26" height="26" rx="8" fill="#F9FAFB" />
      <path
        d="M18.8332 10.083L13.5884 13.4238C13.4104 13.5271 13.2083 13.5816 13.0025 13.5816C12.7966 13.5816 12.5945 13.5271 12.4165 13.4238L7.1665 10.083"
        stroke="#99A1AF"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6665 8.33301H8.33317C7.68884 8.33301 7.1665 8.85534 7.1665 9.49967V16.4997C7.1665 17.144 7.68884 17.6663 8.33317 17.6663H17.6665C18.3108 17.6663 18.8332 17.144 18.8332 16.4997V9.49967C18.8332 8.85534 18.3108 8.33301 17.6665 8.33301Z"
        stroke="#99A1AF"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="40" height="40" viewBox="0 0 26 26" fill="none">
      <rect width="26" height="26" rx="8" fill="#F9FAFB" />
      <path
        d="M14.0685 15.665C14.189 15.7203 14.3247 15.733 14.4533 15.7008C14.5819 15.6687 14.6958 15.5937 14.7761 15.4882L14.9832 15.217C15.0918 15.0721 15.2328 14.9545 15.3948 14.8735C15.5568 14.7925 15.7354 14.7503 15.9165 14.7503H17.6665C17.9759 14.7503 18.2727 14.8732 18.4915 15.092C18.7103 15.3108 18.8332 15.6076 18.8332 15.917V17.667C18.8332 17.9764 18.7103 18.2732 18.4915 18.4919C18.2727 18.7107 17.9759 18.8337 17.6665 18.8337C14.8817 18.8337 12.211 17.7274 10.2419 15.7583C8.27275 13.7891 7.1665 11.1184 7.1665 8.33366C7.1665 8.02424 7.28942 7.72749 7.50821 7.5087C7.72701 7.28991 8.02375 7.16699 8.33317 7.16699H10.0832C10.3926 7.16699 10.6893 7.28991 10.9081 7.5087C11.1269 7.72749 11.2498 8.02424 11.2498 8.33366V10.0837C11.2498 10.2648 11.2077 10.4434 11.1267 10.6054C11.0457 10.7674 10.9281 10.9083 10.7832 11.017L10.5102 11.2217C10.4031 11.3035 10.3276 11.4198 10.2965 11.5509C10.2655 11.6821 10.2808 11.8199 10.3398 11.941C11.1371 13.5602 12.4483 14.8698 14.0685 15.665Z"
        stroke="#99A1AF"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ChatIcon = () => (
    <svg width="40" height="40" viewBox="0 0 26 26" fill="none">
      <rect width="26" height="26" rx="8" fill="#F9FAFB" />
      <path
        d="M18.8332 15.9167C18.8332 16.2261 18.7103 16.5228 18.4915 16.7416C18.2727 16.9604 17.9759 17.0833 17.6665 17.0833H9.98284C9.67344 17.0834 9.37675 17.2064 9.158 17.4252L7.8735 18.7097C7.81558 18.7676 7.74179 18.807 7.66146 18.823C7.58112 18.839 7.49786 18.8308 7.42218 18.7994C7.34651 18.7681 7.28183 18.715 7.23632 18.6469C7.19081 18.5788 7.16651 18.4987 7.1665 18.4168V8.91667C7.1665 8.60725 7.28942 8.3105 7.50821 8.09171C7.72701 7.87292 8.02375 7.75 8.33317 7.75H17.6665C17.9759 7.75 18.2727 7.87292 18.4915 8.09171C18.7103 8.3105 18.8332 8.60725 18.8332 8.91667V15.9167Z"
        stroke="#99A1AF"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ListingsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
      <path
        d="M7.5 1.5H10.5V4.5"
        stroke="#003A8C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7L10.5 1.5"
        stroke="#003A8C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.5V9.5C9 9.76522 8.89464 10.0196 8.70711 10.2071C8.51957 10.3946 8.26522 10.5 8 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V4C1.5 3.73478 1.60536 3.48043 1.79289 3.29289C1.98043 3.10536 2.23478 3 2.5 3H5.5"
        stroke="#003A8C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const VisibleIcon = () => (
    <svg
      className="me-1"
      width="18"
      height="18"
      viewBox="0 0 12 12"
      fill="none"
    >
      <g clipPath="url(#clip-visible)">
        <path
          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
          stroke="#00A63E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 6L5.5 7L7.5 5"
          stroke="#00A63E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip-visible">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

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
                <p className="page-title text-start h2 fw-bold">Agents</p>
                <p className="fw-semibold">
                  Manage agent profiles displayed on website
                </p>
              </div>
              <div className="header-actions">
                <button onClick={handleOpenAdd} className="btn-primary">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3.75 9h10.5M9 3.75v10.5"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Add New Agent
                </button>
              </div>
            </div>

            <div className="stats-card bg-white border-0 shadow-sm mb-4 col-12 p-3 rounded-4">
              <div className="row align-content-between justify-content-evenly">
                <input
                  type="text"
                  className="col-12 col-lg-8 search-input fw-bold"
                  placeholder="Search by name or email..."
                />
                <input
                  type="text"
                  className="col-12 col-lg-2 search-input fw-bold rounded-3"
                  placeholder="All Specializations"
                />
              </div>
            </div>

            <div className="stat-card rounded-4">
              <div
                className="row justify-content-between px-3 py-2"
                style={{ borderBottom: "1px solid #f3f4f6" }}
              >
                <div
                  className="col-lg-2 col-md-2 text-secondary fw-bold text-start"
                  style={{ fontSize: "18px" }}
                >
                  AGENT
                </div>
                <div
                  className="col-lg-2 col-md-2 text-secondary fw-bold"
                  style={{ fontSize: "18px" }}
                >
                  CONTACT
                </div>
                <div
                  className="col-lg-2 col-md-2 text-secondary fw-bold "
                  style={{ fontSize: "18px" }}
                >
                  SPECIALIZATION
                </div>
                <div
                  className="col-lg-2 col-md-2 text-secondary fw-bold"
                  style={{ fontSize: "18px" }}
                >
                  LISTINGS
                </div>
                <div
                  className="col-lg-2 col-md-2 text-secondary fw-bold"
                  style={{ fontSize: "18px" }}
                >
                  VISIBILITY
                </div>
                <div
                  className="col-lg-2 col-md-2  text-secondary fw-bold"
                  style={{ fontSize: "18px" }}
                >
                  ACTIONS
                </div>
              </div>

              {agents.map((agent) => (
                <div
                  key={agent.id}
                  className="row justify-content-between align-items-center px-3 py-3"
                  style={{ borderBottom: "1px solid #f3f4f6" }}
                >
                  <div className="col-lg-2 col-md-2 d-flex align-items-center gap-3">
                    <img
                      src={agent.image}
                      className="rounded-5"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ fontSize: "14px" }}>
                      <p className="mb-0 fw-bold text-dark text-start">
                        {agent.name}
                      </p>
                      <p className="mb-0 text-secondary text-start text-nowrap">
                        {agent.role}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 d-flex align-items-center gap-1 justify-content-center">
                    <EmailIcon />
                    <PhoneIcon />
                    <ChatIcon />
                  </div>

                  <div className="col-lg-2 col-md-2 d-flex flex-wrap gap-1 justify-content-center">
                    {agent.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="border p-1"
                        style={{ fontSize: "12px" }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="col-lg-2 col-md-2">
                    <span
                      className="fw-bold"
                      style={{ color: "#003abc", fontSize: "14px" }}
                    >
                      {agent.listings} <ListingsIcon />
                    </span>
                  </div>

                  <div className="col-lg-2 col-md-2">
                    <span
                      className="rounded-4 px-2 py-1 d-inline-flex align-items-center"
                      style={{
                        fontSize: "14px",
                        color: "#00A63E",
                        backgroundColor: "#e4ffee",
                      }}
                    >
                      <VisibleIcon />
                      {agent.visibility}
                    </span>
                  </div>

                  <div className="col-lg-2 col-md-2 d-flex align-items-center justify-content-center">
                    <div
                      className="header-actions"
                      onClick={handleOpenEdit}
                      className=""
                    >
                      <EditIcon />
                    </div>
                    <div onClick={handleDeleteClick}>
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
                  <Modal.Title>Delete Agent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  The Agent will be deleted and viewers will no longer be able
                  to see agent and their contact information.
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
                  <Modal.Title>Agent Deleted Successfully</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  The Agent has been listed and viewers will be able to see
                  property assigned to the agent and their contact information.
                </Modal.Body>
                <Modal.Footer className="justify-content-between border-0">
                  <Button
                    type="button"
                    className="text-white"
                    variant=""
                    onClick={() => setSuccessModal(false)}
                    style={{ backgroundColor: "#003A8C", width: "57vh" }}
                  >
                    Return to Dashboard
                  </Button>
                </Modal.Footer>
              </Modal>
              <p
                className="text-secondary fw-light px-3 py-2 text-start"
                style={{ fontSize: "18px" }}
              >
                Showing 1–{agents.length} of {agents.length} agents
              </p>
            </div>
          </main>
        </div>
      </div>

      <div
        className="drawer position-fixed top-0 end-0 h-100 bg-white shadow-lg overflow-auto"
        style={{
          zIndex: 1050,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          width: "400px",
        }}
      >
        {drawerMode === "add" && <AddAgentForm onSubmit={handleSubmit} />}
        {drawerMode === "view" && selectedAgent && (
          <AgentDetails property={selectedAgent} />
        )}

        {drawerMode === "edit" && <EditAgentForm onSubmit={handleSubmit} />}
        {drawerMode === "view" && selectedAgent && (
          <AgentDetails property={selectedAgent} />
        )}
      </div>
    </>
  );
}

export default Agent;
