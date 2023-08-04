import React, { useState } from "react";

function OtherInfo() {
  const [formData, setFormData] = useState([{ place: "" }]);
  const maxFields = 4;

  const handleInputChange = (index, value) => {
    const updatedData = [...formData];
    updatedData[index].place = value;
    setFormData(updatedData);
  };

  const addField = () => {
    if (formData.length < maxFields) {
      setFormData([...formData, { place: "" }]);
    }
  };

  return (
    <div className="travlHistory">
      {formData.map((field, index) => (
        <input
          key={index}
          type="text"
          placeholder="Country"
          value={field.place}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      {formData.length < maxFields && (
        <button onClick={addField}>Add Field</button>
      )}
    </div>
  );
}

export default OtherInfo;
