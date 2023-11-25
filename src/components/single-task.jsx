import React, { useState } from "react";
import "../styles/single-task.css";

const SingleTask = ({ data, onClose, changeTodos }) => {
  const [newLabel, setNewLabel] = useState(null);

  const onSave = (e) => {
    e.preventDefault();
    setNewLabel(e.target[0].value);
    changeTodos(data.id, e.target[0].value);
    onClose();
  };
  return (
    <div className="popup-wrap open">
      <div className="popup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="popup-close"
          onClick={onClose}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.92912 17.6569C4.5386 18.0474 4.5386 18.6806 4.92912 19.0711C5.31965 19.4616 5.95281 19.4616 6.34334 19.0711L12.0002 13.4143L17.6571 19.0711C18.0476 19.4616 18.6807 19.4616 19.0713 19.0711C19.4618 18.6806 19.4618 18.0474 19.0713 17.6569L13.4144 12L19.0713 6.3432C19.4618 5.95268 19.4618 5.31951 19.0713 4.92899C18.6807 4.53846 18.0476 4.53846 17.657 4.92899L12.0002 10.5858L6.34335 4.92899C5.95282 4.53846 5.31966 4.53846 4.92913 4.92899C4.53861 5.31951 4.53861 5.95268 4.92913 6.3432L10.586 12L4.92912 17.6569Z"
            fill="#A0A0A4"
          />
        </svg>
        <form onSubmit={onSave} className="form">
          <textarea
            defaultValue={data.label}
            rows="3"
            className="form_textarea"
          ></textarea>
          <button className="btn form_btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleTask;
