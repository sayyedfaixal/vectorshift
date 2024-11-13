import { useTheme } from './ThemeContext';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        height: '40px',
        borderRadius: '8px',
        border: 'none',
        background: isDark ? '#ffffff' : '#1a1a1a',
        color: isDark ? '#1a1a1a' : '#ffffff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        marginLeft: 'auto',
        fontSize: '14px',
      }}
    >
      {isDark ? '🌙' : '☀️'} {isDark ? 'Dark' : 'Light'} Mode
    </button>
  );
};