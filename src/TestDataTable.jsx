import React from 'react'
import DataTable from './DataTable.jsx'

const header = [
  { key: 'key4', value: 'Header4' },
  { key: 'key1', value: 'Header1' },
  { key: 'key2', value: 'Header2' },
  { key: 'key3', value: 'Header3' },
]
const rows = [
  { key1: 2, key2: 15, key3: 28, key4: 41 },
  { key1: 1, key2: 14, key3: 27, key4: 40 },
  { key1: 3, key2: 16, key3: 29, key4: 42 },
  { key1: 4, key2: 17, key3: 30, key4: 43 },
  { key1: 5, key2: 18, key3: 31, key4: 44 },
  { key1: 6, key2: 19, key3: 32, key4: 45 },
  { key1: 8, key2: 21, key3: 34, key4: 47 },
  { key1: 7, key2: 20, key3: 33, key4: 46 },
  { key1: 9, key2: 22, key3: 35, key4: 48 },
  { key1: 11, key2: 24, key3: 37, key4: 50 },
  { key1: 10, key2: 23, key3: 36, key4: 49 },
  { key1: 12, key2: 25, key3: 38, key4: 51 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
  { key1: 13, key2: 26, key3: 39, key4: 52 },
]
class TestDataTable extends React.Component {
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
export default TestDataTable
