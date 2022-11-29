import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const LangModal = ({countryData}) => {

  const [modal, setModal] = useState(false);
  const [singleCountryData, setSingleCountryData] = useState([])
  const [newLanguage, setNewLanguage] = useState("")
  const [languagesArray, setLanguagesArray] = useState([])
  const [addErrorButton, setaddErrorButton] = useState("none")


    useEffect( () => {
      countryData.length!==0 && setSingleCountryData([countryData]);
      setLanguagesArray(countryData.languages)
    }, [countryData])


    // useEffect(() => {
    //   singleCountryData.length!==0 && setLanguagesArray([singleCountryData.languages])
    // }, [singleCountryData])


    // console.log("in the modal country data", singleCountryData);
    // console.log("check languages array", languagesArray);

    const onchange = (e)=>{
      // console.log(e.target.value);
      setNewLanguage(e.target.value)
      // console.log(newLanguage);
    }
    const addLanguage = ()=>{
      if(newLanguage.length > 1){
        languagesArray.push(newLanguage)
        setaddErrorButton("none")
        setNewLanguage("")
      }else{
        setaddErrorButton("block")
        setTimeout(() => {
          setaddErrorButton("none")
        }, 3000); 
      }
     console.log(newLanguage);
    //  console.log(languagesArray);
    //  setLanguagesArray(newArray)
     console.log("updated languages array",languagesArray);
    }
  

    const deleteFromArray = (ind)=>{
      console.log(ind);
      languagesArray.splice(ind,1);
      console.log(languagesArray);
      // setLanguagesArray(languagesArray)
    }

    const updateLang = ()=>{
     console.log("updat lang");   
    //  setLang()
    }

    const toggle = () => setModal(!modal);
    const closeBtn = (
      <button className="close" onClick={toggle} type="button">
        &times;
      </button>
    );

    
  return (
    <React.Fragment>
        
      <Button color="danger" onClick={toggle}>
      Edit Languages
      </Button>
      <Modal isOpen={modal} toggle={toggle} annimation="false">

        { singleCountryData.lengtgh !==0 && singleCountryData.map((ele, ind)=>{
          // console.log("it is in map array",ele);
          // console.log(ele.languages);
          // setLanguagesArray(ele.languages);


          return(
            <div key={ind}>  
              <ModalHeader toggle={toggle} close={closeBtn}>Languages of "{ele.officialName}" :</ModalHeader>

{/* ----------------------------------- */}

              <ModalBody>
              {languagesArray.map((item, ind)=>{
                console.log("languages array map in modal",item);
                return(
                  <div className='bg-info m-2 p-1'>
                    <span className='m-2 p-3 ' key={ind}>{ind + 1} :<strong> {item}</strong></span> 
                    <Button onClick={()=>deleteFromArray(ind)} className='ms-4' color="danger" outline>X</Button>
                    </div>
                  )
              })}
              <div>
                <FormGroup className='m-4'>
                  <Label for="name">Enter Country Name : </Label>
                  <Input onChange={onchange} placeholder='Add new language' type='text'/>
                </FormGroup>
                <p className={`text-danger ms-4 d-${addErrorButton}`} id='buttonDanger'>Please enter valid name</p>
                <Button className='ms-4' color="success" onClick={addLanguage}>Add Language</Button>
              </div>
              </ModalBody>
{/* ----------------------------------- */}
              <ModalFooter>
              <Button color="primary" onClick={updateLang}>
                  Update Languages
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                  Cancel
              </Button>
              </ModalFooter> 
            </div>
          )
        }) }

      </Modal>

    </React.Fragment>
  )
}

export default LangModal