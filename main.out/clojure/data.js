// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__39853){
var vec__39854 = p__39853;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39854,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39854,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__39857 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39857,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39857,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39857,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__39861 = arguments.length;
switch (G__39861) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__9160__auto__ = cljs.core.count(a);
var y__9161__auto__ = cljs.core.count(b);
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__9541__auto__ = (((x == null))?null:x);
var m__9542__auto__ = (clojure.data.equality_partition[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__9542__auto__.call(null,x));
} else {
var m__9542__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__9542__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__9541__auto__ = (((a == null))?null:a);
var m__9542__auto__ = (clojure.data.diff_similar[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__9542__auto__.call(null,a,b));
} else {
var m__9542__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__9542__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__39863_39887 = clojure.data.equality_partition;
var G__39864_39888 = "null";
var G__39865_39889 = ((function (G__39863_39887,G__39864_39888){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__39863_39887,G__39864_39888))
;
goog.object.set(G__39863_39887,G__39864_39888,G__39865_39889);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__39866_39890 = clojure.data.equality_partition;
var G__39867_39891 = "string";
var G__39868_39892 = ((function (G__39866_39890,G__39867_39891){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__39866_39890,G__39867_39891))
;
goog.object.set(G__39866_39890,G__39867_39891,G__39868_39892);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__39869_39893 = clojure.data.equality_partition;
var G__39870_39894 = "number";
var G__39871_39895 = ((function (G__39869_39893,G__39870_39894){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__39869_39893,G__39870_39894))
;
goog.object.set(G__39869_39893,G__39870_39894,G__39871_39895);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__39872_39896 = clojure.data.equality_partition;
var G__39873_39897 = "array";
var G__39874_39898 = ((function (G__39872_39896,G__39873_39897){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__39872_39896,G__39873_39897))
;
goog.object.set(G__39872_39896,G__39873_39897,G__39874_39898);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__39875_39899 = clojure.data.equality_partition;
var G__39876_39900 = "function";
var G__39877_39901 = ((function (G__39875_39899,G__39876_39900){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__39875_39899,G__39876_39900))
;
goog.object.set(G__39875_39899,G__39876_39900,G__39877_39901);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__39878_39902 = clojure.data.equality_partition;
var G__39879_39903 = "boolean";
var G__39880_39904 = ((function (G__39878_39902,G__39879_39903){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__39878_39902,G__39879_39903))
;
goog.object.set(G__39878_39902,G__39879_39903,G__39880_39904);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__39881_39905 = clojure.data.equality_partition;
var G__39882_39906 = "_";
var G__39883_39907 = ((function (G__39881_39905,G__39882_39906){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__39881_39905,G__39882_39906))
;
goog.object.set(G__39881_39905,G__39882_39906,G__39883_39907);
goog.object.set(clojure.data.Diff,"null",true);

var G__39908_39932 = clojure.data.diff_similar;
var G__39909_39933 = "null";
var G__39910_39934 = ((function (G__39908_39932,G__39909_39933){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39908_39932,G__39909_39933))
;
goog.object.set(G__39908_39932,G__39909_39933,G__39910_39934);

goog.object.set(clojure.data.Diff,"string",true);

var G__39911_39935 = clojure.data.diff_similar;
var G__39912_39936 = "string";
var G__39913_39937 = ((function (G__39911_39935,G__39912_39936){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39911_39935,G__39912_39936))
;
goog.object.set(G__39911_39935,G__39912_39936,G__39913_39937);

goog.object.set(clojure.data.Diff,"number",true);

var G__39914_39938 = clojure.data.diff_similar;
var G__39915_39939 = "number";
var G__39916_39940 = ((function (G__39914_39938,G__39915_39939){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39914_39938,G__39915_39939))
;
goog.object.set(G__39914_39938,G__39915_39939,G__39916_39940);

goog.object.set(clojure.data.Diff,"array",true);

var G__39917_39941 = clojure.data.diff_similar;
var G__39918_39942 = "array";
var G__39919_39943 = ((function (G__39917_39941,G__39918_39942){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__39917_39941,G__39918_39942))
;
goog.object.set(G__39917_39941,G__39918_39942,G__39919_39943);

goog.object.set(clojure.data.Diff,"function",true);

var G__39920_39944 = clojure.data.diff_similar;
var G__39921_39945 = "function";
var G__39922_39946 = ((function (G__39920_39944,G__39921_39945){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39920_39944,G__39921_39945))
;
goog.object.set(G__39920_39944,G__39921_39945,G__39922_39946);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__39923_39947 = clojure.data.diff_similar;
var G__39924_39948 = "boolean";
var G__39925_39949 = ((function (G__39923_39947,G__39924_39948){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39923_39947,G__39924_39948))
;
goog.object.set(G__39923_39947,G__39924_39948,G__39925_39949);

goog.object.set(clojure.data.Diff,"_",true);

var G__39926_39950 = clojure.data.diff_similar;
var G__39927_39951 = "_";
var G__39928_39952 = ((function (G__39926_39950,G__39927_39951){
return (function (a,b){
var fexpr__39930 = (function (){var G__39931 = clojure.data.equality_partition(a);
var G__39931__$1 = (((G__39931 instanceof cljs.core.Keyword))?G__39931.fqn:null);
switch (G__39931__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39931__$1)].join('')));

}
})();
return (fexpr__39930.cljs$core$IFn$_invoke$arity$2 ? fexpr__39930.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__39930.call(null,a,b));
});})(G__39926_39950,G__39927_39951))
;
goog.object.set(G__39926_39950,G__39927_39951,G__39928_39952);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
