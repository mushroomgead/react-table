import React from 'react'
import Table from './Table.jsx'
import { header, rows } from './Data.js'

class Example extends React.Component {
  render() {
    return (
      <div>
        <Table
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
