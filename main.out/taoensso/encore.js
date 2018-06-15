// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.test');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(91),(1)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__26862 = arguments.length;
switch (G__26862) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__26863 = (((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26863,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26863,(1),null);
var vec__26866 = (((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__26871 = arguments.length;
switch (G__26871) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = (cljs.core.truth_((function (){var G__26872 = readers;
var G__26873 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26872,G__26873) : taoensso.encore.kw_identical_QMARK_.call(null,G__26872,G__26873));
})())?(function (){var G__26874 = cljs.core.symbol;
var G__26875 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__26874,G__26875) : taoensso.encore.map_keys.call(null,G__26874,G__26875));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__26876 = default$;
var G__26877 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__26876,G__26877) : taoensso.encore.kw_identical_QMARK_.call(null,G__26876,G__26877));
})())?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__26880 = arguments.length;
switch (G__26880) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_26881 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_26882 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_26882;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_26881;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__25226__auto__ = (function (){var or__8808__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__25226__auto__)){
var data_map = b2__25226__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__8796__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__8796__auto____$1)){
return true;
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__8796__auto__ = (x instanceof cljs.core.Symbol);
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__8796__auto____$1)){
return true;
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__8796__auto__ = (x instanceof cljs.core.Keyword);
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__8796__auto____$1)){
return true;
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_(x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__8796__auto__ = typeof x === 'number';
if(and__8796__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__8796__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__25226__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__25226__auto__)){
var ns = b2__25226__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__25226__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__25226__auto__)){
var n = b2__25226__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__25226__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__25226__auto__)){
var n = b2__25226__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__25226__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__25226__auto__)){
var n = b2__25226__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__25226__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__25226__auto__)){
var n = b2__25226__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__25226__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__25226__auto__)){
var n = b2__25226__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__25226__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__25226__auto__)){
var f = b2__25226__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__25226__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(b2__25226__auto__)){
var email = b2__25226__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e26888){if((e26888 instanceof Error)){
var _ = e26888;
return false;
} else {
throw e26888;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__26890 = arguments.length;
switch (G__26890) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)].join(''))," failure against arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$fail_DASH__QMARK_data,fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`as-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(as_name)),"` failed against: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nzero,x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank,x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nempty_DASH_str,x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$kw,x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$name,x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$qname,x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$udt,x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$int,x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_int,x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_int,x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$float,x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_float,x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_float,x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__8808__auto__ = taoensso.encore.as__QMARK_pval(x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pval,x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(cljs.core.cst$kw$bool,x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__26893 = arguments.length;
switch (G__26893) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__26897){
var vec__26898 = p__26897;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26898,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
var inc_26904 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = ((function (inc_26904){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,inc_26904){
return (function (acc,in$){
var G__26901 = acc;
var G__26902 = cljs.core._vreset_BANG_(i,inc_26904(cljs.core._deref(i)));
var G__26903 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__26901,G__26902,G__26903) : rf.call(null,G__26901,G__26902,G__26903));
});})(i,inc_26904))
,init,coll);
});})(inc_26904))
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__26905 = acc;
var G__26906 = k;
var G__26907 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26905,G__26906,G__26907) : f.call(null,G__26905,G__26906,G__26907));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26909_SHARP_,p2__26908_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__26908_SHARP_) : proc.call(null,p2__26908_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__26912_SHARP_,p2__26910_SHARP_,p3__26911_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__26910_SHARP_,p3__26911_SHARP_) : proc.call(null,p2__26910_SHARP_,p3__26911_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__26915_SHARP_,p2__26913_SHARP_,p3__26914_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__26913_SHARP_,p3__26914_SHARP_) : proc.call(null,p2__26913_SHARP_,p3__26914_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__26918_SHARP_,p2__26916_SHARP_,p3__26917_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__26916_SHARP_,p3__26917_SHARP_) : proc.call(null,p2__26916_SHARP_,p3__26917_SHARP_));
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var b2__25226__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__25226__auto__)){
var p = b2__25226__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var b2__25226__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__25226__auto__)){
var p = b2__25226__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
var inc_26920 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = ((function (inc_26920){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_((-1));
return ((function (idx_,inc_26920){
return (function (){
return cljs.core._vreset_BANG_(idx_,inc_26920(cljs.core._deref(idx_)));
});
;})(idx_,inc_26920))
});})(inc_26920))
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__26922 = arguments.length;
switch (G__26922) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((function (){var G__26923 = (x - y);
return Math.abs(G__26923);
})() < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return ((function (){var G__26924 = (x - y);
return Math.abs(G__26924);
})() < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__26927 = arguments.length;
switch (G__26927) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__26928 = type;
var G__26928__$1 = (((G__26928 instanceof cljs.core.Keyword))?G__26928.fqn:null);
switch (G__26928__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
var G__26931 = n;
return Math.round(G__26931);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__26932 = (n * 10.0);
return Math.round(G__26932);
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__26933 = (n * 100.0);
return Math.round(G__26933);
})() / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__26935 = arguments.length;
switch (G__26935) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__26936){
var map__26937 = p__26936;
var map__26937__$1 = ((((!((map__26937 == null)))?((((map__26937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26937):map__26937);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26937__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26937__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26937__$1,cljs.core.cst$kw$factor,(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__26940 = cljs.core.meta(x);
var G__26941 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__26940,G__26941) : taoensso.encore.merge.call(null,G__26940,G__26941));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__26947 = arguments.length;
switch (G__26947) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___26949 = arguments.length;
var i__10088__auto___26950 = (0);
while(true){
if((i__10088__auto___26950 < len__10087__auto___26949)){
args_arr__10110__auto__.push((arguments[i__10088__auto___26950]));

var G__26951 = (i__10088__auto___26950 + (1));
i__10088__auto___26950 = G__26951;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__8796__auto__ = taoensso.encore.some_QMARK_(x);
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__8796__auto____$1){
return taoensso.encore.revery_QMARK_(((function (and__8796__auto____$1,and__8796__auto__){
return (function (p1__26942_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26942_SHARP_,x);
});})(and__8796__auto____$1,and__8796__auto__))
,more);
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq26944){
var G__26945 = cljs.core.first(seq26944);
var seq26944__$1 = cljs.core.next(seq26944);
var G__26946 = cljs.core.first(seq26944__$1);
var seq26944__$2 = cljs.core.next(seq26944__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__26945,G__26946,seq26944__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__26957 = arguments.length;
switch (G__26957) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___26959 = arguments.length;
var i__10088__auto___26960 = (0);
while(true){
if((i__10088__auto___26960 < len__10087__auto___26959)){
args_arr__10110__auto__.push((arguments[i__10088__auto___26960]));

var G__26961 = (i__10088__auto___26960 + (1));
i__10088__auto___26960 = G__26961;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq26953){
var G__26954 = cljs.core.first(seq26953);
var seq26953__$1 = cljs.core.next(seq26953);
var G__26955 = cljs.core.first(seq26953__$1);
var seq26953__$2 = cljs.core.next(seq26953__$1);
var G__26956 = cljs.core.first(seq26953__$2);
var seq26953__$3 = cljs.core.next(seq26953__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__26954,G__26955,G__26956,seq26953__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__26962 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26962,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26962,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__25226__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__25226__auto__)){
var s = b2__25226__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var b2__25226__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__25226__auto__)){
var s = b2__25226__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__26966 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26966,(2),null);
var vec__26969 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(2),null);
var vec__26972 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__26966,xc,yc,zc,vec__26969,xm,ym,zm){
return (function (p1__26965_SHARP_){
var or__8808__auto__ = p1__26965_SHARP_;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
});})(vec__26966,xc,yc,zc,vec__26969,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26972,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26972,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26972,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__26976 = arguments.length;
switch (G__26976) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___26979 = arguments.length;
var i__10088__auto___26980 = (0);
while(true){
if((i__10088__auto___26980 < len__10087__auto___26979)){
args__10094__auto__.push((arguments[i__10088__auto___26980]));

var G__26981 = (i__10088__auto___26980 + (1));
i__10088__auto___26980 = G__26981;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq26978){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26978));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__26983 = arguments.length;
switch (G__26983) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_26992 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_26992){
return (function taoensso$encore$oget_in(var_args){
var G__26988 = arguments.length;
switch (G__26988) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_26992))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_26992){
return (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
});})(sentinel_26992))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_26992){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = (function (){var G__26989 = o__$1;
var G__26990 = cljs.core.first(ks__$1);
var G__26991 = sentinel_26992;
return goog.object.get(G__26989,G__26990,G__26991);
})();
if((o__$2 === sentinel_26992)){
return not_found;
} else {
var G__26994 = o__$2;
var G__26995 = cljs.core.next(ks__$1);
o__$1 = G__26994;
ks__$1 = G__26995;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_26992))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__27000 = arguments.length;
switch (G__27000) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___27007 = arguments.length;
var i__10088__auto___27008 = (0);
while(true){
if((i__10088__auto___27008 < len__10087__auto___27007)){
args_arr__10110__auto__.push((arguments[i__10088__auto___27008]));

var G__27009 = (i__10088__auto___27008 + (1));
i__10088__auto___27008 = G__27009;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq26997){
var G__26998 = cljs.core.first(seq26997);
var seq26997__$1 = cljs.core.next(seq26997);
var G__26999 = cljs.core.first(seq26997__$1);
var seq26997__$2 = cljs.core.next(seq26997__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__26998,G__26999,seq26997__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__27005 = arguments.length;
switch (G__27005) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___27011 = arguments.length;
var i__10088__auto___27012 = (0);
while(true){
if((i__10088__auto___27012 < len__10087__auto___27011)){
args_arr__10110__auto__.push((arguments[i__10088__auto___27012]));

var G__27013 = (i__10088__auto___27012 + (1));
i__10088__auto___27012 = G__27013;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq27002){
var G__27003 = cljs.core.first(seq27002);
var seq27002__$1 = cljs.core.next(seq27002);
var G__27004 = cljs.core.first(seq27002__$1);
var seq27002__$2 = cljs.core.next(seq27002__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__27003,G__27004,seq27002__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__27019 = arguments.length;
switch (G__27019) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___27033 = arguments.length;
var i__10088__auto___27034 = (0);
while(true){
if((i__10088__auto___27034 < len__10087__auto___27033)){
args_arr__10110__auto__.push((arguments[i__10088__auto___27034]));

var G__27035 = (i__10088__auto___27034 + (1));
i__10088__auto___27034 = G__27035;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq27015){
var G__27016 = cljs.core.first(seq27015);
var seq27015__$1 = cljs.core.next(seq27015);
var G__27017 = cljs.core.first(seq27015__$1);
var seq27015__$2 = cljs.core.next(seq27015__$1);
var G__27018 = cljs.core.first(seq27015__$2);
var seq27015__$3 = cljs.core.next(seq27015__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__27016,G__27017,G__27018,seq27015__$3);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__27025 = arguments.length;
switch (G__27025) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___27037 = arguments.length;
var i__10088__auto___27038 = (0);
while(true){
if((i__10088__auto___27038 < len__10087__auto___27037)){
args_arr__10110__auto__.push((arguments[i__10088__auto___27038]));

var G__27039 = (i__10088__auto___27038 + (1));
i__10088__auto___27038 = G__27039;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq27021){
var G__27022 = cljs.core.first(seq27021);
var seq27021__$1 = cljs.core.next(seq27021);
var G__27023 = cljs.core.first(seq27021__$1);
var seq27021__$2 = cljs.core.next(seq27021__$1);
var G__27024 = cljs.core.first(seq27021__$2);
var seq27021__$3 = cljs.core.next(seq27021__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__27022,G__27023,G__27024,seq27021__$3);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__27031 = arguments.length;
switch (G__27031) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___27041 = arguments.length;
var i__10088__auto___27042 = (0);
while(true){
if((i__10088__auto___27042 < len__10087__auto___27041)){
args_arr__10110__auto__.push((arguments[i__10088__auto___27042]));

var G__27043 = (i__10088__auto___27042 + (1));
i__10088__auto___27042 = G__27043;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq27027){
var G__27028 = cljs.core.first(seq27027);
var seq27027__$1 = cljs.core.next(seq27027);
var G__27029 = cljs.core.first(seq27027__$1);
var seq27027__$2 = cljs.core.next(seq27027__$1);
var G__27030 = cljs.core.first(seq27027__$2);
var seq27027__$3 = cljs.core.next(seq27027__$2);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(G__27028,G__27029,G__27030,seq27027__$3);
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__27045 = arguments.length;
switch (G__27045) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__27048 = arguments.length;
switch (G__27048) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__27050 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27050,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__27053 = xs__$1;
var seq__27054 = cljs.core.seq(vec__27053);
var first__27055 = cljs.core.first(seq__27054);
var seq__27054__$1 = cljs.core.next(seq__27054);
var x1 = first__27055;
var xn = seq__27054__$1;
if(xn){
var G__27056 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__27057 = xn;
butlast = G__27056;
xs__$1 = G__27057;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27060 = arguments.length;
var i__10088__auto___27061 = (0);
while(true){
if((i__10088__auto___27061 < len__10087__auto___27060)){
args__10094__auto__.push((arguments[i__10088__auto___27061]));

var G__27062 = (i__10088__auto___27061 + (1));
i__10088__auto___27061 = G__27062;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,(taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(lx) : taoensso.encore.seq_kvs.call(null,lx)));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq27058){
var G__27059 = cljs.core.first(seq27058);
var seq27058__$1 = cljs.core.next(seq27058);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__27059,seq27058__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__27067 = arguments.length;
switch (G__27067) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___27069 = arguments.length;
var i__10088__auto___27070 = (0);
while(true){
if((i__10088__auto___27070 < len__10087__auto___27069)){
args_arr__10110__auto__.push((arguments[i__10088__auto___27070]));

var G__27071 = (i__10088__auto___27070 + (1));
i__10088__auto___27070 = G__27071;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq27064){
var G__27065 = cljs.core.first(seq27064);
var seq27064__$1 = cljs.core.next(seq27064);
var G__27066 = cljs.core.first(seq27064__$1);
var seq27064__$2 = cljs.core.next(seq27064__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__27065,G__27066,seq27064__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__27073 = arguments.length;
switch (G__27073) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__27076 = arguments.length;
switch (G__27076) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__27078 = null;
var G__27078__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__27078__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__27078__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen_),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__27078 = function(acc,input){
switch(arguments.length){
case 0:
return G__27078__0.call(this);
case 1:
return G__27078__1.call(this,acc);
case 2:
return G__27078__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27078.cljs$core$IFn$_invoke$arity$0 = G__27078__0;
G__27078.cljs$core$IFn$_invoke$arity$1 = G__27078__1;
G__27078.cljs$core$IFn$_invoke$arity$2 = G__27078__2;
return G__27078;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__27079_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__27079_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__27081 = arguments.length;
switch (G__27081) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__25226__auto__ = cljs.core.seq(ks);
if(b2__25226__auto__){
var ks_seq = b2__25226__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__25226__auto____$1 = cljs.core.next(ks_seq);
if(b2__25226__auto____$1){
var ks__$1 = b2__25226__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__27082 = f;
var G__27083 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27082,G__27083) : taoensso.encore.kw_identical_QMARK_.call(null,G__27082,G__27083));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__27084 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27084) : f.call(null,G__27084));
})();
if(cljs.core.truth_((function (){var G__27085 = v;
var G__27086 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27085,G__27086) : taoensso.encore.kw_identical_QMARK_.call(null,G__27085,G__27086));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__27089 = arguments.length;
switch (G__27089) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__27096 = arguments.length;
switch (G__27096) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___27098 = arguments.length;
var i__10088__auto___27099 = (0);
while(true){
if((i__10088__auto___27099 < len__10087__auto___27098)){
args_arr__10110__auto__.push((arguments[i__10088__auto___27099]));

var G__27100 = (i__10088__auto___27099 + (1));
i__10088__auto___27099 = G__27100;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq27092){
var G__27093 = cljs.core.first(seq27092);
var seq27092__$1 = cljs.core.next(seq27092);
var G__27094 = cljs.core.first(seq27092__$1);
var seq27092__$2 = cljs.core.next(seq27092__$1);
var G__27095 = cljs.core.first(seq27092__$2);
var seq27092__$3 = cljs.core.next(seq27092__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__27093,G__27094,G__27095,seq27092__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__27105 = arguments.length;
switch (G__27105) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___27107 = arguments.length;
var i__10088__auto___27108 = (0);
while(true){
if((i__10088__auto___27108 < len__10087__auto___27107)){
args_arr__10110__auto__.push((arguments[i__10088__auto___27108]));

var G__27109 = (i__10088__auto___27108 + (1));
i__10088__auto___27108 = G__27109;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq27102){
var G__27103 = cljs.core.first(seq27102);
var seq27102__$1 = cljs.core.next(seq27102);
var G__27104 = cljs.core.first(seq27102__$1);
var seq27102__$2 = cljs.core.next(seq27102__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__27103,G__27104,seq27102__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if((s1) && (s2)){
var G__27110 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__27111 = cljs.core.next(s1);
var G__27112 = cljs.core.next(s2);
v = G__27110;
s1 = G__27111;
s2 = G__27112;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
var not_found_27119 = {};
taoensso.encore._merge_with = ((function (not_found_27119){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (not_found_27119){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv(((function (not_found_27119){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_27119);
if((lv === not_found_27119)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__27115 = rv;
var G__27116 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27115,G__27116) : taoensso.encore.kw_identical_QMARK_.call(null,G__27115,G__27116));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__8796__auto__)){
return (cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv));
} else {
return and__8796__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(cljs.core.truth_((function (){var G__27117 = new_rv;
var G__27118 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27117,G__27118) : taoensso.encore.kw_identical_QMARK_.call(null,G__27117,G__27118));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
});})(not_found_27119))
,(function (){var or__8808__auto__ = acc;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_27119))
,null,maps);
});})(not_found_27119))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27126 = arguments.length;
var i__10088__auto___27127 = (0);
while(true){
if((i__10088__auto___27127 < len__10087__auto___27126)){
args__10094__auto__.push((arguments[i__10088__auto___27127]));

var G__27128 = (i__10088__auto___27127 + (1));
i__10088__auto___27127 = G__27128;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.merge.cljs$lang$applyTo = (function (seq27120){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27120));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27129 = arguments.length;
var i__10088__auto___27130 = (0);
while(true){
if((i__10088__auto___27130 < len__10087__auto___27129)){
args__10094__auto__.push((arguments[i__10088__auto___27130]));

var G__27131 = (i__10088__auto___27130 + (1));
i__10088__auto___27130 = G__27131;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq27121){
var G__27122 = cljs.core.first(seq27121);
var seq27121__$1 = cljs.core.next(seq27121);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__27122,seq27121__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27132 = arguments.length;
var i__10088__auto___27133 = (0);
while(true){
if((i__10088__auto___27133 < len__10087__auto___27132)){
args__10094__auto__.push((arguments[i__10088__auto___27133]));

var G__27134 = (i__10088__auto___27133 + (1));
i__10088__auto___27133 = G__27134;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq27123){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27123));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27135 = arguments.length;
var i__10088__auto___27136 = (0);
while(true){
if((i__10088__auto___27136 < len__10087__auto___27135)){
args__10094__auto__.push((arguments[i__10088__auto___27136]));

var G__27137 = (i__10088__auto___27136 + (1));
i__10088__auto___27136 = G__27137;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq27124){
var G__27125 = cljs.core.first(seq27124);
var seq27124__$1 = cljs.core.next(seq27124);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__27125,seq27124__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newv,cljs.core.cst$sym$returnv], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = cljs.core.cst$sym$clojure$lang$IAtom;
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__27138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27138) : f.call(null,G__27138));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref(atom_);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_((function (){var G__27139 = f;
var G__27140 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27139,G__27140) : taoensso.encore.kw_identical_QMARK_.call(null,G__27139,G__27140));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__27141 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__27142 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__27141,G__27142) : return$.call(null,G__27141,G__27142));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__27143 = v1;
var G__27144 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27143,G__27144) : taoensso.encore.kw_identical_QMARK_.call(null,G__27143,G__27144));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__27145 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__27146 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__27145,G__27146) : return$.call(null,G__27145,G__27146));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__25226__auto__ = cljs.core.seq(ks);
if(b2__25226__auto__){
var ks_seq = b2__25226__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__27147 = f;
var G__27148 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27147,G__27148) : taoensso.encore.kw_identical_QMARK_.call(null,G__27147,G__27148));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__25226__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__25226__auto__))
,ks);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__27149 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__27150 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__27149,G__27150) : return$.call(null,G__27149,G__27150));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__27151 = v1;
var G__27152 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27151,G__27152) : taoensso.encore.kw_identical_QMARK_.call(null,G__27151,G__27152));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__25226__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__25226__auto__))
,ks):cljs.core.assoc_in(m0,ks,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__25226__auto__ = cljs.core.seq(ks);
if(b2__25226__auto__){
var ks_seq = b2__25226__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__27153 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__27154 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__27153,G__27154) : return$.call(null,G__27153,G__27154));
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_27157 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_27157){
return (function taoensso$encore$swap_val_BANG_(var_args){
var G__27156 = arguments.length;
switch (G__27156) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_27157))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_27157){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_27157,atom_,k,null,f);
});})(return_27157))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_27157){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_27157,atom_,k,not_found,f);
});})(return_27157))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_27161 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_27161){
return (function taoensso$encore$reset_val_BANG_(var_args){
var G__27160 = arguments.length;
switch (G__27160) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_27161))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_27161){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_27161,atom_,k,null,val);
});})(return_27161))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_27161){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_27161,atom_,k,not_found,val);
});})(return_27161))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_27165 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_27165){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__27164 = arguments.length;
switch (G__27164) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_27165))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_27165){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_27165,atom_,k,null,f);
});})(return_27165))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_27165){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_27165,atom_,k,not_found,f);
});})(return_27165))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__27168 = arguments.length;
switch (G__27168) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__27169 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,cljs.core.cst$kw$swap_SLASH_dissoc);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27169,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_27175 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_27175){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_27175,new_val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_27175))
;
var return_27178 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_27178){
return (function taoensso$encore$swap_in_BANG_(var_args){
var G__27177 = arguments.length;
switch (G__27177) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_27178))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_27178){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_27178,atom_,f);
});})(return_27178))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_27178){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_27178,atom_,ks,null,f);
});})(return_27178))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_27178){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_27178,atom_,ks,not_found,f);
});})(return_27178))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_27182 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_27182){
return (function taoensso$encore$reset_in_BANG_(var_args){
var G__27181 = arguments.length;
switch (G__27181) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_27182))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_27182){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_27182,atom_,val);
});})(return_27182))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_27182){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_27182,atom_,ks,null,val);
});})(return_27182))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_27182){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_27182,atom_,ks,not_found,val);
});})(return_27182))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_27186 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_27186){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__27185 = arguments.length;
switch (G__27185) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_27186))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_27186){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_27186,atom_,f);
});})(return_27186))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_27186){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_27186,atom_,ks,null,f);
});})(return_27186))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_27186){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_27186,atom_,ks,not_found,f);
});})(return_27186))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__25226__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__25226__auto__)){
var perf = b2__25226__auto__;
var b2__25226__auto____$1 = (function (){var or__8808__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
var or__8808__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__8808__auto____$2)){
return or__8808__auto____$2;
} else {
var or__8808__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__8808__auto____$3)){
return or__8808__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__25226__auto____$1)){
var f = b2__25226__auto____$1;
return ((function (f,b2__25226__auto____$1,perf,b2__25226__auto__){
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
;})(f,b2__25226__auto____$1,perf,b2__25226__auto__))
} else {
return ((function (b2__25226__auto____$1,perf,b2__25226__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__25226__auto____$1,perf,b2__25226__auto__))
}
} else {
return ((function (b2__25226__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__25226__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__27196__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__27190 = x1;
var G__27191 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27190,G__27191) : taoensso.encore.kw_identical_QMARK_.call(null,G__27190,G__27191));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__27192 = x2;
var G__27193 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27192,G__27193) : taoensso.encore.kw_identical_QMARK_.call(null,G__27192,G__27193));
})())){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_(cache_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cache_),xn));
}

return null;
} else {
if(cljs.core.truth_((function (){var G__27194 = x1;
var G__27195 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27194,G__27195) : taoensso.encore.kw_identical_QMARK_.call(null,G__27194,G__27195));
})())){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__27196 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__27197__i = 0, G__27197__a = new Array(arguments.length -  0);
while (G__27197__i < G__27197__a.length) {G__27197__a[G__27197__i] = arguments[G__27197__i + 0]; ++G__27197__i;}
  xs = new cljs.core.IndexedSeq(G__27197__a,0,null);
} 
return G__27196__delegate.call(this,xs);};
G__27196.cljs$lang$maxFixedArity = 0;
G__27196.cljs$lang$applyTo = (function (arglist__27198){
var xs = cljs.core.seq(arglist__27198);
return G__27196__delegate(xs);
});
G__27196.cljs$core$IFn$_invoke$arity$variadic = G__27196__delegate;
return G__27196;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__27199__delegate = function (args){
return cljs.core.deref((function (){var or__8808__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_),args);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__8808__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__8808__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__8808__auto__,cache_))
,null))]);
}
});})(or__8808__auto__,cache_))
),args);
}
})());
};
var G__27199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27200__i = 0, G__27200__a = new Array(arguments.length -  0);
while (G__27200__i < G__27200__a.length) {G__27200__a[G__27200__i] = arguments[G__27200__i + 0]; ++G__27200__i;}
  args = new cljs.core.IndexedSeq(G__27200__a,0,null);
} 
return G__27199__delegate.call(this,args);};
G__27199.cljs$lang$maxFixedArity = 0;
G__27199.cljs$lang$applyTo = (function (arglist__27201){
var args = cljs.core.seq(arglist__27201);
return G__27199__delegate(args);
});
G__27199.cljs$core$IFn$_invoke$arity$variadic = G__27199__delegate;
return G__27199;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lru,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lfu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var G__27203 = arguments.length;
switch (G__27203) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_27227 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27204){if((e27204 instanceof Error)){
var e = e27204;
return e;
} else {
throw e27204;

}
}})();
if((e_27227 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1739,"(pos-int? ttl-ms)",ttl_ms,e_27227,null);
}

var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__27228__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__27205 = a1;
var G__27206 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27205,G__27206) : taoensso.encore.kw_identical_QMARK_.call(null,G__27205,G__27206));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__27207 = a2;
var G__27208 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27207,G__27208) : taoensso.encore.kw_identical_QMARK_.call(null,G__27207,G__27208));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_27229 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_27229);

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_27229,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_27229,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_27229,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$((function (){var or__8808__auto__ = m;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_27229,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__27209 = a1;
var G__27210 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27209,G__27210) : taoensso.encore.kw_identical_QMARK_.call(null,G__27209,G__27210));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__8808__auto__ = (_QMARK_e == null);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref(e.delay);
}
};
var G__27228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27230__i = 0, G__27230__a = new Array(arguments.length -  0);
while (G__27230__i < G__27230__a.length) {G__27230__a[G__27230__i] = arguments[G__27230__i + 0]; ++G__27230__i;}
  args = new cljs.core.IndexedSeq(G__27230__a,0,null);
} 
return G__27228__delegate.call(this,args);};
G__27228.cljs$lang$maxFixedArity = 0;
G__27228.cljs$lang$applyTo = (function (arglist__27231){
var args = cljs.core.seq(arglist__27231);
return G__27228__delegate(args);
});
G__27228.cljs$core$IFn$_invoke$arity$variadic = G__27228__delegate;
return G__27228;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (){var fexpr__27213 = (function (x){
var or__8808__auto__ = (x == null);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var fexpr__27215 = taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_);
return (fexpr__27215.cljs$core$IFn$_invoke$arity$1 ? fexpr__27215.cljs$core$IFn$_invoke$arity$1(x) : fexpr__27215.call(null,x));
}
});
return fexpr__27213(ttl_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1790,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_27232 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27216){if((e27216 instanceof Error)){
var e = e27216;
return e;
} else {
throw e27216;

}
}})();
if((e_27232 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1791,"(pos-int? cache-size)",cache_size,e_27232,null);
}

var tick_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__8808__auto__ = ttl_ms;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$(cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__27233__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__27217 = a1;
var G__27218 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27217,G__27218) : taoensso.encore.kw_identical_QMARK_.call(null,G__27217,G__27218));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__27219 = a2;
var G__27220 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27219,G__27220) : taoensso.encore.kw_identical_QMARK_.call(null,G__27219,G__27220));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_27234 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_27234);

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__8808__auto__ = m;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_27235 = cljs.core.deref(cache_);
var n_to_gc_27236 = (cljs.core.count(snapshot_27235) - cache_size__$1);
if((n_to_gc_27236 > (64))){
var ks_to_gc_27237 = (function (){var G__27221 = n_to_gc_27236;
var G__27222 = ((function (G__27221,snapshot_27235,n_to_gc_27236,latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_27235,k);
return (e.tick_lru + e.tick_lfu);
});})(G__27221,snapshot_27235,n_to_gc_27236,latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
;
var G__27223 = cljs.core.keys(snapshot_27235);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__27221,G__27222,G__27223) : taoensso.encore.top.call(null,G__27221,G__27222,G__27223));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (ks_to_gc_27237,snapshot_27235,n_to_gc_27236,latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_27237,snapshot_27235,n_to_gc_27236,latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_27237,snapshot_27235,n_to_gc_27236,latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__8808__auto__ = m;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_27237));
});})(ks_to_gc_27237,snapshot_27235,n_to_gc_27236,latch_27234,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__27224 = a1;
var G__27225 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27224,G__27225) : taoensso.encore.kw_identical_QMARK_.call(null,G__27224,G__27225));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__8808__auto__ = (_QMARK_e == null);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref(e.delay);
}
};
var G__27233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27238__i = 0, G__27238__a = new Array(arguments.length -  0);
while (G__27238__i < G__27238__a.length) {G__27238__a[G__27238__i] = arguments[G__27238__i + 0]; ++G__27238__i;}
  args = new cljs.core.IndexedSeq(G__27238__a,0,null);
} 
return G__27233__delegate.call(this,args);};
G__27233.cljs$lang$maxFixedArity = 0;
G__27233.cljs$lang$applyTo = (function (arglist__27239){
var args = cljs.core.seq(arglist__27239);
return G__27233__delegate(args);
});
G__27233.cljs$core$IFn$_invoke$arity$variadic = G__27233__delegate;
return G__27233;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$udt0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$worst_DASH_sid,cljs.core.with_meta(cljs.core.cst$sym$worst_DASH_ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_27252 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27240){if((e27240 instanceof Error)){
var e = e27240;
return e;
} else {
throw e27240;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1891,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27241){if((e27241 instanceof Error)){
var e = e27241;
return e;
} else {
throw e27241;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1891,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_27252){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(((function (limit_spec_27252){
return (function (acc,sid,p__27242){
var vec__27243 = p__27242;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27243,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27243,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_27252(n,ms));
});})(limit_spec_27252))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,limit_spec_27252){
return (function (acc,p__27246){
var vec__27247 = p__27246;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__8808__auto__ = _QMARK_id;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core._vreset_BANG_(i,(function (){var G__27251 = cljs.core._deref(i);
var fexpr__27250 = ((function (G__27251,or__8808__auto__,vec__27247,n,ms,_QMARK_id,i,limit_spec_27252){
return (function (i__$1){
return (i__$1 + (1));
});})(G__27251,or__8808__auto__,vec__27247,n,ms,_QMARK_id,i,limit_spec_27252))
;
return fexpr__27250(G__27251);
})());
}
})(),limit_spec_27252(n,ms));
});})(i,limit_spec_27252))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_27252))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reqs_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
var latch_27259 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_27259);

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,((function (latch_27259,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_27259,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv(((function (latch_27259,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__25226__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__25226__auto__)){
var s = b2__25226__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
});})(latch_27259,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
});})(latch_27259,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$((function (){var or__8808__auto__ = reqs;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_27259,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref(reqs_);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__25226__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__25226__auto__)){
var s = b2__25226__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__8808__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__25226__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__25226__auto__)){
var h = b2__25226__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__25226__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__25226__auto__)){
var l = b2__25226__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__25226__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__25226__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__25226__auto____$1)){
var e = b2__25226__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__25226__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_(reqs_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_((function (){var G__27253 = cmd;
var G__27254 = cljs.core.cst$kw$rl_SLASH_reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27253,G__27254) : taoensso.encore.kw_identical_QMARK_.call(null,G__27253,G__27254));
})())){
if(cljs.core.truth_((function (){var G__27255 = req_id;
var G__27256 = cljs.core.cst$kw$rl_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27255,G__27256) : taoensso.encore.kw_identical_QMARK_.call(null,G__27255,G__27256));
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_((function (){var G__27257 = cmd;
var G__27258 = cljs.core.cst$kw$rl_SLASH_peek;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27257,G__27258) : taoensso.encore.kw_identical_QMARK_.call(null,G__27257,G__27258));
})())){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,cmd,cljs.core.cst$kw$req_DASH_id,req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__27260 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27260,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27260,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__27267 = arguments.length;
switch (G__27267) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___27269 = arguments.length;
var i__10088__auto___27270 = (0);
while(true){
if((i__10088__auto___27270 < len__10087__auto___27269)){
args_arr__10110__auto__.push((arguments[i__10088__auto___27270]));

var G__27271 = (i__10088__auto___27270 + (1));
i__10088__auto___27270 = G__27271;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq27264){
var G__27265 = cljs.core.first(seq27264);
var seq27264__$1 = cljs.core.next(seq27264);
var G__27266 = cljs.core.first(seq27264__$1);
var seq27264__$2 = cljs.core.next(seq27264__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__27265,G__27266,seq27264__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__27273 = arguments.length;
switch (G__27273) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__8796__auto__ = separator;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__8796__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__27276 = arguments.length;
switch (G__27276) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__27279 = arguments.length;
switch (G__27279) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__27282 = arguments.length;
switch (G__27282) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__27285__delegate = function (args){
var G__27284 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__27284) : replacement.call(null,G__27284));
};
var G__27285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27286__i = 0, G__27286__a = new Array(arguments.length -  0);
while (G__27286__i < G__27286__a.length) {G__27286__a[G__27286__i] = arguments[G__27286__i + 0]; ++G__27286__i;}
  args = new cljs.core.IndexedSeq(G__27286__a,0,null);
} 
return G__27285__delegate.call(this,args);};
G__27285.cljs$lang$maxFixedArity = 0;
G__27285.cljs$lang$applyTo = (function (arglist__27287){
var args = cljs.core.seq(arglist__27287);
return G__27285__delegate(args);
});
G__27285.cljs$core$IFn$_invoke$arity$variadic = G__27285__delegate;
return G__27285;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__8808__auto__ = fmt;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27290 = arguments.length;
var i__10088__auto___27291 = (0);
while(true){
if((i__10088__auto___27291 < len__10087__auto___27290)){
args__10094__auto__.push((arguments[i__10088__auto___27291]));

var G__27292 = (i__10088__auto___27291 + (1));
i__10088__auto___27291 = G__27292;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq27288){
var G__27289 = cljs.core.first(seq27288);
var seq27288__$1 = cljs.core.next(seq27288);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__27289,seq27288__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27294 = arguments.length;
var i__10088__auto___27295 = (0);
while(true){
if((i__10088__auto___27295 < len__10087__auto___27294)){
args__10094__auto__.push((arguments[i__10088__auto___27295]));

var G__27296 = (i__10088__auto___27295 + (1));
i__10088__auto___27295 = G__27296;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq27293){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27293));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__27298 = arguments.length;
switch (G__27298) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27301 = arguments.length;
var i__10088__auto___27302 = (0);
while(true){
if((i__10088__auto___27302 < len__10087__auto___27301)){
args__10094__auto__.push((arguments[i__10088__auto___27302]));

var G__27303 = (i__10088__auto___27302 + (1));
i__10088__auto___27302 = G__27303;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

taoensso.encore.into_str.cljs$lang$applyTo = (function (seq27300){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27300));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
var sentinel_27308 = {};
var nil__GT_sentinel_27309 = ((function (sentinel_27308){
return (function (x){
if((x == null)){
return sentinel_27308;
} else {
return x;
}
});})(sentinel_27308))
;
var sentinel__GT_nil_27310 = ((function (sentinel_27308,nil__GT_sentinel_27309){
return (function (x){
if((x === sentinel_27308)){
return null;
} else {
return x;
}
});})(sentinel_27308,nil__GT_sentinel_27309))
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = ((function (sentinel_27308,nil__GT_sentinel_27309,sentinel__GT_nil_27310){
return (function taoensso$encore$reduce_top(var_args){
var G__27307 = arguments.length;
switch (G__27307) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_27308,nil__GT_sentinel_27309,sentinel__GT_nil_27310))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_27308,nil__GT_sentinel_27309,sentinel__GT_nil_27310){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_27308,nil__GT_sentinel_27309,sentinel__GT_nil_27310))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_27308,nil__GT_sentinel_27309,sentinel__GT_nil_27310){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_27308,nil__GT_sentinel_27309,sentinel__GT_nil_27310))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_27308,nil__GT_sentinel_27309,sentinel__GT_nil_27310){
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__9167__auto__ = coll_size;
var y__9168__auto__ = cljs.core.long$(n);
return ((x__9167__auto__ < y__9168__auto__) ? x__9167__auto__ : y__9168__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
});})(sentinel_27308,nil__GT_sentinel_27309,sentinel__GT_nil_27310))
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__27313 = arguments.length;
switch (G__27313) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__27316 = arguments.length;
switch (G__27316) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27335 = arguments.length;
var i__10088__auto___27336 = (0);
while(true){
if((i__10088__auto___27336 < len__10087__auto___27335)){
args__10094__auto__.push((arguments[i__10088__auto___27336]));

var G__27337 = (i__10088__auto___27336 + (1));
i__10088__auto___27336 = G__27337;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__27331){
var map__27332 = p__27331;
var map__27332__$1 = ((((!((map__27332 == null)))?((((map__27332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27332):map__27332);
var opts = map__27332__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27332__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27332__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27332__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27332__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27332__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27332__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27332__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27332__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27332__$1,cljs.core.cst$kw$ms);
taoensso.truss.impl.revery_QMARK_(((function (map__27332,map__27332__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_((function (){var fexpr__27334 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null);
return (fexpr__27334.cljs$core$IFn$_invoke$arity$1 ? fexpr__27334.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__27334.call(null,__in));
})())){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2394,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__27332,map__27332__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq27330){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27330));
});

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
var G__27352__delegate = function (xs){
var b2__25226__auto__ = console.log;
if(cljs.core.truth_(b2__25226__auto__)){
var f = b2__25226__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__27352 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__27353__i = 0, G__27353__a = new Array(arguments.length -  0);
while (G__27353__i < G__27353__a.length) {G__27353__a[G__27353__i] = arguments[G__27353__i + 0]; ++G__27353__i;}
  xs = new cljs.core.IndexedSeq(G__27353__a,0,null);
} 
return G__27352__delegate.call(this,xs);};
G__27352.cljs$lang$maxFixedArity = 0;
G__27352.cljs$lang$applyTo = (function (arglist__27354){
var xs = cljs.core.seq(arglist__27354);
return G__27352__delegate(xs);
});
G__27352.cljs$core$IFn$_invoke$arity$variadic = G__27352__delegate;
return G__27352;
})()
:(function() { 
var G__27355__delegate = function (xs){
return null;
};
var G__27355 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__27356__i = 0, G__27356__a = new Array(arguments.length -  0);
while (G__27356__i < G__27356__a.length) {G__27356__a[G__27356__i] = arguments[G__27356__i + 0]; ++G__27356__i;}
  xs = new cljs.core.IndexedSeq(G__27356__a,0,null);
} 
return G__27355__delegate.call(this,xs);};
G__27355.cljs$lang$maxFixedArity = 0;
G__27355.cljs$lang$applyTo = (function (arglist__27357){
var xs = cljs.core.seq(arglist__27357);
return G__27355__delegate(xs);
});
G__27355.cljs$core$IFn$_invoke$arity$variadic = G__27355__delegate;
return G__27355;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27358 = arguments.length;
var i__10088__auto___27359 = (0);
while(true){
if((i__10088__auto___27359 < len__10087__auto___27358)){
args__10094__auto__.push((arguments[i__10088__auto___27359]));

var G__27360 = (i__10088__auto___27359 + (1));
i__10088__auto___27359 = G__27360;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__27343 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__27343) : taoensso.encore.console_log.call(null,G__27343));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq27342){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27342));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27361 = arguments.length;
var i__10088__auto___27362 = (0);
while(true){
if((i__10088__auto___27362 < len__10087__auto___27361)){
args__10094__auto__.push((arguments[i__10088__auto___27362]));

var G__27363 = (i__10088__auto___27362 + (1));
i__10088__auto___27362 = G__27363;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__27345 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return alert(G__27345);
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq27344){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27344));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27364 = arguments.length;
var i__10088__auto___27365 = (0);
while(true){
if((i__10088__auto___27365 < len__10087__auto___27364)){
args__10094__auto__.push((arguments[i__10088__auto___27365]));

var G__27366 = (i__10088__auto___27365 + (1));
i__10088__auto___27365 = G__27366;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__27348 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__27348) : taoensso.encore.console_log.call(null,G__27348));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq27346){
var G__27347 = cljs.core.first(seq27346);
var seq27346__$1 = cljs.core.next(seq27346);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__27347,seq27346__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27367 = arguments.length;
var i__10088__auto___27368 = (0);
while(true){
if((i__10088__auto___27368 < len__10087__auto___27367)){
args__10094__auto__.push((arguments[i__10088__auto___27368]));

var G__27369 = (i__10088__auto___27368 + (1));
i__10088__auto___27368 = G__27369;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__27351 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__27351);
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq27349){
var G__27350 = cljs.core.first(seq27349);
var seq27349__$1 = cljs.core.next(seq27349);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__27350,seq27349__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__25226__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__25226__auto__)){
var js_win = b2__25226__auto__;
var b2__25226__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__25226__auto____$1)){
var loc = b2__25226__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref(taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return (function (){var G__27370 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__27370);
})().toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_((taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : taoensso.encore.js_form_data_QMARK_.call(null,params)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_27392 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e27371){if((e27371 instanceof Error)){
var e = e27371;
return e;
} else {
throw e27371;

}
}})();
if((e_27392 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2697,"(map? params)",params,e_27392,null);
}

if(cljs.core.truth_((function (){var and__8796__auto__ = typeof FormData !== 'undefined';
if(and__8796__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__8796__auto__;
}
})())){
var form_data = (new FormData());
var seq__27372_27393 = cljs.core.seq(params);
var chunk__27373_27394 = null;
var count__27374_27395 = (0);
var i__27375_27396 = (0);
while(true){
if((i__27375_27396 < count__27374_27395)){
var vec__27376_27397 = chunk__27373_27394.cljs$core$IIndexed$_nth$arity$2(null,i__27375_27396);
var k_27398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27376_27397,(0),null);
var v_27399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27376_27397,(1),null);
form_data.append(cljs.core.name(k_27398),v_27399);

var G__27400 = seq__27372_27393;
var G__27401 = chunk__27373_27394;
var G__27402 = count__27374_27395;
var G__27403 = (i__27375_27396 + (1));
seq__27372_27393 = G__27400;
chunk__27373_27394 = G__27401;
count__27374_27395 = G__27402;
i__27375_27396 = G__27403;
continue;
} else {
var temp__5457__auto___27404 = cljs.core.seq(seq__27372_27393);
if(temp__5457__auto___27404){
var seq__27372_27405__$1 = temp__5457__auto___27404;
if(cljs.core.chunked_seq_QMARK_(seq__27372_27405__$1)){
var c__9739__auto___27406 = cljs.core.chunk_first(seq__27372_27405__$1);
var G__27407 = cljs.core.chunk_rest(seq__27372_27405__$1);
var G__27408 = c__9739__auto___27406;
var G__27409 = cljs.core.count(c__9739__auto___27406);
var G__27410 = (0);
seq__27372_27393 = G__27407;
chunk__27373_27394 = G__27408;
count__27374_27395 = G__27409;
i__27375_27396 = G__27410;
continue;
} else {
var vec__27379_27411 = cljs.core.first(seq__27372_27405__$1);
var k_27412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27379_27411,(0),null);
var v_27413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27379_27411,(1),null);
form_data.append(cljs.core.name(k_27412),v_27413);

var G__27414 = cljs.core.next(seq__27372_27405__$1);
var G__27415 = null;
var G__27416 = (0);
var G__27417 = (0);
seq__27372_27393 = G__27414;
chunk__27373_27394 = G__27415;
count__27374_27395 = G__27416;
i__27375_27396 = G__27417;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.cljs$core$IFn$_invoke$arity$1(params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_((function (){var fexpr__27386 = ((function (url_encode,adaptive_encode){
return (function (x){
var or__8808__auto__ = (x == null);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = (function (){var fexpr__27389 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__27389.cljs$core$IFn$_invoke$arity$1 ? fexpr__27389.cljs$core$IFn$_invoke$arity$1(x) : fexpr__27389.call(null,x));
})();
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
var fexpr__27390 = taoensso.truss.impl.non_throwing(taoensso.encore.js_form_data_QMARK_);
return (fexpr__27390.cljs$core$IFn$_invoke$arity$1 ? fexpr__27390.cljs$core$IFn$_invoke$arity$1(x) : fexpr__27390.call(null,x));
}
}
});})(url_encode,adaptive_encode))
;
return fexpr__27386(params);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2709,"([:or nil? map? js-form-data?] params)",params,null,null);
}

var G__27391 = method;
var G__27391__$1 = (((G__27391 instanceof cljs.core.Keyword))?G__27391.fqn:null);
switch (G__27391__$1) {
case "get":
return url_encode.cljs$core$IFn$_invoke$arity$2(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27391__$1)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__27420,callback_fn){
var map__27421 = p__27420;
var map__27421__$1 = ((((!((map__27421 == null)))?((((map__27421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27421):map__27421);
var opts = map__27421__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27421__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27421__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27421__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27421__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27421__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27421__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_((function (){var fexpr__27425 = ((function (map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__8808__auto__ = (x == null);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var fexpr__27427 = taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_);
return (fexpr__27427.cljs$core$IFn$_invoke$arity$1 ? fexpr__27427.cljs$core$IFn$_invoke$arity$1(x) : fexpr__27427.call(null,x));
}
});})(map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
return fexpr__27425(timeout_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2741,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__25226__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__25226__auto__)){
var xhr = b2__25226__auto__;
try{var timeout_ms__$1 = (function (){var or__8808__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__27433 = method;
var G__27433__$1 = (((G__27433 instanceof cljs.core.Keyword))?G__27433.fqn:null);
switch (G__27433__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27433__$1)].join('')));

}
})();
var vec__27430 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27430,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27430,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys(((function (timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__27419_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__27419_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__25226__auto____$1 = cljs.core.cst$kw$progress_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__25226__auto____$1)){
var pf = b2__25226__auto____$1;
xhr.setProgressEventsEnabled(true);

var G__27434 = xhr;
var G__27435 = goog.net.EventType.PROGRESS;
var G__27436 = ((function (G__27434,G__27435,pf,b2__25226__auto____$1,timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__8796__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__8796__auto__;
}
})())?(loaded / total):null);
var G__27437 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__27437) : pf.call(null,G__27437));
});})(G__27434,G__27435,pf,b2__25226__auto____$1,timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
return goog.events.listen(G__27434,G__27435,G__27436);
} else {
return null;
}
})();
var G__27438_27453 = xhr;
var G__27439_27454 = G__27438_27453;
var G__27440_27455 = goog.net.EventType.READY;
var G__27441_27456 = ((function (G__27439_27454,G__27440_27455,G__27438_27453,timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__27439_27454,G__27440_27455,G__27438_27453,timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__27439_27454,G__27440_27455,G__27441_27456);

var G__27442_27457 = G__27438_27453;
var G__27443_27458 = goog.net.EventType.COMPLETE;
var G__27444_27459 = ((function (G__27442_27457,G__27443_27458,G__27438_27453,timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__27445 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?resp_type:(((_QMARK_content_type == null))?cljs.core.cst$kw$text:(function (){var cts = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__27442_27457,G__27443_27458,G__27438_27453,timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__27442_27457,G__27443_27458,G__27438_27453,timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_("/edn"))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(match_QMARK_("/json"))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(match_QMARK_("/xml"))){
return cljs.core.cst$kw$xml;
} else {
return cljs.core.cst$kw$text;
}
}
}
})()));
try{var G__27449 = resp_type__$1;
var G__27449__$1 = (((G__27449 instanceof cljs.core.Keyword))?G__27449.fqn:null);
switch (G__27449__$1) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27449__$1)].join('')));

}
}catch (e27448){if((e27448 instanceof Error)){
var _e = e27448;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e27448;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27445,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27445,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27445,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

var G__27450 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout]),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__27450) : callback_fn.call(null,G__27450));
});})(G__27442_27457,G__27443_27458,G__27438_27453,timeout_ms__$1,xhr_method,vec__27430,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__25226__auto__,map__27421,map__27421__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__27442_27457,G__27443_27458,G__27444_27459);


xhr.setTimeoutInterval((function (){var or__8808__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e27428){if((e27428 instanceof Error)){
var e = e27428;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__27429_27461 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__27429_27461) : callback_fn.call(null,G__27429_27461));

return null;
} else {
throw e27428;

}
}} else {
var G__27451_27462 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__27451_27462) : callback_fn.call(null,G__27451_27462));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace((function (){var G__27463 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
var G__27464 = s;
return encodeURIComponent(G__27463,G__27464);
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27471 = arguments.length;
var i__10088__auto___27472 = (0);
while(true){
if((i__10088__auto___27472 < len__10087__auto___27471)){
args__10094__auto__.push((arguments[i__10088__auto___27472]));

var G__27473 = (i__10088__auto___27472 + (1));
i__10088__auto___27472 = G__27473;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__27467){
var vec__27468 = p__27467;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27468,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq27465){
var G__27466 = cljs.core.first(seq27465);
var seq27465__$1 = cljs.core.next(seq27465);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__27466,seq27465__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode(taoensso.encore.as_qname(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode((function (){var or__8808__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__9690__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__27474(s__27475){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__27475__$1 = s__27475;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27475__$1);
if(temp__5457__auto__){
var s__27475__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27475__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__27475__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__27477 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__27476 = (0);
while(true){
if((i__27476 < size__9689__auto__)){
var vec__27478 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__27476);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27478,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27478,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__27477,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__8808__auto__ = cljs.core.seq(v);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__27484 = (i__27476 + (1));
i__27476 = G__27484;
continue;
} else {
var G__27485 = (i__27476 + (1));
i__27476 = G__27485;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27477),taoensso$encore$format_query_string_$_iter__27474(cljs.core.chunk_rest(s__27475__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27477),null);
}
} else {
var vec__27481 = cljs.core.first(s__27475__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27481,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__8808__auto__ = cljs.core.seq(v);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__27474(cljs.core.rest(s__27475__$2)));
} else {
var G__27486 = cljs.core.rest(s__27475__$2);
s__27475__$1 = G__27486;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__9690__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__25226__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__25226__auto__)){
var cur = b2__25226__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27496 = arguments.length;
var i__10088__auto___27497 = (0);
while(true){
if((i__10088__auto___27497 < len__10087__auto___27496)){
args__10094__auto__.push((arguments[i__10088__auto___27497]));

var G__27498 = (i__10088__auto___27497 + (1));
i__10088__auto___27497 = G__27498;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__27489){
var vec__27490 = p__27489;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27490,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27490,(1),null);
if((clojure.string.blank_QMARK_(s)) || (!(taoensso.encore.str_contains_QMARK_(s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__27490,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__25226__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__25226__auto__)){
var vec__27493 = b2__25226__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27493,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27493,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__27490,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq27487){
var G__27488 = cljs.core.first(seq27487);
var seq27487__$1 = cljs.core.next(seq27487);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__27488,seq27487__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__27499 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27499,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27499,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__25226__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__25226__auto__)){
var qstr = b2__25226__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__27502__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__27502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27503__i = 0, G__27503__a = new Array(arguments.length -  0);
while (G__27503__i < G__27503__a.length) {G__27503__a[G__27503__i] = arguments[G__27503__i + 0]; ++G__27503__i;}
  args = new cljs.core.IndexedSeq(G__27503__a,0,null);
} 
return G__27502__delegate.call(this,args);};
G__27502.cljs$lang$maxFixedArity = 0;
G__27502.cljs$lang$applyTo = (function (arglist__27504){
var args = cljs.core.seq(arglist__27504);
return G__27502__delegate(args);
});
G__27502.cljs$core$IFn$_invoke$arity$variadic = G__27502__delegate;
return G__27502;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,f,cljs.core.cst$kw$type,cljs.core.type(f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_(x)){
return (function (ns_str){
return cljs.core.re_find(x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_(x,"*")){
var re = cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"$"].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find(re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,x);
});
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_(x)){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$whitelist.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$blacklist.cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_(x)) || (cljs.core.set_QMARK_(x))){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(x,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1(x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__27507 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27507) : match_QMARK_.call(null,G__27507));
})())){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq(whitelist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,whitelist);
var vec__27508 = match_fns;
var seq__27509 = cljs.core.seq(vec__27508);
var first__27510 = cljs.core.first(seq__27509);
var seq__27509__$1 = cljs.core.next(seq__27509);
var m1 = first__27510;
var mn = seq__27509__$1;
if(mn){
return ((function (match_fns,vec__27508,seq__27509,first__27510,seq__27509__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome(((function (match_fns,vec__27508,seq__27509,first__27510,seq__27509__$1,m1,mn,compile1){
return (function (p1__27505_SHARP_){
return (p1__27505_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27505_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__27505_SHARP_.call(null,ns_str));
});})(match_fns,vec__27508,seq__27509,first__27510,seq__27509__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__27508,seq__27509,first__27510,seq__27509__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__27508,seq__27509,first__27510,seq__27509__$1,m1,mn,compile1){
return (function (ns_str){
return (m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str));
});
;})(match_fns,vec__27508,seq__27509,first__27510,seq__27509__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq(blacklist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,blacklist);
var vec__27511 = match_fns;
var seq__27512 = cljs.core.seq(vec__27511);
var first__27513 = cljs.core.first(seq__27512);
var seq__27512__$1 = cljs.core.next(seq__27512);
var m1 = first__27513;
var mn = seq__27512__$1;
if(mn){
return ((function (match_fns,vec__27511,seq__27512,first__27513,seq__27512__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome(((function (match_fns,vec__27511,seq__27512,first__27513,seq__27512__$1,m1,mn,white,compile1){
return (function (p1__27506_SHARP_){
return (p1__27506_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27506_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__27506_SHARP_.call(null,ns_str));
});})(match_fns,vec__27511,seq__27512,first__27513,seq__27512__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__27511,seq__27512,first__27513,seq__27512__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__27511,seq__27512,first__27513,seq__27512__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not((m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str)));
});
;})(match_fns,vec__27511,seq__27512,first__27513,seq__27512__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__8796__auto__ = white;
if(cljs.core.truth_(and__8796__auto__)){
return black;
} else {
return and__8796__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
if(cljs.core.truth_((white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(ns_str) : white.call(null,ns_str)))){
if(cljs.core.truth_((black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(ns_str) : black.call(null,ns_str)))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__27514 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(G__27514) : white.call(null,G__27514));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__27515 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(G__27515) : black.call(null,G__27515));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__9542__auto__.call(null,_,msecs,f));
} else {
var m__9542__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__9542__auto____$1.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return cljs.core.cst$kw$timeout_SLASH_pending;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return cljs.core.cst$kw$timeout_SLASH_cancelled;
} else {
return cljs.core.deref(result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto__.call(null,_));
} else {
var m__9542__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto__.call(null,_));
} else {
var m__9542__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto__.call(null,_));
} else {
var m__9542__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto__.call(null,_));
} else {
var m__9542__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto__.call(null,_));
} else {
var m__9542__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto__.call(null,_));
} else {
var m__9542__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,self__.f,cljs.core.cst$kw$udt,self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result(cljs.core.deref(self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var G__27520 = cljs.core.deref(self__.result__);
var G__27521 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27520,G__27521) : taoensso.encore.kw_identical_QMARK_.call(null,G__27520,G__27521));
})());
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27522 = cljs.core.deref(self__.result__);
var G__27523 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27522,G__27523) : taoensso.encore.kw_identical_QMARK_.call(null,G__27522,G__27523));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27524 = cljs.core.deref(self__.result__);
var G__27525 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27524,G__27525) : taoensso.encore.kw_identical_QMARK_.call(null,G__27524,G__27525));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$result__,cljs.core.cst$sym$udt], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__27527 = arguments.length;
switch (G__27527) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_))){
return cljs.core.deref(result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_27529 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_27529,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__27531){
var map__27532 = p__27531;
var map__27532__$1 = ((((!((map__27532 == null)))?((((map__27532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27532):map__27532);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27532__$1,cljs.core.cst$kw$before,cljs.core.cst$sym$do);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27532__$1,cljs.core.cst$kw$after,cljs.core.cst$sym$do);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__27530__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = before;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__27530__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = after;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27660 = arguments.length;
var i__10088__auto___27661 = (0);
while(true){
if((i__10088__auto___27661 < len__10087__auto___27660)){
args__10094__auto__.push((arguments[i__10088__auto___27661]));

var G__27662 = (i__10088__auto___27661 + (1));
i__10088__auto___27661 = G__27662;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__27540){
var vec__27541 = p__27540;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27541,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27541,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__8808__auto__ = type;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq27538){
var G__27539 = cljs.core.first(seq27538);
var seq27538__$1 = cljs.core.next(seq27538);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__27539,seq27538__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__27545 = arguments.length;
switch (G__27545) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27664 = arguments.length;
var i__10088__auto___27665 = (0);
while(true){
if((i__10088__auto___27665 < len__10087__auto___27664)){
args__10094__auto__.push((arguments[i__10088__auto___27665]));

var G__27666 = (i__10088__auto___27665 + (1));
i__10088__auto___27665 = G__27666;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq27546){
var G__27547 = cljs.core.first(seq27546);
var seq27546__$1 = cljs.core.next(seq27546);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__27547,seq27546__$1);
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome((function (p__27548){
var vec__27549 = p__27548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27549,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27549,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27549,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__27667__delegate = function (args){
var b2__25226__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__25226__auto__)){
var vec__27552 = b2__25226__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27552,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27552,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__27667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27668__i = 0, G__27668__a = new Array(arguments.length -  0);
while (G__27668__i < G__27668__a.length) {G__27668__a[G__27668__i] = arguments[G__27668__i + 0]; ++G__27668__i;}
  args = new cljs.core.IndexedSeq(G__27668__a,0,null);
} 
return G__27667__delegate.call(this,args);};
G__27667.cljs$lang$maxFixedArity = 0;
G__27667.cljs$lang$applyTo = (function (arglist__27669){
var args = cljs.core.seq(arglist__27669);
return G__27667__delegate(args);
});
G__27667.cljs$core$IFn$_invoke$arity$variadic = G__27667__delegate;
return G__27667;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
var G__27670__delegate = function (args){
var b2__25226__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__25226__auto__)){
var backoff = b2__25226__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__27670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27671__i = 0, G__27671__a = new Array(arguments.length -  0);
while (G__27671__i < G__27671__a.length) {G__27671__a[G__27671__i] = arguments[G__27671__i + 0]; ++G__27671__i;}
  args = new cljs.core.IndexedSeq(G__27671__a,0,null);
} 
return G__27670__delegate.call(this,args);};
G__27670.cljs$lang$maxFixedArity = 0;
G__27670.cljs$lang$applyTo = (function (arglist__27672){
var args = cljs.core.seq(arglist__27672);
return G__27670__delegate(args);
});
G__27670.cljs$core$IFn$_invoke$arity$variadic = G__27670__delegate;
return G__27670;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__27673__delegate = function (args){
var b2__25226__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__25226__auto__)){
var backoff_ms = b2__25226__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__27673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27674__i = 0, G__27674__a = new Array(arguments.length -  0);
while (G__27674__i < G__27674__a.length) {G__27674__a[G__27674__i] = arguments[G__27674__i + 0]; ++G__27674__i;}
  args = new cljs.core.IndexedSeq(G__27674__a,0,null);
} 
return G__27673__delegate.call(this,args);};
G__27673.cljs$lang$maxFixedArity = 0;
G__27673.cljs$lang$applyTo = (function (arglist__27675){
var args = cljs.core.seq(arglist__27675);
return G__27673__delegate(args);
});
G__27673.cljs$core$IFn$_invoke$arity$variadic = G__27673__delegate;
return G__27673;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$debug);

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27676 = arguments.length;
var i__10088__auto___27677 = (0);
while(true){
if((i__10088__auto___27677 < len__10087__auto___27676)){
args__10094__auto__.push((arguments[i__10088__auto___27677]));

var G__27678 = (i__10088__auto___27677 + (1));
i__10088__auto___27677 = G__27678;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__27557){
var vec__27558 = p__27557;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27558,(0),null);
var b2__25226__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__25226__auto__)){
var js_win = b2__25226__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__8808__auto__ = nattempt;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq27555){
var G__27556 = cljs.core.first(seq27555);
var seq27555__$1 = cljs.core.next(seq27555);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27556,seq27555__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27679 = arguments.length;
var i__10088__auto___27680 = (0);
while(true){
if((i__10088__auto___27680 < len__10087__auto___27679)){
args__10094__auto__.push((arguments[i__10088__auto___27680]));

var G__27681 = (i__10088__auto___27680 + (1));
i__10088__auto___27680 = G__27681;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__27563 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27563) : taoensso.encore.log_QMARK_.call(null,G__27563));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq27561){
var G__27562 = cljs.core.first(seq27561);
var seq27561__$1 = cljs.core.next(seq27561);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__27562,seq27561__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27682 = arguments.length;
var i__10088__auto___27683 = (0);
while(true){
if((i__10088__auto___27683 < len__10087__auto___27682)){
args__10094__auto__.push((arguments[i__10088__auto___27683]));

var G__27684 = (i__10088__auto___27683 + (1));
i__10088__auto___27683 = G__27684;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__27566 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27566) : taoensso.encore.log_QMARK_.call(null,G__27566));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq27564){
var G__27565 = cljs.core.first(seq27564);
var seq27564__$1 = cljs.core.next(seq27564);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__27565,seq27564__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27685 = arguments.length;
var i__10088__auto___27686 = (0);
while(true){
if((i__10088__auto___27686 < len__10087__auto___27685)){
args__10094__auto__.push((arguments[i__10088__auto___27686]));

var G__27687 = (i__10088__auto___27686 + (1));
i__10088__auto___27686 = G__27687;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__27569 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27569) : taoensso.encore.log_QMARK_.call(null,G__27569));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq27567){
var G__27568 = cljs.core.first(seq27567);
var seq27567__$1 = cljs.core.next(seq27567);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__27568,seq27567__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27688 = arguments.length;
var i__10088__auto___27689 = (0);
while(true){
if((i__10088__auto___27689 < len__10087__auto___27688)){
args__10094__auto__.push((arguments[i__10088__auto___27689]));

var G__27690 = (i__10088__auto___27689 + (1));
i__10088__auto___27689 = G__27690;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__27572 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27572) : taoensso.encore.log_QMARK_.call(null,G__27572));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq27570){
var G__27571 = cljs.core.first(seq27570);
var seq27570__$1 = cljs.core.next(seq27570);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__27571,seq27570__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27691 = arguments.length;
var i__10088__auto___27692 = (0);
while(true){
if((i__10088__auto___27692 < len__10087__auto___27691)){
args__10094__auto__.push((arguments[i__10088__auto___27692]));

var G__27693 = (i__10088__auto___27692 + (1));
i__10088__auto___27692 = G__27693;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__27575 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27575) : taoensso.encore.log_QMARK_.call(null,G__27575));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq27573){
var G__27574 = cljs.core.first(seq27573);
var seq27573__$1 = cljs.core.next(seq27573);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__27574,seq27573__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27694 = arguments.length;
var i__10088__auto___27695 = (0);
while(true){
if((i__10088__auto___27695 < len__10087__auto___27694)){
args__10094__auto__.push((arguments[i__10088__auto___27695]));

var G__27696 = (i__10088__auto___27695 + (1));
i__10088__auto___27695 = G__27696;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__27578 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27578) : taoensso.encore.log_QMARK_.call(null,G__27578));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq27576){
var G__27577 = cljs.core.first(seq27576);
var seq27576__$1 = cljs.core.next(seq27576);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__27577,seq27576__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27697 = arguments.length;
var i__10088__auto___27698 = (0);
while(true){
if((i__10088__auto___27698 < len__10087__auto___27697)){
args__10094__auto__.push((arguments[i__10088__auto___27698]));

var G__27699 = (i__10088__auto___27698 + (1));
i__10088__auto___27698 = G__27699;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__27581 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27581) : taoensso.encore.log_QMARK_.call(null,G__27581));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq27579){
var G__27580 = cljs.core.first(seq27579);
var seq27579__$1 = cljs.core.next(seq27579);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__27580,seq27579__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27700 = arguments.length;
var i__10088__auto___27701 = (0);
while(true){
if((i__10088__auto___27701 < len__10087__auto___27700)){
args__10094__auto__.push((arguments[i__10088__auto___27701]));

var G__27702 = (i__10088__auto___27701 + (1));
i__10088__auto___27701 = G__27702;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__27584){
var vec__27585 = p__27584;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27585,(0),null);
var comparator = (function (){var or__8808__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__27585,_QMARK_comparator){
return (function (p1__27534_SHARP_,p2__27535_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__27534_SHARP_,p2__27535_SHARP_) : comparator.call(null,p1__27534_SHARP_,p2__27535_SHARP_)) > (0))){
return p2__27535_SHARP_;
} else {
return p1__27534_SHARP_;
}
});})(comparator,vec__27585,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq27582){
var G__27583 = cljs.core.first(seq27582);
var seq27582__$1 = cljs.core.next(seq27582);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__27583,seq27582__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27703 = arguments.length;
var i__10088__auto___27704 = (0);
while(true){
if((i__10088__auto___27704 < len__10087__auto___27703)){
args__10094__auto__.push((arguments[i__10088__auto___27704]));

var G__27705 = (i__10088__auto___27704 + (1));
i__10088__auto___27704 = G__27705;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__27590){
var vec__27591 = p__27590;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27591,(0),null);
var comparator = (function (){var or__8808__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__27591,_QMARK_comparator){
return (function (p1__27536_SHARP_,p2__27537_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__27536_SHARP_,p2__27537_SHARP_) : comparator.call(null,p1__27536_SHARP_,p2__27537_SHARP_)) < (0))){
return p2__27537_SHARP_;
} else {
return p1__27536_SHARP_;
}
});})(comparator,vec__27591,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq27588){
var G__27589 = cljs.core.first(seq27588);
var seq27588__$1 = cljs.core.next(seq27588);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__27589,seq27588__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__8808__auto__ = x;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__27598 = (function (p__27599,seen__$1){
while(true){
var vec__27600 = p__27599;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27600,(0),null);
var xs__$1 = vec__27600;
var b2__25226__auto__ = cljs.core.seq(xs__$1);
if(b2__25226__auto__){
var s = b2__25226__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__27706 = cljs.core.rest(s);
var G__27707 = seen__$1;
p__27599 = G__27706;
seen__$1 = G__27707;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
});
return fexpr__27598(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__27604 = arguments.length;
switch (G__27604) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27605,in$){
var vec__27606 = p__27605;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27606,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27606,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_((function (){var G__27609 = kf;
var G__27610 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27609,G__27610) : taoensso.encore.kw_identical_QMARK_.call(null,G__27609,G__27610));
})())?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27709 = arguments.length;
var i__10088__auto___27710 = (0);
while(true){
if((i__10088__auto___27710 < len__10087__auto___27709)){
args__10094__auto__.push((arguments[i__10088__auto___27710]));

var G__27711 = (i__10088__auto___27710 + (1));
i__10088__auto___27710 = G__27711;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__27613){
var vec__27614 = p__27613;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27614,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27614,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__27614,kf,vf){
return (function (_,v){
return v;
});})(vec__27614,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__27614,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__27614,kf,vf))
:(cljs.core.truth_((function (){var G__27617 = kf;
var G__27618 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27617,G__27618) : taoensso.encore.kw_identical_QMARK_.call(null,G__27617,G__27618));
})())?((function (vf__$1,vec__27614,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__27614,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__27614,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__27614,kf,vf))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq27611){
var G__27612 = cljs.core.first(seq27611);
var seq27611__$1 = cljs.core.next(seq27611);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__27612,seq27611__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27712 = arguments.length;
var i__10088__auto___27713 = (0);
while(true){
if((i__10088__auto___27713 < len__10087__auto___27712)){
args__10094__auto__.push((arguments[i__10088__auto___27713]));

var G__27714 = (i__10088__auto___27713 + (1));
i__10088__auto___27713 = G__27714;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq27619){
var G__27620 = cljs.core.first(seq27619);
var seq27619__$1 = cljs.core.next(seq27619);
var G__27621 = cljs.core.first(seq27619__$1);
var seq27619__$2 = cljs.core.next(seq27619__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__27620,G__27621,seq27619__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__9167__auto__ = signed_idx;
var y__9168__auto__ = max_idx;
return ((x__9167__auto__ < y__9168__auto__) ? x__9167__auto__ : y__9168__auto__);
} else {
var x__9160__auto__ = (0);
var y__9161__auto__ = (signed_idx + max_idx);
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27715 = arguments.length;
var i__10088__auto___27716 = (0);
while(true){
if((i__10088__auto___27716 < len__10087__auto___27715)){
args__10094__auto__.push((arguments[i__10088__auto___27716]));

var G__27717 = (i__10088__auto___27716 + (1));
i__10088__auto___27716 = G__27717;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__27625){
var map__27626 = p__27625;
var map__27626__$1 = ((((!((map__27626 == null)))?((((map__27626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27626):map__27626);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27626__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__25685__auto__ = (start_idx_STAR_ + max_len);
var n2__25686__auto__ = xlen;
if((n1__25685__auto__ > n2__25686__auto__)){
return n2__25686__auto__;
} else {
return n1__25685__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq27622){
var G__27623 = cljs.core.first(seq27622);
var seq27622__$1 = cljs.core.next(seq27622);
var G__27624 = cljs.core.first(seq27622__$1);
var seq27622__$2 = cljs.core.next(seq27622__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__27623,G__27624,seq27622__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27718 = arguments.length;
var i__10088__auto___27719 = (0);
while(true){
if((i__10088__auto___27719 < len__10087__auto___27718)){
args__10094__auto__.push((arguments[i__10088__auto___27719]));

var G__27720 = (i__10088__auto___27719 + (1));
i__10088__auto___27719 = G__27720;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__27631){
var vec__27632 = p__27631;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27632,(0),null);
var vec__27635 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27635,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27635,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq27628){
var G__27629 = cljs.core.first(seq27628);
var seq27628__$1 = cljs.core.next(seq27628);
var G__27630 = cljs.core.first(seq27628__$1);
var seq27628__$2 = cljs.core.next(seq27628__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__27629,G__27630,seq27628__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27721 = arguments.length;
var i__10088__auto___27722 = (0);
while(true){
if((i__10088__auto___27722 < len__10087__auto___27721)){
args__10094__auto__.push((arguments[i__10088__auto___27722]));

var G__27723 = (i__10088__auto___27722 + (1));
i__10088__auto___27722 = G__27723;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__27641){
var vec__27642 = p__27641;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27642,(0),null);
var vec__27645 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27645,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27645,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq27638){
var G__27639 = cljs.core.first(seq27638);
var seq27638__$1 = cljs.core.next(seq27638);
var G__27640 = cljs.core.first(seq27638__$1);
var seq27638__$2 = cljs.core.next(seq27638__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27639,G__27640,seq27638__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_(x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_(coll))){
var vec__27650 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27650,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__27724 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__27725 = cljs.core.next(ks__$1);
var G__27726 = cljs.core.next(vs__$1);
m = G__27724;
ks__$1 = G__27725;
vs__$1 = G__27726;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__10094__auto__ = [];
var len__10087__auto___27727 = arguments.length;
var i__10088__auto___27728 = (0);
while(true){
if((i__10088__auto___27728 < len__10087__auto___27727)){
args__10094__auto__.push((arguments[i__10088__auto___27728]));

var G__27729 = (i__10088__auto___27728 + (1));
i__10088__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__27655 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27655,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27655,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27655,(2),null);
var f = (cljs.core.truth_((function (){var G__27658 = type;
var G__27659 = cljs.core.cst$kw$reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27658,G__27659) : taoensso.encore.kw_identical_QMARK_.call(null,G__27658,G__27659));
})())?((function (vec__27655,type,ks,valf){
return (function (_){
return valf;
});})(vec__27655,type,ks,valf))
:valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq27653){
var G__27654 = cljs.core.first(seq27653);
var seq27653__$1 = cljs.core.next(seq27653);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__27654,seq27653__$1);
});

