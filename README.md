# Dictionary Wordnet

Alternate frontend for Wordnet. Built with NextJS and [node-wordnet](https://github.com/morungos/wordnet) as backend. Has colorways insipired by [Firefox](https://support.mozilla.org/en-US/kb/personalize-firefox-colorways) made possible by [radix-ui/colors](https://www.radix-ui.com/colors). Deployed on vercel [here](https://dictionary-wordnet-next.vercel.app/).

## Stack

- Built with NextJS.

- NextJS [API Routes](https://nextjs.org/docs/api-routes/introduction) to build a Wordnet API using [node-wordnet](https://github.com/morungos/wordnet).

- [radix-ui/colors](https://www.radix-ui.com/colors) for theme colors.

- [radix-ui/primitives](https://www.radix-ui.com/docs/primitives/overview/introduction) for UI components - [radix-ui/react-radio-group](https://www.radix-ui.com/docs/primitives/components/radio-group), [@radix-ui/react-switch](https://www.radix-ui.com/docs/primitives/components/switch), [@radix-ui/react-tooltip](https://www.radix-ui.com/docs/primitives/components/tooltip).

- Client side data fetching with [SWR](https://swr.vercel.app/).

## References

- Design on [Figma](https://www.figma.com/file/f4CR7CD9W9lFFnwusS6slo/Dictionary?node-id=0%3A1).

- Using a modified useLocalStroage with reducer from [How to use Context, useReducer and LocalStorage in Next JS](https://medium.com/geekculture/how-to-use-context-usereducer-and-localstorage-in-next-js-cc7bc925d3f2). Published as [gist](https://gist.github.com/deadmercury/9d607a5650f33658d7ef50b43b0f5094).

- [When to useLayoutEffect Instead of useEffect (example)](https://daveceddia.com/useeffect-vs-uselayouteffect/#:~:text=If%20your%20component%20is%20flickering%20when%20state%20is%20updated).

- white-space on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space).

- Wordnet [Documentation](https://wordnet.princeton.edu/documentation/).

- [Debounce in JavaScript — Improve Your Application’s Performance](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086).

- Difference between [automatic sizing of flex-items](https://www.w3.org/TR/css-flexbox-1/#min-size-auto) and [grid-item sizing](https://www.w3.org/TR/css-grid-1/#grid-item-sizing).

- matchMedia removeListener doesn't work? on [StackOverflow](https://stackoverflow.com/a/25980293).

- Make React useEffect hook not run on initial render on [StackOverflow](https://stackoverflow.com/a/26567760).

- How to detect touch device in 2019? on [StackOverflow](https://stackoverflow.com/a/63666289).

- Internal API fetch with getServerSideProps? (Next.js) on [StackOverflow](https://stackoverflow.com/a/65760948).

- [Perform debounce in React.js] on [StackOverflow](https://stackoverflow.com/a/58594348/10469084).

## Notes

- My notes on Wordnet and node-wordnet on [Notion](https://ranmerc.notion.site/Wordnet-29a276bd0c81418d8e6da27f556a63db).

- I started off with styled-components for styling as I wanted dynamic colors but as of now [swc does not work with styled-components](https://github.com/vercel/next.js/discussions/30174). So I had to switch to built in [styled-jsx](https://github.com/vercel/styled-jsx).

- Its nice to have something like styled-jsx built in into NextJS but you can have only one style jsx block per component. So it really forces you to write components. Not to mention styled-js is buggy af sometimes breaks on even adding comments.

- Don't need something like styled-components for dynamic styles. Could use [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) for the same effect with CSS Modules.

## Citation

Princeton University "About WordNet." [WordNet](https://wordnet.princeton.edu/). Princeton University. 2010.
