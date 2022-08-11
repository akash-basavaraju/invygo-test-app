import "./TextField.css";

interface ITextFieldProps<T> {
  label: string;
  placeholder: string;
  value?: T;
  onChange: (value: T) => void;
  numberOnly?: boolean;
}

export default function TextField<T>(props: ITextFieldProps<T>) {
  const {
    label,
    placeholder,
    value = "",
    onChange,
    numberOnly = false,
  } = props;

  return (
    <div className="text-field-container">
      <div className="text-field-label">{label}:</div>
      <input
        type={numberOnly ? "number" : "text"}
        className="text-field-input"
        value={`${value}`}
        placeholder={placeholder}
        onChange={(event) => {
          onChange(event.target.value as unknown as T);
        }}
      />
    </div>
  );
}
