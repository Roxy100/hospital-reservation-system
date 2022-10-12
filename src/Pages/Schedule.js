import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const Schedule = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());

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
        />
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
  }
`;

export default Schedule;
