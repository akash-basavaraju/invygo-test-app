import "./TextField.css";

interface ITextFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
}

export default function TextField(props: ITextFieldProps) {
  const { label, placeholder, value = "", onChange } = props;

  return (
    <div className="text-field-container">
      <div className="text-field-label">{label}:</div>
      <input
        type="text"
        className="text-field-input"
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
}
