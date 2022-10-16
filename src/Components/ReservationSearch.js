import React from 'react';
import styled from 'styled-components';

const ReservationSearch = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <StyledReservationSearch>
      <form onSubmit={handleSubmit} className="search_form">
        <input bookerId="filter" />
        <button>검색</button>
      </form>
    </StyledReservationSearch>
  );
};

const StyledReservationSearch = styled.form`
  .search_form {
    width: 100%;
    margin: 20px 0;

    input {
      padding: 5px;
    }

    button {
      padding: 5px;
      margin: 0 15px;
      font-weight: 700;
      border: 3px solid #1e88e5;
      border-radius: 5px;
    }
  }
`;

export default ReservationSearch;
