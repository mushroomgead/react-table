import React from 'react'
import Filter from './Filter.jsx'
import Pagination from './Pagination.jsx'
import DataTable from './DataTable.jsx'
import { header, rows } from './Data.js'

class Example extends React.Component {
  render() {
    return (
      <div>
        <div className="pagination">
          <Filter />
          <Pagination totalRecord={rows.length} />
        </div>
        <DataTable
          header={header}
          rows={rows}
          sorting={'asc'}
          fixHeader={true}
        />
    </div>
    )
  }
}
export default Example
