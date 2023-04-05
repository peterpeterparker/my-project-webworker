
export const initWorker = async () => {
  const Worker = await import("$lib/workers/demo.worker?worker");

};
