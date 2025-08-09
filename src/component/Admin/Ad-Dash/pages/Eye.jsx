import React, { useState } from "react";
import { Eye } from "lucide-react";
import trainerImg from "./trainerimg.png";

import styles from "./Eye.module.css";

export default function EyeModal() {
  const [showModal, setShowModal] = useState(false);

  const trainerData = {
    name: "John Doe",
    employeeId: "EMP001",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    image: trainerImg,
    batches: [
      {
        batchCode: "BATCH001",
        timing: "Mon, Wed 10:00 AM",
        students: 15,
        startDate: "2024-01-01",
        endDate: "2024-06-30",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowModal(true)}
        className={styles.iconButton}
        aria-label="View trainer details"
      >
        <Eye size={22} />
      </button>

      {showModal && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <button
              onClick={() => setShowModal(false)}
              className={styles.closeButton}
              aria-label="Close modal"
            >
              ×
            </button>

            <h3 className={styles.title}>Trainer Details</h3>

            <div className={styles.trainerInfo}>
              <img
                src={trainerData.image}
                alt="Trainer"
                className={styles.trainerImg}
              />
              <div>
                <div className={styles.trainerName}>{trainerData.name}</div>
                <div>Employee ID: {trainerData.employeeId}</div>
                <div>Email: {trainerData.email}</div>
                <div>Phone: {trainerData.phone}</div>
              </div>
            </div>

            <h4 className={styles.currentBatchesTitle}>Current Batches</h4>

            <table className={styles.table}>
              <thead>
                <tr className={styles.theadRow}>
                  <th className={styles.th}>Batch Code</th>
                  <th className={styles.th}>Timing</th>
                  <th className={styles.th}>Students</th>
                  <th className={styles.th}>Start Date</th>
                  <th className={styles.th}>Est. End Date</th>
                </tr>
              </thead>
              <tbody>
                {trainerData.batches.map((batch, i) => (
                  <tr key={i}>
                    <td className={styles.td}>{batch.batchCode}</td>
                    <td className={styles.td}>{batch.timing}</td>
                    <td className={styles.td}>{batch.students}</td>
                    <td className={styles.td}>{batch.startDate}</td>
                    <td className={styles.td}>{batch.endDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
