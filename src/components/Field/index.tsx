import { FieldProps } from "./type";

export const Field = ({
  placeholder,
  id,
  required,
  style,
  type,
  icon,
}: FieldProps) => {
  return (
    <div className="relative flex ">
      {!!icon && (
        <img
          className="absolute inset-y-0 left-0 flex z-10 w-7 h-7 items-center pt-3 pl-3"
          src={icon}
          alt={icon}
        />
      )}
      <input
        className={`shadow-gray-400 shadow-md border rounded-md h-9 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${style}`}
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
