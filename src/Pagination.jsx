import React from 'react'
import Backward from '../assets/Backward.png'
import Forward from '../assets/Forward.png'

class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination">
        <div className="left">
          <select>
            <option disabled>FILTER BAR: </option>
            <option>Header1</option>
            <option>Header2</option>
            <option>Header3</option>
            <option>Header4</option>
          </select>
        </div>
        <div className="right">
          <div className="page-name">
            <select>
              <option disabled>rows: </option>
              <option>1 - 10</option>
              <option>11 - 20</option>
              <option>21 - 30</option>
              <option>30 - 40</option>
              <option>40 - 50</option>
            </select> of 46
          </div>
          <div className="box box-shadow">
            <img className="icon" src={Backward} />
          </div>
          <div className="box box-shadow">
            <img className="icon" src={Forward} />
          </div>
        </div>
      </div>
    )
  }
}

export default Pagination
