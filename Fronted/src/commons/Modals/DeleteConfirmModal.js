import React from "react";
import { Modal } from "react-bootstrap";

const DeleteConfirmModal = ({title, modalShow, setModalShow, deleteFunction}) => {
  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow} onHide={()=>setModalShow(false)}
    >
      <Modal.Body>
        <h4 className="modal-title fw-bold text-center">CONFIRMAR ACCIÓN</h4>
        <hr className="modal-hr" />
        <p className="text-center my-4">{title}</p>

        <div className="d-flex justify-content-end gap-3">
          <button onClick={()=>setModalShow(false)} className="cancel-btn fw-bold">
            <small>CANCELAR</small>
          </button>
          <button
            onClick={deleteFunction}
            className="confirm-btn fw-bold"
          >
            <small>CONFIRMAR</small>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteConfirmModal;
