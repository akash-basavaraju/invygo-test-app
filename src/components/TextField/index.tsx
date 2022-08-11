import "./TextField.css";

interface ITextFieldProps<T> {
  label: string;
  placeholder: string;
  value?: T;
  onChange: (value: T) => void;
  numberOnly?: boolean;
  isMultiline?: boolean;
}

export default function TextField<T>(props: ITextFieldProps<T>) {
  const {
    label,
    placeholder,
    value = "",
    onChange,
    numberOnly = false,
    isMultiline = false,
  } = props;

  return (
    <div className="text-field-container">
      <div className="text-field-label">{label}:</div>
      {isMultiline ? (
        <textarea
          className="text-field-input"
          cols={40}
          rows={5}
          value={`${value}`}
          placeholder={placeholder}
          onChange={(event) => {
            onChange(event.target.value as unknown as T);
          }}
        />
      ) : (
        <input
          type={numberOnly ? "number" : "text"}
          className="text-field-input"
          value={`${value}`}
          placeholder={placeholder}
          onChange={(event) => {
            onChange(event.target.value as unknown as T);
          }}
        />
      )}
    </div>
  );
}
