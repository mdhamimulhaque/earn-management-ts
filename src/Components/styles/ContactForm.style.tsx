import styled from "styled-components";


export const ContactFormBox = styled.form`
padding: 0 50px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 200px;
    @media ${({ theme }) => theme.mediaQuery.xl} {
        padding: 0 0px 0 50px;
        gap: 120px;
  }
    @media ${({ theme }) => theme.mediaQuery.lg} {
        padding: 0 0px 0 50px;
        gap: 120px;
  }
    @media ${({ theme }) => theme.mediaQuery.md} {
      padding: 0 0 0 20px;
          flex-wrap: wrap;
          gap: 50px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
        padding: 0 0 0 20px;
        flex-wrap: wrap;
        gap: 50px;
  }
`;
export const FormLeftSide = styled.div`
 font-size: 25px;
 @media ${({ theme }) => theme.mediaQuery.lg} {
    font-size: 20px;
  }
 @media ${({ theme }) => theme.mediaQuery.md} {
    font-size: 20px;
  }
 @media ${({ theme }) => theme.mediaQuery.xs} {
    font-size: 20px;
  }
   h4{
    margin-bottom: 50px;
   }
    span {
    color: #6C6C6C;
}
`;
export const FormRightSide = styled.div`
 input{
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.21);
    padding-bottom: 10px;
    outline: none;
    width: 100%;
    color: rgba(255, 255, 255, 0.21);
    margin-bottom: 55px;
    font-size: 16px;
    @media ${({ theme }) => theme.mediaQuery.lg} {
      margin-bottom: 43px;
  }
 }
`;

export const SubmitButtonBox = styled.div`
 text-align: right;
    margin-top: 33px;
    @media ${({ theme }) => theme.mediaQuery.xs} {
      text-align: center;
  }
    button{
        min-height: 156px;
    max-width: 156px;
    width: 100%;
    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
    border: none;
    border-radius: 100%;
    cursor: pointer;
    color:#fff;
    font-size: 18px;
   
    @media ${({ theme }) => theme.mediaQuery.md} {
      min-height: 135px;
    max-width: 135px;
  }
    @media ${({ theme }) => theme.mediaQuery.xs} {
      min-height: 110px;
    max-width: 110px;
  }
    }
`;