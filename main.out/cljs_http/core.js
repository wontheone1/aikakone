// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = (function (){var fexpr__37919 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__37919.cljs$core$IFn$_invoke$arity$1 ? fexpr__37919.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__37919.call(null,channel));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__37920){
var vec__37921 = p__37920;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37921,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__37924 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__37924)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__37924)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__37924)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__37924)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__37924)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__37924)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37924)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__37925){
var map__37926 = p__37925;
var map__37926__$1 = ((((!((map__37926 == null)))?((((map__37926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37926):map__37926);
var request = map__37926__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__8808__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__37928 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__37928,default_headers);

cljs_http.core.apply_response_type_BANG_(G__37928,response_type);

G__37928.setTimeoutInterval(timeout);

G__37928.setWithCredentials(send_credentials);

return G__37928;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__37929){
var map__37930 = p__37929;
var map__37930__$1 = ((((!((map__37930 == null)))?((((map__37930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37930):map__37930);
var request = map__37930__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37930__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37930__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37930__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37930__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37930__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37930__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__8808__auto__ = request_method;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__37932 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__37932) : cljs_http.core.error_kw.call(null,G__37932));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_37955 = ((function (channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__37933_37956 = xhr;
G__37933_37956.setProgressEventsEnabled(true);

G__37933_37956.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_37955,cljs.core.cst$kw$upload));

G__37933_37956.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_37955,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__34390__auto___37957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___37957,channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___37957,channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_37944){
var state_val_37945 = (state_37944[(1)]);
if((state_val_37945 === (1))){
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37944__$1,(2),cancel);
} else {
if((state_val_37945 === (2))){
var inst_37935 = (state_37944[(2)]);
var inst_37936 = xhr.isComplete();
var inst_37937 = cljs.core.not(inst_37936);
var state_37944__$1 = (function (){var statearr_37946 = state_37944;
(statearr_37946[(7)] = inst_37935);

return statearr_37946;
})();
if(inst_37937){
var statearr_37947_37958 = state_37944__$1;
(statearr_37947_37958[(1)] = (3));

} else {
var statearr_37948_37959 = state_37944__$1;
(statearr_37948_37959[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_37945 === (3))){
var inst_37939 = xhr.abort();
var state_37944__$1 = state_37944;
var statearr_37949_37960 = state_37944__$1;
(statearr_37949_37960[(2)] = inst_37939);

(statearr_37949_37960[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37945 === (4))){
var state_37944__$1 = state_37944;
var statearr_37950_37961 = state_37944__$1;
(statearr_37950_37961[(2)] = null);

(statearr_37950_37961[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_37945 === (5))){
var inst_37942 = (state_37944[(2)]);
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37944__$1,inst_37942);
} else {
return null;
}
}
}
}
}
});})(c__34390__auto___37957,channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__34288__auto__,c__34390__auto___37957,channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__34289__auto__ = null;
var cljs_http$core$xhr_$_state_machine__34289__auto____0 = (function (){
var statearr_37951 = [null,null,null,null,null,null,null,null];
(statearr_37951[(0)] = cljs_http$core$xhr_$_state_machine__34289__auto__);

(statearr_37951[(1)] = (1));

return statearr_37951;
});
var cljs_http$core$xhr_$_state_machine__34289__auto____1 = (function (state_37944){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_37944);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e37952){if((e37952 instanceof Object)){
var ex__34292__auto__ = e37952;
var statearr_37953_37962 = state_37944;
(statearr_37953_37962[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37944);

return cljs.core.cst$kw$recur;
} else {
throw e37952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__37963 = state_37944;
state_37944 = G__37963;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__34289__auto__ = function(state_37944){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__34289__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__34289__auto____1.call(this,state_37944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__34289__auto____0;
cljs_http$core$xhr_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__34289__auto____1;
return cljs_http$core$xhr_$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___37957,channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__34392__auto__ = (function (){var statearr_37954 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_37954[(6)] = c__34390__auto___37957);

return statearr_37954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___37957,channel,request_url,method,headers__$1,xhr,map__37930,map__37930__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__37964){
var map__37965 = p__37964;
var map__37965__$1 = ((((!((map__37965 == null)))?((((map__37965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37965):map__37965);
var request = map__37965__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37965__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37965__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37965__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37965__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_37978 = jsonp.send(null,((function (channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_37978], null));

if(cljs.core.truth_(cancel)){
var c__34390__auto___37979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___37979,req_37978,channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___37979,req_37978,channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_37971){
var state_val_37972 = (state_37971[(1)]);
if((state_val_37972 === (1))){
var state_37971__$1 = state_37971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37971__$1,(2),cancel);
} else {
if((state_val_37972 === (2))){
var inst_37968 = (state_37971[(2)]);
var inst_37969 = jsonp.cancel(req_37978);
var state_37971__$1 = (function (){var statearr_37973 = state_37971;
(statearr_37973[(7)] = inst_37968);

return statearr_37973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37971__$1,inst_37969);
} else {
return null;
}
}
});})(c__34390__auto___37979,req_37978,channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__34288__auto__,c__34390__auto___37979,req_37978,channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__34289__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__34289__auto____0 = (function (){
var statearr_37974 = [null,null,null,null,null,null,null,null];
(statearr_37974[(0)] = cljs_http$core$jsonp_$_state_machine__34289__auto__);

(statearr_37974[(1)] = (1));

return statearr_37974;
});
var cljs_http$core$jsonp_$_state_machine__34289__auto____1 = (function (state_37971){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_37971);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e37975){if((e37975 instanceof Object)){
var ex__34292__auto__ = e37975;
var statearr_37976_37980 = state_37971;
(statearr_37976_37980[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37971);

return cljs.core.cst$kw$recur;
} else {
throw e37975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__37981 = state_37971;
state_37971 = G__37981;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__34289__auto__ = function(state_37971){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__34289__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__34289__auto____1.call(this,state_37971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__34289__auto____0;
cljs_http$core$jsonp_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__34289__auto____1;
return cljs_http$core$jsonp_$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___37979,req_37978,channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__34392__auto__ = (function (){var statearr_37977 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_37977[(6)] = c__34390__auto___37979);

return statearr_37977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___37979,req_37978,channel,jsonp,map__37965,map__37965__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__37982){
var map__37983 = p__37982;
var map__37983__$1 = ((((!((map__37983 == null)))?((((map__37983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37983):map__37983);
var request = map__37983__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
