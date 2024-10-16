import { useState } from "react";

const initialState = {
  name: "",
  city: "",
};

const UseStateHook = () => {
  const [formData, setFormData] = useState(initialState);

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  const handleCityChange = (e) => {
    setFormData({
      ...formData,
      city: e.target.value,
    });
  };

  console.log(formData);

  return (
    <>
      <div>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter Name/"
        />
        <select onChange={handleCityChange} name="city">
          <option value="" id="">
            Select City
          </option>
          <option value="bengaluru" id="bangaluru">
            Bengaluru
          </option>
          <option value="mumbai" id="mumbai">
            Mumbai
          </option>
        </select>
        <div>
          <p>Name is {formData.name}</p>
          <p>City is {formData.city}</p>
        </div>
      </div>
    </>
  );
};

export default UseStateHook;
