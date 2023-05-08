import { random } from "lodash";

import type { GetRandomId, UseId } from "./useId.types";

const useId: UseId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const getRandomId: GetRandomId = () => {
    let id = "";
    for (let i = 0; i < 16; i++) {
      id += characters[random(0, characters.length - 1)];
    }
    return id;
  };

  return { getRandomId };
};

export default useId;
