import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./Button";
import { Modal } from "react-bootstrap";
import "../styles/popUpWindow.css";

interface PopUpFormProps {
  type: "Items" | "Steps";
  show: boolean;
  setShow: any;
}

export interface NewStepItemProps {
  name: string;
  count?: number;
  deadline?: string;
}

export const PopUpForm: React.FC<PopUpFormProps> = ({
  type,
  show,
  setShow,
}: PopUpFormProps) => {
  const handleClose = () => {
    setShow(false);
    reset({ name: "", count: 1, deadline: "" });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewStepItemProps>();

  const onSubmit: SubmitHandler<NewStepItemProps> = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <>
      <Modal className="popup-window" show={show} onHide={handleClose}>
        <Modal.Header className="popup__heading">
          <Modal.Title className="popup-form__heading--text">
            New {type}
          </Modal.Title>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          >
            &#x2715;
          </button>
        </Modal.Header>
        <Modal.Body className="popup__body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="add__step_item">
              <label className="label__name" htmlFor="name">
                Name:
              </label>
              <input
                className="input-text name-input"
                type="text"
                {...register("name", {
                  required: "Please fill out item name",
                })}
              />

              {errors.name && (
                <span className="error-message">
                  {"Please enter a valid name"}
                </span>
              )}

              {type === "Items" && (
                <>
                  <label className="label__count" htmlFor="count">
                    Count:
                  </label>

                  <input
                    className="input-text cost-input"
                    type="number"
                    step="1"
                    min="1"
                    {...register("count", {
                      required: "Please fill out count",
                      pattern: {
                        value: /\d+/,
                        message: "Please enter a number",
                      },
                    })}
                  />
                  {errors.count && (
                    <span className="error-message">
                      {"Please enter a number"}
                    </span>
                  )}
                </>
              )}

              {type === "Steps" && (
                <>
                  <label className="label__deadline" htmlFor="deadline">
                    Deadline:
                  </label>

                  <input
                    className="input-text deadline-input"
                    type="date"
                    /*min={new Date().toISOString()}*/
                    {...register("deadline", {
                      required: "Please fill out deadline",
                    })}
                  />
                  {errors.deadline && (
                    <span className="error-message">
                      {"Please enter a deadline"}
                    </span>
                  )}
                </>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="pupup__buttons">
          <Button
            size="wide"
            color="orange"
            label={"Add " + type}
            eventProp={handleSubmit(onSubmit)}
          />
          <Button
            size="primary"
            color="gray"
            label="Cancel"
            eventProp={handleClose}
          />
        </Modal.Footer>
      </Modal>
      {show && <div className="popup-backdrop" />}
    </>
  );
};
