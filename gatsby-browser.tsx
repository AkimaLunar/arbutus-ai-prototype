import * as React from 'react';
import { Theme } from './src/components/theme';
import { Shell } from './src/components/shell';

// export const wrapRootElement = ({ element }) => <Theme>{element}</Theme>;

export const wrapPageElement = ({ element, props }) => <Theme><Shell {...props}>{element}</Shell></Theme>