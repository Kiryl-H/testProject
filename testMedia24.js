alert('ok');

const queryString = window.location.search;

console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const page_type = urlParams.get('page_type')

console.log(page_type);