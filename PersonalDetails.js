import React from "react";

function PersonalDetails({ formData, setFormData }) {
  return (
    <div className="personalDetails">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(event) =>
          setFormData({ ...formData, phone: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="E-mail"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <div className="radio">
         <label ><input type="radio" name="gender" value="male"/>Male</label>
         <label ><input type="radio" name="gender" value="male"/>Female</label>
      </div>
    </div>
  );
}

export default PersonalDetails;
