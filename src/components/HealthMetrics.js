import React from 'react';

const HealthMetrics = () => {
  const metrics = [
    { icon: 'fas fa-heartbeat', title: 'Heart Rate', value: '72 bpm' },
    { icon: 'fas fa-tint', title: 'Blood Pressure', value: '120/80 mmHg' },
    {
      icon: 'https://static.thenounproject.com/png/3318037-200.png',
      title: 'Blood Sugar',
      value: '90 mg/dL',
    },
    { icon: 'fas fa-lungs', title: 'Oxygen Level', value: '98%' },
    { icon: 'fas fa-weight', title: 'Weight', value: '68 kg' },
    {
      icon: 'https://static.thenounproject.com/png/3318038-200.png',
      title: 'BMI',
      value: '22.5',
    },
  ];

  return (
    <div className="health-metrics">
      {metrics.map((metric, index) => (
        <div className="metric-box" key={index}>
          {metric.icon.startsWith('http') ? (
            <img src={metric.icon} alt={metric.title} />
          ) : (
            <i className={metric.icon}></i>
          )}
          <h4>{metric.title}</h4>
          <p>{metric.value}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthMetrics;