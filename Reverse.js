const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
console.log( "A" - "B" + "2");