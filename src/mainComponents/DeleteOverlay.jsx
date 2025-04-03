import React, { useState } from "react";
import "./overlay.css";
import { useDispatch } from "react-redux";
import { deleteEntry } from "./redux/fitnessSlice";

function DeleteOverlay({ isOpen, onClose, deleteId }) {
  if (!isOpen) return null;

  const dispatch = useDispatch();

  const handleDeleteEntry = () => {
    dispatch(deleteEntry(deleteId));
    onClose();
  };

  return (
    <div className="delete-overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <h3>Are you sure you want to delete this</h3>
        <div className="button-cntn">
          <button className="sec-button" onClick={onClose}>
            Go Back
          </button>
          <button className="pri-button" onClick={handleDeleteEntry}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteOverlay;
