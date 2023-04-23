import { useEffect, useState }  from 'react'
import './mettest.css'



      
   

function Mettest() {

  const [inputValue, setinputValue] = useState('');
  const [adres,setadres] = useState("");
  const [tel,settel] = useState("");
  const [mail,setmail] = useState("");
  const [vergi,setvergi] = useState("");
  const [vergid,setvergid] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem('inputValue');
    setinputValue(storedData);

    const storedDataAdres = localStorage.getItem('adres');
  setadres(storedDataAdres);

    const storedDatatel = localStorage.getItem('tel');
    settel(storedDatatel);

  const storedDatamail = localStorage.getItem('mail');
  setmail(storedDatamail);

  const storedDatavergi = localStorage.getItem('vergi');
  setvergi(storedDatavergi);

  const storedDatavergid = localStorage.getItem('vergid');
  setvergid(storedDatavergid);
  },
  
  []);

   
  
    return (
      <div >
        <table className='mettes'><h1>MATERIAL TEST CERTIFICATE</h1></table>
        <br/>



        <table className='customer'>
       <tr>
        <th className='cus1'>CUSTOMERS:</th>
        <td className='cus2'><input className='cusinput' type='text' defaultValue={inputValue} ></input></td>
       </tr>
       <tr>
        <th className='cus1'>ADDRESS:</th>
        <td className='cus2'><input className='cusinput' type='text' defaultValue={adres} ></input></td>
       </tr>
        </table>



        <table className='info'>
        <tr>
        <th className='info1'>TEL NO:</th>
        <td className='info2'><input className='infoinput' type='text' defaultValue={tel}></input></td>
       </tr>
       <tr>
        <th className='info1'>MAIL:</th>
        <td className='info2'><input className='infoinput' type='mail' defaultValue={mail}></input></td>
       </tr>
       <tr>
        <th className='info1'>VKN:</th>
        <td className='info2'><input className='infoinput' type='text' defaultValue={vergi}></input></td>
       </tr>
       <tr>
        <th className='info1'>V.D.:</th>
        <td className='info2'><input className='infoinput' type='text' defaultValue={vergid}></input></td>
       </tr>


        </table>

      </div>
     
    )
  }


export default Mettest