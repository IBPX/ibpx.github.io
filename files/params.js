/*
params.js - Copyright (C) 2013 bobberson12
Licenced under the GNU GPL v2
-
NOTE: At the moment, only the base 'getRawParams()' feature is working. The rest will be uploaded when finished.
-bobberson12
*/
function getRawParams() { /*This just gets everything after the "?". (e.g. getting asdf from www.mywebsite.com/example.html?asdf)*/
 p=document.location.search.substring(1);
 p=unescape(p);
 return p;
}
