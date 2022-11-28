import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import {Link} from "react-router-dom"

const FirstScreen = (props) => {
    const [countryName, setCountryName] = useState("")
    // const [first, setfirst] = useState(second)
    const [countryData, setCountryData] = useState([])
    const [viewCountryName, setViewCountryName] = useState("")
    // console.log("from props", props.countryData);
    // setCountryData(props.countryData);
    // console.log("from useState", countryData);
    const onChange = (e)=>{
        setCountryName(e.target.value);
        // console.log(e.target.value);
    }

    useEffect(()=> {
        setCountryData(props.countryData)
        setViewCountryName("")
        // console.log("from useState", countryData);
        
            // fetchData();
            // props.details();
            // console.log("inside useEffect ", countryData);
    }, [props])

    const fetchData = async (e)=>{
        e.preventDefault();
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        let [data] = await response.json();

        let name = data?.name.common;
        let officialName = data?.name.official;
        let lang = (Object.values(data?.languages));
        // .toString(",")
        // Object.values
        let flag = data?.flags.png;
        let currencies = Object.keys( data.currencies).toString();
        let region = data.region;
        let subregion = data.subregion;
        let location = data.maps.googleMaps;
        // console.log(location);

        let obj = {
            name: name,
            officialName: officialName,
            languages: lang,
            flag: flag,
            currency: currencies,
            region: region,
            subregion: subregion,
            location : location,
        }
        // setCountryData([...countryData, obj])

        // countryDataArray.push(obj);
        // console.log("Iniside setch", countryDataArray);
        setCountryName("")
        props.details(obj);

        // if (countryData.length != 0) {
        //     console.log(countryData.message === "Page Not Found");      
        //    
        // } else {
        //     // console.log("please enter the country name to proceed");
        // }

        setCountryData(props.countryData) 
        // console.log("from useState", countryData);
    }
    // console.log("outside setch", countryDataArray);

    const countryDetails = (name)=>{
        // console.log("country details", name);
        props.viewCountryName(name)
        // console.log(countryData[ind].flag);
    }

  return (

    <React.Fragment>
        <div className='d-flex align-items-center'>
            <div className='container'>
                <Form onSubmit={fetchData}>
                    <FormGroup>
                        <Label for="name">Enter Country Name : </Label>
                        <Input placeholder='Country Name' type='text' id='name' value={countryName} onChange={onChange}/>
                    </FormGroup>
                    <Button color="primary">Add Country</Button>
                </Form>
            </div>
        </div>
        <div className='container'>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Common Name</th>
                        <th>Official Name</th>
                        <th>anguages</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {countryData.length!==0 && countryData.map((ele, ind)=>{
                            return(
                            <tr id={ind} key={ind}> 
                                <th scope="row">{ind + 1}</th>
                                <td>{ele.name}</td>
                                <td>{ele.officialName}</td>
                                <td>{(ele.languages).toString(",")}</td>

                                <td><Button color='info' id={ind}
                                 onClick={()=>countryDetails(ele.name)} 
                                 ><Link to={`/details`}>View</Link> </Button></td>
                                 {/*    ------ check it ------->>>> /${ele.name} */}
                            </tr>
                            )
                        })}
                </tbody>
            </Table>
        </div>

    </React.Fragment>
  )
}
export default FirstScreen