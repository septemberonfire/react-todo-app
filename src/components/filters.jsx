import { useState } from "react";

const Filters = ({ onValueSelected }) => {
  const [selectValue, setSelectValue] = useState("value1");

  const onChangeHandler = (e) => {
    onValueSelected(e.target.value);
    setSelectValue(e.target.value);
  };

  return (
    <div>
      <select name="select" value={selectValue} onChange={onChangeHandler}>
        <option value="value1" disabled>
          Неотсортированные
        </option>
        <option value="value2">Сначала самые свежие</option>
        <option value="value3">Сначала самые старые</option>
      </select>
    </div>
  );
};

export default Filters;
