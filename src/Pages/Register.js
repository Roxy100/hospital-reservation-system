import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  const handleError = errors => {
    alert(errors.message);
  };

  const registerOptions = {
    bookerId: {
      required: '예약자 이름은 필수!',
      minLength: {
        value: 3,
        message: '예약자 이름은 최소 3개의 글자 이상!',
      },
    },
  };

  const [hospitalList, setHospitalList] = useState([]);
  const [hospital, setHospital] = useState({});

  useEffect(() => {
    fetch('/data/registerHospitalList.json')
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
        <form onSubmit={handleSubmit(onSubmit, handleError)}>
          <div className="register_form_container">
            <div className="register_form">
              <div className="box">
                <div className="box_title">예약자</div>
                <div className="box_content_container">
                  <input
                    type="text"
                    id="bookerId"
                    name="bookerId"
                    {...register('bookerId', registerOptions.bookerId)}
                    defaultValue=""
                    className="box_content"
                  />
                  <small className="text_danger">
                    {errors?.bookerId && errors.bookerId.message}
                  </small>
                </div>
              </div>
              <div className="box">
                <div className="box_title another_title">병원이름</div>
                <div className="box_content_container">
                  <select
                    className="box_content"
                    {...register('hospitalName')}
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
              <div className="box">
                <div className="box_title another_title">예약시간</div>
                <div className="box_content_container">
                  <select
                    className=" box_content"
                    {...register('reservation_hour')}
                  >
                    {hospital?.reservationHours?.map(
                      (reservationHour, index) => {
                        return (
                          <option key={reservationHour.hourId}>
                            {reservationHour.hour}
                          </option>
                        );
                      }
                    )}
                  </select>
                </div>
              </div>
              <div className="box">
                <div className="box_title">예약종류</div>
                <div className="box_content_container reservation_type_checkbox_container">
                  <input
                    type="radio"
                    id="diagnosis"
                    {...register('reservation_type', { required: true })}
                    value="진료"
                  />
                  <label htmlFor="diagnosis">진료</label>
                  <input
                    type="radio"
                    id="checkup"
                    {...register('reservation_type', { required: true })}
                    value="검진"
                  />
                  <label htmlFor="checkup">검진</label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="register_btn"
            >
              등록
            </button>
          </div>
        </form>
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
      width: 600px;
      height: 600px;
      padding: 16px;
      border: 5px solid black;
      border-radius: 30px;

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
            margin-left: 20px;
            font-size: 25px;
            font-weight: 600;
          }

          .box_content_container {
            width: 80%;
            display: flex;

            .box_content {
              padding: 10px;
              border-radius: 8px;
            }

            .text_danger {
              margin-left: 10px;
              color: red;
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
        margin: 30px 20px;
        padding: 15px;
        font-size: 25px;
        font-weight: 600;
        background-color: #f0f8ff;
        color: blue;
        border: 3px solid blue;
        border-radius: 8px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default Register;
