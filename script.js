async function getLatestCratesIoVersion(crateName) {
  try {
    const response = await fetch(`https://crates.io/api/v1/crates/${crateName}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.crate.max_version;
  } catch (error) {
    console.error("Error fetching crate information:", error);
    return null;
  }
}

getLatestCratesIoVersion("ospl").then(version => {
  if (version) {
    document.getElementById("latest-version").innerText = version;
  } else {
    document.getElementById("latest-version").innerText = "Could not retreive the latest version of OSPL";
  }
});