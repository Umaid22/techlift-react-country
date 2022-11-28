import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LangModal = (props) => {

    const { languages, officialName } = props.details;
    const [lang, setLang] = useState(languages)
    // console.log(languages);
    // console.log(lang);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  
    const closeBtn = (
      <button className="close" onClick={toggle} type="button">
        &times;
      </button>
    );

    const updateLang = ()=>{
     console.log("updat lang");   
     setLang()
    }
  return (
    <React.Fragment>
        
      <Button color="danger" onClick={toggle}>
      Add Languages
      </Button>
      <Modal isOpen={modal} toggle={toggle} annimation="false">
        <ModalHeader toggle={toggle} close={closeBtn}>Languages of "{officialName}" :</ModalHeader>
        <ModalBody>
        {lang.map((ele)=>{
          console.log(ele);
          return(
            <div><Button color='secondary' outline className='m-2'> {ele}</Button></div>
          )
        })}
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={updateLang}>
            Update Languages
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
            Cancel
        </Button>
        </ModalFooter>
      </Modal>

    </React.Fragment>
  )
}

export default LangModal