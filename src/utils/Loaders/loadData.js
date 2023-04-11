export const loadData = async () => {
  // load data for categories
  const categoryData = await fetch("/job-category.json");
  const categories = await categoryData.json();

  //   load data for featured job
  const featuredData = await fetch("/feature.json");
  const featuredJob = await featuredData.json();
  return { categories, featuredJob };
};

// export { loadData };
