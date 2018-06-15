// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(79),(1)], null));
} else {
taoensso.encore.assert_min_encore_version(2.79);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$expected,expected,cljs.core.cst$kw$actual,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$value,x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$vector,x)], null);
} else {
if(cljs.core.not((function (){var G__43817 = cljs.core.count(x);
var fexpr__43816 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__43816.cljs$core$IFn$_invoke$arity$1 ? fexpr__43816.cljs$core$IFn$_invoke$arity$1(G__43817) : fexpr__43816.call(null,G__43817));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_length,taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__43818 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrong_DASH_id_DASH_type,taoensso.sente.expected(cljs.core.cst$kw$keyword,ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$unnamespaced_DASH_id,taoensso.sente.expected(cljs.core.cst$kw$namespaced_DASH_keyword,ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5457__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5457__auto__)){
var errs = temp__5457__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$errors,errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5455__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5455__auto__)){
var errs = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_event,x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__8796__auto__ = cljs.core.map_QMARK_(x);
if(and__8796__auto__){
var and__8796__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__8796__auto____$1){
var map__43825 = x;
var map__43825__$1 = ((((!((map__43825 == null)))?((((map__43825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43825):map__43825);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43825__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43825__$1,cljs.core.cst$kw$send_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43825__$1,cljs.core.cst$kw$state);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43825__$1,cljs.core.cst$kw$event);
var and__8796__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(and__8796__auto____$2){
var and__8796__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__8796__auto____$3){
var and__8796__auto____$4 = taoensso.encore.atom_QMARK_(state);
if(and__8796__auto____$4){
return taoensso.sente.event_QMARK_(event);
} else {
return and__8796__auto____$4;
}
} else {
return and__8796__auto____$3;
}
} else {
return and__8796__auto____$2;
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__8796__auto__ = cljs.core.map_QMARK_(x);
if(and__8796__auto__){
var and__8796__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$_QMARK_reply_DASH_fn,null,cljs.core.cst$kw$ch_DASH_recv,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$connected_DASH_uids,null,cljs.core.cst$kw$uid,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$id,null,cljs.core.cst$kw$ring_DASH_req,null,cljs.core.cst$kw$_QMARK_data,null,cljs.core.cst$kw$send_DASH_fn,null], null), null),x);
if(and__8796__auto____$1){
var map__43831 = x;
var map__43831__$1 = ((((!((map__43831 == null)))?((((map__43831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43831):map__43831);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43831__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43831__$1,cljs.core.cst$kw$send_DASH_fn);
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43831__$1,cljs.core.cst$kw$connected_DASH_uids);
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43831__$1,cljs.core.cst$kw$ring_DASH_req);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43831__$1,cljs.core.cst$kw$client_DASH_id);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43831__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43831__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var and__8796__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(and__8796__auto____$2){
var and__8796__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__8796__auto____$3){
var and__8796__auto____$4 = taoensso.encore.atom_QMARK_(connected_uids);
if(and__8796__auto____$4){
var and__8796__auto____$5 = cljs.core.map_QMARK_(ring_req);
if(and__8796__auto____$5){
var and__8796__auto____$6 = taoensso.encore.nblank_str_QMARK_(client_id);
if(and__8796__auto____$6){
var and__8796__auto____$7 = taoensso.sente.event_QMARK_(event);
if(cljs.core.truth_(and__8796__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn));
} else {
return and__8796__auto____$7;
}
} else {
return and__8796__auto____$6;
}
} else {
return and__8796__auto____$5;
}
} else {
return and__8796__auto____$4;
}
} else {
return and__8796__auto____$3;
}
} else {
return and__8796__auto____$2;
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__43833){
var map__43834 = p__43833;
var map__43834__$1 = ((((!((map__43834 == null)))?((((map__43834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43834):map__43834);
var ev_msg = map__43834__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834__$1,cljs.core.cst$kw$event);
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834__$1,cljs.core.cst$kw$_QMARK_reply_DASH_fn);
var vec__43836 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(1),null);
var valid_event = vec__43836;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$event,valid_event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null)], 0));
if(cljs.core.not(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,187,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__43836,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__43834,map__43834__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__43836,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__43834,map__43834__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-1901705760);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__43839 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$chsk_SLASH_closed,null,cljs.core.cst$kw$chsk_SLASH_error,null,cljs.core.cst$kw$chsk_SLASH_timeout,null], null), null);
return (fexpr__43839.cljs$core$IFn$_invoke$arity$1 ? fexpr__43839.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__43839.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",201,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e43843){var t = e43843;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente",null,208,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,799454880);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_bad_DASH_package,pstr], null);
}})();
var vec__43840 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43840,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43840,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?cljs.core.cst$kw$ajax_DASH_cb:_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,214,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__43840,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__43840,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-969548989);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__43845 = arguments.length;
switch (G__43845) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,221,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,-567211384);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,cljs.core.cst$kw$ajax_DASH_cb))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,230,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1470903424);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$edn)){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if(cljs.core.truth_((function (){var fexpr__43850 = (function (p1__43847_SHARP_){
if(!((p1__43847_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__43847_SHARP_.taoensso$sente$interfaces$IPacker$))){
return true;
} else {
if((!p1__43847_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__43847_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__43847_SHARP_);
}
});
return fexpr__43850(x);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43848){if((e43848 instanceof Error)){
var e = e43848;
return e;
} else {
throw e43848;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",243,"((fn* [p1__43847#] (satisfies? interfaces/IPacker p1__43847#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn();


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___44146 = arguments.length;
var i__10088__auto___44147 = (0);
while(true){
if((i__10088__auto___44147 < len__10087__auto___44146)){
args__10094__auto__.push((arguments[i__10088__auto___44147]));

var G__44148 = (i__10088__auto___44147 + (1));
i__10088__auto___44147 = G__44148;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__43855){
var vec__43856 = p__43855;
var map__43859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43856,(0),null);
var map__43859__$1 = ((((!((map__43859 == null)))?((((map__43859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43859):map__43859);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43859__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((1000)));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43859__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(25)], 0)));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43859__$1,cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43859__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ajax,(100));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43859__$1,cljs.core.cst$kw$send_DASH_buf_DASH_ms_DASH_ws,(30));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43859__$1,cljs.core.cst$kw$user_DASH_id_DASH_fn,((function (vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$uid], null));
});})(vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43859__$1,cljs.core.cst$kw$csrf_DASH_token_DASH_fn,((function (vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__8808__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$csrf_DASH_token], null));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,cljs.core.cst$kw$ring$middleware$anti_DASH_forgery_SLASH_anti_DASH_forgery_DASH_token], null));
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$session,"__anti-forgery-token"], null));
}
}
});})(vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43859__$1,cljs.core.cst$kw$handshake_DASH_data_DASH_fn,((function (vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43859__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43861){if((e43861 instanceof Error)){
var e = e43861;
return e;
} else {
throw e43861;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",313,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43862){if((e43862 instanceof Error)){
var e = e43862;
return e;
} else {
throw e43862;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",313,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_44149 = (function (){try{if(cljs.core.truth_((function (){var fexpr__43865 = ((function (vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__43852_SHARP_){
if(!((p1__43852_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__43852_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$))){
return true;
} else {
if((!p1__43852_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__43852_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__43852_SHARP_);
}
});})(vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return fexpr__43865(web_server_ch_adapter);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43863){if((e43863 instanceof Error)){
var e = e43863;
return e;
} else {
throw e43863;

}
}})();
if((e_44149 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",314,"((fn* [p1__43852#] (satisfies? interfaces/IServerChanAdapter p1__43852#)) web-server-ch-adapter)",web_server_ch_adapter,e_44149,null);
}

var max_ms_44150 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_44150)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_44150)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lp_DASH_timeout_DASH_ms,lp_timeout_ms,cljs.core.cst$kw$default_DASH_client_DASH_side_DASH_ajax_DASH_timeout_DASH_ms,max_ms_44150], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__8808__auto__ = (function (){var G__43868 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,cljs.core.cst$kw$client_DASH_id,client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__43868) : user_id_fn.call(null,G__43868));
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid;
}
});})(packer__$1,ch_recv,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$ajax,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$any,cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__44151 = null;
var G__44151__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__43869 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43869,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43869,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__44151__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init_QMARK_,(_QMARK_v == null),cljs.core.cst$kw$udt,new_udt,cljs.core.cst$kw$_QMARK_sch,new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__44151 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__44151__3.call(this,conn_type,uid,client_id);
case 4:
return G__44151__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__44151.cljs$core$IFn$_invoke$arity$3 = G__44151__3;
G__44151.cljs$core$IFn$_invoke$arity$4 = G__44151__4;
return G__44151;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43872){if((e43872 instanceof Error)){
var e = e43872;
return e;
} else {
throw e43872;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",358,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__43873){
var map__43874 = p__43873;
var map__43874__$1 = ((((!((map__43874 == null)))?((((map__43874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43874):map__43874);
var old_m = map__43874__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43874__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43874__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43874__$1,cljs.core.cst$kw$any);
var new_m = (function (){var G__43876 = conn_type;
var G__43876__$1 = (((G__43876 instanceof cljs.core.Keyword))?G__43876.fqn:null);
switch (G__43876__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),cljs.core.cst$kw$ajax,ajax__$1,cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,ws,cljs.core.cst$kw$ajax,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),cljs.core.cst$kw$any,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43876__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_(old_any,uid))) && (cljs.core.contains_QMARK_(new_any,uid))){
return cljs.core.cst$kw$newly_DASH_connected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e43877){if((e43877 instanceof Error)){
var e = e43877;
return e;
} else {
throw e43877;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",375,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__43878){
var map__43879 = p__43878;
var map__43879__$1 = ((((!((map__43879 == null)))?((((map__43879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43879):map__43879);
var old_m = map__43879__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43879__$1,cljs.core.cst$kw$ws);
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43879__$1,cljs.core.cst$kw$ajax);
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43879__$1,cljs.core.cst$kw$any);
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ws.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(cljs.core.cst$kw$ajax.cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),cljs.core.cst$kw$ajax,((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid)),cljs.core.cst$kw$any,((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = cljs.core.cst$kw$any.cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_(old_any,uid)) && (!(cljs.core.contains_QMARK_(new_any,uid)))){
return cljs.core.cst$kw$newly_DASH_disconnected;
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__44153__delegate = function (user_id,ev,p__43881){
var vec__43882 = p__43881;
var map__43885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43882,(0),null);
var map__43885__$1 = ((((!((map__43885 == null)))?((((map__43885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43885):map__43885);
var opts = map__43885__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43885__$1,cljs.core.cst$kw$flush_QMARK_);
var uid_44154 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,cljs.core.cst$kw$sente_SLASH_all_DASH_users_DASH_without_DASH_uid))?cljs.core.cst$kw$taoensso$sente_SLASH_nil_DASH_uid:user_id);
var __44155 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,401,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_44154,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_44154,ev], null);
});})(uid_44154,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-510263428);
var __44156__$1 = (cljs.core.truth_(uid_44154)?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join('')),"\n","uid"].join('')))})());
var __44157__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_44158 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__44159 = ((function (uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__5457__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__43887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_44154);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43887,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43887,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_44158)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_44154),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_44154));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__5457__auto__)){
var pulled = temp__5457__auto__;
var vec__43890 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43890,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43890,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",428,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",429,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,432,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__43890,buffered_evs,ev_uuids,pulled,temp__5457__auto__,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__43890,buffered_evs,ev_uuids,pulled,temp__5457__auto__,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,812742555);

var G__43893 = conn_type;
var G__43893__$1 = (((G__43893 instanceof cljs.core.Keyword))?G__43893.fqn:null);
switch (G__43893__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_44154,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_44154,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_44154,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_44154,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43893__$1)].join('')));

}
} else {
return null;
}
});})(uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_close], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente",null,441,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_44154], null);
});})(uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,287309036);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__44159(cljs.core.cst$kw$ws);

flush_buffer_BANG__44159(cljs.core.cst$kw$ajax);
} else {
}

var seq__43894_44161 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid_44154], null))));
var chunk__43895_44162 = null;
var count__43896_44163 = (0);
var i__43897_44164 = (0);
while(true){
if((i__43897_44164 < count__43896_44163)){
var vec__43898_44165 = chunk__43895_44162.cljs$core$IIndexed$_nth$arity$2(null,i__43897_44164);
var _QMARK_sch_44166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43898_44165,(0),null);
var _udt_44167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43898_44165,(1),null);
var temp__5457__auto___44168 = _QMARK_sch_44166;
if(cljs.core.truth_(temp__5457__auto___44168)){
var sch_44169 = temp__5457__auto___44168;
taoensso.sente.interfaces.sch_close_BANG_(sch_44169);
} else {
}

var G__44170 = seq__43894_44161;
var G__44171 = chunk__43895_44162;
var G__44172 = count__43896_44163;
var G__44173 = (i__43897_44164 + (1));
seq__43894_44161 = G__44170;
chunk__43895_44162 = G__44171;
count__43896_44163 = G__44172;
i__43897_44164 = G__44173;
continue;
} else {
var temp__5457__auto___44174 = cljs.core.seq(seq__43894_44161);
if(temp__5457__auto___44174){
var seq__43894_44175__$1 = temp__5457__auto___44174;
if(cljs.core.chunked_seq_QMARK_(seq__43894_44175__$1)){
var c__9739__auto___44176 = cljs.core.chunk_first(seq__43894_44175__$1);
var G__44177 = cljs.core.chunk_rest(seq__43894_44175__$1);
var G__44178 = c__9739__auto___44176;
var G__44179 = cljs.core.count(c__9739__auto___44176);
var G__44180 = (0);
seq__43894_44161 = G__44177;
chunk__43895_44162 = G__44178;
count__43896_44163 = G__44179;
i__43897_44164 = G__44180;
continue;
} else {
var vec__43901_44181 = cljs.core.first(seq__43894_44175__$1);
var _QMARK_sch_44182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43901_44181,(0),null);
var _udt_44183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43901_44181,(1),null);
var temp__5457__auto___44184__$1 = _QMARK_sch_44182;
if(cljs.core.truth_(temp__5457__auto___44184__$1)){
var sch_44185 = temp__5457__auto___44184__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_44185);
} else {
}

var G__44186 = cljs.core.next(seq__43894_44175__$1);
var G__44187 = null;
var G__44188 = (0);
var G__44189 = (0);
seq__43894_44161 = G__44186;
chunk__43895_44162 = G__44187;
count__43896_44163 = G__44188;
i__43897_44164 = G__44189;
continue;
}
} else {
}
}
break;
}

var seq__43904_44190 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid_44154], null))));
var chunk__43905_44191 = null;
var count__43906_44192 = (0);
var i__43907_44193 = (0);
while(true){
if((i__43907_44193 < count__43906_44192)){
var vec__43908_44194 = chunk__43905_44191.cljs$core$IIndexed$_nth$arity$2(null,i__43907_44193);
var _QMARK_sch_44195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43908_44194,(0),null);
var _udt_44196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43908_44194,(1),null);
var temp__5457__auto___44197 = _QMARK_sch_44195;
if(cljs.core.truth_(temp__5457__auto___44197)){
var sch_44198 = temp__5457__auto___44197;
taoensso.sente.interfaces.sch_close_BANG_(sch_44198);
} else {
}

var G__44199 = seq__43904_44190;
var G__44200 = chunk__43905_44191;
var G__44201 = count__43906_44192;
var G__44202 = (i__43907_44193 + (1));
seq__43904_44190 = G__44199;
chunk__43905_44191 = G__44200;
count__43906_44192 = G__44201;
i__43907_44193 = G__44202;
continue;
} else {
var temp__5457__auto___44203 = cljs.core.seq(seq__43904_44190);
if(temp__5457__auto___44203){
var seq__43904_44204__$1 = temp__5457__auto___44203;
if(cljs.core.chunked_seq_QMARK_(seq__43904_44204__$1)){
var c__9739__auto___44205 = cljs.core.chunk_first(seq__43904_44204__$1);
var G__44206 = cljs.core.chunk_rest(seq__43904_44204__$1);
var G__44207 = c__9739__auto___44205;
var G__44208 = cljs.core.count(c__9739__auto___44205);
var G__44209 = (0);
seq__43904_44190 = G__44206;
chunk__43905_44191 = G__44207;
count__43906_44192 = G__44208;
i__43907_44193 = G__44209;
continue;
} else {
var vec__43911_44210 = cljs.core.first(seq__43904_44204__$1);
var _QMARK_sch_44211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43911_44210,(0),null);
var _udt_44212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43911_44210,(1),null);
var temp__5457__auto___44213__$1 = _QMARK_sch_44211;
if(cljs.core.truth_(temp__5457__auto___44213__$1)){
var sch_44214 = temp__5457__auto___44213__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_44214);
} else {
}

var G__44215 = cljs.core.next(seq__43904_44204__$1);
var G__44216 = null;
var G__44217 = (0);
var G__44218 = (0);
seq__43904_44190 = G__44215;
chunk__43905_44191 = G__44216;
count__43906_44192 = G__44217;
i__43907_44193 = G__44218;
continue;
}
} else {
}
}
break;
}
} else {
var seq__43914_44219 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,cljs.core.cst$kw$ajax], null));
var chunk__43915_44220 = null;
var count__43916_44221 = (0);
var i__43917_44222 = (0);
while(true){
if((i__43917_44222 < count__43916_44221)){
var conn_type_44223 = chunk__43915_44220.cljs$core$IIndexed$_nth$arity$2(null,i__43917_44222);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_44223,uid_44154], null),((function (seq__43914_44219,chunk__43915_44220,count__43916_44221,i__43917_44222,conn_type_44223,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_44158])], null);
} else {
var vec__43918 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43918,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43918,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_44158)], null);
}
});})(seq__43914_44219,chunk__43915_44220,count__43916_44221,i__43917_44222,conn_type_44223,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__44224 = seq__43914_44219;
var G__44225 = chunk__43915_44220;
var G__44226 = count__43916_44221;
var G__44227 = (i__43917_44222 + (1));
seq__43914_44219 = G__44224;
chunk__43915_44220 = G__44225;
count__43916_44221 = G__44226;
i__43917_44222 = G__44227;
continue;
} else {
var temp__5457__auto___44228 = cljs.core.seq(seq__43914_44219);
if(temp__5457__auto___44228){
var seq__43914_44229__$1 = temp__5457__auto___44228;
if(cljs.core.chunked_seq_QMARK_(seq__43914_44229__$1)){
var c__9739__auto___44230 = cljs.core.chunk_first(seq__43914_44229__$1);
var G__44231 = cljs.core.chunk_rest(seq__43914_44229__$1);
var G__44232 = c__9739__auto___44230;
var G__44233 = cljs.core.count(c__9739__auto___44230);
var G__44234 = (0);
seq__43914_44219 = G__44231;
chunk__43915_44220 = G__44232;
count__43916_44221 = G__44233;
i__43917_44222 = G__44234;
continue;
} else {
var conn_type_44235 = cljs.core.first(seq__43914_44229__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_44235,uid_44154], null),((function (seq__43914_44219,chunk__43915_44220,count__43916_44221,i__43917_44222,conn_type_44235,seq__43914_44229__$1,temp__5457__auto___44228,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_44158])], null);
} else {
var vec__43921 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43921,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43921,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_44158)], null);
}
});})(seq__43914_44219,chunk__43915_44220,count__43916_44221,i__43917_44222,conn_type_44235,seq__43914_44229__$1,temp__5457__auto___44228,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__44236 = cljs.core.next(seq__43914_44229__$1);
var G__44237 = null;
var G__44238 = (0);
var G__44239 = (0);
seq__43914_44219 = G__44236;
chunk__43915_44220 = G__44237;
count__43916_44221 = G__44238;
i__43917_44222 = G__44239;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__44159(cljs.core.cst$kw$ws);

flush_buffer_BANG__44159(cljs.core.cst$kw$ajax);
} else {
var ws_timeout_44240 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_44241 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__34390__auto___44242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___44242,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___44242,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_43928){
var state_val_43929 = (state_43928[(1)]);
if((state_val_43929 === (1))){
var state_43928__$1 = state_43928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43928__$1,(2),ws_timeout_44240);
} else {
if((state_val_43929 === (2))){
var inst_43925 = (state_43928[(2)]);
var inst_43926 = flush_buffer_BANG__44159(cljs.core.cst$kw$ws);
var state_43928__$1 = (function (){var statearr_43930 = state_43928;
(statearr_43930[(7)] = inst_43925);

return statearr_43930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43928__$1,inst_43926);
} else {
return null;
}
}
});})(c__34390__auto___44242,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34288__auto__,c__34390__auto___44242,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34289__auto__ = null;
var taoensso$sente$state_machine__34289__auto____0 = (function (){
var statearr_43931 = [null,null,null,null,null,null,null,null];
(statearr_43931[(0)] = taoensso$sente$state_machine__34289__auto__);

(statearr_43931[(1)] = (1));

return statearr_43931;
});
var taoensso$sente$state_machine__34289__auto____1 = (function (state_43928){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_43928);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e43932){if((e43932 instanceof Object)){
var ex__34292__auto__ = e43932;
var statearr_43933_44243 = state_43928;
(statearr_43933_44243[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43928);

return cljs.core.cst$kw$recur;
} else {
throw e43932;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44244 = state_43928;
state_43928 = G__44244;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$state_machine__34289__auto__ = function(state_43928){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34289__auto____1.call(this,state_43928);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34289__auto____0;
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34289__auto____1;
return taoensso$sente$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___44242,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34392__auto__ = (function (){var statearr_43934 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_43934[(6)] = c__34390__auto___44242);

return statearr_43934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___44242,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__34390__auto___44245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___44245,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___44245,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_43939){
var state_val_43940 = (state_43939[(1)]);
if((state_val_43940 === (1))){
var state_43939__$1 = state_43939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43939__$1,(2),ajax_timeout_44241);
} else {
if((state_val_43940 === (2))){
var inst_43936 = (state_43939[(2)]);
var inst_43937 = flush_buffer_BANG__44159(cljs.core.cst$kw$ajax);
var state_43939__$1 = (function (){var statearr_43941 = state_43939;
(statearr_43941[(7)] = inst_43936);

return statearr_43941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43939__$1,inst_43937);
} else {
return null;
}
}
});})(c__34390__auto___44245,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34288__auto__,c__34390__auto___44245,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34289__auto__ = null;
var taoensso$sente$state_machine__34289__auto____0 = (function (){
var statearr_43942 = [null,null,null,null,null,null,null,null];
(statearr_43942[(0)] = taoensso$sente$state_machine__34289__auto__);

(statearr_43942[(1)] = (1));

return statearr_43942;
});
var taoensso$sente$state_machine__34289__auto____1 = (function (state_43939){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_43939);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e43943){if((e43943 instanceof Object)){
var ex__34292__auto__ = e43943;
var statearr_43944_44246 = state_43939;
(statearr_43944_44246[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43939);

return cljs.core.cst$kw$recur;
} else {
throw e43943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44247 = state_43939;
state_43939 = G__44247;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$state_machine__34289__auto__ = function(state_43939){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34289__auto____1.call(this,state_43939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34289__auto____0;
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34289__auto____1;
return taoensso$sente$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___44245,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34392__auto__ = (function (){var statearr_43945 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_43945[(6)] = c__34390__auto___44245);

return statearr_43945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___44245,ws_timeout_44240,ajax_timeout_44241,uid_44154,__44155,__44156__$1,__44157__$2,ev_uuid_44158,flush_buffer_BANG__44159,vec__43882,map__43885,map__43885__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__44153 = function (user_id,ev,var_args){
var p__43881 = null;
if (arguments.length > 2) {
var G__44248__i = 0, G__44248__a = new Array(arguments.length -  2);
while (G__44248__i < G__44248__a.length) {G__44248__a[G__44248__i] = arguments[G__44248__i + 2]; ++G__44248__i;}
  p__43881 = new cljs.core.IndexedSeq(G__44248__a,0,null);
} 
return G__44153__delegate.call(this,user_id,ev,p__43881);};
G__44153.cljs$lang$maxFixedArity = 2;
G__44153.cljs$lang$applyTo = (function (arglist__44249){
var user_id = cljs.core.first(arglist__44249);
arglist__44249 = cljs.core.next(arglist__44249);
var ev = cljs.core.first(arglist__44249);
var p__43881 = cljs.core.rest(arglist__44249);
return G__44153__delegate(user_id,ev,p__43881);
});
G__44153.cljs$core$IFn$_invoke$arity$variadic = G__44153__delegate;
return G__44153;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$ch_DASH_recv,ch_recv,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$connected_DASH_uids,connected_uids_,cljs.core.cst$kw$ajax_DASH_post_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_open,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$ppstr);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var vec__43946 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43946,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43946,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,510,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-169927757);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,clj,cljs.core.cst$kw$uid,user_id_fn__$1(ring_req,client_id),cljs.core.cst$kw$_QMARK_reply_DASH_fn,(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5457__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5457__auto__)){
var ms = temp__5457__auto__;
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_43954){
var state_val_43955 = (state_43954[(1)]);
if((state_val_43955 === (1))){
var inst_43949 = cljs.core.async.timeout(ms);
var state_43954__$1 = state_43954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43954__$1,(2),inst_43949);
} else {
if((state_val_43955 === (2))){
var inst_43951 = (state_43954[(2)]);
var inst_43952 = (function (){var G__43956 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__43956) : reply_fn.call(null,G__43956));
})();
var state_43954__$1 = (function (){var statearr_43957 = state_43954;
(statearr_43957[(7)] = inst_43951);

return statearr_43957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43954__$1,inst_43952);
} else {
return null;
}
}
});})(c__34390__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34288__auto__,c__34390__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34289__auto__ = null;
var taoensso$sente$state_machine__34289__auto____0 = (function (){
var statearr_43958 = [null,null,null,null,null,null,null,null];
(statearr_43958[(0)] = taoensso$sente$state_machine__34289__auto__);

(statearr_43958[(1)] = (1));

return statearr_43958;
});
var taoensso$sente$state_machine__34289__auto____1 = (function (state_43954){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_43954);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e43959){if((e43959 instanceof Object)){
var ex__34292__auto__ = e43959;
var statearr_43960_44250 = state_43954;
(statearr_43960_44250[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43954);

return cljs.core.cst$kw$recur;
} else {
throw e43959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44251 = state_43954;
state_43954 = G__44251;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$state_machine__34289__auto__ = function(state_43954){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34289__auto____1.call(this,state_43954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34289__auto____0;
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34289__auto____1;
return taoensso$sente$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34392__auto__ = (function (){var statearr_43961 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_43961[(6)] = c__34390__auto__);

return statearr_43961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__,ms,temp__5457__auto__,params,ppstr,client_id,vec__43946,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__34390__auto__;
} else {
return null;
}
} else {
var G__43962 = cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200;
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__43962) : reply_fn.call(null,G__43962));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$ajax_DASH_get_DASH_or_DASH_ws_DASH_handshake_DASH_fn,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,cljs.core.cst$kw$params);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$client_DASH_id);
var csrf_token = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$ring_DASH_req,ring_req,cljs.core.cst$kw$event,event,cljs.core.cst$kw$_QMARK_reply_DASH_fn,_QMARK_reply_fn,cljs.core.cst$kw$uid,uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,555,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1227856949);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,566,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg),": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-2120396038);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ring_DASH_req,ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_open,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,575,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,705484500);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ws,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ws,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5457__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5457__auto__)){
var ms = temp__5457__auto__;
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_43998){
var state_val_43999 = (state_43998[(1)]);
if((state_val_43999 === (7))){
var inst_43994 = (state_43998[(2)]);
var state_43998__$1 = state_43998;
var statearr_44000_44252 = state_43998__$1;
(statearr_44000_44252[(2)] = inst_43994);

(statearr_44000_44252[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (1))){
var inst_43963 = udt_open;
var state_43998__$1 = (function (){var statearr_44001 = state_43998;
(statearr_44001[(7)] = inst_43963);

return statearr_44001;
})();
var statearr_44002_44253 = state_43998__$1;
(statearr_44002_44253[(2)] = null);

(statearr_44002_44253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (4))){
var inst_43972 = (state_43998[(8)]);
var inst_43967 = (state_43998[(2)]);
var inst_43968 = cljs.core.deref(conns_);
var inst_43969 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43970 = [cljs.core.cst$kw$ws,uid,client_id];
var inst_43971 = (new cljs.core.PersistentVector(null,3,(5),inst_43969,inst_43970,null));
var inst_43972__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_43968,inst_43971);
var state_43998__$1 = (function (){var statearr_44003 = state_43998;
(statearr_44003[(8)] = inst_43972__$1);

(statearr_44003[(9)] = inst_43967);

return statearr_44003;
})();
if(cljs.core.truth_(inst_43972__$1)){
var statearr_44004_44254 = state_43998__$1;
(statearr_44004_44254[(1)] = (5));

} else {
var statearr_44005_44255 = state_43998__$1;
(statearr_44005_44255[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (13))){
var inst_43978 = (state_43998[(10)]);
var inst_43987 = (state_43998[(2)]);
var inst_43963 = inst_43978;
var state_43998__$1 = (function (){var statearr_44006 = state_43998;
(statearr_44006[(11)] = inst_43987);

(statearr_44006[(7)] = inst_43963);

return statearr_44006;
})();
var statearr_44007_44256 = state_43998__$1;
(statearr_44007_44256[(2)] = null);

(statearr_44007_44256[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (6))){
var state_43998__$1 = state_43998;
var statearr_44008_44257 = state_43998__$1;
(statearr_44008_44257[(2)] = null);

(statearr_44008_44257[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (3))){
var inst_43996 = (state_43998[(2)]);
var state_43998__$1 = state_43998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43998__$1,inst_43996);
} else {
if((state_val_43999 === (12))){
var state_43998__$1 = state_43998;
var statearr_44009_44258 = state_43998__$1;
(statearr_44009_44258[(2)] = null);

(statearr_44009_44258[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (2))){
var inst_43965 = cljs.core.async.timeout(ms);
var state_43998__$1 = state_43998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43998__$1,(4),inst_43965);
} else {
if((state_val_43999 === (11))){
var inst_43983 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping);
var inst_43984 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_43983);
var state_43998__$1 = state_43998;
var statearr_44010_44259 = state_43998__$1;
(statearr_44010_44259[(2)] = inst_43984);

(statearr_44010_44259[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (9))){
var state_43998__$1 = state_43998;
var statearr_44011_44260 = state_43998__$1;
(statearr_44011_44260[(2)] = null);

(statearr_44011_44260[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (5))){
var inst_43972 = (state_43998[(8)]);
var inst_43977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43972,(0),null);
var inst_43978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43972,(1),null);
var inst_43979 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_43998__$1 = (function (){var statearr_44012 = state_43998;
(statearr_44012[(12)] = inst_43977);

(statearr_44012[(10)] = inst_43978);

return statearr_44012;
})();
if(cljs.core.truth_(inst_43979)){
var statearr_44013_44261 = state_43998__$1;
(statearr_44013_44261[(1)] = (8));

} else {
var statearr_44014_44262 = state_43998__$1;
(statearr_44014_44262[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (10))){
var inst_43991 = (state_43998[(2)]);
var state_43998__$1 = state_43998;
var statearr_44015_44263 = state_43998__$1;
(statearr_44015_44263[(2)] = inst_43991);

(statearr_44015_44263[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43999 === (8))){
var inst_43978 = (state_43998[(10)]);
var inst_43963 = (state_43998[(7)]);
var inst_43981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43978,inst_43963);
var state_43998__$1 = state_43998;
if(inst_43981){
var statearr_44016_44264 = state_43998__$1;
(statearr_44016_44264[(1)] = (11));

} else {
var statearr_44017_44265 = state_43998__$1;
(statearr_44017_44265[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34288__auto__,c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34289__auto__ = null;
var taoensso$sente$state_machine__34289__auto____0 = (function (){
var statearr_44018 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44018[(0)] = taoensso$sente$state_machine__34289__auto__);

(statearr_44018[(1)] = (1));

return statearr_44018;
});
var taoensso$sente$state_machine__34289__auto____1 = (function (state_43998){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_43998);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e44019){if((e44019 instanceof Object)){
var ex__34292__auto__ = e44019;
var statearr_44020_44266 = state_43998;
(statearr_44020_44266[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43998);

return cljs.core.cst$kw$recur;
} else {
throw e44019;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44267 = state_43998;
state_43998 = G__44267;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$state_machine__34289__auto__ = function(state_43998){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34289__auto____1.call(this,state_43998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34289__auto____0;
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34289__auto____1;
return taoensso$sente$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34392__auto__ = (function (){var statearr_44021 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_44021[(6)] = c__34390__auto__);

return statearr_44021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__34390__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,604,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,651324515);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$ajax,uid,client_id,server_ch);
var udt_open = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__8808__auto__ = cljs.core.cst$kw$init_QMARK_.cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$handshake_QMARK_.cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(cljs.core.cst$kw$ajax,uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_open,uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5457__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5457__auto__)){
var ms = temp__5457__auto__;
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44047){
var state_val_44048 = (state_44047[(1)]);
if((state_val_44048 === (1))){
var inst_44022 = cljs.core.async.timeout(ms);
var state_44047__$1 = state_44047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44047__$1,(2),inst_44022);
} else {
if((state_val_44048 === (2))){
var inst_44029 = (state_44047[(7)]);
var inst_44024 = (state_44047[(2)]);
var inst_44025 = cljs.core.deref(conns_);
var inst_44026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44027 = [cljs.core.cst$kw$ajax,uid,client_id];
var inst_44028 = (new cljs.core.PersistentVector(null,3,(5),inst_44026,inst_44027,null));
var inst_44029__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_44025,inst_44028);
var state_44047__$1 = (function (){var statearr_44049 = state_44047;
(statearr_44049[(7)] = inst_44029__$1);

(statearr_44049[(8)] = inst_44024);

return statearr_44049;
})();
if(cljs.core.truth_(inst_44029__$1)){
var statearr_44050_44268 = state_44047__$1;
(statearr_44050_44268[(1)] = (3));

} else {
var statearr_44051_44269 = state_44047__$1;
(statearr_44051_44269[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44048 === (3))){
var inst_44029 = (state_44047[(7)]);
var inst_44034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44029,(0),null);
var inst_44035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44029,(1),null);
var inst_44036 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44035,udt_open);
var state_44047__$1 = (function (){var statearr_44052 = state_44047;
(statearr_44052[(9)] = inst_44034);

return statearr_44052;
})();
if(inst_44036){
var statearr_44053_44270 = state_44047__$1;
(statearr_44053_44270[(1)] = (6));

} else {
var statearr_44054_44271 = state_44047__$1;
(statearr_44054_44271[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44048 === (4))){
var state_44047__$1 = state_44047;
var statearr_44055_44272 = state_44047__$1;
(statearr_44055_44272[(2)] = null);

(statearr_44055_44272[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44048 === (5))){
var inst_44045 = (state_44047[(2)]);
var state_44047__$1 = state_44047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44047__$1,inst_44045);
} else {
if((state_val_44048 === (6))){
var inst_44038 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,cljs.core.cst$kw$chsk_SLASH_timeout);
var inst_44039 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_44038);
var state_44047__$1 = state_44047;
var statearr_44056_44273 = state_44047__$1;
(statearr_44056_44273[(2)] = inst_44039);

(statearr_44056_44273[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44048 === (7))){
var state_44047__$1 = state_44047;
var statearr_44057_44274 = state_44047__$1;
(statearr_44057_44274[(2)] = null);

(statearr_44057_44274[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44048 === (8))){
var inst_44042 = (state_44047[(2)]);
var state_44047__$1 = state_44047;
var statearr_44058_44275 = state_44047__$1;
(statearr_44058_44275[(2)] = inst_44042);

(statearr_44058_44275[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34288__auto__,c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34289__auto__ = null;
var taoensso$sente$state_machine__34289__auto____0 = (function (){
var statearr_44059 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44059[(0)] = taoensso$sente$state_machine__34289__auto__);

(statearr_44059[(1)] = (1));

return statearr_44059;
});
var taoensso$sente$state_machine__34289__auto____1 = (function (state_44047){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_44047);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e44060){if((e44060 instanceof Object)){
var ex__34292__auto__ = e44060;
var statearr_44061_44276 = state_44047;
(statearr_44061_44276[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44047);

return cljs.core.cst$kw$recur;
} else {
throw e44060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44277 = state_44047;
state_44047 = G__44277;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$state_machine__34289__auto__ = function(state_44047){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34289__auto____1.call(this,state_44047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34289__auto____0;
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34289__auto____1;
return taoensso$sente$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34392__auto__ = (function (){var statearr_44062 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_44062[(6)] = c__34390__auto__);

return statearr_44062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__,ms,temp__5457__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__34390__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_msg,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$ws,uid,client_id);

var vec__44063 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44063,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44063,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__44063,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,634,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44063,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__44063,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-817613013);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__44063,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_close,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?cljs.core.cst$kw$ws:cljs.core.cst$kw$ajax);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,643,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,596782959);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = cljs.core.cst$kw$udt.cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_44117){
var state_val_44118 = (state_44117[(1)]);
if((state_val_44118 === (7))){
var state_44117__$1 = state_44117;
var statearr_44119_44278 = state_44117__$1;
(statearr_44119_44278[(2)] = null);

(statearr_44119_44278[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (1))){
var inst_44066 = cljs.core.async.timeout((5000));
var state_44117__$1 = state_44117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44117__$1,(2),inst_44066);
} else {
if((state_val_44118 === (4))){
var state_44117__$1 = state_44117;
var statearr_44120_44279 = state_44117__$1;
(statearr_44120_44279[(2)] = null);

(statearr_44120_44279[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (13))){
var state_44117__$1 = state_44117;
var statearr_44121_44280 = state_44117__$1;
(statearr_44121_44280[(2)] = null);

(statearr_44121_44280[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (6))){
var inst_44094 = (state_44117[(7)]);
var inst_44078 = (state_44117[(8)]);
var inst_44076 = (state_44117[(9)]);
var inst_44077 = (state_44117[(10)]);
var inst_44089 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44090 = [conn_type,uid,client_id];
var inst_44091 = (new cljs.core.PersistentVector(null,3,(5),inst_44089,inst_44090,null));
var inst_44093 = (function (){var vec__44069 = inst_44076;
var __QMARK_sch = inst_44077;
var udt_t1 = inst_44078;
return ((function (vec__44069,__QMARK_sch,udt_t1,inst_44094,inst_44078,inst_44076,inst_44077,inst_44089,inst_44090,inst_44091,state_val_44118,c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__44092){
var vec__44122 = p__44092;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44122,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44122,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__44069,__QMARK_sch,udt_t1,inst_44094,inst_44078,inst_44076,inst_44077,inst_44089,inst_44090,inst_44091,state_val_44118,c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_44094__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_44091,inst_44093);
var state_44117__$1 = (function (){var statearr_44125 = state_44117;
(statearr_44125[(7)] = inst_44094__$1);

return statearr_44125;
})();
if(cljs.core.truth_(inst_44094__$1)){
var statearr_44126_44281 = state_44117__$1;
(statearr_44126_44281[(1)] = (9));

} else {
var statearr_44127_44282 = state_44117__$1;
(statearr_44127_44282[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (3))){
var inst_44078 = (state_44117[(8)]);
var inst_44076 = (state_44117[(9)]);
var inst_44077 = (state_44117[(10)]);
var inst_44081 = (function (){var vec__44069 = inst_44076;
var __QMARK_sch = inst_44077;
var udt_t1 = inst_44078;
return ((function (vec__44069,__QMARK_sch,udt_t1,inst_44078,inst_44076,inst_44077,state_val_44118,c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__44069,__QMARK_sch,udt_t1,inst_44078,inst_44076,inst_44077,state_val_44118,c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_44082 = (new cljs.core.Delay(inst_44081,null));
var inst_44083 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente",null,657,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,inst_44082,null,-148371842);
var state_44117__$1 = state_44117;
var statearr_44128_44283 = state_44117__$1;
(statearr_44128_44283[(2)] = inst_44083);

(statearr_44128_44283[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (12))){
var inst_44103 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44104 = [cljs.core.cst$kw$chsk_SLASH_uidport_DASH_close,uid];
var inst_44105 = (new cljs.core.PersistentVector(null,2,(5),inst_44103,inst_44104,null));
var inst_44106 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_44105);
var state_44117__$1 = state_44117;
var statearr_44129_44284 = state_44117__$1;
(statearr_44129_44284[(2)] = inst_44106);

(statearr_44129_44284[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (2))){
var inst_44076 = (state_44117[(9)]);
var inst_44068 = (state_44117[(2)]);
var inst_44072 = cljs.core.deref(conns_);
var inst_44073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44074 = [conn_type,uid,client_id];
var inst_44075 = (new cljs.core.PersistentVector(null,3,(5),inst_44073,inst_44074,null));
var inst_44076__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_44072,inst_44075);
var inst_44077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44076__$1,(0),null);
var inst_44078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44076__$1,(1),null);
var inst_44079 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_44117__$1 = (function (){var statearr_44130 = state_44117;
(statearr_44130[(8)] = inst_44078);

(statearr_44130[(11)] = inst_44068);

(statearr_44130[(9)] = inst_44076__$1);

(statearr_44130[(10)] = inst_44077);

return statearr_44130;
})();
if(cljs.core.truth_(inst_44079)){
var statearr_44131_44285 = state_44117__$1;
(statearr_44131_44285[(1)] = (3));

} else {
var statearr_44132_44286 = state_44117__$1;
(statearr_44132_44286[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (11))){
var inst_44112 = (state_44117[(2)]);
var state_44117__$1 = state_44117;
var statearr_44133_44287 = state_44117__$1;
(statearr_44133_44287[(2)] = inst_44112);

(statearr_44133_44287[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (9))){
var inst_44094 = (state_44117[(7)]);
var inst_44078 = (state_44117[(8)]);
var inst_44076 = (state_44117[(9)]);
var inst_44077 = (state_44117[(10)]);
var inst_44096 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44097 = [conn_type,uid];
var inst_44098 = (new cljs.core.PersistentVector(null,2,(5),inst_44096,inst_44097,null));
var inst_44099 = (function (){var vec__44069 = inst_44076;
var __QMARK_sch = inst_44077;
var udt_t1 = inst_44078;
var disconnect_QMARK_ = inst_44094;
return ((function (vec__44069,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_44094,inst_44078,inst_44076,inst_44077,inst_44096,inst_44097,inst_44098,state_val_44118,c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return cljs.core.cst$kw$swap_SLASH_dissoc;
} else {
return _QMARK_m;
}
});
;})(vec__44069,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_44094,inst_44078,inst_44076,inst_44077,inst_44096,inst_44097,inst_44098,state_val_44118,c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_44100 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_44098,inst_44099);
var inst_44101 = upd_connected_uid_BANG_(uid);
var state_44117__$1 = (function (){var statearr_44134 = state_44117;
(statearr_44134[(12)] = inst_44100);

return statearr_44134;
})();
if(cljs.core.truth_(inst_44101)){
var statearr_44135_44288 = state_44117__$1;
(statearr_44135_44288[(1)] = (12));

} else {
var statearr_44136_44289 = state_44117__$1;
(statearr_44136_44289[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (5))){
var inst_44078 = (state_44117[(8)]);
var inst_44086 = (state_44117[(2)]);
var inst_44087 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44078,udt_close);
var state_44117__$1 = (function (){var statearr_44137 = state_44117;
(statearr_44137[(13)] = inst_44086);

return statearr_44137;
})();
if(inst_44087){
var statearr_44138_44290 = state_44117__$1;
(statearr_44138_44290[(1)] = (6));

} else {
var statearr_44139_44291 = state_44117__$1;
(statearr_44139_44291[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (14))){
var inst_44109 = (state_44117[(2)]);
var state_44117__$1 = state_44117;
var statearr_44140_44292 = state_44117__$1;
(statearr_44140_44292[(2)] = inst_44109);

(statearr_44140_44292[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (10))){
var state_44117__$1 = state_44117;
var statearr_44141_44293 = state_44117__$1;
(statearr_44141_44293[(2)] = null);

(statearr_44141_44293[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44118 === (8))){
var inst_44115 = (state_44117[(2)]);
var state_44117__$1 = state_44117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44117__$1,inst_44115);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__34288__auto__,c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__34289__auto__ = null;
var taoensso$sente$state_machine__34289__auto____0 = (function (){
var statearr_44142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44142[(0)] = taoensso$sente$state_machine__34289__auto__);

(statearr_44142[(1)] = (1));

return statearr_44142;
});
var taoensso$sente$state_machine__34289__auto____1 = (function (state_44117){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_44117);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e44143){if((e44143 instanceof Object)){
var ex__34292__auto__ = e44143;
var statearr_44144_44294 = state_44117;
(statearr_44144_44294[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44117);

return cljs.core.cst$kw$recur;
} else {
throw e44143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44295 = state_44117;
state_44117 = G__44295;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$state_machine__34289__auto__ = function(state_44117){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34289__auto____1.call(this,state_44117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34289__auto____0;
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34289__auto____1;
return taoensso$sente$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__34392__auto__ = (function (){var statearr_44145 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_44145[(6)] = c__34390__auto__);

return statearr_44145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__34390__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,cljs.core.cst$kw$on_DASH_error,((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,679,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-584151308);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__43856,map__43859,map__43859__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq43853){
var G__43854 = cljs.core.first(seq43853);
var seq43853__$1 = cljs.core.next(seq43853);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43854,seq43853__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,685,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,2013447035);

var seq__44296 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws,uid], null)));
var chunk__44297 = null;
var count__44298 = (0);
var i__44299 = (0);
while(true){
if((i__44299 < count__44298)){
var vec__44300 = chunk__44297.cljs$core$IIndexed$_nth$arity$2(null,i__44299);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44300,(0),null);
var vec__44303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44300,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(1),null);
var temp__5457__auto___44318 = _QMARK_sch;
if(cljs.core.truth_(temp__5457__auto___44318)){
var sch_44319 = temp__5457__auto___44318;
var G__44306_44320 = cljs.core.cst$kw$ws;
var G__44307_44321 = uid;
var G__44308_44322 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__44306_44320,G__44307_44321,G__44308_44322) : upd_conn_BANG_.call(null,G__44306_44320,G__44307_44321,G__44308_44322));

taoensso.sente.interfaces.sch_send_BANG_(sch_44319,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}

var G__44323 = seq__44296;
var G__44324 = chunk__44297;
var G__44325 = count__44298;
var G__44326 = (i__44299 + (1));
seq__44296 = G__44323;
chunk__44297 = G__44324;
count__44298 = G__44325;
i__44299 = G__44326;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__44296);
if(temp__5457__auto__){
var seq__44296__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44296__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__44296__$1);
var G__44327 = cljs.core.chunk_rest(seq__44296__$1);
var G__44328 = c__9739__auto__;
var G__44329 = cljs.core.count(c__9739__auto__);
var G__44330 = (0);
seq__44296 = G__44327;
chunk__44297 = G__44328;
count__44298 = G__44329;
i__44299 = G__44330;
continue;
} else {
var vec__44309 = cljs.core.first(seq__44296__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44309,(0),null);
var vec__44312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44309,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44312,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44312,(1),null);
var temp__5457__auto___44331__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5457__auto___44331__$1)){
var sch_44332 = temp__5457__auto___44331__$1;
var G__44315_44333 = cljs.core.cst$kw$ws;
var G__44316_44334 = uid;
var G__44317_44335 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__44315_44333,G__44316_44334,G__44317_44335) : upd_conn_BANG_.call(null,G__44315_44333,G__44316_44334,G__44317_44335));

taoensso.sente.interfaces.sch_send_BANG_(sch_44332,cljs.core.cst$kw$websocket,buffered_evs_pstr);
} else {
}

var G__44336 = cljs.core.next(seq__44296__$1);
var G__44337 = null;
var G__44338 = (0);
var G__44339 = (0);
seq__44296 = G__44336;
chunk__44297 = G__44337;
count__44298 = G__44338;
i__44299 = G__44339;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,695,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-751900179);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ajax,uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_44386){
var state_val_44387 = (state_44386[(1)]);
if((state_val_44387 === (7))){
var inst_44348 = (state_44386[(7)]);
var inst_44341 = (state_44386[(8)]);
var inst_44342 = (state_44386[(9)]);
var inst_44358 = (function (){var n = inst_44341;
var client_ids_satisfied = inst_44342;
var _QMARK_pulled = inst_44348;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_44348,inst_44341,inst_44342,state_val_44387,c__34390__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__44357){
var vec__44388 = p__44357;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44388,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44388,(1),null);
var sent_QMARK_ = (function (){var temp__5457__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5457__auto__)){
var sch = temp__5457__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(cljs.core.cst$kw$websocket),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_44348,inst_44341,inst_44342,state_val_44387,c__34390__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_44359 = cljs.core.PersistentHashSet.EMPTY;
var inst_44360 = cljs.core.reduce_kv(inst_44358,inst_44359,inst_44348);
var state_44386__$1 = state_44386;
var statearr_44391_44423 = state_44386__$1;
(statearr_44391_44423[(2)] = inst_44360);

(statearr_44391_44423[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (1))){
var inst_44340 = cljs.core.PersistentHashSet.EMPTY;
var inst_44341 = (0);
var inst_44342 = inst_44340;
var state_44386__$1 = (function (){var statearr_44392 = state_44386;
(statearr_44392[(8)] = inst_44341);

(statearr_44392[(9)] = inst_44342);

return statearr_44392;
})();
var statearr_44393_44424 = state_44386__$1;
(statearr_44393_44424[(2)] = null);

(statearr_44393_44424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (4))){
var state_44386__$1 = state_44386;
var statearr_44394_44425 = state_44386__$1;
(statearr_44394_44425[(2)] = true);

(statearr_44394_44425[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (15))){
var inst_44379 = (state_44386[(2)]);
var state_44386__$1 = state_44386;
var statearr_44395_44426 = state_44386__$1;
(statearr_44395_44426[(2)] = inst_44379);

(statearr_44395_44426[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (13))){
var inst_44365 = (state_44386[(10)]);
var inst_44370 = cljs.core.rand_int(inst_44365);
var inst_44371 = (inst_44365 + inst_44370);
var inst_44372 = cljs.core.async.timeout(inst_44371);
var state_44386__$1 = state_44386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44386__$1,(16),inst_44372);
} else {
if((state_val_44387 === (6))){
var inst_44348 = (state_44386[(7)]);
var inst_44355 = (state_44386[(2)]);
var state_44386__$1 = (function (){var statearr_44396 = state_44386;
(statearr_44396[(11)] = inst_44355);

return statearr_44396;
})();
if(cljs.core.truth_(inst_44348)){
var statearr_44397_44427 = state_44386__$1;
(statearr_44397_44427[(1)] = (7));

} else {
var statearr_44398_44428 = state_44386__$1;
(statearr_44398_44428[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (3))){
var inst_44384 = (state_44386[(2)]);
var state_44386__$1 = state_44386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44386__$1,inst_44384);
} else {
if((state_val_44387 === (12))){
var inst_44382 = (state_44386[(2)]);
var state_44386__$1 = state_44386;
var statearr_44399_44429 = state_44386__$1;
(statearr_44399_44429[(2)] = inst_44382);

(statearr_44399_44429[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (2))){
var inst_44348 = (state_44386[(7)]);
var inst_44341 = (state_44386[(8)]);
var inst_44342 = (state_44386[(9)]);
var inst_44344 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44345 = [cljs.core.cst$kw$ajax,uid];
var inst_44346 = (new cljs.core.PersistentVector(null,2,(5),inst_44344,inst_44345,null));
var inst_44347 = (function (){var n = inst_44341;
var client_ids_satisfied = inst_44342;
return ((function (n,client_ids_satisfied,inst_44348,inst_44341,inst_44342,inst_44344,inst_44345,inst_44346,state_val_44387,c__34390__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_44348,inst_44341,inst_44342,inst_44344,inst_44345,inst_44346,state_val_44387,c__34390__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__44400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44400,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44400,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_44348,inst_44341,inst_44342,inst_44344,inst_44345,inst_44346,state_val_44387,c__34390__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_44348,inst_44341,inst_44342,inst_44344,inst_44345,inst_44346,state_val_44387,c__34390__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_44348__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_44346,inst_44347);
var inst_44349 = (function (){var n = inst_44341;
var client_ids_satisfied = inst_44342;
var _QMARK_pulled = inst_44348__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_44348,inst_44341,inst_44342,inst_44344,inst_44345,inst_44346,inst_44347,inst_44348__$1,state_val_44387,c__34390__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__8808__auto__ = (x == null);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var fexpr__44404 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__44404.cljs$core$IFn$_invoke$arity$1 ? fexpr__44404.cljs$core$IFn$_invoke$arity$1(x) : fexpr__44404.call(null,x));
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_44348,inst_44341,inst_44342,inst_44344,inst_44345,inst_44346,inst_44347,inst_44348__$1,state_val_44387,c__34390__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_44350 = (inst_44349.cljs$core$IFn$_invoke$arity$1 ? inst_44349.cljs$core$IFn$_invoke$arity$1(inst_44348__$1) : inst_44349.call(null,inst_44348__$1));
var state_44386__$1 = (function (){var statearr_44405 = state_44386;
(statearr_44405[(7)] = inst_44348__$1);

return statearr_44405;
})();
if(cljs.core.truth_(inst_44350)){
var statearr_44406_44430 = state_44386__$1;
(statearr_44406_44430[(1)] = (4));

} else {
var statearr_44407_44431 = state_44386__$1;
(statearr_44407_44431[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (11))){
var state_44386__$1 = state_44386;
var statearr_44408_44432 = state_44386__$1;
(statearr_44408_44432[(2)] = null);

(statearr_44408_44432[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (9))){
var inst_44341 = (state_44386[(8)]);
var inst_44342 = (state_44386[(9)]);
var inst_44365 = (state_44386[(10)]);
var inst_44363 = (state_44386[(2)]);
var inst_44364 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_44342,inst_44363);
var inst_44365__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_44341);
var state_44386__$1 = (function (){var statearr_44409 = state_44386;
(statearr_44409[(12)] = inst_44364);

(statearr_44409[(10)] = inst_44365__$1);

return statearr_44409;
})();
if(cljs.core.truth_(inst_44365__$1)){
var statearr_44410_44433 = state_44386__$1;
(statearr_44410_44433[(1)] = (10));

} else {
var statearr_44411_44434 = state_44386__$1;
(statearr_44411_44434[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (5))){
var inst_44348 = (state_44386[(7)]);
var inst_44353 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",722,"([:or nil? map?] ?pulled)",inst_44348,null,null);
var state_44386__$1 = state_44386;
var statearr_44412_44435 = state_44386__$1;
(statearr_44412_44435[(2)] = inst_44353);

(statearr_44412_44435[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (14))){
var state_44386__$1 = state_44386;
var statearr_44413_44436 = state_44386__$1;
(statearr_44413_44436[(2)] = null);

(statearr_44413_44436[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (16))){
var inst_44364 = (state_44386[(12)]);
var inst_44341 = (state_44386[(8)]);
var inst_44374 = (state_44386[(2)]);
var inst_44375 = (inst_44341 + (1));
var inst_44341__$1 = inst_44375;
var inst_44342 = inst_44364;
var state_44386__$1 = (function (){var statearr_44414 = state_44386;
(statearr_44414[(8)] = inst_44341__$1);

(statearr_44414[(9)] = inst_44342);

(statearr_44414[(13)] = inst_44374);

return statearr_44414;
})();
var statearr_44415_44437 = state_44386__$1;
(statearr_44415_44437[(2)] = null);

(statearr_44415_44437[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (10))){
var inst_44364 = (state_44386[(12)]);
var inst_44367 = cljs.core.complement(inst_44364);
var inst_44368 = taoensso.encore.rsome(inst_44367,client_ids_unsatisfied);
var state_44386__$1 = state_44386;
if(cljs.core.truth_(inst_44368)){
var statearr_44416_44438 = state_44386__$1;
(statearr_44416_44438[(1)] = (13));

} else {
var statearr_44417_44439 = state_44386__$1;
(statearr_44417_44439[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44387 === (8))){
var state_44386__$1 = state_44386;
var statearr_44418_44440 = state_44386__$1;
(statearr_44418_44440[(2)] = null);

(statearr_44418_44440[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__34288__auto__,c__34390__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto____0 = (function (){
var statearr_44419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44419[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto__);

(statearr_44419[(1)] = (1));

return statearr_44419;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto____1 = (function (state_44386){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_44386);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e44420){if((e44420 instanceof Object)){
var ex__34292__auto__ = e44420;
var statearr_44421_44441 = state_44386;
(statearr_44421_44441[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44386);

return cljs.core.cst$kw$recur;
} else {
throw e44420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44442 = state_44386;
state_44386 = G__44442;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto__ = function(state_44386){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto____1.call(this,state_44386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__34392__auto__ = (function (){var statearr_44422 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_44422[(6)] = c__34390__auto__);

return statearr_44422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__34390__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__9541__auto__ = (((chsk == null))?null:chsk);
var m__9542__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__9542__auto__.call(null,chsk));
} else {
var m__9542__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__9542__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__9541__auto__ = (((chsk == null))?null:chsk);
var m__9542__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__9542__auto__.call(null,chsk,reason));
} else {
var m__9542__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__9542__auto____$1.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__9541__auto__ = (((chsk == null))?null:chsk);
var m__9542__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__9542__auto__.call(null,chsk));
} else {
var m__9542__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(chsk) : m__9542__auto____$1.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__9541__auto__ = (((chsk == null))?null:chsk);
var m__9542__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__9542__auto__.call(null,chsk,ev,opts));
} else {
var m__9542__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__9542__auto____$1.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,cljs.core.cst$kw$requested_DASH_disconnect);
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__44444 = arguments.length;
switch (G__44444) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$timeout_DASH_ms,_QMARK_timeout_ms,cljs.core.cst$kw$cb,_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,772,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cb,cljs.core.boolean$(cljs.core.cst$kw$cb.cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,375862445);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,777,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1003566761);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__44446_44447 = cljs.core.cst$kw$chsk_SLASH_closed;
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__44446_44447) : _QMARK_cb_fn.call(null,G__44446_44447));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join('')),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join('')),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5457__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5457__auto__)){
var cb_uuid = temp__5457__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__5457__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped(cljs.core.cst$kw$swap_SLASH_dissoc,_QMARK_f);
});})(cb_uuid,temp__5457__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__44448 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(cljs.core.cst$kw$first_DASH_open_QMARK_.cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$first_DASH_open_QMARK_,false):new_state);
var new_state__$2 = (cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44448,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44448,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chs,cljs.core.cst$kw$state], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_state,output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_44456 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44451){if((e44451 instanceof Error)){
var e = e44451;
return e;
} else {
throw e44451;

}
}})();
if((e_44456 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",824,"(map? state)",state,e_44456,null);
}

var e_44457 = (function (){try{if(cljs.core.truth_((function (){var fexpr__44454 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__44455 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$requested_DASH_disconnect,null,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax,null,cljs.core.cst$kw$unexpected,null,cljs.core.cst$kw$requested_DASH_reconnect,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__44455) : taoensso.truss.impl.set_STAR_.call(null,G__44455));
})(),x);
});
return fexpr__44454(reason);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44452){if((e44452 instanceof Error)){
var e = e44452;
return e;
} else {
throw e44452;

}
}})();
if((e_44457 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",825,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_44457,null);
}

if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,cljs.core.cst$kw$unexpected);
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect),cljs.core.cst$kw$open_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$last_DASH_close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$reason,reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb))){
return _QMARK_cb;
} else {
var e_44462 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44458){if((e44458 instanceof Error)){
var e = e44458;
return e;
} else {
throw e44458;

}
}})();
if((e_44462 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",846,"(enc/chan? ?cb)",_QMARK_cb,e_44462,null);
}

taoensso.sente.assert_event(ev);

var vec__44459 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44459,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44459,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__44459,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname(ev_id)),".cb"].join('')),reply], null));
});
;})(vec__44459,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,857,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-350739736);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",858,"(vector? clj)",clj,null,null));
var seq__44463 = cljs.core.seq(buffered_evs);
var chunk__44464 = null;
var count__44465 = (0);
var i__44466 = (0);
while(true){
if((i__44466 < count__44465)){
var ev = chunk__44464.cljs$core$IIndexed$_nth$arity$2(null,i__44466);
taoensso.sente.assert_event(ev);

var vec__44467_44473 = ev;
var id_44474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44467_44473,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_44474),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__44475 = seq__44463;
var G__44476 = chunk__44464;
var G__44477 = count__44465;
var G__44478 = (i__44466 + (1));
seq__44463 = G__44475;
chunk__44464 = G__44476;
count__44465 = G__44477;
i__44466 = G__44478;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__44463);
if(temp__5457__auto__){
var seq__44463__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44463__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__44463__$1);
var G__44479 = cljs.core.chunk_rest(seq__44463__$1);
var G__44480 = c__9739__auto__;
var G__44481 = cljs.core.count(c__9739__auto__);
var G__44482 = (0);
seq__44463 = G__44479;
chunk__44464 = G__44480;
count__44465 = G__44481;
i__44466 = G__44482;
continue;
} else {
var ev = cljs.core.first(seq__44463__$1);
taoensso.sente.assert_event(ev);

var vec__44470_44483 = ev;
var id_44484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44470_44483,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_44484),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__44485 = cljs.core.next(seq__44463__$1);
var G__44486 = null;
var G__44487 = (0);
var G__44488 = (0);
seq__44463 = G__44485;
chunk__44464 = G__44486;
count__44465 = G__44487;
i__44466 = G__44488;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__8796__auto__ = cljs.core.vector_QMARK_(x);
if(and__8796__auto__){
var vec__44492 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44492,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,cljs.core.cst$kw$chsk_SLASH_handshake);
} else {
return and__8796__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_44509 = (function (){try{if(cljs.core.truth_((function (){var fexpr__44498 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__44499 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__44499) : taoensso.truss.impl.set_STAR_.call(null,G__44499));
})(),x);
});
return fexpr__44498(chsk_type);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44496){if((e44496 instanceof Error)){
var e = e44496;
return e;
} else {
throw e44496;

}
}})();
if((e_44509 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",872,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_44509,null);
}

var e_44510 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_(clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44500){if((e44500 instanceof Error)){
var e = e44500;
return e;
} else {
throw e44500;

}
}})();
if((e_44510 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",873,"(handshake? clj)",clj,e_44510,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,874,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-324213243);

var vec__44501 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44501,(0),null);
var vec__44504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44501,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44504,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44504,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44504,(2),null);
var map__44507 = chsk;
var map__44507__$1 = ((((!((map__44507 == null)))?((((map__44507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44507):map__44507);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44507__$1,cljs.core.cst$kw$chs);
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44507__$1,cljs.core.cst$kw$ever_DASH_opened_QMARK__);
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,chsk_type,cljs.core.cst$kw$open_QMARK_,true,cljs.core.cst$kw$ever_DASH_opened_QMARK_,true,cljs.core.cst$kw$uid,_QMARK_uid,cljs.core.cst$kw$csrf_DASH_token,_QMARK_csrf_token,cljs.core.cst$kw$handshake_DASH_data,_QMARK_handshake_data,cljs.core.cst$kw$first_DASH_open_QMARK_,first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_handshake,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

if(clojure.string.blank_QMARK_(_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,893,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44501,_,vec__44504,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__44507,map__44507__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__44501,_,vec__44504,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__44507,map__44507__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,352816976);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__44501,_,vec__44504,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__44507,map__44507__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__44495_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__44495_SHARP_,new_state], 0));
});})(vec__44501,_,vec__44504,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__44507,map__44507__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return cljs.core.cst$kw$handled;
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if((taoensso.sente.node_target_QMARK_) && (typeof require !== 'undefined')){
try{return require("websocket");
}catch (e44511){var e = e44511;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k44518,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__44522 = k44518;
var G__44522__$1 = (((G__44522 instanceof cljs.core.Keyword))?G__44522.fqn:null);
switch (G__44522__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44518,else__9499__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44517){
var self__ = this;
var G__44517__$1 = this;
return (new cljs.core.RecordIter((0),G__44517__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__44523 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__44523(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44519,other44520){
var self__ = this;
var this44519__$1 = this;
return (!((other44520 == null))) && ((this44519__$1.constructor === other44520.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.client_id,other44520.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.chs,other44520.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.params,other44520.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.packer,other44520.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.url,other44520.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.ws_kalive_ms,other44520.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.state_,other44520.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.instance_handle_,other44520.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.retry_count_,other44520.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.ever_opened_QMARK__,other44520.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.backoff_ms_fn,other44520.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.cbs_waiting_,other44520.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.socket_,other44520.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.udt_last_comms_,other44520.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44519__$1.__extmap,other44520.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$udt_DASH_last_DASH_comms_,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$retry_DASH_count_,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$socket_,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$cbs_DASH_waiting_,null,cljs.core.cst$kw$state_,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__44517){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__44524 = cljs.core.keyword_identical_QMARK_;
var expr__44525 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__44527 = cljs.core.cst$kw$client_DASH_id;
var G__44528 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44527,G__44528) : pred__44524.call(null,G__44527,G__44528));
})())){
return (new taoensso.sente.ChWebSocket(G__44517,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44529 = cljs.core.cst$kw$chs;
var G__44530 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44529,G__44530) : pred__44524.call(null,G__44529,G__44530));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__44517,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44531 = cljs.core.cst$kw$params;
var G__44532 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44531,G__44532) : pred__44524.call(null,G__44531,G__44532));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__44517,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44533 = cljs.core.cst$kw$packer;
var G__44534 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44533,G__44534) : pred__44524.call(null,G__44533,G__44534));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__44517,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44535 = cljs.core.cst$kw$url;
var G__44536 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44535,G__44536) : pred__44524.call(null,G__44535,G__44536));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__44517,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44537 = cljs.core.cst$kw$ws_DASH_kalive_DASH_ms;
var G__44538 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44537,G__44538) : pred__44524.call(null,G__44537,G__44538));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__44517,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44539 = cljs.core.cst$kw$state_;
var G__44540 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44539,G__44540) : pred__44524.call(null,G__44539,G__44540));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__44517,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44541 = cljs.core.cst$kw$instance_DASH_handle_;
var G__44542 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44541,G__44542) : pred__44524.call(null,G__44541,G__44542));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__44517,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44543 = cljs.core.cst$kw$retry_DASH_count_;
var G__44544 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44543,G__44544) : pred__44524.call(null,G__44543,G__44544));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__44517,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44545 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__44546 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44545,G__44546) : pred__44524.call(null,G__44545,G__44546));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__44517,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44547 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__44548 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44547,G__44548) : pred__44524.call(null,G__44547,G__44548));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__44517,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44549 = cljs.core.cst$kw$cbs_DASH_waiting_;
var G__44550 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44549,G__44550) : pred__44524.call(null,G__44549,G__44550));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__44517,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44551 = cljs.core.cst$kw$socket_;
var G__44552 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44551,G__44552) : pred__44524.call(null,G__44551,G__44552));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__44517,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44553 = cljs.core.cst$kw$udt_DASH_last_DASH_comms_;
var G__44554 = expr__44525;
return (pred__44524.cljs$core$IFn$_invoke$arity$2 ? pred__44524.cljs$core$IFn$_invoke$arity$2(G__44553,G__44554) : pred__44524.call(null,G__44553,G__44554));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__44517,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__44517),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$retry_DASH_count_,self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$cbs_DASH_waiting_,self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$socket_,self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$udt_DASH_last_DASH_comms_,self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__44517){
var self__ = this;
var this__9495__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__44517,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__44512_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__44512_SHARP_,reason);
});})(chsk__$1))
);

var temp__5457__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,cljs.core.cst$kw$requested_DASH_reconnect);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__44555 = opts;
var map__44555__$1 = ((((!((map__44555 == null)))?((((map__44555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44555):map__44555);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44555__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44555__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44555__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5457__auto___44636 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5457__auto___44636)){
var cb_uuid_44637 = temp__5457__auto___44636;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_44637], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44557){if((e44557 instanceof Error)){
var e = e44557;
return e;
} else {
throw e44557;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",963,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5457__auto___44638__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5457__auto___44638__$1)){
var timeout_ms_44639 = temp__5457__auto___44638__$1;
var c__34390__auto___44640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___44640,timeout_ms_44639,temp__5457__auto___44638__$1,cb_uuid_44637,temp__5457__auto___44636,_QMARK_cb_uuid,ppstr,map__44555,map__44555__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___44640,timeout_ms_44639,temp__5457__auto___44638__$1,cb_uuid_44637,temp__5457__auto___44636,_QMARK_cb_uuid,ppstr,map__44555,map__44555__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_44568){
var state_val_44569 = (state_44568[(1)]);
if((state_val_44569 === (1))){
var inst_44558 = cljs.core.async.timeout(timeout_ms_44639);
var state_44568__$1 = state_44568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44568__$1,(2),inst_44558);
} else {
if((state_val_44569 === (2))){
var inst_44561 = (state_44568[(7)]);
var inst_44560 = (state_44568[(2)]);
var inst_44561__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_44568__$1 = (function (){var statearr_44570 = state_44568;
(statearr_44570[(8)] = inst_44560);

(statearr_44570[(7)] = inst_44561__$1);

return statearr_44570;
})();
if(cljs.core.truth_(inst_44561__$1)){
var statearr_44571_44641 = state_44568__$1;
(statearr_44571_44641[(1)] = (3));

} else {
var statearr_44572_44642 = state_44568__$1;
(statearr_44572_44642[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44569 === (3))){
var inst_44561 = (state_44568[(7)]);
var inst_44563 = (function (){var G__44573 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (inst_44561.cljs$core$IFn$_invoke$arity$1 ? inst_44561.cljs$core$IFn$_invoke$arity$1(G__44573) : inst_44561.call(null,G__44573));
})();
var state_44568__$1 = state_44568;
var statearr_44574_44643 = state_44568__$1;
(statearr_44574_44643[(2)] = inst_44563);

(statearr_44574_44643[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44569 === (4))){
var state_44568__$1 = state_44568;
var statearr_44575_44644 = state_44568__$1;
(statearr_44575_44644[(2)] = null);

(statearr_44575_44644[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44569 === (5))){
var inst_44566 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44568__$1,inst_44566);
} else {
return null;
}
}
}
}
}
});})(c__34390__auto___44640,timeout_ms_44639,temp__5457__auto___44638__$1,cb_uuid_44637,temp__5457__auto___44636,_QMARK_cb_uuid,ppstr,map__44555,map__44555__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__34288__auto__,c__34390__auto___44640,timeout_ms_44639,temp__5457__auto___44638__$1,cb_uuid_44637,temp__5457__auto___44636,_QMARK_cb_uuid,ppstr,map__44555,map__44555__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__34289__auto__ = null;
var taoensso$sente$state_machine__34289__auto____0 = (function (){
var statearr_44576 = [null,null,null,null,null,null,null,null,null];
(statearr_44576[(0)] = taoensso$sente$state_machine__34289__auto__);

(statearr_44576[(1)] = (1));

return statearr_44576;
});
var taoensso$sente$state_machine__34289__auto____1 = (function (state_44568){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_44568);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e44577){if((e44577 instanceof Object)){
var ex__34292__auto__ = e44577;
var statearr_44578_44645 = state_44568;
(statearr_44578_44645[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44568);

return cljs.core.cst$kw$recur;
} else {
throw e44577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44646 = state_44568;
state_44568 = G__44646;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$state_machine__34289__auto__ = function(state_44568){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34289__auto____1.call(this,state_44568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34289__auto____0;
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34289__auto____1;
return taoensso$sente$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___44640,timeout_ms_44639,temp__5457__auto___44638__$1,cb_uuid_44637,temp__5457__auto___44636,_QMARK_cb_uuid,ppstr,map__44555,map__44555__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__34392__auto__ = (function (){var statearr_44579 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_44579[(6)] = c__34390__auto___44640);

return statearr_44579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___44640,timeout_ms_44639,temp__5457__auto___44638__$1,cb_uuid_44637,temp__5457__auto___44636,_QMARK_cb_uuid,ppstr,map__44555,map__44555__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return cljs.core.cst$kw$apparent_DASH_success;
}catch (e44580){var e = e44580;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,975,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__44555,map__44555__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__44555,map__44555__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,877568708);

var temp__5457__auto___44647 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5457__auto___44647)){
var cb_uuid_44648 = temp__5457__auto___44647;
var cb_fn_STAR__44649 = (function (){var or__8808__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_44648);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44581){if((e44581 instanceof Error)){
var e__$1 = e44581;
return e__$1;
} else {
throw e44581;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",978,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__44582_44650 = cljs.core.cst$kw$chsk_SLASH_error;
(cb_fn_STAR__44649.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__44649.cljs$core$IFn$_invoke$arity$1(G__44582_44650) : cb_fn_STAR__44649.call(null,G__44582_44650));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5457__auto__ = (function (){var or__8808__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var WebSocket = temp__5457__auto__;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__5457__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1000,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,1398632224);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__44513_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44513_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$client_DASH_id,self__.client_id], null)], 0)))));
}catch (e44583){var e = e44583;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,1014,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,-397907655);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__44584 = _QMARK_socket;
(G__44584["onerror"] = ((function (G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,1024,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e44585){var _ = e44585;
return ws_ev;
}})()], null);
});})(G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,224916508);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__44514_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44514_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_error,last_ws_error);
});})(last_ws_error,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);
});})(G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

(G__44584["onmessage"] = ((function (G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__44586 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44586,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44586,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__8808__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ws,chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return cljs.core.cst$kw$handshake;
})()
:null);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping], null));

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
var temp__5455__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5455__auto__)){
var cb_uuid = temp__5455__auto__;
var temp__5455__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5455__auto____$1)){
var cb_fn = temp__5455__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1060,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5455__auto____$1,cb_uuid,temp__5455__auto__,or__8808__auto____$1,or__8808__auto__,ppstr,vec__44586,clj,_QMARK_cb_uuid,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5455__auto____$1,cb_uuid,temp__5455__auto__,or__8808__auto____$1,or__8808__auto__,ppstr,vec__44586,clj,_QMARK_cb_uuid,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,-753281491);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

(G__44584["onclose"] = ((function (G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$ev,ws_ev,cljs.core.cst$kw$clean_QMARK_,clean_QMARK_,cljs.core.cst$kw$code,code,cljs.core.cst$kw$reason,reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"taoensso.sente",null,1082,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
,null)),null,-1092164908);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__44515_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44515_SHARP_,cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1){
return (function (p1__44516_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__44516_SHARP_,cljs.core.cst$kw$unexpected),cljs.core.cst$kw$last_DASH_ws_DASH_close,last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__44584,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
);

return G__44584;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5457__auto__,chsk__$1))
;
var temp__5457__auto___44651__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5457__auto___44651__$1)){
var ms_44652 = temp__5457__auto___44651__$1;
var c__34390__auto___44653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___44653,ms_44652,temp__5457__auto___44651__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___44653,ms_44652,temp__5457__auto___44651__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1){
return (function (state_44616){
var state_val_44617 = (state_44616[(1)]);
if((state_val_44617 === (7))){
var inst_44612 = (state_44616[(2)]);
var state_44616__$1 = state_44616;
var statearr_44618_44654 = state_44616__$1;
(statearr_44618_44654[(2)] = inst_44612);

(statearr_44618_44654[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44617 === (1))){
var state_44616__$1 = state_44616;
var statearr_44619_44655 = state_44616__$1;
(statearr_44619_44655[(2)] = null);

(statearr_44619_44655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44617 === (4))){
var inst_44593 = (state_44616[(2)]);
var inst_44594 = have_handle_QMARK_();
var state_44616__$1 = (function (){var statearr_44620 = state_44616;
(statearr_44620[(7)] = inst_44593);

return statearr_44620;
})();
if(cljs.core.truth_(inst_44594)){
var statearr_44621_44656 = state_44616__$1;
(statearr_44621_44656[(1)] = (5));

} else {
var statearr_44622_44657 = state_44616__$1;
(statearr_44622_44657[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44617 === (6))){
var state_44616__$1 = state_44616;
var statearr_44623_44658 = state_44616__$1;
(statearr_44623_44658[(2)] = null);

(statearr_44623_44658[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44617 === (3))){
var inst_44614 = (state_44616[(2)]);
var state_44616__$1 = state_44616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44616__$1,inst_44614);
} else {
if((state_val_44617 === (2))){
var inst_44590 = cljs.core.deref(self__.udt_last_comms_);
var inst_44591 = cljs.core.async.timeout(ms_44652);
var state_44616__$1 = (function (){var statearr_44624 = state_44616;
(statearr_44624[(8)] = inst_44590);

return statearr_44624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44616__$1,(4),inst_44591);
} else {
if((state_val_44617 === (9))){
var state_44616__$1 = state_44616;
var statearr_44625_44659 = state_44616__$1;
(statearr_44625_44659[(2)] = null);

(statearr_44625_44659[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44617 === (5))){
var inst_44590 = (state_44616[(8)]);
var inst_44596 = cljs.core.deref(self__.udt_last_comms_);
var inst_44597 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44590,inst_44596);
var state_44616__$1 = state_44616;
if(inst_44597){
var statearr_44626_44660 = state_44616__$1;
(statearr_44626_44660[(1)] = (8));

} else {
var statearr_44627_44661 = state_44616__$1;
(statearr_44627_44661[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44617 === (10))){
var inst_44608 = (state_44616[(2)]);
var state_44616__$1 = (function (){var statearr_44628 = state_44616;
(statearr_44628[(9)] = inst_44608);

return statearr_44628;
})();
var statearr_44629_44662 = state_44616__$1;
(statearr_44629_44662[(2)] = null);

(statearr_44629_44662[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44617 === (8))){
var inst_44599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44600 = [cljs.core.cst$kw$chsk_SLASH_ws_DASH_ping];
var inst_44601 = (new cljs.core.PersistentVector(null,1,(5),inst_44599,inst_44600,null));
var inst_44602 = [cljs.core.cst$kw$flush_QMARK_];
var inst_44603 = [true];
var inst_44604 = cljs.core.PersistentHashMap.fromArrays(inst_44602,inst_44603);
var inst_44605 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_44601,inst_44604);
var state_44616__$1 = state_44616;
var statearr_44630_44663 = state_44616__$1;
(statearr_44630_44663[(2)] = inst_44605);

(statearr_44630_44663[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___44653,ms_44652,temp__5457__auto___44651__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1))
;
return ((function (switch__34288__auto__,c__34390__auto___44653,ms_44652,temp__5457__auto___44651__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__34289__auto__ = null;
var taoensso$sente$state_machine__34289__auto____0 = (function (){
var statearr_44631 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44631[(0)] = taoensso$sente$state_machine__34289__auto__);

(statearr_44631[(1)] = (1));

return statearr_44631;
});
var taoensso$sente$state_machine__34289__auto____1 = (function (state_44616){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_44616);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e44632){if((e44632 instanceof Object)){
var ex__34292__auto__ = e44632;
var statearr_44633_44664 = state_44616;
(statearr_44633_44664[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44616);

return cljs.core.cst$kw$recur;
} else {
throw e44632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44665 = state_44616;
state_44616 = G__44665;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$state_machine__34289__auto__ = function(state_44616){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__34289__auto____1.call(this,state_44616);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__34289__auto____0;
taoensso$sente$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__34289__auto____1;
return taoensso$sente$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___44653,ms_44652,temp__5457__auto___44651__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1))
})();
var state__34392__auto__ = (function (){var statearr_44634 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_44634[(6)] = c__34390__auto___44653);

return statearr_44634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___44653,ms_44652,temp__5457__auto___44651__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5457__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$ws_DASH_kalive_DASH_ms,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$retry_DASH_count_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$cbs_DASH_waiting_,cljs.core.cst$sym$socket_,cljs.core.cst$sym$udt_DASH_last_DASH_comms_], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__44521){
return (new taoensso.sente.ChWebSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$ws_DASH_kalive_DASH_ms.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$retry_DASH_count_.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$cbs_DASH_waiting_.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$socket_.cljs$core$IFn$_invoke$arity$1(G__44521),cljs.core.cst$kw$udt_DASH_last_DASH_comms_.cljs$core$IFn$_invoke$arity$1(G__44521),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44521,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$retry_DASH_count_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.cst$kw$socket_,cljs.core.cst$kw$udt_DASH_last_DASH_comms_], 0))),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ws,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$instance_DASH_handle_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$retry_DASH_count_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.cst$kw$cbs_DASH_waiting_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$socket_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$udt_DASH_last_DASH_comms_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k44673,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__44677 = k44673;
var G__44677__$1 = (((G__44677 instanceof cljs.core.Keyword))?G__44677.fqn:null);
switch (G__44677__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44673,else__9499__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44672){
var self__ = this;
var G__44672__$1 = this;
return (new cljs.core.RecordIter((0),G__44672__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$client_DASH_id,cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__44678 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__44678(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44674,other44675){
var self__ = this;
var this44674__$1 = this;
return (!((other44675 == null))) && ((this44674__$1.constructor === other44675.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.client_id,other44675.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.chs,other44675.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.params,other44675.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.packer,other44675.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.url,other44675.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.state_,other44675.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.instance_handle_,other44675.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.ever_opened_QMARK__,other44675.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.backoff_ms_fn,other44675.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.ajax_opts,other44675.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.curr_xhr_,other44675.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44674__$1.__extmap,other44675.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$curr_DASH_xhr_,null,cljs.core.cst$kw$ever_DASH_opened_QMARK__,null,cljs.core.cst$kw$client_DASH_id,null,cljs.core.cst$kw$packer,null,cljs.core.cst$kw$chs,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$instance_DASH_handle_,null,cljs.core.cst$kw$ajax_DASH_opts,null,cljs.core.cst$kw$state_,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__44672){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__44679 = cljs.core.keyword_identical_QMARK_;
var expr__44680 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__44682 = cljs.core.cst$kw$client_DASH_id;
var G__44683 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44682,G__44683) : pred__44679.call(null,G__44682,G__44683));
})())){
return (new taoensso.sente.ChAjaxSocket(G__44672,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44684 = cljs.core.cst$kw$chs;
var G__44685 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44684,G__44685) : pred__44679.call(null,G__44684,G__44685));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__44672,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44686 = cljs.core.cst$kw$params;
var G__44687 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44686,G__44687) : pred__44679.call(null,G__44686,G__44687));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__44672,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44688 = cljs.core.cst$kw$packer;
var G__44689 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44688,G__44689) : pred__44679.call(null,G__44688,G__44689));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__44672,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44690 = cljs.core.cst$kw$url;
var G__44691 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44690,G__44691) : pred__44679.call(null,G__44690,G__44691));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__44672,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44692 = cljs.core.cst$kw$state_;
var G__44693 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44692,G__44693) : pred__44679.call(null,G__44692,G__44693));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__44672,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44694 = cljs.core.cst$kw$instance_DASH_handle_;
var G__44695 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44694,G__44695) : pred__44679.call(null,G__44694,G__44695));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__44672,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44696 = cljs.core.cst$kw$ever_DASH_opened_QMARK__;
var G__44697 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44696,G__44697) : pred__44679.call(null,G__44696,G__44697));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__44672,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44698 = cljs.core.cst$kw$backoff_DASH_ms_DASH_fn;
var G__44699 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44698,G__44699) : pred__44679.call(null,G__44698,G__44699));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__44672,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44700 = cljs.core.cst$kw$ajax_DASH_opts;
var G__44701 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44700,G__44701) : pred__44679.call(null,G__44700,G__44701));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__44672,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44702 = cljs.core.cst$kw$curr_DASH_xhr_;
var G__44703 = expr__44680;
return (pred__44679.cljs$core$IFn$_invoke$arity$2 ? pred__44679.cljs$core$IFn$_invoke$arity$2(G__44702,G__44703) : pred__44679.call(null,G__44702,G__44703));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__44672,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__44672),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$client_DASH_id,self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$chs,self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$packer,self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$instance_DASH_handle_,self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ever_DASH_opened_QMARK__,self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_opts,self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$curr_DASH_xhr_,self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__44672){
var self__ = this;
var this__9495__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__44672,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__44666_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__44666_SHARP_,reason);
});})(chsk__$1))
);

var temp__5457__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5457__auto__)){
var x = temp__5457__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,cljs.core.cst$kw$requested_DASH_reconnect);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__44704 = opts;
var map__44704__$1 = ((((!((map__44704 == null)))?((((map__44704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44704):map__44704);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44704__$1,cljs.core.cst$kw$timeout_DASH_ms);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44704__$1,cljs.core.cst$kw$cb);
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44704__$1,cljs.core.cst$kw$flush_QMARK_);
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = cljs.core.cst$kw$csrf_DASH_token.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__44706_44727 = self__.url;
var G__44707_44728 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__8808__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$headers,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$X_DASH_CSRF_DASH_Token,csrf_token], null)], 0)),cljs.core.cst$kw$params,(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?cljs.core.cst$kw$ajax_DASH_cb:null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$csrf_DASH_token,csrf_token,cljs.core.cst$kw$client_DASH_id,self__.client_id,cljs.core.cst$kw$ppstr,ppstr], null)], 0));
})()], null)], 0));
var G__44708_44729 = ((function (G__44706_44727,G__44707_44728,csrf_token,map__44704,map__44704__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__44709){
var map__44710 = p__44709;
var map__44710__$1 = ((((!((map__44710 == null)))?((((map__44710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44710):map__44710);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44710__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44710__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__44712 = cljs.core.cst$kw$chsk_SLASH_timeout;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__44712) : _QMARK_cb_fn.call(null,G__44712));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__44710,map__44710__$1,_QMARK_error,_QMARK_content,G__44706_44727,G__44707_44728,csrf_token,map__44704,map__44704__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__44667_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__44667_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__44710,map__44710__$1,_QMARK_error,_QMARK_content,G__44706_44727,G__44707_44728,csrf_token,map__44704,map__44704__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__44713 = cljs.core.cst$kw$chsk_SLASH_error;
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__44713) : _QMARK_cb_fn.call(null,G__44713));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__44714 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44714,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44714,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,cljs.core.cst$kw$chsk_SLASH_dummy_DASH_cb_DASH_200)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1202,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (content,resp_ppstr,vec__44714,resp_clj,___$1,map__44710,map__44710__$1,_QMARK_error,_QMARK_content,G__44706_44727,G__44707_44728,csrf_token,map__44704,map__44704__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__44714,resp_clj,___$1,map__44710,map__44710__$1,_QMARK_error,_QMARK_content,G__44706_44727,G__44707_44728,csrf_token,map__44704,map__44704__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-1111942814);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__44714,resp_clj,___$1,map__44710,map__44710__$1,_QMARK_error,_QMARK_content,G__44706_44727,G__44707_44728,csrf_token,map__44704,map__44704__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__44668_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44668_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,resp_ppstr,vec__44714,resp_clj,___$1,map__44710,map__44710__$1,_QMARK_error,_QMARK_content,G__44706_44727,G__44707_44728,csrf_token,map__44704,map__44704__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__44706_44727,G__44707_44728,csrf_token,map__44704,map__44704__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__44706_44727,G__44707_44728,G__44708_44729) : taoensso.sente.ajax_lite.call(null,G__44706_44727,G__44707_44728,G__44708_44729));

return cljs.core.cst$kw$apparent_DASH_success;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,1212,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1356991138);

if(cljs.core.truth_(have_handle_QMARK_())){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(cljs.core.truth_(have_handle_QMARK_())){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1220,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1877047078);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__44669_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44669_SHARP_,cljs.core.cst$kw$udt_DASH_next_DASH_reconnect,udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__44717 = self__.url;
var G__44718 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$timeout_DASH_ms,(function (){var or__8808__auto__ = cljs.core.cst$kw$timeout_DASH_ms.cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$text,cljs.core.cst$kw$params,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$udt,taoensso.encore.now_udt(),cljs.core.cst$kw$client_DASH_id,self__.client_id], null),(cljs.core.truth_(cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handshake_QMARK_,true], null))], 0))], null)], 0));
var G__44719 = ((function (G__44717,G__44718,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__44720){
var map__44721 = p__44720;
var map__44721__$1 = ((((!((map__44721 == null)))?((((map__44721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44721):map__44721);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44721__$1,cljs.core.cst$kw$_QMARK_error);
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44721__$1,cljs.core.cst$kw$_QMARK_content);
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,cljs.core.cst$kw$timeout)){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__44721,map__44721__$1,_QMARK_error,_QMARK_content,G__44717,G__44718,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__44670_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__44670_SHARP_,cljs.core.cst$kw$unexpected);
});})(map__44721,map__44721__$1,_QMARK_error,_QMARK_content,G__44717,G__44718,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__44723 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44723,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_(cljs.core.cst$kw$ajax,chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__44723,clj,handshake_QMARK_,map__44721,map__44721__$1,_QMARK_error,_QMARK_content,G__44717,G__44718,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__44671_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44671_SHARP_,cljs.core.cst$kw$open_QMARK_,true);
});})(content,ppstr,vec__44723,clj,handshake_QMARK_,map__44721,map__44721__$1,_QMARK_error,_QMARK_content,G__44717,G__44718,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn((0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__8808__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,cljs.core.cst$kw$chsk_SLASH_timeout))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$debug_SLASH_timeout], null)], null));
} else {
}

return cljs.core.cst$kw$noop;
})()
:null);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__44717,G__44718,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__44717,G__44718,G__44719) : taoensso.sente.ajax_lite.call(null,G__44717,G__44718,G__44719));
})());
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn((0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$client_DASH_id,cljs.core.cst$sym$chs,cljs.core.cst$sym$params,cljs.core.cst$sym$packer,cljs.core.cst$sym$url,cljs.core.cst$sym$state_,cljs.core.cst$sym$instance_DASH_handle_,cljs.core.cst$sym$ever_DASH_opened_QMARK__,cljs.core.cst$sym$backoff_DASH_ms_DASH_fn,cljs.core.cst$sym$ajax_DASH_opts,cljs.core.cst$sym$curr_DASH_xhr_], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__44676){
return (new taoensso.sente.ChAjaxSocket(cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$chs.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$packer.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$instance_DASH_handle_.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$backoff_DASH_ms_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$ajax_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__44676),cljs.core.cst$kw$curr_DASH_xhr_.cljs$core$IFn$_invoke$arity$1(G__44676),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44676,cljs.core.cst$kw$client_DASH_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$chs,cljs.core.cst$kw$params,cljs.core.cst$kw$packer,cljs.core.cst$kw$url,cljs.core.cst$kw$state_,cljs.core.cst$kw$instance_DASH_handle_,cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,cljs.core.cst$kw$ajax_DASH_opts,cljs.core.cst$kw$curr_DASH_xhr_], 0))),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$ajax,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$instance_DASH_handle_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$ever_DASH_opened_QMARK__,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.cst$kw$curr_DASH_xhr_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k44731,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__44735 = k44731;
var G__44735__$1 = (((G__44735 instanceof cljs.core.Keyword))?G__44735.fqn:null);
switch (G__44735__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44731,else__9499__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$impl_,self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44730){
var self__ = this;
var G__44730__$1 = this;
return (new cljs.core.RecordIter((0),G__44730__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__44736 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__44736(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44732,other44733){
var self__ = this;
var this44732__$1 = this;
return (!((other44733 == null))) && ((this44732__$1.constructor === other44733.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.ws_chsk_opts,other44733.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.ajax_chsk_opts,other44733.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.state_,other44733.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.impl_,other44733.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44732__$1.__extmap,other44733.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$impl_,null,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,null,cljs.core.cst$kw$state_,null,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__44730){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__44737 = cljs.core.keyword_identical_QMARK_;
var expr__44738 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__44740 = cljs.core.cst$kw$ws_DASH_chsk_DASH_opts;
var G__44741 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44740,G__44741) : pred__44737.call(null,G__44740,G__44741));
})())){
return (new taoensso.sente.ChAutoSocket(G__44730,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44742 = cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts;
var G__44743 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44742,G__44743) : pred__44737.call(null,G__44742,G__44743));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__44730,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44744 = cljs.core.cst$kw$state_;
var G__44745 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44744,G__44745) : pred__44737.call(null,G__44744,G__44745));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__44730,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__44746 = cljs.core.cst$kw$impl_;
var G__44747 = expr__44738;
return (pred__44737.cljs$core$IFn$_invoke$arity$2 ? pred__44737.cljs$core$IFn$_invoke$arity$2(G__44746,G__44747) : pred__44737.call(null,G__44746,G__44747));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__44730,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__44730),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state_,self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$impl_,self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__44730){
var self__ = this;
var this__9495__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__44730,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5457__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5457__auto__)){
var impl = temp__5457__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5457__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5457__auto__)){
var impl = temp__5457__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$requested_DASH_reconnect);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5455__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5455__auto__)){
var impl = temp__5455__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__44748 = opts;
var map__44748__$1 = ((((!((map__44748 == null)))?((((map__44748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44748):map__44748);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44748__$1,cljs.core.cst$kw$cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,cljs.core.cst$kw$state_,self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade);

return taoensso.sente._chsk_connect_BANG_(taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___44751 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,cljs.core.cst$kw$chsk_SLASH_auto_DASH_ajax_DASH_downgrade,((function (downgraded_QMARK___44751,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__5457__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5457__auto__)){
var impl = temp__5457__auto__;
var temp__5457__auto____$1 = cljs.core.cst$kw$ever_DASH_opened_QMARK__.cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ever_opened_QMARK__ = temp__5457__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$last_DASH_error.cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(downgraded_QMARK___44751,false,true))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1348,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5457__auto____$1,impl,temp__5457__auto__,downgraded_QMARK___44751,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5457__auto____$1,impl,temp__5457__auto__,downgraded_QMARK___44751,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-1643402016);

taoensso.sente._chsk_disconnect_BANG_(impl,cljs.core.cst$kw$downgrading_DASH_ws_DASH_to_DASH_ajax);

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___44751,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_(taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_(self__.impl_,(function (){var or__8808__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ws_DASH_chsk_DASH_opts,cljs.core.cst$sym$ajax_DASH_chsk_DASH_opts,cljs.core.cst$sym$state_,cljs.core.cst$sym$impl_], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__44734){
return (new taoensso.sente.ChAutoSocket(cljs.core.cst$kw$ws_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(G__44734),cljs.core.cst$kw$impl_.cljs$core$IFn$_invoke$arity$1(G__44734),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44734,cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,cljs.core.cst$kw$state_,cljs.core.cst$kw$impl_], 0))),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto,cljs.core.cst$kw$open_QMARK_,false,cljs.core.cst$kw$ever_DASH_opened_QMARK_,false], null)),cljs.core.cst$kw$impl_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__44752 = protocol;
var G__44752__$1 = (((G__44752 instanceof cljs.core.Keyword))?G__44752.fqn:null);
switch (G__44752__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(cljs.core.truth_((function (){var fexpr__44755 = ((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__44756 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__44756) : taoensso.truss.impl.set_STAR_.call(null,G__44756));
})(),x);
});})(protocol__$1))
;
return fexpr__44755(protocol__$1);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44753){if((e44753 instanceof Error)){
var e = e44753;
return e;
} else {
throw e44753;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1368,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__44757 = type;
var G__44757__$1 = (((G__44757 instanceof cljs.core.Keyword))?G__44757.fqn:null);
switch (G__44757__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__44758 = protocol__$2;
switch (G__44758) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44758)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44757__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0)))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___44788 = arguments.length;
var i__10088__auto___44789 = (0);
while(true){
if((i__10088__auto___44789 < len__10087__auto___44788)){
args__10094__auto__.push((arguments[i__10088__auto___44789]));

var G__44790 = (i__10088__auto___44789 + (1));
i__10088__auto___44789 = G__44790;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__44764){
var vec__44765 = p__44764;
var map__44768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44765,(0),null);
var map__44768__$1 = ((((!((map__44768 == null)))?((((map__44768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44768):map__44768);
var opts = map__44768__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44768__$1,cljs.core.cst$kw$ajax_DASH_opts);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44768__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$secs,(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44768__$1,cljs.core.cst$kw$client_DASH_id,(function (){var or__8808__auto__ = cljs.core.cst$kw$client_DASH_uuid.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44768__$1,cljs.core.cst$kw$protocol);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44768__$1,cljs.core.cst$kw$packer,cljs.core.cst$kw$edn);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44768__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44768__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$auto);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44768__$1,cljs.core.cst$kw$host);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44768__$1,cljs.core.cst$kw$recv_DASH_buf_DASH_or_DASH_n,cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44768__$1,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44768__$1,cljs.core.cst$kw$wrap_DASH_recv_DASH_evs_QMARK_,true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44765,(1),null);
var e_44791 = (function (){try{if(cljs.core.truth_((function (){var fexpr__44772 = ((function (vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__44773 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ws,null,cljs.core.cst$kw$ajax,null,cljs.core.cst$kw$auto,null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__44773) : taoensso.truss.impl.set_STAR_.call(null,G__44773));
})(),x);
});})(vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
return fexpr__44772(type);
})())){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44770){if((e44770 instanceof Error)){
var e = e44770;
return e;
} else {
throw e44770;

}
}})();
if((e_44791 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1410,"([:in #{:ws :ajax :auto}] type)",type,e_44791,null);
}

var e_44792 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44774){if((e44774 instanceof Error)){
var e = e44774;
return e;
} else {
throw e44774;

}
}})();
if((e_44792 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1411,"(enc/nblank-str? client-id)",client_id,e_44792,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1413,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-548040208);
} else {
}

if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$lp_DASH_timeout)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1414,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-769297709);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__44775 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__8808__auto__ = path;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$pathname.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5455__auto__ = cljs.core.cst$kw$chsk_DASH_url_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44778 = path__$1;
var G__44779 = win_loc;
var G__44780 = cljs.core.cst$kw$ws;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44778,G__44779,G__44780) : f.call(null,G__44778,G__44779,G__44780));
})(),(function (){var G__44781 = path__$1;
var G__44782 = win_loc;
var G__44783 = cljs.core.cst$kw$ajax;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44781,G__44782,G__44783) : f.call(null,G__44781,G__44782,G__44783));
})()], null);
} else {
var protocol__$1 = (function (){var or__8808__auto__ = protocol;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return cljs.core.cst$kw$http;
}
}
})();
var host__$1 = (function (){var or__8808__auto__ = host;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ws),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,cljs.core.cst$kw$ajax)], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44775,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44775,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$internal,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),cljs.core.cst$kw$state,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),cljs.core.cst$kw$_LT_server,(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__44775,ws_url,ajax_url,vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chsk_SLASH_recv,ev], null);
});})(buf,packer__$1,vec__44775,ws_url,ajax_url,vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$client_DASH_id,client_id,cljs.core.cst$kw$chs,private_chs,cljs.core.cst$kw$params,params,cljs.core.cst$kw$packer,packer__$1,cljs.core.cst$kw$ws_DASH_kalive_DASH_ms,ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,ws_url,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,ajax_url,cljs.core.cst$kw$ajax_DASH_opts,ajax_opts,cljs.core.cst$kw$backoff_DASH_ms_DASH_fn,backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ws_DASH_chsk_DASH_opts,ws_chsk_opts,cljs.core.cst$kw$ajax_DASH_chsk_DASH_opts,ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__44784 = type;
var G__44784__$1 = (((G__44784 instanceof cljs.core.Keyword))?G__44784.fqn:null);
switch (G__44784__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44784__$1)].join('')));

}
})());
var temp__5455__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5455__auto__)){
var chsk = temp__5455__auto__;
var chsk_state_ = cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$internal.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.cst$kw$_LT_server.cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5455__auto__,packer__$1,vec__44775,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__44785 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44785,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44785,(1),null);
var ev__$1 = vec__44785;
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ch_DASH_recv,internal_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,chsk_state_,cljs.core.cst$kw$event,ev__$1,cljs.core.cst$kw$id,ev_id,cljs.core.cst$kw$_QMARK_data,ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5455__auto__,packer__$1,vec__44775,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk,chsk,cljs.core.cst$kw$ch_DASH_recv,ev_msg_ch,cljs.core.cst$kw$send_DASH_fn,send_fn,cljs.core.cst$kw$state,cljs.core.cst$kw$state_.cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"taoensso.sente",null,1502,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5455__auto__,packer__$1,vec__44775,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5455__auto__,packer__$1,vec__44775,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__44765,map__44768,map__44768__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,523427912);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq44762){
var G__44763 = cljs.core.first(seq44762);
var seq44762__$1 = cljs.core.next(seq44762);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44763,seq44762__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__44794 = opts;
var map__44794__$1 = ((((!((map__44794 == null)))?((((map__44794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44794):map__44794);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44794__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44794__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44794__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__34390__auto___44872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_44841){
var state_val_44842 = (state_44841[(1)]);
if((state_val_44842 === (7))){
var inst_44837 = (state_44841[(2)]);
var state_44841__$1 = state_44841;
var statearr_44843_44873 = state_44841__$1;
(statearr_44843_44873[(2)] = inst_44837);

(statearr_44843_44873[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (1))){
var state_44841__$1 = state_44841;
var statearr_44844_44874 = state_44841__$1;
(statearr_44844_44874[(2)] = null);

(statearr_44844_44874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (4))){
var inst_44806 = (state_44841[(7)]);
var inst_44807 = (state_44841[(8)]);
var inst_44804 = (state_44841[(9)]);
var inst_44804__$1 = (state_44841[(2)]);
var inst_44805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44804__$1,(0),null);
var inst_44806__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44804__$1,(1),null);
var inst_44807__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44806__$1,ch_ctrl);
var state_44841__$1 = (function (){var statearr_44845 = state_44841;
(statearr_44845[(7)] = inst_44806__$1);

(statearr_44845[(8)] = inst_44807__$1);

(statearr_44845[(9)] = inst_44804__$1);

(statearr_44845[(10)] = inst_44805);

return statearr_44845;
})();
if(inst_44807__$1){
var statearr_44846_44875 = state_44841__$1;
(statearr_44846_44875[(1)] = (5));

} else {
var statearr_44847_44876 = state_44841__$1;
(statearr_44847_44876[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (15))){
var inst_44805 = (state_44841[(10)]);
var state_44841__$1 = state_44841;
var statearr_44848_44877 = state_44841__$1;
(statearr_44848_44877[(2)] = inst_44805);

(statearr_44848_44877[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (13))){
var inst_44823 = (state_44841[(2)]);
var state_44841__$1 = state_44841;
var statearr_44849_44878 = state_44841__$1;
(statearr_44849_44878[(2)] = inst_44823);

(statearr_44849_44878[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (6))){
var inst_44805 = (state_44841[(10)]);
var inst_44812 = (inst_44805 == null);
var inst_44813 = cljs.core.not(inst_44812);
var state_44841__$1 = state_44841;
if(inst_44813){
var statearr_44850_44879 = state_44841__$1;
(statearr_44850_44879[(1)] = (8));

} else {
var statearr_44851_44880 = state_44841__$1;
(statearr_44851_44880[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (3))){
var inst_44839 = (state_44841[(2)]);
var state_44841__$1 = state_44841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44841__$1,inst_44839);
} else {
if((state_val_44842 === (12))){
var state_44841__$1 = state_44841;
var statearr_44852_44881 = state_44841__$1;
(statearr_44852_44881[(2)] = false);

(statearr_44852_44881[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (2))){
var inst_44800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44801 = [ch_recv,ch_ctrl];
var inst_44802 = (new cljs.core.PersistentVector(null,2,(5),inst_44800,inst_44801,null));
var state_44841__$1 = state_44841;
return cljs.core.async.ioc_alts_BANG_(state_44841__$1,(4),inst_44802);
} else {
if((state_val_44842 === (11))){
var state_44841__$1 = state_44841;
var statearr_44853_44882 = state_44841__$1;
(statearr_44853_44882[(2)] = true);

(statearr_44853_44882[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (9))){
var state_44841__$1 = state_44841;
var statearr_44854_44883 = state_44841__$1;
(statearr_44854_44883[(2)] = false);

(statearr_44854_44883[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (5))){
var state_44841__$1 = state_44841;
var statearr_44855_44884 = state_44841__$1;
(statearr_44855_44884[(2)] = null);

(statearr_44855_44884[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (14))){
var inst_44805 = (state_44841[(10)]);
var inst_44828 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44805);
var state_44841__$1 = state_44841;
var statearr_44856_44885 = state_44841__$1;
(statearr_44856_44885[(2)] = inst_44828);

(statearr_44856_44885[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (16))){
var inst_44806 = (state_44841[(7)]);
var inst_44807 = (state_44841[(8)]);
var inst_44804 = (state_44841[(9)]);
var inst_44805 = (state_44841[(10)]);
var inst_44831 = (state_44841[(2)]);
var inst_44832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44831,cljs.core.cst$kw$event);
var inst_44833 = (function (){var vec__44797 = inst_44804;
var v = inst_44805;
var p = inst_44806;
var stop_QMARK_ = inst_44807;
var map__44810 = inst_44831;
var event_msg = inst_44831;
var event = inst_44832;
return ((function (vec__44797,v,p,stop_QMARK_,map__44810,event_msg,event,inst_44806,inst_44807,inst_44804,inst_44805,inst_44831,inst_44832,state_val_44842,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"taoensso.sente",null,1529,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__44797,v,p,stop_QMARK_,map__44810,event_msg,event,inst_44806,inst_44807,inst_44804,inst_44805,inst_44831,inst_44832,state_val_44842,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__44797,v,p,stop_QMARK_,map__44810,event_msg,event,inst_44806,inst_44807,inst_44804,inst_44805,inst_44831,inst_44832,state_val_44842,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-808937888);
} else {
}

var G__44859 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44860){if((e44860 instanceof Error)){
var e = e44860;
return e;
} else {
throw e44860;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1532,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e44861){if((e44861 instanceof Error)){
var e = e44861;
return e;
} else {
throw e44861;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1533,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__44859) : event_msg_handler.call(null,G__44859));
}catch (e44857){if((e44857 instanceof Error)){
var e1 = e44857;
try{var temp__5455__auto__ = error_handler;
if(cljs.core.truth_(temp__5455__auto__)){
var eh = temp__5455__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,1538,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (temp__5455__auto__,e1,vec__44797,v,p,stop_QMARK_,map__44810,event_msg,event,inst_44806,inst_44807,inst_44804,inst_44805,inst_44831,inst_44832,state_val_44842,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5455__auto__,e1,vec__44797,v,p,stop_QMARK_,map__44810,event_msg,event,inst_44806,inst_44807,inst_44804,inst_44805,inst_44831,inst_44832,state_val_44842,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-237347157);
}
}catch (e44858){if((e44858 instanceof Error)){
var e2 = e44858;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"taoensso.sente",null,1539,cljs.core.cst$kw$f,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e2,e1,vec__44797,v,p,stop_QMARK_,map__44810,event_msg,event,inst_44806,inst_44807,inst_44804,inst_44805,inst_44831,inst_44832,state_val_44842,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__44797,v,p,stop_QMARK_,map__44810,event_msg,event,inst_44806,inst_44807,inst_44804,inst_44805,inst_44831,inst_44832,state_val_44842,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,989415378);
} else {
throw e44858;

}
}} else {
throw e44857;

}
}});
;})(vec__44797,v,p,stop_QMARK_,map__44810,event_msg,event,inst_44806,inst_44807,inst_44804,inst_44805,inst_44831,inst_44832,state_val_44842,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_44834 = execute1(inst_44833);
var state_44841__$1 = (function (){var statearr_44862 = state_44841;
(statearr_44862[(11)] = inst_44834);

return statearr_44862;
})();
var statearr_44863_44886 = state_44841__$1;
(statearr_44863_44886[(2)] = null);

(statearr_44863_44886[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (10))){
var inst_44826 = (state_44841[(2)]);
var state_44841__$1 = state_44841;
if(cljs.core.truth_(inst_44826)){
var statearr_44864_44887 = state_44841__$1;
(statearr_44864_44887[(1)] = (14));

} else {
var statearr_44865_44888 = state_44841__$1;
(statearr_44865_44888[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44842 === (8))){
var inst_44805 = (state_44841[(10)]);
var inst_44815 = inst_44805.cljs$lang$protocol_mask$partition0$;
var inst_44816 = (inst_44815 & (64));
var inst_44817 = inst_44805.cljs$core$ISeq$;
var inst_44818 = (cljs.core.PROTOCOL_SENTINEL === inst_44817);
var inst_44819 = (inst_44816) || (inst_44818);
var state_44841__$1 = state_44841;
if(cljs.core.truth_(inst_44819)){
var statearr_44866_44889 = state_44841__$1;
(statearr_44866_44889[(1)] = (11));

} else {
var statearr_44867_44890 = state_44841__$1;
(statearr_44867_44890[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__34288__auto__,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto____0 = (function (){
var statearr_44868 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44868[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto__);

(statearr_44868[(1)] = (1));

return statearr_44868;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto____1 = (function (state_44841){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_44841);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e44869){if((e44869 instanceof Object)){
var ex__34292__auto__ = e44869;
var statearr_44870_44891 = state_44841;
(statearr_44870_44891[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44841);

return cljs.core.cst$kw$recur;
} else {
throw e44869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__44892 = state_44841;
state_44841 = G__44892;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto__ = function(state_44841){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto____1.call(this,state_44841);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__34392__auto__ = (function (){var statearr_44871 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_44871[(6)] = c__34390__auto___44872);

return statearr_44871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___44872,map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__44794,map__44794__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___44902 = arguments.length;
var i__10088__auto___44903 = (0);
while(true){
if((i__10088__auto___44903 < len__10087__auto___44902)){
args__10094__auto__.push((arguments[i__10088__auto___44903]));

var G__44904 = (i__10088__auto___44903 + (1));
i__10088__auto___44903 = G__44904;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__44896){
var vec__44897 = p__44896;
var map__44900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44897,(0),null);
var map__44900__$1 = ((((!((map__44900 == null)))?((((map__44900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44900):map__44900);
var opts = map__44900__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,cljs.core.cst$kw$error_DASH_handler);
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900__$1,cljs.core.cst$kw$simple_DASH_auto_DASH_threading_QMARK_);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.cst$kw$server,ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq44893){
var G__44894 = cljs.core.first(seq44893);
var seq44893__$1 = cljs.core.next(seq44893);
var G__44895 = cljs.core.first(seq44893__$1);
var seq44893__$2 = cljs.core.next(seq44893__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44894,G__44895,seq44893__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___44914 = arguments.length;
var i__10088__auto___44915 = (0);
while(true){
if((i__10088__auto___44915 < len__10087__auto___44914)){
args__10094__auto__.push((arguments[i__10088__auto___44915]));

var G__44916 = (i__10088__auto___44915 + (1));
i__10088__auto___44915 = G__44916;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__44908){
var vec__44909 = p__44908;
var map__44912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44909,(0),null);
var map__44912__$1 = ((((!((map__44912 == null)))?((((map__44912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44912):map__44912);
var opts = map__44912__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44912__$1,cljs.core.cst$kw$trace_DASH_evs_QMARK_);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44912__$1,cljs.core.cst$kw$error_DASH_handler);
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(cljs.core.cst$kw$server),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq44905){
var G__44906 = cljs.core.first(seq44905);
var seq44905__$1 = cljs.core.next(seq44905);
var G__44907 = cljs.core.first(seq44905__$1);
var seq44905__$2 = cljs.core.next(seq44905__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44906,G__44907,seq44905__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__44917 = cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__44918 = cljs.core.cst$kw$ch_DASH_recv.cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__44917,G__44918) : event_handler.call(null,G__44917,G__44918));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__44919,websocket_QMARK_){
var map__44920 = p__44919;
var map__44920__$1 = ((((!((map__44920 == null)))?((((map__44920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44920):map__44920);
var location = map__44920__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44920__$1,cljs.core.cst$kw$protocol);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44920__$1,cljs.core.cst$kw$host);
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44920__$1,cljs.core.cst$kw$pathname);
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8808__auto__ = path;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return pathname;
}
})())].join('');
});
