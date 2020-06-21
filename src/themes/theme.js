import {DEFAULT_THEME} from './default.theme';
import {GREEN_THEME} from './green.theme';
import {ORANGE_THEME} from './orange.theme';
import {DARK_THEME} from './dark.theme';

const themes = {
    default: DEFAULT_THEME,
    green: GREEN_THEME,
    orange: ORANGE_THEME,
    dark: DARK_THEME,
}
// default | green | orange | dark
const currentTheme = 'default';

export const THEME = {
    ...themes[currentTheme],
}
