// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__10094__auto__ = [];
var len__10087__auto___15137 = arguments.length;
var i__10088__auto___15138 = (0);
while(true){
if((i__10088__auto___15138 < len__10087__auto___15137)){
args__10094__auto__.push((arguments[i__10088__auto___15138]));

var G__15139 = (i__10088__auto___15138 + (1));
i__10088__auto___15138 = G__15139;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq15136){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15136));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__10094__auto__ = [];
var len__10087__auto___15141 = arguments.length;
var i__10088__auto___15142 = (0);
while(true){
if((i__10088__auto___15142 < len__10087__auto___15141)){
args__10094__auto__.push((arguments[i__10088__auto___15142]));

var G__15143 = (i__10088__auto___15142 + (1));
i__10088__auto___15142 = G__15143;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq15140){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15140));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__15144 = cljs.core._EQ_;
var expr__15145 = c;
if(cljs.core.truth_((function (){var G__15147 = "\b";
var G__15148 = expr__15145;
return (pred__15144.cljs$core$IFn$_invoke$arity$2 ? pred__15144.cljs$core$IFn$_invoke$arity$2(G__15147,G__15148) : pred__15144.call(null,G__15147,G__15148));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__15149 = "\t";
var G__15150 = expr__15145;
return (pred__15144.cljs$core$IFn$_invoke$arity$2 ? pred__15144.cljs$core$IFn$_invoke$arity$2(G__15149,G__15150) : pred__15144.call(null,G__15149,G__15150));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__15151 = "\n";
var G__15152 = expr__15145;
return (pred__15144.cljs$core$IFn$_invoke$arity$2 ? pred__15144.cljs$core$IFn$_invoke$arity$2(G__15151,G__15152) : pred__15144.call(null,G__15151,G__15152));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__15153 = "\f";
var G__15154 = expr__15145;
return (pred__15144.cljs$core$IFn$_invoke$arity$2 ? pred__15144.cljs$core$IFn$_invoke$arity$2(G__15153,G__15154) : pred__15144.call(null,G__15153,G__15154));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__15155 = "\r";
var G__15156 = expr__15145;
return (pred__15144.cljs$core$IFn$_invoke$arity$2 ? pred__15144.cljs$core$IFn$_invoke$arity$2(G__15155,G__15156) : pred__15144.call(null,G__15155,G__15156));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__15157 = "\"";
var G__15158 = expr__15145;
return (pred__15144.cljs$core$IFn$_invoke$arity$2 ? pred__15144.cljs$core$IFn$_invoke$arity$2(G__15157,G__15158) : pred__15144.call(null,G__15157,G__15158));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__15159 = "\\";
var G__15160 = expr__15145;
return (pred__15144.cljs$core$IFn$_invoke$arity$2 ? pred__15144.cljs$core$IFn$_invoke$arity$2(G__15159,G__15160) : pred__15144.call(null,G__15159,G__15160));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__10094__auto__ = [];
var len__10087__auto___15162 = arguments.length;
var i__10088__auto___15163 = (0);
while(true){
if((i__10088__auto___15163 < len__10087__auto___15162)){
args__10094__auto__.push((arguments[i__10088__auto___15163]));

var G__15164 = (i__10088__auto___15163 + (1));
i__10088__auto___15163 = G__15164;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq15161){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15161));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__10094__auto__ = [];
var len__10087__auto___15166 = arguments.length;
var i__10088__auto___15167 = (0);
while(true){
if((i__10088__auto___15167 < len__10087__auto___15166)){
args__10094__auto__.push((arguments[i__10088__auto___15167]));

var G__15168 = (i__10088__auto___15167 + (1));
i__10088__auto___15167 = G__15168;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq15165){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15165));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__15169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15169,(1),null);
var G__15172 = new_context;
var G__15173 = remainder;
var G__15174 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__15172;
lis__$1 = G__15173;
acc = G__15174;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__15175 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15175,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15175,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__15178 = new_context;
var G__15179 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__15178;
acc = G__15179;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__15180 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__15183 = new_context;
var G__15184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__15183;
acc = G__15184;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9690__auto__ = (function cljs$pprint$unzip_map_$_iter__15185(s__15186){
return (new cljs.core.LazySeq(null,(function (){
var s__15186__$1 = s__15186;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15186__$1);
if(temp__5457__auto__){
var s__15186__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15186__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__15186__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__15188 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__15187 = (0);
while(true){
if((i__15187 < size__9689__auto__)){
var vec__15189 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__15187);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15189,(0),null);
var vec__15192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15189,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15192,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15192,(1),null);
cljs.core.chunk_append(b__15188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__15217 = (i__15187 + (1));
i__15187 = G__15217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15188),cljs$pprint$unzip_map_$_iter__15185(cljs.core.chunk_rest(s__15186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15188),null);
}
} else {
var vec__15195 = cljs.core.first(s__15186__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15195,(0),null);
var vec__15198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15195,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15198,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15198,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__15185(cljs.core.rest(s__15186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9690__auto__ = (function cljs$pprint$unzip_map_$_iter__15201(s__15202){
return (new cljs.core.LazySeq(null,(function (){
var s__15202__$1 = s__15202;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15202__$1);
if(temp__5457__auto__){
var s__15202__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15202__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__15202__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__15204 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__15203 = (0);
while(true){
if((i__15203 < size__9689__auto__)){
var vec__15205 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__15203);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15205,(0),null);
var vec__15208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15205,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208,(1),null);
cljs.core.chunk_append(b__15204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__15218 = (i__15203 + (1));
i__15203 = G__15218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15204),cljs$pprint$unzip_map_$_iter__15201(cljs.core.chunk_rest(s__15202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15204),null);
}
} else {
var vec__15211 = cljs.core.first(s__15202__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15211,(0),null);
var vec__15214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15211,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15214,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15214,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__15201(cljs.core.rest(s__15202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9690__auto__ = (function cljs$pprint$tuple_map_$_iter__15219(s__15220){
return (new cljs.core.LazySeq(null,(function (){
var s__15220__$1 = s__15220;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15220__$1);
if(temp__5457__auto__){
var s__15220__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15220__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__15220__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__15222 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__15221 = (0);
while(true){
if((i__15221 < size__9689__auto__)){
var vec__15223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__15221);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15223,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15223,(1),null);
cljs.core.chunk_append(b__15222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__15229 = (i__15221 + (1));
i__15221 = G__15229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15222),cljs$pprint$tuple_map_$_iter__15219(cljs.core.chunk_rest(s__15220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15222),null);
}
} else {
var vec__15226 = cljs.core.first(s__15220__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__15219(cljs.core.rest(s__15220__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__15230 = (n - (1));
n = G__15230;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__15231 = (n + (1));
n = G__15231;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__15233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__15233) : test.call(null,G__15233));
})()))){
return pos;
} else {
var G__15234 = (pos + (1));
pos = G__15234;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__9541__auto__ = (((pp == null))?null:pp);
var m__9542__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__9542__auto__.call(null,pp));
} else {
var m__9542__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__9542__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__15235 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__15235) : sym.call(null,G__15235));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__15238 = arguments.length;
switch (G__15238) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint15239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15239 = (function (writer,max_columns,fields,meta15240){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta15240 = meta15240;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_15241,meta15240__$1){
var self__ = this;
var _15241__$1 = this;
return (new cljs.pprint.t_cljs$pprint15239(self__.writer,self__.max_columns,self__.fields,meta15240__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint15239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_15241){
var self__ = this;
var _15241__$1 = this;
return self__.meta15240;
});})(fields))
;

cljs.pprint.t_cljs$pprint15239.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint15239.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint15239.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15242 = cljs.core._EQ_;
var expr__15243 = cljs.core.type(x);
if(cljs.core.truth_((pred__15242.cljs$core$IFn$_invoke$arity$2 ? pred__15242.cljs$core$IFn$_invoke$arity$2(String,expr__15243) : pred__15242.call(null,String,expr__15243)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__15242,expr__15243,this$__$1,fields){
return (function (p1__15236_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15236_SHARP_,"\n");
});})(s,nl,pred__15242,expr__15243,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__15242.cljs$core$IFn$_invoke$arity$2 ? pred__15242.cljs$core$IFn$_invoke$arity$2(Number,expr__15243) : pred__15242.call(null,Number,expr__15243)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15243)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint15239.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta15240], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint15239.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15239.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15239";

cljs.pprint.t_cljs$pprint15239.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.pprint/t_cljs$pprint15239");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint15239 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint15239(writer__$1,max_columns__$1,fields__$1,meta15240){
return (new cljs.pprint.t_cljs$pprint15239(writer__$1,max_columns__$1,fields__$1,meta15240));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint15239(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k15247,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__15251 = k15247;
var G__15251__$1 = (((G__15251 instanceof cljs.core.Keyword))?G__15251.fqn:null);
switch (G__15251__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15247,else__9499__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#cljs.pprint.logical-block{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15246){
var self__ = this;
var G__15246__$1 = this;
return (new cljs.core.RecordIter((0),G__15246__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__15252 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__15252(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15248,other15249){
var self__ = this;
var this15248__$1 = this;
return (!((other15249 == null))) && ((this15248__$1.constructor === other15249.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.parent,other15249.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.section,other15249.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.start_col,other15249.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.indent,other15249.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.done_nl,other15249.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.intra_block_nl,other15249.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.prefix,other15249.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.per_line_prefix,other15249.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.suffix,other15249.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.logical_block_callback,other15249.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15248__$1.__extmap,other15249.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__15246){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__15253 = cljs.core.keyword_identical_QMARK_;
var expr__15254 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__15256 = cljs.core.cst$kw$parent;
var G__15257 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15256,G__15257) : pred__15253.call(null,G__15256,G__15257));
})())){
return (new cljs.pprint.logical_block(G__15246,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15258 = cljs.core.cst$kw$section;
var G__15259 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15258,G__15259) : pred__15253.call(null,G__15258,G__15259));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__15246,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15260 = cljs.core.cst$kw$start_DASH_col;
var G__15261 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15260,G__15261) : pred__15253.call(null,G__15260,G__15261));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__15246,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15262 = cljs.core.cst$kw$indent;
var G__15263 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15262,G__15263) : pred__15253.call(null,G__15262,G__15263));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__15246,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15264 = cljs.core.cst$kw$done_DASH_nl;
var G__15265 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15264,G__15265) : pred__15253.call(null,G__15264,G__15265));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__15246,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15266 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__15267 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15266,G__15267) : pred__15253.call(null,G__15266,G__15267));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__15246,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15268 = cljs.core.cst$kw$prefix;
var G__15269 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15268,G__15269) : pred__15253.call(null,G__15268,G__15269));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__15246,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15270 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__15271 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15270,G__15271) : pred__15253.call(null,G__15270,G__15271));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__15246,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15272 = cljs.core.cst$kw$suffix;
var G__15273 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15272,G__15273) : pred__15253.call(null,G__15272,G__15273));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__15246,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15274 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__15275 = expr__15254;
return (pred__15253.cljs$core$IFn$_invoke$arity$2 ? pred__15253.cljs$core$IFn$_invoke$arity$2(G__15274,G__15275) : pred__15253.call(null,G__15274,G__15275));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__15246,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__15246),null));
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

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__15246){
var self__ = this;
var this__9495__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__15246,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__15250){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__15250),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__15250),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__15250),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__15250),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__15250),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__15250),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__15250),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__15250),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__15250),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__15250),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15250,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__15277 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__15277;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k15279,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__15283 = k15279;
var G__15283__$1 = (((G__15283 instanceof cljs.core.Keyword))?G__15283.fqn:null);
switch (G__15283__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15279,else__9499__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15278){
var self__ = this;
var G__15278__$1 = this;
return (new cljs.core.RecordIter((0),G__15278__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__15284 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__15284(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15280,other15281){
var self__ = this;
var this15280__$1 = this;
return (!((other15281 == null))) && ((this15280__$1.constructor === other15281.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15280__$1.type_tag,other15281.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15280__$1.data,other15281.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15280__$1.trailing_white_space,other15281.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15280__$1.start_pos,other15281.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15280__$1.end_pos,other15281.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15280__$1.__extmap,other15281.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__15278){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__15285 = cljs.core.keyword_identical_QMARK_;
var expr__15286 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__15288 = cljs.core.cst$kw$type_DASH_tag;
var G__15289 = expr__15286;
return (pred__15285.cljs$core$IFn$_invoke$arity$2 ? pred__15285.cljs$core$IFn$_invoke$arity$2(G__15288,G__15289) : pred__15285.call(null,G__15288,G__15289));
})())){
return (new cljs.pprint.buffer_blob(G__15278,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15290 = cljs.core.cst$kw$data;
var G__15291 = expr__15286;
return (pred__15285.cljs$core$IFn$_invoke$arity$2 ? pred__15285.cljs$core$IFn$_invoke$arity$2(G__15290,G__15291) : pred__15285.call(null,G__15290,G__15291));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__15278,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15292 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__15293 = expr__15286;
return (pred__15285.cljs$core$IFn$_invoke$arity$2 ? pred__15285.cljs$core$IFn$_invoke$arity$2(G__15292,G__15293) : pred__15285.call(null,G__15292,G__15293));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__15278,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15294 = cljs.core.cst$kw$start_DASH_pos;
var G__15295 = expr__15286;
return (pred__15285.cljs$core$IFn$_invoke$arity$2 ? pred__15285.cljs$core$IFn$_invoke$arity$2(G__15294,G__15295) : pred__15285.call(null,G__15294,G__15295));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__15278,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15296 = cljs.core.cst$kw$end_DASH_pos;
var G__15297 = expr__15286;
return (pred__15285.cljs$core$IFn$_invoke$arity$2 ? pred__15285.cljs$core$IFn$_invoke$arity$2(G__15296,G__15297) : pred__15285.call(null,G__15296,G__15297));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__15278,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__15278),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__15278){
var self__ = this;
var this__9495__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__15278,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__15282){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15282),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__15282),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__15282),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15282),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15282),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15282,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__15067__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__15067__auto__),cljs.core.cst$kw$buffer_DASH_blob);
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k15300,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__15304 = k15300;
var G__15304__$1 = (((G__15304 instanceof cljs.core.Keyword))?G__15304.fqn:null);
switch (G__15304__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15300,else__9499__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#cljs.pprint.nl-t{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15299){
var self__ = this;
var G__15299__$1 = this;
return (new cljs.core.RecordIter((0),G__15299__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__15305 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__15305(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15301,other15302){
var self__ = this;
var this15301__$1 = this;
return (!((other15302 == null))) && ((this15301__$1.constructor === other15302.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15301__$1.type_tag,other15302.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15301__$1.type,other15302.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15301__$1.logical_block,other15302.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15301__$1.start_pos,other15302.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15301__$1.end_pos,other15302.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15301__$1.__extmap,other15302.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__15299){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__15306 = cljs.core.keyword_identical_QMARK_;
var expr__15307 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__15309 = cljs.core.cst$kw$type_DASH_tag;
var G__15310 = expr__15307;
return (pred__15306.cljs$core$IFn$_invoke$arity$2 ? pred__15306.cljs$core$IFn$_invoke$arity$2(G__15309,G__15310) : pred__15306.call(null,G__15309,G__15310));
})())){
return (new cljs.pprint.nl_t(G__15299,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15311 = cljs.core.cst$kw$type;
var G__15312 = expr__15307;
return (pred__15306.cljs$core$IFn$_invoke$arity$2 ? pred__15306.cljs$core$IFn$_invoke$arity$2(G__15311,G__15312) : pred__15306.call(null,G__15311,G__15312));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__15299,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15313 = cljs.core.cst$kw$logical_DASH_block;
var G__15314 = expr__15307;
return (pred__15306.cljs$core$IFn$_invoke$arity$2 ? pred__15306.cljs$core$IFn$_invoke$arity$2(G__15313,G__15314) : pred__15306.call(null,G__15313,G__15314));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__15299,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15315 = cljs.core.cst$kw$start_DASH_pos;
var G__15316 = expr__15307;
return (pred__15306.cljs$core$IFn$_invoke$arity$2 ? pred__15306.cljs$core$IFn$_invoke$arity$2(G__15315,G__15316) : pred__15306.call(null,G__15315,G__15316));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__15299,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15317 = cljs.core.cst$kw$end_DASH_pos;
var G__15318 = expr__15307;
return (pred__15306.cljs$core$IFn$_invoke$arity$2 ? pred__15306.cljs$core$IFn$_invoke$arity$2(G__15317,G__15318) : pred__15306.call(null,G__15317,G__15318));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__15299,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__15299),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__15299){
var self__ = this;
var this__9495__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__15299,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__15303){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15303),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__15303),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15303),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15303),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15303),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15303,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__15067__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__15067__auto__),cljs.core.cst$kw$nl_DASH_t);
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k15321,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__15325 = k15321;
var G__15325__$1 = (((G__15325 instanceof cljs.core.Keyword))?G__15325.fqn:null);
switch (G__15325__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15321,else__9499__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15320){
var self__ = this;
var G__15320__$1 = this;
return (new cljs.core.RecordIter((0),G__15320__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__15326 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__15326(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15322,other15323){
var self__ = this;
var this15322__$1 = this;
return (!((other15323 == null))) && ((this15322__$1.constructor === other15323.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15322__$1.type_tag,other15323.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15322__$1.logical_block,other15323.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15322__$1.start_pos,other15323.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15322__$1.end_pos,other15323.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15322__$1.__extmap,other15323.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__15320){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__15327 = cljs.core.keyword_identical_QMARK_;
var expr__15328 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__15330 = cljs.core.cst$kw$type_DASH_tag;
var G__15331 = expr__15328;
return (pred__15327.cljs$core$IFn$_invoke$arity$2 ? pred__15327.cljs$core$IFn$_invoke$arity$2(G__15330,G__15331) : pred__15327.call(null,G__15330,G__15331));
})())){
return (new cljs.pprint.start_block_t(G__15320,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15332 = cljs.core.cst$kw$logical_DASH_block;
var G__15333 = expr__15328;
return (pred__15327.cljs$core$IFn$_invoke$arity$2 ? pred__15327.cljs$core$IFn$_invoke$arity$2(G__15332,G__15333) : pred__15327.call(null,G__15332,G__15333));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__15320,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15334 = cljs.core.cst$kw$start_DASH_pos;
var G__15335 = expr__15328;
return (pred__15327.cljs$core$IFn$_invoke$arity$2 ? pred__15327.cljs$core$IFn$_invoke$arity$2(G__15334,G__15335) : pred__15327.call(null,G__15334,G__15335));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__15320,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15336 = cljs.core.cst$kw$end_DASH_pos;
var G__15337 = expr__15328;
return (pred__15327.cljs$core$IFn$_invoke$arity$2 ? pred__15327.cljs$core$IFn$_invoke$arity$2(G__15336,G__15337) : pred__15327.call(null,G__15336,G__15337));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__15320,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__15320),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__15320){
var self__ = this;
var this__9495__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__15320,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__15324){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15324),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15324),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15324),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15324),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15324,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__15067__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__15067__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k15340,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__15344 = k15340;
var G__15344__$1 = (((G__15344 instanceof cljs.core.Keyword))?G__15344.fqn:null);
switch (G__15344__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15340,else__9499__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15339){
var self__ = this;
var G__15339__$1 = this;
return (new cljs.core.RecordIter((0),G__15339__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__15345 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__15345(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15341,other15342){
var self__ = this;
var this15341__$1 = this;
return (!((other15342 == null))) && ((this15341__$1.constructor === other15342.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15341__$1.type_tag,other15342.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15341__$1.logical_block,other15342.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15341__$1.start_pos,other15342.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15341__$1.end_pos,other15342.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15341__$1.__extmap,other15342.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__15339){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__15346 = cljs.core.keyword_identical_QMARK_;
var expr__15347 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__15349 = cljs.core.cst$kw$type_DASH_tag;
var G__15350 = expr__15347;
return (pred__15346.cljs$core$IFn$_invoke$arity$2 ? pred__15346.cljs$core$IFn$_invoke$arity$2(G__15349,G__15350) : pred__15346.call(null,G__15349,G__15350));
})())){
return (new cljs.pprint.end_block_t(G__15339,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15351 = cljs.core.cst$kw$logical_DASH_block;
var G__15352 = expr__15347;
return (pred__15346.cljs$core$IFn$_invoke$arity$2 ? pred__15346.cljs$core$IFn$_invoke$arity$2(G__15351,G__15352) : pred__15346.call(null,G__15351,G__15352));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__15339,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15353 = cljs.core.cst$kw$start_DASH_pos;
var G__15354 = expr__15347;
return (pred__15346.cljs$core$IFn$_invoke$arity$2 ? pred__15346.cljs$core$IFn$_invoke$arity$2(G__15353,G__15354) : pred__15346.call(null,G__15353,G__15354));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__15339,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15355 = cljs.core.cst$kw$end_DASH_pos;
var G__15356 = expr__15347;
return (pred__15346.cljs$core$IFn$_invoke$arity$2 ? pred__15346.cljs$core$IFn$_invoke$arity$2(G__15355,G__15356) : pred__15346.call(null,G__15355,G__15356));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__15339,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__15339),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__15339){
var self__ = this;
var this__9495__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__15339,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__15343){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15343),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15343),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15343),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15343),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15343,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__15067__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__15067__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k15359,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__15363 = k15359;
var G__15363__$1 = (((G__15363 instanceof cljs.core.Keyword))?G__15363.fqn:null);
switch (G__15363__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15359,else__9499__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#cljs.pprint.indent-t{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15358){
var self__ = this;
var G__15358__$1 = this;
return (new cljs.core.RecordIter((0),G__15358__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__15364 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__15364(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15360,other15361){
var self__ = this;
var this15360__$1 = this;
return (!((other15361 == null))) && ((this15360__$1.constructor === other15361.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15360__$1.type_tag,other15361.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15360__$1.logical_block,other15361.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15360__$1.relative_to,other15361.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15360__$1.offset,other15361.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15360__$1.start_pos,other15361.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15360__$1.end_pos,other15361.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15360__$1.__extmap,other15361.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__15358){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__15365 = cljs.core.keyword_identical_QMARK_;
var expr__15366 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__15368 = cljs.core.cst$kw$type_DASH_tag;
var G__15369 = expr__15366;
return (pred__15365.cljs$core$IFn$_invoke$arity$2 ? pred__15365.cljs$core$IFn$_invoke$arity$2(G__15368,G__15369) : pred__15365.call(null,G__15368,G__15369));
})())){
return (new cljs.pprint.indent_t(G__15358,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15370 = cljs.core.cst$kw$logical_DASH_block;
var G__15371 = expr__15366;
return (pred__15365.cljs$core$IFn$_invoke$arity$2 ? pred__15365.cljs$core$IFn$_invoke$arity$2(G__15370,G__15371) : pred__15365.call(null,G__15370,G__15371));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__15358,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15372 = cljs.core.cst$kw$relative_DASH_to;
var G__15373 = expr__15366;
return (pred__15365.cljs$core$IFn$_invoke$arity$2 ? pred__15365.cljs$core$IFn$_invoke$arity$2(G__15372,G__15373) : pred__15365.call(null,G__15372,G__15373));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__15358,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15374 = cljs.core.cst$kw$offset;
var G__15375 = expr__15366;
return (pred__15365.cljs$core$IFn$_invoke$arity$2 ? pred__15365.cljs$core$IFn$_invoke$arity$2(G__15374,G__15375) : pred__15365.call(null,G__15374,G__15375));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__15358,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15376 = cljs.core.cst$kw$start_DASH_pos;
var G__15377 = expr__15366;
return (pred__15365.cljs$core$IFn$_invoke$arity$2 ? pred__15365.cljs$core$IFn$_invoke$arity$2(G__15376,G__15377) : pred__15365.call(null,G__15376,G__15377));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__15358,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15378 = cljs.core.cst$kw$end_DASH_pos;
var G__15379 = expr__15366;
return (pred__15365.cljs$core$IFn$_invoke$arity$2 ? pred__15365.cljs$core$IFn$_invoke$arity$2(G__15378,G__15379) : pred__15365.call(null,G__15378,G__15379));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__15358,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__15358),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__15358){
var self__ = this;
var this__9495__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__15358,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__15362){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__15362),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__15362),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__15362),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__15362),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15362),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__15362),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15362,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__15067__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__15067__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__,hierarchy__9867__auto__){
return (function (p1__15382_SHARP_,p2__15381_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__15381_SHARP_);
});})(method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__,hierarchy__9867__auto__))
,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___15384 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___15384)){
var cb_15385 = temp__5457__auto___15384;
var G__15383_15386 = cljs.core.cst$kw$start;
(cb_15385.cljs$core$IFn$_invoke$arity$1 ? cb_15385.cljs$core$IFn$_invoke$arity$1(G__15383_15386) : cb_15385.call(null,G__15383_15386));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5457__auto___15387 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5457__auto___15387)){
var prefix_15388 = temp__5457__auto___15387;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_15388);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5457__auto___15390 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___15390)){
var cb_15391 = temp__5457__auto___15390;
var G__15389_15392 = cljs.core.cst$kw$end;
(cb_15391.cljs$core$IFn$_invoke$arity$1 ? cb_15391.cljs$core$IFn$_invoke$arity$1(G__15389_15392) : cb_15391.call(null,G__15389_15392));
} else {
}

var temp__5457__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5457__auto__)){
var suffix = temp__5457__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__15393 = cljs.core._EQ_;
var expr__15394 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__15396 = cljs.core.cst$kw$block;
var G__15397 = expr__15394;
return (pred__15393.cljs$core$IFn$_invoke$arity$2 ? pred__15393.cljs$core$IFn$_invoke$arity$2(G__15396,G__15397) : pred__15393.call(null,G__15396,G__15397));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__15398 = cljs.core.cst$kw$current;
var G__15399 = expr__15394;
return (pred__15393.cljs$core$IFn$_invoke$arity$2 ? pred__15393.cljs$core$IFn$_invoke$arity$2(G__15398,G__15399) : pred__15393.call(null,G__15398,G__15399));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15394)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var and__8796__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__8796__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__8796__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5455__auto___15400 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___15400)){
var tws_15401 = temp__5455__auto___15400;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_15401);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__15402 = cljs.core.seq(tokens);
var chunk__15403 = null;
var count__15404 = (0);
var i__15405 = (0);
while(true){
if((i__15405 < count__15404)){
var token = chunk__15403.cljs$core$IIndexed$_nth$arity$2(null,i__15405);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5455__auto___15406 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___15406)){
var tws_15407 = temp__5455__auto___15406;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_15407);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_15408 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8796__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8796__auto__)){
return tws_15408;
} else {
return and__8796__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_15408);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__15409 = seq__15402;
var G__15410 = chunk__15403;
var G__15411 = count__15404;
var G__15412 = (i__15405 + (1));
seq__15402 = G__15409;
chunk__15403 = G__15410;
count__15404 = G__15411;
i__15405 = G__15412;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__15402);
if(temp__5457__auto__){
var seq__15402__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15402__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__15402__$1);
var G__15413 = cljs.core.chunk_rest(seq__15402__$1);
var G__15414 = c__9739__auto__;
var G__15415 = cljs.core.count(c__9739__auto__);
var G__15416 = (0);
seq__15402 = G__15413;
chunk__15403 = G__15414;
count__15404 = G__15415;
i__15405 = G__15416;
continue;
} else {
var token = cljs.core.first(seq__15402__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5455__auto___15417 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto___15417)){
var tws_15418 = temp__5455__auto___15417;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_15418);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_15419 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__8796__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__8796__auto__)){
return tws_15419;
} else {
return and__8796__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_15419);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__15420 = cljs.core.next(seq__15402__$1);
var G__15421 = null;
var G__15422 = (0);
var G__15423 = (0);
seq__15402 = G__15420;
chunk__15403 = G__15421;
count__15404 = G__15422;
i__15405 = G__15423;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__8808__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__8796__auto__ = miser_width;
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = maxcol;
if(cljs.core.truth_(and__8796__auto____$1)){
var and__8796__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__8796__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
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
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__,hierarchy__9867__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__,hierarchy__9867__auto__))
,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__8808__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__8808__auto____$1){
return or__8808__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__15424_SHARP_){
return cljs.core.not((function (){var and__8796__auto__ = cljs.pprint.nl_t_QMARK_(p1__15424_SHARP_);
if(cljs.core.truth_(and__8796__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__15424_SHARP_),lb);
} else {
return and__8796__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__15425_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__15425_SHARP_);
return cljs.core.not((function (){var and__8796__auto__ = cljs.pprint.nl_t_QMARK_(p1__15425_SHARP_);
if(cljs.core.truth_(and__8796__auto__)){
var or__8808__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__8796__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__15426 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__15426;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_15427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_15427);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15428_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__15428_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__15429 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15429,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15429,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__15432 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15432,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15432,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__15435 = newl;
var G__15436 = this$;
var G__15437 = section;
var G__15438 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__15435,G__15436,G__15437,G__15438) : cljs.pprint.emit_nl_QMARK_.call(null,G__15435,G__15436,G__15437,G__15438));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__15439 = new_buffer;
buffer = G__15439;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5455__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5455__auto__)){
var buf = temp__5455__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5457__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto__)){
var tws = temp__5457__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_15444 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_15445 = (oldpos_15444 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_15445);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_15444,newpos_15445));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__15440_15446 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__15441_15447 = null;
var count__15442_15448 = (0);
var i__15443_15449 = (0);
while(true){
if((i__15443_15449 < count__15442_15448)){
var l_15450__$1 = chunk__15441_15447.cljs$core$IIndexed$_nth$arity$2(null,i__15443_15449);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_15450__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__15451 = seq__15440_15446;
var G__15452 = chunk__15441_15447;
var G__15453 = count__15442_15448;
var G__15454 = (i__15443_15449 + (1));
seq__15440_15446 = G__15451;
chunk__15441_15447 = G__15452;
count__15442_15448 = G__15453;
i__15443_15449 = G__15454;
continue;
} else {
var temp__5457__auto___15455 = cljs.core.seq(seq__15440_15446);
if(temp__5457__auto___15455){
var seq__15440_15456__$1 = temp__5457__auto___15455;
if(cljs.core.chunked_seq_QMARK_(seq__15440_15456__$1)){
var c__9739__auto___15457 = cljs.core.chunk_first(seq__15440_15456__$1);
var G__15458 = cljs.core.chunk_rest(seq__15440_15456__$1);
var G__15459 = c__9739__auto___15457;
var G__15460 = cljs.core.count(c__9739__auto___15457);
var G__15461 = (0);
seq__15440_15446 = G__15458;
chunk__15441_15447 = G__15459;
count__15442_15448 = G__15460;
i__15443_15449 = G__15461;
continue;
} else {
var l_15462__$1 = cljs.core.first(seq__15440_15456__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_15462__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__15463 = cljs.core.next(seq__15440_15456__$1);
var G__15464 = null;
var G__15465 = (0);
var G__15466 = (0);
seq__15440_15446 = G__15463;
chunk__15441_15447 = G__15464;
count__15442_15448 = G__15465;
i__15443_15449 = G__15466;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint15467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15467 = (function (writer,max_columns,miser_width,lb,fields,meta15468){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta15468 = meta15468;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_15469,meta15468__$1){
var self__ = this;
var _15469__$1 = this;
return (new cljs.pprint.t_cljs$pprint15467(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta15468__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_15469){
var self__ = this;
var _15469__$1 = this;
return self__.meta15468;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15467.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15467.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15470 = cljs.core._EQ_;
var expr__15471 = cljs.core.type(x);
if(cljs.core.truth_((pred__15470.cljs$core$IFn$_invoke$arity$2 ? pred__15470.cljs$core$IFn$_invoke$arity$2(String,expr__15471) : pred__15470.call(null,String,expr__15471)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__15470.cljs$core$IFn$_invoke$arity$2 ? pred__15470.cljs$core$IFn$_invoke$arity$2(Number,expr__15471) : pred__15470.call(null,Number,expr__15471)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15471)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15467.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15467.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint15467.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15467.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta15468], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint15467.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15467.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15467";

cljs.pprint.t_cljs$pprint15467.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.pprint/t_cljs$pprint15467");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint15467 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint15467(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta15468){
return (new cljs.pprint.t_cljs$pprint15467(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta15468));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint15467(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5457__auto___15474 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___15474)){
var cb_15475 = temp__5457__auto___15474;
var G__15473_15476 = cljs.core.cst$kw$start;
(cb_15475.cljs$core$IFn$_invoke$arity$1 ? cb_15475.cljs$core$IFn$_invoke$arity$1(G__15473_15476) : cb_15475.call(null,G__15473_15476));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5457__auto___15478 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___15478)){
var cb_15479 = temp__5457__auto___15478;
var G__15477_15480 = cljs.core.cst$kw$end;
(cb_15479.cljs$core$IFn$_invoke$arity$1 ? cb_15479.cljs$core$IFn$_invoke$arity$1(G__15477_15480) : cb_15479.call(null,G__15477_15480));
} else {
}
} else {
var oldpos_15481 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_15482 = (oldpos_15481 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_15482);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_15481,newpos_15482));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__15483 = cljs.core._EQ_;
var expr__15484 = relative_to;
if(cljs.core.truth_((function (){var G__15486 = cljs.core.cst$kw$block;
var G__15487 = expr__15484;
return (pred__15483.cljs$core$IFn$_invoke$arity$2 ? pred__15483.cljs$core$IFn$_invoke$arity$2(G__15486,G__15487) : pred__15483.call(null,G__15486,G__15487));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__15488 = cljs.core.cst$kw$current;
var G__15489 = expr__15484;
return (pred__15483.cljs$core$IFn$_invoke$arity$2 ? pred__15483.cljs$core$IFn$_invoke$arity$2(G__15488,G__15489) : pred__15483.call(null,G__15488,G__15489));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15484)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__15490_SHARP_){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__15490_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__15490_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__8796__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__8796__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__8796__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__8796__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__8796__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__10094__auto__ = [];
var len__10087__auto___15509 = arguments.length;
var i__10088__auto___15510 = (0);
while(true){
if((i__10088__auto___15510 < len__10087__auto___15509)){
args__10094__auto__.push((arguments[i__10088__auto___15510]));

var G__15511 = (i__10088__auto___15510 + (1));
i__10088__auto___15510 = G__15511;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_15495 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_15496 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_15497 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_15498 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_15499 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_15500 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_15501 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_15502 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_15503 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_15504 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_15505 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_15506 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__15050__auto___15512 = base_writer;
var new_writer__15051__auto___15513 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__15050__auto___15512));
var _STAR_out_STAR_15507_15514 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__15051__auto___15513)?cljs.pprint.make_pretty_writer(base_writer__15050__auto___15512,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__15050__auto___15512);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15507_15514;
}} else {
var _STAR_out_STAR_15508_15515 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15508_15515;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_15506;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_15505;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_15504;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_15503;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_15502;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_15501;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_15500;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_15499;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15498;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_15497;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_15496;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_15495;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq15493){
var G__15494 = cljs.core.first(seq15493);
var seq15493__$1 = cljs.core.next(seq15493);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__15494,seq15493__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__15517 = arguments.length;
switch (G__15517) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_15518 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15518;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__15050__auto__ = writer;
var new_writer__15051__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__15050__auto__));
var _STAR_out_STAR_15519 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__15051__auto__)?cljs.pprint.make_pretty_writer(base_writer__15050__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__15050__auto__);

try{var _STAR_print_pretty_STAR_15520_15522 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_15520_15522;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15519;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__8796__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__8796__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__8796__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__10094__auto__ = [];
var len__10087__auto___15526 = arguments.length;
var i__10088__auto___15527 = (0);
while(true){
if((i__10088__auto___15527 < len__10087__auto___15526)){
args__10094__auto__.push((arguments[i__10088__auto___15527]));

var G__15528 = (i__10088__auto___15527 + (1));
i__10088__auto___15527 = G__15528;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq15523){
var G__15524 = cljs.core.first(seq15523);
var seq15523__$1 = cljs.core.next(seq15523);
var G__15525 = cljs.core.first(seq15523__$1);
var seq15523__$2 = cljs.core.next(seq15523__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__15524,G__15525,seq15523__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k15530,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__15534 = k15530;
var G__15534__$1 = (((G__15534 instanceof cljs.core.Keyword))?G__15534.fqn:null);
switch (G__15534__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15530,else__9499__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15529){
var self__ = this;
var G__15529__$1 = this;
return (new cljs.core.RecordIter((0),G__15529__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__15535 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__15535(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15531,other15532){
var self__ = this;
var this15531__$1 = this;
return (!((other15532 == null))) && ((this15531__$1.constructor === other15532.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15531__$1.seq,other15532.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15531__$1.rest,other15532.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15531__$1.pos,other15532.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15531__$1.__extmap,other15532.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__15529){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__15536 = cljs.core.keyword_identical_QMARK_;
var expr__15537 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__15539 = cljs.core.cst$kw$seq;
var G__15540 = expr__15537;
return (pred__15536.cljs$core$IFn$_invoke$arity$2 ? pred__15536.cljs$core$IFn$_invoke$arity$2(G__15539,G__15540) : pred__15536.call(null,G__15539,G__15540));
})())){
return (new cljs.pprint.arg_navigator(G__15529,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15541 = cljs.core.cst$kw$rest;
var G__15542 = expr__15537;
return (pred__15536.cljs$core$IFn$_invoke$arity$2 ? pred__15536.cljs$core$IFn$_invoke$arity$2(G__15541,G__15542) : pred__15536.call(null,G__15541,G__15542));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__15529,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15543 = cljs.core.cst$kw$pos;
var G__15544 = expr__15537;
return (pred__15536.cljs$core$IFn$_invoke$arity$2 ? pred__15536.cljs$core$IFn$_invoke$arity$2(G__15543,G__15544) : pred__15536.call(null,G__15543,G__15544));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__15529,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__15529),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__15529){
var self__ = this;
var this__9495__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__15529,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__15533){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__15533),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__15533),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__15533),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15533,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__15546 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__15549 = navigator;
var G__15550 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__15549,G__15550) : cljs.pprint.relative_reposition.call(null,G__15549,G__15550));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k15552,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__15556 = k15552;
var G__15556__$1 = (((G__15556 instanceof cljs.core.Keyword))?G__15556.fqn:null);
switch (G__15556__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15552,else__9499__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15551){
var self__ = this;
var G__15551__$1 = this;
return (new cljs.core.RecordIter((0),G__15551__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__15557 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__15557(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15553,other15554){
var self__ = this;
var this15553__$1 = this;
return (!((other15554 == null))) && ((this15553__$1.constructor === other15554.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15553__$1.func,other15554.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15553__$1.def,other15554.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15553__$1.params,other15554.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15553__$1.offset,other15554.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15553__$1.__extmap,other15554.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__15551){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__15558 = cljs.core.keyword_identical_QMARK_;
var expr__15559 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__15561 = cljs.core.cst$kw$func;
var G__15562 = expr__15559;
return (pred__15558.cljs$core$IFn$_invoke$arity$2 ? pred__15558.cljs$core$IFn$_invoke$arity$2(G__15561,G__15562) : pred__15558.call(null,G__15561,G__15562));
})())){
return (new cljs.pprint.compiled_directive(G__15551,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15563 = cljs.core.cst$kw$def;
var G__15564 = expr__15559;
return (pred__15558.cljs$core$IFn$_invoke$arity$2 ? pred__15558.cljs$core$IFn$_invoke$arity$2(G__15563,G__15564) : pred__15558.call(null,G__15563,G__15564));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__15551,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15565 = cljs.core.cst$kw$params;
var G__15566 = expr__15559;
return (pred__15558.cljs$core$IFn$_invoke$arity$2 ? pred__15558.cljs$core$IFn$_invoke$arity$2(G__15565,G__15566) : pred__15558.call(null,G__15565,G__15566));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__15551,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15567 = cljs.core.cst$kw$offset;
var G__15568 = expr__15559;
return (pred__15558.cljs$core$IFn$_invoke$arity$2 ? pred__15558.cljs$core$IFn$_invoke$arity$2(G__15567,G__15568) : pred__15558.call(null,G__15567,G__15568));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__15551,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__15551),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__15551){
var self__ = this;
var this__9495__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__15551,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__15555){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__15555),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__15555),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__15555),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__15555),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15555,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__15570,navigator){
var vec__15571 = p__15570;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15571,(0),null);
var vec__15574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15571,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15574,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15574,(1),null);
var vec__15577 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15577,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15577,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__15580 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15580,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15580,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__8808__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__15583 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15583,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15583,(1),null);
var base_output = (function (){var or__8808__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__15586_SHARP_){
if((p1__15586_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__15586_SHARP_,base),cljs.core.quot(p1__15586_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__15587_SHARP_){
if((p1__15587_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__15587_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__15587_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__15589 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15589,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15589,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_15592 = (arg < (0));
var pos_arg_15593 = ((neg_15592)?(- arg):arg);
var raw_str_15594 = cljs.pprint.opt_base_str(base,pos_arg_15593);
var group_str_15595 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_15592,pos_arg_15593,raw_str_15594,vec__15589,arg,arg_navigator__$1){
return (function (p1__15588_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__15588_SHARP_);
});})(neg_15592,pos_arg_15593,raw_str_15594,vec__15589,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_15594));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_15594);
var signed_str_15596 = ((neg_15592)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_15595)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_15595)].join(''):group_str_15595
));
var padded_str_15597 = (((signed_str_15596.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_15596.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_15596)].join(''):signed_str_15596);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_15597], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__15598 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__15599 = (pos - (1));
var G__15600 = cljs.core.first(remainder);
var G__15601 = cljs.core.next(remainder);
acc = G__15598;
pos = G__15599;
this$ = G__15600;
remainder = G__15601;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__15602 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15602,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15602,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_15605 = (((arg < (0)))?(- arg):arg);
var parts_15606 = cljs.pprint.remainders((1000),abs_arg_15605);
if((cljs.core.count(parts_15606) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_15607 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_15606);
var full_str_15608 = cljs.pprint.add_english_scales(parts_strs_15607,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_15608)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__15609 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15609,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_15612 = (((arg < (0)))?(- arg):arg);
var parts_15613 = cljs.pprint.remainders((1000),abs_arg_15612);
if((cljs.core.count(parts_15613) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_15614 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_15613));
var head_str_15615 = cljs.pprint.add_english_scales(parts_strs_15614,(1));
var tail_str_15616 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_15613));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_15615))) && (!(cljs.core.empty_QMARK_(tail_str_15616))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_15615),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_15616)].join(''):((!(cljs.core.empty_QMARK_(head_str_15615)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_15615),"th"].join(''):tail_str_15616
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_15617 = cljs.core.rem(arg,(100));
var not_teens_15618 = (((11) < low_two_digits_15617)) || (((19) > low_two_digits_15617));
var low_digit_15619 = cljs.core.rem(low_two_digits_15617,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_15619 === (1))) && (not_teens_15618))?"st":((((low_digit_15619 === (2))) && (not_teens_15618))?"nd":((((low_digit_15619 === (3))) && (not_teens_15618))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__15620 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15620,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15620,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_15623 = cljs.pprint.remainders((10),arg);
var acc_15624 = cljs.core.PersistentVector.EMPTY;
var pos_15625 = (cljs.core.count(digits_15623) - (1));
var digits_15626__$1 = digits_15623;
while(true){
if(cljs.core.empty_QMARK_(digits_15626__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_15624)], 0));
} else {
var digit_15627 = cljs.core.first(digits_15626__$1);
var G__15628 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_15627))?acc_15624:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_15624,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_15625),(digit_15627 - (1)))));
var G__15629 = (pos_15625 - (1));
var G__15630 = cljs.core.next(digits_15626__$1);
acc_15624 = G__15628;
pos_15625 = G__15629;
digits_15626__$1 = G__15630;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__15631 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15631,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15631,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__15634 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15634,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15634,(1),null);
var pred__15637_15644 = cljs.core._EQ_;
var expr__15638_15645 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__15640 = "o";
var G__15641 = expr__15638_15645;
return (pred__15637_15644.cljs$core$IFn$_invoke$arity$2 ? pred__15637_15644.cljs$core$IFn$_invoke$arity$2(G__15640,G__15641) : pred__15637_15644.call(null,G__15640,G__15641));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__15642 = "u";
var G__15643 = expr__15638_15645;
return (pred__15637_15644.cljs$core$IFn$_invoke$arity$2 ? pred__15637_15644.cljs$core$IFn$_invoke$arity$2(G__15642,G__15643) : pred__15637_15644.call(null,G__15642,G__15643));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__15637_15644.cljs$core$IFn$_invoke$arity$2 ? pred__15637_15644.cljs$core$IFn$_invoke$arity$2(null,expr__15638_15645) : pred__15637_15644.call(null,null,expr__15638_15645)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15638_15645)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__15646 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15646,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15646,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__15649 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15649,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15649,(1),null);
var vec__15652 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15652,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15652,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__15655 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15655,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15655,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__15658 = (i - (1));
i = G__15658;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__8808__auto__ = d;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__9160__auto__ = (2);
var y__9161__auto__ = w;
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__9160__auto__ = (e + (1));
var y__9161__auto__ = (w__$1 - (1));
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})():(w__$1 + e)
));
var vec__15659 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15659,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15659,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15659,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15659,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__15662 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15662,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15662,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__15665 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15665,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15665,(1),null);
var vec__15668 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__15671 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15671,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15671,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__8808__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__15674 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__8796__auto__ = w;
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = d;
if(cljs.core.truth_(and__8796__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_15677 = cljs.core.count(fixed_repr__$1);
var signed_len_15678 = (cljs.core.truth_(add_sign)?(len_15677 + (1)):len_15677);
var prepend_zero_15679__$1 = (prepend_zero) && (!((signed_len_15678 >= w)));
var append_zero_15680__$1 = (append_zero) && (!((signed_len_15678 >= w)));
var full_len_15681 = (((prepend_zero_15679__$1) || (append_zero_15680__$1))?(signed_len_15678 + (1)):signed_len_15678);
if(cljs.core.truth_((function (){var and__8796__auto__ = (full_len_15681 > w);
if(and__8796__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8796__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_15681),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_15679__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_15680__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__15682 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15682,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15682,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__15688_15698 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__15689_15699 = G__15688_15698;
var mantissa_15700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15689_15699,(0),null);
var exp_15701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15689_15699,(1),null);
var G__15688_15702__$1 = G__15688_15698;
while(true){
var vec__15692_15703 = G__15688_15702__$1;
var mantissa_15704__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15692_15703,(0),null);
var exp_15705__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15692_15703,(1),null);
var w_15706 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_15707 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_15708 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_15709 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_15710 = (function (){var or__8808__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return "E";
}
})();
var add_sign_15711 = (function (){var or__8808__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_15712 = (k_15709 <= (0));
var scaled_exp_15713 = (exp_15705__$1 - (k_15709 - (1)));
var scaled_exp_str_15714 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_15713))].join('');
var scaled_exp_str_15715__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_15710),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_15713 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_15708)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_15708 - cljs.core.count(scaled_exp_str_15714)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_15714)].join('');
var exp_width_15716 = cljs.core.count(scaled_exp_str_15715__$1);
var base_mantissa_width_15717 = cljs.core.count(mantissa_15704__$1);
var scaled_mantissa_15718 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_15709),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_15704__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_15707)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_15707 - (base_mantissa_width_15717 - (1))) - (((k_15709 < (0)))?(- k_15709):(0))),"0")):null))].join('');
var w_mantissa_15719 = (cljs.core.truth_(w_15706)?(w_15706 - exp_width_15716):null);
var vec__15695_15720 = cljs.pprint.round_str(scaled_mantissa_15718,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_15709,(0)))?(d_15707 - (1)):(((k_15709 > (0)))?d_15707:(((k_15709 < (0)))?(d_15707 - (1)):null))),(cljs.core.truth_(w_mantissa_15719)?(w_mantissa_15719 - (cljs.core.truth_(add_sign_15711)?(1):(0))):null));
var rounded_mantissa_15721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15695_15720,(0),null);
var __15722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15695_15720,(1),null);
var incr_exp_15723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15695_15720,(2),null);
var full_mantissa_15724 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_15721,k_15709);
var append_zero_15725 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_15709,cljs.core.count(rounded_mantissa_15721))) && ((d_15707 == null));
if(cljs.core.not(incr_exp_15723)){
if(cljs.core.truth_(w_15706)){
var len_15726 = (cljs.core.count(full_mantissa_15724) + exp_width_15716);
var signed_len_15727 = (cljs.core.truth_(add_sign_15711)?(len_15726 + (1)):len_15726);
var prepend_zero_15728__$1 = (prepend_zero_15712) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_15727,w_15706)));
var full_len_15729 = ((prepend_zero_15728__$1)?(signed_len_15727 + (1)):signed_len_15727);
var append_zero_15730__$1 = (append_zero_15725) && ((full_len_15729 < w_15706));
if(cljs.core.truth_((function (){var and__8796__auto__ = (function (){var or__8808__auto__ = (full_len_15729 > w_15706);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var and__8796__auto__ = e_15708;
if(cljs.core.truth_(and__8796__auto__)){
return ((exp_width_15716 - (2)) > e_15708);
} else {
return and__8796__auto__;
}
}
})();
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8796__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_15706,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_15706 - full_len_15729) - ((append_zero_15730__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_15711)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_15728__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_15724),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_15730__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_15715__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_15711)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_15712)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_15724),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_15725)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_15715__$1)].join('')], 0));
}
} else {
var G__15731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_15721,(exp_15705__$1 + (1))], null);
G__15688_15702__$1 = G__15731;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__15732 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15732,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15732,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__15735 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15735,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15735,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__9160__auto__ = cljs.core.count(mantissa);
var y__9161__auto__ = (function (){var x__9167__auto__ = n;
var y__9168__auto__ = (7);
return ((x__9167__auto__ < y__9168__auto__) ? x__9167__auto__ : y__9168__auto__);
})();
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__15738 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738,(1),null);
var vec__15741 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15741,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15741,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__8808__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (arg < (0));
}
})();
var vec__15744 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15744,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15744,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15744,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8796__auto__)){
return add_sign;
} else {
return and__8796__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__8796__auto__){
return add_sign;
} else {
return and__8796__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__15747 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15747,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15747,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__15750 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15750,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15750,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__15753 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15753,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15753,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__15756 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15756,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15756,(1),null);
var vec__15759 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15759,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15759,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8808__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8808__auto__){
return or__8808__auto__;
} else {
var and__8796__auto__ = max_count;
if(cljs.core.truth_(and__8796__auto__)){
return (count >= max_count);
} else {
return and__8796__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__15762 = (count + (1));
var G__15763 = iter_result;
var G__15764 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__15762;
args__$1 = G__15763;
last_pos = G__15764;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__15765 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(1),null);
var vec__15768 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__8808__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8808__auto__){
return or__8808__auto__;
} else {
var and__8796__auto__ = max_count;
if(cljs.core.truth_(and__8796__auto__)){
return (count >= max_count);
} else {
return and__8796__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__15771 = (count + (1));
var G__15772 = cljs.core.next(arg_list__$1);
count = G__15771;
arg_list__$1 = G__15772;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__15773 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15773,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15773,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__8808__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8808__auto__){
return or__8808__auto__;
} else {
var and__8796__auto__ = max_count;
if(cljs.core.truth_(and__8796__auto__)){
return (count >= max_count);
} else {
return and__8796__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__15776 = (count + (1));
var G__15777 = iter_result;
var G__15778 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__15776;
navigator__$2 = G__15777;
last_pos = G__15778;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__15779 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15779,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15779,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__8808__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__8808__auto__){
return or__8808__auto__;
} else {
var and__8796__auto__ = max_count;
if(cljs.core.truth_(and__8796__auto__)){
return (count >= max_count);
} else {
return and__8796__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__15782 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15782,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15782,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__15785 = (count + (1));
var G__15786 = navigator__$3;
count = G__15785;
navigator__$2 = G__15786;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__15787 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_15790 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15790;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15787,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15787,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__15791 = cljs.core.next(clauses__$1);
var G__15792 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__15793 = iter_result;
clauses__$1 = G__15791;
acc = G__15792;
navigator__$1 = G__15793;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__15794 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var else$ = temp__5457__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__15797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15794,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15797,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15794,(1),null);
var navigator__$1 = (function (){var or__8808__auto__ = new_navigator;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return navigator;
}
})();
var vec__15800 = (function (){var temp__5457__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15800,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15800,(1),null);
var navigator__$2 = (function (){var or__8808__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__8808__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__8808__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__15803 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15803,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15803,(1),null);
var slots = (function (){var x__9160__auto__ = (1);
var y__9161__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__9160__auto__ = minpad;
var y__9161__auto__ = cljs.core.quot(total_pad,slots);
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__8796__auto__ = eol_str;
if(cljs.core.truth_(and__8796__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__8796__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_15806__$1 = slots;
var extra_pad_15807__$1 = extra_pad;
var strs_15808__$1 = strs;
var pad_only_15809 = (function (){var or__8808__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_15808__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_15808__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_15809))?cljs.core.first(strs_15808__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__8808__auto__ = pad_only_15809;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.next(strs_15808__$1);
if(or__8808__auto____$1){
return or__8808__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_15807__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__15810 = (slots_15806__$1 - (1));
var G__15811 = (extra_pad_15807__$1 - (1));
var G__15812 = (cljs.core.truth_(pad_only_15809)?strs_15808__$1:cljs.core.next(strs_15808__$1));
var G__15813 = false;
slots_15806__$1 = G__15810;
extra_pad_15807__$1 = G__15811;
strs_15808__$1 = G__15812;
pad_only_15809 = G__15813;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint15814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15814 = (function (writer,meta15815){
this.writer = writer;
this.meta15815 = meta15815;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15816,meta15815__$1){
var self__ = this;
var _15816__$1 = this;
return (new cljs.pprint.t_cljs$pprint15814(self__.writer,meta15815__$1));
});

cljs.pprint.t_cljs$pprint15814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15816){
var self__ = this;
var _15816__$1 = this;
return self__.meta15815;
});

cljs.pprint.t_cljs$pprint15814.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint15814.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15817 = cljs.core._EQ_;
var expr__15818 = cljs.core.type(x);
if(cljs.core.truth_((pred__15817.cljs$core$IFn$_invoke$arity$2 ? pred__15817.cljs$core$IFn$_invoke$arity$2(String,expr__15818) : pred__15817.call(null,String,expr__15818)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__15817.cljs$core$IFn$_invoke$arity$2 ? pred__15817.cljs$core$IFn$_invoke$arity$2(Number,expr__15818) : pred__15817.call(null,Number,expr__15818)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15818)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint15814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta15815], null);
});

cljs.pprint.t_cljs$pprint15814.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15814.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15814";

cljs.pprint.t_cljs$pprint15814.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.pprint/t_cljs$pprint15814");
});

cljs.pprint.__GT_t_cljs$pprint15814 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint15814(writer__$1,meta15815){
return (new cljs.pprint.t_cljs$pprint15814(writer__$1,meta15815));
});

}

return (new cljs.pprint.t_cljs$pprint15814(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint15820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15820 = (function (writer,meta15821){
this.writer = writer;
this.meta15821 = meta15821;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15822,meta15821__$1){
var self__ = this;
var _15822__$1 = this;
return (new cljs.pprint.t_cljs$pprint15820(self__.writer,meta15821__$1));
});

cljs.pprint.t_cljs$pprint15820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15822){
var self__ = this;
var _15822__$1 = this;
return self__.meta15821;
});

cljs.pprint.t_cljs$pprint15820.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint15820.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15823 = cljs.core._EQ_;
var expr__15824 = cljs.core.type(x);
if(cljs.core.truth_((pred__15823.cljs$core$IFn$_invoke$arity$2 ? pred__15823.cljs$core$IFn$_invoke$arity$2(String,expr__15824) : pred__15823.call(null,String,expr__15824)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__15823.cljs$core$IFn$_invoke$arity$2 ? pred__15823.cljs$core$IFn$_invoke$arity$2(Number,expr__15824) : pred__15823.call(null,Number,expr__15824)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15824)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint15820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta15821], null);
});

cljs.pprint.t_cljs$pprint15820.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15820.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15820";

cljs.pprint.t_cljs$pprint15820.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.pprint/t_cljs$pprint15820");
});

cljs.pprint.__GT_t_cljs$pprint15820 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint15820(writer__$1,meta15821){
return (new cljs.pprint.t_cljs$pprint15820(writer__$1,meta15821));
});

}

return (new cljs.pprint.t_cljs$pprint15820(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__8796__auto__ = first_QMARK_;
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = f;
if(cljs.core.truth_(and__8796__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__8796__auto__ = m;
if(cljs.core.truth_(and__8796__auto__)){
return (m.index + (1));
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint15826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15826 = (function (writer,last_was_whitespace_QMARK_,meta15827){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta15827 = meta15827;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_15828,meta15827__$1){
var self__ = this;
var _15828__$1 = this;
return (new cljs.pprint.t_cljs$pprint15826(self__.writer,self__.last_was_whitespace_QMARK_,meta15827__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_15828){
var self__ = this;
var _15828__$1 = this;
return self__.meta15827;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15826.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15826.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15829 = cljs.core._EQ_;
var expr__15830 = cljs.core.type(x);
if(cljs.core.truth_((pred__15829.cljs$core$IFn$_invoke$arity$2 ? pred__15829.cljs$core$IFn$_invoke$arity$2(String,expr__15830) : pred__15829.call(null,String,expr__15830)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__15832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__15832);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__15829.cljs$core$IFn$_invoke$arity$2 ? pred__15829.cljs$core$IFn$_invoke$arity$2(Number,expr__15830) : pred__15829.call(null,Number,expr__15830)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15830)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15826.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta15827], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint15826.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15826.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15826";

cljs.pprint.t_cljs$pprint15826.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.pprint/t_cljs$pprint15826");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint15826 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint15826(writer__$1,last_was_whitespace_QMARK___$1,meta15827){
return (new cljs.pprint.t_cljs$pprint15826(writer__$1,last_was_whitespace_QMARK___$1,meta15827));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint15826(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint15833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint15833 = (function (writer,capped,meta15834){
this.writer = writer;
this.capped = capped;
this.meta15834 = meta15834;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint15833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_15835,meta15834__$1){
var self__ = this;
var _15835__$1 = this;
return (new cljs.pprint.t_cljs$pprint15833(self__.writer,self__.capped,meta15834__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint15833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_15835){
var self__ = this;
var _15835__$1 = this;
return self__.meta15834;
});})(capped))
;

cljs.pprint.t_cljs$pprint15833.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint15833.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__15836 = cljs.core._EQ_;
var expr__15837 = cljs.core.type(x);
if(cljs.core.truth_((pred__15836.cljs$core$IFn$_invoke$arity$2 ? pred__15836.cljs$core$IFn$_invoke$arity$2(String,expr__15837) : pred__15836.call(null,String,expr__15837)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__8796__auto__ = m;
if(cljs.core.truth_(and__8796__auto__)){
return m.index;
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__15836.cljs$core$IFn$_invoke$arity$2 ? pred__15836.cljs$core$IFn$_invoke$arity$2(Number,expr__15837) : pred__15836.call(null,Number,expr__15837)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__8796__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__8796__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15837)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint15833.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta15834], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint15833.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint15833.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint15833";

cljs.pprint.t_cljs$pprint15833.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.pprint/t_cljs$pprint15833");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint15833 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint15833(writer__$1,capped__$1,meta15834){
return (new cljs.pprint.t_cljs$pprint15833(writer__$1,capped__$1,meta15834));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint15833(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_15839 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15839;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_15841 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_15842 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_15843 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_15844 = (((current_15843 < colnum_15841))?(colnum_15841 - current_15843):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_15842,(0)))?(0):(colinc_15842 - cljs.core.rem((current_15843 - colnum_15841),colinc_15842))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_15844," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_15845 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_15846 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_15847 = (colrel_15845 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_15848 = (((colinc_15846 > (0)))?cljs.core.rem(start_col_15847,colinc_15846):(0));
var space_count_15849 = (colrel_15845 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_15848))?(0):(colinc_15846 - offset_15848)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_15849," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__15850 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15850,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15850,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_15853_15855 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_15854_15856 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_15854_15856;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_15853_15855;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15857_SHARP_,p2__15858_SHARP_,p3__15859_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__15857_SHARP_,p2__15858_SHARP_,p3__15859_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15860_SHARP_,p2__15861_SHARP_,p3__15862_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__15860_SHARP_,p2__15861_SHARP_,p3__15862_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15863_SHARP_,p2__15864_SHARP_,p3__15865_SHARP_){
return cljs.pprint.format_integer((10),p1__15863_SHARP_,p2__15864_SHARP_,p3__15865_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15866_SHARP_,p2__15867_SHARP_,p3__15868_SHARP_){
return cljs.pprint.format_integer((2),p1__15866_SHARP_,p2__15867_SHARP_,p3__15868_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15869_SHARP_,p2__15870_SHARP_,p3__15871_SHARP_){
return cljs.pprint.format_integer((8),p1__15869_SHARP_,p2__15870_SHARP_,p3__15871_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__15872_SHARP_,p2__15873_SHARP_,p3__15874_SHARP_){
return cljs.pprint.format_integer((16),p1__15872_SHARP_,p2__15873_SHARP_,p3__15874_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__15875_SHARP_,p2__15876_SHARP_,p3__15877_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__15875_SHARP_),p1__15875_SHARP_,p2__15876_SHARP_,p3__15877_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8796__auto__;
}
})())){
return (function (p1__15878_SHARP_,p2__15879_SHARP_,p3__15880_SHARP_){
return cljs.pprint.format_old_roman(p1__15878_SHARP_,p2__15879_SHARP_,p3__15880_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__15881_SHARP_,p2__15882_SHARP_,p3__15883_SHARP_){
return cljs.pprint.format_new_roman(p1__15881_SHARP_,p2__15882_SHARP_,p3__15883_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__15884_SHARP_,p2__15885_SHARP_,p3__15886_SHARP_){
return cljs.pprint.format_ordinal_english(p1__15884_SHARP_,p2__15885_SHARP_,p3__15886_SHARP_);
});
} else {
return (function (p1__15887_SHARP_,p2__15888_SHARP_,p3__15889_SHARP_){
return cljs.pprint.format_cardinal_english(p1__15887_SHARP_,p2__15888_SHARP_,p3__15889_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__15899 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15899,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15899,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9853__auto___15917 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_15918 = (0);
while(true){
if((i_15918 < n__9853__auto___15917)){
cljs.pprint.prn();

var G__15919 = (i_15918 + (1));
i_15918 = G__15919;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_15920 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_15920 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__9853__auto___15921 = (cnt_15920 - (1));
var i_15922 = (0);
while(true){
if((i_15922 < n__9853__auto___15921)){
cljs.pprint.prn();

var G__15923 = (i_15922 + (1));
i_15922 = G__15923;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__9853__auto___15924 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_15925 = (0);
while(true){
if((i_15925 < n__9853__auto___15924)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__15926 = (i_15925 + (1));
i_15925 = G__15926;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__15890_SHARP_,p2__15891_SHARP_,p3__15892_SHARP_){
return cljs.pprint.relative_tabulation(p1__15890_SHARP_,p2__15891_SHARP_,p3__15892_SHARP_);
});
} else {
return (function (p1__15893_SHARP_,p2__15894_SHARP_,p3__15895_SHARP_){
return cljs.pprint.absolute_tabulation(p1__15893_SHARP_,p2__15894_SHARP_,p3__15895_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__15902 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15902,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15902,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__15905 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15905,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15905,(1),null);
var vec__15908 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15908,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15908,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8796__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__15896_SHARP_,p2__15897_SHARP_,p3__15898_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__15896_SHARP_,p2__15897_SHARP_,p3__15898_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__8796__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__8796__auto__ = arg1;
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = arg2;
if(cljs.core.truth_(and__8796__auto____$1)){
return arg3;
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = arg1;
if(cljs.core.truth_(and__8796__auto__)){
return arg2;
} else {
return and__8796__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__15911 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15911,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15911,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__15914 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15914,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15914,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__15927){
var vec__15928 = p__15927;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15928,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15928,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15928,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__15931){
var vec__15932 = p__15931;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15932,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15932,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__15935){
var vec__15936 = p__15935;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8796__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8796__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8796__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8796__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__8796__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__9167__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__9168__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__9167__auto__ < y__9168__auto__) ? x__9167__auto__ : y__9168__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__15939_SHARP_,p2__15940_SHARP_){
var val = cljs.core.first(p1__15939_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__15940_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__15940_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__15939_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__9690__auto__ = (function cljs$pprint$map_params_$_iter__15944(s__15945){
return (new cljs.core.LazySeq(null,(function (){
var s__15945__$1 = s__15945;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__15945__$1);
if(temp__5457__auto__){
var s__15945__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15945__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__15945__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__15947 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__15946 = (0);
while(true){
if((i__15946 < size__9689__auto__)){
var vec__15948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__15946);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15948,(0),null);
var vec__15951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15948,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15951,(0),null);
cljs.core.chunk_append(b__15947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__15960 = (i__15946 + (1));
i__15946 = G__15960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15947),cljs$pprint$map_params_$_iter__15944(cljs.core.chunk_rest(s__15945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15947),null);
}
} else {
var vec__15954 = cljs.core.first(s__15945__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15954,(0),null);
var vec__15957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15954,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15957,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__15944(cljs.core.rest(s__15945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15941_SHARP_,p2__15942_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__15941_SHARP_,p2__15942_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15943_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__15943_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__15961 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15961,(0),null);
var vec__15964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15961,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15964,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15964,(1),null);
var vec__15967 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15967,(0),null);
var vec__15970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15967,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__15973 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__15973.cljs$core$IFn$_invoke$arity$2 ? fexpr__15973.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__15973.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__8796__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__8796__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__15974 = (function (){var G__15977 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__15978 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__15979 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__15977,G__15978,G__15979) : cljs.pprint.collect_clauses.call(null,G__15977,G__15978,G__15979));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15974,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15974,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__15980){
var vec__15981 = p__15980;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15981,(2),null);
var vec__15984 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15984,(0),null);
var vec__15987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15984,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15987,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15987,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15987,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15987,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_15990 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_15990){
return (function (p__15991){
var vec__15992 = p__15991;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15992,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15992,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_15990))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_15990;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__15995 = cljs.core.next(format__$1);
format__$1 = G__15995;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__15997 = arguments.length;
switch (G__15997) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__8796__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__8796__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_15998 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_15998;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__15999 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15999,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15999,(1),null);
var vec__16002 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16002,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16002,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__16006 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__16006) : cljs.pprint.reader_macros.call(null,G__16006));
})();
if(cljs.core.truth_((function (){var and__8796__auto__ = macro_char;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__8796__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16007_16010 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16008_16011 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count16009_16012 = (0);
var alis_16013__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16009_16012 < cljs.core._STAR_print_length_STAR_))){
if(alis_16013__$1){
cljs.pprint.write_out(cljs.core.first(alis_16013__$1));

if(cljs.core.next(alis_16013__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16014 = (length_count16009_16012 + (1));
var G__16015 = cljs.core.next(alis_16013__$1);
length_count16009_16012 = G__16014;
alis_16013__$1 = G__16015;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16008_16011;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16007_16010;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16016_16019 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16017_16020 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count16018_16021 = (0);
var aseq_16022 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16018_16021 < cljs.core._STAR_print_length_STAR_))){
if(aseq_16022){
cljs.pprint.write_out(cljs.core.first(aseq_16022));

if(cljs.core.next(aseq_16022)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16023 = (length_count16018_16021 + (1));
var G__16024 = cljs.core.next(aseq_16022);
length_count16018_16021 = G__16023;
aseq_16022 = G__16024;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16017_16020;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16016_16019;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__15115__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__){
return (function() { 
var G__16025__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16025 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16026__i = 0, G__16026__a = new Array(arguments.length -  0);
while (G__16026__i < G__16026__a.length) {G__16026__a[G__16026__i] = arguments[G__16026__i + 0]; ++G__16026__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16026__a,0,null);
} 
return G__16025__delegate.call(this,args__15117__auto__);};
G__16025.cljs$lang$maxFixedArity = 0;
G__16025.cljs$lang$applyTo = (function (arglist__16027){
var args__15117__auto__ = cljs.core.seq(arglist__16027);
return G__16025__delegate(args__15117__auto__);
});
G__16025.cljs$core$IFn$_invoke$arity$variadic = G__16025__delegate;
return G__16025;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__16028 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__16031 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9841,9841,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__16031.cljs$core$IFn$_invoke$arity$1 ? fexpr__16031.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__16031.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16028,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16028,(1),null);
var amap__$1 = (function (){var or__8808__auto__ = lift_map;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16032_16037 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16033_16038 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count16034_16039 = (0);
var aseq_16040 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16034_16039 < cljs.core._STAR_print_length_STAR_))){
if(aseq_16040){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16035_16041 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16036_16042 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_16040));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_16040)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16036_16042;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16035_16041;
}}


if(cljs.core.next(aseq_16040)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16043 = (length_count16034_16039 + (1));
var G__16044 = cljs.core.next(aseq_16040);
length_count16034_16039 = G__16043;
aseq_16040 = G__16044;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16033_16038;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16032_16037;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__15115__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__){
return (function() { 
var G__16045__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16045 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16046__i = 0, G__16046__a = new Array(arguments.length -  0);
while (G__16046__i < G__16046__a.length) {G__16046__a[G__16046__i] = arguments[G__16046__i + 0]; ++G__16046__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16046__a,0,null);
} 
return G__16045__delegate.call(this,args__15117__auto__);};
G__16045.cljs$lang$maxFixedArity = 0;
G__16045.cljs$lang$applyTo = (function (arglist__16047){
var args__15117__auto__ = cljs.core.seq(arglist__16047);
return G__16045__delegate(args__15117__auto__);
});
G__16045.cljs$core$IFn$_invoke$arity$variadic = G__16045__delegate;
return G__16045;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__8808__auto__ = (function (){var temp__5457__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16048_16052 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16049_16053 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__8796__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__8796__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__8796__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16049_16053;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16048_16052;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__15115__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__){
return (function() { 
var G__16054__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16054 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16055__i = 0, G__16055__a = new Array(arguments.length -  0);
while (G__16055__i < G__16055__a.length) {G__16055__a[G__16055__i] = arguments[G__16055__i + 0]; ++G__16055__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16055__a,0,null);
} 
return G__16054__delegate.call(this,args__15117__auto__);};
G__16054.cljs$lang$maxFixedArity = 0;
G__16054.cljs$lang$applyTo = (function (arglist__16056){
var args__15117__auto__ = cljs.core.seq(arglist__16056);
return G__16054__delegate(args__15117__auto__);
});
G__16054.cljs$core$IFn$_invoke$arity$variadic = G__16054__delegate;
return G__16054;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__16058 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16058,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16058,(1),null);
var vec__16061 = reference;
var seq__16062 = cljs.core.seq(vec__16061);
var first__16063 = cljs.core.first(seq__16062);
var seq__16062__$1 = cljs.core.next(seq__16062);
var keyw = first__16063;
var args = seq__16062__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16064_16080 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16065_16081 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__16066_16082 = (function (){var format_in__15115__auto__ = "~w~:i";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args){
return (function() { 
var G__16083__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16083 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16084__i = 0, G__16084__a = new Array(arguments.length -  0);
while (G__16084__i < G__16084__a.length) {G__16084__a[G__16084__i] = arguments[G__16084__i + 0]; ++G__16084__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16084__a,0,null);
} 
return G__16083__delegate.call(this,args__15117__auto__);};
G__16083.cljs$lang$maxFixedArity = 0;
G__16083.cljs$lang$applyTo = (function (arglist__16085){
var args__15117__auto__ = cljs.core.seq(arglist__16085);
return G__16083__delegate(args__15117__auto__);
});
G__16083.cljs$core$IFn$_invoke$arity$variadic = G__16083__delegate;
return G__16083;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args))
})();
(fexpr__16066_16082.cljs$core$IFn$_invoke$arity$1 ? fexpr__16066_16082.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__16066_16082.call(null,keyw));

var args_16086__$1 = args;
while(true){
if(cljs.core.seq(args_16086__$1)){
var fexpr__16067_16087 = (function (){var format_in__15115__auto__ = " ";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (args_16086__$1,format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args){
return (function() { 
var G__16088__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16088 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16089__i = 0, G__16089__a = new Array(arguments.length -  0);
while (G__16089__i < G__16089__a.length) {G__16089__a[G__16089__i] = arguments[G__16089__i + 0]; ++G__16089__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16089__a,0,null);
} 
return G__16088__delegate.call(this,args__15117__auto__);};
G__16088.cljs$lang$maxFixedArity = 0;
G__16088.cljs$lang$applyTo = (function (arglist__16090){
var args__15117__auto__ = cljs.core.seq(arglist__16090);
return G__16088__delegate(args__15117__auto__);
});
G__16088.cljs$core$IFn$_invoke$arity$variadic = G__16088__delegate;
return G__16088;
})()
;
;})(args_16086__$1,format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args))
})();
(fexpr__16067_16087.cljs$core$IFn$_invoke$arity$0 ? fexpr__16067_16087.cljs$core$IFn$_invoke$arity$0() : fexpr__16067_16087.call(null));

var arg_16091 = cljs.core.first(args_16086__$1);
if(cljs.core.sequential_QMARK_(arg_16091)){
var vec__16068_16092 = cljs.pprint.brackets(arg_16091);
var start_16093__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16068_16092,(0),null);
var end_16094__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16068_16092,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16071_16095 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16072_16096 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_16093__$1,null,end_16094__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_16091),(3))) && ((cljs.core.second(arg_16091) instanceof cljs.core.Keyword))){
var vec__16073_16097 = arg_16091;
var ns_16098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16073_16097,(0),null);
var kw_16099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16073_16097,(1),null);
var lis_16100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16073_16097,(2),null);
var fexpr__16076_16101 = (function (){var format_in__15115__auto__ = "~w ~w ";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (args_16086__$1,format_in__15115__auto__,cf__15116__auto__,vec__16073_16097,ns_16098,kw_16099,lis_16100,_STAR_current_level_STAR_16071_16095,_STAR_current_length_STAR_16072_16096,vec__16068_16092,start_16093__$1,end_16094__$1,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args){
return (function() { 
var G__16102__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16102 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16103__i = 0, G__16103__a = new Array(arguments.length -  0);
while (G__16103__i < G__16103__a.length) {G__16103__a[G__16103__i] = arguments[G__16103__i + 0]; ++G__16103__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16103__a,0,null);
} 
return G__16102__delegate.call(this,args__15117__auto__);};
G__16102.cljs$lang$maxFixedArity = 0;
G__16102.cljs$lang$applyTo = (function (arglist__16104){
var args__15117__auto__ = cljs.core.seq(arglist__16104);
return G__16102__delegate(args__15117__auto__);
});
G__16102.cljs$core$IFn$_invoke$arity$variadic = G__16102__delegate;
return G__16102;
})()
;
;})(args_16086__$1,format_in__15115__auto__,cf__15116__auto__,vec__16073_16097,ns_16098,kw_16099,lis_16100,_STAR_current_level_STAR_16071_16095,_STAR_current_length_STAR_16072_16096,vec__16068_16092,start_16093__$1,end_16094__$1,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args))
})();
(fexpr__16076_16101.cljs$core$IFn$_invoke$arity$2 ? fexpr__16076_16101.cljs$core$IFn$_invoke$arity$2(ns_16098,kw_16099) : fexpr__16076_16101.call(null,ns_16098,kw_16099));

if(cljs.core.sequential_QMARK_(lis_16100)){
var fexpr__16077_16105 = (function (){var format_in__15115__auto__ = ((cljs.core.vector_QMARK_(lis_16100))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (args_16086__$1,format_in__15115__auto__,cf__15116__auto__,vec__16073_16097,ns_16098,kw_16099,lis_16100,_STAR_current_level_STAR_16071_16095,_STAR_current_length_STAR_16072_16096,vec__16068_16092,start_16093__$1,end_16094__$1,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args){
return (function() { 
var G__16106__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16106 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16107__i = 0, G__16107__a = new Array(arguments.length -  0);
while (G__16107__i < G__16107__a.length) {G__16107__a[G__16107__i] = arguments[G__16107__i + 0]; ++G__16107__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16107__a,0,null);
} 
return G__16106__delegate.call(this,args__15117__auto__);};
G__16106.cljs$lang$maxFixedArity = 0;
G__16106.cljs$lang$applyTo = (function (arglist__16108){
var args__15117__auto__ = cljs.core.seq(arglist__16108);
return G__16106__delegate(args__15117__auto__);
});
G__16106.cljs$core$IFn$_invoke$arity$variadic = G__16106__delegate;
return G__16106;
})()
;
;})(args_16086__$1,format_in__15115__auto__,cf__15116__auto__,vec__16073_16097,ns_16098,kw_16099,lis_16100,_STAR_current_level_STAR_16071_16095,_STAR_current_length_STAR_16072_16096,vec__16068_16092,start_16093__$1,end_16094__$1,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args))
})();
(fexpr__16077_16105.cljs$core$IFn$_invoke$arity$1 ? fexpr__16077_16105.cljs$core$IFn$_invoke$arity$1(lis_16100) : fexpr__16077_16105.call(null,lis_16100));
} else {
cljs.pprint.write_out(lis_16100);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__15115__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (args_16086__$1,format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16071_16095,_STAR_current_length_STAR_16072_16096,vec__16068_16092,start_16093__$1,end_16094__$1,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args){
return (function() { 
var G__16109__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16109 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16110__i = 0, G__16110__a = new Array(arguments.length -  0);
while (G__16110__i < G__16110__a.length) {G__16110__a[G__16110__i] = arguments[G__16110__i + 0]; ++G__16110__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16110__a,0,null);
} 
return G__16109__delegate.call(this,args__15117__auto__);};
G__16109.cljs$lang$maxFixedArity = 0;
G__16109.cljs$lang$applyTo = (function (arglist__16111){
var args__15117__auto__ = cljs.core.seq(arglist__16111);
return G__16109__delegate(args__15117__auto__);
});
G__16109.cljs$core$IFn$_invoke$arity$variadic = G__16109__delegate;
return G__16109;
})()
;
;})(args_16086__$1,format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16071_16095,_STAR_current_length_STAR_16072_16096,vec__16068_16092,start_16093__$1,end_16094__$1,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args))
})(),arg_16091);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16072_16096;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16071_16095;
}}


if(cljs.core.next(args_16086__$1)){
var fexpr__16078_16112 = (function (){var format_in__15115__auto__ = "~_";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (args_16086__$1,format_in__15115__auto__,cf__15116__auto__,vec__16068_16092,start_16093__$1,end_16094__$1,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args){
return (function() { 
var G__16113__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16113 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16114__i = 0, G__16114__a = new Array(arguments.length -  0);
while (G__16114__i < G__16114__a.length) {G__16114__a[G__16114__i] = arguments[G__16114__i + 0]; ++G__16114__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16114__a,0,null);
} 
return G__16113__delegate.call(this,args__15117__auto__);};
G__16113.cljs$lang$maxFixedArity = 0;
G__16113.cljs$lang$applyTo = (function (arglist__16115){
var args__15117__auto__ = cljs.core.seq(arglist__16115);
return G__16113__delegate(args__15117__auto__);
});
G__16113.cljs$core$IFn$_invoke$arity$variadic = G__16113__delegate;
return G__16113;
})()
;
;})(args_16086__$1,format_in__15115__auto__,cf__15116__auto__,vec__16068_16092,start_16093__$1,end_16094__$1,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args))
})();
(fexpr__16078_16112.cljs$core$IFn$_invoke$arity$0 ? fexpr__16078_16112.cljs$core$IFn$_invoke$arity$0() : fexpr__16078_16112.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_16091);

if(cljs.core.next(args_16086__$1)){
var fexpr__16079_16116 = (function (){var format_in__15115__auto__ = "~:_";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (args_16086__$1,format_in__15115__auto__,cf__15116__auto__,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args){
return (function() { 
var G__16117__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16117 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16118__i = 0, G__16118__a = new Array(arguments.length -  0);
while (G__16118__i < G__16118__a.length) {G__16118__a[G__16118__i] = arguments[G__16118__i + 0]; ++G__16118__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16118__a,0,null);
} 
return G__16117__delegate.call(this,args__15117__auto__);};
G__16117.cljs$lang$maxFixedArity = 0;
G__16117.cljs$lang$applyTo = (function (arglist__16119){
var args__15117__auto__ = cljs.core.seq(arglist__16119);
return G__16117__delegate(args__15117__auto__);
});
G__16117.cljs$core$IFn$_invoke$arity$variadic = G__16117__delegate;
return G__16117;
})()
;
;})(args_16086__$1,format_in__15115__auto__,cf__15116__auto__,arg_16091,_STAR_current_level_STAR_16064_16080,_STAR_current_length_STAR_16065_16081,vec__16058,start,end,vec__16061,seq__16062,first__16063,seq__16062__$1,keyw,args))
})();
(fexpr__16079_16116.cljs$core$IFn$_invoke$arity$0 ? fexpr__16079_16116.cljs$core$IFn$_invoke$arity$0() : fexpr__16079_16116.call(null));
} else {
}
}

var G__16120 = cljs.core.next(args_16086__$1);
args_16086__$1 = G__16120;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16065_16081;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16064_16080;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__16121 = alis;
var seq__16122 = cljs.core.seq(vec__16121);
var first__16123 = cljs.core.first(seq__16122);
var seq__16122__$1 = cljs.core.next(seq__16122);
var ns_sym = first__16123;
var first__16123__$1 = cljs.core.first(seq__16122__$1);
var seq__16122__$2 = cljs.core.next(seq__16122__$1);
var ns_name = first__16123__$1;
var stuff = seq__16122__$2;
var vec__16124 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16124,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16124,(1),null);
var vec__16127 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16127,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16127,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16130_16137 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16131_16138 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__16132_16139 = (function (){var format_in__15115__auto__ = "~w ~1I~@_~w";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16130_16137,_STAR_current_length_STAR_16131_16138,vec__16121,seq__16122,first__16123,seq__16122__$1,ns_sym,first__16123__$1,seq__16122__$2,ns_name,stuff,vec__16124,doc_str,stuff__$1,vec__16127,attr_map,references){
return (function() { 
var G__16140__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16140 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16141__i = 0, G__16141__a = new Array(arguments.length -  0);
while (G__16141__i < G__16141__a.length) {G__16141__a[G__16141__i] = arguments[G__16141__i + 0]; ++G__16141__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16141__a,0,null);
} 
return G__16140__delegate.call(this,args__15117__auto__);};
G__16140.cljs$lang$maxFixedArity = 0;
G__16140.cljs$lang$applyTo = (function (arglist__16142){
var args__15117__auto__ = cljs.core.seq(arglist__16142);
return G__16140__delegate(args__15117__auto__);
});
G__16140.cljs$core$IFn$_invoke$arity$variadic = G__16140__delegate;
return G__16140;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16130_16137,_STAR_current_length_STAR_16131_16138,vec__16121,seq__16122,first__16123,seq__16122__$1,ns_sym,first__16123__$1,seq__16122__$2,ns_name,stuff,vec__16124,doc_str,stuff__$1,vec__16127,attr_map,references))
})();
(fexpr__16132_16139.cljs$core$IFn$_invoke$arity$2 ? fexpr__16132_16139.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__16132_16139.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__8808__auto__ = doc_str;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = attr_map;
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__16133_16143 = (function (){var format_in__15115__auto__ = "~@:_";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16130_16137,_STAR_current_length_STAR_16131_16138,vec__16121,seq__16122,first__16123,seq__16122__$1,ns_sym,first__16123__$1,seq__16122__$2,ns_name,stuff,vec__16124,doc_str,stuff__$1,vec__16127,attr_map,references){
return (function() { 
var G__16144__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16144 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16145__i = 0, G__16145__a = new Array(arguments.length -  0);
while (G__16145__i < G__16145__a.length) {G__16145__a[G__16145__i] = arguments[G__16145__i + 0]; ++G__16145__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16145__a,0,null);
} 
return G__16144__delegate.call(this,args__15117__auto__);};
G__16144.cljs$lang$maxFixedArity = 0;
G__16144.cljs$lang$applyTo = (function (arglist__16146){
var args__15117__auto__ = cljs.core.seq(arglist__16146);
return G__16144__delegate(args__15117__auto__);
});
G__16144.cljs$core$IFn$_invoke$arity$variadic = G__16144__delegate;
return G__16144;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16130_16137,_STAR_current_length_STAR_16131_16138,vec__16121,seq__16122,first__16123,seq__16122__$1,ns_sym,first__16123__$1,seq__16122__$2,ns_name,stuff,vec__16124,doc_str,stuff__$1,vec__16127,attr_map,references))
})();
(fexpr__16133_16143.cljs$core$IFn$_invoke$arity$0 ? fexpr__16133_16143.cljs$core$IFn$_invoke$arity$0() : fexpr__16133_16143.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__8808__auto__ = attr_map;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__16135_16147 = attr_map;
var G__16136_16148 = cljs.core.seq(references);
var fexpr__16134_16149 = (function (){var format_in__15115__auto__ = "~w~:[~;~:@_~]";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,G__16135_16147,G__16136_16148,_STAR_current_level_STAR_16130_16137,_STAR_current_length_STAR_16131_16138,vec__16121,seq__16122,first__16123,seq__16122__$1,ns_sym,first__16123__$1,seq__16122__$2,ns_name,stuff,vec__16124,doc_str,stuff__$1,vec__16127,attr_map,references){
return (function() { 
var G__16150__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16150 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16151__i = 0, G__16151__a = new Array(arguments.length -  0);
while (G__16151__i < G__16151__a.length) {G__16151__a[G__16151__i] = arguments[G__16151__i + 0]; ++G__16151__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16151__a,0,null);
} 
return G__16150__delegate.call(this,args__15117__auto__);};
G__16150.cljs$lang$maxFixedArity = 0;
G__16150.cljs$lang$applyTo = (function (arglist__16152){
var args__15117__auto__ = cljs.core.seq(arglist__16152);
return G__16150__delegate(args__15117__auto__);
});
G__16150.cljs$core$IFn$_invoke$arity$variadic = G__16150__delegate;
return G__16150;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,G__16135_16147,G__16136_16148,_STAR_current_level_STAR_16130_16137,_STAR_current_length_STAR_16131_16138,vec__16121,seq__16122,first__16123,seq__16122__$1,ns_sym,first__16123__$1,seq__16122__$2,ns_name,stuff,vec__16124,doc_str,stuff__$1,vec__16127,attr_map,references))
})();
(fexpr__16134_16149.cljs$core$IFn$_invoke$arity$2 ? fexpr__16134_16149.cljs$core$IFn$_invoke$arity$2(G__16135_16147,G__16136_16148) : fexpr__16134_16149.call(null,G__16135_16147,G__16136_16148));
} else {
}

var references_16153__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_16153__$1));

var temp__5457__auto___16154 = cljs.core.next(references_16153__$1);
if(temp__5457__auto___16154){
var references_16155__$2 = temp__5457__auto___16154;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16156 = references_16155__$2;
references_16153__$1 = G__16156;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16131_16138;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16130_16137;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__15115__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__){
return (function() { 
var G__16157__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16157 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16158__i = 0, G__16158__a = new Array(arguments.length -  0);
while (G__16158__i < G__16158__a.length) {G__16158__a[G__16158__i] = arguments[G__16158__i + 0]; ++G__16158__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16158__a,0,null);
} 
return G__16157__delegate.call(this,args__15117__auto__);};
G__16157.cljs$lang$maxFixedArity = 0;
G__16157.cljs$lang$applyTo = (function (arglist__16159){
var args__15117__auto__ = cljs.core.seq(arglist__16159);
return G__16157__delegate(args__15117__auto__);
});
G__16157.cljs$core$IFn$_invoke$arity$variadic = G__16157__delegate;
return G__16157;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__16160_16163 = (function (){var format_in__15115__auto__ = " ~_";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__){
return (function() { 
var G__16164__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16164 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16165__i = 0, G__16165__a = new Array(arguments.length -  0);
while (G__16165__i < G__16165__a.length) {G__16165__a[G__16165__i] = arguments[G__16165__i + 0]; ++G__16165__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16165__a,0,null);
} 
return G__16164__delegate.call(this,args__15117__auto__);};
G__16164.cljs$lang$maxFixedArity = 0;
G__16164.cljs$lang$applyTo = (function (arglist__16166){
var args__15117__auto__ = cljs.core.seq(arglist__16166);
return G__16164__delegate(args__15117__auto__);
});
G__16164.cljs$core$IFn$_invoke$arity$variadic = G__16164__delegate;
return G__16164;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__))
})();
(fexpr__16160_16163.cljs$core$IFn$_invoke$arity$0 ? fexpr__16160_16163.cljs$core$IFn$_invoke$arity$0() : fexpr__16160_16163.call(null));
} else {
var fexpr__16161_16167 = (function (){var format_in__15115__auto__ = " ~@_";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__){
return (function() { 
var G__16168__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16168 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16169__i = 0, G__16169__a = new Array(arguments.length -  0);
while (G__16169__i < G__16169__a.length) {G__16169__a[G__16169__i] = arguments[G__16169__i + 0]; ++G__16169__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16169__a,0,null);
} 
return G__16168__delegate.call(this,args__15117__auto__);};
G__16168.cljs$lang$maxFixedArity = 0;
G__16168.cljs$lang$applyTo = (function (arglist__16170){
var args__15117__auto__ = cljs.core.seq(arglist__16170);
return G__16168__delegate(args__15117__auto__);
});
G__16168.cljs$core$IFn$_invoke$arity$variadic = G__16168__delegate;
return G__16168;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__))
})();
(fexpr__16161_16167.cljs$core$IFn$_invoke$arity$0 ? fexpr__16161_16167.cljs$core$IFn$_invoke$arity$0() : fexpr__16161_16167.call(null));
}

var fexpr__16162 = (function (){var format_in__15115__auto__ = "~{~w~^ ~_~}";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__){
return (function() { 
var G__16171__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16171 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16172__i = 0, G__16172__a = new Array(arguments.length -  0);
while (G__16172__i < G__16172__a.length) {G__16172__a[G__16172__i] = arguments[G__16172__i + 0]; ++G__16172__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16172__a,0,null);
} 
return G__16171__delegate.call(this,args__15117__auto__);};
G__16171.cljs$lang$maxFixedArity = 0;
G__16171.cljs$lang$applyTo = (function (arglist__16173){
var args__15117__auto__ = cljs.core.seq(arglist__16173);
return G__16171__delegate(args__15117__auto__);
});
G__16171.cljs$core$IFn$_invoke$arity$variadic = G__16171__delegate;
return G__16171;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__))
})();
return (fexpr__16162.cljs$core$IFn$_invoke$arity$1 ? fexpr__16162.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__16162.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__16174 = (function (){var format_in__15115__auto__ = " ~_~{~w~^ ~_~}";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__){
return (function() { 
var G__16175__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16175 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16176__i = 0, G__16176__a = new Array(arguments.length -  0);
while (G__16176__i < G__16176__a.length) {G__16176__a[G__16176__i] = arguments[G__16176__i + 0]; ++G__16176__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16176__a,0,null);
} 
return G__16175__delegate.call(this,args__15117__auto__);};
G__16175.cljs$lang$maxFixedArity = 0;
G__16175.cljs$lang$applyTo = (function (arglist__16177){
var args__15117__auto__ = cljs.core.seq(arglist__16177);
return G__16175__delegate(args__15117__auto__);
});
G__16175.cljs$core$IFn$_invoke$arity$variadic = G__16175__delegate;
return G__16175;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__))
})();
return (fexpr__16174.cljs$core$IFn$_invoke$arity$1 ? fexpr__16174.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__16174.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__16178 = alis;
var seq__16179 = cljs.core.seq(vec__16178);
var first__16180 = cljs.core.first(seq__16179);
var seq__16179__$1 = cljs.core.next(seq__16179);
var defn_sym = first__16180;
var first__16180__$1 = cljs.core.first(seq__16179__$1);
var seq__16179__$2 = cljs.core.next(seq__16179__$1);
var defn_name = first__16180__$1;
var stuff = seq__16179__$2;
var vec__16181 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16181,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16181,(1),null);
var vec__16184 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16184,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16184,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16187_16192 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16188_16193 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__16189_16194 = (function (){var format_in__15115__auto__ = "~w ~1I~@_~w";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16187_16192,_STAR_current_length_STAR_16188_16193,vec__16178,seq__16179,first__16180,seq__16179__$1,defn_sym,first__16180__$1,seq__16179__$2,defn_name,stuff,vec__16181,doc_str,stuff__$1,vec__16184,attr_map,stuff__$2){
return (function() { 
var G__16195__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16195 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16196__i = 0, G__16196__a = new Array(arguments.length -  0);
while (G__16196__i < G__16196__a.length) {G__16196__a[G__16196__i] = arguments[G__16196__i + 0]; ++G__16196__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16196__a,0,null);
} 
return G__16195__delegate.call(this,args__15117__auto__);};
G__16195.cljs$lang$maxFixedArity = 0;
G__16195.cljs$lang$applyTo = (function (arglist__16197){
var args__15117__auto__ = cljs.core.seq(arglist__16197);
return G__16195__delegate(args__15117__auto__);
});
G__16195.cljs$core$IFn$_invoke$arity$variadic = G__16195__delegate;
return G__16195;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16187_16192,_STAR_current_length_STAR_16188_16193,vec__16178,seq__16179,first__16180,seq__16179__$1,defn_sym,first__16180__$1,seq__16179__$2,defn_name,stuff,vec__16181,doc_str,stuff__$1,vec__16184,attr_map,stuff__$2))
})();
(fexpr__16189_16194.cljs$core$IFn$_invoke$arity$2 ? fexpr__16189_16194.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__16189_16194.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__16190_16198 = (function (){var format_in__15115__auto__ = " ~_~w";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16187_16192,_STAR_current_length_STAR_16188_16193,vec__16178,seq__16179,first__16180,seq__16179__$1,defn_sym,first__16180__$1,seq__16179__$2,defn_name,stuff,vec__16181,doc_str,stuff__$1,vec__16184,attr_map,stuff__$2){
return (function() { 
var G__16199__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16199 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16200__i = 0, G__16200__a = new Array(arguments.length -  0);
while (G__16200__i < G__16200__a.length) {G__16200__a[G__16200__i] = arguments[G__16200__i + 0]; ++G__16200__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16200__a,0,null);
} 
return G__16199__delegate.call(this,args__15117__auto__);};
G__16199.cljs$lang$maxFixedArity = 0;
G__16199.cljs$lang$applyTo = (function (arglist__16201){
var args__15117__auto__ = cljs.core.seq(arglist__16201);
return G__16199__delegate(args__15117__auto__);
});
G__16199.cljs$core$IFn$_invoke$arity$variadic = G__16199__delegate;
return G__16199;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16187_16192,_STAR_current_length_STAR_16188_16193,vec__16178,seq__16179,first__16180,seq__16179__$1,defn_sym,first__16180__$1,seq__16179__$2,defn_name,stuff,vec__16181,doc_str,stuff__$1,vec__16184,attr_map,stuff__$2))
})();
(fexpr__16190_16198.cljs$core$IFn$_invoke$arity$1 ? fexpr__16190_16198.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__16190_16198.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__16191_16202 = (function (){var format_in__15115__auto__ = " ~_~w";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16187_16192,_STAR_current_length_STAR_16188_16193,vec__16178,seq__16179,first__16180,seq__16179__$1,defn_sym,first__16180__$1,seq__16179__$2,defn_name,stuff,vec__16181,doc_str,stuff__$1,vec__16184,attr_map,stuff__$2){
return (function() { 
var G__16203__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16203 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16204__i = 0, G__16204__a = new Array(arguments.length -  0);
while (G__16204__i < G__16204__a.length) {G__16204__a[G__16204__i] = arguments[G__16204__i + 0]; ++G__16204__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16204__a,0,null);
} 
return G__16203__delegate.call(this,args__15117__auto__);};
G__16203.cljs$lang$maxFixedArity = 0;
G__16203.cljs$lang$applyTo = (function (arglist__16205){
var args__15117__auto__ = cljs.core.seq(arglist__16205);
return G__16203__delegate(args__15117__auto__);
});
G__16203.cljs$core$IFn$_invoke$arity$variadic = G__16203__delegate;
return G__16203;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16187_16192,_STAR_current_length_STAR_16188_16193,vec__16178,seq__16179,first__16180,seq__16179__$1,defn_sym,first__16180__$1,seq__16179__$2,defn_name,stuff,vec__16181,doc_str,stuff__$1,vec__16184,attr_map,stuff__$2))
})();
(fexpr__16191_16202.cljs$core$IFn$_invoke$arity$1 ? fexpr__16191_16202.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__16191_16202.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__8808__auto__ = doc_str;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__8808__auto__ = doc_str;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16188_16193;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16187_16192;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16206_16211 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16207_16212 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count16208_16213 = (0);
var binding_16214 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16208_16213 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_16214)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16209_16215 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16210_16216 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_16214));

if(cljs.core.next(binding_16214)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_16214));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16210_16216;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16209_16215;
}}


if(cljs.core.next(cljs.core.rest(binding_16214))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16217 = (length_count16208_16213 + (1));
var G__16218 = cljs.core.next(cljs.core.rest(binding_16214));
length_count16208_16213 = G__16217;
binding_16214 = G__16218;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16207_16212;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16206_16211;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16219_16224 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16220_16225 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__16221_16226 = (function (){var format_in__15115__auto__ = "~w ~1I~@_";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16219_16224,_STAR_current_length_STAR_16220_16225,base_sym){
return (function() { 
var G__16227__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16227 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16228__i = 0, G__16228__a = new Array(arguments.length -  0);
while (G__16228__i < G__16228__a.length) {G__16228__a[G__16228__i] = arguments[G__16228__i + 0]; ++G__16228__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16228__a,0,null);
} 
return G__16227__delegate.call(this,args__15117__auto__);};
G__16227.cljs$lang$maxFixedArity = 0;
G__16227.cljs$lang$applyTo = (function (arglist__16229){
var args__15117__auto__ = cljs.core.seq(arglist__16229);
return G__16227__delegate(args__15117__auto__);
});
G__16227.cljs$core$IFn$_invoke$arity$variadic = G__16227__delegate;
return G__16227;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16219_16224,_STAR_current_length_STAR_16220_16225,base_sym))
})();
(fexpr__16221_16226.cljs$core$IFn$_invoke$arity$1 ? fexpr__16221_16226.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__16221_16226.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__16223_16230 = cljs.core.next(cljs.core.rest(alis));
var fexpr__16222_16231 = (function (){var format_in__15115__auto__ = " ~_~{~w~^ ~_~}";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,G__16223_16230,_STAR_current_level_STAR_16219_16224,_STAR_current_length_STAR_16220_16225,base_sym){
return (function() { 
var G__16232__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16232 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16233__i = 0, G__16233__a = new Array(arguments.length -  0);
while (G__16233__i < G__16233__a.length) {G__16233__a[G__16233__i] = arguments[G__16233__i + 0]; ++G__16233__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16233__a,0,null);
} 
return G__16232__delegate.call(this,args__15117__auto__);};
G__16232.cljs$lang$maxFixedArity = 0;
G__16232.cljs$lang$applyTo = (function (arglist__16234){
var args__15117__auto__ = cljs.core.seq(arglist__16234);
return G__16232__delegate(args__15117__auto__);
});
G__16232.cljs$core$IFn$_invoke$arity$variadic = G__16232__delegate;
return G__16232;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,G__16223_16230,_STAR_current_level_STAR_16219_16224,_STAR_current_length_STAR_16220_16225,base_sym))
})();
(fexpr__16222_16231.cljs$core$IFn$_invoke$arity$1 ? fexpr__16222_16231.cljs$core$IFn$_invoke$arity$1(G__16223_16230) : fexpr__16222_16231.call(null,G__16223_16230));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16220_16225;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16219_16224;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__15115__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__){
return (function() { 
var G__16235__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16235 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16236__i = 0, G__16236__a = new Array(arguments.length -  0);
while (G__16236__i < G__16236__a.length) {G__16236__a[G__16236__i] = arguments[G__16236__i + 0]; ++G__16236__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16236__a,0,null);
} 
return G__16235__delegate.call(this,args__15117__auto__);};
G__16235.cljs$lang$maxFixedArity = 0;
G__16235.cljs$lang$applyTo = (function (arglist__16237){
var args__15117__auto__ = cljs.core.seq(arglist__16237);
return G__16235__delegate(args__15117__auto__);
});
G__16235.cljs$core$IFn$_invoke$arity$variadic = G__16235__delegate;
return G__16235;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16238_16243 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16239_16244 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count16240_16245 = (0);
var alis_16246__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16240_16245 < cljs.core._STAR_print_length_STAR_))){
if(alis_16246__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16241_16247 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16242_16248 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_16246__$1));

if(cljs.core.next(alis_16246__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_16246__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16242_16248;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16241_16247;
}}


if(cljs.core.next(cljs.core.rest(alis_16246__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16249 = (length_count16240_16245 + (1));
var G__16250 = cljs.core.next(cljs.core.rest(alis_16246__$1));
length_count16240_16245 = G__16249;
alis_16246__$1 = G__16250;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16239_16244;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16238_16243;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16251_16256 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16252_16257 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__15115__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16251_16256,_STAR_current_length_STAR_16252_16257){
return (function() { 
var G__16258__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16258 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16259__i = 0, G__16259__a = new Array(arguments.length -  0);
while (G__16259__i < G__16259__a.length) {G__16259__a[G__16259__i] = arguments[G__16259__i + 0]; ++G__16259__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16259__a,0,null);
} 
return G__16258__delegate.call(this,args__15117__auto__);};
G__16258.cljs$lang$maxFixedArity = 0;
G__16258.cljs$lang$applyTo = (function (arglist__16260){
var args__15117__auto__ = cljs.core.seq(arglist__16260);
return G__16258__delegate(args__15117__auto__);
});
G__16258.cljs$core$IFn$_invoke$arity$variadic = G__16258__delegate;
return G__16258;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,_STAR_current_level_STAR_16251_16256,_STAR_current_length_STAR_16252_16257))
})(),alis);

var length_count16253_16261 = (0);
var alis_16262__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16253_16261 < cljs.core._STAR_print_length_STAR_))){
if(alis_16262__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16254_16263 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16255_16264 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_16262__$1));

if(cljs.core.next(alis_16262__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_16262__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16255_16264;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16254_16263;
}}


if(cljs.core.next(cljs.core.rest(alis_16262__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16265 = (length_count16253_16261 + (1));
var G__16266 = cljs.core.next(cljs.core.rest(alis_16262__$1));
length_count16253_16261 = G__16265;
alis_16262__$1 = G__16266;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16252_16257;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16251_16256;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_16269 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_16269,args,nlis){
return (function (p1__16267_SHARP_,p2__16268_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__16267_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__16268_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_16269,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__16270 = (function (){var format_in__15115__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__15116__auto__ = ((typeof format_in__15115__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__15115__auto__) : cljs.pprint.cached_compile.call(null,format_in__15115__auto__)):format_in__15115__auto__);
return ((function (format_in__15115__auto__,cf__15116__auto__,_STAR_symbol_map_STAR_16269,args,nlis){
return (function() { 
var G__16271__delegate = function (args__15117__auto__){
var navigator__15118__auto__ = cljs.pprint.init_navigator(args__15117__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__15116__auto__,navigator__15118__auto__);
};
var G__16271 = function (var_args){
var args__15117__auto__ = null;
if (arguments.length > 0) {
var G__16272__i = 0, G__16272__a = new Array(arguments.length -  0);
while (G__16272__i < G__16272__a.length) {G__16272__a[G__16272__i] = arguments[G__16272__i + 0]; ++G__16272__i;}
  args__15117__auto__ = new cljs.core.IndexedSeq(G__16272__a,0,null);
} 
return G__16271__delegate.call(this,args__15117__auto__);};
G__16271.cljs$lang$maxFixedArity = 0;
G__16271.cljs$lang$applyTo = (function (arglist__16273){
var args__15117__auto__ = cljs.core.seq(arglist__16273);
return G__16271__delegate(args__15117__auto__);
});
G__16271.cljs$core$IFn$_invoke$arity$variadic = G__16271__delegate;
return G__16271;
})()
;
;})(format_in__15115__auto__,cf__15116__auto__,_STAR_symbol_map_STAR_16269,args,nlis))
})();
return (fexpr__16270.cljs$core$IFn$_invoke$arity$1 ? fexpr__16270.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__16270.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_16269;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_16274_16277 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_16275_16278 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count16276_16279 = (0);
var alis_16280__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count16276_16279 < cljs.core._STAR_print_length_STAR_))){
if(alis_16280__$1){
cljs.pprint.write_out(cljs.core.first(alis_16280__$1));

if(cljs.core.next(alis_16280__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__16281 = (length_count16276_16279 + (1));
var G__16282 = cljs.core.next(alis_16280__$1);
length_count16276_16279 = G__16281;
alis_16280__$1 = G__16282;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_16275_16278;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_16274_16277;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__9690__auto__ = (function cljs$pprint$two_forms_$_iter__16283(s__16284){
return (new cljs.core.LazySeq(null,(function (){
var s__16284__$1 = s__16284;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__16284__$1);
if(temp__5457__auto__){
var s__16284__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16284__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__16284__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__16286 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__16285 = (0);
while(true){
if((i__16285 < size__9689__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__16285);
cljs.core.chunk_append(b__16286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__16287 = (i__16285 + (1));
i__16285 = G__16287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16286),cljs$pprint$two_forms_$_iter__16283(cljs.core.chunk_rest(s__16284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16286),null);
}
} else {
var x = cljs.core.first(s__16284__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__16283(cljs.core.rest(s__16284__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__16288_SHARP_){
var vec__16289 = p1__16288_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16289,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16289,(1),null);
if(cljs.core.not((function (){var or__8808__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__16288_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5455__auto__ = (function (){var G__16292 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__16292) : cljs.pprint._STAR_code_table_STAR_.call(null,G__16292));
})();
if(cljs.core.truth_(temp__5455__auto__)){
var special_form = temp__5455__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5455__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5455__auto__)){
var arg_num = temp__5455__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__9160__auto__ = (0);
var y__9161__auto__ = (width - cljs.core.count(s));
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__16297 = arguments.length;
switch (G__16297) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_16298 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_16298){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_16298){
return (function (p1__16293_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16293_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_16298))
,rows));
});})(_STAR_print_newline_STAR_16298))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_16298){
return (function (p1__16294_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__16294_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_16298))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_16298){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__9690__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_16298){
return (function cljs$pprint$iter__16299(s__16300){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_16298){
return (function (){
var s__16300__$1 = s__16300;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__16300__$1);
if(temp__5457__auto__){
var s__16300__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16300__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__16300__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__16302 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__16301 = (0);
while(true){
if((i__16301 < size__9689__auto__)){
var vec__16303 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__16301);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16303,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16303,(1),null);
cljs.core.chunk_append(b__16302,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__16314 = (i__16301 + (1));
i__16301 = G__16314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16302),cljs$pprint$iter__16299(cljs.core.chunk_rest(s__16300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16302),null);
}
} else {
var vec__16306 = cljs.core.first(s__16300__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16306,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16306,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__16299(cljs.core.rest(s__16300__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_16298))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_16298))
;
return iter__9690__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__9690__auto__,widths,spacers,_STAR_print_newline_STAR_16298){
return (function (p1__16295_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__16295_SHARP_);
});})(iter__9690__auto__,widths,spacers,_STAR_print_newline_STAR_16298))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_16298))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__16309 = cljs.core.seq(rows);
var chunk__16310 = null;
var count__16311 = (0);
var i__16312 = (0);
while(true){
if((i__16312 < count__16311)){
var row = chunk__16310.cljs$core$IIndexed$_nth$arity$2(null,i__16312);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__16315 = seq__16309;
var G__16316 = chunk__16310;
var G__16317 = count__16311;
var G__16318 = (i__16312 + (1));
seq__16309 = G__16315;
chunk__16310 = G__16316;
count__16311 = G__16317;
i__16312 = G__16318;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__16309);
if(temp__5457__auto__){
var seq__16309__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16309__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__16309__$1);
var G__16319 = cljs.core.chunk_rest(seq__16309__$1);
var G__16320 = c__9739__auto__;
var G__16321 = cljs.core.count(c__9739__auto__);
var G__16322 = (0);
seq__16309 = G__16319;
chunk__16310 = G__16320;
count__16311 = G__16321;
i__16312 = G__16322;
continue;
} else {
var row = cljs.core.first(seq__16309__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__16323 = cljs.core.next(seq__16309__$1);
var G__16324 = null;
var G__16325 = (0);
var G__16326 = (0);
seq__16309 = G__16323;
chunk__16310 = G__16324;
count__16311 = G__16325;
i__16312 = G__16326;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16298;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

