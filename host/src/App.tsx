import { lazy, Suspense } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import './App.css';
//@ts-expect-error - Remote
const RemoteButton = lazy(() => import('vite-remote/Button'));
//@ts-expect-error - Remote
const WebpackImage = lazy(() => import('vite_webpack/Image'));
//@ts-expect-error - Remote
const RspackImage = lazy(() => import('vite_rspack/Image'));

function App() {
  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <Suspense>
          <RemoteButton />
        </Suspense>
        <Suspense>
          <WebpackImage />
        </Suspense>
        <Suspense>
          <RspackImage />
        </Suspense>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
