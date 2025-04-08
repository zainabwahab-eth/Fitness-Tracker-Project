'use client'
import React, { useState } from 'react'
import './DeleteOverlay.css'
import { useDispatch } from 'react-redux'
import { deleteEntry } from './redux/fitnessSlice'

function DeleteOverlay({ deleteId, isOpen, onClose }) {
  const dispatch = useDispatch()

  if (!isOpen) return null

  const handleDelete = () => {
    dispatch(deleteEntry(deleteId))
    onClose()
  }

  return (
    <div className="delete-overlay">
      <div className="delete-content">
        <h2>Delete Workout</h2>
        <p>Are you sure you want to delete this workout?</p>
        <p className="warning">This action cannot be undone.</p>

        <div className="delete-buttons">
          <button className="cancel-delete" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteOverlay
