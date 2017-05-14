import React from 'react';
import Pagination from './Pagination.jsx';
import TestDataTable from './TestDataTable.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Pagination />
        <TestDataTable />
      </div>
    );
  }
}

export default App;
