const getInstalledApps = () => {
  const storedAppStr = localStorage.getItem("installed");

  if (storedAppStr) {
    const storedAppData = JSON.parse(storedAppStr);
    return storedAppData;
  } else {
    return [];
  }
};
const addAppToDB = (id) => {
  const storedAppData = getInstalledApps();

  if (storedAppData.includes(id)) {
    alert("its there!");
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installed", data);
  }
};

export { addAppToDB, getInstalledApps };
