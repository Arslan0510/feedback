import React from "react";
import {Modal} from "react-bootstrap";

const TechStackModal = ({arrDev, modalIsOpen, setModalIsOpen, techName}) => {
  return (
    <Modal
      show={modalIsOpen}
      onHide={() => setModalIsOpen(false)}
      size='lg'
      className='template-modal'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title>Developers</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Tech</th>
            </tr>
          </thead>
          <tbody>
            {arrDev.length > 0 ? (
              arrDev.map((dev, i) => (
                <tr key={dev._id}>
                  <th scope='row'>{i + 1}</th>
                  <td>{dev}</td>
                  <td>{techName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <th scope='row'>1</th>
                <td>No developer found</td>
                <td>{techName}</td>
              </tr>
            )}
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
};

export default TechStackModal;
