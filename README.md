# Paint with pixels
(the reactjs rewrite of it; also uses vite)

## Development and deployment
Install js libraries:
```sh
yarn
```
All of the interesting stuff is in `src/`; mainly in `src/App.tsx` and `src/App.sass`

Run the development server:
```sh
yarn dev
```
Build (this exports the raw html, javascript and css files into `dist/`):
```sh
yarn build
```

This project automatically deploys itself to github pages (builds to the `gh-pages` branch); if you want to use this in your own repo make sure that you have the right `base` in `vite.config.ts` and that github pages are set to use that branch.