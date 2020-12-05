let db;
// create a new db request for a "budget" database.
let request = indexedDB.open('budget', 1);


request.onupgradeneeded = function (event) {
  // create object store called "pending" and set autoIncrement to true
  let db = event.target.result;
  db.createObjectStore('pending', { autoIncrement: true });

};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log('Something Went Wrong');
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  let transaction = db.transaction(['pending'], 'readwrite');
  // access your pending object store
  let storing = transaction.objectStore('pending');
  // add record to your store with add method.
  storing.add(record);

}

function checkDatabase() {
  // open a transaction on your pending db
  let transaction = db.transaction(['pending'], 'readwrite');
  // access your pending object store
  let storing = transaction.objectStore('pending');
  // get all records from store and set to a variable
  let getAll = storing.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          let transaction = db.transaction(['pending'], 'readwrite');
          // access your pending object store
          let storing = transaction.objectStore('pending');// access your pending object store
          storing.clear();
          // clear all items in your store
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
