export  function checkLogin() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      return isLoggedIn;
    }
  }