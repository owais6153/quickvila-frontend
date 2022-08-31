import Modal from 'react-bootstrap/Modal';
import Button from './form-elements/button';
const ModalPopup = (props) => {
    return (
    <Modal
      {...props}
      size={props.size}
      centered
    >
      {props.header &&<Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
        </Modal.Title>
      </Modal.Header>}
      <Modal.Body>
        {props.children}
      </Modal.Body>
      {props.footer && <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>}
    </Modal>
  );
}
export default ModalPopup;