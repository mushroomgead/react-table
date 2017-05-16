import React from 'react'
import propTypes from 'prop-types'
import SortDown from '../assets/SortDown.png'
import Sortup from '../assets/Sortup.png'

class DataTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sorting: true,
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

  handleSorting(index, header, rows){
    const typeSort = this.state.sorting
    this.setState({ sorting: !this.state.sorting })

    const newRow = rows.sort(function (x, y) {
      if(x[header[index].key] > y[header[index].key]) {
        return (typeSort) ? 1 : -1
      } else if (x[header[index].key] < y[header[index].key]) {
        return (typeSort) ? -1 : 1
      }
    })
    this.generateBody(header, newRow, this.state.sorting)
  }

  generateBody(header, rows) {
    if(rows.length !== 0) {
      return rows.map((itemList, i) => {
        const rows = header.map((headerList, j) => {
          const value = itemList[headerList.key]
          return (<td key={j}>{value}</td>)
        })
        return (<tr key={i}>{rows}</tr>)
      })
    } else {
      return (<tr><td>ไม่พบ record</td></tr>)
    }
  }
  render() {
    const { header, rows } = this.props
    const tbody = this.generateBody(header, rows, this.state.sorting)
    return (
      <table className="table">
        <thead>
          {this.generateHeader(header, rows)}
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </table>
    )
  }
}
DataTable.propTypes = {
  header: propTypes.array,
  rows: propTypes.array,
  sorting: propTypes.string,
  fixHeader: propTypes.bool,
}
export default DataTable
