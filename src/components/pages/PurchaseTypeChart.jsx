import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PurchaseTypeChart() {
  const data = {
    labels: ["Buy", "Rent", "Lease"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ["#3b2f6b", "#1ea896", "#8b5cf6"],
        borderWidth: 2,
        borderColor: "#fff",
        cutout: "70%",
      },
    ],
  };
  const options = {
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    maintainAspectRatio: false,
  };

  return (
    <div className="card border-0 shadow-sm p-3 h-100 mt-3">
      <h5 className="mb-3">Listings by Purchase Type</h5>
      <div style={{ height: "180px", width: "180px", margin: "0 auto" }}>
        <Doughnut data={data} options={options} />
      </div>
      <div className="mt-3 small">
        <div className="d-flex justify-content-between mb-2">
          <span>
            <span
              className="d-inline-block rounded-circle me-2"
              style={{ width: "10px", height: "10px", background: "#3b2f6b" }}
            ></span>
            Buy
          </span>

          <strong>65%</strong>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>
            <span
              className="d-inline-block rounded-circle me-2"
              style={{ width: "10px", height: "10px", background: "#1ea896" }}
            ></span>
            Rent
          </span>
          <strong>25%</strong>
        </div>
        <div className="d-flex justify-content-between">
          <span>
            <span
              className="d-inline-block rounded-circle me-2"
              style={{ width: "10px", height: "10px", background: "#8b5cf6" }}
            ></span>
            Lease
          </span>
          <strong>10%</strong>
        </div>
      </div>
    </div>
  );
}
