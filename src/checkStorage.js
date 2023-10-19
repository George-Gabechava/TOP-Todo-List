//Check to see if localStorage is available:
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }


//Provide result of if localStorage is available:
export function isStorageAvailable() {
    if (storageAvailable("localStorage")) {
        //localStorage is available!
        console.log("Ladies and Gentlemen, we got 'em.");

        //run functions to create To Do list that can save

    }
    else {
        // No localStorage available.
        console.log("We don't got 'em.");

        //run functions to create To Do list that cannot save

    }
}
