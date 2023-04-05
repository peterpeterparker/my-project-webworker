// Does not work neither
// import Worker from "$lib/workers/demo.worker?worker";

export const initWorker = async () => {
  const Worker = await import("$lib/workers/demo.worker?worker");
  console.log(Worker);
};
