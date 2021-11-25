import Heading from './Heading';
import { useThemeContext } from '../context/ThemeContext';

export default function ListHeader({
  children,
  handleClick,
  disabled = false,
}) {
  const { theme } = useThemeContext();

  return (
    <div>
      <Heading type="h1">{children}</Heading>
      <button aria-label="Clear All" disabled={disabled} onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="38"
          height="38"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <g fill="currentColor">
            <path d="M10 12.6l.7.7l1.6-1.6l1.6 1.6l.8-.7L13 11l1.7-1.6l-.8-.8l-1.6 1.7l-1.6-1.7l-.7.8l1.6 1.6l-1.6 1.6zM1 4h14V3H1v1zm0 3h14V6H1v1zm8 2.5V9H1v1h8v-.5zM9 13v-1H1v1h8z" />
          </g>
        </svg>
      </button>
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        button {
          border: none;
          background-color: transparent;
        }
      `}</style>
      <style jsx>{`
        svg {
          color: ${theme.gray[disabled ? 10 : 11]};
        }
      `}</style>
    </div>
  );
}
