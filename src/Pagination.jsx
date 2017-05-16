import React from 'react'
import propTypes from 'prop-types'
import Backward from '../assets/Backward.png'
import Forward from '../assets/Forward.png'

class Pagination extends React.Component {
  genRecord() {
    let component = []
    let recPerPage = 10
    let maxPage = Math.ceil(this.props.totalRecord/recPerPage)

    for (let page = 1; page <= maxPage; page++) {
      let recStart = recPerPage * (page - 1) + 1
      let recEnd = (page === maxPage)
      ? this.props.totalRecord : recPerPage * page
      component.push(<option>{`${recStart} - ${recEnd}`}</option>)
    }
    return component
  }
  render() {
    return (
      <div className="right">
        <div className="page-name">
          <select>
            <option disabled>rows: </option>
            { this.genRecord() }
          </select> of {this.props.totalRecord}
        </div>
        <div className="box box-shadow">
          <img className="icon" src={Backward} />
        </div>
        <div className="box box-shadow">
          <img className="icon" src={Forward} />
        </div>
      </div>
    )
  }
}

Pagination.propTypes = {
  totalRecord: propTypes.number
}

export default Pagination
