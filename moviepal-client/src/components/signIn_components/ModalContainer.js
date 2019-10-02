import React, {useState , Button} from 'react'
import SignUp from './SignUp'
import Modal from 'react-bootstrap/Modal'

function ModalContainer (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

        return(
            <Modal show={show} 
            onHide = {handleClose}>
            <Modal.Header closeButton >
          </Modal.Header>
          <Modal.Body>
          <SignUp />
          </Modal.Body>
          <Modal.Footer>
            <Button variant = "secondary" onClick = {handleClose}>
              Close
            </Button>
            <Button variant = "primary" onClick = {handleClose}>
            Create username
            </Button>
          </Modal.Footer>
          </Modal>
        )
}

export default ModalContainer