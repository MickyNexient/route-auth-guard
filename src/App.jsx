import { useEffect, useMemo, useReducer } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import styles from './App.module.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import reducer, { initialState, types } from './reducers/AuthReducer';
import AuthContext from './contexts/AuthContext';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const providerState = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    const session = localStorage.getItem("Session");
    session && JSON.parse(session) ? dispatch({ type: types.LOGIN }) : dispatch({ type: types.INIT });
  }, []);

  useEffect(() => {
    state?.isAuthenticated && localStorage.setItem("Session", JSON.stringify(state));
  }, [state]);

  return (
    <div className={styles.App}>
      <div>Hello App! </div>
      <BrowserRouter>
        <AuthContext.Provider value={providerState}>
          <Routes>
            {state?.isAuthenticated &&
              <Route path="/" element={<Home />} />
            }
            {!state?.isAuthenticated &&
              <Route path="/login" element={<Login />} />
            }
            <Route path="*" element={<Navigate to={state?.isAuthenticated ? "/" : "/login"} />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  )
}
