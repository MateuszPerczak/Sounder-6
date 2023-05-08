export type GetRandomId = () => string;

export type UseId = () => { getRandomId: GetRandomId };
