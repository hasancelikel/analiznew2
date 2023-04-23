import React from 'react'
import { useEffect, useState }  from 'react'
import './drc.css'


function Drc() {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const malzeme = JSON.parse(localStorage.getItem('selectedPersonData'));
    setUserData(malzeme);
  }, []);

 
   const today = new Date();
   const date = today.getDate() +'/'+
                (today.getMonth()+1) +'/'+
                today.getFullYear();
   const random = Math.floor(Math.random()*999999);
  const certno = "MTC" + today.getFullYear() + (today.getMonth() +1) + today.getDate() + random;
   
    return (
      <div className='date'>
     
        <table>
          <tr>
            <td><b>DATE:</b></td>
            <td> <input type='{text}'defaultValue={date} /></td>
          </tr>
          <tr>
            <td>PRODUCT NORM:</td>
            <td><input type='{text}' defaultValue={userData.produc}></input></td>
          </tr>
          <tr>
            <td>CERTIFICATE NO:</td>
            <td><input type='{text}' defaultValue={certno}></input></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>

      </div>
    )
  }

export default Drc