import React, { useEffect } from "react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import axios from "axios";
import { prefixer } from "stylis";
import i18next from "i18next";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme";
import { router } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ItemsProvider } from "./context/ItemsContext";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cache = createCache({ key: "css" });

function App() {
  useEffect(() => {
    if (i18next.language == "ar") {
      document.dir = "rtl";
    } else {
      document.dir = "ltr";
    }
  }, [i18next.language]);

  return (
    <CacheProvider
      {...(i18next.language == "ar" ? { value: cacheRtl } : { value: cache })}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
