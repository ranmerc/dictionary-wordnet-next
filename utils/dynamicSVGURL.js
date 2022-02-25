import { useThemeContext } from '../context/ThemeContext';

const svgTemplate = (color) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1em" height="1em">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64">
        <path fill="${color[10]}" d="M6.198 57.476s1.83 7.028 13.261 5.229l1.953-4.704l-3.29-3.576l-9.105-3.002l-2.814 6.053"></path>
        <path fill="${color[10]}" d="M42.632 44.304c0 2.492-1.278 3.147-4.51 4.512l-27.61 11.657A4.512 4.512 0 0 1 6 55.96V17.17c0-2.494 1.466-3.324 4.512-4.513L38.122 1a4.51 4.51 0 0 1 4.51 4.512v38.8"></path>
        <path fill="${color[10]}" d="M8.51 59.998s10.347 2.97 10.95 2.714c.605-.255-.385-4.487-.385-4.487l-3.741-4.033l-3.486-.162l-.613.87l-2.726 5.098"></path>
        <path fill="${color[3]}" d="M37.472 3.68L6.844 16.546l1.436 8.25l4.56.453l15.213-2.449l9.46-4.957l6.965-9.537c-1.522-2.73-3.756-4.419-7.006-4.628"></path>
        <path fill="${color[10]}" d="M14.959 19.4c0-.725.126-1.302.375-1.794c-3.136-.292-6.098-1.2-8.255-3.145c-.716.66-1.07 1.48-1.07 2.7v38.791a4.514 4.514 0 0 0 4.512 4.513l4.457-1.883a4.056 4.056 0 0 1-.02-.392V19.4z"></path>
        <path fill="${color[7]}" d="M52.378 48.127c0 2.492-1.277 3.147-4.512 4.512L19.46 62.709a4.512 4.512 0 0 1-4.511-4.512v-38.79c0-2.495 1.466-3.324 4.511-4.515L47.866 4.821a4.51 4.51 0 0 1 4.512 4.512v38.8"></path>
        <g fill="${color[3]}">
            <path d="M40.619 16.66a.609.609 0 0 1-.35.789l-15.11 5.829a.604.604 0 0 1-.785-.352a.6.6 0 0 1 .346-.786l15.108-5.829c.317-.12.67.036.79.35"></path>
            <path d="M40.619 19.44a.61.61 0 0 1-.35.789l-15.11 5.829a.604.604 0 0 1-.785-.35a.603.603 0 0 1 .346-.788l15.108-5.829a.61.61 0 0 1 .79.348"></path>
            <path d="M35.482 24.292c.122.316.047.636-.17.72L24.996 28.99c-.216.082-.488-.106-.608-.42c-.12-.316-.045-.636.17-.717l10.318-3.98c.213-.082.488.104.606.42"></path>
        </g>
    </svg>
</svg>
    `;
};

export default function dynamicSVGURL() {
  const { theme } = useThemeContext();

  return `data:image/svg+xml,${encodeURIComponent(svgTemplate(theme.color))}`;
}
