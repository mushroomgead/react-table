import React from 'react'

class Filter extends React.Component {
  render() {
    return (
      <div className="left">
        <select>
          <option disabled>FILTER BAR: </option>
          <option>Header1</option>
          <option>Header2</option>
          <option>Header3</option>
          <option>Header4</option>
        </select>
      </div>
    )
  }
}

export default Filter
