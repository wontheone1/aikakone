// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__36611 = e.target.readyState;
var fexpr__36610 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__36610.cljs$core$IFn$_invoke$arity$1 ? fexpr__36610.cljs$core$IFn$_invoke$arity$1(G__36611) : fexpr__36610.call(null,G__36611));
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__36613,handler){
var map__36614 = p__36613;
var map__36614__$1 = ((((!((map__36614 == null)))?((((map__36614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36614):map__36614);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36614__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36614__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36614__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__36614,map__36614__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__36612_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__36612_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__36614,map__36614__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___36626 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___36626)){
var response_type_36627 = temp__5457__auto___36626;
this$__$1.responseType = cljs.core.name(response_type_36627);
} else {
}

var seq__36616_36628 = cljs.core.seq(headers);
var chunk__36617_36629 = null;
var count__36618_36630 = (0);
var i__36619_36631 = (0);
while(true){
if((i__36619_36631 < count__36618_36630)){
var vec__36620_36632 = chunk__36617_36629.cljs$core$IIndexed$_nth$arity$2(null,i__36619_36631);
var k_36633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620_36632,(0),null);
var v_36634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36620_36632,(1),null);
this$__$1.setRequestHeader(k_36633,v_36634);

var G__36635 = seq__36616_36628;
var G__36636 = chunk__36617_36629;
var G__36637 = count__36618_36630;
var G__36638 = (i__36619_36631 + (1));
seq__36616_36628 = G__36635;
chunk__36617_36629 = G__36636;
count__36618_36630 = G__36637;
i__36619_36631 = G__36638;
continue;
} else {
var temp__5457__auto___36639 = cljs.core.seq(seq__36616_36628);
if(temp__5457__auto___36639){
var seq__36616_36640__$1 = temp__5457__auto___36639;
if(cljs.core.chunked_seq_QMARK_(seq__36616_36640__$1)){
var c__9739__auto___36641 = cljs.core.chunk_first(seq__36616_36640__$1);
var G__36642 = cljs.core.chunk_rest(seq__36616_36640__$1);
var G__36643 = c__9739__auto___36641;
var G__36644 = cljs.core.count(c__9739__auto___36641);
var G__36645 = (0);
seq__36616_36628 = G__36642;
chunk__36617_36629 = G__36643;
count__36618_36630 = G__36644;
i__36619_36631 = G__36645;
continue;
} else {
var vec__36623_36646 = cljs.core.first(seq__36616_36640__$1);
var k_36647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36623_36646,(0),null);
var v_36648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36623_36646,(1),null);
this$__$1.setRequestHeader(k_36647,v_36648);

var G__36649 = cljs.core.next(seq__36616_36640__$1);
var G__36650 = null;
var G__36651 = (0);
var G__36652 = (0);
seq__36616_36628 = G__36649;
chunk__36617_36629 = G__36650;
count__36618_36630 = G__36651;
i__36619_36631 = G__36652;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8808__auto__ = body;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
