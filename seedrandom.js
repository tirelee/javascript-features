const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
var regexp  = new RegExp('{{([^}]+)}}', 'g');