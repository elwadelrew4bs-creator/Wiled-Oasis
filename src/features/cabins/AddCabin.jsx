import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import React from 'react';


function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opensName="cabin-form">
            {({ onClick }) => <Button onClick={()=>onClick() }>Add new cabin</Button>}
        </Modal.Open>
        <Modal.Window name="cabin-form">
           {({ onCloseModal }) => <CreateCabinForm onCloseModal={onCloseModal} />}
        </Modal.Window>
      </Modal>
    </div>
  );  
}
export default AddCabin