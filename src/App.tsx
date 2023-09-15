import React, { useEffect } from 'react';
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import axios from 'axios'
import { prefixer } from "stylis";
import i18next from 'i18next';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { theme } from './theme';
import { router } from './routes';

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cache = createCache({ key: "css" });

function App() {
  axios.defaults.headers.common['Authorization'] = `Bearer `;
  axios.defaults.headers.common['Accept-Language'] = 'i18next.language';

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
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
