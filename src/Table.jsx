import React from 'react'
import propTypes from 'prop-types'
import Filter from './Filter.jsx'
import Pagination from './Pagination.jsx'
import DataTable from './DataTable.jsx'
import SortDown from '../assets/SortDown.png'
import Sortup from '../assets/Sortup.png'

class Table extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sorting: true,
      page: 1,
    }
  }
  generateHeader(header, rows) {
    let ThComponent = []

    for(let i = 0; i < header.length; i++) {
      ThComponent.push(
        <th key={i} onClick={() => this.handleSorting(i, header, rows)}>{header[i].value}
          <img className="icon-sort" src={ this.state.sorting ? SortDown : Sortup } />
        </th>
      )
    }
    return (
      <tr>{ ThComponent }</tr>
    )
  }
  getCurrentPage(newpage) {
    this.setState({ page: newpage })
  }
  handleSorting(index, header, rows){
    const typeSort = this.state.sorting
    this.setState({ sorting: !this.state.sorting, page: 1 })
    const newRow = rows.sort(function (x, y) {
      if(x[header[index].key] > y[header[index].key]) {
        return (typeSort) ? 1 : -1
      } else if (x[header[index].key] < y[header[index].key]) {
        return (typeSort) ? -1 : 1
      }
    })
    this.generateBody(header, newRow, this.state.sorting)
  }

  generateBody(header, rows, sort, page) {
    let recPerPage = 10
    if (rows.length !== 0) {
      return rows.map((itemList, i) => {
        let recStart = recPerPage * (page - 1)
        let recEnd = (recPerPage * page) - 1
        if (i >= recStart && i <= recEnd){
          const rows = header.map((headerList, j) => {
            const value = itemList[headerList.key]
            return (<td key={j}>{value}</td>)
          })
          return (<tr key={i}>{rows}</tr>)
        }
      })
    } else {
      return (<tr><td>ไม่พบ record</td></tr>)
    }
  }
  render() {
    const { header, rows } = this.props
    const { page } = this.state
    const tbody = this.generateBody(header, rows, this.state.sorting, page)
    return (
      <div>
        <div className="pagination">
          <Filter />
          <Pagination totalRecord={rows.length} recPerPage={10} onSelected={(page) => this.getCurrentPage(page)} />
        </div>
        <table className="table">
          <thead>
            { this.generateHeader(header, rows) }
          </thead>
          <tbody>
            {tbody}
          </tbody>
        </table>
      </div>
    )
  }
}
DataTable.propTypes = {
  header: propTypes.array,
  rows: propTypes.array,
  sorting: propTypes.string,
  fixHeader: propTypes.bool,
}
export default Table
