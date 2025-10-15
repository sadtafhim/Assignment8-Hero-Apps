import { getInstalledApps } from "./addToDB";
function handleUnistall(id) {
  let apps = getInstalledApps();
  const updatedApps = apps.filter((app) => app !== id);
  localStorage.setItem("installed", JSON.stringify(updatedApps));
}

export { handleUnistall };
