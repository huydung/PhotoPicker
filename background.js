/**
 * Listens for the app launching then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  
  chrome.app.window.create(
    "release/build.html",
    {
      id: "photoPicker",
      //resizable: false,
      state: "maximized",
      /*
      bounds: {
        width: window.screen.availWidth,
        height: window.screen.availHeight
      }
      */
    }
  );
});
