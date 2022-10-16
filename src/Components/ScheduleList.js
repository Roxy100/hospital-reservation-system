import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScheduleList = ({ checkInDate }) => {
  const [scheduleList, setScheduleList] = useState([]);

  // 해당날짜의 요일
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  let dayOfWeek = week[checkInDate.getDay()];

  useEffect(() => {
    fetch('/data/scheduleList.json')
      .then(res => res.json())
      .then(res => {
        setScheduleList(res.data);
      });
  }, []);

  return (
    <StyledScheduleList>
      <div className="schedulelist_container">
        <span className="schedulelist_title">병원목록</span>
        <ul className="schedule_component">
          {scheduleList &&
            scheduleList.map((schedule, index) => {
              return (
                <li key={schedule.scheduleListId}>
                  <li className="hospital_name">{schedule.hospitalName}</li>
                  <li className="hospital_hour">
                    {`${dayOfWeek}요일 ${schedule.hospitalHour}`}
                  </li>
                  <div className="reservation_container">
                    <div className="reservation_hours">
                      {schedule.reservationHours &&
                        schedule.reservationHours.map(
                          (reservationHour, index) => {
                            return (
                              <span key={reservationHour.hourId}>
                                {reservationHour.hour}
                              </span>
                            );
                          }
                        )}
                    </div>
                    <div className="reservation_box">예약 가능</div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </StyledScheduleList>
  );
};

const StyledScheduleList = styled.div`
  .schedulelist_container {
    margin: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .schedulelist_title {
      display: block;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .schedule_component {
      width: 600px;
      border: 5px solid black;
      border-radius: 20px;

      li {
        display: flex;
        flex-direction: column;
        margin: 15px 0;

        .hospital_name {
          font-size: 25px;
          font-weight: 700;
        }

        .hospital_hour {
          line-height: 5px;
          font-size: 20px;
        }

        .reservation_container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;

          .reservation_hours {
            margin: 10px;
            font-size: 22px;

            span {
              margin: 0 10px;
            }
          }
          .reservation_box {
            padding: 2px;
            font-weight: 600;
            background-color: #add8e6;
            color: blue;
            border: 2px solid blue;
            border-radius: 3px;
          }
        }
      }
    }
  }
`;

export default ScheduleList;
