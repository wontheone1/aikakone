// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__29470){
var vec__29471 = p__29470;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29471,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29471,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__29474 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__5457__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__29477 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29477,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29477,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29477,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29477,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29477,(4),null);
var vec__29480 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8808__auto__ = source;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8808__auto__ = line;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8808__auto__ = col;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__29483 = segmap;
var map__29483__$1 = ((((!((map__29483 == null)))?((((map__29483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29483):map__29483);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29483__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29483__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29483__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29483__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29483__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__29483,map__29483__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__29483,map__29483__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__29483,map__29483__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__29483,map__29483__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__29483,map__29483__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__29483,map__29483__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__29486 = arguments.length;
switch (G__29486) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__29487 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__29491 = cljs.core.next(segs__$1);
var G__29492 = nrelseg;
var G__29493 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__29491;
relseg__$1 = G__29492;
result__$1 = G__29493;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29487,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29487,(1),null);
var G__29494 = (gline + (1));
var G__29495 = cljs.core.next(lines__$1);
var G__29496 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__29497 = result__$1;
gline = G__29494;
lines__$1 = G__29495;
relseg = G__29496;
result = G__29497;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__29499 = segmap;
var map__29499__$1 = ((((!((map__29499 == null)))?((((map__29499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29499):map__29499);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29499__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29499__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29499__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29499__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29499__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__29499,map__29499__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__29499,map__29499__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__29498_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29498_SHARP_,d__$1);
});})(map__29499,map__29499__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__29499,map__29499__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__29502 = arguments.length;
switch (G__29502) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__29503 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__29507 = cljs.core.next(segs__$1);
var G__29508 = nrelseg;
var G__29509 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__29507;
relseg__$1 = G__29508;
result__$1 = G__29509;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29503,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29503,(1),null);
var G__29510 = (gline + (1));
var G__29511 = cljs.core.next(lines__$1);
var G__29512 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__29513 = result__$1;
gline = G__29510;
lines__$1 = G__29511;
relseg = G__29512;
result = G__29513;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__29514){
var vec__29515 = p__29514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29515,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29515,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29515,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29515,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29515,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__29518){
var vec__29519 = p__29518;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29519,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29519,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29519,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29519,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29519,(4),null);
var seg = vec__29519;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__29519,gcol,sidx,line,col,name,seg,relseg){
return (function (p__29522){
var vec__29523 = p__29522;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29523,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29523,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29523,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29523,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29523,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__29519,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__8808__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__29529 = cljs.core.seq(infos);
var chunk__29530 = null;
var count__29531 = (0);
var i__29532 = (0);
while(true){
if((i__29532 < count__29531)){
var info = chunk__29530.cljs$core$IIndexed$_nth$arity$2(null,i__29532);
var segv_29614 = info__GT_segv(info,source_idx,line,col);
var gline_29615 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_29616 = cljs.core.count(cljs.core.deref(lines));
if((gline_29615 > (lc_29616 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29529,chunk__29530,count__29531,i__29532,segv_29614,gline_29615,lc_29616,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_29615 - (lc_29616 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_29614], null));
});})(seq__29529,chunk__29530,count__29531,i__29532,segv_29614,gline_29615,lc_29616,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29529,chunk__29530,count__29531,i__29532,segv_29614,gline_29615,lc_29616,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29615], null),cljs.core.conj,segv_29614);
});})(seq__29529,chunk__29530,count__29531,i__29532,segv_29614,gline_29615,lc_29616,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__29617 = seq__29529;
var G__29618 = chunk__29530;
var G__29619 = count__29531;
var G__29620 = (i__29532 + (1));
seq__29529 = G__29617;
chunk__29530 = G__29618;
count__29531 = G__29619;
i__29532 = G__29620;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29529);
if(temp__5457__auto__){
var seq__29529__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29529__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__29529__$1);
var G__29621 = cljs.core.chunk_rest(seq__29529__$1);
var G__29622 = c__9739__auto__;
var G__29623 = cljs.core.count(c__9739__auto__);
var G__29624 = (0);
seq__29529 = G__29621;
chunk__29530 = G__29622;
count__29531 = G__29623;
i__29532 = G__29624;
continue;
} else {
var info = cljs.core.first(seq__29529__$1);
var segv_29625 = info__GT_segv(info,source_idx,line,col);
var gline_29626 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_29627 = cljs.core.count(cljs.core.deref(lines));
if((gline_29626 > (lc_29627 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29529,chunk__29530,count__29531,i__29532,segv_29625,gline_29626,lc_29627,info,seq__29529__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_29626 - (lc_29627 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_29625], null));
});})(seq__29529,chunk__29530,count__29531,i__29532,segv_29625,gline_29626,lc_29627,info,seq__29529__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__29529,chunk__29530,count__29531,i__29532,segv_29625,gline_29626,lc_29627,info,seq__29529__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29626], null),cljs.core.conj,segv_29625);
});})(seq__29529,chunk__29530,count__29531,i__29532,segv_29625,gline_29626,lc_29627,info,seq__29529__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__29628 = cljs.core.next(seq__29529__$1);
var G__29629 = null;
var G__29630 = (0);
var G__29631 = (0);
seq__29529 = G__29628;
chunk__29530 = G__29629;
count__29531 = G__29630;
i__29532 = G__29631;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__29533_29632 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__29534_29633 = null;
var count__29535_29634 = (0);
var i__29536_29635 = (0);
while(true){
if((i__29536_29635 < count__29535_29634)){
var vec__29537_29636 = chunk__29534_29633.cljs$core$IIndexed$_nth$arity$2(null,i__29536_29635);
var source_idx_29637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29537_29636,(0),null);
var vec__29540_29638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29537_29636,(1),null);
var __29639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29540_29638,(0),null);
var lines_29640__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29540_29638,(1),null);
var seq__29543_29641 = cljs.core.seq(lines_29640__$1);
var chunk__29544_29642 = null;
var count__29545_29643 = (0);
var i__29546_29644 = (0);
while(true){
if((i__29546_29644 < count__29545_29643)){
var vec__29547_29645 = chunk__29544_29642.cljs$core$IIndexed$_nth$arity$2(null,i__29546_29644);
var line_29646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29547_29645,(0),null);
var cols_29647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29547_29645,(1),null);
var seq__29550_29648 = cljs.core.seq(cols_29647);
var chunk__29551_29649 = null;
var count__29552_29650 = (0);
var i__29553_29651 = (0);
while(true){
if((i__29553_29651 < count__29552_29650)){
var vec__29554_29652 = chunk__29551_29649.cljs$core$IIndexed$_nth$arity$2(null,i__29553_29651);
var col_29653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29554_29652,(0),null);
var infos_29654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29554_29652,(1),null);
encode_cols(infos_29654,source_idx_29637,line_29646,col_29653);

var G__29655 = seq__29550_29648;
var G__29656 = chunk__29551_29649;
var G__29657 = count__29552_29650;
var G__29658 = (i__29553_29651 + (1));
seq__29550_29648 = G__29655;
chunk__29551_29649 = G__29656;
count__29552_29650 = G__29657;
i__29553_29651 = G__29658;
continue;
} else {
var temp__5457__auto___29659 = cljs.core.seq(seq__29550_29648);
if(temp__5457__auto___29659){
var seq__29550_29660__$1 = temp__5457__auto___29659;
if(cljs.core.chunked_seq_QMARK_(seq__29550_29660__$1)){
var c__9739__auto___29661 = cljs.core.chunk_first(seq__29550_29660__$1);
var G__29662 = cljs.core.chunk_rest(seq__29550_29660__$1);
var G__29663 = c__9739__auto___29661;
var G__29664 = cljs.core.count(c__9739__auto___29661);
var G__29665 = (0);
seq__29550_29648 = G__29662;
chunk__29551_29649 = G__29663;
count__29552_29650 = G__29664;
i__29553_29651 = G__29665;
continue;
} else {
var vec__29557_29666 = cljs.core.first(seq__29550_29660__$1);
var col_29667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557_29666,(0),null);
var infos_29668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557_29666,(1),null);
encode_cols(infos_29668,source_idx_29637,line_29646,col_29667);

var G__29669 = cljs.core.next(seq__29550_29660__$1);
var G__29670 = null;
var G__29671 = (0);
var G__29672 = (0);
seq__29550_29648 = G__29669;
chunk__29551_29649 = G__29670;
count__29552_29650 = G__29671;
i__29553_29651 = G__29672;
continue;
}
} else {
}
}
break;
}

var G__29673 = seq__29543_29641;
var G__29674 = chunk__29544_29642;
var G__29675 = count__29545_29643;
var G__29676 = (i__29546_29644 + (1));
seq__29543_29641 = G__29673;
chunk__29544_29642 = G__29674;
count__29545_29643 = G__29675;
i__29546_29644 = G__29676;
continue;
} else {
var temp__5457__auto___29677 = cljs.core.seq(seq__29543_29641);
if(temp__5457__auto___29677){
var seq__29543_29678__$1 = temp__5457__auto___29677;
if(cljs.core.chunked_seq_QMARK_(seq__29543_29678__$1)){
var c__9739__auto___29679 = cljs.core.chunk_first(seq__29543_29678__$1);
var G__29680 = cljs.core.chunk_rest(seq__29543_29678__$1);
var G__29681 = c__9739__auto___29679;
var G__29682 = cljs.core.count(c__9739__auto___29679);
var G__29683 = (0);
seq__29543_29641 = G__29680;
chunk__29544_29642 = G__29681;
count__29545_29643 = G__29682;
i__29546_29644 = G__29683;
continue;
} else {
var vec__29560_29684 = cljs.core.first(seq__29543_29678__$1);
var line_29685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560_29684,(0),null);
var cols_29686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560_29684,(1),null);
var seq__29563_29687 = cljs.core.seq(cols_29686);
var chunk__29564_29688 = null;
var count__29565_29689 = (0);
var i__29566_29690 = (0);
while(true){
if((i__29566_29690 < count__29565_29689)){
var vec__29567_29691 = chunk__29564_29688.cljs$core$IIndexed$_nth$arity$2(null,i__29566_29690);
var col_29692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29567_29691,(0),null);
var infos_29693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29567_29691,(1),null);
encode_cols(infos_29693,source_idx_29637,line_29685,col_29692);

var G__29694 = seq__29563_29687;
var G__29695 = chunk__29564_29688;
var G__29696 = count__29565_29689;
var G__29697 = (i__29566_29690 + (1));
seq__29563_29687 = G__29694;
chunk__29564_29688 = G__29695;
count__29565_29689 = G__29696;
i__29566_29690 = G__29697;
continue;
} else {
var temp__5457__auto___29698__$1 = cljs.core.seq(seq__29563_29687);
if(temp__5457__auto___29698__$1){
var seq__29563_29699__$1 = temp__5457__auto___29698__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29563_29699__$1)){
var c__9739__auto___29700 = cljs.core.chunk_first(seq__29563_29699__$1);
var G__29701 = cljs.core.chunk_rest(seq__29563_29699__$1);
var G__29702 = c__9739__auto___29700;
var G__29703 = cljs.core.count(c__9739__auto___29700);
var G__29704 = (0);
seq__29563_29687 = G__29701;
chunk__29564_29688 = G__29702;
count__29565_29689 = G__29703;
i__29566_29690 = G__29704;
continue;
} else {
var vec__29570_29705 = cljs.core.first(seq__29563_29699__$1);
var col_29706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29570_29705,(0),null);
var infos_29707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29570_29705,(1),null);
encode_cols(infos_29707,source_idx_29637,line_29685,col_29706);

var G__29708 = cljs.core.next(seq__29563_29699__$1);
var G__29709 = null;
var G__29710 = (0);
var G__29711 = (0);
seq__29563_29687 = G__29708;
chunk__29564_29688 = G__29709;
count__29565_29689 = G__29710;
i__29566_29690 = G__29711;
continue;
}
} else {
}
}
break;
}

var G__29712 = cljs.core.next(seq__29543_29678__$1);
var G__29713 = null;
var G__29714 = (0);
var G__29715 = (0);
seq__29543_29641 = G__29712;
chunk__29544_29642 = G__29713;
count__29545_29643 = G__29714;
i__29546_29644 = G__29715;
continue;
}
} else {
}
}
break;
}

var G__29716 = seq__29533_29632;
var G__29717 = chunk__29534_29633;
var G__29718 = count__29535_29634;
var G__29719 = (i__29536_29635 + (1));
seq__29533_29632 = G__29716;
chunk__29534_29633 = G__29717;
count__29535_29634 = G__29718;
i__29536_29635 = G__29719;
continue;
} else {
var temp__5457__auto___29720 = cljs.core.seq(seq__29533_29632);
if(temp__5457__auto___29720){
var seq__29533_29721__$1 = temp__5457__auto___29720;
if(cljs.core.chunked_seq_QMARK_(seq__29533_29721__$1)){
var c__9739__auto___29722 = cljs.core.chunk_first(seq__29533_29721__$1);
var G__29723 = cljs.core.chunk_rest(seq__29533_29721__$1);
var G__29724 = c__9739__auto___29722;
var G__29725 = cljs.core.count(c__9739__auto___29722);
var G__29726 = (0);
seq__29533_29632 = G__29723;
chunk__29534_29633 = G__29724;
count__29535_29634 = G__29725;
i__29536_29635 = G__29726;
continue;
} else {
var vec__29573_29727 = cljs.core.first(seq__29533_29721__$1);
var source_idx_29728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29573_29727,(0),null);
var vec__29576_29729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29573_29727,(1),null);
var __29730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29576_29729,(0),null);
var lines_29731__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29576_29729,(1),null);
var seq__29579_29732 = cljs.core.seq(lines_29731__$1);
var chunk__29580_29733 = null;
var count__29581_29734 = (0);
var i__29582_29735 = (0);
while(true){
if((i__29582_29735 < count__29581_29734)){
var vec__29583_29736 = chunk__29580_29733.cljs$core$IIndexed$_nth$arity$2(null,i__29582_29735);
var line_29737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29583_29736,(0),null);
var cols_29738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29583_29736,(1),null);
var seq__29586_29739 = cljs.core.seq(cols_29738);
var chunk__29587_29740 = null;
var count__29588_29741 = (0);
var i__29589_29742 = (0);
while(true){
if((i__29589_29742 < count__29588_29741)){
var vec__29590_29743 = chunk__29587_29740.cljs$core$IIndexed$_nth$arity$2(null,i__29589_29742);
var col_29744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29590_29743,(0),null);
var infos_29745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29590_29743,(1),null);
encode_cols(infos_29745,source_idx_29728,line_29737,col_29744);

var G__29746 = seq__29586_29739;
var G__29747 = chunk__29587_29740;
var G__29748 = count__29588_29741;
var G__29749 = (i__29589_29742 + (1));
seq__29586_29739 = G__29746;
chunk__29587_29740 = G__29747;
count__29588_29741 = G__29748;
i__29589_29742 = G__29749;
continue;
} else {
var temp__5457__auto___29750__$1 = cljs.core.seq(seq__29586_29739);
if(temp__5457__auto___29750__$1){
var seq__29586_29751__$1 = temp__5457__auto___29750__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29586_29751__$1)){
var c__9739__auto___29752 = cljs.core.chunk_first(seq__29586_29751__$1);
var G__29753 = cljs.core.chunk_rest(seq__29586_29751__$1);
var G__29754 = c__9739__auto___29752;
var G__29755 = cljs.core.count(c__9739__auto___29752);
var G__29756 = (0);
seq__29586_29739 = G__29753;
chunk__29587_29740 = G__29754;
count__29588_29741 = G__29755;
i__29589_29742 = G__29756;
continue;
} else {
var vec__29593_29757 = cljs.core.first(seq__29586_29751__$1);
var col_29758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593_29757,(0),null);
var infos_29759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593_29757,(1),null);
encode_cols(infos_29759,source_idx_29728,line_29737,col_29758);

var G__29760 = cljs.core.next(seq__29586_29751__$1);
var G__29761 = null;
var G__29762 = (0);
var G__29763 = (0);
seq__29586_29739 = G__29760;
chunk__29587_29740 = G__29761;
count__29588_29741 = G__29762;
i__29589_29742 = G__29763;
continue;
}
} else {
}
}
break;
}

var G__29764 = seq__29579_29732;
var G__29765 = chunk__29580_29733;
var G__29766 = count__29581_29734;
var G__29767 = (i__29582_29735 + (1));
seq__29579_29732 = G__29764;
chunk__29580_29733 = G__29765;
count__29581_29734 = G__29766;
i__29582_29735 = G__29767;
continue;
} else {
var temp__5457__auto___29768__$1 = cljs.core.seq(seq__29579_29732);
if(temp__5457__auto___29768__$1){
var seq__29579_29769__$1 = temp__5457__auto___29768__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29579_29769__$1)){
var c__9739__auto___29770 = cljs.core.chunk_first(seq__29579_29769__$1);
var G__29771 = cljs.core.chunk_rest(seq__29579_29769__$1);
var G__29772 = c__9739__auto___29770;
var G__29773 = cljs.core.count(c__9739__auto___29770);
var G__29774 = (0);
seq__29579_29732 = G__29771;
chunk__29580_29733 = G__29772;
count__29581_29734 = G__29773;
i__29582_29735 = G__29774;
continue;
} else {
var vec__29596_29775 = cljs.core.first(seq__29579_29769__$1);
var line_29776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29596_29775,(0),null);
var cols_29777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29596_29775,(1),null);
var seq__29599_29778 = cljs.core.seq(cols_29777);
var chunk__29600_29779 = null;
var count__29601_29780 = (0);
var i__29602_29781 = (0);
while(true){
if((i__29602_29781 < count__29601_29780)){
var vec__29603_29782 = chunk__29600_29779.cljs$core$IIndexed$_nth$arity$2(null,i__29602_29781);
var col_29783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29603_29782,(0),null);
var infos_29784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29603_29782,(1),null);
encode_cols(infos_29784,source_idx_29728,line_29776,col_29783);

var G__29785 = seq__29599_29778;
var G__29786 = chunk__29600_29779;
var G__29787 = count__29601_29780;
var G__29788 = (i__29602_29781 + (1));
seq__29599_29778 = G__29785;
chunk__29600_29779 = G__29786;
count__29601_29780 = G__29787;
i__29602_29781 = G__29788;
continue;
} else {
var temp__5457__auto___29789__$2 = cljs.core.seq(seq__29599_29778);
if(temp__5457__auto___29789__$2){
var seq__29599_29790__$1 = temp__5457__auto___29789__$2;
if(cljs.core.chunked_seq_QMARK_(seq__29599_29790__$1)){
var c__9739__auto___29791 = cljs.core.chunk_first(seq__29599_29790__$1);
var G__29792 = cljs.core.chunk_rest(seq__29599_29790__$1);
var G__29793 = c__9739__auto___29791;
var G__29794 = cljs.core.count(c__9739__auto___29791);
var G__29795 = (0);
seq__29599_29778 = G__29792;
chunk__29600_29779 = G__29793;
count__29601_29780 = G__29794;
i__29602_29781 = G__29795;
continue;
} else {
var vec__29606_29796 = cljs.core.first(seq__29599_29790__$1);
var col_29797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29606_29796,(0),null);
var infos_29798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29606_29796,(1),null);
encode_cols(infos_29798,source_idx_29728,line_29776,col_29797);

var G__29799 = cljs.core.next(seq__29599_29790__$1);
var G__29800 = null;
var G__29801 = (0);
var G__29802 = (0);
seq__29599_29778 = G__29799;
chunk__29600_29779 = G__29800;
count__29601_29780 = G__29801;
i__29602_29781 = G__29802;
continue;
}
} else {
}
}
break;
}

var G__29803 = cljs.core.next(seq__29579_29769__$1);
var G__29804 = null;
var G__29805 = (0);
var G__29806 = (0);
seq__29579_29732 = G__29803;
chunk__29580_29733 = G__29804;
count__29581_29734 = G__29805;
i__29582_29735 = G__29806;
continue;
}
} else {
}
}
break;
}

var G__29807 = cljs.core.next(seq__29533_29721__$1);
var G__29808 = null;
var G__29809 = (0);
var G__29810 = (0);
seq__29533_29632 = G__29807;
chunk__29534_29633 = G__29808;
count__29535_29634 = G__29809;
i__29536_29635 = G__29810;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__29609 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29526_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29526_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29527_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29527_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__29528_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__29528_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__29610 = G__29609;
var G__29611_29811 = G__29610;
var G__29612_29812 = "sourcesContent";
var G__29613_29813 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__29611_29811,G__29612_29812,G__29613_29813);

return G__29610;
} else {
return G__29609;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__29814 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29814,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29814,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__29817 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(1),null);
var G__29823 = cljs.core.next(col_map_seq);
var G__29824 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__29817,col,infos,vec__29814,line,col_map){
return (function (v,p__29820){
var map__29821 = p__29820;
var map__29821__$1 = ((((!((map__29821 == null)))?((((map__29821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29821):map__29821);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29821__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29821__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__29817,col,infos,vec__29814,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__29823;
new_cols = G__29824;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__29825 = cljs.core.next(line_map_seq);
var G__29826 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__29825;
new_lines = G__29826;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__29827_29889 = cljs.core.seq(reverse_map);
var chunk__29828_29890 = null;
var count__29829_29891 = (0);
var i__29830_29892 = (0);
while(true){
if((i__29830_29892 < count__29829_29891)){
var vec__29831_29893 = chunk__29828_29890.cljs$core$IIndexed$_nth$arity$2(null,i__29830_29892);
var line_29894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29831_29893,(0),null);
var columns_29895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29831_29893,(1),null);
var seq__29834_29896 = cljs.core.seq(columns_29895);
var chunk__29835_29897 = null;
var count__29836_29898 = (0);
var i__29837_29899 = (0);
while(true){
if((i__29837_29899 < count__29836_29898)){
var vec__29838_29900 = chunk__29835_29897.cljs$core$IIndexed$_nth$arity$2(null,i__29837_29899);
var column_29901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29838_29900,(0),null);
var column_info_29902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29838_29900,(1),null);
var seq__29841_29903 = cljs.core.seq(column_info_29902);
var chunk__29842_29904 = null;
var count__29843_29905 = (0);
var i__29844_29906 = (0);
while(true){
if((i__29844_29906 < count__29843_29905)){
var map__29845_29907 = chunk__29842_29904.cljs$core$IIndexed$_nth$arity$2(null,i__29844_29906);
var map__29845_29908__$1 = ((((!((map__29845_29907 == null)))?((((map__29845_29907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29845_29907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29845_29907):map__29845_29907);
var gline_29909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29845_29908__$1,cljs.core.cst$kw$gline);
var gcol_29910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29845_29908__$1,cljs.core.cst$kw$gcol);
var name_29911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29845_29908__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29909], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__29841_29903,chunk__29842_29904,count__29843_29905,i__29844_29906,seq__29834_29896,chunk__29835_29897,count__29836_29898,i__29837_29899,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29845_29907,map__29845_29908__$1,gline_29909,gcol_29910,name_29911,vec__29838_29900,column_29901,column_info_29902,vec__29831_29893,line_29894,columns_29895,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29910], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_29894,cljs.core.cst$kw$col,column_29901,cljs.core.cst$kw$name,name_29911], null));
});})(seq__29841_29903,chunk__29842_29904,count__29843_29905,i__29844_29906,seq__29834_29896,chunk__29835_29897,count__29836_29898,i__29837_29899,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29845_29907,map__29845_29908__$1,gline_29909,gcol_29910,name_29911,vec__29838_29900,column_29901,column_info_29902,vec__29831_29893,line_29894,columns_29895,inverted))
,cljs.core.sorted_map()));

var G__29912 = seq__29841_29903;
var G__29913 = chunk__29842_29904;
var G__29914 = count__29843_29905;
var G__29915 = (i__29844_29906 + (1));
seq__29841_29903 = G__29912;
chunk__29842_29904 = G__29913;
count__29843_29905 = G__29914;
i__29844_29906 = G__29915;
continue;
} else {
var temp__5457__auto___29916 = cljs.core.seq(seq__29841_29903);
if(temp__5457__auto___29916){
var seq__29841_29917__$1 = temp__5457__auto___29916;
if(cljs.core.chunked_seq_QMARK_(seq__29841_29917__$1)){
var c__9739__auto___29918 = cljs.core.chunk_first(seq__29841_29917__$1);
var G__29919 = cljs.core.chunk_rest(seq__29841_29917__$1);
var G__29920 = c__9739__auto___29918;
var G__29921 = cljs.core.count(c__9739__auto___29918);
var G__29922 = (0);
seq__29841_29903 = G__29919;
chunk__29842_29904 = G__29920;
count__29843_29905 = G__29921;
i__29844_29906 = G__29922;
continue;
} else {
var map__29847_29923 = cljs.core.first(seq__29841_29917__$1);
var map__29847_29924__$1 = ((((!((map__29847_29923 == null)))?((((map__29847_29923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29847_29923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29847_29923):map__29847_29923);
var gline_29925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29847_29924__$1,cljs.core.cst$kw$gline);
var gcol_29926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29847_29924__$1,cljs.core.cst$kw$gcol);
var name_29927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29847_29924__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29925], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__29841_29903,chunk__29842_29904,count__29843_29905,i__29844_29906,seq__29834_29896,chunk__29835_29897,count__29836_29898,i__29837_29899,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29847_29923,map__29847_29924__$1,gline_29925,gcol_29926,name_29927,seq__29841_29917__$1,temp__5457__auto___29916,vec__29838_29900,column_29901,column_info_29902,vec__29831_29893,line_29894,columns_29895,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29926], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_29894,cljs.core.cst$kw$col,column_29901,cljs.core.cst$kw$name,name_29927], null));
});})(seq__29841_29903,chunk__29842_29904,count__29843_29905,i__29844_29906,seq__29834_29896,chunk__29835_29897,count__29836_29898,i__29837_29899,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29847_29923,map__29847_29924__$1,gline_29925,gcol_29926,name_29927,seq__29841_29917__$1,temp__5457__auto___29916,vec__29838_29900,column_29901,column_info_29902,vec__29831_29893,line_29894,columns_29895,inverted))
,cljs.core.sorted_map()));

var G__29928 = cljs.core.next(seq__29841_29917__$1);
var G__29929 = null;
var G__29930 = (0);
var G__29931 = (0);
seq__29841_29903 = G__29928;
chunk__29842_29904 = G__29929;
count__29843_29905 = G__29930;
i__29844_29906 = G__29931;
continue;
}
} else {
}
}
break;
}

var G__29932 = seq__29834_29896;
var G__29933 = chunk__29835_29897;
var G__29934 = count__29836_29898;
var G__29935 = (i__29837_29899 + (1));
seq__29834_29896 = G__29932;
chunk__29835_29897 = G__29933;
count__29836_29898 = G__29934;
i__29837_29899 = G__29935;
continue;
} else {
var temp__5457__auto___29936 = cljs.core.seq(seq__29834_29896);
if(temp__5457__auto___29936){
var seq__29834_29937__$1 = temp__5457__auto___29936;
if(cljs.core.chunked_seq_QMARK_(seq__29834_29937__$1)){
var c__9739__auto___29938 = cljs.core.chunk_first(seq__29834_29937__$1);
var G__29939 = cljs.core.chunk_rest(seq__29834_29937__$1);
var G__29940 = c__9739__auto___29938;
var G__29941 = cljs.core.count(c__9739__auto___29938);
var G__29942 = (0);
seq__29834_29896 = G__29939;
chunk__29835_29897 = G__29940;
count__29836_29898 = G__29941;
i__29837_29899 = G__29942;
continue;
} else {
var vec__29849_29943 = cljs.core.first(seq__29834_29937__$1);
var column_29944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29849_29943,(0),null);
var column_info_29945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29849_29943,(1),null);
var seq__29852_29946 = cljs.core.seq(column_info_29945);
var chunk__29853_29947 = null;
var count__29854_29948 = (0);
var i__29855_29949 = (0);
while(true){
if((i__29855_29949 < count__29854_29948)){
var map__29856_29950 = chunk__29853_29947.cljs$core$IIndexed$_nth$arity$2(null,i__29855_29949);
var map__29856_29951__$1 = ((((!((map__29856_29950 == null)))?((((map__29856_29950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29856_29950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29856_29950):map__29856_29950);
var gline_29952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29856_29951__$1,cljs.core.cst$kw$gline);
var gcol_29953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29856_29951__$1,cljs.core.cst$kw$gcol);
var name_29954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29856_29951__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29952], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__29852_29946,chunk__29853_29947,count__29854_29948,i__29855_29949,seq__29834_29896,chunk__29835_29897,count__29836_29898,i__29837_29899,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29856_29950,map__29856_29951__$1,gline_29952,gcol_29953,name_29954,vec__29849_29943,column_29944,column_info_29945,seq__29834_29937__$1,temp__5457__auto___29936,vec__29831_29893,line_29894,columns_29895,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29953], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_29894,cljs.core.cst$kw$col,column_29944,cljs.core.cst$kw$name,name_29954], null));
});})(seq__29852_29946,chunk__29853_29947,count__29854_29948,i__29855_29949,seq__29834_29896,chunk__29835_29897,count__29836_29898,i__29837_29899,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29856_29950,map__29856_29951__$1,gline_29952,gcol_29953,name_29954,vec__29849_29943,column_29944,column_info_29945,seq__29834_29937__$1,temp__5457__auto___29936,vec__29831_29893,line_29894,columns_29895,inverted))
,cljs.core.sorted_map()));

var G__29955 = seq__29852_29946;
var G__29956 = chunk__29853_29947;
var G__29957 = count__29854_29948;
var G__29958 = (i__29855_29949 + (1));
seq__29852_29946 = G__29955;
chunk__29853_29947 = G__29956;
count__29854_29948 = G__29957;
i__29855_29949 = G__29958;
continue;
} else {
var temp__5457__auto___29959__$1 = cljs.core.seq(seq__29852_29946);
if(temp__5457__auto___29959__$1){
var seq__29852_29960__$1 = temp__5457__auto___29959__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29852_29960__$1)){
var c__9739__auto___29961 = cljs.core.chunk_first(seq__29852_29960__$1);
var G__29962 = cljs.core.chunk_rest(seq__29852_29960__$1);
var G__29963 = c__9739__auto___29961;
var G__29964 = cljs.core.count(c__9739__auto___29961);
var G__29965 = (0);
seq__29852_29946 = G__29962;
chunk__29853_29947 = G__29963;
count__29854_29948 = G__29964;
i__29855_29949 = G__29965;
continue;
} else {
var map__29858_29966 = cljs.core.first(seq__29852_29960__$1);
var map__29858_29967__$1 = ((((!((map__29858_29966 == null)))?((((map__29858_29966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29858_29966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29858_29966):map__29858_29966);
var gline_29968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858_29967__$1,cljs.core.cst$kw$gline);
var gcol_29969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858_29967__$1,cljs.core.cst$kw$gcol);
var name_29970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858_29967__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29968], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__29852_29946,chunk__29853_29947,count__29854_29948,i__29855_29949,seq__29834_29896,chunk__29835_29897,count__29836_29898,i__29837_29899,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29858_29966,map__29858_29967__$1,gline_29968,gcol_29969,name_29970,seq__29852_29960__$1,temp__5457__auto___29959__$1,vec__29849_29943,column_29944,column_info_29945,seq__29834_29937__$1,temp__5457__auto___29936,vec__29831_29893,line_29894,columns_29895,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29969], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_29894,cljs.core.cst$kw$col,column_29944,cljs.core.cst$kw$name,name_29970], null));
});})(seq__29852_29946,chunk__29853_29947,count__29854_29948,i__29855_29949,seq__29834_29896,chunk__29835_29897,count__29836_29898,i__29837_29899,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29858_29966,map__29858_29967__$1,gline_29968,gcol_29969,name_29970,seq__29852_29960__$1,temp__5457__auto___29959__$1,vec__29849_29943,column_29944,column_info_29945,seq__29834_29937__$1,temp__5457__auto___29936,vec__29831_29893,line_29894,columns_29895,inverted))
,cljs.core.sorted_map()));

var G__29971 = cljs.core.next(seq__29852_29960__$1);
var G__29972 = null;
var G__29973 = (0);
var G__29974 = (0);
seq__29852_29946 = G__29971;
chunk__29853_29947 = G__29972;
count__29854_29948 = G__29973;
i__29855_29949 = G__29974;
continue;
}
} else {
}
}
break;
}

var G__29975 = cljs.core.next(seq__29834_29937__$1);
var G__29976 = null;
var G__29977 = (0);
var G__29978 = (0);
seq__29834_29896 = G__29975;
chunk__29835_29897 = G__29976;
count__29836_29898 = G__29977;
i__29837_29899 = G__29978;
continue;
}
} else {
}
}
break;
}

var G__29979 = seq__29827_29889;
var G__29980 = chunk__29828_29890;
var G__29981 = count__29829_29891;
var G__29982 = (i__29830_29892 + (1));
seq__29827_29889 = G__29979;
chunk__29828_29890 = G__29980;
count__29829_29891 = G__29981;
i__29830_29892 = G__29982;
continue;
} else {
var temp__5457__auto___29983 = cljs.core.seq(seq__29827_29889);
if(temp__5457__auto___29983){
var seq__29827_29984__$1 = temp__5457__auto___29983;
if(cljs.core.chunked_seq_QMARK_(seq__29827_29984__$1)){
var c__9739__auto___29985 = cljs.core.chunk_first(seq__29827_29984__$1);
var G__29986 = cljs.core.chunk_rest(seq__29827_29984__$1);
var G__29987 = c__9739__auto___29985;
var G__29988 = cljs.core.count(c__9739__auto___29985);
var G__29989 = (0);
seq__29827_29889 = G__29986;
chunk__29828_29890 = G__29987;
count__29829_29891 = G__29988;
i__29830_29892 = G__29989;
continue;
} else {
var vec__29860_29990 = cljs.core.first(seq__29827_29984__$1);
var line_29991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29860_29990,(0),null);
var columns_29992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29860_29990,(1),null);
var seq__29863_29993 = cljs.core.seq(columns_29992);
var chunk__29864_29994 = null;
var count__29865_29995 = (0);
var i__29866_29996 = (0);
while(true){
if((i__29866_29996 < count__29865_29995)){
var vec__29867_29997 = chunk__29864_29994.cljs$core$IIndexed$_nth$arity$2(null,i__29866_29996);
var column_29998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29867_29997,(0),null);
var column_info_29999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29867_29997,(1),null);
var seq__29870_30000 = cljs.core.seq(column_info_29999);
var chunk__29871_30001 = null;
var count__29872_30002 = (0);
var i__29873_30003 = (0);
while(true){
if((i__29873_30003 < count__29872_30002)){
var map__29874_30004 = chunk__29871_30001.cljs$core$IIndexed$_nth$arity$2(null,i__29873_30003);
var map__29874_30005__$1 = ((((!((map__29874_30004 == null)))?((((map__29874_30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29874_30004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29874_30004):map__29874_30004);
var gline_30006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29874_30005__$1,cljs.core.cst$kw$gline);
var gcol_30007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29874_30005__$1,cljs.core.cst$kw$gcol);
var name_30008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29874_30005__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30006], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__29870_30000,chunk__29871_30001,count__29872_30002,i__29873_30003,seq__29863_29993,chunk__29864_29994,count__29865_29995,i__29866_29996,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29874_30004,map__29874_30005__$1,gline_30006,gcol_30007,name_30008,vec__29867_29997,column_29998,column_info_29999,vec__29860_29990,line_29991,columns_29992,seq__29827_29984__$1,temp__5457__auto___29983,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30007], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_29991,cljs.core.cst$kw$col,column_29998,cljs.core.cst$kw$name,name_30008], null));
});})(seq__29870_30000,chunk__29871_30001,count__29872_30002,i__29873_30003,seq__29863_29993,chunk__29864_29994,count__29865_29995,i__29866_29996,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29874_30004,map__29874_30005__$1,gline_30006,gcol_30007,name_30008,vec__29867_29997,column_29998,column_info_29999,vec__29860_29990,line_29991,columns_29992,seq__29827_29984__$1,temp__5457__auto___29983,inverted))
,cljs.core.sorted_map()));

var G__30009 = seq__29870_30000;
var G__30010 = chunk__29871_30001;
var G__30011 = count__29872_30002;
var G__30012 = (i__29873_30003 + (1));
seq__29870_30000 = G__30009;
chunk__29871_30001 = G__30010;
count__29872_30002 = G__30011;
i__29873_30003 = G__30012;
continue;
} else {
var temp__5457__auto___30013__$1 = cljs.core.seq(seq__29870_30000);
if(temp__5457__auto___30013__$1){
var seq__29870_30014__$1 = temp__5457__auto___30013__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29870_30014__$1)){
var c__9739__auto___30015 = cljs.core.chunk_first(seq__29870_30014__$1);
var G__30016 = cljs.core.chunk_rest(seq__29870_30014__$1);
var G__30017 = c__9739__auto___30015;
var G__30018 = cljs.core.count(c__9739__auto___30015);
var G__30019 = (0);
seq__29870_30000 = G__30016;
chunk__29871_30001 = G__30017;
count__29872_30002 = G__30018;
i__29873_30003 = G__30019;
continue;
} else {
var map__29876_30020 = cljs.core.first(seq__29870_30014__$1);
var map__29876_30021__$1 = ((((!((map__29876_30020 == null)))?((((map__29876_30020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29876_30020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29876_30020):map__29876_30020);
var gline_30022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29876_30021__$1,cljs.core.cst$kw$gline);
var gcol_30023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29876_30021__$1,cljs.core.cst$kw$gcol);
var name_30024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29876_30021__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30022], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__29870_30000,chunk__29871_30001,count__29872_30002,i__29873_30003,seq__29863_29993,chunk__29864_29994,count__29865_29995,i__29866_29996,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29876_30020,map__29876_30021__$1,gline_30022,gcol_30023,name_30024,seq__29870_30014__$1,temp__5457__auto___30013__$1,vec__29867_29997,column_29998,column_info_29999,vec__29860_29990,line_29991,columns_29992,seq__29827_29984__$1,temp__5457__auto___29983,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30023], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_29991,cljs.core.cst$kw$col,column_29998,cljs.core.cst$kw$name,name_30024], null));
});})(seq__29870_30000,chunk__29871_30001,count__29872_30002,i__29873_30003,seq__29863_29993,chunk__29864_29994,count__29865_29995,i__29866_29996,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29876_30020,map__29876_30021__$1,gline_30022,gcol_30023,name_30024,seq__29870_30014__$1,temp__5457__auto___30013__$1,vec__29867_29997,column_29998,column_info_29999,vec__29860_29990,line_29991,columns_29992,seq__29827_29984__$1,temp__5457__auto___29983,inverted))
,cljs.core.sorted_map()));

var G__30025 = cljs.core.next(seq__29870_30014__$1);
var G__30026 = null;
var G__30027 = (0);
var G__30028 = (0);
seq__29870_30000 = G__30025;
chunk__29871_30001 = G__30026;
count__29872_30002 = G__30027;
i__29873_30003 = G__30028;
continue;
}
} else {
}
}
break;
}

var G__30029 = seq__29863_29993;
var G__30030 = chunk__29864_29994;
var G__30031 = count__29865_29995;
var G__30032 = (i__29866_29996 + (1));
seq__29863_29993 = G__30029;
chunk__29864_29994 = G__30030;
count__29865_29995 = G__30031;
i__29866_29996 = G__30032;
continue;
} else {
var temp__5457__auto___30033__$1 = cljs.core.seq(seq__29863_29993);
if(temp__5457__auto___30033__$1){
var seq__29863_30034__$1 = temp__5457__auto___30033__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29863_30034__$1)){
var c__9739__auto___30035 = cljs.core.chunk_first(seq__29863_30034__$1);
var G__30036 = cljs.core.chunk_rest(seq__29863_30034__$1);
var G__30037 = c__9739__auto___30035;
var G__30038 = cljs.core.count(c__9739__auto___30035);
var G__30039 = (0);
seq__29863_29993 = G__30036;
chunk__29864_29994 = G__30037;
count__29865_29995 = G__30038;
i__29866_29996 = G__30039;
continue;
} else {
var vec__29878_30040 = cljs.core.first(seq__29863_30034__$1);
var column_30041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29878_30040,(0),null);
var column_info_30042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29878_30040,(1),null);
var seq__29881_30043 = cljs.core.seq(column_info_30042);
var chunk__29882_30044 = null;
var count__29883_30045 = (0);
var i__29884_30046 = (0);
while(true){
if((i__29884_30046 < count__29883_30045)){
var map__29885_30047 = chunk__29882_30044.cljs$core$IIndexed$_nth$arity$2(null,i__29884_30046);
var map__29885_30048__$1 = ((((!((map__29885_30047 == null)))?((((map__29885_30047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29885_30047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29885_30047):map__29885_30047);
var gline_30049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29885_30048__$1,cljs.core.cst$kw$gline);
var gcol_30050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29885_30048__$1,cljs.core.cst$kw$gcol);
var name_30051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29885_30048__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30049], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__29881_30043,chunk__29882_30044,count__29883_30045,i__29884_30046,seq__29863_29993,chunk__29864_29994,count__29865_29995,i__29866_29996,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29885_30047,map__29885_30048__$1,gline_30049,gcol_30050,name_30051,vec__29878_30040,column_30041,column_info_30042,seq__29863_30034__$1,temp__5457__auto___30033__$1,vec__29860_29990,line_29991,columns_29992,seq__29827_29984__$1,temp__5457__auto___29983,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30050], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_29991,cljs.core.cst$kw$col,column_30041,cljs.core.cst$kw$name,name_30051], null));
});})(seq__29881_30043,chunk__29882_30044,count__29883_30045,i__29884_30046,seq__29863_29993,chunk__29864_29994,count__29865_29995,i__29866_29996,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29885_30047,map__29885_30048__$1,gline_30049,gcol_30050,name_30051,vec__29878_30040,column_30041,column_info_30042,seq__29863_30034__$1,temp__5457__auto___30033__$1,vec__29860_29990,line_29991,columns_29992,seq__29827_29984__$1,temp__5457__auto___29983,inverted))
,cljs.core.sorted_map()));

var G__30052 = seq__29881_30043;
var G__30053 = chunk__29882_30044;
var G__30054 = count__29883_30045;
var G__30055 = (i__29884_30046 + (1));
seq__29881_30043 = G__30052;
chunk__29882_30044 = G__30053;
count__29883_30045 = G__30054;
i__29884_30046 = G__30055;
continue;
} else {
var temp__5457__auto___30056__$2 = cljs.core.seq(seq__29881_30043);
if(temp__5457__auto___30056__$2){
var seq__29881_30057__$1 = temp__5457__auto___30056__$2;
if(cljs.core.chunked_seq_QMARK_(seq__29881_30057__$1)){
var c__9739__auto___30058 = cljs.core.chunk_first(seq__29881_30057__$1);
var G__30059 = cljs.core.chunk_rest(seq__29881_30057__$1);
var G__30060 = c__9739__auto___30058;
var G__30061 = cljs.core.count(c__9739__auto___30058);
var G__30062 = (0);
seq__29881_30043 = G__30059;
chunk__29882_30044 = G__30060;
count__29883_30045 = G__30061;
i__29884_30046 = G__30062;
continue;
} else {
var map__29887_30063 = cljs.core.first(seq__29881_30057__$1);
var map__29887_30064__$1 = ((((!((map__29887_30063 == null)))?((((map__29887_30063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29887_30063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29887_30063):map__29887_30063);
var gline_30065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29887_30064__$1,cljs.core.cst$kw$gline);
var gcol_30066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29887_30064__$1,cljs.core.cst$kw$gcol);
var name_30067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29887_30064__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_30065], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__29881_30043,chunk__29882_30044,count__29883_30045,i__29884_30046,seq__29863_29993,chunk__29864_29994,count__29865_29995,i__29866_29996,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29887_30063,map__29887_30064__$1,gline_30065,gcol_30066,name_30067,seq__29881_30057__$1,temp__5457__auto___30056__$2,vec__29878_30040,column_30041,column_info_30042,seq__29863_30034__$1,temp__5457__auto___30033__$1,vec__29860_29990,line_29991,columns_29992,seq__29827_29984__$1,temp__5457__auto___29983,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_30066], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_29991,cljs.core.cst$kw$col,column_30041,cljs.core.cst$kw$name,name_30067], null));
});})(seq__29881_30043,chunk__29882_30044,count__29883_30045,i__29884_30046,seq__29863_29993,chunk__29864_29994,count__29865_29995,i__29866_29996,seq__29827_29889,chunk__29828_29890,count__29829_29891,i__29830_29892,map__29887_30063,map__29887_30064__$1,gline_30065,gcol_30066,name_30067,seq__29881_30057__$1,temp__5457__auto___30056__$2,vec__29878_30040,column_30041,column_info_30042,seq__29863_30034__$1,temp__5457__auto___30033__$1,vec__29860_29990,line_29991,columns_29992,seq__29827_29984__$1,temp__5457__auto___29983,inverted))
,cljs.core.sorted_map()));

var G__30068 = cljs.core.next(seq__29881_30057__$1);
var G__30069 = null;
var G__30070 = (0);
var G__30071 = (0);
seq__29881_30043 = G__30068;
chunk__29882_30044 = G__30069;
count__29883_30045 = G__30070;
i__29884_30046 = G__30071;
continue;
}
} else {
}
}
break;
}

var G__30072 = cljs.core.next(seq__29863_30034__$1);
var G__30073 = null;
var G__30074 = (0);
var G__30075 = (0);
seq__29863_29993 = G__30072;
chunk__29864_29994 = G__30073;
count__29865_29995 = G__30074;
i__29866_29996 = G__30075;
continue;
}
} else {
}
}
break;
}

var G__30076 = cljs.core.next(seq__29827_29984__$1);
var G__30077 = null;
var G__30078 = (0);
var G__30079 = (0);
seq__29827_29889 = G__30076;
chunk__29828_29890 = G__30077;
count__29829_29891 = G__30078;
i__29830_29892 = G__30079;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
