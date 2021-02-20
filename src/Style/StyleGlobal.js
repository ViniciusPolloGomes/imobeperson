import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body{
  margin: 0;
  padding: 0;
  background: #161616
  
}

body, input, button ,textarea{
  font-size: 16px;
}

button {
  cursor: pointer;
}
`;
