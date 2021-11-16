import { useThemeContext } from '../context/ThemeContext';

export default function Home() {
  const { theme, setTheme } = useThemeContext();
  return (
    <div>
      <h1>Hello World</h1>
      <button
        onClick={() => {
          setTheme({
            type: 'TOGGLE_MODE',
          });
        }}
      >
        Toggle Theme
      </button>
      <style jsx>{`
        h1 {
          color: ${theme.color[10]};
        }
      `}</style>
    </div>
  );
}
