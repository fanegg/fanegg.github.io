function getBasePath() {
  const pathname = window.location.pathname;
  const protocol = window.location.protocol;
  
  if (protocol === 'file:') {
    const pathParts = pathname.split('/');
    pathParts.pop();
    const currentDir = pathParts.join('/');
    return currentDir || '.';
  }
  
  if (pathname.includes('/Human3R/')) {
    return '/Human3R';
  }

  const pathParts = pathname.split('/');
  pathParts.pop();
  return pathParts.join('/') || '';
}

const basePath = getBasePath();
console.log('[Interactive] Current location:', window.location.href);
console.log('[Interactive] Base path detected:', basePath);

const results = [
  [
      "GoodMornin1",
      [
        `${basePath}/build/`,
        `?playbackPath=${basePath}/recordings/viser/GoodMornin1.viser`,
        `&synchronizedVideoOverlay=${basePath}/recordings/videos/GoodMornin1.mp4`,
        "&synchronizedVideoTimeOffset=0.0",
        "&initialCameraPosition=-1, -2.82234899, 4",
        "&initialCameraLookAt=-2.5,2.0,0.0",
        "&baseSpeed=1.0",
        "&videoPlayspeed=0.88",
        "&darkMode",
      ],
    ]
  ];
  
  function initializeResultSelector(resultsElement) {
    let currentIndex = 0;
  
    function createIframe(src) {
      const iframe = document.createElement("iframe");
      console.log("Creating iframe with src", src);
      iframe.src = src;
      return iframe;
    }
  
    function showIframe(src) {
      const wrapper = resultsElement.querySelector(".iframe-wrapper");
      wrapper.innerHTML = "";
      const iframe = createIframe(Array.isArray(src) ? src.join("") : src);
      wrapper.appendChild(iframe);
    }

    function hideIframe() {
        const wrapper = resultsElement.querySelector(".iframe-wrapper");
        wrapper.innerHTML = ""; // Remove iframe from DOM
    }
  
    function updateSelection(index) {
      if (currentIndex !== index) {
        hideIframe();
      }
      currentIndex = index;

      const resultName = results[index][0].toLowerCase().replace(/\s+/g, "-");
      const currentPath = window.location.pathname;
      const newUrl = `${currentPath}?result=${resultName}`;
      history.pushState(null, "", newUrl);

      showIframe(results[index][1]);
    }
  
    // Thumbnails and navigation buttons removed; selection only via URL or defaults
  
    // Check URL for initial result selection
    const urlParams = new URLSearchParams(window.location.search);
    const initialResult = urlParams.get("result");
    if (initialResult) {
      const index = results.findIndex(
        (result) =>
          result[0].toLowerCase().replace(/\s+/g, "-") === initialResult,
      );
      if (index !== -1) {
        updateSelection(index);
      } else {
        showIframe(results[0][1]);
      }
    } else {
      showIframe(results[0][1]);
    }
  }
  
  // Initialize all result on the page
  document.querySelectorAll(".results").forEach(initializeResultSelector);