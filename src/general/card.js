import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import thumbnail from './images/img.webp';

import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api";
import React from 'react';

const Card = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const allReviews = backendComments.map(function(e){
    return +e.review;
  });
  const initialReview = 0;
  const avgReview = allReviews.reduce((accumulator, currentValue) => (accumulator + currentValue), initialReview) / allReviews.length;
  const formattedReview = avgReview.toFixed(2);
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (username, rating, message, parentId) => {
    createCommentApi(username, rating, message, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (username, rating, message, commentId) => {
    updateCommentApi(username, rating, message).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: message, review: rating, nickname: username };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="product">
      <div className="product__inner">
        <div className="product-image__wrapper">
          <img src={thumbnail} className="product-image" alt="product" />
        </div>
        <div className="product-content">
          <div className="comment-form__review">
              <span className="star on">&#9733;</span>
              <div>{formattedReview}</div>
          </div>
          <h3 className="product-title">Productname</h3>
          <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae enim ut lorem iaculis suscipit. Ut imperdiet a urna ut consequat. Nulla imperdiet, sem id rhoncus iaculis, diam ligula convallis ligula, nec commodo neque dolor et nulla. 
          </p>
          <button className="cart-button primary-button">
            Add to cart
          </button>
        </div>
      </div>
      <div className="comments">
        <div className="comment-form">
          <h3 className="comments-title">Leave a review</h3>
          <CommentForm submitLabel="Send" handleSubmit={addComment} />
        </div>
        <div className="comments-container">
          {rootComments.map((rootComment) => (
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
              currentUserId={currentUserId}
              rating={avgReview} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;