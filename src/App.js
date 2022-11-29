import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import FirstScreen from './components/FirstScreen';
import ViewScreen from './components/ViewScreen';
// import Modal1 from './components/Modal1';

function App() {

  const [countryData, setCountryData] = useState([])
  const [viewCountry, setViewCountry] = useState("")
  const [singleCountry, setSingleCountry] = useState([])
  
  const getData = (data)=>{
    countryData.push(data); 
    // console.log("comming from child to app.js", countryData);
  }
  const viewCountryName = (data)=>{
    // console.log("name111 receive in parent from the button clicked",data);
    setViewCountry(data);
    
  }
  // console.log("this is country clicked in app.js " , viewCountry);
  // console.log("check in app.js", countryData);

  useEffect(() => {

    countryData.filter((ele)=>{
      let compare = ele.name === viewCountry;
      if (compare === true) {
        // console.log(ele);
        setSingleCountry(ele);
        
      }
    })
  }, [viewCountryName])
  

  // console.log("single country from app.js" , singleCountry);

  
  return (
    <React.Fragment>
      <Router>
        <MyNavbar/>
        <Routes>
          <Route path='/' element={<FirstScreen details={getData} countryData={countryData} viewCountryName={viewCountryName}/>}/>

          <Route path='/details' element={<ViewScreen countryData={singleCountry}/>}/>
          {/*     -----check it --->>>>      /:name */}
        </Routes>
      </Router>
      
      {/* <Modal1/> */}
    </React.Fragment>
  );
}

export default App;