import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { COLUMNS } from './columns';
import ReservationTable from '../Components/ReservationTable';

const Reservation = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    fetch('/data/reservationList.json')
      .then(res => res.json())
      .then(res => {
        setReservationList(res.data);
      });
  }, []);

  const data = useMemo(() => reservationList, [reservationList]);

  return (
    <StyledReservation>
      <div className="reservation_container">
        <h3 className="reservation_title">병원 예약 내역 조회</h3>
        <ReservationTable columns={columns} data={data} />
      </div>
    </StyledReservation>
  );
};

const StyledReservation = styled.div`
  .reservation_container {
    width: 100%;
    margin: 100px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .reservation_title {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 16px;
    }
  }
`;

export default Reservation;
