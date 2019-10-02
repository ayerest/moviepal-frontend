import React, {useState} from 'react'
import SignUp from './SignUp'
import { Modal, Button } from 'react-bootstrap'

function ModalContainer (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

        return(
          <div>
            <Modal style ={{opacity:1}} fade= {false} show={show} 
            onHide = {handleClose}>
            <Modal.Header closeButton >
          </Modal.Header>
          <Modal.Body>

          <SignUp />
          
          </Modal.Body>
          <Modal.Footer>
            <Button onClick = {handleClose}>
              Close
            </Button>
            <Button onClick = {handleClose}>
            Create username
            </Button>
          </Modal.Footer>
          </Modal>
          </div>
        )
}

export default ModalContainer