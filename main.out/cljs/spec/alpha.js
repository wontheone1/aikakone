// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__9541__auto__ = (((spec == null))?null:spec);
var m__9542__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__9542__auto__.call(null,spec,x));
} else {
var m__9542__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__9542__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__9541__auto__ = (((spec == null))?null:spec);
var m__9542__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__9542__auto__.call(null,spec,y));
} else {
var m__9542__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__9542__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__9541__auto__ = (((spec == null))?null:spec);
var m__9542__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$5 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__9542__auto__.call(null,spec,path,via,in$,x));
} else {
var m__9542__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__9542__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__9541__auto__ = (((spec == null))?null:spec);
var m__9542__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$4 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__9542__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__9542__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__9542__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__9541__auto__ = (((spec == null))?null:spec);
var m__9542__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__9542__auto__.call(null,spec,gfn));
} else {
var m__9542__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__9542__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__9541__auto__ = (((spec == null))?null:spec);
var m__9542__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__9542__auto__.call(null,spec));
} else {
var m__9542__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__9542__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.alpha.registry_ref !== 'undefined'){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__31785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__31785;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = cljs.core.deref(cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if(!(cljs.core.ident_QMARK_(spec))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__8808__auto__ = cljs.spec.alpha.reg_resolve(k);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__8796__auto__ = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__8796__auto__)){
return x;
} else {
return and__8796__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__8808__auto__ = (function (){var and__8796__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__8796__auto__){
return cljs.spec.alpha.reg_resolve(spec_or_k);
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.spec.alpha.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
var or__8808__auto____$2 = cljs.spec.alpha.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__8808__auto____$2)){
return or__8808__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(s))){
return cljs.spec.alpha.with_name((cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.alpha.regex_spec_impl.call(null,s,null)),cljs.spec.alpha.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__8808__auto__ = cljs.spec.alpha.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__31790 = arguments.length;
switch (G__31790) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto__.call(null,_));
} else {
var m__9542__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__9542__auto__.call(null,_,form));
} else {
var m__9542__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(_,form) : m__9542__auto____$1.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

var G__31792_31799 = cljs.spec.alpha.specize_STAR_;
var G__31793_31800 = "_";
var G__31794_31801 = ((function (G__31792_31799,G__31793_31800){
return (function() {
var G__31802 = null;
var G__31802__1 = (function (o){
var G__31795 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown;
var G__31796 = o;
var G__31797 = null;
var G__31798 = null;
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(G__31795,G__31796,G__31797,G__31798) : cljs.spec.alpha.spec_impl.call(null,G__31795,G__31796,G__31797,G__31798));
});
var G__31802__2 = (function (o,form){
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.alpha.spec_impl.call(null,form,o,null,null));
});
G__31802 = function(o,form){
switch(arguments.length){
case 1:
return G__31802__1.call(this,o);
case 2:
return G__31802__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31802.cljs$core$IFn$_invoke$arity$1 = G__31802__1;
G__31802.cljs$core$IFn$_invoke$arity$2 = G__31802__2;
return G__31802;
})()
;})(G__31792_31799,G__31793_31800))
;
goog.object.set(G__31792_31799,G__31793_31800,G__31794_31801);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__31804 = arguments.length;
switch (G__31804) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__8808__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__8808__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__8796__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__8796__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__8796__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = (form instanceof cljs.core.Symbol);
if(and__8796__auto__){
return cljs.core.namespace(form);
} else {
return and__8796__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev(cljs.spec.alpha.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn,gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5457__auto__ = cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__5457__auto__)){
var probs = temp__5457__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,probs,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec,spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value,x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name(spec);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__31806_SHARP_){
return (- cljs.core.count(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__31806_SHARP_)));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31807_31853 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31808_31854 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31807_31853,_STAR_print_fn_STAR_31808_31854,sb__9935__auto__,problems){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(_STAR_print_newline_STAR_31807_31853,_STAR_print_fn_STAR_31808_31854,sb__9935__auto__,problems))
;

try{var seq__31809_31855 = cljs.core.seq(problems);
var chunk__31810_31856 = null;
var count__31811_31857 = (0);
var i__31812_31858 = (0);
while(true){
if((i__31812_31858 < count__31811_31857)){
var map__31813_31859 = chunk__31810_31856.cljs$core$IIndexed$_nth$arity$2(null,i__31812_31858);
var map__31813_31860__$1 = ((((!((map__31813_31859 == null)))?((((map__31813_31859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31813_31859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31813_31859):map__31813_31859);
var prob_31861 = map__31813_31860__$1;
var path_31862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31813_31860__$1,cljs.core.cst$kw$path);
var pred_31863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31813_31860__$1,cljs.core.cst$kw$pred);
var val_31864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31813_31860__$1,cljs.core.cst$kw$val);
var reason_31865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31813_31860__$1,cljs.core.cst$kw$reason);
var via_31866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31813_31860__$1,cljs.core.cst$kw$via);
var in_31867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31813_31860__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_31867)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_31867], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_31864], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_31866)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_31866)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_31862)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_31862], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_31863)], 0));

if(cljs.core.truth_(reason_31865)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_31865], 0));
} else {
}

var seq__31815_31868 = cljs.core.seq(prob_31861);
var chunk__31816_31869 = null;
var count__31817_31870 = (0);
var i__31818_31871 = (0);
while(true){
if((i__31818_31871 < count__31817_31870)){
var vec__31819_31872 = chunk__31816_31869.cljs$core$IIndexed$_nth$arity$2(null,i__31818_31871);
var k_31873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31819_31872,(0),null);
var v_31874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31819_31872,(1),null);
if(cljs.core.truth_((function (){var fexpr__31822 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__31822.cljs$core$IFn$_invoke$arity$1 ? fexpr__31822.cljs$core$IFn$_invoke$arity$1(k_31873) : fexpr__31822.call(null,k_31873));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31873], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_31874], 0));
}

var G__31875 = seq__31815_31868;
var G__31876 = chunk__31816_31869;
var G__31877 = count__31817_31870;
var G__31878 = (i__31818_31871 + (1));
seq__31815_31868 = G__31875;
chunk__31816_31869 = G__31876;
count__31817_31870 = G__31877;
i__31818_31871 = G__31878;
continue;
} else {
var temp__5457__auto___31879 = cljs.core.seq(seq__31815_31868);
if(temp__5457__auto___31879){
var seq__31815_31880__$1 = temp__5457__auto___31879;
if(cljs.core.chunked_seq_QMARK_(seq__31815_31880__$1)){
var c__9739__auto___31881 = cljs.core.chunk_first(seq__31815_31880__$1);
var G__31882 = cljs.core.chunk_rest(seq__31815_31880__$1);
var G__31883 = c__9739__auto___31881;
var G__31884 = cljs.core.count(c__9739__auto___31881);
var G__31885 = (0);
seq__31815_31868 = G__31882;
chunk__31816_31869 = G__31883;
count__31817_31870 = G__31884;
i__31818_31871 = G__31885;
continue;
} else {
var vec__31823_31886 = cljs.core.first(seq__31815_31880__$1);
var k_31887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823_31886,(0),null);
var v_31888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823_31886,(1),null);
if(cljs.core.truth_((function (){var fexpr__31826 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__31826.cljs$core$IFn$_invoke$arity$1 ? fexpr__31826.cljs$core$IFn$_invoke$arity$1(k_31887) : fexpr__31826.call(null,k_31887));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31887], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_31888], 0));
}

var G__31889 = cljs.core.next(seq__31815_31880__$1);
var G__31890 = null;
var G__31891 = (0);
var G__31892 = (0);
seq__31815_31868 = G__31889;
chunk__31816_31869 = G__31890;
count__31817_31870 = G__31891;
i__31818_31871 = G__31892;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__31893 = seq__31809_31855;
var G__31894 = chunk__31810_31856;
var G__31895 = count__31811_31857;
var G__31896 = (i__31812_31858 + (1));
seq__31809_31855 = G__31893;
chunk__31810_31856 = G__31894;
count__31811_31857 = G__31895;
i__31812_31858 = G__31896;
continue;
} else {
var temp__5457__auto___31897 = cljs.core.seq(seq__31809_31855);
if(temp__5457__auto___31897){
var seq__31809_31898__$1 = temp__5457__auto___31897;
if(cljs.core.chunked_seq_QMARK_(seq__31809_31898__$1)){
var c__9739__auto___31899 = cljs.core.chunk_first(seq__31809_31898__$1);
var G__31900 = cljs.core.chunk_rest(seq__31809_31898__$1);
var G__31901 = c__9739__auto___31899;
var G__31902 = cljs.core.count(c__9739__auto___31899);
var G__31903 = (0);
seq__31809_31855 = G__31900;
chunk__31810_31856 = G__31901;
count__31811_31857 = G__31902;
i__31812_31858 = G__31903;
continue;
} else {
var map__31827_31904 = cljs.core.first(seq__31809_31898__$1);
var map__31827_31905__$1 = ((((!((map__31827_31904 == null)))?((((map__31827_31904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31827_31904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31827_31904):map__31827_31904);
var prob_31906 = map__31827_31905__$1;
var path_31907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31827_31905__$1,cljs.core.cst$kw$path);
var pred_31908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31827_31905__$1,cljs.core.cst$kw$pred);
var val_31909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31827_31905__$1,cljs.core.cst$kw$val);
var reason_31910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31827_31905__$1,cljs.core.cst$kw$reason);
var via_31911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31827_31905__$1,cljs.core.cst$kw$via);
var in_31912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31827_31905__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_31912)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_31912], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_31909], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_31911)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_31911)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_31907)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_31907], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_31908)], 0));

if(cljs.core.truth_(reason_31910)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_31910], 0));
} else {
}

var seq__31829_31913 = cljs.core.seq(prob_31906);
var chunk__31830_31914 = null;
var count__31831_31915 = (0);
var i__31832_31916 = (0);
while(true){
if((i__31832_31916 < count__31831_31915)){
var vec__31833_31917 = chunk__31830_31914.cljs$core$IIndexed$_nth$arity$2(null,i__31832_31916);
var k_31918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31833_31917,(0),null);
var v_31919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31833_31917,(1),null);
if(cljs.core.truth_((function (){var fexpr__31836 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__31836.cljs$core$IFn$_invoke$arity$1 ? fexpr__31836.cljs$core$IFn$_invoke$arity$1(k_31918) : fexpr__31836.call(null,k_31918));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31918], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_31919], 0));
}

var G__31920 = seq__31829_31913;
var G__31921 = chunk__31830_31914;
var G__31922 = count__31831_31915;
var G__31923 = (i__31832_31916 + (1));
seq__31829_31913 = G__31920;
chunk__31830_31914 = G__31921;
count__31831_31915 = G__31922;
i__31832_31916 = G__31923;
continue;
} else {
var temp__5457__auto___31924__$1 = cljs.core.seq(seq__31829_31913);
if(temp__5457__auto___31924__$1){
var seq__31829_31925__$1 = temp__5457__auto___31924__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31829_31925__$1)){
var c__9739__auto___31926 = cljs.core.chunk_first(seq__31829_31925__$1);
var G__31927 = cljs.core.chunk_rest(seq__31829_31925__$1);
var G__31928 = c__9739__auto___31926;
var G__31929 = cljs.core.count(c__9739__auto___31926);
var G__31930 = (0);
seq__31829_31913 = G__31927;
chunk__31830_31914 = G__31928;
count__31831_31915 = G__31929;
i__31832_31916 = G__31930;
continue;
} else {
var vec__31837_31931 = cljs.core.first(seq__31829_31925__$1);
var k_31932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31837_31931,(0),null);
var v_31933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31837_31931,(1),null);
if(cljs.core.truth_((function (){var fexpr__31840 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__31840.cljs$core$IFn$_invoke$arity$1 ? fexpr__31840.cljs$core$IFn$_invoke$arity$1(k_31932) : fexpr__31840.call(null,k_31932));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31932], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_31933], 0));
}

var G__31934 = cljs.core.next(seq__31829_31925__$1);
var G__31935 = null;
var G__31936 = (0);
var G__31937 = (0);
seq__31829_31913 = G__31934;
chunk__31830_31914 = G__31935;
count__31831_31915 = G__31936;
i__31832_31916 = G__31937;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__31938 = cljs.core.next(seq__31809_31898__$1);
var G__31939 = null;
var G__31940 = (0);
var G__31941 = (0);
seq__31809_31855 = G__31938;
chunk__31810_31856 = G__31939;
count__31811_31857 = G__31940;
i__31812_31858 = G__31941;
continue;
}
} else {
}
}
break;
}

var seq__31841_31942 = cljs.core.seq(ed);
var chunk__31842_31943 = null;
var count__31843_31944 = (0);
var i__31844_31945 = (0);
while(true){
if((i__31844_31945 < count__31843_31944)){
var vec__31845_31946 = chunk__31842_31943.cljs$core$IIndexed$_nth$arity$2(null,i__31844_31945);
var k_31947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31845_31946,(0),null);
var v_31948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31845_31946,(1),null);
if(cljs.core.truth_((function (){var fexpr__31848 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__31848.cljs$core$IFn$_invoke$arity$1 ? fexpr__31848.cljs$core$IFn$_invoke$arity$1(k_31947) : fexpr__31848.call(null,k_31947));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31947], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_31948], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__31949 = seq__31841_31942;
var G__31950 = chunk__31842_31943;
var G__31951 = count__31843_31944;
var G__31952 = (i__31844_31945 + (1));
seq__31841_31942 = G__31949;
chunk__31842_31943 = G__31950;
count__31843_31944 = G__31951;
i__31844_31945 = G__31952;
continue;
} else {
var temp__5457__auto___31953 = cljs.core.seq(seq__31841_31942);
if(temp__5457__auto___31953){
var seq__31841_31954__$1 = temp__5457__auto___31953;
if(cljs.core.chunked_seq_QMARK_(seq__31841_31954__$1)){
var c__9739__auto___31955 = cljs.core.chunk_first(seq__31841_31954__$1);
var G__31956 = cljs.core.chunk_rest(seq__31841_31954__$1);
var G__31957 = c__9739__auto___31955;
var G__31958 = cljs.core.count(c__9739__auto___31955);
var G__31959 = (0);
seq__31841_31942 = G__31956;
chunk__31842_31943 = G__31957;
count__31843_31944 = G__31958;
i__31844_31945 = G__31959;
continue;
} else {
var vec__31849_31960 = cljs.core.first(seq__31841_31954__$1);
var k_31961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31849_31960,(0),null);
var v_31962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31849_31960,(1),null);
if(cljs.core.truth_((function (){var fexpr__31852 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__31852.cljs$core$IFn$_invoke$arity$1 ? fexpr__31852.cljs$core$IFn$_invoke$arity$1(k_31961) : fexpr__31852.call(null,k_31961));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_31961], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_31962], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__31963 = cljs.core.next(seq__31841_31954__$1);
var G__31964 = null;
var G__31965 = (0);
var G__31966 = (0);
seq__31841_31942 = G__31963;
chunk__31842_31943 = G__31964;
count__31843_31944 = G__31965;
i__31844_31945 = G__31966;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31808_31854;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31807_31853;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success!"], 0));
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return (cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed));
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out(cljs.spec.alpha.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31967_31969 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31968_31970 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31967_31969,_STAR_print_fn_STAR_31968_31970,sb__9935__auto__){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(_STAR_print_newline_STAR_31967_31969,_STAR_print_fn_STAR_31968_31970,sb__9935__auto__))
;

try{cljs.spec.alpha.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31968_31970;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31967_31969;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__5455__auto__ = (function (){var or__8808__auto__ = (function (){var temp__5457__auto__ = (function (){var or__8808__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__8808__auto__ = cljs.spec.alpha.spec_name(spec__$1);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var gfn = temp__5457__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.spec.alpha.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var g = temp__5455__auto__;
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5455__auto__,spec__$1){
return (function (p1__31971_SHARP_){
return (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__31971_SHARP_) : cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__31971_SHARP_));
});})(g,temp__5455__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__31973 = arguments.length;
switch (G__31973) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit,cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.ident_QMARK_(k);
if(and__8796__auto__){
return cljs.core.namespace(k);
} else {
return and__8796__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__8808__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.alpha.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name(spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref(cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym(k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec(v);
var temp__5457__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5457__auto__)){
var arg_spec = temp__5457__auto__;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform(arg_spec,args)))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),(function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name(arg_spec);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec$alpha_SLASH_args,args);
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31975_31977 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31976_31978 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31975_31977,_STAR_print_fn_STAR_31976_31978,sb__9935__auto__,ed,arg_spec,temp__5457__auto__,specs){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(_STAR_print_newline_STAR_31975_31977,_STAR_print_fn_STAR_31976_31978,sb__9935__auto__,ed,arg_spec,temp__5457__auto__,specs))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31976_31978;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31975_31977;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__8808__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__31980 = arguments.length;
switch (G__31980) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5455__auto__ = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(temp__5455__auto__)){
var spec = temp__5455__auto__;
return cljs.spec.alpha.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__31983 = arguments.length;
switch (G__31983) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__31986 = arguments.length;
switch (G__31986) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred__$1))){
return cljs.spec.alpha.explain_STAR_(pred__$1,path,(function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name(pred__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,form,cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__31991){
var map__31992 = p__31991;
var map__31992__$1 = ((((!((map__31992 == null)))?((((map__31992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31992):map__31992);
var argm = map__31992__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31992__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__31988_SHARP_){
var or__8808__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__31988_SHARP_) : k__GT_s.call(null,p1__31988_SHARP_));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return p1__31988_SHARP_;
}
});})(k__GT_s,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha31994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha31994 = (function (keys__GT_specnames,opt,req_un,opt_un,p__31991,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,map__31992,k__GT_s,pred_forms,meta31995){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.p__31991 = p__31991;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.map__31992 = map__31992;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta31995 = meta31995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_31996,meta31995__$1){
var self__ = this;
var _31996__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha31994(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.p__31991,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.map__31992,self__.k__GT_s,self__.pred_forms,meta31995__$1));
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_31996){
var self__ = this;
var _31996__$1 = this;
return self__.meta31995;
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__32003 = m;
var vec__32004 = G__32003;
var seq__32005 = cljs.core.seq(vec__32004);
var first__32006 = cljs.core.first(seq__32005);
var seq__32005__$1 = cljs.core.next(seq__32005);
var vec__32007 = first__32006;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32007,(1),null);
var ks = seq__32005__$1;
var keys = vec__32004;
var ret__$1 = ret;
var G__32003__$1 = G__32003;
while(true){
var ret__$2 = ret__$1;
var vec__32010 = G__32003__$1;
var seq__32011 = cljs.core.seq(vec__32010);
var first__32012 = cljs.core.first(seq__32011);
var seq__32011__$1 = cljs.core.next(seq__32011);
var vec__32013 = first__32012;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32013,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32013,(1),null);
var ks__$1 = seq__32011__$1;
var keys__$1 = vec__32010;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
var cv = cljs.spec.alpha.conform(s,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__32032 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__32033 = ks__$1;
ret__$1 = G__32032;
G__32003__$1 = G__32033;
continue;
}
} else {
var G__32034 = ret__$2;
var G__32035 = ks__$1;
ret__$1 = G__32034;
G__32003__$1 = G__32035;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__32019 = cljs.core.keys(m);
var vec__32020 = G__32019;
var seq__32021 = cljs.core.seq(vec__32020);
var first__32022 = cljs.core.first(seq__32021);
var seq__32021__$1 = cljs.core.next(seq__32021);
var k = first__32022;
var ks = seq__32021__$1;
var keys = vec__32020;
var ret__$1 = ret;
var G__32019__$1 = G__32019;
while(true){
var ret__$2 = ret__$1;
var vec__32023 = G__32019__$1;
var seq__32024 = cljs.core.seq(vec__32023);
var first__32025 = cljs.core.first(seq__32024);
var seq__32024__$1 = cljs.core.next(seq__32024);
var k__$1 = first__32025;
var ks__$1 = seq__32024__$1;
var keys__$1 = vec__32023;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.alpha.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__32036 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__32037 = ks__$1;
ret__$1 = G__32036;
G__32019__$1 = G__32037;
continue;
} else {
var G__32038 = ret__$2;
var G__32039 = ks__$1;
ret__$1 = G__32038;
G__32019__$1 = G__32039;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__5457__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5457__auto__){
var probs = temp__5457__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__5457__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__31989_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__31989_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__5457__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__32026){
var vec__32027 = p__32026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32027,(1),null);
if(cljs.core.truth_((function (){var or__8808__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__31990_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__31990_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__32030 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__32030) : cljs.spec.alpha.map_spec_impl.call(null,G__32030));
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,(function (){var G__32031 = cljs.core.PersistentVector.EMPTY;
var G__32031__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__32031,cljs.core.cst$kw$req,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__32031);
var G__32031__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__32031__$1,cljs.core.cst$kw$opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__32031__$1);
var G__32031__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__32031__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__32031__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__32031__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__32031__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$p__31991,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$map__31992,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta31995], null);
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha31994.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha31994.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha31994";

cljs.spec.alpha.t_cljs$spec$alpha31994.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha31994");
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha31994 = ((function (k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha31994(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,p__31991__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,map__31992__$2,k__GT_s__$1,pred_forms__$1,meta31995){
return (new cljs.spec.alpha.t_cljs$spec$alpha31994(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,p__31991__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,map__31992__$2,k__GT_s__$1,pred_forms__$1,meta31995));
});})(k__GT_s,keys__GT_specnames,id,map__31992,map__31992__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha31994(keys__GT_specnames,opt,req_un,opt_un,p__31991,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,map__31992__$1,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__32041 = arguments.length;
switch (G__32041) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred))){
var G__32042 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__32042,gfn);
} else {
return G__32042;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(pred))){
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__32043 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__32043,gfn);
} else {
return G__32043;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32044 = (function (form,pred,gfn,cpred_QMARK_,unc,meta32045){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta32045 = meta32045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32046,meta32045__$1){
var self__ = this;
var _32046__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32044(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta32045__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32046){
var self__ = this;
var _32046__$1 = this;
return self__.meta32045;
});

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
});

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.gen_for_pred(self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha32044.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha32044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta32045], null);
});

cljs.spec.alpha.t_cljs$spec$alpha32044.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32044.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32044";

cljs.spec.alpha.t_cljs$spec$alpha32044.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32044");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha32044 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha32044(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta32045){
return (new cljs.spec.alpha.t_cljs$spec$alpha32044(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta32045));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32044(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__32054 = arguments.length;
switch (G__32054) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__32048_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__8796__auto__ = cljs.core._get_method(mm,(function (){var fexpr__32056 = cljs.core._dispatch_fn(mm);
return (fexpr__32056.cljs$core$IFn$_invoke$arity$1 ? fexpr__32056.cljs$core$IFn$_invoke$arity$1(p1__32048_SHARP_) : fexpr__32056.call(null,p1__32048_SHARP_));
})());
if(cljs.core.truth_(and__8796__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__32048_SHARP_) : mm.call(null,p1__32048_SHARP_));
} else {
return and__8796__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__32049_SHARP_){
var fexpr__32057 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__32057.cljs$core$IFn$_invoke$arity$1 ? fexpr__32057.cljs$core$IFn$_invoke$arity$1(p1__32049_SHARP_) : fexpr__32057.call(null,p1__32049_SHARP_));
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__32050_SHARP_,p2__32051_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32050_SHARP_,retag,p2__32051_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32058 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta32059){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta32059 = meta32059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_32060,meta32059__$1){
var self__ = this;
var _32060__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32058(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta32059__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_32060){
var self__ = this;
var _32060__$1 = this;
return self__.meta32059;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5455__auto__)){
var pred = temp__5455__auto__;
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5455__auto__)){
var pred = temp__5455__auto__;
return cljs.spec.alpha.unform(pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__5455__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__5455__auto__)){
var pred = temp__5455__auto__;
return cljs.spec.alpha.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__32061){
var vec__32062 = p__32061;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32062,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32062,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__32062,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (rmap__$1,p,vec__32062,k,f,___$1,id,predx,dval,tag){
return (function (p1__32052_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__32052_SHARP_,k) : self__.tag.call(null,p1__32052_SHARP_,k));
});})(rmap__$1,p,vec__32062,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__9762__auto__ = self__.form;
return cljs.core._conj((function (){var x__9762__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__32062,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__32065){
var vec__32066 = p__32065;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32066,(0),null);
return cljs.spec.alpha.invalid_QMARK_(k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$(cljs.core.deref(self__.mmvar)))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec),(function (){var x__9762__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = self__.retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta32059], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha32058.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32058.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32058";

cljs.spec.alpha.t_cljs$spec$alpha32058.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32058");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha32058 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha32058(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta32059){
return (new cljs.spec.alpha.t_cljs$spec$alpha32058(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta32059));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32058(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__32071 = arguments.length;
switch (G__32071) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32072 = (function (forms,preds,gfn,specs,cnt,meta32073){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta32073 = meta32073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_32074,meta32073__$1){
var self__ = this;
var _32074__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32072(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta32073__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_32074){
var self__ = this;
var _32074__$1 = this;
return self__.meta32073;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref(self__.specs);
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__32076 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__32077 = (i + (1));
ret = G__32076;
i = G__32077;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.alpha.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__32078 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__32079 = (i + (1));
ret = G__32078;
i = G__32079;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta32073], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha32072.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32072.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32072";

cljs.spec.alpha.t_cljs$spec$alpha32072.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32072");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha32072 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha32072(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta32073){
return (new cljs.spec.alpha.t_cljs$spec$alpha32072(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta32073));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32072(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(v){
var x32080 = v;
x32080.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x32080.cljs$core$IMapEntry$_key$arity$1 = ((function (x32080){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x32080))
;

x32080.cljs$core$IMapEntry$_val$arity$1 = ((function (x32080){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x32080))
;

return x32080;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__32081 = cljs.core.count(preds);
switch (G__32081) {
case (2):
return ((function (G__32081,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__32081,id,kps,specs))

break;
case (3):
return ((function (G__32081,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
var ret__$2 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$2))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__32081,id,kps,specs))

break;
default:
return ((function (G__32081,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.alpha.conform_STAR_(spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var G__32090 = (i + (1));
i = G__32090;
continue;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
break;
}
});
;})(G__32081,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32082 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta32083){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta32083 = meta32083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_32084,meta32083__$1){
var self__ = this;
var _32084__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32082(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta32083__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_32084){
var self__ = this;
var _32084__$1 = this;
return self__.meta32083;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__32085){
var self__ = this;
var vec__32086 = p__32085;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32086,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32086,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
}
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta32083], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32082.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32082.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32082";

cljs.spec.alpha.t_cljs$spec$alpha32082.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32082");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha32082 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha32082(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta32083){
return (new cljs.spec.alpha.t_cljs$spec$alpha32082(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta32083));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32082(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__32097 = preds;
var vec__32099 = G__32097;
var seq__32100 = cljs.core.seq(vec__32099);
var first__32101 = cljs.core.first(seq__32100);
var seq__32100__$1 = cljs.core.next(seq__32100);
var pred = first__32101;
var preds__$1 = seq__32100__$1;
var G__32098 = forms;
var vec__32102 = G__32098;
var seq__32103 = cljs.core.seq(vec__32102);
var first__32104 = cljs.core.first(seq__32103);
var seq__32103__$1 = cljs.core.next(seq__32103);
var form = first__32104;
var forms__$1 = seq__32103__$1;
var ret__$1 = ret;
var G__32097__$1 = G__32097;
var G__32098__$1 = G__32098;
while(true){
var ret__$2 = ret__$1;
var vec__32105 = G__32097__$1;
var seq__32106 = cljs.core.seq(vec__32105);
var first__32107 = cljs.core.first(seq__32106);
var seq__32106__$1 = cljs.core.next(seq__32106);
var pred__$1 = first__32107;
var preds__$2 = seq__32106__$1;
var vec__32108 = G__32098__$1;
var seq__32109 = cljs.core.seq(vec__32108);
var first__32110 = cljs.core.first(seq__32109);
var seq__32109__$1 = cljs.core.next(seq__32109);
var form__$1 = first__32110;
var forms__$2 = seq__32109__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__32111 = nret;
var G__32112 = preds__$2;
var G__32113 = forms__$2;
ret__$1 = G__32111;
G__32097__$1 = G__32112;
G__32098__$1 = G__32113;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__32120 = forms;
var vec__32122 = G__32120;
var seq__32123 = cljs.core.seq(vec__32122);
var first__32124 = cljs.core.first(seq__32123);
var seq__32123__$1 = cljs.core.next(seq__32123);
var form = first__32124;
var forms__$1 = seq__32123__$1;
var G__32121 = preds;
var vec__32125 = G__32121;
var seq__32126 = cljs.core.seq(vec__32125);
var first__32127 = cljs.core.first(seq__32126);
var seq__32126__$1 = cljs.core.next(seq__32126);
var pred = first__32127;
var preds__$1 = seq__32126__$1;
var ret__$1 = ret;
var G__32120__$1 = G__32120;
var G__32121__$1 = G__32121;
while(true){
var ret__$2 = ret__$1;
var vec__32128 = G__32120__$1;
var seq__32129 = cljs.core.seq(vec__32128);
var first__32130 = cljs.core.first(seq__32129);
var seq__32129__$1 = cljs.core.next(seq__32129);
var form__$1 = first__32130;
var forms__$2 = seq__32129__$1;
var vec__32131 = G__32121__$1;
var seq__32132 = cljs.core.seq(vec__32131);
var first__32133 = cljs.core.first(seq__32132);
var seq__32132__$1 = cljs.core.next(seq__32132);
var pred__$1 = first__32133;
var preds__$2 = seq__32132__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.spec.alpha.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__32134 = nret;
var G__32135 = forms__$2;
var G__32136 = preds__$2;
ret__$1 = G__32134;
G__32120__$1 = G__32135;
G__32121__$1 = G__32136;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__32139 = cljs.core.count(preds);
switch (G__32139) {
case (2):
return ((function (G__32139,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
;})(G__32139,specs))

break;
case (3):
return ((function (G__32139,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});
;})(G__32139,specs))

break;
default:
return ((function (G__32139,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__32144 = nret;
var G__32145 = (i + (1));
ret = G__32144;
i = G__32145;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__32139,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32140 = (function (forms,preds,gfn,specs,cform,meta32141){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta32141 = meta32141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_32142,meta32141__$1){
var self__ = this;
var _32142__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32140(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta32141__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_32142){
var self__ = this;
var _32142__$1 = this;
return self__.meta32141;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
return (function (p1__32138_SHARP_,p2__32137_SHARP_){
return cljs.spec.alpha.unform(p2__32137_SHARP_,p1__32138_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_and),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta32141], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha32140.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32140.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32140";

cljs.spec.alpha.t_cljs$spec$alpha32140.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32140");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha32140 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha32140(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta32141){
return (new cljs.spec.alpha.t_cljs$spec$alpha32140(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta32141));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32140(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__8808__auto__ = kfn;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__8808__auto__ = kform;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}
})();
if(cljs.core.not(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.alpha.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = count;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__8796__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9762__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = (function (){var or__8808__auto__ = min_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__8796__auto__)){
return !((((function (){var or__8808__auto__ = min_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__8808__auto__ = max_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (9007199254740991);
}
})())));
} else {
return and__8796__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),(function (){var x__9762__auto__ = (function (){var or__8808__auto__ = min_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = (function (){var or__8808__auto__ = max_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (9007199254740991);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = distinct;
if(cljs.core.truth_(and__8796__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__8796__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32154 = (function (forms,preds,gfn,meta32155){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta32155 = meta32155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32156,meta32155__$1){
var self__ = this;
var _32156__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32154(self__.forms,self__.preds,self__.gfn,meta32155__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32156){
var self__ = this;
var _32156__$1 = this;
return self__.meta32155;
});

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__32146_SHARP_,p2__32147_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__32146_SHARP_,x,p2__32147_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.alpha.invalid_QMARK_,ms))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__32148_SHARP_){
return cljs.spec.alpha.unform(p1__32148_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__32149_SHARP_,p2__32150_SHARP_){
return cljs.spec.alpha.explain_1(p1__32149_SHARP_,p2__32150_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$1){
return (function (p1__32151_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__32151_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__32152_SHARP_,p2__32153_SHARP_){
return cljs.spec.alpha.gensub(p1__32152_SHARP_,overrides,path,rmap,p2__32153_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha32154.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_merge),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha32154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta32155], null);
});

cljs.spec.alpha.t_cljs$spec$alpha32154.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32154.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32154";

cljs.spec.alpha.t_cljs$spec$alpha32154.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32154");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha32154 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha32154(forms__$1,preds__$1,gfn__$1,meta32155){
return (new cljs.spec.alpha.t_cljs$spec$alpha32154(forms__$1,preds__$1,gfn__$1,meta32155));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32154(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__32162 = arguments.length;
switch (G__32162) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__32163,gfn){
var map__32164 = p__32163;
var map__32164__$1 = ((((!((map__32164 == null)))?((((map__32164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32164):map__32164);
var opts = map__32164__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$max_DASH_count);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32164__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$conform_DASH_keys);
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$distinct);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$into);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$kind);
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32164__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all);
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__32157_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__32157_SHARP_);
});})(conform_into,spec,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var kfn__$1 = (function (){var or__8808__auto__ = kfn;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return ((function (or__8808__auto__,conform_into,spec,check_QMARK_,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__8808__auto__,conform_into,spec,check_QMARK_,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.map_QMARK_(x);
if(and__8796__auto__){
var or__8808__auto__ = (function (){var and__8796__auto____$1 = kind;
if(cljs.core.truth_(and__8796__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__8796__auto____$1;
}
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__8796__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || ((cljs.core.not(conform_into)) && ((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__32158_SHARP_){
return cljs.core.empty((function (){var or__8808__auto__ = conform_into;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return p1__32158_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32166 = (function (form,max_count,check_QMARK_,map__32164,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,p__32163,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta32167){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.map__32164 = map__32164;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.p__32163 = p__32163;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta32167 = meta32167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_32168,meta32167__$1){
var self__ = this;
var _32168__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32166(self__.form,self__.max_count,self__.check_QMARK_,self__.map__32164,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.p__32163,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta32167__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_32168){
var self__ = this;
var _32168__$1 = this;
return self__.meta32167;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref(self__.spec);
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__32169 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32169,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32169,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32169,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__32175 = cljs.core.seq(x);
var vec__32176 = G__32175;
var seq__32177 = cljs.core.seq(vec__32176);
var first__32178 = cljs.core.first(seq__32177);
var seq__32177__$1 = cljs.core.next(seq__32177);
var v = first__32178;
var vs = seq__32177__$1;
var vseq = vec__32176;
var ret__$1 = ret;
var i__$1 = i;
var G__32175__$1 = G__32175;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__32179 = G__32175__$1;
var seq__32180 = cljs.core.seq(vec__32179);
var first__32181 = cljs.core.first(seq__32180);
var seq__32180__$1 = cljs.core.next(seq__32180);
var v__$1 = first__32181;
var vs__$1 = seq__32180__$1;
var vseq__$1 = vec__32179;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_(spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__32212 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__32213 = (i__$2 + (1));
var G__32214 = vs__$1;
ret__$1 = G__32212;
i__$1 = G__32213;
G__32175__$1 = G__32214;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__9160__auto__ = (1);
var y__9161__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i)))){
var G__32215 = (i + step);
i = G__32215;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__32185 = cljs.core.seq(x);
var vec__32186 = G__32185;
var seq__32187 = cljs.core.seq(vec__32186);
var first__32188 = cljs.core.first(seq__32187);
var seq__32187__$1 = cljs.core.next(seq__32187);
var v = first__32188;
var vs = seq__32187__$1;
var vseq = vec__32186;
var i__$1 = i;
var G__32185__$1 = G__32185;
while(true){
var i__$2 = i__$1;
var vec__32189 = G__32185__$1;
var seq__32190 = cljs.core.seq(vec__32189);
var first__32191 = cljs.core.first(seq__32190);
var seq__32190__$1 = cljs.core.next(seq__32190);
var v__$1 = first__32191;
var vs__$1 = seq__32190__$1;
var vseq__$1 = vec__32189;
if(((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1))){
var G__32216 = (i__$2 + (1));
var G__32217 = vs__$1;
i__$1 = G__32216;
G__32185__$1 = G__32217;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref(self__.spec);
var vec__32192 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32192,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32192,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32192,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__32198 = cljs.core.seq(x);
var vec__32199 = G__32198;
var seq__32200 = cljs.core.seq(vec__32199);
var first__32201 = cljs.core.first(seq__32200);
var seq__32200__$1 = cljs.core.next(seq__32200);
var v = first__32201;
var vs = seq__32200__$1;
var vseq = vec__32199;
var ret__$1 = ret;
var i__$1 = i;
var G__32198__$1 = G__32198;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__32202 = G__32198__$1;
var seq__32203 = cljs.core.seq(vec__32202);
var first__32204 = cljs.core.first(seq__32203);
var seq__32203__$1 = cljs.core.next(seq__32203);
var v__$1 = first__32204;
var vs__$1 = seq__32203__$1;
var vseq__$1 = vec__32202;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__32218 = (function (){var G__32205 = ret__$2;
var G__32206 = i__$2;
var G__32207 = v__$1;
var G__32208 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__32205,G__32206,G__32207,G__32208) : add.call(null,G__32205,G__32206,G__32207,G__32208));
})();
var G__32219 = (i__$2 + (1));
var G__32220 = vs__$1;
ret__$1 = G__32218;
i__$1 = G__32219;
G__32198__$1 = G__32220;
continue;
}
break;
}
} else {
return x;
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__8808__auto__ = cljs.spec.alpha.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__32210 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__8808__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__8808__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__32209 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__32209.cljs$core$IFn$_invoke$arity$1 ? fexpr__32209.cljs$core$IFn$_invoke$arity$1(G__32210) : fexpr__32209.call(null,G__32210));
})());
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.alpha.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__32159_SHARP_){
if(cljs.core.empty_QMARK_(p1__32159_SHARP_)){
return p1__32159_SHARP_;
} else {
return cljs.core.empty(p1__32159_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__32160_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__32160_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__32160_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__8808__auto__ = self__.min_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__8808__auto__ = self__.max_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var x__9160__auto__ = self__.gen_max;
var y__9161__auto__ = ((2) * (function (){var or__8808__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return (0);
}
})());
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__8808__auto__ = self__.min_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(function (){var or__8808__auto__ = self__.min_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (0);
}
})(),(function (){var or__8808__auto__ = self__.max_count;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var x__9160__auto__ = self__.gen_max;
var y__9161__auto__ = ((2) * (function (){var or__8808__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return (0);
}
})());
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
}
})()], 0)):cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(0),self__.gen_max], 0))
)))], 0));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__8808__auto__ = self__.describe_form;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_every),(function (){var x__9762__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts], 0))], 0))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$map__32164,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$pred,cljs.core.cst$sym$cpred,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$describe_DASH_form,cljs.core.cst$sym$p__32163,cljs.core.cst$sym$distinct,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta32167], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha32166.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32166.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32166";

cljs.spec.alpha.t_cljs$spec$alpha32166.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32166");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha32166 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha32166(form__$1,max_count__$1,check_QMARK___$1,map__32164__$2,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,p__32163__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta32167){
return (new cljs.spec.alpha.t_cljs$spec$alpha32166(form__$1,max_count__$1,check_QMARK___$1,map__32164__$2,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,p__32163__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta32167));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__32164,map__32164__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32166(form,max_count,check_QMARK_,map__32164__$1,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,p__32163,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__32221){
var map__32222 = p__32221;
var map__32222__$1 = ((((!((map__32222 == null)))?((((map__32222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32222):map__32222);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32222__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__32224){
var map__32225 = p__32224;
var map__32225__$1 = ((((!((map__32225 == null)))?((((map__32225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32225):map__32225);
var vec__32226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32225__$1,cljs.core.cst$kw$ps);
var seq__32227 = cljs.core.seq(vec__32226);
var first__32228 = cljs.core.first(seq__32227);
var seq__32227__$1 = cljs.core.next(seq__32227);
var p1 = first__32228;
var pr = seq__32227__$1;
var ps = vec__32226;
var vec__32229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32225__$1,cljs.core.cst$kw$ks);
var seq__32230 = cljs.core.seq(vec__32229);
var first__32231 = cljs.core.first(seq__32230);
var seq__32230__$1 = cljs.core.next(seq__32230);
var k1 = first__32231;
var kr = seq__32230__$1;
var ks = vec__32229;
var vec__32232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32225__$1,cljs.core.cst$kw$forms);
var seq__32233 = cljs.core.seq(vec__32232);
var first__32234 = cljs.core.first(seq__32233);
var seq__32233__$1 = cljs.core.next(seq__32233);
var f1 = first__32234;
var fr = seq__32233__$1;
var forms = vec__32232;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32225__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32225__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__32236 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__32236) : cljs.spec.alpha.pcat_STAR_.call(null,G__32236));
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__10094__auto__ = [];
var len__10087__auto___32238 = arguments.length;
var i__10088__auto___32239 = (0);
while(true){
if((i__10088__auto___32239 < len__10087__auto___32238)){
args__10094__auto__.push((arguments[i__10088__auto___32239]));

var G__32240 = (i__10088__auto___32239 + (1));
i__10088__auto___32239 = G__32240;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq32237){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32237));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_),(function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__8808__auto__ = ks;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32241_SHARP_){
var G__32243 = cljs.core.first(p1__32241_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32243) : f.call(null,G__32243));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8808__auto__ = cljs.core.seq(ks);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8808__auto__ = cljs.core.seq(forms);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__32242_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__32242_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__32244 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__32247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32244,(0),null);
var seq__32248 = cljs.core.seq(vec__32247);
var first__32249 = cljs.core.first(seq__32248);
var seq__32248__$1 = cljs.core.next(seq__32248);
var p1 = first__32249;
var pr = seq__32248__$1;
var ps__$1 = vec__32247;
var vec__32250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32244,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32250,(0),null);
var ks__$1 = vec__32250;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32244,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.spec.alpha.accept(cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__10094__auto__ = [];
var len__10087__auto___32254 = arguments.length;
var i__10088__auto___32255 = (0);
while(true){
if((i__10088__auto___32255 < len__10087__auto___32254)){
args__10094__auto__.push((arguments[i__10088__auto___32255]));

var G__32256 = (i__10088__auto___32255 + (1));
i__10088__auto___32255 = G__32256;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_(ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq32253){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32253));
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__8796__auto__ = p1;
if(cljs.core.truth_(and__8796__auto__)){
return p2;
} else {
return and__8796__auto__;
}
})())){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__8808__auto__ = p1;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept(cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil], null)),cljs.core.cst$kw$maybe,form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__8808__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = (function (){var and__8796__auto__ = (function (){var G__32268 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__32267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,null], null), null);
return (fexpr__32267.cljs$core$IFn$_invoke$arity$1 ? fexpr__32267.cljs$core$IFn$_invoke$arity$1(G__32268) : fexpr__32267.call(null,G__32268));
})();
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__32269 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__32269__$1 = ((((!((map__32269 == null)))?((((map__32269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32269):map__32269);
var p__$1 = map__32269__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32269__$1,cljs.core.cst$kw$forms);
var G__32271 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__32271)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32271)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__32271)){
var and__8796__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__8796__auto__)){
var or__8808__auto__ = cljs.spec.alpha.noret_QMARK_(p1,(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var ret = cljs.spec.alpha.and_preds((cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(ret));
}
} else {
return and__8796__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__32271)){
var or__8808__auto__ = (p1 === p2);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__32271)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__32271)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32271)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__32272 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__32272__$1 = ((((!((map__32272 == null)))?((((map__32272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32272):map__32272);
var p__$1 = map__32272__$1;
var vec__32273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32272__$1,cljs.core.cst$kw$ps);
var seq__32274 = cljs.core.seq(vec__32273);
var first__32275 = cljs.core.first(seq__32274);
var seq__32274__$1 = cljs.core.next(seq__32274);
var p0 = first__32275;
var pr = seq__32274__$1;
var ps = vec__32273;
var vec__32276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32272__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32276,(0),null);
var ks = vec__32276;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32272__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32272__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32272__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32272__$1,cljs.core.cst$kw$forms);
var G__32280 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__32280)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32280)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__32280)){
var pret = (cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil;
} else {
return cljs.spec.alpha.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__32280)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.alpha.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__32280)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.alpha.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__32280)){
var vec__32281 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__32284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32281,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32284,(0),null);
var vec__32287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32281,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32287,(0),null);
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil:(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.alpha.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32280)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__32294 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__32294__$1 = ((((!((map__32294 == null)))?((((map__32294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32294):map__32294);
var p__$1 = map__32294__$1;
var vec__32295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,cljs.core.cst$kw$ps);
var seq__32296 = cljs.core.seq(vec__32295);
var first__32297 = cljs.core.first(seq__32296);
var seq__32296__$1 = cljs.core.next(seq__32296);
var p0 = first__32297;
var pr = seq__32296__$1;
var ps = vec__32295;
var vec__32298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32298,(0),null);
var ks = vec__32298;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32294__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__32302 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__32302)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32302)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__32302)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__32302,map__32294,map__32294__$1,p__$1,vec__32295,seq__32296,first__32297,seq__32296__$1,p0,pr,ps,vec__32298,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__32291_SHARP_,p2__32290_SHARP_){
return cljs.spec.alpha.unform(p2__32290_SHARP_,p1__32291_SHARP_);
});})(G__32302,map__32294,map__32294__$1,p__$1,vec__32295,seq__32296,first__32297,seq__32296__$1,p0,pr,ps,vec__32298,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__32302)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__32302,map__32294,map__32294__$1,p__$1,vec__32295,seq__32296,first__32297,seq__32296__$1,p0,pr,ps,vec__32298,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__32292_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__32292_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__32292_SHARP_));
});})(G__32302,map__32294,map__32294__$1,p__$1,vec__32295,seq__32296,first__32297,seq__32296__$1,p0,pr,ps,vec__32298,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__32302)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__32302,map__32294,map__32294__$1,p__$1,vec__32295,seq__32296,first__32297,seq__32296__$1,p0,pr,ps,vec__32298,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__32293_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__32293_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__32293_SHARP_));
});})(G__32302,map__32294,map__32294__$1,p__$1,vec__32295,seq__32296,first__32297,seq__32296__$1,p0,pr,ps,vec__32298,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__32302,map__32294,map__32294__$1,p__$1,vec__32295,seq__32296,first__32297,seq__32296__$1,p0,pr,ps,vec__32298,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__32303 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__32304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__32303,G__32304) : cljs.spec.alpha.op_unform.call(null,G__32303,G__32304));
} else {
return null;
}
});})(G__32302,map__32294,map__32294__$1,p__$1,vec__32295,seq__32296,first__32297,seq__32296__$1,p0,pr,ps,vec__32298,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__32302)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__32305 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32305,(1),null);
var G__32308 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__32309 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__32308,G__32309) : cljs.spec.alpha.op_unform.call(null,G__32308,G__32309));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32302)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__32310 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__32310__$1 = ((((!((map__32310 == null)))?((((map__32310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32310):map__32310);
var p__$1 = map__32310__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32310__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32310__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32310__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__32310,map__32310__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
var G__32313 = r;
var G__32314 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__32312 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__32312.cljs$core$IFn$_invoke$arity$2 ? fexpr__32312.cljs$core$IFn$_invoke$arity$2(G__32313,G__32314) : fexpr__32312.call(null,G__32313,G__32314));
}
});})(map__32310,map__32310__$1,p__$1,op,ps,splice))
;
var G__32315 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32315)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__32315)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__32315)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__32315)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__32315)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__32315)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32315)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__32317 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__32317__$1 = ((((!((map__32317 == null)))?((((map__32317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32317):map__32317);
var p__$1 = map__32317__$1;
var vec__32318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,cljs.core.cst$kw$ps);
var seq__32319 = cljs.core.seq(vec__32318);
var first__32320 = cljs.core.first(seq__32319);
var seq__32319__$1 = cljs.core.next(seq__32319);
var p0 = first__32320;
var pr = seq__32319__$1;
var ps = vec__32318;
var vec__32321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,cljs.core.cst$kw$ks);
var seq__32322 = cljs.core.seq(vec__32321);
var first__32323 = cljs.core.first(seq__32322);
var seq__32322__$1 = cljs.core.next(seq__32322);
var k0 = first__32323;
var kr = seq__32322__$1;
var ks = vec__32321;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32317__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__32325 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__32325)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32325)){
var ret__$1 = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__32325)){
var temp__5457__auto__ = (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__5457__auto__)){
var p1__$1 = temp__5457__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__32325)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__32326 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__32327 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__32326,G__32327) : cljs.spec.alpha.deriv.call(null,G__32326,G__32327));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__32325)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__32325,map__32317,map__32317__$1,p__$1,vec__32318,seq__32319,first__32320,seq__32319__$1,p0,pr,ps,vec__32321,seq__32322,first__32323,seq__32322__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__32316_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__32316_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__32316_SHARP_,x));
});})(G__32325,map__32317,map__32317__$1,p__$1,vec__32318,seq__32319,first__32320,seq__32319__$1,p0,pr,ps,vec__32321,seq__32322,first__32323,seq__32322__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__32325)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__32328 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__32329 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__32328,G__32329) : cljs.spec.alpha.deriv.call(null,G__32328,G__32329));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32325)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__32330 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__32330__$1 = ((((!((map__32330 == null)))?((((map__32330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32330):map__32330);
var p__$1 = map__32330__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32330__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__32332 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__32332)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32332)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__32332)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$spec$alpha_SLASH__AMPERSAND_,(cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__32332)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__9762__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__8808__auto__ = cljs.core.seq(ks);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__32332)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__9762__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__32332)){
var x__9762__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_);
return cljs.core._conj((function (){var x__9762__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32332)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__32333 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32333,(0),null);
var input__$1 = vec__32333;
var map__32336 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__32336__$1 = ((((!((map__32336 == null)))?((((map__32336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32336):map__32336);
var p__$1 = map__32336__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32336__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32336__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32336__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32336__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32336__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32336__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32336__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__5455__auto__ = cljs.spec.alpha.spec_name(p__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__32333,x,input__$1,map__32336,map__32336__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,form__$1,cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__32333,x,input__$1,map__32336,map__32336__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__32338 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__32338)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32338)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.alpha.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__32338)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))){
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1));
} else {
return insufficient(path,cljs.spec.alpha.op_describe(p1));
}
} else {
var temp__5455__auto__ = cljs.spec.alpha.deriv(p1,x);
if(cljs.core.truth_(temp__5455__auto__)){
var p1__$1 = temp__5455__auto__;
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1__$1));
} else {
var G__32339 = cljs.spec.alpha.op_describe(p1);
var G__32340 = p1;
var G__32341 = path;
var G__32342 = via__$1;
var G__32343 = in$;
var G__32344 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__32339,G__32340,G__32341,G__32342,G__32343,G__32344) : cljs.spec.alpha.op_explain.call(null,G__32339,G__32340,G__32341,G__32342,G__32343,G__32344));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__32338)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__8808__auto__ = cljs.core.seq(ks);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8808__auto__ = cljs.core.seq(forms);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__32345 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__32338,vec__32333,x,input__$1,map__32336,map__32336__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__32348){
var vec__32349 = p__32348;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32349,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
});})(pkfs,G__32338,vec__32333,x,input__$1,map__32336,map__32336__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32345,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32345,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32345,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__8808__auto__ = form__$1;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__32338)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__32338,vec__32333,x,input__$1,map__32336,map__32336__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__32352 = (function (){var or__8808__auto__ = form__$1;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
var G__32353 = pred;
var G__32354 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__32355 = via__$1;
var G__32356 = in$;
var G__32357 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__32352,G__32353,G__32354,G__32355,G__32356,G__32357) : cljs.spec.alpha.op_explain.call(null,G__32352,G__32353,G__32354,G__32355,G__32356,G__32357));
});})(G__32338,vec__32333,x,input__$1,map__32336,map__32336__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__8808__auto__ = cljs.core.seq(ks);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8808__auto__ = cljs.core.seq(forms);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__32338)){
var G__32358 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__32359 = p1;
var G__32360 = path;
var G__32361 = via__$1;
var G__32362 = in$;
var G__32363 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__32358,G__32359,G__32360,G__32361,G__32362,G__32363) : cljs.spec.alpha.op_explain.call(null,G__32358,G__32359,G__32360,G__32361,G__32362,G__32363));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32338)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__32365 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__32365__$1 = ((((!((map__32365 == null)))?((((map__32365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32365):map__32365);
var p__$1 = map__32365__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$ret);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$p1);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32365__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = ((function (map__32365,map__32365__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__32365,map__32365__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__8796__auto__ = rmap__$1;
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = id;
if(cljs.core.truth_(and__8796__auto____$1)){
var and__8796__auto____$2 = k;
if(cljs.core.truth_(and__8796__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__8796__auto____$2;
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (map__32365,map__32365__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
var G__32367 = p__$2;
var G__32368 = overrides;
var G__32369 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__32370 = rmap__$1;
var G__32371 = (function (){var or__8808__auto__ = f__$1;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__32367,G__32368,G__32369,G__32370,G__32371) : cljs.spec.alpha.re_gen.call(null,G__32367,G__32368,G__32369,G__32370,G__32371));
});})(map__32365,map__32365__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
var G__32372 = p__$2;
var G__32373 = overrides;
var G__32374 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__32375 = rmap__$1;
var G__32376 = (function (){var or__8808__auto__ = f__$1;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__32372,G__32373,G__32374,G__32375,G__32376) : cljs.spec.alpha.re_gen.call(null,G__32372,G__32373,G__32374,G__32375,G__32376));
}
}
});})(map__32365,map__32365__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__8808__auto__ = cljs.core.seq(ks__$1);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__8808__auto__ = cljs.core.seq(forms__$1);
if(or__8808__auto__){
return or__8808__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__32365,map__32365__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__8808__auto__ = (function (){var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__5457__auto__)){
var g = temp__5457__auto__;
var G__32378 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__32378)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32378)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__32379 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__32379)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32379)){
var temp__5457__auto__ = cljs.spec.alpha.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5457__auto__)){
var g = temp__5457__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__32379)){
var G__32380 = p1;
var G__32381 = overrides;
var G__32382 = path;
var G__32383 = rmap__$1;
var G__32384 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__32380,G__32381,G__32382,G__32383,G__32384) : cljs.spec.alpha.re_gen.call(null,G__32380,G__32381,G__32382,G__32383,G__32384));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__32379)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__32379)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__32379)){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__5457__auto__ = (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__5457__auto__)){
var g = temp__5457__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__5457__auto__,G__32379,or__8808__auto____$1,or__8808__auto__,map__32365,map__32365__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__32364_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__32364_SHARP_);
});})(g,temp__5457__auto__,G__32379,or__8808__auto____$1,or__8808__auto__,map__32365,map__32365__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32379)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__32385){
while(true){
var vec__32386 = p__32385;
var seq__32387 = cljs.core.seq(vec__32386);
var first__32388 = cljs.core.first(seq__32387);
var seq__32387__$1 = cljs.core.next(seq__32387);
var x = first__32388;
var xs = seq__32387__$1;
var data = vec__32386;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p))){
var ret = cljs.spec.alpha.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
var temp__5455__auto__ = cljs.spec.alpha.deriv(p,x);
if(cljs.core.truth_(temp__5455__auto__)){
var dp = temp__5455__auto__;
var G__32389 = dp;
var G__32390 = xs;
p = G__32389;
p__32385 = G__32390;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__32394 = input;
var vec__32395 = G__32394;
var seq__32396 = cljs.core.seq(vec__32395);
var first__32397 = cljs.core.first(seq__32396);
var seq__32396__$1 = cljs.core.next(seq__32396);
var x = first__32397;
var xs = seq__32396__$1;
var data = vec__32395;
var i = (0);
var p__$1 = p;
var G__32394__$1 = G__32394;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__32398 = G__32394__$1;
var seq__32399 = cljs.core.seq(vec__32398);
var first__32400 = cljs.core.first(seq__32399);
var seq__32399__$1 = cljs.core.next(seq__32399);
var x__$1 = first__32400;
var xs__$1 = seq__32399__$1;
var data__$1 = vec__32398;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5455__auto__ = cljs.spec.alpha.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var dp = temp__5455__auto__;
var G__32401 = dp;
var G__32402 = xs__$1;
var G__32403 = (i__$2 + (1));
p__$1 = G__32401;
G__32394__$1 = G__32402;
i__$1 = G__32403;
continue;
} else {
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat)){
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(re),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__8808__auto__ = cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(p__$2),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32404 = (function (re,gfn,meta32405){
this.re = re;
this.gfn = gfn;
this.meta32405 = meta32405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32406,meta32405__$1){
var self__ = this;
var _32406__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32404(self__.re,self__.gfn,meta32405__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32406){
var self__ = this;
var _32406__$1 = this;
return self__.meta32405;
});

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform(self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(self__.re),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.re_gen(self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe(self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha32404.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe(self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha32404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta32405], null);
});

cljs.spec.alpha.t_cljs$spec$alpha32404.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32404.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32404";

cljs.spec.alpha.t_cljs$spec$alpha32404.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32404");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha32404 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha32404(re__$1,gfn__$1,meta32405){
return (new cljs.spec.alpha.t_cljs$spec$alpha32404(re__$1,gfn__$1,meta32405));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32404(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cargs))){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.alpha.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__8796__auto__ = cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cret));
if(and__8796__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__8796__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__32407_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__32407_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([iters,prop], 0));
var temp__5455__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__32408 = temp__5455__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32408,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha32411 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta32412){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta32412 = meta32412;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_32413,meta32412__$1){
var self__ = this;
var _32413__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32411(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta32412__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_32413){
var self__ = this;
var _32413__$1 = this;
return self__.meta32412;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.alpha.validate_fn(f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.alpha.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e32414){if((e32414 instanceof Error)){
var t = e32414;
return t;
} else {
throw e32414;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cret))){
return cljs.spec.alpha.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform(self__.argspec,args);
return cljs.spec.alpha.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$3,specs){
return (function() { 
var G__32417__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_32415_32418 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_32416_32419 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_32415_32418,_STAR_print_fn_STAR_32416_32419,sb__9935__auto__,___$3,specs){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(_STAR_print_newline_STAR_32415_32418,_STAR_print_fn_STAR_32416_32419,sb__9935__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32416_32419;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32415_32418;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__32417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32420__i = 0, G__32420__a = new Array(arguments.length -  0);
while (G__32420__i < G__32420__a.length) {G__32420__a[G__32420__i] = arguments[G__32420__i + 0]; ++G__32420__i;}
  args = new cljs.core.IndexedSeq(G__32420__a,0,null);
} 
return G__32417__delegate.call(this,args);};
G__32417.cljs$lang$maxFixedArity = 0;
G__32417.cljs$lang$applyTo = (function (arglist__32421){
var args = cljs.core.seq(arglist__32421);
return G__32417__delegate(args);
});
G__32417.cljs$core$IFn$_invoke$arity$variadic = G__32417__delegate;
return G__32417;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ret),(function (){var x__9762__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fn),(function (){var x__9762__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta32412], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha32411.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32411.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32411";

cljs.spec.alpha.t_cljs$spec$alpha32411.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32411");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha32411 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha32411(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta32412){
return (new cljs.spec.alpha.t_cljs$spec$alpha32411(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta32412));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32411(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$spec$alpha_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__32422_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$p1__32422_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$p1__32422_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__32423_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__32423_SHARP_))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$_PERCENT_))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$_PERCENT_))),(function (p1__32422_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,p1__32422_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,p1__32422_SHARP_));
}),null,true,(function (p1__32423_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32424){
var vec__32425 = p__32424;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32425,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,v], null);
}),p1__32423_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32428 = (function (spec,meta32429){
this.spec = spec;
this.meta32429 = meta32429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_32430,meta32429__$1){
var self__ = this;
var _32430__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32428(self__.spec,meta32429__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_32430){
var self__ = this;
var _32430__$1 = this;
return self__.meta32429;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_(self__.spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__32431 = cljs.spec.alpha.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__32431) : cljs.spec.alpha.nonconforming.call(null,G__32431));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nonconforming),(function (){var x__9762__auto__ = cljs.spec.alpha.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta32429], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha32428.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32428.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32428";

cljs.spec.alpha.t_cljs$spec$alpha32428.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32428");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha32428 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha32428(spec__$2,meta32429){
return (new cljs.spec.alpha.t_cljs$spec$alpha32428(spec__$2,meta32429));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32428(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha32432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha32432 = (function (form,pred,gfn,spec,meta32433){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta32433 = meta32433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_32434,meta32433__$1){
var self__ = this;
var _32434__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha32432(self__.form,self__.pred,self__.gfn,self__.spec,meta32433__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_32434){
var self__ = this;
var _32434__$1 = this;
return self__.meta32433;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.spec,x);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil),cljs.core.cst$kw$pred,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null)], 0));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable),(function (){var x__9762__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta32433], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha32432.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha32432.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha32432";

cljs.spec.alpha.t_cljs$spec$alpha32432.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.spec.alpha/t_cljs$spec$alpha32432");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha32432 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha32432(form__$1,pred__$1,gfn__$1,spec__$1,meta32433){
return (new cljs.spec.alpha.t_cljs$spec$alpha32432(form__$1,pred__$1,gfn__$1,spec__$1,meta32433));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha32432(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__32437 = arguments.length;
switch (G__32437) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32435_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__32435_SHARP_,cljs.spec.alpha.conform(spec,p1__32435_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__8796__auto__ = cljs.core.inst_QMARK_(inst);
if(and__8796__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__8796__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__8796__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__8796__auto__)){
return val.lessThan(end);
} else {
return and__8796__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__8796__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__8796__auto__)){
return val.lessThan(end);
} else {
return and__8796__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x))){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure,cljs.core.cst$kw$assertion_DASH_failed)], 0));
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_32439_32441 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_32440_32442 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_32439_32441,_STAR_print_fn_STAR_32440_32442,sb__9935__auto__,ed){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(_STAR_print_newline_STAR_32439_32441,_STAR_print_fn_STAR_32440_32442,sb__9935__auto__,ed))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32440_32442;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32439_32441;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
})())].join('')));
}
});
