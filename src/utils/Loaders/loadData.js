export const loadData = async () => {
  const categoryData = await fetch("job-category.json");
  const categories = await categoryData.json();
  return categories;
};

// export { loadData };
