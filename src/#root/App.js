/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Toast from 'react-native-toast-message';
import {AppNavigation} from './AppNavigation';
import {TestingProvider} from '../context/useTesting'
import {AuthProvider} from './AuthProvider';
import ErrorBoundary from '../context/useError';

const queryClient = new QueryClient();

const App = () => {

  return (
    <ErrorBoundary>
      <AuthProvider>
        <TestingProvider>
        <>
          <QueryClientProvider client={queryClient}>
            <AppNavigation>
            </AppNavigation>
            </QueryClientProvider>
          <Toast ref={ref => Toast.setRef(ref)} />
        </>
        </TestingProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
