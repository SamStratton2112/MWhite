import List from './List';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

/** Component used to display list data, innitially showing the list name as a button and upon clicking will open into a full display of the list content. */

const ListModal = ({list, name})=>{
  //State used to determine if the modal should enter it's full display
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
        <Modal.Header style={{backgroundColor:"rgb(196, 40, 40)", border: 'none'}} closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"rgb(196, 40, 40)"}}>
          <List list={list}/>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"rgb(196, 40, 40)"}}>
          <button className='bttn' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListModal;