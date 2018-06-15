// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_39739 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__39740 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__39741 = null;
var count__39742 = (0);
var i__39743 = (0);
while(true){
if((i__39743 < count__39742)){
var vec__39744 = chunk__39741.cljs$core$IIndexed$_nth$arity$2(null,i__39743);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39744,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39744,(1),null);
var temp__5455__auto___39760 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___39760)){
var effect_fn_39761 = temp__5455__auto___39760;
(effect_fn_39761.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39761.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39761.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__39762 = seq__39740;
var G__39763 = chunk__39741;
var G__39764 = count__39742;
var G__39765 = (i__39743 + (1));
seq__39740 = G__39762;
chunk__39741 = G__39763;
count__39742 = G__39764;
i__39743 = G__39765;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39740);
if(temp__5457__auto__){
var seq__39740__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39740__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__39740__$1);
var G__39766 = cljs.core.chunk_rest(seq__39740__$1);
var G__39767 = c__9739__auto__;
var G__39768 = cljs.core.count(c__9739__auto__);
var G__39769 = (0);
seq__39740 = G__39766;
chunk__39741 = G__39767;
count__39742 = G__39768;
i__39743 = G__39769;
continue;
} else {
var vec__39747 = cljs.core.first(seq__39740__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39747,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39747,(1),null);
var temp__5455__auto___39770 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___39770)){
var effect_fn_39771 = temp__5455__auto___39770;
(effect_fn_39771.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39771.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39771.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__39772 = cljs.core.next(seq__39740__$1);
var G__39773 = null;
var G__39774 = (0);
var G__39775 = (0);
seq__39740 = G__39772;
chunk__39741 = G__39773;
count__39742 = G__39774;
i__39743 = G__39775;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37727__auto___39776 = re_frame.interop.now();
var duration__37728__auto___39777 = (end__37727__auto___39776 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__37728__auto___39777,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37727__auto___39776);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39739;
}} else {
var seq__39750 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__39751 = null;
var count__39752 = (0);
var i__39753 = (0);
while(true){
if((i__39753 < count__39752)){
var vec__39754 = chunk__39751.cljs$core$IIndexed$_nth$arity$2(null,i__39753);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39754,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39754,(1),null);
var temp__5455__auto___39778 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___39778)){
var effect_fn_39779 = temp__5455__auto___39778;
(effect_fn_39779.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39779.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39779.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__39780 = seq__39750;
var G__39781 = chunk__39751;
var G__39782 = count__39752;
var G__39783 = (i__39753 + (1));
seq__39750 = G__39780;
chunk__39751 = G__39781;
count__39752 = G__39782;
i__39753 = G__39783;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39750);
if(temp__5457__auto__){
var seq__39750__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39750__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__39750__$1);
var G__39784 = cljs.core.chunk_rest(seq__39750__$1);
var G__39785 = c__9739__auto__;
var G__39786 = cljs.core.count(c__9739__auto__);
var G__39787 = (0);
seq__39750 = G__39784;
chunk__39751 = G__39785;
count__39752 = G__39786;
i__39753 = G__39787;
continue;
} else {
var vec__39757 = cljs.core.first(seq__39750__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39757,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39757,(1),null);
var temp__5455__auto___39788 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___39788)){
var effect_fn_39789 = temp__5455__auto___39788;
(effect_fn_39789.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39789.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39789.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}

var G__39790 = cljs.core.next(seq__39750__$1);
var G__39791 = null;
var G__39792 = (0);
var G__39793 = (0);
seq__39750 = G__39790;
chunk__39751 = G__39791;
count__39752 = G__39792;
i__39753 = G__39793;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__39794 = cljs.core.seq(value);
var chunk__39795 = null;
var count__39796 = (0);
var i__39797 = (0);
while(true){
if((i__39797 < count__39796)){
var map__39798 = chunk__39795.cljs$core$IIndexed$_nth$arity$2(null,i__39797);
var map__39798__$1 = ((((!((map__39798 == null)))?((((map__39798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39798):map__39798);
var effect = map__39798__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__39794,chunk__39795,count__39796,i__39797,map__39798,map__39798__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__39794,chunk__39795,count__39796,i__39797,map__39798,map__39798__$1,effect,ms,dispatch))
,ms);
}

var G__39802 = seq__39794;
var G__39803 = chunk__39795;
var G__39804 = count__39796;
var G__39805 = (i__39797 + (1));
seq__39794 = G__39802;
chunk__39795 = G__39803;
count__39796 = G__39804;
i__39797 = G__39805;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39794);
if(temp__5457__auto__){
var seq__39794__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39794__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__39794__$1);
var G__39806 = cljs.core.chunk_rest(seq__39794__$1);
var G__39807 = c__9739__auto__;
var G__39808 = cljs.core.count(c__9739__auto__);
var G__39809 = (0);
seq__39794 = G__39806;
chunk__39795 = G__39807;
count__39796 = G__39808;
i__39797 = G__39809;
continue;
} else {
var map__39800 = cljs.core.first(seq__39794__$1);
var map__39800__$1 = ((((!((map__39800 == null)))?((((map__39800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39800):map__39800);
var effect = map__39800__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39800__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39800__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__39794,chunk__39795,count__39796,i__39797,map__39800,map__39800__$1,effect,ms,dispatch,seq__39794__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__39794,chunk__39795,count__39796,i__39797,map__39800,map__39800__$1,effect,ms,dispatch,seq__39794__$1,temp__5457__auto__))
,ms);
}

var G__39810 = cljs.core.next(seq__39794__$1);
var G__39811 = null;
var G__39812 = (0);
var G__39813 = (0);
seq__39794 = G__39810;
chunk__39795 = G__39811;
count__39796 = G__39812;
i__39797 = G__39813;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__39814 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39815 = null;
var count__39816 = (0);
var i__39817 = (0);
while(true){
if((i__39817 < count__39816)){
var event = chunk__39815.cljs$core$IIndexed$_nth$arity$2(null,i__39817);
re_frame.router.dispatch(event);

var G__39818 = seq__39814;
var G__39819 = chunk__39815;
var G__39820 = count__39816;
var G__39821 = (i__39817 + (1));
seq__39814 = G__39818;
chunk__39815 = G__39819;
count__39816 = G__39820;
i__39817 = G__39821;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39814);
if(temp__5457__auto__){
var seq__39814__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39814__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__39814__$1);
var G__39822 = cljs.core.chunk_rest(seq__39814__$1);
var G__39823 = c__9739__auto__;
var G__39824 = cljs.core.count(c__9739__auto__);
var G__39825 = (0);
seq__39814 = G__39822;
chunk__39815 = G__39823;
count__39816 = G__39824;
i__39817 = G__39825;
continue;
} else {
var event = cljs.core.first(seq__39814__$1);
re_frame.router.dispatch(event);

var G__39826 = cljs.core.next(seq__39814__$1);
var G__39827 = null;
var G__39828 = (0);
var G__39829 = (0);
seq__39814 = G__39826;
chunk__39815 = G__39827;
count__39816 = G__39828;
i__39817 = G__39829;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39830 = cljs.core.seq(value);
var chunk__39831 = null;
var count__39832 = (0);
var i__39833 = (0);
while(true){
if((i__39833 < count__39832)){
var event = chunk__39831.cljs$core$IIndexed$_nth$arity$2(null,i__39833);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__39834 = seq__39830;
var G__39835 = chunk__39831;
var G__39836 = count__39832;
var G__39837 = (i__39833 + (1));
seq__39830 = G__39834;
chunk__39831 = G__39835;
count__39832 = G__39836;
i__39833 = G__39837;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39830);
if(temp__5457__auto__){
var seq__39830__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39830__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__39830__$1);
var G__39838 = cljs.core.chunk_rest(seq__39830__$1);
var G__39839 = c__9739__auto__;
var G__39840 = cljs.core.count(c__9739__auto__);
var G__39841 = (0);
seq__39830 = G__39838;
chunk__39831 = G__39839;
count__39832 = G__39840;
i__39833 = G__39841;
continue;
} else {
var event = cljs.core.first(seq__39830__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__39842 = cljs.core.next(seq__39830__$1);
var G__39843 = null;
var G__39844 = (0);
var G__39845 = (0);
seq__39830 = G__39842;
chunk__39831 = G__39843;
count__39832 = G__39844;
i__39833 = G__39845;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
