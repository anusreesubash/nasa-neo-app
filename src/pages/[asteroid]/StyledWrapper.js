import styled from 'styled-components';

const Wrapper = styled.div`
  .navbar {
    background-color: #6366f1;
    color: #fff;

    h1 {
      margin: 0;
    }

    .links {
      margin-block: auto;
    }

    .container {
        padding-left: 15px;
        padding-right: 15px;
        height: 70px;
        justify-content: space-between;
    }
  }

  .container {
      margin: 0 auto;
  }
`;

export default Wrapper;
