import React, { Component } from 'react';

import DataTable from 'react-data-table-component';
import Card from '@material-ui/core/Card';
import SortIcon from '@material-ui/icons/ArrowDownward';
import movies from '../../utils/dummyData';

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Directior',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Runtime (m)',
    selector: 'runtime',
    sortable: true,
    right: true,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};
class BookingsTable extends Component {
  render() {
    return (
      <div className='booking-table-container'>
        <div className='table-content'>
          <DataTable
            columns={columns}
            data={movies}
            defaultSortFieldId={1}
            sortIcon={<SortIcon />}
            pagination
            //customStyles={customStyles}
          />
        </div>
      </div>
    );
  }
}

export default BookingsTable;
