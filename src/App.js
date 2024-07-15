/* eslint-disable prettier/prettier */
import { useReducer, useEffect } from "react";
import { setStorageValue } from "services/localStorage";
import AppRouter from "AppRouter";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
import { initialState, playerReducer } from "Context/PlayerReducer";
import { PlayerContext, PlayerDispatchContext } from "Context/PlayerContext";
import { theme } from "styles/Theme";

//import Error from "pages/Error";
import { GlobalStyles } from "styles/Global";

//import skeleton loading css
import "react-loading-skeleton/dist/skeleton.css";
//import  toastify css
import "react-toastify/dist/ReactToastify.css";
//import  rc-slider css

import "rc-slider/assets/index.css";
//import Error from "pages/Error";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  useEffect(() => {
    setStorageValue("savedTrackIds", state.savedTrackIds);
  }, [state.savedTrackIds]);

  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <AppRouter />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </SkeletonTheme>
        </ThemeProvider>
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
