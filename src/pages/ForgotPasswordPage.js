import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import { toast } from 'react-toastify';

function ForgotPasswordPage() {
  const history = useHistory();
  const { forgotPassword } = useUserContext();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error('Please enter e-mail');
    }

    setIsSubmitting(true);
    forgotPassword(email)
      .then((res) => {
        toast.info(
          'A password reset link has been sent, check your inbox and follow the instruction'
        );
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Forgot</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className='form-control'>
            <input
              type='email'
              className='input'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* end email */}
          <button
            type='submit'
            className='btn forgot-btn'
            disabled={isSubmitting}
          >
            submit
          </button>
          <div className='seperator'>
            <hr />
            <span>or</span>
          </div>
          <div className='links'>
            <Link to='/login' className='link'>
              login
            </Link>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  div {
    min-width: 300px;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-control {
      margin-bottom: 1.25rem;
      h5 {
        margin-bottom: 0.5rem;
      }
    }
    .input {
      width: 100%;
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);
    }
    .input::placeholder {
      text-transform: capitalize;
    }
    .links {
      width: 100%;
      margin-top: 1.25rem;
      display: flex;
      justify-content: center;
    }
    .link {
      font-size: 1rem;
      color: var(--clr-primary-1);
      text-transform: capitalize;
    }
    .seperator {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 1.25rem;
      span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.25rem;
        background: white;
      }
      hr {
        width: 100%;
      }
    }
    .forgot-btn {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
`;

export default ForgotPasswordPage;