fetch('/assets/js/config.json')
  .then(response => response.json())
  .then(config => {
    const trackingID = config.GA_TRACKING_ID;

    let script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', trackingID);
  });