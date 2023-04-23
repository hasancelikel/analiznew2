import React from 'react'
import './mecanaliz.css'
import { useEffect, useState }  from 'react'
function Mecanaliz (props)  {
  
  const [userData1,setUserData1] = useState({});

  const setShowData = useState(false);
  const setShowData2 = useState(false);
  const setShowData3 = useState(false);
  const setShowData4 = useState(false);
 
  
  const  showDatashow = props.value1.length > 0;
  const showDatashow2 = props.value2.length > 0;
  const showDatashow3 = props.value3.length > 0;
  const showDatashow4 = props.value4.length > 0;
  
   
  const handleInputChange = (event) => {
    setShowData(event.target.value !== '');
   
  }
   
  const handleInputChange2 = (event) => {
    
    setShowData2(event.target.value !== '');
  }
   
  const handleInputChange3 = (event) => {
    
    setShowData3(event.target.value !== '');
  }
   
  const handleInputChange4 = (event) => {
    
    setShowData4(event.target.value !== '');
  }
  
  useEffect(() => {
    const malzeme = JSON.parse(localStorage.getItem('selectedPersonData'));
    setUserData1(malzeme);
  }, []);

  // Mec Analiz Random Oluşurma

  const mecbox1max = parseFloat(userData1.mecbox1max);
  const mecbox1min = parseFloat(userData1.mecbox1min);
  const mecbox2max = parseFloat(userData1.mecbox2max);
  const mecbox2min = parseFloat(userData1.mecbox2min);
  const mecbox3max = parseFloat(userData1.mecbox3max);
  const mecbox3min = parseFloat(userData1.mecbox3min);
  const mecbox4max = parseFloat(userData1.mecbox4max);
  const mecbox4min = parseFloat(userData1.mecbox4min);


  const mecbox1random= (Math.random() * (mecbox1max - mecbox1min) + mecbox1min).toFixed(1);
  const mecbox2random= (Math.random() * (mecbox2max - mecbox2min) + mecbox2min).toFixed(1);
  const mecbox3random= (Math.random() * (mecbox3max - mecbox3min) + mecbox3min).toFixed(1);
  const mecbox4random= (Math.random() * (mecbox4max - mecbox4min) + mecbox4min).toFixed(1);

    

  
  
    return (
      <div>

        <table className='analizhead'><h2><b>MECHANICAL PROPERTIES</b></h2>
        </table>
        <table className='mecbas'>
          <td className='analiz-mec'><b></b></td>
          <td className='analiz-mec'><b>TENSILE STRENGTH</b> <br />N/mm2(mPa)</td>
          <td className='analiz-mec'><b>YIELD STRENGTH</b> <br />N/mm2(mPa)</td>
          <td className='analiz-mec'><b>ELONGATION</b> <br />%</td>
          <td className='analiz-mec'><b>HARDNESS</b> <br />HB 10</td>

        </table>
        <table>
          <tr>
            <td className='mec-analiz'> <input className='mec-input-1' type='{text}' defaultValue={props.value1} onChange={handleInputChange}></input></td>
            <td className='mec-analiz'> {showDatashow  && <input className='mec-input' type='{text}'defaultValue={mecbox1random}/>}</td>
            <td className='mec-analiz'> {showDatashow && <input className='mec-input' type='{text}'defaultValue={mecbox2random}/>}</td>
            <td className='mec-analiz'> {showDatashow && <input className='mec-input' type='{text}'defaultValue={mecbox3random}/>}</td>
            <td className='mec-analiz'> {showDatashow && <input className='mec-input' type='{text}'defaultValue={mecbox4random}/>}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td className='mec-analiz'><input className='mec-input-1' type='{text}' defaultValue={props.value2} onChange={handleInputChange2}></input></td>
            <td className='mec-analiz'> {showDatashow2 && <input className='mec-input' type='{text}'defaultValue={mecbox1random}/>}</td>
            <td className='mec-analiz'> {showDatashow2 && <input className='mec-input' type='{text}'defaultValue={mecbox2random}/>}</td>
            <td className='mec-analiz'> {showDatashow2 && <input className='mec-input' type='{text}'defaultValue={mecbox3random}/>}</td>
            <td className='mec-analiz'> {showDatashow2 && <input className='mec-input' type='{text}'defaultValue={mecbox4random}/>}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td className='mec-analiz'> <input className='mec-input-1' type='{text}' defaultValue={props.value3} onChange={handleInputChange3}></input></td>
            <td className='mec-analiz'> {showDatashow3 && <input className='mec-input' type='{text}'defaultValue={mecbox1random}/>}</td>
            <td className='mec-analiz'> {showDatashow3 && <input className='mec-input' type='{text}'defaultValue={mecbox2random}/>}</td>
            <td className='mec-analiz'> {showDatashow3 && <input className='mec-input' type='{text}'defaultValue={mecbox3random}/>}</td>
            <td className='mec-analiz'> {showDatashow3 && <input className='mec-input' type='{text}'defaultValue={mecbox4random}/>}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td className='mec-analiz'> <input className='mec-input-1' type='{text}' defaultValue={props.value4} onChange={handleInputChange4}></input></td>
            <td className='mec-analiz'> {showDatashow4 && <input className='mec-input' type='{text}'defaultValue={mecbox1random}/>}</td>
            <td className='mec-analiz'> {showDatashow4 && <input className='mec-input' type='{text}'defaultValue={mecbox2random}/>}</td>
            <td className='mec-analiz'> {showDatashow4 && <input className='mec-input' type='{text}'defaultValue={mecbox3random}/>}</td>
            <td className='mec-analiz'> {showDatashow4 && <input className='mec-input' type='{text}'defaultValue={mecbox4random}/>}</td>
          </tr>
        </table>
        <table className='analizhead'>
        </table>

      </div>
    )
  }



export default Mecanaliz