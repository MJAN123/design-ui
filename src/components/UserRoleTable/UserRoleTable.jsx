import React, { Component } from 'react';

import DataTable from 'react-data-table-component';
import Card from '@material-ui/core/Card';
import SortIcon from '@material-ui/icons/ArrowDownward';
import movies from '../../utils/dummyData';

const columns = [
  {
    name: 'Role Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Role Type',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Role Periority',
    selector: 'runtime',
    sortable: true,
    right: true,
  },
];

class UserRoleTable extends Component {
  render() {
    return (
      <div className='role-table-container'>
        <div className='table-content'>
          <DataTable
            columns={columns}
            data={movies}
            defaultSortFieldId={1}
            sortIcon={<SortIcon />}
            pagination
          />
        </div>
      </div>
    );
  }
}

export default UserRoleTable;
