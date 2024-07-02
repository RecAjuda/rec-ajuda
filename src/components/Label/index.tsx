import { LabelProps } from "./type";

export const Label = ({ content, style }: LabelProps) => {
  return (
    <div>
      <div className="flex gap-1">
        <label
          className={`block text-gray-700 text-sm font-bold mb-2 ${style}`}
        >
          {content}
        </label>
        <span className="text-red-600">*</span>
      </div>
    </div>
  );
};
