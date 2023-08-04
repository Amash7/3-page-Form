import React from "react";

function EducationDetails({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Institute Name"
        value={formData.institute}
        onChange={(e) => {
          setFormData({ ...formData, institute: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Duration"
        value={formData.duration}
        onChange={(e) => {
          setFormData({ ...formData, duration: e.target.value });
        }}
      />

      <div className="year">
      <label for="year">Joining Year:</label>
     <select id="year" name="year">
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
     </select>
      </div>

      <label for="birthdate">End Date:</label>
      <input type="date" id="birthdate" name="birthdate"/>

    </div>
  );
}

export default EducationDetails;
