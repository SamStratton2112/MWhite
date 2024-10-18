import List from './List';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ListModal = ({list, name})=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="bttn" onClick={handleShow}>
        {name}
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <List list={list}/>
        </Modal.Body>
        <Modal.Footer>
          <button className='bttn' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListModal;