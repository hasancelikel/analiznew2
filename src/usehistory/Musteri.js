import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './musteri.css'
function Musteri() {
  const [inputValue, setInputValue] = useState('');
  const [adres,setadres] = useState("");
  const [tel,settel] = useState("");
  const [mail,setmail] = useState("");
  const [vergi,setvergi] = useState("");
  const [vergid,setvergid] = useState("");
  const history = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('inputValue', inputValue);
    localStorage.setItem('adres', adres);
    localStorage.setItem('tel', tel);
    localStorage.setItem('mail', mail);
    localStorage.setItem('vergi', vergi);
    localStorage.setItem('vergid', vergid);
    history({
      pathname: '/App',
      state: { 
        inputValue : inputValue,
        tel : tel,
        mail : mail,
        vergi : vergi,
        vergid : vergid
        
    
    },
      
    });
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    
  }
  function handleInputChangeadres(event) {
    setadres(event.target.value);
   
  }
  function handleInputChangetel(event) {
    settel(event.target.value);
 
  }
  function handleInputChangemail(event) {
    setmail(event.target.value);
    
  }
  function handleInputChangevergi(event) {
    setvergi(event.target.value);
   
  }
  function handleInputChangevergid(event) {
    setvergid(event.target.value);
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='musteriinput'placeholder='Müşteri İsim Soyisim' type="text" value={inputValue} onChange={handleInputChange} />
      <input className='musteriinput' placeholder='Müşteri Adres' type='text' value={adres} onChange={handleInputChangeadres}/>
      <input className='musteriinput' placeholder='Müşteri Telefon' type='text' value={tel} onChange={handleInputChangetel}/>
      <input className='musteriinput' placeholder='Müşteri Mail' type='text' value={mail} onChange={handleInputChangemail}/>
      <input className='musteriinput' placeholder='Müşteri Vergi Numarası' type='text' value={vergi} onChange={handleInputChangevergi}/>
      <input className='musteriinput' placeholder='Müşteri Vergi Dairesi' type='text' value={vergid} onChange={handleInputChangevergid}/>
      <button className='formsubmit' type="submit">Gönder</button>
    </form>
  );
}
export default Musteri