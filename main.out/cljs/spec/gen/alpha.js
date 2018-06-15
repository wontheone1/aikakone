// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31299 = arguments.length;
var i__10088__auto___31300 = (0);
while(true){
if((i__10088__auto___31300 < len__10087__auto___31299)){
args__10094__auto__.push((arguments[i__10088__auto___31300]));

var G__31301 = (i__10088__auto___31300 + (1));
i__10088__auto___31300 = G__31301;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq31298){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31298));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31303 = arguments.length;
var i__10088__auto___31304 = (0);
while(true){
if((i__10088__auto___31304 < len__10087__auto___31303)){
args__10094__auto__.push((arguments[i__10088__auto___31304]));

var G__31305 = (i__10088__auto___31304 + (1));
i__10088__auto___31304 = G__31305;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq31302){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31302));
});

var g_QMARK__31309 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_31310 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__31309){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__31309))
,null));
var mkg_31311 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__31309,g_31310){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__31309,g_31310))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__31309,g_31310,mkg_31311){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__31306 = cljs.core.deref(g_QMARK__31309);
return (fexpr__31306.cljs$core$IFn$_invoke$arity$1 ? fexpr__31306.cljs$core$IFn$_invoke$arity$1(x) : fexpr__31306.call(null,x));
});})(g_QMARK__31309,g_31310,mkg_31311))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__31309,g_31310,mkg_31311){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__31307 = cljs.core.deref(mkg_31311);
return (fexpr__31307.cljs$core$IFn$_invoke$arity$1 ? fexpr__31307.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__31307.call(null,gfn));
});})(g_QMARK__31309,g_31310,mkg_31311))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__31309,g_31310,mkg_31311){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__31308 = cljs.core.deref(g_31310);
return (fexpr__31308.cljs$core$IFn$_invoke$arity$1 ? fexpr__31308.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__31308.call(null,generator));
});})(g_QMARK__31309,g_31310,mkg_31311))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__31312 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__31312.cljs$core$IFn$_invoke$arity$2 ? fexpr__31312.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__31312.call(null,rnd,size));
}));
});
var g__31270__auto___31332 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31270__auto___31332){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31333 = arguments.length;
var i__10088__auto___31334 = (0);
while(true){
if((i__10088__auto___31334 < len__10087__auto___31333)){
args__10094__auto__.push((arguments[i__10088__auto___31334]));

var G__31335 = (i__10088__auto___31334 + (1));
i__10088__auto___31334 = G__31335;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31332))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31332){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31332),args);
});})(g__31270__auto___31332))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31270__auto___31332){
return (function (seq31313){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31313));
});})(g__31270__auto___31332))
;


var g__31270__auto___31336 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31270__auto___31336){
return (function cljs$spec$gen$alpha$list(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31337 = arguments.length;
var i__10088__auto___31338 = (0);
while(true){
if((i__10088__auto___31338 < len__10087__auto___31337)){
args__10094__auto__.push((arguments[i__10088__auto___31338]));

var G__31339 = (i__10088__auto___31338 + (1));
i__10088__auto___31338 = G__31339;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31336))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31336){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31336),args);
});})(g__31270__auto___31336))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31270__auto___31336){
return (function (seq31314){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31314));
});})(g__31270__auto___31336))
;


var g__31270__auto___31340 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31270__auto___31340){
return (function cljs$spec$gen$alpha$map(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31341 = arguments.length;
var i__10088__auto___31342 = (0);
while(true){
if((i__10088__auto___31342 < len__10087__auto___31341)){
args__10094__auto__.push((arguments[i__10088__auto___31342]));

var G__31343 = (i__10088__auto___31342 + (1));
i__10088__auto___31342 = G__31343;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31340))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31340){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31340),args);
});})(g__31270__auto___31340))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31270__auto___31340){
return (function (seq31315){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31315));
});})(g__31270__auto___31340))
;


var g__31270__auto___31344 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31270__auto___31344){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31345 = arguments.length;
var i__10088__auto___31346 = (0);
while(true){
if((i__10088__auto___31346 < len__10087__auto___31345)){
args__10094__auto__.push((arguments[i__10088__auto___31346]));

var G__31347 = (i__10088__auto___31346 + (1));
i__10088__auto___31346 = G__31347;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31344))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31344){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31344),args);
});})(g__31270__auto___31344))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31270__auto___31344){
return (function (seq31316){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31316));
});})(g__31270__auto___31344))
;


var g__31270__auto___31348 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31270__auto___31348){
return (function cljs$spec$gen$alpha$set(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31349 = arguments.length;
var i__10088__auto___31350 = (0);
while(true){
if((i__10088__auto___31350 < len__10087__auto___31349)){
args__10094__auto__.push((arguments[i__10088__auto___31350]));

var G__31351 = (i__10088__auto___31350 + (1));
i__10088__auto___31350 = G__31351;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31348))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31348){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31348),args);
});})(g__31270__auto___31348))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31270__auto___31348){
return (function (seq31317){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31317));
});})(g__31270__auto___31348))
;


var g__31270__auto___31352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31270__auto___31352){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31353 = arguments.length;
var i__10088__auto___31354 = (0);
while(true){
if((i__10088__auto___31354 < len__10087__auto___31353)){
args__10094__auto__.push((arguments[i__10088__auto___31354]));

var G__31355 = (i__10088__auto___31354 + (1));
i__10088__auto___31354 = G__31355;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31352))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31352){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31352),args);
});})(g__31270__auto___31352))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31270__auto___31352){
return (function (seq31318){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31318));
});})(g__31270__auto___31352))
;


var g__31270__auto___31356 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31270__auto___31356){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31357 = arguments.length;
var i__10088__auto___31358 = (0);
while(true){
if((i__10088__auto___31358 < len__10087__auto___31357)){
args__10094__auto__.push((arguments[i__10088__auto___31358]));

var G__31359 = (i__10088__auto___31358 + (1));
i__10088__auto___31358 = G__31359;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31356))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31356){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31356),args);
});})(g__31270__auto___31356))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31270__auto___31356){
return (function (seq31319){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31319));
});})(g__31270__auto___31356))
;


var g__31270__auto___31360 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31270__auto___31360){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31361 = arguments.length;
var i__10088__auto___31362 = (0);
while(true){
if((i__10088__auto___31362 < len__10087__auto___31361)){
args__10094__auto__.push((arguments[i__10088__auto___31362]));

var G__31363 = (i__10088__auto___31362 + (1));
i__10088__auto___31362 = G__31363;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31360))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31360){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31360),args);
});})(g__31270__auto___31360))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31270__auto___31360){
return (function (seq31320){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31320));
});})(g__31270__auto___31360))
;


var g__31270__auto___31364 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31270__auto___31364){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31365 = arguments.length;
var i__10088__auto___31366 = (0);
while(true){
if((i__10088__auto___31366 < len__10087__auto___31365)){
args__10094__auto__.push((arguments[i__10088__auto___31366]));

var G__31367 = (i__10088__auto___31366 + (1));
i__10088__auto___31366 = G__31367;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31364))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31364){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31364),args);
});})(g__31270__auto___31364))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31270__auto___31364){
return (function (seq31321){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31321));
});})(g__31270__auto___31364))
;


var g__31270__auto___31368 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31270__auto___31368){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31369 = arguments.length;
var i__10088__auto___31370 = (0);
while(true){
if((i__10088__auto___31370 < len__10087__auto___31369)){
args__10094__auto__.push((arguments[i__10088__auto___31370]));

var G__31371 = (i__10088__auto___31370 + (1));
i__10088__auto___31370 = G__31371;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31368))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31368){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31368),args);
});})(g__31270__auto___31368))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31270__auto___31368){
return (function (seq31322){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31322));
});})(g__31270__auto___31368))
;


var g__31270__auto___31372 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31270__auto___31372){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31373 = arguments.length;
var i__10088__auto___31374 = (0);
while(true){
if((i__10088__auto___31374 < len__10087__auto___31373)){
args__10094__auto__.push((arguments[i__10088__auto___31374]));

var G__31375 = (i__10088__auto___31374 + (1));
i__10088__auto___31374 = G__31375;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31372))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31372){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31372),args);
});})(g__31270__auto___31372))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31270__auto___31372){
return (function (seq31323){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31323));
});})(g__31270__auto___31372))
;


var g__31270__auto___31376 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31270__auto___31376){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31377 = arguments.length;
var i__10088__auto___31378 = (0);
while(true){
if((i__10088__auto___31378 < len__10087__auto___31377)){
args__10094__auto__.push((arguments[i__10088__auto___31378]));

var G__31379 = (i__10088__auto___31378 + (1));
i__10088__auto___31378 = G__31379;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31376))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31376){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31376),args);
});})(g__31270__auto___31376))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31270__auto___31376){
return (function (seq31324){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31324));
});})(g__31270__auto___31376))
;


var g__31270__auto___31380 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31270__auto___31380){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31381 = arguments.length;
var i__10088__auto___31382 = (0);
while(true){
if((i__10088__auto___31382 < len__10087__auto___31381)){
args__10094__auto__.push((arguments[i__10088__auto___31382]));

var G__31383 = (i__10088__auto___31382 + (1));
i__10088__auto___31382 = G__31383;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31380))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31380){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31380),args);
});})(g__31270__auto___31380))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31270__auto___31380){
return (function (seq31325){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31325));
});})(g__31270__auto___31380))
;


var g__31270__auto___31384 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31270__auto___31384){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31385 = arguments.length;
var i__10088__auto___31386 = (0);
while(true){
if((i__10088__auto___31386 < len__10087__auto___31385)){
args__10094__auto__.push((arguments[i__10088__auto___31386]));

var G__31387 = (i__10088__auto___31386 + (1));
i__10088__auto___31386 = G__31387;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31384))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31384){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31384),args);
});})(g__31270__auto___31384))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31270__auto___31384){
return (function (seq31326){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31326));
});})(g__31270__auto___31384))
;


var g__31270__auto___31388 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31270__auto___31388){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31389 = arguments.length;
var i__10088__auto___31390 = (0);
while(true){
if((i__10088__auto___31390 < len__10087__auto___31389)){
args__10094__auto__.push((arguments[i__10088__auto___31390]));

var G__31391 = (i__10088__auto___31390 + (1));
i__10088__auto___31390 = G__31391;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31388))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31388){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31388),args);
});})(g__31270__auto___31388))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31270__auto___31388){
return (function (seq31327){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31327));
});})(g__31270__auto___31388))
;


var g__31270__auto___31392 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31270__auto___31392){
return (function cljs$spec$gen$alpha$return(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31393 = arguments.length;
var i__10088__auto___31394 = (0);
while(true){
if((i__10088__auto___31394 < len__10087__auto___31393)){
args__10094__auto__.push((arguments[i__10088__auto___31394]));

var G__31395 = (i__10088__auto___31394 + (1));
i__10088__auto___31394 = G__31395;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31392))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31392){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31392),args);
});})(g__31270__auto___31392))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31270__auto___31392){
return (function (seq31328){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31328));
});})(g__31270__auto___31392))
;


var g__31270__auto___31396 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31270__auto___31396){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31397 = arguments.length;
var i__10088__auto___31398 = (0);
while(true){
if((i__10088__auto___31398 < len__10087__auto___31397)){
args__10094__auto__.push((arguments[i__10088__auto___31398]));

var G__31399 = (i__10088__auto___31398 + (1));
i__10088__auto___31398 = G__31399;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31396))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31396){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31396),args);
});})(g__31270__auto___31396))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31270__auto___31396){
return (function (seq31329){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31329));
});})(g__31270__auto___31396))
;


var g__31270__auto___31400 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31270__auto___31400){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31401 = arguments.length;
var i__10088__auto___31402 = (0);
while(true){
if((i__10088__auto___31402 < len__10087__auto___31401)){
args__10094__auto__.push((arguments[i__10088__auto___31402]));

var G__31403 = (i__10088__auto___31402 + (1));
i__10088__auto___31402 = G__31403;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31400))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31400){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31400),args);
});})(g__31270__auto___31400))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31270__auto___31400){
return (function (seq31330){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31330));
});})(g__31270__auto___31400))
;


var g__31270__auto___31404 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31270__auto___31404){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31405 = arguments.length;
var i__10088__auto___31406 = (0);
while(true){
if((i__10088__auto___31406 < len__10087__auto___31405)){
args__10094__auto__.push((arguments[i__10088__auto___31406]));

var G__31407 = (i__10088__auto___31406 + (1));
i__10088__auto___31406 = G__31407;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31270__auto___31404))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31270__auto___31404){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__31270__auto___31404),args);
});})(g__31270__auto___31404))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31270__auto___31404){
return (function (seq31331){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31331));
});})(g__31270__auto___31404))
;

var g__31283__auto___31429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31283__auto___31429){
return (function cljs$spec$gen$alpha$any(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31430 = arguments.length;
var i__10088__auto___31431 = (0);
while(true){
if((i__10088__auto___31431 < len__10087__auto___31430)){
args__10094__auto__.push((arguments[i__10088__auto___31431]));

var G__31432 = (i__10088__auto___31431 + (1));
i__10088__auto___31431 = G__31432;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31429))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31429){
return (function (args){
return cljs.core.deref(g__31283__auto___31429);
});})(g__31283__auto___31429))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31283__auto___31429){
return (function (seq31408){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31408));
});})(g__31283__auto___31429))
;


var g__31283__auto___31433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31283__auto___31433){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31434 = arguments.length;
var i__10088__auto___31435 = (0);
while(true){
if((i__10088__auto___31435 < len__10087__auto___31434)){
args__10094__auto__.push((arguments[i__10088__auto___31435]));

var G__31436 = (i__10088__auto___31435 + (1));
i__10088__auto___31435 = G__31436;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31433))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31433){
return (function (args){
return cljs.core.deref(g__31283__auto___31433);
});})(g__31283__auto___31433))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31283__auto___31433){
return (function (seq31409){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31409));
});})(g__31283__auto___31433))
;


var g__31283__auto___31437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31283__auto___31437){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31438 = arguments.length;
var i__10088__auto___31439 = (0);
while(true){
if((i__10088__auto___31439 < len__10087__auto___31438)){
args__10094__auto__.push((arguments[i__10088__auto___31439]));

var G__31440 = (i__10088__auto___31439 + (1));
i__10088__auto___31439 = G__31440;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31437))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31437){
return (function (args){
return cljs.core.deref(g__31283__auto___31437);
});})(g__31283__auto___31437))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31283__auto___31437){
return (function (seq31410){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31410));
});})(g__31283__auto___31437))
;


var g__31283__auto___31441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31283__auto___31441){
return (function cljs$spec$gen$alpha$char(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31442 = arguments.length;
var i__10088__auto___31443 = (0);
while(true){
if((i__10088__auto___31443 < len__10087__auto___31442)){
args__10094__auto__.push((arguments[i__10088__auto___31443]));

var G__31444 = (i__10088__auto___31443 + (1));
i__10088__auto___31443 = G__31444;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31441))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31441){
return (function (args){
return cljs.core.deref(g__31283__auto___31441);
});})(g__31283__auto___31441))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31283__auto___31441){
return (function (seq31411){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31411));
});})(g__31283__auto___31441))
;


var g__31283__auto___31445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31283__auto___31445){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31446 = arguments.length;
var i__10088__auto___31447 = (0);
while(true){
if((i__10088__auto___31447 < len__10087__auto___31446)){
args__10094__auto__.push((arguments[i__10088__auto___31447]));

var G__31448 = (i__10088__auto___31447 + (1));
i__10088__auto___31447 = G__31448;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31445))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31445){
return (function (args){
return cljs.core.deref(g__31283__auto___31445);
});})(g__31283__auto___31445))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31283__auto___31445){
return (function (seq31412){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31412));
});})(g__31283__auto___31445))
;


var g__31283__auto___31449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31283__auto___31449){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31450 = arguments.length;
var i__10088__auto___31451 = (0);
while(true){
if((i__10088__auto___31451 < len__10087__auto___31450)){
args__10094__auto__.push((arguments[i__10088__auto___31451]));

var G__31452 = (i__10088__auto___31451 + (1));
i__10088__auto___31451 = G__31452;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31449))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31449){
return (function (args){
return cljs.core.deref(g__31283__auto___31449);
});})(g__31283__auto___31449))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31283__auto___31449){
return (function (seq31413){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31413));
});})(g__31283__auto___31449))
;


var g__31283__auto___31453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31283__auto___31453){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31454 = arguments.length;
var i__10088__auto___31455 = (0);
while(true){
if((i__10088__auto___31455 < len__10087__auto___31454)){
args__10094__auto__.push((arguments[i__10088__auto___31455]));

var G__31456 = (i__10088__auto___31455 + (1));
i__10088__auto___31455 = G__31456;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31453))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31453){
return (function (args){
return cljs.core.deref(g__31283__auto___31453);
});})(g__31283__auto___31453))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31283__auto___31453){
return (function (seq31414){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31414));
});})(g__31283__auto___31453))
;


var g__31283__auto___31457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31283__auto___31457){
return (function cljs$spec$gen$alpha$double(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31458 = arguments.length;
var i__10088__auto___31459 = (0);
while(true){
if((i__10088__auto___31459 < len__10087__auto___31458)){
args__10094__auto__.push((arguments[i__10088__auto___31459]));

var G__31460 = (i__10088__auto___31459 + (1));
i__10088__auto___31459 = G__31460;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31457))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31457){
return (function (args){
return cljs.core.deref(g__31283__auto___31457);
});})(g__31283__auto___31457))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31283__auto___31457){
return (function (seq31415){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31415));
});})(g__31283__auto___31457))
;


var g__31283__auto___31461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31283__auto___31461){
return (function cljs$spec$gen$alpha$int(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31462 = arguments.length;
var i__10088__auto___31463 = (0);
while(true){
if((i__10088__auto___31463 < len__10087__auto___31462)){
args__10094__auto__.push((arguments[i__10088__auto___31463]));

var G__31464 = (i__10088__auto___31463 + (1));
i__10088__auto___31463 = G__31464;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31461))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31461){
return (function (args){
return cljs.core.deref(g__31283__auto___31461);
});})(g__31283__auto___31461))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31283__auto___31461){
return (function (seq31416){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31416));
});})(g__31283__auto___31461))
;


var g__31283__auto___31465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31283__auto___31465){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31466 = arguments.length;
var i__10088__auto___31467 = (0);
while(true){
if((i__10088__auto___31467 < len__10087__auto___31466)){
args__10094__auto__.push((arguments[i__10088__auto___31467]));

var G__31468 = (i__10088__auto___31467 + (1));
i__10088__auto___31467 = G__31468;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31465))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31465){
return (function (args){
return cljs.core.deref(g__31283__auto___31465);
});})(g__31283__auto___31465))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31283__auto___31465){
return (function (seq31417){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31417));
});})(g__31283__auto___31465))
;


var g__31283__auto___31469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31283__auto___31469){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31470 = arguments.length;
var i__10088__auto___31471 = (0);
while(true){
if((i__10088__auto___31471 < len__10087__auto___31470)){
args__10094__auto__.push((arguments[i__10088__auto___31471]));

var G__31472 = (i__10088__auto___31471 + (1));
i__10088__auto___31471 = G__31472;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31469))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31469){
return (function (args){
return cljs.core.deref(g__31283__auto___31469);
});})(g__31283__auto___31469))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31283__auto___31469){
return (function (seq31418){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31418));
});})(g__31283__auto___31469))
;


var g__31283__auto___31473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31283__auto___31473){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31474 = arguments.length;
var i__10088__auto___31475 = (0);
while(true){
if((i__10088__auto___31475 < len__10087__auto___31474)){
args__10094__auto__.push((arguments[i__10088__auto___31475]));

var G__31476 = (i__10088__auto___31475 + (1));
i__10088__auto___31475 = G__31476;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31473))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31473){
return (function (args){
return cljs.core.deref(g__31283__auto___31473);
});})(g__31283__auto___31473))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31283__auto___31473){
return (function (seq31419){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31419));
});})(g__31283__auto___31473))
;


var g__31283__auto___31477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31283__auto___31477){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31478 = arguments.length;
var i__10088__auto___31479 = (0);
while(true){
if((i__10088__auto___31479 < len__10087__auto___31478)){
args__10094__auto__.push((arguments[i__10088__auto___31479]));

var G__31480 = (i__10088__auto___31479 + (1));
i__10088__auto___31479 = G__31480;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31477))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31477){
return (function (args){
return cljs.core.deref(g__31283__auto___31477);
});})(g__31283__auto___31477))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31283__auto___31477){
return (function (seq31420){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31420));
});})(g__31283__auto___31477))
;


var g__31283__auto___31481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31283__auto___31481){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31482 = arguments.length;
var i__10088__auto___31483 = (0);
while(true){
if((i__10088__auto___31483 < len__10087__auto___31482)){
args__10094__auto__.push((arguments[i__10088__auto___31483]));

var G__31484 = (i__10088__auto___31483 + (1));
i__10088__auto___31483 = G__31484;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31481))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31481){
return (function (args){
return cljs.core.deref(g__31283__auto___31481);
});})(g__31283__auto___31481))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31283__auto___31481){
return (function (seq31421){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31421));
});})(g__31283__auto___31481))
;


var g__31283__auto___31485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31283__auto___31485){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31486 = arguments.length;
var i__10088__auto___31487 = (0);
while(true){
if((i__10088__auto___31487 < len__10087__auto___31486)){
args__10094__auto__.push((arguments[i__10088__auto___31487]));

var G__31488 = (i__10088__auto___31487 + (1));
i__10088__auto___31487 = G__31488;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31485))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31485){
return (function (args){
return cljs.core.deref(g__31283__auto___31485);
});})(g__31283__auto___31485))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31283__auto___31485){
return (function (seq31422){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31422));
});})(g__31283__auto___31485))
;


var g__31283__auto___31489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31283__auto___31489){
return (function cljs$spec$gen$alpha$string(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31490 = arguments.length;
var i__10088__auto___31491 = (0);
while(true){
if((i__10088__auto___31491 < len__10087__auto___31490)){
args__10094__auto__.push((arguments[i__10088__auto___31491]));

var G__31492 = (i__10088__auto___31491 + (1));
i__10088__auto___31491 = G__31492;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31489))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31489){
return (function (args){
return cljs.core.deref(g__31283__auto___31489);
});})(g__31283__auto___31489))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31283__auto___31489){
return (function (seq31423){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31423));
});})(g__31283__auto___31489))
;


var g__31283__auto___31493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31283__auto___31493){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31494 = arguments.length;
var i__10088__auto___31495 = (0);
while(true){
if((i__10088__auto___31495 < len__10087__auto___31494)){
args__10094__auto__.push((arguments[i__10088__auto___31495]));

var G__31496 = (i__10088__auto___31495 + (1));
i__10088__auto___31495 = G__31496;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31493))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31493){
return (function (args){
return cljs.core.deref(g__31283__auto___31493);
});})(g__31283__auto___31493))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31283__auto___31493){
return (function (seq31424){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31424));
});})(g__31283__auto___31493))
;


var g__31283__auto___31497 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31283__auto___31497){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31498 = arguments.length;
var i__10088__auto___31499 = (0);
while(true){
if((i__10088__auto___31499 < len__10087__auto___31498)){
args__10094__auto__.push((arguments[i__10088__auto___31499]));

var G__31500 = (i__10088__auto___31499 + (1));
i__10088__auto___31499 = G__31500;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31497))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31497){
return (function (args){
return cljs.core.deref(g__31283__auto___31497);
});})(g__31283__auto___31497))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31283__auto___31497){
return (function (seq31425){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31425));
});})(g__31283__auto___31497))
;


var g__31283__auto___31501 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31283__auto___31501){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31502 = arguments.length;
var i__10088__auto___31503 = (0);
while(true){
if((i__10088__auto___31503 < len__10087__auto___31502)){
args__10094__auto__.push((arguments[i__10088__auto___31503]));

var G__31504 = (i__10088__auto___31503 + (1));
i__10088__auto___31503 = G__31504;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31501))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31501){
return (function (args){
return cljs.core.deref(g__31283__auto___31501);
});})(g__31283__auto___31501))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31283__auto___31501){
return (function (seq31426){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31426));
});})(g__31283__auto___31501))
;


var g__31283__auto___31505 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31283__auto___31505){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31506 = arguments.length;
var i__10088__auto___31507 = (0);
while(true){
if((i__10088__auto___31507 < len__10087__auto___31506)){
args__10094__auto__.push((arguments[i__10088__auto___31507]));

var G__31508 = (i__10088__auto___31507 + (1));
i__10088__auto___31507 = G__31508;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31505))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31505){
return (function (args){
return cljs.core.deref(g__31283__auto___31505);
});})(g__31283__auto___31505))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31283__auto___31505){
return (function (seq31427){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31427));
});})(g__31283__auto___31505))
;


var g__31283__auto___31509 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31283__auto___31509){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31510 = arguments.length;
var i__10088__auto___31511 = (0);
while(true){
if((i__10088__auto___31511 < len__10087__auto___31510)){
args__10094__auto__.push((arguments[i__10088__auto___31511]));

var G__31512 = (i__10088__auto___31511 + (1));
i__10088__auto___31511 = G__31512;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});})(g__31283__auto___31509))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31283__auto___31509){
return (function (args){
return cljs.core.deref(g__31283__auto___31509);
});})(g__31283__auto___31509))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31283__auto___31509){
return (function (seq31428){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31428));
});})(g__31283__auto___31509))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__10094__auto__ = [];
var len__10087__auto___31515 = arguments.length;
var i__10088__auto___31516 = (0);
while(true){
if((i__10088__auto___31516 < len__10087__auto___31515)){
args__10094__auto__.push((arguments[i__10088__auto___31516]));

var G__31517 = (i__10088__auto___31516 + (1));
i__10088__auto___31516 = G__31517;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__31513_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__31513_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq31514){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31514));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__31518_SHARP_){
return (new Date(p1__31518_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
