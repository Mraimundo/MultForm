import React from 'react';
import { Router } from './router';
import { FormProvider } from './contexts/FormContext';
import { GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <FormProvider>
      < Router />
      <GlobalStyle />
    </FormProvider>
  );
}
