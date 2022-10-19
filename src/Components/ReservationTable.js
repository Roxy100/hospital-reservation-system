import React from 'react';
import styled from 'styled-components';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import ReservationSearch from './ReservationSearch';

const ReservationTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  return (
    <StyledReservationTable>
      <div className="reservation_table">
        <ReservationSearch onSubmit={setGlobalFilter} />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledReservationTable>
  );
};

const StyledReservationTable = styled.div`
  .reservation_table {
    width: 600px;
    height: 600px;
    padding: 16px;
    border: 5px solid black;
    border-radius: 30px;

    table {
      border-collapse: collapse;
      width: 100%;
    }

    table td,
    table th {
      border: 2px solid black;
      padding: 8px;
      text-align: center;
    }

    table th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      background-color: #ffd0b0;
      color: black;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export default ReservationTable;
