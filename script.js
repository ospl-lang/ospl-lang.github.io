async function getLatestCratesIoVersion(crateName) {
  try {
    const response = await fetch(`https://crates.io/api/v1/crates/${crateName}`);
    if (!response.ok) {
      throw new Error(`AAAAA HELP ME heres sum info: ${response.status}`);
    }
    const data = await response.json();
    return data.crate.max_version;
  } catch (error) {
    console.error("no u:", error);
    return null;
  }
}

getLatestCratesIoVersion("ospl").then(version => {
  if (version) {
    //document.getElementById("latest-version").innerHTML = `<a href="https://crates.io/crates/ospl"><code>${version}</code></a>`;
    document.getElementById("latest-version").setAttribute("href", "https://crates.io/crates/ospl");
    document.getElementById("latest-version").firstChild.innerText = version;
  } else {
    document.getElementById("latest-version").innerHTML = "Could not retreive the latest version of OSPL from <a href=https://crates.io/crates/ospl>crates.io</a>.";
  }
});