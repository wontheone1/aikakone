// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__8796__auto__ = v;
if(cljs.core.truth_(and__8796__auto__)){
return (v > (0));
} else {
return and__8796__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40448_SHARP_,p2__40447_SHARP_){
var vec__40449 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__40447_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40449,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40449,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40448_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40452_SHARP_){
return cljs_http.client.encode_val(k,p1__40452_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__40453){
var vec__40454 = p__40453;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40454,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__40457_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40457_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__8796__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5455__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__40458 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40458) : client.call(null,G__40458));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__40459_SHARP_){
return cljs_http.client.decode_body(p1__40459_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40467 = arguments.length;
var i__10088__auto___40468 = (0);
while(true){
if((i__10088__auto___40468 < len__10087__auto___40467)){
args__10094__auto__.push((arguments[i__10088__auto___40468]));

var G__40469 = (i__10088__auto___40468 + (1));
i__10088__auto___40468 = G__40469;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__40462){
var vec__40463 = p__40462;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40463,(0),null);
return ((function (vec__40463,default_headers){
return (function (request){
var temp__5455__auto__ = (function (){var or__8808__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var default_headers__$1 = temp__5455__auto__;
var G__40466 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40466) : client.call(null,G__40466));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__40463,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq40460){
var G__40461 = cljs.core.first(seq40460);
var seq40460__$1 = cljs.core.next(seq40460);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__40461,seq40460__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40477 = arguments.length;
var i__10088__auto___40478 = (0);
while(true){
if((i__10088__auto___40478 < len__10087__auto___40477)){
args__10094__auto__.push((arguments[i__10088__auto___40478]));

var G__40479 = (i__10088__auto___40478 + (1));
i__10088__auto___40478 = G__40479;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__40472){
var vec__40473 = p__40472;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40473,(0),null);
return ((function (vec__40473,accept){
return (function (request){
var temp__5455__auto__ = (function (){var or__8808__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var accept__$1 = temp__5455__auto__;
var G__40476 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40476) : client.call(null,G__40476));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__40473,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq40470){
var G__40471 = cljs.core.first(seq40470);
var seq40470__$1 = cljs.core.next(seq40470);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__40471,seq40470__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40487 = arguments.length;
var i__10088__auto___40488 = (0);
while(true){
if((i__10088__auto___40488 < len__10087__auto___40487)){
args__10094__auto__.push((arguments[i__10088__auto___40488]));

var G__40489 = (i__10088__auto___40488 + (1));
i__10088__auto___40488 = G__40489;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__40482){
var vec__40483 = p__40482;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483,(0),null);
return ((function (vec__40483,content_type){
return (function (request){
var temp__5455__auto__ = (function (){var or__8808__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var content_type__$1 = temp__5455__auto__;
var G__40486 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40486) : client.call(null,G__40486));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__40483,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq40480){
var G__40481 = cljs.core.first(seq40480);
var seq40480__$1 = cljs.core.next(seq40480);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__40481,seq40480__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5455__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var map__40490 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__40490__$1 = ((((!((map__40490 == null)))?((((map__40490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40490):map__40490);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40490__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40490__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__40492 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40492) : client.call(null,G__40492));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__40495 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__40495__$1 = ((((!((map__40495 == null)))?((((map__40495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40495):map__40495);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40495__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40495__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__40495,map__40495__$1,decoding,decoding_opts){
return (function (p1__40493_SHARP_){
return cljs_http.util.transit_decode(p1__40493_SHARP_,decoding,decoding_opts);
});})(map__40495,map__40495__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__40495,map__40495__$1,decoding,decoding_opts,transit_decode){
return (function (p1__40494_SHARP_){
return cljs_http.client.decode_body(p1__40494_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__40495,map__40495__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5455__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__40497 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40497) : client.call(null,G__40497));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__40498_SHARP_){
return cljs_http.client.decode_body(p1__40498_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__40499){
var map__40500 = p__40499;
var map__40500__$1 = ((((!((map__40500 == null)))?((((map__40500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40500):map__40500);
var req = map__40500__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40500__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__40502 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40502) : client.call(null,G__40502));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__40503){
var map__40504 = p__40503;
var map__40504__$1 = ((((!((map__40504 == null)))?((((map__40504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40504):map__40504);
var request = map__40504__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40504__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40504__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40504__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__8796__auto__ = form_params;
if(cljs.core.truth_(and__8796__auto__)){
var fexpr__40506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__40506.cljs$core$IFn$_invoke$arity$1 ? fexpr__40506.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__40506.call(null,request_method));
} else {
return and__8796__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__40507 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40507) : client.call(null,G__40507));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__40508_40518 = cljs.core.seq(params);
var chunk__40509_40519 = null;
var count__40510_40520 = (0);
var i__40511_40521 = (0);
while(true){
if((i__40511_40521 < count__40510_40520)){
var vec__40512_40522 = chunk__40509_40519.cljs$core$IIndexed$_nth$arity$2(null,i__40511_40521);
var k_40523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512_40522,(0),null);
var v_40524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40512_40522,(1),null);
if(cljs.core.coll_QMARK_(v_40524)){
form_data.append(cljs.core.name(k_40523),cljs.core.first(v_40524),cljs.core.second(v_40524));
} else {
form_data.append(cljs.core.name(k_40523),v_40524);
}

var G__40525 = seq__40508_40518;
var G__40526 = chunk__40509_40519;
var G__40527 = count__40510_40520;
var G__40528 = (i__40511_40521 + (1));
seq__40508_40518 = G__40525;
chunk__40509_40519 = G__40526;
count__40510_40520 = G__40527;
i__40511_40521 = G__40528;
continue;
} else {
var temp__5457__auto___40529 = cljs.core.seq(seq__40508_40518);
if(temp__5457__auto___40529){
var seq__40508_40530__$1 = temp__5457__auto___40529;
if(cljs.core.chunked_seq_QMARK_(seq__40508_40530__$1)){
var c__9739__auto___40531 = cljs.core.chunk_first(seq__40508_40530__$1);
var G__40532 = cljs.core.chunk_rest(seq__40508_40530__$1);
var G__40533 = c__9739__auto___40531;
var G__40534 = cljs.core.count(c__9739__auto___40531);
var G__40535 = (0);
seq__40508_40518 = G__40532;
chunk__40509_40519 = G__40533;
count__40510_40520 = G__40534;
i__40511_40521 = G__40535;
continue;
} else {
var vec__40515_40536 = cljs.core.first(seq__40508_40530__$1);
var k_40537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40515_40536,(0),null);
var v_40538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40515_40536,(1),null);
if(cljs.core.coll_QMARK_(v_40538)){
form_data.append(cljs.core.name(k_40537),cljs.core.first(v_40538),cljs.core.second(v_40538));
} else {
form_data.append(cljs.core.name(k_40537),v_40538);
}

var G__40539 = cljs.core.next(seq__40508_40530__$1);
var G__40540 = null;
var G__40541 = (0);
var G__40542 = (0);
seq__40508_40518 = G__40539;
chunk__40509_40519 = G__40540;
count__40510_40520 = G__40541;
i__40511_40521 = G__40542;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__40543){
var map__40544 = p__40543;
var map__40544__$1 = ((((!((map__40544 == null)))?((((map__40544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40544):map__40544);
var request = map__40544__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40544__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40544__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__8796__auto__ = multipart_params;
if(cljs.core.truth_(and__8796__auto__)){
var fexpr__40546 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__40546.cljs$core$IFn$_invoke$arity$1 ? fexpr__40546.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__40546.call(null,request_method));
} else {
return and__8796__auto__;
}
})())){
var G__40547 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40547) : client.call(null,G__40547));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5455__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
var G__40548 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40548) : client.call(null,G__40548));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__40549_SHARP_){
var G__40550 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40549_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40550) : client.call(null,G__40550));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__40552){
var map__40553 = p__40552;
var map__40553__$1 = ((((!((map__40553 == null)))?((((map__40553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40553):map__40553);
var req = map__40553__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40553__$1,cljs.core.cst$kw$query_DASH_params);
var temp__5455__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5455__auto__)){
var spec = temp__5455__auto__;
var G__40555 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__5455__auto__,map__40553,map__40553__$1,req,query_params){
return (function (p1__40551_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__40551_SHARP_,query_params], 0));
});})(spec,temp__5455__auto__,map__40553,map__40553__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40555) : client.call(null,G__40555));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40563 = arguments.length;
var i__10088__auto___40564 = (0);
while(true){
if((i__10088__auto___40564 < len__10087__auto___40563)){
args__10094__auto__.push((arguments[i__10088__auto___40564]));

var G__40565 = (i__10088__auto___40564 + (1));
i__10088__auto___40564 = G__40565;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__40558){
var vec__40559 = p__40558;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40559,(0),null);
return ((function (vec__40559,credentials){
return (function (req){
var credentials__$1 = (function (){var or__8808__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__40562 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40562) : client.call(null,G__40562));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__40559,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq40556){
var G__40557 = cljs.core.first(seq40556);
var seq40556__$1 = cljs.core.next(seq40556);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__40557,seq40556__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5455__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var oauth_token = temp__5455__auto__;
var G__40566 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__40566) : client.call(null,G__40566));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5455__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var custom_channel = temp__5455__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40574 = arguments.length;
var i__10088__auto___40575 = (0);
while(true){
if((i__10088__auto___40575 < len__10087__auto___40574)){
args__10094__auto__.push((arguments[i__10088__auto___40575]));

var G__40576 = (i__10088__auto___40575 + (1));
i__10088__auto___40575 = G__40576;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40569){
var vec__40570 = p__40569;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40570,(0),null);
var G__40573 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__40573) : cljs_http.client.request.call(null,G__40573));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq40567){
var G__40568 = cljs.core.first(seq40567);
var seq40567__$1 = cljs.core.next(seq40567);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__40568,seq40567__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40584 = arguments.length;
var i__10088__auto___40585 = (0);
while(true){
if((i__10088__auto___40585 < len__10087__auto___40584)){
args__10094__auto__.push((arguments[i__10088__auto___40585]));

var G__40586 = (i__10088__auto___40585 + (1));
i__10088__auto___40585 = G__40586;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40579){
var vec__40580 = p__40579;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40580,(0),null);
var G__40583 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__40583) : cljs_http.client.request.call(null,G__40583));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq40577){
var G__40578 = cljs.core.first(seq40577);
var seq40577__$1 = cljs.core.next(seq40577);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__40578,seq40577__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40594 = arguments.length;
var i__10088__auto___40595 = (0);
while(true){
if((i__10088__auto___40595 < len__10087__auto___40594)){
args__10094__auto__.push((arguments[i__10088__auto___40595]));

var G__40596 = (i__10088__auto___40595 + (1));
i__10088__auto___40595 = G__40596;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40589){
var vec__40590 = p__40589;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40590,(0),null);
var G__40593 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__40593) : cljs_http.client.request.call(null,G__40593));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq40587){
var G__40588 = cljs.core.first(seq40587);
var seq40587__$1 = cljs.core.next(seq40587);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__40588,seq40587__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40604 = arguments.length;
var i__10088__auto___40605 = (0);
while(true){
if((i__10088__auto___40605 < len__10087__auto___40604)){
args__10094__auto__.push((arguments[i__10088__auto___40605]));

var G__40606 = (i__10088__auto___40605 + (1));
i__10088__auto___40605 = G__40606;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40599){
var vec__40600 = p__40599;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40600,(0),null);
var G__40603 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__40603) : cljs_http.client.request.call(null,G__40603));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq40597){
var G__40598 = cljs.core.first(seq40597);
var seq40597__$1 = cljs.core.next(seq40597);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__40598,seq40597__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40614 = arguments.length;
var i__10088__auto___40615 = (0);
while(true){
if((i__10088__auto___40615 < len__10087__auto___40614)){
args__10094__auto__.push((arguments[i__10088__auto___40615]));

var G__40616 = (i__10088__auto___40615 + (1));
i__10088__auto___40615 = G__40616;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40609){
var vec__40610 = p__40609;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40610,(0),null);
var G__40613 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__40613) : cljs_http.client.request.call(null,G__40613));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq40607){
var G__40608 = cljs.core.first(seq40607);
var seq40607__$1 = cljs.core.next(seq40607);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__40608,seq40607__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40624 = arguments.length;
var i__10088__auto___40625 = (0);
while(true){
if((i__10088__auto___40625 < len__10087__auto___40624)){
args__10094__auto__.push((arguments[i__10088__auto___40625]));

var G__40626 = (i__10088__auto___40625 + (1));
i__10088__auto___40625 = G__40626;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40619){
var vec__40620 = p__40619;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40620,(0),null);
var G__40623 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__40623) : cljs_http.client.request.call(null,G__40623));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq40617){
var G__40618 = cljs.core.first(seq40617);
var seq40617__$1 = cljs.core.next(seq40617);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__40618,seq40617__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40634 = arguments.length;
var i__10088__auto___40635 = (0);
while(true){
if((i__10088__auto___40635 < len__10087__auto___40634)){
args__10094__auto__.push((arguments[i__10088__auto___40635]));

var G__40636 = (i__10088__auto___40635 + (1));
i__10088__auto___40635 = G__40636;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40629){
var vec__40630 = p__40629;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40630,(0),null);
var G__40633 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__40633) : cljs_http.client.request.call(null,G__40633));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq40627){
var G__40628 = cljs.core.first(seq40627);
var seq40627__$1 = cljs.core.next(seq40627);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__40628,seq40627__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40644 = arguments.length;
var i__10088__auto___40645 = (0);
while(true){
if((i__10088__auto___40645 < len__10087__auto___40644)){
args__10094__auto__.push((arguments[i__10088__auto___40645]));

var G__40646 = (i__10088__auto___40645 + (1));
i__10088__auto___40645 = G__40646;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40639){
var vec__40640 = p__40639;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40640,(0),null);
var G__40643 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__40643) : cljs_http.client.request.call(null,G__40643));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq40637){
var G__40638 = cljs.core.first(seq40637);
var seq40637__$1 = cljs.core.next(seq40637);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__40638,seq40637__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__10094__auto__ = [];
var len__10087__auto___40654 = arguments.length;
var i__10088__auto___40655 = (0);
while(true){
if((i__10088__auto___40655 < len__10087__auto___40654)){
args__10094__auto__.push((arguments[i__10088__auto___40655]));

var G__40656 = (i__10088__auto___40655 + (1));
i__10088__auto___40655 = G__40656;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__40649){
var vec__40650 = p__40649;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40650,(0),null);
var G__40653 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__40653) : cljs_http.client.request.call(null,G__40653));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq40647){
var G__40648 = cljs.core.first(seq40647);
var seq40647__$1 = cljs.core.next(seq40647);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__40648,seq40647__$1);
});

