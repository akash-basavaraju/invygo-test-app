import dayjs from "dayjs";
import { useState } from "react";
import DropdownField from "../../components/Dropdown Field";
import TextField from "../../components/TextField";
import APIService from "../../services/APIService";
import { ProfessionOptions } from "../../utils/AppConstants";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [dob, setDob] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [locality, setLocality] = useState<string>("");
  const [noOfGuests, setNoOfGuests] = useState<number>();
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    if (!dayjs(dob, "DD/MM/YYYY", true).isValid()) {
      setError("Enter valid date.");
      return;
    }

    if (
      (noOfGuests || noOfGuests === 0) &&
      (noOfGuests < 0 || noOfGuests > 2)
    ) {
      setError("Only 0 to 2 guest(s) are allowed.");
      return;
    }

    if (
      name &&
      age &&
      dob &&
      profession &&
      locality &&
      (noOfGuests || noOfGuests === 0) &&
      address
    ) {
      APIService.putRegistration({
        name,
        age,
        dob,
        profession,
        locality,
        noOfGuests,
        address,
      });
    } else {
      setError("Please enter all the values");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">Registration Form</div>
        <TextField<string>
          label="Name"
          value={name}
          onChange={(value) => {
            setName(value);
            setError("");
          }}
          placeholder="Enter Name"
        />
        <TextField<number>
          label="Age"
          value={age}
          onChange={(value) => {
            setAge(value);
            setError("");
          }}
          numberOnly
          placeholder="Enter Age in years"
        />
        <TextField<string>
          label="Date of Birth"
          value={dob}
          onChange={(value) => {
            setDob(value);
            setError("");
          }}
          placeholder="Date of Birth in DD/MM/YYYY format"
        />
        <DropdownField
          label="Profession"
          value={profession as string}
          onChange={(value) => {
            setProfession(value);
            setError("");
          }}
          options={ProfessionOptions}
          placeholder="Select a profession"
        />
        <TextField<string>
          label="Locality"
          value={locality}
          onChange={(value) => {
            setLocality(value);
            setError("");
          }}
          placeholder="Enter Locality"
        />
        <TextField<number>
          label="Number of Guests (0-2)"
          value={noOfGuests}
          onChange={(value) => {
            setNoOfGuests(value);
            setError("");
          }}
          placeholder="Enter Number of Guests"
          numberOnly
        />
        <TextField<string>
          label="Address"
          isMultiline
          value={address}
          onChange={(value) => {
            setAddress(value);
            setError("");
          }}
          placeholder="Enter Address"
        />
        {error && <div className="form-error">{error}</div>}
        <button className="form-submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
