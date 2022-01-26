import styled from 'styled-components';

// Refactor
export const FooterContainer = styled.footer`
  .footer {
    background-color: $dark-grey;
    color: $white-color;
    padding: 4.8rem 0;

    @include respond(phone) {
      border: 0px;
    }

    &__text {
      color: darken(white, 50%);
      font-size: 1.3rem;

      a {
        color: darken(white, 50%);
        font-size: 1.3rem;
        transition: all 0.4s;
        display: inline-block;
        background-color: $dark-grey;

        &:hover,
        &:active {
          color: $primary-color;
          -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
          box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
        }
      }
    }

    & hr {
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 0;
      width: 50%;
      border-top: 2px solid rgba(255, 255, 255, 0.1);
    }
  }

  .social-links {
    display: flex;
    flex-direction: row;
    justify-content: center;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: $white-color;
      font-size: 3rem;
      width: 5rem;
      height: 5rem;
      margin: $default-font-size $default-font-size;
      transition: all 0.2s ease-in;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }

  .back-to-top i {
    color: $white-color;
    margin: 1rem 0 $default-font-size;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;
