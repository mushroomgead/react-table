import React from 'react'
import DataTable from './DataTable.jsx'
import { header, rows } from './Data.js'

class Example extends React.Component {
  render() {
    return (
      <DataTable
        header={header}
        rows={rows}
        sorting={'asc'}
        fixHeader={true}
      />
    )
  }
}
export default Example
