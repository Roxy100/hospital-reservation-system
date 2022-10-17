import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

import ScheduleList from '../Components/ScheduleList';

const Schedule = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const navigate = useNavigate();

  // 이 날짜들만 선택할 수 있음.
  const includeDates = [
    new Date(2022, 9, 21),
    new Date(2022, 9, 24),
    new Date(2022, 9, 25),
    new Date(2022, 9, 26),
    new Date(2022, 9, 27),
    new Date(2022, 9, 28),
    new Date(2022, 9, 30),
    new Date(2022, 9, 31),
    new Date(2022, 10, 1),
    new Date(2022, 10, 2),
  ];

  const CustomInput = ({ value, onClick }) => (
    <button className="custom_input" onClick={onClick}>
      {value}
    </button>
  );

  return (
    <StyledSchedule>
      <div className="schedule_container">
        <DatePicker
          withPortal
          locale={ko}
          dateFormat="yyyy.MM.dd(eee)"
          minDate={new Date()}
          selected={checkInDate}
          onChange={date => setCheckInDate(date)}
          includeDates={includeDates}
          customInput={<CustomInput />}
        >
          <div className="notification">표시된 날짜만 예약이 가능합니다.</div>
        </DatePicker>
        <button
          onClick={() => {
            navigate('/register');
          }}
        >
          등록하러가기
        </button>
        <ScheduleList checkInDate={checkInDate} />
      </div>
    </StyledSchedule>
  );
};

const StyledSchedule = styled.div`
  .schedule_container {
    width: 100%;
    margin: 100px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .custom_input {
      width: 200px;
      padding: 10px;
      font-size: 20px;
      font-weight: 600;
      background-color: #e3f2fd;
      border: 1px solid #90caf9;
      border-radius: 11px;
    }

    .notification {
      padding: 20px;
      color: #1976d2;
      font-size: 18px;
      font-weight: 800;
    }

    button {
      margin: 20px 0;
      padding: 10px;
      font-size: 20px;
      font-weight: 700;
      color: black;
      background-color: #64b5f6;
      border: 3px solid black;
      border-radius: 20px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default Schedule;
