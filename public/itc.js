// const { request } = require("http");

console.log("This site tracked by Holberton Analytics.")

  
 
let requestId = '';
let timeOnPage = ''
let pageLoadTime;
let long;
let lat; 
let accountIdentifier;
let siteIdentifier;
let page_title;


function getRequestOrigin() {
    return document.referrer;
}

function getRequestGeolocation() {
    if ("geolocation" in navigator) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          error => {
            reject(error);
          }
        );
      });
    } else {
      return Promise.reject(new Error("Geolocation is not supported."));
    }
  }
  
// Usage
getRequestGeolocation()
.then(({ latitude, longitude }) => {
    long = longitude
    lat = latitude
})
.catch(error => {
    console.error("Error:", error);
});
  

  
 // Function to generate a unique ID
 function generateUniqueID() {
    function generateRandomChars(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randomChars = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomChars += characters.charAt(randomIndex);
        }
        return randomChars;
    }
    const timestamp = Date.now().toString(); // Get current timestamp
    const randomChars = generateRandomChars(12); // Generate 12 random alphanumeric characters
    const uniqueID = timestamp + randomChars; // Combine timestamp and random characters
    return uniqueID;
}   


  
 
const scriptElement = document.currentScript;
window.addEventListener('load', function() {

    // Retrieve the account and website identifiers from data attributes
    accountIdentifier = scriptElement.getAttribute('data-account-id');
    siteIdentifier = scriptElement.getAttribute('data-website-id');
    // console.log('userid:',accountIdentifier)
    // console.log('siteid:',accountIdentifier)

    page_title= document.title



    const userAgent = navigator.userAgent;
    const platformInfo = platform.parse(userAgent);
    const browser = platformInfo.name;
    const version = platformInfo.version;
    const os = platformInfo.os;
    const device = platformInfo.device;
    // console.log(userAgent)
    console.log(`Browser: ${browser}`);
    console.log(`Version: ${version}`);
    console.log(`Operating System: ${os}`);
    console.log(`Device: ${device}`);

    // Code to be executed when the window finishes loading
    pageLoadTime = performance.now();
    
    
    // Measure First Contentful Paint (FCP)
    function getFCPTime() {
        const fcpEntry = window.performance.getEntriesByType('paint')[0];
        return fcpEntry ? fcpEntry.startTime : 'N/A';
    }
  
  // Measure Time to Interactive (TTI)
    function getTTITime() {
        const ttiEntry = window.performance.getEntriesByName('first-input');
        return ttiEntry.length > 0 ? ttiEntry[0].startTime : 'N/A';
    }
    
    // Measure First Meaningful Paint (FMP)
    function getFMPTime() {
        const fmpEntry = window.performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint');
        return fmpEntry ? fmpEntry.startTime : 'N/A';
    }
  
    // Measure Load Event Time
    function getLoadEventTime() {
        return window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    }
  
    // Measure Total Page Size
    function getTotalPageSize() {
        return document.documentElement.innerHTML.length;
    }
    
    // Measure page load time
    function getPageLoadTime() {
        const timing = window.performance.timing;
        const navigation = window.performance.navigation;
        
        if (timing && navigation) {
        const { domComplete, navigationStart } = timing;
        const { redirectCount } = navigation;
        
        // Calculate page load time only if there was no redirect
        if (redirectCount === 0) {
            return domComplete - navigationStart;
        }
        }
        
        // Return 0 if page load time cannot be determined
        return 0;
    }
    

    // console.log(generateUniqueID())
  
    // Function to set a visitor ID and expiration in the browser's storage
    function setVisitorID() {
        const visitorID = generateUniqueID();
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1); // Set expiration to 24 hours from now
    
        // Set the visitor ID and expiration in a cookie or local storage
        // Example using local storage:
        localStorage.setItem('visitorID', visitorID);
        localStorage.setItem('expirationDate', expirationDate.toISOString());
    }
  
    // Function to check if the visitor ID is still valid
    function isVisitorIDValid() {
        const expirationDate = localStorage.getItem('expirationDate');
        return expirationDate && new Date(expirationDate) > new Date();
    }
  
    // Function to get the visitor ID
    function getVisitorID() {
        // Check if the visitor ID is still valid
        if (isVisitorIDValid()) {
            return localStorage.getItem('visitorID');
        } else {
        // If the visitor ID has expired or doesn't exist, set a new one
            setVisitorID();
            return localStorage.getItem('visitorID');
        }
    }
    
    // Usage example
    const visitorID = getVisitorID();
    requestId = visitorID
    console.log(visitorID);
  






    // Define the function to send the event data to your analytics backend
    function sendEventToAnalytics(eventData, type) {
    //   console.log(eventData)
      let url;
        if(type=='load'){
            url = 'register-load/'+accountIdentifier+'/'+siteIdentifier
        }else if(type == 'events'){
            url = 'register-event/'+accountIdentifier+'/'+siteIdentifier
        }else if(type == 'unload'){
          url = 'register-unload/'+accountIdentifier+'/'+siteIdentifier
        }
      fetch('http://localhost:5000/'+url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
        // Handle the response data here
      })
        .catch(error => {
          // Handle any errors that occur during the request
        });
    }
  
    // Track page view event
    function trackPageView() {
      var eventData = {
        eventType: 'pageView',
        requestId:requestId,
        pageTitle: document.title,
        pageURL: window.location.href,
        referral: getRequestOrigin(), 
        origin:window.location.origin,
        // pagetitle: document.title,
        browser:browser,
        os:os,
        device:device,
        location:{
             longitude:long, 
            latitude: lat, 
        },
        speed:{
           pageLoadTime:getPageLoadTime(),
           fcp:getFCPTime(),
           tti:getTTITime(),
           fmp:getFMPTime(),
           loadeventime:getLoadEventTime(),
           tps: getTotalPageSize(),
        },
        timestamp: new Date().toISOString(),
      };
      sendEventToAnalytics(eventData, 'load');
    }
   
    // Attach event listeners to track page view and click events
    trackPageView()

   
    
});
  



window.addEventListener('beforeunload', function(event) {
    // event.preventDefault()
    accountIdentifier = scriptElement.getAttribute('data-account-id');
    siteIdentifier = scriptElement.getAttribute('data-website-id');
   
  
    const eventData = {
      requestId:requestId
    }
    
    const url = `http://localhost:5000/register-unload/${accountIdentifier}/${siteIdentifier}`;
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
        // Handle the response data here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
      });
     

      // Set a custom message to display in the confirmation dialog (optional)
      // event.returnValue = 'Are you sure you want to leave this page?';
  });
  



// Function to handle the click event
function handleClick(event) {
  // Get the necessary data about the click event
  const timestamp = new Date();
  const page_title = document.title;
  const pageURL = window.location.href;
  const referrerURL = document.referrer;
  requestId = requestId
  const clickCoordinates = {
    x: event.clientX,
    y: event.clientY
  };
  const elementID = event.target.id;
  const elementText = event.target.innerText; // Capture the inner text of the clicked element
  const eventType = 'click'; // You can customize the event type as needed

  // Create an object to store the captured data
  const eventData = {
    timestamp,
    pageURL,
    page_title,
    clickCoordinates,
    elementID,
    elementText,
    eventType,
    requestId
  };

  // Make an API call to send the eventData to the server
  // Replace 'http://localhost/api/events' with your actual API endpoint
  fetch('http://localhost:5000/register-event/'+accountIdentifier+'/'+siteIdentifier, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server if needed
    })
    .catch(error => {
      // Handle any errors that occurred during the API call
      console.error('Error:', error);
    });
}

// Add event listener to capture click events on the document
document.addEventListener('click', handleClick);
