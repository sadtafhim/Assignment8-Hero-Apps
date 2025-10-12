const trendingAppSorter = (data) => {
  const downloadList = data.map((d) => ({ id: d.id, downloads: d.downloads }));

  const sortedList = downloadList.sort((a, b) => b.downloads - a.downloads);

  while (sortedList.length != 8) {
    sortedList.pop();
  }

  const idList = sortedList.map((d) => d.id);

  const trendingList = data.filter((d) => idList.includes(d.id));

  return trendingList;
};

export { trendingAppSorter };
