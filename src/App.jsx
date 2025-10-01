import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading page...</p>}>
        <Home />
      </Suspense>
    </div>
  );
};

export default App;