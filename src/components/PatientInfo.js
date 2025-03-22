import React, { useState } from 'react';

const PatientInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [patientDetails, setPatientDetails] = useState({
    name: 'Selena Misael',
    id: '2456908',
    hospitalId: 'H05128',
    gender: 'Female',
    age: '42',
    dob: '1983-03-21',
    bloodGroup: 'O+',
    email: 'selena@gmail.com',
    mobile: '0775119635',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e, field) => {
    setPatientDetails({ ...patientDetails, [field]: e.target.value });
  };

  return (
    <div className="patient-info">
      <img
        src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
        alt="Patient's Picture"
      />
      <div className="info">
        <h3>Patient Details</h3>
        {Object.entries(patientDetails).map(([key, value]) => (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
            {isEditing ? (
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(e, key)}
              />
            ) : (
              <span>{value}</span>
            )}
          </p>
        ))}
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default PatientInfo;