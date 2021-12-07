import * as Tooltip from '@radix-ui/react-tooltip';
import { useThemeContext } from '../context/ThemeContext';
import determinePointerSymbol from '../utils/determinePointerSymbol';

export default function SymbolTooltip({ sym }) {
  const { theme } = useThemeContext();

  return (
    <>
      <Tooltip.Root delayDuration={0} skipDelayDuration={0}>
        <Tooltip.Trigger className="tooltip_trigger">{sym}</Tooltip.Trigger>
        <Tooltip.Content
          className="tooltip_content"
          aria-label={determinePointerSymbol(sym)}
        >
          {determinePointerSymbol(sym)}
          <Tooltip.Arrow
            className="tooltip_arrow"
            offset={5}
            height={5}
            width={10}
          />
        </Tooltip.Content>
      </Tooltip.Root>
      <style jsx global>{`
        .tooltip_trigger {
          border: none;
          background-color: transparent;
          color: inherit;
        }
        .tooltip_content {
          white-space: pre-line;
          font-family: 'Inter', sans-serif;
          padding: 0.5rem;
          font-size: 0.95rem;
          border-radius: 5px;
          background-color: ${theme.gray[3]};
          color: ${theme.gray[11]};
        }
        .tooltip_arrow {
          fill: ${theme.gray[3]};
        }
      `}</style>
    </>
  );
}
