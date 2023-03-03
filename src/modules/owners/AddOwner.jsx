import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openOrCloseAddOwnerModal, addOwner } from './action';

const AddOwner = () => {

  const [state, setState] = useState({
    name: '',
    contact: '',
    email: ''
  });

  const showModal = useSelector(state => state.ownersReducer.showModal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(openOrCloseAddOwnerModal(false));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  }
  const onAdd = () => {
    dispatch(addOwner(state));
  }

  return (
    <Modal show={showModal} id='add-owner' animation={true} onHide={() => closeModal()}>
      <Modal.Header>
        <h5>Add Owner</h5>
        <i className="fa fa-times" onClick={() => closeModal()} />        
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-floating my-2">
            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={state.name} onChange={handleInputChange} />
            <label htmlFor="name" className="bold">Name</label>

          </div>
          <div className="form-floating my-2">
            <input type="number" className="form-control" id="contact" name="contact" placeholder="Contact Number" value={state.contact} onChange={handleInputChange} />
            <label htmlFor="contact" className="bold">Contact Number</label>
          </div>
          <div className="form-floating my-2">
            <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={state.email} onChange={handleInputChange} />
            <label htmlFor="email" className="bold">Email</label>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-danger btn-sm" onClick={() => closeModal()}>Cancel</button>
          <button className="btn btn-outline-success btn-sm ms-3" onClick={() => onAdd()}>Add</button>
        </div>
      </Modal.Footer>
    </Modal>  
  );
};

export default AddOwner;
