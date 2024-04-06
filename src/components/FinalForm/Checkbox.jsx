import React from "react";

const Checkbox = ({ label }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" className="h-4 w-4" />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
