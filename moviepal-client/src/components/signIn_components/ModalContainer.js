import React, {useState} from 'react'
import SignUp from './SignUp'
import { Modal, Button } from 'react-bootstrap'

function ModalContainer (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

        return(
          <div>
            <br></br>
            <Button className="btn btn-primary" name="toggleButton"
              // variant="link"
              onClick={handleShow}>
              Don't have an account? Sign Up!
            </Button>
            <Modal 
            // className= "btn btn-primary" 
            // fade= {false} 
            show={show} 
            onHide = {handleClose}>
              <Modal.Header closeButton >
                Sign Up!
              </Modal.Header>
              <Modal.Body>

              <SignUp />
              
              </Modal.Body>
              <Modal.Footer>
                {/* <Button onClick = {handleClose} className="btn btn-primary">
                  Close
                </Button> */}
                {/* <Button onClick = {handleClose} className="btn btn-primary">
                Create username
                </Button> */}
              </Modal.Footer>
            </Modal>
          </div>
        )
}

export default ModalContainer