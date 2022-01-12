import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 980px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;

    table {
      tr {
        &:hover {
          cursor: pointer;
          background-color: #e9e9e9;
        }
      }
    }
  }
`;

export default Wrapper;
