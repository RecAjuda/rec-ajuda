import { FieldProps } from "./type";

export const Field = ({
  placeholder,
  id,
  required,
  style,
  type,
}: FieldProps) => {
  return (
    <div>
      <input
        className={
          `shadow-gray-400 shadow-md border rounded-md w-full h-9 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs` || {
            style,
          }
        }
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
