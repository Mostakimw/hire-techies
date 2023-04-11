const addToDB = (id) => {
  let appliedJob = {};
  const storedData = localStorage.getItem("applied-job");
  if (storedData) {
    appliedJob = JSON.parse(storedData);
  }
  appliedJob[id] = true;
  localStorage.setItem("applied-job", JSON.stringify(appliedJob));
};
const getStoredData = () => {
  let appliedJob = {};
  const storedData = localStorage.getItem("applied-job");
  if (storedData) {
    appliedJob = JSON.parse(storedData);
  }
  return appliedJob;
};
export { addToDB, getStoredData };
