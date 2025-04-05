//Authors: Ethan Scott all by myself and yep//

function saveLocalStorageToCookies() {
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        document.cookie = `${key}=${localStorage.getItem(key)}; expires=Thu, 18 Dec 6543 12:00:00 UTC; path=/`; 
      }
    }
  }
  
  function cookieLoad() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      localStorage.setItem(key, value); 
    }
  }
  
  // Example usage:
  document.getElementById('cookiesSave').addEventListener('click', saveLocalStorageToCookies);
  document.getElementById('cookiesLoad').addEventListener('click', cookieLoad);