import { useState } from "react";
import DropdownField from "../../components/Dropdown Field";
import TextField from "../../components/TextField";
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

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">Registration Form</div>
        <TextField<string>
          label="Name"
          value={name}
          onChange={(value) => {
            setName(value);
          }}
          placeholder="Enter Name"
        />
        <TextField<number>
          label="Age"
          value={age}
          onChange={(value) => {
            setAge(value);
          }}
          numberOnly
          placeholder="Enter Age in years"
        />
        <TextField<string>
          label="Date of Birth"
          value={dob}
          onChange={(value) => {
            setDob(value);
          }}
          placeholder="Date of Birth in DD/MM/YYYY format"
        />
        <DropdownField
          label="Profession"
          value={profession as string}
          onChange={(value) => {
            setProfession(value);
          }}
          options={ProfessionOptions}
          placeholder="Select a profession"
        />
        <TextField<string>
          label="Locality"
          value={locality}
          onChange={(value) => {
            setLocality(value);
          }}
          placeholder="Enter Locality"
        />
        <TextField<number>
          label="Number of Guests (0-2)"
          value={noOfGuests}
          onChange={(value) => {
            setNoOfGuests(value);
          }}
          placeholder="Enter Number of Guests"
          numberOnly
        />
        <TextField<string>
          label="Address"
          value={address}
          onChange={(value) => {
            setAddress(value);
          }}
          placeholder="Enter Address"
        />
        {error && <div className="form-error">{error}</div>}
        <button className="form-submit">Submit</button>
      </div>
    </div>
  );
}
