
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Firebase from './FirebaseEngine/firebase';
import AppStateProvider from './appState/AppStateProvider';

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const f = new Firebase();

  useEffect(() => {
    f.getUserAuth().then(user => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });
  }, [f]);

  if (isLoading) {
    return <div>Cargando...</div>; 
  }

  return isAuthenticated ? <AppStateProvider><Outlet /></AppStateProvider> : <Navigate to="/login" />;
};
export default PrivateRoute;