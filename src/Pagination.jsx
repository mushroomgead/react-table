import React from 'react'
import propTypes from 'prop-types'
import Backward from '../assets/Backward.png'
import Forward from '../assets/Forward.png'

class Pagination extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
  }
  genRecord() {
    let component = []
    const { totalRecord, recPerPage } = this.props
    let maxPage = Math.ceil(totalRecord/recPerPage)

    for (let page = 1; page <= maxPage; page++) {
      let recStart = recPerPage * (page - 1) + 1
      let recEnd = (page === maxPage) ? totalRecord : recPerPage * page
      component.push(<option key={page} value={page}>{`${recStart} - ${recEnd}`}</option>)
    }
    return component
  }
  handleChange(e) {
    this.props.onSelected(e.target.value)
  }
  handleBack() {
    if(this.state.page > 1) {
      let newPage = this.state.page - 1
      this.setState({ page: newPage })
    }
    this.props.onSelected(this.state.page)
  }
  handleForward() {
    let maxPage = Math.ceil(100/10)
    if(this.state.page < maxPage) {
      let newPage = this.state.page + 1
      this.setState({ page: newPage })
    }
    this.props.onSelected(this.state.page)
  }
  render() {
    return (
      <div className="right">
        <div className="page-name">
          <select onChange={(e) => this.handleChange(e)}>
            <option disabled>rows: </option>
            { this.genRecord() }
          </select> of {this.props.totalRecord}
        </div>
        <div className="box box-shadow" onClick={() => this.handleBack()}>
          <img className="icon" src={Backward} />
        </div>
        <div className="box box-shadow" onClick={() => this.handleForward()}>
          <img className="icon" src={Forward} />
        </div>
      </div>
    )
  }
}

Pagination.propTypes = {
  totalRecord: propTypes.number,
  recPerPage: propTypes.number,
  onSelected: propTypes.func,
}

export default Pagination
