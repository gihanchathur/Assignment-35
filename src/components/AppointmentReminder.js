import React, { useState } from 'react';

const AppointmentReminder = () => {
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="appointment-reminder">
      <h3>Appointment Reminder</h3>
      <p>
        <strong>Doctor:</strong> Dr. Ibrahim Kadri
      </p>
      <p>
        <strong>Date:</strong> March 20, 2025
      </p>
      <p>
        <strong>Time:</strong> 10:00 AM
      </p>
      <p>
        <strong>Hospital:</strong> MediShed Medical Center
      </p>
      <p>
        <strong>Status:</strong> Confirmed
      </p>
      <button onClick={() => alert('Viewing appointment details')}>View Details</button>
      <button onClick={toggleHistory}>
        {showHistory ? 'Hide Appointment History' : 'View Appointment History'}
      </button>
    </div>
  );
};

export default AppointmentReminder;
