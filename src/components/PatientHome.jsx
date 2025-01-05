import React from "react";

const patients = [
  
    {
        name: "Bharath Pranesh PK",
        age: 19,
        gender: "Male",
        disease: "Pneumonia",
        daysHospitalized: 7,
      },
      {
        name: "Marsh BP",
        age: 20,
        gender: "Female",
        disease: "Malaria",
        daysHospitalized: 5,
      },
      {
        name: "Bharath Pranesh PK",
        age: 20,
        gender: "Female",
        disease: "Malaria",
        daysHospitalized: 5,
      },
      {
        name: "Marsh BP",
        age: 20,
        gender: "Female",
        disease: "Malaria",
        daysHospitalized: 5,
      },
      {
        name: "Marsh BP",
        age: 20,
        gender: "Female",
        disease: "Malaria",
        daysHospitalized: 5,
      },
      {
        name: "Bharath Pranesh PK",
        age: 19,
        gender: "Male",
        disease: "Pneumonia",
        daysHospitalized: 7,
      },
      {
        name: "Marsh BP",
        age: 20,
        gender: "Female",
        disease: "Malaria",
        daysHospitalized: 5,
      },
      {
        name: "Marsh BP",
        age: 20,
        gender: "Female",
        disease: "Malaria",
        daysHospitalized: 5,
      },
      {
        name: "Marsh BP",
        age: 20,
        gender: "Female",
        disease: "Malaria",
        daysHospitalized: 5,
      },
     
];

const PatientHome = () => {
  return (
    //   <div className="flex bg-emerald-400 min-h-screen items-center justify-center ">
    //     <div className="bg-emerald-200 p-9 rounded-lg shadow-lg w-100 h-100">
    //         <h1 className="items-center justify ">Patient Details</h1>
    //         <table border="1" style={{ width: "100%", margin: "auto", textAlign: "center"  }}>
    //             <thead>
    //             <tr>
    //                 <th>Name</th>
    //                 <th>Age</th>
    //                 <th>Gender</th>
    //                 <th>Disease</th>
    //                 <th>Days Hospitalized</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {patients.map((patient, index) => (
    //                 <tr key={index}>
    //                 <td>{patient.name}</td>
    //                 <td>{patient.age}</td>
    //                 <td>{patient.gender}</td>
    //                 <td>{patient.disease}</td>
    //                 <td>{patient.daysHospitalized}</td>
    //                 </tr>
    //             ))}
    //             </tbody>
    //         </table>
    //   </div>
    // </div>
    <div className="bg-emerald-200 min-h-screen">
      <div className="flex justify-center text-2xl p-2 font-bold">Patient details</div>

      <div className="grid grid-cols-1 gap-5 m-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {patients.map((patients, index) => (
          <div
            key={index}
            className="bg-emerald-400 text-white flex flex-col p-4 rounded-xl shadow-2xl text-black"
          >
            <div>Name: {patients.name}</div>
            <div>Age: {patients.age}</div>
            <div>Gender: {patients.gender}</div>
            <div>Disease: {patients.disease}</div>
            <div>Days of Hospitilization: {patients.daysHospitalized}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientHome;
