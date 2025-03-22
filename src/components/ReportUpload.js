import React, { useState } from 'react';

const ReportUpload = () => {
  const [uploadedReports, setUploadedReports] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedReports([...uploadedReports, file.name]);
    }
  };

  return (
    <div className="report-upload">
      <h3>Upload Reports</h3>
      <input type="file" onChange={handleUpload} accept=".pdf,.csv,.jpg,.png" />
      <div className="uploaded-reports">
        {uploadedReports.map((report, index) => (
          <div className="report-item" key={index}>
            <span>{report}</span>
            <button onClick={() => alert(`Viewing report: ${report}`)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportUpload;