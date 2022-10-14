import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Register = () => {
  const [hospitalList, setHospitalList] = useState([]);
  const [hospital, setHospital] = useState({});

  useEffect(() => {
    fetch('/datas/registerhospital.json')
      .then(res => res.json())
      .then(res => {
        setHospitalList(res.data);
      });
  }, []);

  const handleDropHospital = e => {
    const { value } = e.target;
    setHospital(hospitalList.find(hospital => hospital.hospitalName === value));
  };

  return (
    <StyledRegister>
      <div className="register_container">
        <h3 className="register_title">병원 예약 등록</h3>
        <div className="register_form_container">
          <div className="register_form">
            <div className="booker_container box">
              <div className="booker_title box_title">예약자</div>
              <div className="booker_input_container box_content_container">
                <input
                  type="text"
                  id="bookerId"
                  name="bookerId"
                  className="booker_input box_content"
                />
              </div>
            </div>
            <div className="hospital_container box">
              <div className="hospital_title box_title">병원이름</div>
              <div className="hospital_dropdown_container box_content_container">
                <select
                  className="hospital_dropdown_select box_content"
                  onChange={handleDropHospital}
                >
                  {hospitalList &&
                    hospitalList.map((hospital, index) => {
                      return (
                        <option key={hospital.hospitalId}>
                          {hospital.hospitalName}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="reservation_time_container box">
              <div className="reservation_time_title box_title">예약시간</div>
              <div className="reservation_time_dropdown_container box_content_container">
                <select className="reservation_time_dropdown_select box_content">
                  {hospital?.reservationHours?.map((reservationHour, index) => {
                    return (
                      <option key={reservationHour.hourId}>
                        {reservationHour.hour}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="reservation_type_container box">
              <div className="reservation_type_title box_title">예약종류</div>
              <div className="reservation_type_checkbox_container box_content_container">
                <input
                  type="radio"
                  id="diagnosis"
                  name="diagnosis"
                  className="diagnosis"
                />
                <label htmlFor="diagnosis">진료</label>
                <input
                  type="radio"
                  id="checkup"
                  name="checkup"
                  className="checkup"
                />
                <label htmlFor="checkup">검진</label>
              </div>
            </div>
          </div>
          <button className="register_btn">등록</button>
        </div>
      </div>
    </StyledRegister>
  );
};

const StyledRegister = styled.div`
  .register_container {
    width: 100%;
    margin: 100px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .register_title {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .register_form_container {
      padding: 16px;
      border: 1px solid black;
      width: 1000px;
      height: 45vh;

      .register_form {
        padding: 10px 0;

        /* 공통 */
        .box {
          display: flex;
          justify-content: center;
          padding: 30px 0;
          border-bottom: 1px dashed black;

          .box_title {
            width: 20%;
            font-size: 25px;
            font-weight: 600;
          }

          .box_content_container {
            width: 80%;

            .box_content {
              padding: 10px;
              border-radius: 8px;
            }
          }

          /* 각각 컨테이너에 해당되는 css */
          .reservation_type_checkbox_container label {
            padding: 0 10px;
            font-size: 18px;
            font-weight: 600;
          }
        }
      }

      .register_btn {
        margin: 30px;
        padding: 10px;
        font-size: 20px;
        font-weight: 600;
        background-color: #f0f8ff;
        color: blue;
        border: 0.5px solid blue;
        border-radius: 8px;
      }
    }
  }
`;

export default Register;
