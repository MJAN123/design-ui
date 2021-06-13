import React from 'react';
import styled from 'styled-components';

import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGroupBy,
  useExpanded,
  useRowSelect,
} from 'react-table';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import matchSorter from 'match-sorter';
import MenuItem from '@material-ui/core/MenuItem';
import MultiSelect from 'react-multi-select-component';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SearchInput from '../Common/SearchInput';
import CustomButton from '../Common/CustomButton';
import UserRoleTable from '../UserRoleTable/UserRoleTable';
import makeData from '../makeData';
const Styles = styled.div`
  padding: 1rem;
`;

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <SearchInput
      value={filterValue}
      onChange={(e) => setFilter(e || undefined)}
    />
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {}

fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({ columns, data, updateMyData, skipReset }) {
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,

      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
      // And also our default editable cell
      //Cell: EditableCell,
    }),
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize,
      sortBy,
      groupBy,
      expanded,
      filters,
      selectedRowIds,
    },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      disableMultiSort: true,
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
    // Here we will use a plugin to add our selection column
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div>
                    <span {...column.getSortByToggleProps()}>
                      {column.render('Header')}
                      {/* Add a sort direction indicator */}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </div>
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className='table-body'>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.isGrouped ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                          <span {...row.getToggleRowExpandedProps()}>
                            {row.isExpanded ? '👇' : '👉'}
                          </span>{' '}
                          {cell.render('Cell', { editable: false })} (
                          {row.subRows.length})
                        </>
                      ) : cell.isAggregated ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        cell.render('Aggregated')
                      ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                        // Otherwise, just render the regular cell
                        cell.render('Cell', { editable: true })
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/*
        Pagination can be built however you'd like.
        This is just a very basic UI implementation:
      */}
      <div className='pagination'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

filterGreaterThan.autoRemove = (val) => typeof val !== 'number';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <div>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

function UserManagement() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'User ID',
        accessor: 'user-id',
        aggregate: 'count',

        Aggregated: ({ value }) => `${value} Names`,
      },
      {
        Header: 'Full Name',
        accessor: 'firstName',
        aggregate: 'count',

        Aggregated: ({ value }) => `${value} Names`,
      },
      {
        Header: 'Country',
        accessor: 'country',
        aggregate: 'count',

        Aggregated: ({ value }) => `${value} Names`,
      },
      {
        Header: 'City',
        accessor: 'city',
        aggregate: 'count',

        Aggregated: ({ value }) => `${value} Names`,
      },
      {
        Header: 'Street',
        accessor: 'street',
        aggregate: 'count',
        Filter: '',
        Aggregated: ({ value }) => `${value} Names`,
      },
      {
        Header: 'Postal#',
        accessor: 'postalcode',
        Filter: '',
        aggregate: 'count',
        Aggregated: ({ value }) => `${value} Names`,
      },
      {
        Header: 'Phone#',
        accessor: 'phonenumber',
        Filter: '',
        aggregate: 'count',

        Aggregated: ({ value }) => `${value} Names`,
      },
      {
        Header: 'DOB',
        accessor: 'bob',
        Filter: '',
        aggregate: 'count',

        Aggregated: ({ value }) => `${value} Names`,
      },
      {
        Header: 'Sex',
        accessor: 'gender',
        Filter: '',
        aggregate: 'count',

        Aggregated: ({ value }) => `${value} Names`,
      },

      {
        Header: 'Updated By',
        accessor: 'lastmodifiedby',
        Filter: '',
        aggregate: 'uniqueCount',
        Aggregated: ({ value }) => `${value} Unique Names`,
      },
      {
        Header: 'updated At',
        accessor: 'lastmodifiedtime',
        Filter: '',
        aggregate: 'uniqueCount',
        Aggregated: ({ value }) => `${value} Unique Names`,
      },

      {
        Header: 'Login',
        accessor: 'lastlogintime',
        Filter: '',
        aggregate: 'uniqueCount',
        Aggregated: ({ value }) => `${value} Unique Names`,
      },

      {
        Header: 'Email',
        accessor: 'emailaddress',
        Filter: '',
        aggregate: 'uniqueCount',
        Aggregated: ({ value }) => `${value} Unique Names`,
      },

      {
        Header: 'Created At',
        accessor: 'createdat',
        Filter: '',
        aggregate: 'uniqueCount',
        Aggregated: ({ value }) => `${value} Unique Names`,
      },

      {
        Header: 'User Role',
        accessor: 'user-role',
        Filter: '',
        aggregate: 'uniqueCount',
        Aggregated: ({ value }) => `${value} Unique Names`,
        Cell: ({ cell }) => (
          <>
            {/* {getUserRoles()} */}
            <MultiSelect
              options={roles}
              value={select}
              onChange={(e) => {
                setSelect(...e);
              }}
              labelledBy='Instrument..'
            />
          </>
        ),
      },

      {
        Header: 'Status',
        accessor: 'status',
        Filter: '',
        //filter: 'includes',
        Cell: ({ cell }) => (
          <>
            {/* TODO: Add dynamic data of status */}
            <select>
              <option value='approve'>approve</option>
              <option value='pending'>pending</option>
              <option value='reject'>reject</option>
            </select>
          </>
        ),
      },
      {
        Header: 'Action',
        accessor: '',
        Filter: '',
        Cell: ({ cell }) => (
          <div className='row-button'>
            <CustomButton
              btnText='Approve'
              handleClick={() => this.handleRoute()}
            />

            <CustomButton
              variant='contained'
              btnText='Reject'
              className='text-red'
              handleClick={() => this.handleRoute()}
            />
          </div>
        ),
      },
    ],
    []
  );

  const [data, setData] = React.useState(() => makeData(10000));
  const [originalData] = React.useState(data);
  const [tabValue, setTabValue] = React.useState(0);
  const [roles, setRoles] = React.useState([
    { label: 'Grapes 🍇', value: 'grapes' },
    { label: 'Mango 🥭', value: 'mango' },
    { label: 'Strawberry 🍓', value: 'strawberry', disabled: true },
    { label: 'Watermelon 🍉', value: 'watermelon' },
    { label: 'Pear 🍐', value: 'pear' },
    { label: 'Apple 🍎', value: 'apple' },
    { label: 'Tangerine 🍊', value: 'tangerine' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Peach 🍑', value: 'peach' },
  ]);
  const [select, setSelect] = React.useState([]);

  return (
    <div className='user-table-container'>
      <Styles>
        <AppBar position='static'>
          <div className='tabs'>
            <div
              className={`user-data ${tabValue === 0 && 'bottom-border'}`}
              onClick={() => {
                setTabValue(0);
              }}
            >
              User Data
            </div>
            <div
              className={`user-role ${tabValue === 1 && 'bottom-border'}`}
              onClick={() => {
                setTabValue(1);
              }}
            >
              User Role
            </div>
          </div>
        </AppBar>

        {!tabValue ? (
          <div className='react-table'>
            <Table columns={columns} data={data} />
          </div>
        ) : (
          <UserRoleTable />
        )}
      </Styles>
    </div>
  );
}

export default UserManagement;
