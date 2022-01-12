import styled from 'styled-components';

const Wrapper = styled.div`
  .datepicker {
    input {
      background: #e7e7e7;
      text-align: center;
      cursor: pointer;
    }
  }

  button.search {
    svg {
      position: relative;
      top: 2px;
    }
    &:disabled {
      background: #ccc;
    }
  }

  .date-input {
    text-align: left;
    margin-top: 10px;

    .DayPickerInput {
      height: 15px;
      input {
        border-radius: 3px;
        padding: 5px;
        border: none;
      }
    }
  }
`;

export default Wrapper;
