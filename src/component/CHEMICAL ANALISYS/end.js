import React, { Component } from 'react'
import "./end.css"


export default class End extends Component {
  
  render() {
    return (
      <div className='end-head'><div className='note-head'>
        
        <table>
          <td className='note'><b>NOTES: </b></td>
        </table>
        <table>
          <td className='note'><b>PHYSICAL PROPERTIES</b></td>
        </table>
      </div>
        <div className='note-cont'>
          <table className='note-border'>
            <textarea className='note-area'></textarea>

          </table>
          <table className='cont-pro'>
            <tr>
              <td className='cont-bas'>CONTROLLED PROPERTIES</td>
              <td className='cont-che'>RJ.</td>
              <td className='cont-che'>ACC.</td>

            </tr>
            <tr>
              <td className='ph-word'>SURFACE CONTROL</td>
              <td className='ph-opti'></td>
              <td className='ph-opti'>√</td>

            </tr> <tr>
              <td className='ph-word'>DIMENSION CONTROL</td>
              <td className='ph-opti'></td>
              <td className='ph-opti'>√</td>

            </tr>
            <tr>
              <td className='ph-word'>MARKING CONTROL</td>
              <td className='ph-opti'></td>
              <td className='ph-opti'>√</td>

            </tr>

            
          </table>
          
        </div>
        
        <br />
          <table className='end'>
            <p>QUALITY APPROVAL</p>
          </table>

      </div>
    )
  }
}
