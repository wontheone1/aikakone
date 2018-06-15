// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37749){
var map__37750 = p__37749;
var map__37750__$1 = ((((!((map__37750 == null)))?((((map__37750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37750):map__37750);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__8808__auto__ = child_of;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__37752_37766 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37753_37767 = null;
var count__37754_37768 = (0);
var i__37755_37769 = (0);
while(true){
if((i__37755_37769 < count__37754_37768)){
var vec__37756_37770 = chunk__37753_37767.cljs$core$IIndexed$_nth$arity$2(null,i__37755_37769);
var k_37771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756_37770,(0),null);
var cb_37772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756_37770,(1),null);
try{var G__37760_37773 = cljs.core.deref(re_frame.trace.traces);
(cb_37772.cljs$core$IFn$_invoke$arity$1 ? cb_37772.cljs$core$IFn$_invoke$arity$1(G__37760_37773) : cb_37772.call(null,G__37760_37773));
}catch (e37759){var e_37774 = e37759;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37771,"while storing",cljs.core.deref(re_frame.trace.traces),e_37774], 0));
}
var G__37775 = seq__37752_37766;
var G__37776 = chunk__37753_37767;
var G__37777 = count__37754_37768;
var G__37778 = (i__37755_37769 + (1));
seq__37752_37766 = G__37775;
chunk__37753_37767 = G__37776;
count__37754_37768 = G__37777;
i__37755_37769 = G__37778;
continue;
} else {
var temp__5457__auto___37779 = cljs.core.seq(seq__37752_37766);
if(temp__5457__auto___37779){
var seq__37752_37780__$1 = temp__5457__auto___37779;
if(cljs.core.chunked_seq_QMARK_(seq__37752_37780__$1)){
var c__9739__auto___37781 = cljs.core.chunk_first(seq__37752_37780__$1);
var G__37782 = cljs.core.chunk_rest(seq__37752_37780__$1);
var G__37783 = c__9739__auto___37781;
var G__37784 = cljs.core.count(c__9739__auto___37781);
var G__37785 = (0);
seq__37752_37766 = G__37782;
chunk__37753_37767 = G__37783;
count__37754_37768 = G__37784;
i__37755_37769 = G__37785;
continue;
} else {
var vec__37761_37786 = cljs.core.first(seq__37752_37780__$1);
var k_37787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761_37786,(0),null);
var cb_37788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761_37786,(1),null);
try{var G__37765_37789 = cljs.core.deref(re_frame.trace.traces);
(cb_37788.cljs$core$IFn$_invoke$arity$1 ? cb_37788.cljs$core$IFn$_invoke$arity$1(G__37765_37789) : cb_37788.call(null,G__37765_37789));
}catch (e37764){var e_37790 = e37764;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37787,"while storing",cljs.core.deref(re_frame.trace.traces),e_37790], 0));
}
var G__37791 = cljs.core.next(seq__37752_37780__$1);
var G__37792 = null;
var G__37793 = (0);
var G__37794 = (0);
seq__37752_37766 = G__37791;
chunk__37753_37767 = G__37792;
count__37754_37768 = G__37793;
i__37755_37769 = G__37794;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
