// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__27850__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27851__i = 0, G__27851__a = new Array(arguments.length -  0);
while (G__27851__i < G__27851__a.length) {G__27851__a[G__27851__i] = arguments[G__27851__i + 0]; ++G__27851__i;}
  args = new cljs.core.IndexedSeq(G__27851__a,0,null);
} 
return G__27850__delegate.call(this,args);};
G__27850.cljs$lang$maxFixedArity = 0;
G__27850.cljs$lang$applyTo = (function (arglist__27852){
var args = cljs.core.seq(arglist__27852);
return G__27850__delegate(args);
});
G__27850.cljs$core$IFn$_invoke$arity$variadic = G__27850__delegate;
return G__27850;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27853__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27853 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27854__i = 0, G__27854__a = new Array(arguments.length -  0);
while (G__27854__i < G__27854__a.length) {G__27854__a[G__27854__i] = arguments[G__27854__i + 0]; ++G__27854__i;}
  args = new cljs.core.IndexedSeq(G__27854__a,0,null);
} 
return G__27853__delegate.call(this,args);};
G__27853.cljs$lang$maxFixedArity = 0;
G__27853.cljs$lang$applyTo = (function (arglist__27855){
var args = cljs.core.seq(arglist__27855);
return G__27853__delegate(args);
});
G__27853.cljs$core$IFn$_invoke$arity$variadic = G__27853__delegate;
return G__27853;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
