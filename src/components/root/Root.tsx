import { Suspense, useEffect } from "react";

import AnimatedOutlet from "../animatedOutlet/AnimatedOutlet";
import Controls from "../controls/Controls";
import Nav from "../nav/Nav";

const Root = (): JSX.Element => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent): void => {
      console.log(e.key);
      if (e.key === "F12") {
        e.preventDefault();
        window.api.showDevTools();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return (): void => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <>
      <main>
        <Nav />
        <Suspense fallback={<></>}>
          <AnimatedOutlet />
        </Suspense>
      </main>
      <Controls />
      {/* <main>
        <Nav {...rest} />

        <AnimatePresence mode="wait">
          <Page />
        </AnimatePresence>
      </main>
      <Controls /> */}
    </>
  );
};

export default Root;
