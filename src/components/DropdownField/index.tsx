import "./DropdownField.css";

interface IDropdownFieldProps {
  label: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
  value?: string;
}

export default function DropdownField(props: IDropdownFieldProps) {
  const { label, value = "", placeholder, options, onChange } = props;

  return (
    <div className="dropdown-container">
      <div className="dropdown-label">{label}:</div>
      <select
        onChange={(event) => {
          if (event.target.value === placeholder) {
            onChange("");
          } else {
            onChange(event.target.value);
          }
        }}
        className="dropdown-select"
        data-testid={`dropdown-${label.toLowerCase()}`}
      >
        <option value={placeholder}>{placeholder}</option>
        {options.map((option) => {
          return (
            <option value={option} selected={option === value}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
