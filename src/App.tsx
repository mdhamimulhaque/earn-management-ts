import React from 'react';
import { RouterProvider } from "react-router-dom";
import routes from './routes/routes';
import { ThemeProvider } from 'styled-components';
import { AppContainer } from './Components/styles';

const theme = {
  mediaQuery: {
    over: '(min-width: 1800px)',
    xxxl: '(min-width: 1600px) and (max-width: 1799px)',
    xxl: '(min-width: 1400px) and (max-width: 1599px)',
    xl: '(min-width: 1200px) and (max-width: 1399px)',
    lg: '(min-width: 992px) and (max-width: 1199px)',
    md: '(min-width: 768px) and (max-width: 991px)',
    sm: '(min-width: 576px) and (max-width: 767px)',
    xs: '(max-width: 767px)'
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <RouterProvider router={routes} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
