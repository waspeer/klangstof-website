import React from 'react';

import { ThemeProvider, ThemeSettings } from '#lib/theme';

interface Props {
  children: React.ReactNode;
  themeSettings: ThemeSettings;
}

function Providers({ children, themeSettings }: Props) {
  return <ThemeProvider settings={themeSettings}>{children}</ThemeProvider>;
}

export default Providers;
