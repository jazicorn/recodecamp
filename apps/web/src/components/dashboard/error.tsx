// error screen
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const DashboardError = (error) => {
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    return (
        <div className={`${darkMode ? 'tw-bg-neutral-700/90' : 'tw-bg-neutral-400/80'} tw-w-full tw-h-full`}>{error}</div>
    )
}

export default DashboardError;
