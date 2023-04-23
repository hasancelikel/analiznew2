import React from 'react';
import "./analiz.css"
import { useEffect, useState }  from 'react'
import Mecanaliz from './mecanaliz';
function Analiz() { 
  const [userData, setUserData] = useState({});

  const [showData, setShowData] = useState(false);
  const [showData2, setShowData2] = useState(false);
  const [showData3, setShowData3] = useState(false);
  const [showData4, setShowData4] = useState(false);
  const [showData5, setShowData5] = useState(false);
  const [showData6, setShowData6] = useState(false);
  
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

 

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setShowData(inputValue !== '');
    setValue1(event.target.value);
   
  }
  const handleInputChange2 = (event) => {
    const inputValue = event.target.value;
    setShowData2(inputValue !== '');
    setValue2(event.target.value);
  }
  const handleInputChange3 = (event) => {
    const inputValue = event.target.value;
    setShowData3(inputValue !== '');
    setValue3(event.target.value);
  }
  const handleInputChange4 = (event) => {
    const inputValue = event.target.value;
    setShowData4(inputValue !== '');
    setValue4(event.target.value);
   
  }
  const handleInputChange5 = (event) => {
    const inputValue = event.target.value;
    setShowData5(inputValue !== '');
   
  }
  const handleInputChange6 = (event) => {
    const inputValue = event.target.value;
    setShowData6(inputValue !== '');
   
  }

//Random değişkenler :)

const boxoran1max = parseFloat(userData.boxoran1max);
const boxoran1min = parseFloat(userData.boxoran1min);
const boxoran2max = parseFloat(userData.boxoran2max);
const boxoran2min = parseFloat(userData.boxoran2min);
const boxoran3max = parseFloat(userData.boxoran3max);
const boxoran3min = parseFloat(userData.boxoran3min);
const boxoran4max = parseFloat(userData.boxoran4max);
const boxoran4min = parseFloat(userData.boxoran4min);
const boxoran5max = parseFloat(userData.boxoran5max);
const boxoran5min = parseFloat(userData.boxoran5min);
const boxoran6max = parseFloat(userData.boxoran6max);
const boxoran6min = parseFloat(userData.boxoran6min);
const boxoran7max = parseFloat(userData.boxoran7max);
const boxoran7min = parseFloat(userData.boxoran7min);
const boxoran8max = parseFloat(userData.boxoran8max);
const boxoran8min = parseFloat(userData.boxoran8min);






const box1random = (Math.random() * (boxoran1max - boxoran1min) + boxoran1min).toFixed(4); 
const box2random = (Math.random() * (boxoran2max - boxoran2min) + boxoran2min).toFixed(4); 
const box3random = (Math.random() * (boxoran3max - boxoran3min) + boxoran3min).toFixed(4); 
const box4random = (Math.random() * (boxoran4max - boxoran4min) + boxoran4min).toFixed(4); 
const box5random = (Math.random() * (boxoran5max - boxoran5min) + boxoran5min).toFixed(4); 
const box6random = (Math.random() * (boxoran6max - boxoran6min) + boxoran6min).toFixed(4); 
const box7random = (Math.random() * (boxoran7max - boxoran7min) + boxoran7min).toFixed(4); 




const sum = parseFloat(box1random) + parseFloat(box2random) + parseFloat(box3random) + parseFloat(box4random) + parseFloat(box5random) + parseFloat(box6random) + parseFloat(box7random);
const rem = 100 - sum;
const box8random = (rem * (boxoran8max - boxoran8min) / (boxoran8max * 20  - boxoran8min* 20 ) + boxoran8min).toFixed(4) ;
const toplam = rem + sum 
const toplamfix = toplam.toFixed(2);
 



  useEffect(() => {
    const malzeme = JSON.parse(localStorage.getItem('selectedPersonData'));
    setUserData(malzeme);
  }, []);
 
  
    return (
      <div>

        <table className='analizhead'><h2><b>CHEMICAL ANALISYS</b></h2>
        </table>



        <table>

          <tr className='analiz-head1'>
            <td className='analiz-head2'><b>ELEMENTS</b></td>
            <td className='analiz-head'><b>{userData.box1}</b></td>
            <td className='analiz-head'><b>{userData.box2}</b></td>
            <td className='analiz-head'><b>{userData.box3}</b></td>
            <td className='analiz-head'><b>{userData.box4}</b></td>
            <td className='analiz-head'><b>{userData.box5}</b></td>
            <td className='analiz-head'><b>{userData.box6}</b></td>
            <td className='analiz-head'><b>{userData.box7}</b></td>
            <td className='analiz-head'><b>{userData.box8}</b></td>
            <td className='analiz-head'><b>%Total</b></td>
          </tr>
        </table>

        <table>

          <tr>
            <td className='analiz-text'> <input className='analiz-input1' type='{text}' defaultValue={value1}  onChange={handleInputChange}></input></td>
          
            <td className='analiz-text'>  {showData && <input className='analiz-input' type='{text}'defaultValue={box1random} />}</td>
            <td className='analiz-text'>  {showData && <input className='analiz-input' type='{text}'defaultValue={box2random}/>} </td>
            <td className='analiz-text'>  {showData && <input className='analiz-input' type='{text}'defaultValue={box3random}/>} </td>
            <td className='analiz-text'>  {showData && <input className='analiz-input' type='{text}'defaultValue={box4random}/>} </td>
            <td className='analiz-text'>  {showData && <input className='analiz-input' type='{text}'defaultValue={box5random}/>} </td>
            <td className='analiz-text'>  {showData && <input className='analiz-input' type='{text}'defaultValue={box6random}/>} </td>
            <td className='analiz-text'>  {showData && <input className='analiz-input' type='{text}'defaultValue={box7random}/>} </td>
            <td className='analiz-text'>  {showData && <input className='analiz-input' type='{text}'defaultValue={box8random}/>} </td>
            <td className='analiz-text'>  {showData && <input className='analiz-input' type='{text}'defaultValue={toplamfix}/>} </td>
            
          </tr>

        </table>
        <table>

          <tr>
            <td className='analiz-text'> <input className='analiz-input1' type='{text}'onChange={handleInputChange2}></input></td>
           
            <td className='analiz-text'>  {showData2 && <input className='analiz-input' type='{text}'defaultValue={box1random} />}</td>
            <td className='analiz-text'>  {showData2 && <input className='analiz-input' type='{text}'defaultValue={box2random}/>} </td>
            <td className='analiz-text'>  {showData2 && <input className='analiz-input' type='{text}'defaultValue={box3random}/>} </td>
            <td className='analiz-text'>  {showData2 && <input className='analiz-input' type='{text}'defaultValue={box4random}/>} </td>
            <td className='analiz-text'>  {showData2 && <input className='analiz-input' type='{text}'defaultValue={box5random}/>} </td>
            <td className='analiz-text'>  {showData2 && <input className='analiz-input' type='{text}'defaultValue={box6random}/>} </td>
            <td className='analiz-text'>  {showData2 && <input className='analiz-input' type='{text}'defaultValue={box7random}/>} </td>
            <td className='analiz-text'>  {showData2 && <input className='analiz-input' type='{text}'defaultValue={box8random}/>} </td>
            <td className='analiz-text'>  {showData2 && <input className='analiz-input' type='{text}'defaultValue={toplamfix}/>} </td>
          </tr>

        </table>
        <table>

          <tr>
            <td className='analiz-text'> <input className='analiz-input1' type='{text}'onChange={handleInputChange3}></input></td>
            <td className='analiz-text'>  {showData3 && <input className='analiz-input' type='{text}'defaultValue={box1random} />}</td>
            <td className='analiz-text'>  {showData3 && <input className='analiz-input' type='{text}'defaultValue={box2random}/>} </td>
            <td className='analiz-text'>  {showData3 && <input className='analiz-input' type='{text}'defaultValue={box3random}/>} </td>
            <td className='analiz-text'>  {showData3 && <input className='analiz-input' type='{text}'defaultValue={box4random}/>} </td>
            <td className='analiz-text'>  {showData3 && <input className='analiz-input' type='{text}'defaultValue={box5random}/>} </td>
            <td className='analiz-text'>  {showData3 && <input className='analiz-input' type='{text}'defaultValue={box6random}/>} </td>
            <td className='analiz-text'>  {showData3 && <input className='analiz-input' type='{text}'defaultValue={box7random}/>} </td>
            <td className='analiz-text'>  {showData3 && <input className='analiz-input' type='{text}'defaultValue={box8random}/>} </td>
            <td className='analiz-text'>  {showData3 && <input className='analiz-input' type='{text}'defaultValue={toplamfix}/>} </td>
           </tr>

        </table>
        <table>

          <tr>
            <td className='analiz-text'> <input className='analiz-input1' type='{text}'onChange={handleInputChange4}></input></td>
            <td className='analiz-text'>  {showData4 && <input className='analiz-input' type='{text}'defaultValue={box1random} />}</td>
            <td className='analiz-text'>  {showData4 && <input className='analiz-input' type='{text}'defaultValue={box2random}/>} </td>
            <td className='analiz-text'>  {showData4 && <input className='analiz-input' type='{text}'defaultValue={box3random}/>} </td>
            <td className='analiz-text'>  {showData4 && <input className='analiz-input' type='{text}'defaultValue={box4random}/>} </td>
            <td className='analiz-text'>  {showData4 && <input className='analiz-input' type='{text}'defaultValue={box5random}/>} </td>
            <td className='analiz-text'>  {showData4 && <input className='analiz-input' type='{text}'defaultValue={box6random}/>} </td>
            <td className='analiz-text'>  {showData4 && <input className='analiz-input' type='{text}'defaultValue={box7random}/>} </td>
            <td className='analiz-text'>  {showData4 && <input className='analiz-input' type='{text}'defaultValue={box8random}/>} </td>
            <td className='analiz-text'>  {showData4 && <input className='analiz-input' type='{text}'defaultValue={toplamfix}/>} </td>
         </tr>

        </table>
        <table>

          <tr>
            <td className='analiz-text'> <input className='analiz-input1' type='{text}'onChange={handleInputChange5}></input></td>
            <td className='analiz-text'>  {showData5 && <input className='analiz-input' type='{text}'defaultValue={box1random} />}</td>
            <td className='analiz-text'>  {showData5 && <input className='analiz-input' type='{text}'defaultValue={box2random}/>} </td>
            <td className='analiz-text'>  {showData5 && <input className='analiz-input' type='{text}'defaultValue={box3random}/>} </td>
            <td className='analiz-text'>  {showData5 && <input className='analiz-input' type='{text}'defaultValue={box4random}/>} </td>
            <td className='analiz-text'>  {showData5 && <input className='analiz-input' type='{text}'defaultValue={box5random}/>} </td>
            <td className='analiz-text'>  {showData5 && <input className='analiz-input' type='{text}'defaultValue={box6random}/>} </td>
            <td className='analiz-text'>  {showData5 && <input className='analiz-input' type='{text}'defaultValue={box7random}/>} </td>
            <td className='analiz-text'>  {showData5 && <input className='analiz-input' type='{text}'defaultValue={box8random}/>} </td>
            <td className='analiz-text'>  {showData5 && <input className='analiz-input' type='{text}'defaultValue={toplamfix}/>} </td>
           </tr>

        </table>
        <table>

          <tr>
            <td className='analiz-text'> <input className='analiz-input1' type='{text}'onChange={handleInputChange6}></input></td>
            <td className='analiz-text'>  {showData6 && <input className='analiz-input' type='{text}'defaultValue={box1random} />}</td>
            <td className='analiz-text'>  {showData6 && <input className='analiz-input' type='{text}'defaultValue={box2random}/>} </td>
            <td className='analiz-text'>  {showData6 && <input className='analiz-input' type='{text}'defaultValue={box3random}/>} </td>
            <td className='analiz-text'>  {showData6 && <input className='analiz-input' type='{text}'defaultValue={box4random}/>} </td>
            <td className='analiz-text'>  {showData6 && <input className='analiz-input' type='{text}'defaultValue={box5random}/>} </td>
            <td className='analiz-text'>  {showData6 && <input className='analiz-input' type='{text}'defaultValue={box6random}/>} </td>
            <td className='analiz-text'>  {showData6 && <input className='analiz-input' type='{text}'defaultValue={box7random}/>} </td>
            <td className='analiz-text'>  {showData6 && <input className='analiz-input' type='{text}'defaultValue={box8random}/>} </td>
            <td className='analiz-text'>  {showData6 && <input className='analiz-input' type='{text}'defaultValue={toplamfix}/>} </td>
           
            </tr>
          <tr>
            <td className='analiz-text analiz-test1'><b> REQUIRED DATA</b> </td>
            <td className='analiz-text analiz-test1'>MAX:{userData.boxoran1max} MİN:{userData.boxoran1min}</td>
            <td className='analiz-text analiz-test1'>MAX:{userData.boxoran2max} MİN:{userData.boxoran2min} </td>
            <td className='analiz-text analiz-test1'>MAX:{userData.boxoran3max} MİN:{userData.boxoran3min} </td>
            <td className='analiz-text analiz-test1'>MAX:{userData.boxoran4max} MİN:{userData.boxoran4min} </td>
            <td className='analiz-text analiz-test1'>MAX:{userData.boxoran5max} MİN:{userData.boxoran5min} </td>
            <td className='analiz-text analiz-test1'>MAX:{userData.boxoran6max} MİN:{userData.boxoran6min} </td>
            <td className='analiz-text analiz-test1'>MAX:{userData.boxoran7max} MİN:{userData.boxoran7min} </td>
            <td className='analiz-text analiz-test1'>MAX:{userData.boxoran8max} MİN:{userData.boxoran8min} </td>
            <td className='analiz-text analiz-test1'> </td>
          </tr>
        </table>
      <Mecanaliz value1={value1}
                  value2={value2}
                  value3={value3}
                value4={value4}  />
      </div>


    )
  }

export default Analiz