// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$(x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
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
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9496__auto__,k__9497__auto__){
var self__ = this;
var this__9496__auto____$1 = this;
return this__9496__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9497__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9498__auto__,k14429,else__9499__auto__){
var self__ = this;
var this__9498__auto____$1 = this;
var G__14433 = k14429;
var G__14433__$1 = (((G__14433 instanceof cljs.core.Keyword))?G__14433.fqn:null);
switch (G__14433__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14429,else__9499__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9510__auto__,writer__9511__auto__,opts__9512__auto__){
var self__ = this;
var this__9510__auto____$1 = this;
var pr_pair__9513__auto__ = ((function (this__9510__auto____$1){
return (function (keyval__9514__auto__){
return cljs.core.pr_sequential_writer(writer__9511__auto__,cljs.core.pr_writer,""," ","",opts__9512__auto__,keyval__9514__auto__);
});})(this__9510__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9511__auto__,pr_pair__9513__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__9512__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$splicing_QMARK_,self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$form,self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14428){
var self__ = this;
var G__14428__$1 = this;
return (new cljs.core.RecordIter((0),G__14428__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splicing_QMARK_,cljs.core.cst$kw$form], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9494__auto__){
var self__ = this;
var this__9494__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9491__auto__){
var self__ = this;
var this__9491__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9500__auto__){
var self__ = this;
var this__9500__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9492__auto__){
var self__ = this;
var this__9492__auto____$1 = this;
var h__9264__auto__ = self__.__hash;
if(!((h__9264__auto__ == null))){
return h__9264__auto__;
} else {
var h__9264__auto____$1 = (function (){var fexpr__14434 = ((function (h__9264__auto__,this__9492__auto____$1){
return (function (coll__9493__auto__){
return (-209062840 ^ cljs.core.hash_unordered_coll(coll__9493__auto__));
});})(h__9264__auto__,this__9492__auto____$1))
;
return fexpr__14434(this__9492__auto____$1);
})();
self__.__hash = h__9264__auto____$1;

return h__9264__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14430,other14431){
var self__ = this;
var this14430__$1 = this;
return (!((other14431 == null))) && ((this14430__$1.constructor === other14431.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14430__$1.splicing_QMARK_,other14431.splicing_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14430__$1.form,other14431.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14430__$1.__extmap,other14431.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9505__auto__,k__9506__auto__){
var self__ = this;
var this__9505__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$splicing_QMARK_,null,cljs.core.cst$kw$form,null], null), null),k__9506__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9505__auto____$1),self__.__meta),k__9506__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9506__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9503__auto__,k__9504__auto__,G__14428){
var self__ = this;
var this__9503__auto____$1 = this;
var pred__14435 = cljs.core.keyword_identical_QMARK_;
var expr__14436 = k__9504__auto__;
if(cljs.core.truth_((function (){var G__14438 = cljs.core.cst$kw$splicing_QMARK_;
var G__14439 = expr__14436;
return (pred__14435.cljs$core$IFn$_invoke$arity$2 ? pred__14435.cljs$core$IFn$_invoke$arity$2(G__14438,G__14439) : pred__14435.call(null,G__14438,G__14439));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__14428,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14440 = cljs.core.cst$kw$form;
var G__14441 = expr__14436;
return (pred__14435.cljs$core$IFn$_invoke$arity$2 ? pred__14435.cljs$core$IFn$_invoke$arity$2(G__14440,G__14441) : pred__14435.call(null,G__14440,G__14441));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__14428,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9504__auto__,G__14428),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9508__auto__){
var self__ = this;
var this__9508__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$splicing_QMARK_,self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$form,self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9495__auto__,G__14428){
var self__ = this;
var this__9495__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__14428,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9501__auto__,entry__9502__auto__){
var self__ = this;
var this__9501__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9502__auto__)){
return this__9501__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9502__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9501__auto____$1,entry__9502__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$splicing_QMARK_,cljs.core.cst$sym$form], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__9534__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__9534__auto__,writer__9535__auto__){
return cljs.core._write(writer__9535__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__14432){
return (new cljs.tools.reader.impl.utils.ReaderConditional(cljs.core.cst$kw$splicing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14432),cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(G__14432),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14432,cljs.core.cst$kw$splicing_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form], 0))),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write(writer,["#?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$splicing_QMARK_.cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__9690__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__14443(s__14444){
return (new cljs.core.LazySeq(null,(function (){
var s__14444__$1 = s__14444;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14444__$1);
if(temp__5457__auto__){
var s__14444__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14444__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__14444__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__14446 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__14445 = (0);
while(true){
if((i__14445 < size__9689__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__14445);
cljs.core.chunk_append(b__14446,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__14447 = (function (){var fexpr__14450 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__14450.cljs$core$IFn$_invoke$arity$1 ? fexpr__14450.cljs$core$IFn$_invoke$arity$1(key) : fexpr__14450.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14447,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14447,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key));

var G__14455 = (i__14445 + (1));
i__14445 = G__14455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14446),cljs$tools$reader$impl$utils$namespace_keys_$_iter__14443(cljs.core.chunk_rest(s__14444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14446),null);
}
} else {
var key = cljs.core.first(s__14444__$2);
return cljs.core.cons(((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__14451 = (function (){var fexpr__14454 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__14454.cljs$core$IFn$_invoke$arity$1 ? fexpr__14454.cljs$core$IFn$_invoke$arity$1(key) : fexpr__14454.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14451,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14451,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__14443(cljs.core.rest(s__14444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__14456){
var vec__14457 = p__14456;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14457,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14457,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});
