import React from "react";

const Checkbox = ({ label,onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id={label} name="options" value={label} onChange={onChange} className="h-4 w-4" />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
