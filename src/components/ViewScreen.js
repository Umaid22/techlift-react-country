import React, { useEffect, useState } from 'react'
import LangModal from './LangModal'
// import {useParams} from "react-router-dom"

import { Card, CardBody, CardText } from 'reactstrap'

const ViewScreen = (props) => {
    // console.log("props from view screen", props.countryData);

    // const param = useParams();
    // console.log(param.name);


    // const {name} = props.countryData[0];
    const [countrySelectedData, setCountrySelectedData] = useState([])
    useEffect(() => {

        setCountrySelectedData([props.countryData]);

    }, [props.countryData])
    // console.log("proooops", props.countryData);

    // console.log("in thte view screen, it is receiving props",props.countryData);
    // console.log("received signle country data, in view screen ", countrySelectedData);
    // console.log("from view screen", name);
  return (
    <React.Fragment>
         <div className='container border border-dark p-4 d-flex align-item-center justify-content-center rounded bg-success'>
            
            {/* {console.log(countryData)} */}
            { countrySelectedData.length!==0 && countrySelectedData.map((ele, ind)=>{
                // console.log("these are languages in view screen",ele.languages);
                return(
                    <Card style={{ width: '18rem'}} key={ind}>
                        <img src={ele.flag} alt="Country Flag"  />
                        <CardBody>
                            <CardText><strong>Country Name : </strong>{ele.officialName}</CardText>
                            <CardText><strong>Currency : </strong>{ele.currency}</CardText>
                            <CardText><strong>Region : </strong>{ele.region}</CardText>
                            <CardText><strong>Subregion : </strong>{ele.subregion}</CardText>
                            <CardText><strong>Map of {ele.name} : </strong><a href={ele.location} target='_blank' rel='noreferrer'>Click here to navigate</a></CardText>
                            <CardText><strong>Languages : </strong> 
                            { String(ele.languages)}

                            <LangModal countryData={ele}/>
                            
                            </CardText>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    </React.Fragment>
  )
}

export default ViewScreen