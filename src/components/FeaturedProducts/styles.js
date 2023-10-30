import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 2rem 2rem;
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 4.5rem;
    img {
      height: 370px; /* Increase the height to make the cards bigger */
    }
    justify-content: center; 
    align-items: center;
  }

  .card--container{
    margin-left: 45px;
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Wrapper;
