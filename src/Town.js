import React , { useState ,useEffect } from 'react'




function Town() {

 /*
 
 element1: { box1: '%Cu', box2: '%Pb', box3: "%Sn",box4: '%Fe', box5: '%Ni', box6: "%Al" ,box7: '%Zn', box8: '	%Rem',produc: 'PİRİNÇ',
  
 //   Analiz Element Oranı 
   boxoran1max: ''  ,boxoran2max: '',boxoran3max: '',boxoran4max: '',boxoran5max: '',boxoran6max: '',boxoran7max: '',boxoran8max: '',
    boxoran1min: '',boxoran2min: '',boxoran3min: '',boxoran4min: '0',boxoran5min: '0',boxoran6min: '',boxoran7min: '',boxoran8min: '',
    //  MECHANICAL Analiz Oranı
     
    mecbox1max:' ' ,mecbox2max:'  ' ,mecbox3max:' ' ,mecbox4max:' ' ,
     mecbox1min:' ' ,mecbox2min:'  ' ,mecbox3min:' ' ,mecbox4min:' ' ,
  },         */

    const options = [
      { value: 'element1', label: 'Pirinç (CuZn39Pb3) ' },
      { value: 'element2', label: 'Bakır' },
      { value: 'element3', label: 'Alüminyum (6013 seri)' },
    ];
  
    const data = {
      // Elementler
     element1: { box1: '%Cu', box2: '%Pb', box3: "%Sn",box4: '%Fe', box5: '%Ni', box6: "%Al" ,box7: '%Rem', box8: '	%Zn',produc: 'CuZn39Pb3 (CW614N)',
   //   Analiz Element Oranı 
    boxoran1max: '59.0'  ,boxoran2max: '3',boxoran3max: '0.3',boxoran4max: '0.3',boxoran5max: '0.3',boxoran6max: '0.05',boxoran7max: '0.2',boxoran8max: '39.0',
    boxoran1min: '57.0',boxoran2min: '2.5',boxoran3min: '0',boxoran4min: '0',boxoran5min: '0',boxoran6min: '0',boxoran7min: '0',boxoran8min: '37.0',
    //  MECHANICAL Analiz Oranı
     mecbox1max:'400 ' ,mecbox2max:' 280 ' ,mecbox3max:'30' ,mecbox4max:' 100' ,
     mecbox1min:'390 ' ,mecbox2min:' 270 ' ,mecbox3min:' 25' ,mecbox4min:' 95' ,
  },

      element2: { box1: '%Cu', box2: '%P', box3: "%Pb",box4: '%Zn', box5: '%Fe', box6: "%S" ,box7: '%Ni', box8: '	%Rem',produc: 'BAKIR Cu(99.0)',
      
      boxoran1max: '99.6'  ,boxoran2max: '0.03',boxoran3max: '0.05',boxoran4max: '0.05',boxoran5max: '0.05',boxoran6max: '0.05',boxoran7max: '0.05',boxoran8max: '0.05',
       boxoran1min: '99.0',boxoran2min: '0',boxoran3min: '0',boxoran4min: '0',boxoran5min: '0',boxoran6min: '0',boxoran7min: '0',boxoran8min: '0',
      
       mecbox1max:'300 ' ,mecbox2max:' 300 ' ,mecbox3max:'60 ' ,mecbox4max:'100 ' ,
       mecbox1min:' 130' ,mecbox2min:' 200 ' ,mecbox3min:'30 ' ,mecbox4min:'300 ' ,
    },

      element3: { box1: '%Al', box2: '%Si', box3: "%Fe",box4: '%Cu', box5: '%Mn', box6: "%Mg" ,box7: '%Ti', box8: '	%Rem', produc: 'Alüminyum (6013) seri',
    
    boxoran1max: '97.0'  ,boxoran2max: '1.2',boxoran3max: '0.40',boxoran4max: '0.20',boxoran5max: '1.2',boxoran6max: '0.90',boxoran7max: '0.10',boxoran8max: '1.5',
    boxoran1min: '95.0',boxoran2min: '0.6',boxoran3min: '0.20',boxoran4min: '0',boxoran5min: '0.5',boxoran6min: '0.45',boxoran7min: '0',boxoran8min: '0',
    
    mecbox1max:'320' ,mecbox2max:' 170 ' ,mecbox3max:'18 ' ,mecbox4max:'120 ' ,
    mecbox1min:'290 ' ,mecbox2min:' 90 ' ,mecbox3min:'12' ,mecbox4min:'100 ' ,

  },
    };
  
  
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const [personData, setPersonData] = useState(data[selectedOption]);
  
    useEffect(() => {
      setPersonData(data[selectedOption]);
    }, [selectedOption]);
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    localStorage.setItem('selectedPersonData', JSON.stringify(data[selectedOption]));
    
    
    
    
    return  (
     <>
     

      <div style={{margin:'10px ' , borderRadius:'10px', placeContent:'10px'}} className='link-comp'> 
        <select style={{ padding: ' 4px '}} value={selectedOption} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
           
       
        
       <p style={{display:'none'}}>{personData.box1}</p>
           
            </div>
     
      
      
     </>
      
      
     
    )
  }
  
  export default Town;
 
 