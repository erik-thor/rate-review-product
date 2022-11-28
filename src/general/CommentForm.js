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
  const [username, setUsername] = useState(initialUsername);
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(initialHover);
  const [message, setMessage] = useState(initialMessage);
  const isTextareaDisabled = message.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(username, rating, message);
    setUsername("");
    setRating("")
    setMessage("");
  };
  return (
    <form className="comment-form__inner" onSubmit={onSubmit}>
      <div className="comment-form-user">
        <input
          id="username"
          type="text"
          className="comment-form-username"
          value={username}
          key="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className="comment-form-rating">Rate:
      {[...Array(5)].map((star, selected) => {
        selected += 1;
        return (
          <button
            type="button"
            id="rating"
            value={selected}
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
        id="message"
        className="comment-form-textarea"
        value={message}
        key="message"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button className="comment-form-button primary-button" disabled={isTextareaDisabled}>
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