import React, { useState, useEffect } from 'react';

const Index = () => {
  const [healthData, setHealthData] = useState({
    heartRate: 72,
    bloodPressure: '120/80',
    bloodSugar: 90,
  });

  const [medicationReminders, setMedicationReminders] = useState([
    { id: 1, time: '08:00 AM', medication: 'Aspirin', taken: false },
    { id: 2, time: '12:00 PM', medication: 'Metformin', taken: false },
    { id: 3, time: '06:00 PM', medication: 'Lisinopril', taken: false },
  ]);

  const [emergencyCall, setEmergencyCall] = useState(false);

  const [schedule, setSchedule] = useState([
    { id: 1, time: '09:00 AM', activity: 'Doctor Appointment' },
    { id: 2, time: '11:00 AM', activity: 'Walk in the park' },
    { id: 3, time: '03:00 PM', activity: 'Call with family' },
  ]);

  const [socialInteractions, setSocialInteractions] = useState([
    { id: 1, name: 'John Doe', message: 'How are you today?' },
    { id: 2, name: 'Jane Smith', message: 'Let\'s catch up soon!' },
  ]);

  const [remoteConsultations, setRemoteConsultations] = useState([
    { id: 1, doctor: 'Dr. Brown', time: '10:00 AM', type: 'Video' },
    { id: 2, doctor: 'Dr. Green', time: '02:00 PM', type: 'Phone' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthData({
        heartRate: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
        bloodPressure: `${Math.floor(Math.random() * (130 - 110 + 1)) + 110}/${Math.floor(Math.random() * (90 - 70 + 1)) + 70}`,
        bloodSugar: Math.floor(Math.random() * (120 - 80 + 1)) + 80,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMedicationTaken = (id) => {
    setMedicationReminders((prevReminders) =>
      prevReminders.map((reminder) =>
        reminder.id === id ? { ...reminder, taken: true } : reminder
      )
    );
  };

  const handleEmergencyCall = () => {
    setEmergencyCall(true);
    setTimeout(() => setEmergencyCall(false), 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Elderly Care System</h1>
      <p className="text-lg mb-4">Our system helps elderly people manage their health and stay connected with their loved ones.</p>
    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Health Monitoring</h2>
        <p>Heart Rate: {healthData.heartRate} bpm</p>
        <p>Blood Pressure: {healthData.bloodPressure}</p>
        <p>Blood Sugar: {healthData.bloodSugar} mg/dL</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Medication Reminders</h2>
        <ul>
          {medicationReminders.map((reminder) => (
            <li key={reminder.id}>
              {reminder.time} - {reminder.medication} - {reminder.taken ? 'Taken' : <button onClick={() => handleMedicationTaken(reminder.id)}>Mark as Taken</button>}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Emergency Call</h2>
        <button onClick={handleEmergencyCall} className="bg-red-500 text-white p-2 rounded">Emergency Call</button>
        {emergencyCall && <p className="text-red-500">Emergency call in progress...</p>}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Schedule Management</h2>
        <ul>
          {schedule.map((item) => (
            <li key={item.id}>
              {item.time} - {item.activity}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Social Interaction</h2>
        <ul>
          {socialInteractions.map((interaction) => (
            <li key={interaction.id}>
              {interaction.name}: {interaction.message}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Remote Consultation</h2>
        <ul>
          {remoteConsultations.map((consultation) => (
            <li key={consultation.id}>
              {consultation.time} - {consultation.doctor} ({consultation.type})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;