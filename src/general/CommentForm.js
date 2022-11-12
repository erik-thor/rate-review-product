import { useState } from "react";
import React from 'react';

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialMessage = "",
  initialUsername = "",
  initialRating = "",
  initialHover = "",

}) => {
  const [message, setMessage] = useState(initialMessage);
  const [username, setUsername] = useState(initialUsername);
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(initialHover);
  const isTextareaDisabled = message.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(message, username, rating);
    setMessage("");
    setUsername("");
    setRating("")
  };
  return (
    <form className="comment-form__inner" onSubmit={onSubmit}>
      <input
        type="text"
        className="comment-form-username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Name"
      />
      <div className="star-rating">Rate:
      {[...Array(5)].map((star, selected) => {
        selected += 1;
        return (
          <button
            type="button"
            value={rating}
            key={selected}
            className={selected <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(selected)}
            onMouseEnter={() => setHover(selected)}
            onMouseLeave={() => setHover(rating)}
            onChange={(e) => setRating(e.target.value)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      </div>
      <textarea
        className="comment-form-textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;