var e=require("axios"),t=function(){};t.prototype.store=function(t,o){void 0===o&&(o={});try{return Promise.resolve(e.post("/vapor/signed-storage-url",{bucket:o.bucket||"",content_type:o.contentType||t.type,expires:o.expires||"",visibility:o.visibility||""},Object.assign({},{baseURL:o.baseURL||null,headers:o.headers||{}},o.options))).then(function(r){var n=r.data.headers;return"Host"in n&&delete n.Host,void 0===o.progress&&(o.progress=function(){}),Promise.resolve(e.put(r.data.url,t,{cancelToken:o.cancelToken||"",headers:n,onUploadProgress:function(e){o.progress(e.loaded/e.total)}})).then(function(){return r.data.extension=t.name.split(".").pop(),r.data})})}catch(e){return Promise.reject(e)}},module.exports=new t;
//# sourceMappingURL=laravel-vapor.mjs.map
