// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__10133__auto___38021 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38022 = arguments.length;
var i__10088__auto___38023 = (0);
while(true){
if((i__10088__auto___38023 < len__10087__auto___38022)){
args__10094__auto__.push((arguments[i__10088__auto___38023]));

var G__38024 = (i__10088__auto___38023 + (1));
i__10088__auto___38023 = G__38024;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(function (){var x__9762__auto__ = form;
return cljs.core._conj((function (){var x__9762__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})());
var G__38025 = threaded;
var G__38026 = cljs.core.next(forms__$1);
x__$1 = G__38025;
forms__$1 = G__38026;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq38017){
var G__38018 = cljs.core.first(seq38017);
var seq38017__$1 = cljs.core.next(seq38017);
var G__38019 = cljs.core.first(seq38017__$1);
var seq38017__$2 = cljs.core.next(seq38017__$1);
var G__38020 = cljs.core.first(seq38017__$2);
var seq38017__$3 = cljs.core.next(seq38017__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__38018,G__38019,G__38020,seq38017__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__10133__auto___38031 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38032 = arguments.length;
var i__10088__auto___38033 = (0);
while(true){
if((i__10088__auto___38033 < len__10087__auto___38032)){
args__10094__auto__.push((arguments[i__10088__auto___38033]));

var G__38034 = (i__10088__auto___38033 + (1));
i__10088__auto___38033 = G__38034;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.next(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.meta(form)):(function (){var x__9762__auto__ = form;
return cljs.core._conj((function (){var x__9762__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})());
var G__38035 = threaded;
var G__38036 = cljs.core.next(forms__$1);
x__$1 = G__38035;
forms__$1 = G__38036;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq38027){
var G__38028 = cljs.core.first(seq38027);
var seq38027__$1 = cljs.core.next(seq38027);
var G__38029 = cljs.core.first(seq38027__$1);
var seq38027__$2 = cljs.core.next(seq38027__$1);
var G__38030 = cljs.core.first(seq38027__$2);
var seq38027__$3 = cljs.core.next(seq38027__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__38028,G__38029,G__38030,seq38027__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__10133__auto___38044 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__38043 = arguments.length;
switch (G__38043) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38046 = arguments.length;
var i__10088__auto___38047 = (0);
while(true){
if((i__10088__auto___38047 < len__10087__auto___38046)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38047]));

var G__38048 = (i__10088__auto___38047 + (1));
i__10088__auto___38047 = G__38048;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq38038){
var G__38039 = cljs.core.first(seq38038);
var seq38038__$1 = cljs.core.next(seq38038);
var G__38040 = cljs.core.first(seq38038__$1);
var seq38038__$2 = cljs.core.next(seq38038__$1);
var G__38041 = cljs.core.first(seq38038__$2);
var seq38038__$3 = cljs.core.next(seq38038__$2);
var G__38042 = cljs.core.first(seq38038__$3);
var seq38038__$4 = cljs.core.next(seq38038__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__38039,G__38040,G__38041,G__38042,seq38038__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__10133__auto___38052 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38053 = arguments.length;
var i__10088__auto___38054 = (0);
while(true){
if((i__10088__auto___38054 < len__10087__auto___38053)){
args__10094__auto__.push((arguments[i__10088__auto___38054]));

var G__38055 = (i__10088__auto___38054 + (1));
i__10088__auto___38054 = G__38055;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq38049){
var G__38050 = cljs.core.first(seq38049);
var seq38049__$1 = cljs.core.next(seq38049);
var G__38051 = cljs.core.first(seq38049__$1);
var seq38049__$2 = cljs.core.next(seq38049__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__38050,G__38051,seq38049__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__10133__auto___38059 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38060 = arguments.length;
var i__10088__auto___38061 = (0);
while(true){
if((i__10088__auto___38061 < len__10087__auto___38060)){
args__10094__auto__.push((arguments[i__10088__auto___38061]));

var G__38062 = (i__10088__auto___38061 + (1));
i__10088__auto___38061 = G__38062;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.first(clauses);
return cljs.core._conj((function (){var x__9762__auto____$1 = ((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj((function (){var x__9762__auto____$2 = cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_cond,cljs.core.next(cljs.core.next(clauses)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$if);
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq38056){
var G__38057 = cljs.core.first(seq38056);
var seq38056__$1 = cljs.core.next(seq38056);
var G__38058 = cljs.core.first(seq38056__$1);
var seq38056__$2 = cljs.core.next(seq38056__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__38057,G__38058,seq38056__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__10133__auto___38067 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38068 = arguments.length;
var i__10088__auto___38069 = (0);
while(true){
if((i__10088__auto___38069 < len__10087__auto___38068)){
args__10094__auto__.push((arguments[i__10088__auto___38069]));

var G__38070 = (i__10088__auto___38069 + (1));
i__10088__auto___38069 = G__38070;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38063_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__38063_SHARP_,cljs.core.assoc,cljs.core.cst$kw$declared,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$def);
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq38064){
var G__38065 = cljs.core.first(seq38064);
var seq38064__$1 = cljs.core.next(seq38064);
var G__38066 = cljs.core.first(seq38064__$1);
var seq38064__$2 = cljs.core.next(seq38064__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__38065,G__38066,seq38064__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__10133__auto___38075 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38076 = arguments.length;
var i__10088__auto___38077 = (0);
while(true){
if((i__10088__auto___38077 < len__10087__auto___38076)){
args__10094__auto__.push((arguments[i__10088__auto___38077]));

var G__38078 = (i__10088__auto___38077 + (1));
i__10088__auto___38077 = G__38078;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = cljs.core.first(f);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__9762__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq38071){
var G__38072 = cljs.core.first(seq38071);
var seq38071__$1 = cljs.core.next(seq38071);
var G__38073 = cljs.core.first(seq38071__$1);
var seq38071__$2 = cljs.core.next(seq38071__$1);
var G__38074 = cljs.core.first(seq38071__$2);
var seq38071__$3 = cljs.core.next(seq38071__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__38072,G__38073,G__38074,seq38071__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__38079 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__38080 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__38079;
s = G__38080;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (impls){
return (function (p__38081){
var vec__38082 = p__38081;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38082,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38082,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = p;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),fs], 0))));
});})(impls))
,impls))));
});
var ret__10133__auto___38089 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38090 = arguments.length;
var i__10088__auto___38091 = (0);
while(true){
if((i__10088__auto___38091 < len__10087__auto___38090)){
args__10094__auto__.push((arguments[i__10088__auto___38091]));

var G__38092 = (i__10088__auto___38091 + (1));
i__10088__auto___38091 = G__38092;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq38085){
var G__38086 = cljs.core.first(seq38085);
var seq38085__$1 = cljs.core.next(seq38085);
var G__38087 = cljs.core.first(seq38085__$1);
var seq38085__$2 = cljs.core.next(seq38085__$1);
var G__38088 = cljs.core.first(seq38085__$2);
var seq38085__$3 = cljs.core.next(seq38085__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__38086,G__38087,G__38088,seq38085__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__38093 = cljs.core.next(params__$1);
var G__38094 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38095 = lets;
params__$1 = G__38093;
new_params = G__38094;
lets = G__38095;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38096 = cljs.core.next(params__$1);
var G__38097 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38098 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38096;
new_params = G__38097;
lets = G__38098;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = new_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = lets;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
}
break;
}
}
});
var ret__10133__auto___38105 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38106 = arguments.length;
var i__10088__auto___38107 = (0);
while(true){
if((i__10088__auto___38107 < len__10087__auto___38106)){
args__10094__auto__.push((arguments[i__10088__auto___38107]));

var G__38108 = (i__10088__auto___38107 + (1));
i__10088__auto___38107 = G__38108;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(function (){var x__9762__auto__ = sigs__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})():((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__38102 = sig;
var seq__38103 = cljs.core.seq(vec__38102);
var first__38104 = cljs.core.first(seq__38103);
var seq__38103__$1 = cljs.core.next(seq__38103);
var params = first__38104;
var body = seq__38103__$1;
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__8808__auto__ = conds;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_),(function (){var x__9762__auto__ = ((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1))):cljs.core.first(body__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38102,seq__38103,first__38104,seq__38103__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(vec__38102,seq__38103,first__38104,seq__38103__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38102,seq__38103,first__38104,seq__38103__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(vec__38102,seq__38103,first__38104,seq__38103__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$fn_STAR_,name,new_sigs):cljs.core.cons(cljs.core.cst$sym$fn_STAR_,new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq38099){
var G__38100 = cljs.core.first(seq38099);
var seq38099__$1 = cljs.core.next(seq38099);
var G__38101 = cljs.core.first(seq38099__$1);
var seq38099__$2 = cljs.core.next(seq38099__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__38100,G__38101,seq38099__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__10133__auto___38113 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38114 = arguments.length;
var i__10088__auto___38115 = (0);
while(true){
if((i__10088__auto___38115 < len__10087__auto___38114)){
args__10094__auto__.push((arguments[i__10088__auto___38115]));

var G__38116 = (i__10088__auto___38115 + (1));
i__10088__auto___38115 = G__38116;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),cljs.core.cst$kw$private,true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq38109){
var G__38110 = cljs.core.first(seq38109);
var seq38109__$1 = cljs.core.next(seq38109);
var G__38111 = cljs.core.first(seq38109__$1);
var seq38109__$2 = cljs.core.next(seq38109__$1);
var G__38112 = cljs.core.first(seq38109__$2);
var seq38109__$3 = cljs.core.next(seq38109__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__38110,G__38111,G__38112,seq38109__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__10133__auto___38126 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__38125 = arguments.length;
switch (G__38125) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38128 = arguments.length;
var i__10088__auto___38129 = (0);
while(true){
if((i__10088__auto___38129 < len__10087__auto___38128)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38129]));

var G__38130 = (i__10088__auto___38129 + (1));
i__10088__auto___38129 = G__38130;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10111__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38117__auto__),(function (){var x__9762__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38117__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38117__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq38119){
var G__38120 = cljs.core.first(seq38119);
var seq38119__$1 = cljs.core.next(seq38119);
var G__38121 = cljs.core.first(seq38119__$1);
var seq38119__$2 = cljs.core.next(seq38119__$1);
var G__38122 = cljs.core.first(seq38119__$2);
var seq38119__$3 = cljs.core.next(seq38119__$2);
var G__38123 = cljs.core.first(seq38119__$3);
var seq38119__$4 = cljs.core.next(seq38119__$3);
var G__38124 = cljs.core.first(seq38119__$4);
var seq38119__$5 = cljs.core.next(seq38119__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__38120,G__38121,G__38122,G__38123,G__38124,seq38119__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__10133__auto___38133 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__38132 = arguments.length;
switch (G__38132) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__10133__auto___38140 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38141 = arguments.length;
var i__10088__auto___38142 = (0);
while(true){
if((i__10088__auto___38142 < len__10087__auto___38141)){
args__10094__auto__.push((arguments[i__10088__auto___38142]));

var G__38143 = (i__10088__auto___38142 + (1));
i__10088__auto___38142 = G__38143;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$letfn_STAR_),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38135_SHARP_){
return cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,p1__38135_SHARP_);
}),fnspecs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq38136){
var G__38137 = cljs.core.first(seq38136);
var seq38136__$1 = cljs.core.next(seq38136);
var G__38138 = cljs.core.first(seq38136__$1);
var seq38136__$2 = cljs.core.next(seq38136__$1);
var G__38139 = cljs.core.first(seq38136__$2);
var seq38136__$3 = cljs.core.next(seq38136__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__38137,G__38138,G__38139,seq38136__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__10133__auto___38148 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38149 = arguments.length;
var i__10088__auto___38150 = (0);
while(true){
if((i__10088__auto___38150 < len__10087__auto___38149)){
args__10094__auto__.push((arguments[i__10088__auto___38150]));

var G__38151 = (i__10088__auto___38150 + (1));
i__10088__auto___38150 = G__38151;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq38144){
var G__38145 = cljs.core.first(seq38144);
var seq38144__$1 = cljs.core.next(seq38144);
var G__38146 = cljs.core.first(seq38144__$1);
var seq38144__$2 = cljs.core.next(seq38144__$1);
var G__38147 = cljs.core.first(seq38144__$2);
var seq38144__$3 = cljs.core.next(seq38144__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__38145,G__38146,G__38147,seq38144__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__10133__auto___38156 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38157 = arguments.length;
var i__10088__auto___38158 = (0);
while(true){
if((i__10088__auto___38158 < len__10087__auto___38157)){
args__10094__auto__.push((arguments[i__10088__auto___38158]));

var G__38159 = (i__10088__auto___38158 + (1));
i__10088__auto___38158 = G__38159;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__9762__auto__ = test;
return cljs.core._conj((function (){var x__9762__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq38152){
var G__38153 = cljs.core.first(seq38152);
var seq38152__$1 = cljs.core.next(seq38152);
var G__38154 = cljs.core.first(seq38152__$1);
var seq38152__$2 = cljs.core.next(seq38152__$1);
var G__38155 = cljs.core.first(seq38152__$2);
var seq38152__$3 = cljs.core.next(seq38152__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__38153,G__38154,G__38155,seq38152__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__10133__auto___38168 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38169 = arguments.length;
var i__10088__auto___38170 = (0);
while(true){
if((i__10088__auto___38170 < len__10087__auto___38169)){
args__10094__auto__.push((arguments[i__10088__auto___38170]));

var G__38171 = (i__10088__auto___38170 + (1));
i__10088__auto___38170 = G__38171;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__38165 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38165,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38165,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__38160__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__9762__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__38160__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq38161){
var G__38162 = cljs.core.first(seq38161);
var seq38161__$1 = cljs.core.next(seq38161);
var G__38163 = cljs.core.first(seq38161__$1);
var seq38161__$2 = cljs.core.next(seq38161__$1);
var G__38164 = cljs.core.first(seq38161__$2);
var seq38161__$3 = cljs.core.next(seq38161__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__38162,G__38163,G__38164,seq38161__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__10133__auto___38177 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38178 = arguments.length;
var i__10088__auto___38179 = (0);
while(true){
if((i__10088__auto___38179 < len__10087__auto___38178)){
args__10094__auto__.push((arguments[i__10088__auto___38179]));

var G__38180 = (i__10088__auto___38179 + (1));
i__10088__auto___38179 = G__38180;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38172__auto__),(function (){var x__9762__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38172__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38172__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq38173){
var G__38174 = cljs.core.first(seq38173);
var seq38173__$1 = cljs.core.next(seq38173);
var G__38175 = cljs.core.first(seq38173__$1);
var seq38173__$2 = cljs.core.next(seq38173__$1);
var G__38176 = cljs.core.first(seq38173__$2);
var seq38173__$3 = cljs.core.next(seq38173__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__38174,G__38175,G__38176,seq38173__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__10133__auto___38185 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38186 = arguments.length;
var i__10088__auto___38187 = (0);
while(true){
if((i__10088__auto___38187 < len__10087__auto___38186)){
args__10094__auto__.push((arguments[i__10088__auto___38187]));

var G__38188 = (i__10088__auto___38187 + (1));
i__10088__auto___38187 = G__38188;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),null),x__9762__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq38181){
var G__38182 = cljs.core.first(seq38181);
var seq38181__$1 = cljs.core.next(seq38181);
var G__38183 = cljs.core.first(seq38181__$1);
var seq38181__$2 = cljs.core.next(seq38181__$1);
var G__38184 = cljs.core.first(seq38181__$2);
var seq38181__$3 = cljs.core.next(seq38181__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__38182,G__38183,G__38184,seq38181__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__10133__auto___38193 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38194 = arguments.length;
var i__10088__auto___38195 = (0);
while(true){
if((i__10088__auto___38195 < len__10087__auto___38194)){
args__10094__auto__.push((arguments[i__10088__auto___38195]));

var G__38196 = (i__10088__auto___38195 + (1));
i__10088__auto___38195 = G__38196;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq38189){
var G__38190 = cljs.core.first(seq38189);
var seq38189__$1 = cljs.core.next(seq38189);
var G__38191 = cljs.core.first(seq38189__$1);
var seq38189__$2 = cljs.core.next(seq38189__$1);
var G__38192 = cljs.core.first(seq38189__$2);
var seq38189__$3 = cljs.core.next(seq38189__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__38190,G__38191,G__38192,seq38189__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__10133__auto___38205 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38206 = arguments.length;
var i__10088__auto___38207 = (0);
while(true){
if((i__10088__auto___38207 < len__10087__auto___38206)){
args__10094__auto__.push((arguments[i__10088__auto___38207]));

var G__38208 = (i__10088__auto___38207 + (1));
i__10088__auto___38207 = G__38208;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (p__38201){
var vec__38202 = p__38201;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38202,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38202,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(g))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq38197){
var G__38198 = cljs.core.first(seq38197);
var seq38197__$1 = cljs.core.next(seq38197);
var G__38199 = cljs.core.first(seq38197__$1);
var seq38197__$2 = cljs.core.next(seq38197__$1);
var G__38200 = cljs.core.first(seq38197__$2);
var seq38197__$3 = cljs.core.next(seq38197__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__38198,G__38199,G__38200,seq38197__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__10133__auto___38217 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38218 = arguments.length;
var i__10088__auto___38219 = (0);
while(true){
if((i__10088__auto___38219 < len__10087__auto___38218)){
args__10094__auto__.push((arguments[i__10088__auto___38219]));

var G__38220 = (i__10088__auto___38219 + (1));
i__10088__auto___38219 = G__38220;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (p__38213){
var vec__38214 = p__38213;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38214,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38214,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(g))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq38209){
var G__38210 = cljs.core.first(seq38209);
var seq38209__$1 = cljs.core.next(seq38209);
var G__38211 = cljs.core.first(seq38209__$1);
var seq38209__$2 = cljs.core.next(seq38209__$1);
var G__38212 = cljs.core.first(seq38209__$2);
var seq38209__$3 = cljs.core.next(seq38209__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__38210,G__38211,G__38212,seq38209__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__10133__auto___38226 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38227 = arguments.length;
var i__10088__auto___38228 = (0);
while(true){
if((i__10088__auto___38228 < len__10087__auto___38227)){
args__10094__auto__.push((arguments[i__10088__auto___38228]));

var G__38229 = (i__10088__auto___38228 + (1));
i__10088__auto___38228 = G__38229;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq38221){
var G__38222 = cljs.core.first(seq38221);
var seq38221__$1 = cljs.core.next(seq38221);
var G__38223 = cljs.core.first(seq38221__$1);
var seq38221__$2 = cljs.core.next(seq38221__$1);
var G__38224 = cljs.core.first(seq38221__$2);
var seq38221__$3 = cljs.core.next(seq38221__$2);
var G__38225 = cljs.core.first(seq38221__$3);
var seq38221__$4 = cljs.core.next(seq38221__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__38222,G__38223,G__38224,G__38225,seq38221__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__10133__auto___38234 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38235 = arguments.length;
var i__10088__auto___38236 = (0);
while(true){
if((i__10088__auto___38236 < len__10087__auto___38235)){
args__10094__auto__.push((arguments[i__10088__auto___38236]));

var G__38237 = (i__10088__auto___38236 + (1));
i__10088__auto___38236 = G__38237;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(g))
,forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq38230){
var G__38231 = cljs.core.first(seq38230);
var seq38230__$1 = cljs.core.next(seq38230);
var G__38232 = cljs.core.first(seq38230__$1);
var seq38230__$2 = cljs.core.next(seq38230__$1);
var G__38233 = cljs.core.first(seq38230__$2);
var seq38230__$3 = cljs.core.next(seq38230__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__38231,G__38232,G__38233,seq38230__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__10133__auto___38242 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38243 = arguments.length;
var i__10088__auto___38244 = (0);
while(true){
if((i__10088__auto___38244 < len__10087__auto___38243)){
args__10094__auto__.push((arguments[i__10088__auto___38244]));

var G__38245 = (i__10088__auto___38244 + (1));
i__10088__auto___38244 = G__38245;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(g))
,forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq38238){
var G__38239 = cljs.core.first(seq38238);
var seq38238__$1 = cljs.core.next(seq38238);
var G__38240 = cljs.core.first(seq38238__$1);
var seq38238__$2 = cljs.core.next(seq38238__$1);
var G__38241 = cljs.core.first(seq38238__$2);
var seq38238__$3 = cljs.core.next(seq38238__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__38239,G__38240,G__38241,seq38238__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__10133__auto___38255 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__38254 = arguments.length;
switch (G__38254) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38257 = arguments.length;
var i__10088__auto___38258 = (0);
while(true){
if((i__10088__auto___38258 < len__10087__auto___38257)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38258]));

var G__38259 = (i__10088__auto___38258 + (1));
i__10088__auto___38258 = G__38259;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10111__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_some),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38246__auto__),(function (){var x__9762__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38246__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38246__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq38248){
var G__38249 = cljs.core.first(seq38248);
var seq38248__$1 = cljs.core.next(seq38248);
var G__38250 = cljs.core.first(seq38248__$1);
var seq38248__$2 = cljs.core.next(seq38248__$1);
var G__38251 = cljs.core.first(seq38248__$2);
var seq38248__$3 = cljs.core.next(seq38248__$2);
var G__38252 = cljs.core.first(seq38248__$3);
var seq38248__$4 = cljs.core.next(seq38248__$3);
var G__38253 = cljs.core.first(seq38248__$4);
var seq38248__$5 = cljs.core.next(seq38248__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__38249,G__38250,G__38251,G__38252,G__38253,seq38248__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__10133__auto___38265 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38266 = arguments.length;
var i__10088__auto___38267 = (0);
while(true){
if((i__10088__auto___38267 < len__10087__auto___38266)){
args__10094__auto__.push((arguments[i__10088__auto___38267]));

var G__38268 = (i__10088__auto___38267 + (1));
i__10088__auto___38267 = G__38268;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38260__auto__),(function (){var x__9762__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38260__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__38260__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq38261){
var G__38262 = cljs.core.first(seq38261);
var seq38261__$1 = cljs.core.next(seq38261);
var G__38263 = cljs.core.first(seq38261__$1);
var seq38261__$2 = cljs.core.next(seq38261__$1);
var G__38264 = cljs.core.first(seq38261__$2);
var seq38261__$3 = cljs.core.next(seq38261__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__38262,G__38263,G__38264,seq38261__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38269_SHARP_){
if(cljs.core.seq_QMARK_(p1__38269_SHARP_)){
return cljs.core.first(p1__38269_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38269_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38269_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__38270_SHARP_){
return cljs.core.vector_QMARK_(p1__38270_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl.call(null,fdecl));

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__38271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__38272 = cljs.core.next(fdecls);
ret = G__38271;
fdecls = G__38272;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
var x__9762__auto__ = asig(fdecl);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
}
});
var ret__10133__auto___38273 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj((function (){var x__9762__auto__ = gvec;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_seq)], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$sym$_AMPERSAND_)){
var G__38284 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__38285 = n;
var G__38286 = cljs.core.nnext(bs);
var G__38287 = true;
ret = G__38284;
n = G__38285;
bs = G__38286;
seen_rest_QMARK_ = G__38287;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$kw$as)){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__38288 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__9762__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__9762__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj((function (){var x__9762__auto__ = gvec;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_nth)));
var G__38289 = (n + (1));
var G__38290 = cljs.core.next(bs);
var G__38291 = seen_rest_QMARK_;
ret = G__38288;
n = G__38289;
bs = G__38290;
seen_rest_QMARK_ = G__38291;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = (function (){var G__38280 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ISeq),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
var fexpr__38279 = ((function (G__38280,gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gmap], 0));
} else {
return ret;
}
});})(G__38280,gmap,defaults,pvec,bents))
;
return fexpr__38279(G__38280);
})();
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__38274_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__8808__auto__ = mkns;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.namespace(p1__38274_SHARP_);
}
})(),cljs.core.name(p1__38274_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__38275_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__8808__auto__ = mkns;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.namespace(p1__38275_SHARP_);
}
})(),cljs.core.name(p1__38275_SHARP_));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$quote);
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__38276_SHARP_,p2__38277_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38276_SHARP_,p2__38277_SHARP_,(function (){var fexpr__38281 = cljs.core.val(entry);
return (fexpr__38281.cljs$core$IFn$_invoke$arity$1 ? fexpr__38281.cljs$core$IFn$_invoke$arity$1(p2__38277_SHARP_) : fexpr__38281.call(null,p2__38277_SHARP_));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),(function (){var fexpr__38282 = cljs.core.key(entry);
return (fexpr__38282.cljs$core$IFn$_invoke$arity$1 ? fexpr__38282.cljs$core$IFn$_invoke$arity$1(bes) : fexpr__38282.call(null,bes));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,cljs.core.cst$kw$as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$or], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?cljs.core._conj((function (){var x__9762__auto__ = gmap;
return cljs.core._conj((function (){var x__9762__auto____$1 = bk;
return cljs.core._conj((function (){var x__9762__auto____$2 = (defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get):cljs.core._conj((function (){var x__9762__auto__ = gmap;
return cljs.core._conj((function (){var x__9762__auto____$1 = bk;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get));
var G__38292 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__38293 = cljs.core.next(bes);
ret = G__38292;
bes = G__38293;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__5455__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__38278_SHARP_){
return (cljs.core.first(p1__38278_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__5455__auto__){
var kwbs = temp__5455__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__10133__auto___38294 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_declare),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__9762__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_define),(function (){var x__9762__auto__ = defname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__10133__auto___38299 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38300 = arguments.length;
var i__10088__auto___38301 = (0);
while(true){
if((i__10088__auto___38301 < len__10087__auto___38300)){
args__10094__auto__.push((arguments[i__10088__auto___38301]));

var G__38302 = (i__10088__auto___38301 + (1));
i__10088__auto___38301 = G__38302;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$let_STAR_),(function (){var x__9762__auto__ = cljs.core$macros.destructure(bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq38295){
var G__38296 = cljs.core.first(seq38295);
var seq38295__$1 = cljs.core.next(seq38295);
var G__38297 = cljs.core.first(seq38295__$1);
var seq38295__$2 = cljs.core.next(seq38295__$1);
var G__38298 = cljs.core.first(seq38295__$2);
var seq38295__$3 = cljs.core.next(seq38295__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__38296,G__38297,G__38298,seq38295__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__10133__auto___38311 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38312 = arguments.length;
var i__10088__auto___38313 = (0);
while(true){
if((i__10088__auto___38313 < len__10087__auto___38312)){
args__10094__auto__.push((arguments[i__10088__auto___38313]));

var G__38314 = (i__10088__auto___38313 + (1));
i__10088__auto___38313 = G__38314;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,bs,gs,db){
return (function (ret,p__38307){
var vec__38308 = p__38307;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38308,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38308,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = bfs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq38303){
var G__38304 = cljs.core.first(seq38303);
var seq38303__$1 = cljs.core.next(seq38303);
var G__38305 = cljs.core.first(seq38303__$1);
var seq38303__$2 = cljs.core.next(seq38303__$1);
var G__38306 = cljs.core.first(seq38303__$2);
var seq38303__$3 = cljs.core.next(seq38303__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__38304,G__38305,G__38306,seq38303__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38315_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38315_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$IFn,cljs.core.cst$sym$ICounted,cljs.core.cst$sym$IEmptyableCollection,cljs.core.cst$sym$ICollection,cljs.core.cst$sym$IIndexed,cljs.core.cst$sym$ASeq,cljs.core.cst$sym$ISeq,cljs.core.cst$sym$INext,cljs.core.cst$sym$ILookup,cljs.core.cst$sym$IAssociative,cljs.core.cst$sym$IMap,cljs.core.cst$sym$IMapEntry,cljs.core.cst$sym$ISet,cljs.core.cst$sym$IStack,cljs.core.cst$sym$IVector,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$IDerefWithTimeout,cljs.core.cst$sym$IMeta,cljs.core.cst$sym$IWithMeta,cljs.core.cst$sym$IReduce,cljs.core.cst$sym$IKVReduce,cljs.core.cst$sym$IEquiv,cljs.core.cst$sym$IHash,cljs.core.cst$sym$ISeqable,cljs.core.cst$sym$ISequential,cljs.core.cst$sym$IList,cljs.core.cst$sym$IRecord,cljs.core.cst$sym$IReversible,cljs.core.cst$sym$ISorted,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IWriter,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IPending,cljs.core.cst$sym$IWatchable,cljs.core.cst$sym$IEditableCollection,cljs.core.cst$sym$ITransientCollection,cljs.core.cst$sym$ITransientAssociative,cljs.core.cst$sym$ITransientMap,cljs.core.cst$sym$ITransientVector,cljs.core.cst$sym$ITransientSet,cljs.core.cst$sym$IMultiFn,cljs.core.cst$sym$IChunkedSeq,cljs.core.cst$sym$IChunkedNext,cljs.core.cst$sym$IComparable,cljs.core.cst$sym$INamed,cljs.core.cst$sym$ICloneable,cljs.core.cst$sym$IAtom,cljs.core.cst$sym$IReset,cljs.core.cst$sym$ISwap,cljs.core.cst$sym$IIterable], true)),cljs.core.iterate((function (p__38316){
var vec__38317 = p__38316;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38317,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38317,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
var ret__10133__auto___38323 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38324 = arguments.length;
var i__10088__auto___38325 = (0);
while(true){
if((i__10088__auto___38325 < len__10087__auto___38324)){
args__10094__auto__.push((arguments[i__10088__auto___38325]));

var G__38326 = (i__10088__auto___38325 + (1));
i__10088__auto___38325 = G__38326;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(interpolate,xs)));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq38320){
var G__38321 = cljs.core.first(seq38320);
var seq38320__$1 = cljs.core.next(seq38320);
var G__38322 = cljs.core.first(seq38320__$1);
var seq38320__$2 = cljs.core.next(seq38320__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__38321,G__38322,seq38320__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean);
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__8796__auto__ = (function (){var G__38330 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__38329 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$js,null,cljs.core.cst$kw$constant,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$invoke,null,cljs.core.cst$kw$dot,null], null), null);
return (fexpr__38329.cljs$core$IFn$_invoke$arity$1 ? fexpr__38329.cljs$core$IFn$_invoke$arity$1(G__38330) : fexpr__38329.call(null,G__38330));
})();
if(cljs.core.truth_(and__8796__auto__)){
var G__38332 = cljs.analyzer.infer_tag(env,ast);
var fexpr__38331 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__38331.cljs$core$IFn$_invoke$arity$1 ? fexpr__38331.cljs$core$IFn$_invoke$arity$1(G__38332) : fexpr__38331.call(null,G__38332));
} else {
return and__8796__auto__;
}
});
var ret__10133__auto___38343 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__38341 = arguments.length;
switch (G__38341) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38345 = arguments.length;
var i__10088__auto___38346 = (0);
while(true){
if((i__10088__auto___38346 < len__10087__auto___38345)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38346]));

var G__38347 = (i__10088__auto___38346 + (1));
i__10088__auto___38346 = G__38347;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__38333_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__38333_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__38334_SHARP_){
var _STAR_cljs_warnings_STAR_38342 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__38334_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_38342;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__9762__auto__ = and_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__38335__auto__),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__38335__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__38335__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq38337){
var G__38338 = cljs.core.first(seq38337);
var seq38337__$1 = cljs.core.next(seq38337);
var G__38339 = cljs.core.first(seq38337__$1);
var seq38337__$2 = cljs.core.next(seq38337__$1);
var G__38340 = cljs.core.first(seq38337__$2);
var seq38337__$3 = cljs.core.next(seq38337__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__38338,G__38339,G__38340,seq38337__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__10133__auto___38358 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__38356 = arguments.length;
switch (G__38356) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38360 = arguments.length;
var i__10088__auto___38361 = (0);
while(true){
if((i__10088__auto___38361 < len__10087__auto___38360)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38361]));

var G__38362 = (i__10088__auto___38361 + (1));
i__10088__auto___38361 = G__38362;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__38348_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__38348_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__38349_SHARP_){
var _STAR_cljs_warnings_STAR_38357 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__38349_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_38357;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__9762__auto__ = or_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__38350__auto__),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__38350__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__38350__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq38352){
var G__38353 = cljs.core.first(seq38352);
var seq38352__$1 = cljs.core.next(seq38352);
var G__38354 = cljs.core.first(seq38352__$1);
var seq38352__$2 = cljs.core.next(seq38352__$1);
var G__38355 = cljs.core.first(seq38352__$2);
var seq38352__$3 = cljs.core.next(seq38352__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__38353,G__38354,G__38355,seq38352__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__10133__auto___38363 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH__EQ_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38364 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38365 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(!~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__10133__auto___38366 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} != ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__10133__auto___38367 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} == ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__10133__auto___38368 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"~{}"),cljs.core.cst$sym$js_STAR_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__10133__auto___38369 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} != null && ~{} !== false)"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__10133__auto___38370 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__10133__auto___38371 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = obj;
return cljs.core._conj((function (){var x__9762__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"delete ~{}[~{}]"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__10133__auto___38372 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = key;
return cljs.core._conj((function (){var x__9762__auto____$1 = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"~{} in ~{}"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__10133__auto___38373 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger"),cljs.core.cst$sym$js_STAR_);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__9762__auto__);
})(),cljs.core.cst$sym$do);
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__10133__auto___38378 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__38375 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__38376 = cljs.core.seq(vec__38375);
var first__38377 = cljs.core.first(seq__38376);
var seq__38376__$1 = cljs.core.next(seq__38376);
var x = first__38377;
var ys = seq__38376__$1;
return cljs.core._conj((function (){var x__9762__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38375,seq__38376,first__38377,seq__38376__$1,x,ys){
return (function (p1__38374_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__38374_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__38375,seq__38376,first__38377,seq__38376__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__10133__auto___38379 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj((function (){var x__9762__auto__ = cast_expr;
return cljs.core._conj((function (){var x__9762__auto____$1 = x;
return cljs.core._conj((function (){var x__9762__auto____$2 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__10133__auto___38380 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj((function (){var x__9762__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__10133__auto___38381 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"~{} === true"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38382 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"~{} === false"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38383 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"typeof ~{} === 'string'"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38384 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"typeof ~{} !== 'undefined'"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38385 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(void 0 === ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38386 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = a;
return cljs.core._conj((function (){var x__9762__auto____$1 = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38389 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} instanceof ~{})"),cljs.core.cst$sym$js_STAR_):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__38387__auto__),(function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38388__auto__),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38388__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__38387__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38390 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"typeof ~{} === 'number'"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38391 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Symbol),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38392 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Keyword),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38402 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__38399 = arguments.length;
switch (G__38399) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38404 = arguments.length;
var i__10088__auto___38405 = (0);
while(true){
if((i__10088__auto___38405 < len__10087__auto___38404)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38405]));

var G__38406 = (i__10088__auto___38405 + (1));
i__10088__auto___38405 = G__38406;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__38400 = cljs.analyzer.checked_arrays();
var G__38400__$1 = (((G__38400 instanceof cljs.core.Keyword))?G__38400.fqn:null);
switch (G__38400__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget_SINGLEQUOTE_),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

break;
default:
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = array;
return cljs.core._conj((function (){var x__9762__auto____$1 = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__38401 = cljs.analyzer.checked_arrays();
var G__38401__$1 = (((G__38401 instanceof cljs.core.Keyword))?G__38401.fqn:null);
switch (G__38401__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxs], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget_SINGLEQUOTE_),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxs], 0))));

break;
default:
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__9762__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxs], 0))));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq38394){
var G__38395 = cljs.core.first(seq38394);
var seq38394__$1 = cljs.core.next(seq38394);
var G__38396 = cljs.core.first(seq38394__$1);
var seq38394__$2 = cljs.core.next(seq38394__$1);
var G__38397 = cljs.core.first(seq38394__$2);
var seq38394__$3 = cljs.core.next(seq38394__$2);
var G__38398 = cljs.core.first(seq38394__$3);
var seq38394__$4 = cljs.core.next(seq38394__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__38395,G__38396,G__38397,G__38398,seq38394__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__10133__auto___38419 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__38416 = arguments.length;
switch (G__38416) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38421 = arguments.length;
var i__10088__auto___38422 = (0);
while(true){
if((i__10088__auto___38422 < len__10087__auto___38421)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38422]));

var G__38423 = (i__10088__auto___38422 + (1));
i__10088__auto___38422 = G__38423;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10111__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__38417 = cljs.analyzer.checked_arrays();
var G__38417__$1 = (((G__38417 instanceof cljs.core.Keyword))?G__38417.fqn:null);
switch (G__38417__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset_SINGLEQUOTE_),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

break;
default:
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = array;
return cljs.core._conj((function (){var x__9762__auto____$1 = idx;
return cljs.core._conj((function (){var x__9762__auto____$2 = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__38418 = cljs.analyzer.checked_arrays();
var G__38418__$1 = (((G__38418 instanceof cljs.core.Keyword))?G__38418.fqn:null);
switch (G__38418__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxv], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset_SINGLEQUOTE_),(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxv], 0))));

break;
default:
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__9762__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),idxv], 0))));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq38410){
var G__38411 = cljs.core.first(seq38410);
var seq38410__$1 = cljs.core.next(seq38410);
var G__38412 = cljs.core.first(seq38410__$1);
var seq38410__$2 = cljs.core.next(seq38410__$1);
var G__38413 = cljs.core.first(seq38410__$2);
var seq38410__$3 = cljs.core.next(seq38410__$2);
var G__38414 = cljs.core.first(seq38410__$3);
var seq38410__$4 = cljs.core.next(seq38410__$3);
var G__38415 = cljs.core.first(seq38410__$4);
var seq38410__$5 = cljs.core.next(seq38410__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__38411,G__38412,G__38413,G__38414,G__38415,seq38410__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__10133__auto___38426 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = obj;
return cljs.core._conj((function (){var x__9762__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__10133__auto___38427 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = obj;
return cljs.core._conj((function (){var x__9762__auto____$1 = key;
return cljs.core._conj((function (){var x__9762__auto____$2 = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$2);
})(),x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__10133__auto___38435 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__38434 = arguments.length;
switch (G__38434) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38437 = arguments.length;
var i__10088__auto___38438 = (0);
while(true){
if((i__10088__auto___38438 < len__10087__auto___38437)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38438]));

var G__38439 = (i__10088__auto___38438 + (1));
i__10088__auto___38438 = G__38439;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} + ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq38429){
var G__38430 = cljs.core.first(seq38429);
var seq38429__$1 = cljs.core.next(seq38429);
var G__38431 = cljs.core.first(seq38429__$1);
var seq38429__$2 = cljs.core.next(seq38429__$1);
var G__38432 = cljs.core.first(seq38429__$2);
var seq38429__$3 = cljs.core.next(seq38429__$2);
var G__38433 = cljs.core.first(seq38429__$3);
var seq38429__$4 = cljs.core.next(seq38429__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__38430,G__38431,G__38432,G__38433,seq38429__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__10133__auto___38440 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__10133__auto___38441 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__10133__auto___38442 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__10133__auto___38443 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__10133__auto___38444 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__10133__auto___38445 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__10133__auto___38446 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__10133__auto___38447 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__10133__auto___38448 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__10133__auto___38452 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38453 = arguments.length;
var i__10088__auto___38454 = (0);
while(true){
if((i__10088__auto___38454 < len__10087__auto___38453)){
args__10094__auto__.push((arguments[i__10088__auto___38454]));

var G__38455 = (i__10088__auto___38454 + (1));
i__10088__auto___38454 = G__38455;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq38449){
var G__38450 = cljs.core.first(seq38449);
var seq38449__$1 = cljs.core.next(seq38449);
var G__38451 = cljs.core.first(seq38449__$1);
var seq38449__$2 = cljs.core.next(seq38449__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__38450,G__38451,seq38449__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__10133__auto___38459 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38460 = arguments.length;
var i__10088__auto___38461 = (0);
while(true){
if((i__10088__auto___38461 < len__10087__auto___38460)){
args__10094__auto__.push((arguments[i__10088__auto___38461]));

var G__38462 = (i__10088__auto___38461 + (1));
i__10088__auto___38461 = G__38462;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq38456){
var G__38457 = cljs.core.first(seq38456);
var seq38456__$1 = cljs.core.next(seq38456);
var G__38458 = cljs.core.first(seq38456__$1);
var seq38456__$2 = cljs.core.next(seq38456__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__38457,G__38458,seq38456__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__10133__auto___38463 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__10133__auto___38464 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__10133__auto___38468 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38469 = arguments.length;
var i__10088__auto___38470 = (0);
while(true){
if((i__10088__auto___38470 < len__10087__auto___38469)){
args__10094__auto__.push((arguments[i__10088__auto___38470]));

var G__38471 = (i__10088__auto___38470 + (1));
i__10088__auto___38470 = G__38471;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq38465){
var G__38466 = cljs.core.first(seq38465);
var seq38465__$1 = cljs.core.next(seq38465);
var G__38467 = cljs.core.first(seq38465__$1);
var seq38465__$2 = cljs.core.next(seq38465__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__38466,G__38467,seq38465__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__10133__auto___38472 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__10133__auto___38473 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__10133__auto___38477 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38478 = arguments.length;
var i__10088__auto___38479 = (0);
while(true){
if((i__10088__auto___38479 < len__10087__auto___38478)){
args__10094__auto__.push((arguments[i__10088__auto___38479]));

var G__38480 = (i__10088__auto___38479 + (1));
i__10088__auto___38479 = G__38480;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq38474){
var G__38475 = cljs.core.first(seq38474);
var seq38474__$1 = cljs.core.next(seq38474);
var G__38476 = cljs.core.first(seq38474__$1);
var seq38474__$2 = cljs.core.next(seq38474__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__38475,G__38476,seq38474__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__10133__auto___38484 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38485 = arguments.length;
var i__10088__auto___38486 = (0);
while(true){
if((i__10088__auto___38486 < len__10087__auto___38485)){
args__10094__auto__.push((arguments[i__10088__auto___38486]));

var G__38487 = (i__10088__auto___38486 + (1));
i__10088__auto___38486 = G__38487;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq38481){
var G__38482 = cljs.core.first(seq38481);
var seq38481__$1 = cljs.core.next(seq38481);
var G__38483 = cljs.core.first(seq38481__$1);
var seq38481__$2 = cljs.core.next(seq38481__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__38482,G__38483,seq38481__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__10133__auto___38488 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__10133__auto___38489 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__10133__auto___38490 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_mod),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__10133__auto___38494 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38495 = arguments.length;
var i__10088__auto___38496 = (0);
while(true){
if((i__10088__auto___38496 < len__10087__auto___38495)){
args__10094__auto__.push((arguments[i__10088__auto___38496]));

var G__38497 = (i__10088__auto___38496 + (1));
i__10088__auto___38496 = G__38497;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq38491){
var G__38492 = cljs.core.first(seq38491);
var seq38491__$1 = cljs.core.next(seq38491);
var G__38493 = cljs.core.first(seq38491__$1);
var seq38491__$2 = cljs.core.next(seq38491__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__38492,G__38493,seq38491__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__10133__auto___38501 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38502 = arguments.length;
var i__10088__auto___38503 = (0);
while(true){
if((i__10088__auto___38503 < len__10087__auto___38502)){
args__10094__auto__.push((arguments[i__10088__auto___38503]));

var G__38504 = (i__10088__auto___38503 + (1));
i__10088__auto___38503 = G__38504;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq38498){
var G__38499 = cljs.core.first(seq38498);
var seq38498__$1 = cljs.core.next(seq38498);
var G__38500 = cljs.core.first(seq38498__$1);
var seq38498__$2 = cljs.core.next(seq38498__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__38499,G__38500,seq38498__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__10133__auto___38512 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__38511 = arguments.length;
switch (G__38511) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38514 = arguments.length;
var i__10088__auto___38515 = (0);
while(true){
if((i__10088__auto___38515 < len__10087__auto___38514)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38515]));

var G__38516 = (i__10088__auto___38515 + (1));
i__10088__auto___38515 = G__38516;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(- ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} - ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq38506){
var G__38507 = cljs.core.first(seq38506);
var seq38506__$1 = cljs.core.next(seq38506);
var G__38508 = cljs.core.first(seq38506__$1);
var seq38506__$2 = cljs.core.next(seq38506__$1);
var G__38509 = cljs.core.first(seq38506__$2);
var seq38506__$3 = cljs.core.next(seq38506__$2);
var G__38510 = cljs.core.first(seq38506__$3);
var seq38506__$4 = cljs.core.next(seq38506__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__38507,G__38508,G__38509,G__38510,seq38506__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__10133__auto___38524 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__38523 = arguments.length;
switch (G__38523) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38526 = arguments.length;
var i__10088__auto___38527 = (0);
while(true){
if((i__10088__auto___38527 < len__10087__auto___38526)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38527]));

var G__38528 = (i__10088__auto___38527 + (1));
i__10088__auto___38527 = G__38528;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} * ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq38518){
var G__38519 = cljs.core.first(seq38518);
var seq38518__$1 = cljs.core.next(seq38518);
var G__38520 = cljs.core.first(seq38518__$1);
var seq38518__$2 = cljs.core.next(seq38518__$1);
var G__38521 = cljs.core.first(seq38518__$2);
var seq38518__$3 = cljs.core.next(seq38518__$2);
var G__38522 = cljs.core.first(seq38518__$3);
var seq38518__$4 = cljs.core.next(seq38518__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38519,G__38520,G__38521,G__38522,seq38518__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__10133__auto___38536 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__38535 = arguments.length;
switch (G__38535) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38538 = arguments.length;
var i__10088__auto___38539 = (0);
while(true){
if((i__10088__auto___38539 < len__10087__auto___38538)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38539]));

var G__38540 = (i__10088__auto___38539 + (1));
i__10088__auto___38539 = G__38540;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq38530){
var G__38531 = cljs.core.first(seq38530);
var seq38530__$1 = cljs.core.next(seq38530);
var G__38532 = cljs.core.first(seq38530__$1);
var seq38530__$2 = cljs.core.next(seq38530__$1);
var G__38533 = cljs.core.first(seq38530__$2);
var seq38530__$3 = cljs.core.next(seq38530__$2);
var G__38534 = cljs.core.first(seq38530__$3);
var seq38530__$4 = cljs.core.next(seq38530__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__38531,G__38532,G__38533,G__38534,seq38530__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__10133__auto___38548 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__38547 = arguments.length;
switch (G__38547) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38550 = arguments.length;
var i__10088__auto___38551 = (0);
while(true){
if((i__10088__auto___38551 < len__10087__auto___38550)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38551]));

var G__38552 = (i__10088__auto___38551 + (1));
i__10088__auto___38551 = G__38552;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq38542){
var G__38543 = cljs.core.first(seq38542);
var seq38542__$1 = cljs.core.next(seq38542);
var G__38544 = cljs.core.first(seq38542__$1);
var seq38542__$2 = cljs.core.next(seq38542__$1);
var G__38545 = cljs.core.first(seq38542__$2);
var seq38542__$3 = cljs.core.next(seq38542__$2);
var G__38546 = cljs.core.first(seq38542__$3);
var seq38542__$4 = cljs.core.next(seq38542__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__38543,G__38544,G__38545,G__38546,seq38542__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__10133__auto___38560 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__38559 = arguments.length;
switch (G__38559) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38562 = arguments.length;
var i__10088__auto___38563 = (0);
while(true){
if((i__10088__auto___38563 < len__10087__auto___38562)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38563]));

var G__38564 = (i__10088__auto___38563 + (1));
i__10088__auto___38563 = G__38564;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} < ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq38554){
var G__38555 = cljs.core.first(seq38554);
var seq38554__$1 = cljs.core.next(seq38554);
var G__38556 = cljs.core.first(seq38554__$1);
var seq38554__$2 = cljs.core.next(seq38554__$1);
var G__38557 = cljs.core.first(seq38554__$2);
var seq38554__$3 = cljs.core.next(seq38554__$2);
var G__38558 = cljs.core.first(seq38554__$3);
var seq38554__$4 = cljs.core.next(seq38554__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__38555,G__38556,G__38557,G__38558,seq38554__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__10133__auto___38572 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__38571 = arguments.length;
switch (G__38571) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38574 = arguments.length;
var i__10088__auto___38575 = (0);
while(true){
if((i__10088__auto___38575 < len__10087__auto___38574)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38575]));

var G__38576 = (i__10088__auto___38575 + (1));
i__10088__auto___38575 = G__38576;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} <= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq38566){
var G__38567 = cljs.core.first(seq38566);
var seq38566__$1 = cljs.core.next(seq38566);
var G__38568 = cljs.core.first(seq38566__$1);
var seq38566__$2 = cljs.core.next(seq38566__$1);
var G__38569 = cljs.core.first(seq38566__$2);
var seq38566__$3 = cljs.core.next(seq38566__$2);
var G__38570 = cljs.core.first(seq38566__$3);
var seq38566__$4 = cljs.core.next(seq38566__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__38567,G__38568,G__38569,G__38570,seq38566__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__10133__auto___38584 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__38583 = arguments.length;
switch (G__38583) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38586 = arguments.length;
var i__10088__auto___38587 = (0);
while(true){
if((i__10088__auto___38587 < len__10087__auto___38586)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38587]));

var G__38588 = (i__10088__auto___38587 + (1));
i__10088__auto___38587 = G__38588;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} > ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq38578){
var G__38579 = cljs.core.first(seq38578);
var seq38578__$1 = cljs.core.next(seq38578);
var G__38580 = cljs.core.first(seq38578__$1);
var seq38578__$2 = cljs.core.next(seq38578__$1);
var G__38581 = cljs.core.first(seq38578__$2);
var seq38578__$3 = cljs.core.next(seq38578__$2);
var G__38582 = cljs.core.first(seq38578__$3);
var seq38578__$4 = cljs.core.next(seq38578__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__38579,G__38580,G__38581,G__38582,seq38578__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__10133__auto___38596 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__38595 = arguments.length;
switch (G__38595) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38598 = arguments.length;
var i__10088__auto___38599 = (0);
while(true){
if((i__10088__auto___38599 < len__10087__auto___38598)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38599]));

var G__38600 = (i__10088__auto___38599 + (1));
i__10088__auto___38599 = G__38600;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} >= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq38590){
var G__38591 = cljs.core.first(seq38590);
var seq38590__$1 = cljs.core.next(seq38590);
var G__38592 = cljs.core.first(seq38590__$1);
var seq38590__$2 = cljs.core.next(seq38590__$1);
var G__38593 = cljs.core.first(seq38590__$2);
var seq38590__$3 = cljs.core.next(seq38590__$2);
var G__38594 = cljs.core.first(seq38590__$3);
var seq38590__$4 = cljs.core.next(seq38590__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__38591,G__38592,G__38593,G__38594,seq38590__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__10133__auto___38608 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__38607 = arguments.length;
switch (G__38607) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38610 = arguments.length;
var i__10088__auto___38611 = (0);
while(true){
if((i__10088__auto___38611 < len__10087__auto___38610)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38611]));

var G__38612 = (i__10088__auto___38611 + (1));
i__10088__auto___38611 = G__38612;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq38602){
var G__38603 = cljs.core.first(seq38602);
var seq38602__$1 = cljs.core.next(seq38602);
var G__38604 = cljs.core.first(seq38602__$1);
var seq38602__$2 = cljs.core.next(seq38602__$1);
var G__38605 = cljs.core.first(seq38602__$2);
var seq38602__$3 = cljs.core.next(seq38602__$2);
var G__38606 = cljs.core.first(seq38602__$3);
var seq38602__$4 = cljs.core.next(seq38602__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__38603,G__38604,G__38605,G__38606,seq38602__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__10133__auto___38613 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__10133__auto___38614 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__10133__auto___38615 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38616 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38617 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___38627 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__38626 = arguments.length;
switch (G__38626) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38629 = arguments.length;
var i__10088__auto___38630 = (0);
while(true){
if((i__10088__auto___38630 < len__10087__auto___38629)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38630]));

var G__38631 = (i__10088__auto___38630 + (1));
i__10088__auto___38630 = G__38631;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38618__auto__),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__38619__auto__),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38618__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__38619__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38618__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__38619__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq38621){
var G__38622 = cljs.core.first(seq38621);
var seq38621__$1 = cljs.core.next(seq38621);
var G__38623 = cljs.core.first(seq38621__$1);
var seq38621__$2 = cljs.core.next(seq38621__$1);
var G__38624 = cljs.core.first(seq38621__$2);
var seq38621__$3 = cljs.core.next(seq38621__$2);
var G__38625 = cljs.core.first(seq38621__$3);
var seq38621__$4 = cljs.core.next(seq38621__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__38622,G__38623,G__38624,G__38625,seq38621__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__10133__auto___38641 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__38640 = arguments.length;
switch (G__38640) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38643 = arguments.length;
var i__10088__auto___38644 = (0);
while(true){
if((i__10088__auto___38644 < len__10087__auto___38643)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38644]));

var G__38645 = (i__10088__auto___38644 + (1));
i__10088__auto___38644 = G__38645;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38632__auto__),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__38633__auto__),(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38632__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__38633__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38632__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__38633__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq38635){
var G__38636 = cljs.core.first(seq38635);
var seq38635__$1 = cljs.core.next(seq38635);
var G__38637 = cljs.core.first(seq38635__$1);
var seq38635__$2 = cljs.core.next(seq38635__$1);
var G__38638 = cljs.core.first(seq38635__$2);
var seq38635__$3 = cljs.core.next(seq38635__$2);
var G__38639 = cljs.core.first(seq38635__$3);
var seq38635__$4 = cljs.core.next(seq38635__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__38636,G__38637,G__38638,G__38639,seq38635__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__10133__auto___38646 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = num;
return cljs.core._conj((function (){var x__9762__auto____$1 = div;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} % ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__10133__auto___38647 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(~ ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__10133__auto___38655 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__38654 = arguments.length;
switch (G__38654) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38657 = arguments.length;
var i__10088__auto___38658 = (0);
while(true){
if((i__10088__auto___38658 < len__10087__auto___38657)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38658]));

var G__38659 = (i__10088__auto___38658 + (1));
i__10088__auto___38658 = G__38659;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq38649){
var G__38650 = cljs.core.first(seq38649);
var seq38649__$1 = cljs.core.next(seq38649);
var G__38651 = cljs.core.first(seq38649__$1);
var seq38649__$2 = cljs.core.next(seq38649__$1);
var G__38652 = cljs.core.first(seq38649__$2);
var seq38649__$3 = cljs.core.next(seq38649__$2);
var G__38653 = cljs.core.first(seq38649__$3);
var seq38649__$4 = cljs.core.next(seq38649__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__38650,G__38651,G__38652,G__38653,seq38649__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__10133__auto___38667 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__38666 = arguments.length;
switch (G__38666) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38669 = arguments.length;
var i__10088__auto___38670 = (0);
while(true){
if((i__10088__auto___38670 < len__10087__auto___38669)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38670]));

var G__38671 = (i__10088__auto___38670 + (1));
i__10088__auto___38670 = G__38671;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq38661){
var G__38662 = cljs.core.first(seq38661);
var seq38661__$1 = cljs.core.next(seq38661);
var G__38663 = cljs.core.first(seq38661__$1);
var seq38661__$2 = cljs.core.next(seq38661__$1);
var G__38664 = cljs.core.first(seq38661__$2);
var seq38661__$3 = cljs.core.next(seq38661__$2);
var G__38665 = cljs.core.first(seq38661__$3);
var seq38661__$4 = cljs.core.next(seq38661__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__38662,G__38663,G__38664,G__38665,seq38661__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__10133__auto___38679 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__38678 = arguments.length;
switch (G__38678) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38681 = arguments.length;
var i__10088__auto___38682 = (0);
while(true){
if((i__10088__auto___38682 < len__10087__auto___38681)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38682]));

var G__38683 = (i__10088__auto___38682 + (1));
i__10088__auto___38682 = G__38683;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} | ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq38673){
var G__38674 = cljs.core.first(seq38673);
var seq38673__$1 = cljs.core.next(seq38673);
var G__38675 = cljs.core.first(seq38673__$1);
var seq38673__$2 = cljs.core.next(seq38673__$1);
var G__38676 = cljs.core.first(seq38673__$2);
var seq38673__$3 = cljs.core.next(seq38673__$2);
var G__38677 = cljs.core.first(seq38673__$3);
var seq38673__$4 = cljs.core.next(seq38673__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__38674,G__38675,G__38676,G__38677,seq38673__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__10133__auto___38684 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__10133__auto___38692 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__38691 = arguments.length;
switch (G__38691) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38694 = arguments.length;
var i__10088__auto___38695 = (0);
while(true){
if((i__10088__auto___38695 < len__10087__auto___38694)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38695]));

var G__38696 = (i__10088__auto___38695 + (1));
i__10088__auto___38695 = G__38696;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} ^ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq38686){
var G__38687 = cljs.core.first(seq38686);
var seq38686__$1 = cljs.core.next(seq38686);
var G__38688 = cljs.core.first(seq38686__$1);
var seq38686__$2 = cljs.core.next(seq38686__$1);
var G__38689 = cljs.core.first(seq38686__$2);
var seq38686__$3 = cljs.core.next(seq38686__$2);
var G__38690 = cljs.core.first(seq38686__$3);
var seq38686__$4 = cljs.core.next(seq38686__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__38687,G__38688,G__38689,G__38690,seq38686__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__10133__auto___38704 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__38703 = arguments.length;
switch (G__38703) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___38706 = arguments.length;
var i__10088__auto___38707 = (0);
while(true){
if((i__10088__auto___38707 < len__10087__auto___38706)){
args_arr__10110__auto__.push((arguments[i__10088__auto___38707]));

var G__38708 = (i__10088__auto___38707 + (1));
i__10088__auto___38707 = G__38708;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} & ~~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq38698){
var G__38699 = cljs.core.first(seq38698);
var seq38698__$1 = cljs.core.next(seq38698);
var G__38700 = cljs.core.first(seq38698__$1);
var seq38698__$2 = cljs.core.next(seq38698__$1);
var G__38701 = cljs.core.first(seq38698__$2);
var seq38698__$3 = cljs.core.next(seq38698__$2);
var G__38702 = cljs.core.first(seq38698__$3);
var seq38698__$4 = cljs.core.next(seq38698__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__38699,G__38700,G__38701,G__38702,seq38698__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__10133__auto___38709 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} & ~(1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__10133__auto___38710 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} ^ (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__10133__auto___38711 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__10133__auto___38712 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} << ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__10133__auto___38713 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} >> ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__10133__auto___38714 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__10133__auto___38715 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__10133__auto___38716 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = x;
return cljs.core._conj((function (){var x__9762__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"(~{} | (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__10133__auto___38717 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = hash;
return cljs.core._conj((function (){var x__9762__auto____$1 = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__10133__auto___38718 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mask),(function (){var x__9762__auto__ = hash;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"(1 << ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__10133__auto___38720 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__38719__auto__),(function (){var x__9762__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__38719__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__38719__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__38719__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = hash_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = coll;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__38719__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__38719__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cargs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38721__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38721__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
var ret__10133__auto___38729 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38730 = arguments.length;
var i__10088__auto___38731 = (0);
while(true){
if((i__10088__auto___38731 < len__10087__auto___38730)){
args__10094__auto__.push((arguments[i__10088__auto___38731]));

var G__38732 = (i__10088__auto___38731 + (1));
i__10088__auto___38731 = G__38732;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((6) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__10095__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq38722){
var G__38723 = cljs.core.first(seq38722);
var seq38722__$1 = cljs.core.next(seq38722);
var G__38724 = cljs.core.first(seq38722__$1);
var seq38722__$2 = cljs.core.next(seq38722__$1);
var G__38725 = cljs.core.first(seq38722__$2);
var seq38722__$3 = cljs.core.next(seq38722__$2);
var G__38726 = cljs.core.first(seq38722__$3);
var seq38722__$4 = cljs.core.next(seq38722__$3);
var G__38727 = cljs.core.first(seq38722__$4);
var seq38722__$5 = cljs.core.next(seq38722__$4);
var G__38728 = cljs.core.first(seq38722__$5);
var seq38722__$6 = cljs.core.next(seq38722__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__38723,G__38724,G__38725,G__38726,G__38727,G__38728,seq38722__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = f1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = clojure.walk.postwalk((function (p1__38733_SHARP_){
if(cljs.core.sequential_QMARK_(p1__38733_SHARP_)){
var G__38737 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__38733_SHARP_);
var fexpr__38736 = ((cljs.core.vector_QMARK_(p1__38733_SHARP_))?cljs.core.vec:cljs.core.identity);
return (fexpr__38736.cljs$core$IFn$_invoke$arity$1 ? fexpr__38736.cljs$core$IFn$_invoke$arity$1(G__38737) : fexpr__38736.call(null,G__38737));
} else {
return p1__38733_SHARP_;
}
}),fkv);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = fkv;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
var ret__10133__auto___38742 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__38738,fkv){
var vec__38739 = p__38738;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38739,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38739,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",cljs.core.cst$sym$object,"object",cljs.core.cst$sym$string,"string",cljs.core.cst$sym$number,"number",cljs.core.cst$sym$array,"array",cljs.core.cst$sym$function,"function",cljs.core.cst$sym$boolean,"boolean",cljs.core.cst$sym$default,"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Boolean,"boolean",cljs.core.cst$sym$js_SLASH_String,"string",cljs.core.cst$sym$js_SLASH_Array,"array",cljs.core.cst$sym$js_SLASH_Object,"object",cljs.core.cst$sym$js_SLASH_Number,"number",cljs.core.cst$sym$js_SLASH_Function,"function"], null);
var ret__10133__auto___38746 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38747 = arguments.length;
var i__10088__auto___38748 = (0);
while(true){
if((i__10088__auto___38748 < len__10087__auto___38747)){
args__10094__auto__.push((arguments[i__10088__auto___38748]));

var G__38749 = (i__10088__auto___38748 + (1));
i__10088__auto___38748 = G__38749;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_deftype),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(function (){var x__9762__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IWithMeta),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(function (){var x__9762__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IMeta),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(function (){var x__9762__auto__ = cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq38743){
var G__38744 = cljs.core.first(seq38743);
var seq38743__$1 = cljs.core.next(seq38743);
var G__38745 = cljs.core.first(seq38743__$1);
var seq38743__$2 = cljs.core.next(seq38743__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__38744,G__38745,seq38743__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__10133__auto___38754 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38755 = arguments.length;
var i__10088__auto___38756 = (0);
while(true){
if((i__10088__auto___38756 < len__10087__auto___38755)){
args__10094__auto__.push((arguments[i__10088__auto___38756]));

var G__38757 = (i__10088__auto___38756 + (1));
i__10088__auto___38756 = G__38757;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extend,cljs.core.cst$kw$instance], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq38750){
var G__38751 = cljs.core.first(seq38750);
var seq38750__$1 = cljs.core.next(seq38750);
var G__38752 = cljs.core.first(seq38750__$1);
var seq38750__$2 = cljs.core.next(seq38750__$1);
var G__38753 = cljs.core.first(seq38750__$2);
var seq38750__$3 = cljs.core.next(seq38750__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38751,G__38752,G__38753,seq38750__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__10133__auto___38762 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38763 = arguments.length;
var i__10088__auto___38764 = (0);
while(true){
if((i__10088__auto___38764 < len__10087__auto___38763)){
args__10094__auto__.push((arguments[i__10088__auto___38764]));

var G__38765 = (i__10088__auto___38764 + (1));
i__10088__auto___38764 = G__38765;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_clone),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq38758){
var G__38759 = cljs.core.first(seq38758);
var seq38758__$1 = cljs.core.next(seq38758);
var G__38760 = cljs.core.first(seq38758__$1);
var seq38758__$2 = cljs.core.next(seq38758__$1);
var G__38761 = cljs.core.first(seq38758__$2);
var seq38758__$3 = cljs.core.next(seq38758__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__38759,G__38760,G__38761,seq38758__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__10133__auto___38766 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__10133__auto___38771 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38772 = arguments.length;
var i__10088__auto___38773 = (0);
while(true){
if((i__10088__auto___38773 < len__10087__auto___38772)){
args__10094__auto__.push((arguments[i__10088__auto___38773]));

var G__38774 = (i__10088__auto___38773 + (1));
i__10088__auto___38773 = G__38774;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_this))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq38767){
var G__38768 = cljs.core.first(seq38767);
var seq38767__$1 = cljs.core.next(seq38767);
var G__38769 = cljs.core.first(seq38767__$1);
var seq38767__$2 = cljs.core.next(seq38767__$1);
var G__38770 = cljs.core.first(seq38767__$2);
var seq38767__$3 = cljs.core.next(seq38767__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__38768,G__38769,G__38770,seq38767__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Object,p)){
return null;
} else {
var temp__5455__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
if(cljs.core.truth_(temp__5455__auto__)){
var var$ = temp__5455__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
}

if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.cst$kw$protocol_DASH_deprecated.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__8796__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),((function (var$,temp__5455__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),cljs.core.cst$kw$impls], null),cljs.core.conj,type);
});})(var$,temp__5455__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$undeclared.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__38775 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__38776 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__38775;
s = G__38776;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__38777){
var vec__38778 = p__38777;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38778,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38778,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__38778,p,sigs){
return (function (p__38781){
var vec__38782 = p__38781;
var seq__38783 = cljs.core.seq(vec__38782);
var first__38784 = cljs.core.first(seq__38783);
var seq__38783__$1 = cljs.core.next(seq__38783);
var f = first__38784;
var meths = seq__38783__$1;
var form = vec__38782;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(psym,pfn_prefix,vec__38778,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__,hierarchy__9867__auto__){
return (function (tsym,sym){
return cljs.core.cst$kw$extend.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__,hierarchy__9867__auto__))
,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$instance,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__9762__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__9762__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype),(function (){var x__9762__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__38785){
var vec__38786 = p__38785;
var seq__38787 = cljs.core.seq(vec__38786);
var first__38788 = cljs.core.first(seq__38787);
var seq__38787__$1 = cljs.core.next(seq__38787);
var vec__38789 = first__38788;
var seq__38790 = cljs.core.seq(vec__38789);
var first__38791 = cljs.core.first(seq__38790);
var seq__38790__$1 = cljs.core.next(seq__38790);
var this$ = first__38791;
var args = seq__38790__$1;
var sig = vec__38789;
var body = seq__38787__$1;
var x__9762__auto__ = cljs.core.vec(args);
return cljs.core._conj((function (){var x__9762__auto____$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$this_DASH_as,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__38792){
var vec__38793 = p__38792;
var seq__38794 = cljs.core.seq(vec__38793);
var first__38795 = cljs.core.first(seq__38794);
var seq__38794__$1 = cljs.core.next(seq__38794);
var vec__38796 = first__38795;
var seq__38797 = cljs.core.seq(vec__38796);
var first__38798 = cljs.core.first(seq__38797);
var seq__38797__$1 = cljs.core.next(seq__38797);
var this$ = first__38798;
var args = seq__38797__$1;
var sig = vec__38796;
var body = seq__38794__$1;
var self_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.cons(self_sym,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__9762__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__38799){
var vec__38800 = p__38799;
var seq__38801 = cljs.core.seq(vec__38800);
var first__38802 = cljs.core.first(seq__38801);
var seq__38801__$1 = cljs.core.next(seq__38801);
var vec__38803 = first__38802;
var seq__38804 = cljs.core.seq(vec__38803);
var first__38805 = cljs.core.first(seq__38804);
var seq__38804__$1 = cljs.core.next(seq__38804);
var this$ = first__38805;
var args = seq__38804__$1;
var sig = vec__38803;
var body = seq__38801__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__9762__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__38806){
var vec__38807 = p__38806;
var seq__38808 = cljs.core.seq(vec__38807);
var first__38809 = cljs.core.first(seq__38808);
var seq__38808__$1 = cljs.core.next(seq__38808);
var vec__38810 = first__38809;
var seq__38811 = cljs.core.seq(vec__38810);
var first__38812 = cljs.core.first(seq__38811);
var seq__38811__$1 = cljs.core.next(seq__38811);
var this$ = first__38812;
var args = seq__38811__$1;
var sig = vec__38810;
var body = seq__38808__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__9762__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38814){
var vec__38815 = p__38814;
var seq__38816 = cljs.core.seq(vec__38815);
var first__38817 = cljs.core.first(seq__38816);
var seq__38816__$1 = cljs.core.next(seq__38816);
var f = first__38817;
var meths = seq__38816__$1;
var form = vec__38815;
var vec__38818 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38818,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38818,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38818,f__$1,meths__$1,vec__38815,seq__38816,first__38817,seq__38816__$1,f,meths,form){
return (function (p1__38813_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__38813_SHARP_);
});})(vec__38818,f__$1,meths__$1,vec__38815,seq__38816,first__38817,seq__38816__$1,f,meths,form))
,meths__$1)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__38822){
var vec__38823 = p__38822;
var seq__38824 = cljs.core.seq(vec__38823);
var first__38825 = cljs.core.first(seq__38824);
var seq__38824__$1 = cljs.core.next(seq__38824);
var f = first__38825;
var meths = seq__38824__$1;
var form = vec__38823;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38823,seq__38824,first__38825,seq__38824__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = (function (){var G__38828 = type_sym;
var G__38829 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__38828,G__38829) : cljs.core$macros.extend_prefix.call(null,G__38828,G__38829));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = meth;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(vec__38823,seq__38824,first__38825,seq__38824__$1,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38823,seq__38824,first__38825,seq__38824__$1,f,meths,form){
return (function (p1__38821_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__38821_SHARP_);
});})(vec__38823,seq__38824,first__38825,seq__38824__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__38831){
var vec__38832 = p__38831;
var seq__38833 = cljs.core.seq(vec__38832);
var first__38834 = cljs.core.first(seq__38833);
var seq__38833__$1 = cljs.core.next(seq__38833);
var f = first__38834;
var meths = seq__38833__$1;
var form = vec__38832;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38832,seq__38833,first__38834,seq__38833__$1,f,meths,form){
return (function (p1__38830_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__38830_SHARP_);
});})(vec__38832,seq__38833,first__38834,seq__38833__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = (function (){var G__38837 = type_sym;
var G__38838 = cljs.core.cst$sym$call;
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__38837,G__38838) : cljs.core$macros.extend_prefix.call(null,G__38837,G__38838));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths__$1))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = (function (){var G__38841 = type_sym;
var G__38842 = cljs.core.cst$sym$apply;
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__38841,G__38842) : cljs.core$macros.extend_prefix.call(null,G__38841,G__38842));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_call),(function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$concat),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),(function (){var x__9762__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),(function (){var x__9762__auto__ = argsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__38843){
var vec__38844 = p__38843;
var seq__38845 = cljs.core.seq(vec__38844);
var first__38846 = cljs.core.first(seq__38845);
var seq__38845__$1 = cljs.core.next(seq__38845);
var f = first__38846;
var meths = seq__38845__$1;
var form = vec__38844;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = (function (){var G__38849 = type_sym;
var G__38850 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__38849,G__38850) : cljs.core$macros.extend_prefix.call(null,G__38849,G__38850));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__38844,seq__38845,first__38846,seq__38845__$1,f,meths,form){
return (function (p__38851){
var vec__38852 = p__38851;
var seq__38853 = cljs.core.seq(vec__38852);
var first__38854 = cljs.core.first(seq__38853);
var seq__38853__$1 = cljs.core.next(seq__38853);
var sig = first__38854;
var body = seq__38853__$1;
var meth = vec__38852;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = (function (){var G__38857 = type_sym;
var G__38858 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__38857,G__38858) : cljs.core$macros.extend_prefix.call(null,G__38857,G__38858));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core$macros.adapt_proto_params(type,meth);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(pf,vec__38844,seq__38845,first__38846,seq__38845__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__38859){
var vec__38860 = p__38859;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38860,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38860,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(cljs.core.cst$kw$skip_DASH_protocol_DASH_flag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL)], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__38860,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,cljs.core.cst$sym$cljs$core_SLASH_IFn)){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__38860,p,sigs))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
var minfo = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first(method);
var __GT_name = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name);
var vec__38863 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38863,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38863,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_38866 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(method_var_38866))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,method_name,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_duped_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$name,fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$invalid_DASH_arity,c], null));
} else {
}

var G__38867 = cljs.core.next(sigs__$1);
var G__38868 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__38867;
seen = G__38868;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,proto], null));
} else {
}

var seen_38872 = cljs.core.PersistentHashSet.EMPTY;
var methods_38873__$1 = methods$;
while(true){
if(cljs.core.seq(methods_38873__$1)){
var vec__38869_38874 = cljs.core.first(methods_38873__$1);
var fname_38875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38869_38874,(0),null);
var method_38876 = vec__38869_38874;
if(cljs.core.contains_QMARK_(seen_38872,fname_38875)){
cljs.analyzer.warning(cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,proto,cljs.core.cst$kw$method,fname_38875], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_38876);

var G__38877 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_38872,fname_38875);
var G__38878 = cljs.core.next(methods_38873__$1);
seen_38872 = G__38877;
methods_38873__$1 = G__38878;
continue;
} else {
}
break;
}

var G__38879 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__38880 = impls__$2;
protos = G__38879;
impls__$1 = G__38880;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv.call(null,(0))),cljs.core.assoc,cljs.core.cst$kw$tag,type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sig),cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.second(sig)),cljs.core.nnext(sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.first(sig)),cljs.core.next(sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest(sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_(cljs.core.second(sig))){
return cljs.core$macros.type_hint_single_arity_sig(type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs(type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv((function (m,proto,sigs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,proto,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__10133__auto___38890 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38891 = arguments.length;
var i__10088__auto___38892 = (0);
while(true){
if((i__10088__auto___38892 < len__10087__auto___38891)){
args__10094__auto__.push((arguments[i__10088__auto___38892]));

var G__38893 = (i__10088__auto___38892 + (1));
i__10088__auto___38892 = G__38893;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_((function (){var fexpr__38889 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$number,null], null), null);
return (fexpr__38889.cljs$core$IFn$_invoke$arity$1 ? fexpr__38889.cljs$core$IFn$_invoke$arity$1(type_sym) : fexpr__38889.call(null,type_sym));
})())?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__38886 = (function (){var temp__5455__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38886,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38886,(1),null);
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8796__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__8796__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_symbol,type_sym,cljs.core.cst$kw$suggested_DASH_symbol,(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,impl_map__$1,vec__38886,type,assign_impls){
return (function (p1__38881_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__38881_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__38881_SHARP_));
});})(env,_,resolve,impl_map,impl_map__$1,vec__38886,type,assign_impls))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impl_map__$1], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq38882){
var G__38883 = cljs.core.first(seq38882);
var seq38882__$1 = cljs.core.next(seq38882);
var G__38884 = cljs.core.first(seq38882__$1);
var seq38882__$2 = cljs.core.next(seq38882__$1);
var G__38885 = cljs.core.first(seq38882__$2);
var seq38882__$3 = cljs.core.next(seq38882__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__38883,G__38884,G__38885,seq38882__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__38895){
var vec__38896 = p__38895;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38896,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38896,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__38896,f,sigs){
return (function (p1__38894_SHARP_){
return cljs.core.cons(cljs.core.second(p1__38894_SHARP_),cljs.core.nnext(p1__38894_SHARP_));
});})(vec__38896,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__38900 = arguments.length;
switch (G__38900) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$analyzer_SLASH_type,type,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,true,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__38902 = ret__$1;
var G__38903 = specs__$2;
ret = G__38902;
specs__$1 = G__38903;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38904_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p1__38904_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_DASH__GT_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$positional));
var field_values = (cljs.core.truth_(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__9762__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_values], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__10133__auto___38916 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38917 = arguments.length;
var i__10088__auto___38918 = (0);
while(true){
if((i__10088__auto___38918 < len__10087__auto___38917)){
args__10094__auto__.push((arguments[i__10088__auto___38918]));

var G__38919 = (i__10088__auto___38918 + (1));
i__10088__auto___38918 = G__38919;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),t));
var vec__38913 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38913,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38913,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$deftype_STAR_),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38905__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__38906__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__38907__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__38906__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.build_positional_factory(t__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq38908){
var G__38909 = cljs.core.first(seq38908);
var seq38908__$1 = cljs.core.next(seq38908);
var G__38910 = cljs.core.first(seq38908__$1);
var seq38908__$2 = cljs.core.next(seq38908__$1);
var G__38911 = cljs.core.first(seq38908__$2);
var seq38908__$3 = cljs.core.next(seq38908__$2);
var G__38912 = cljs.core.first(seq38908__$3);
var seq38908__$4 = cljs.core.next(seq38908__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__38909,G__38910,G__38911,G__38912,seq38908__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__38920_SHARP_){
return cljs.core.with_meta(p1__38920_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rname)),"{"].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,cljs.core.cst$sym$__meta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$IRecord,cljs.core.cst$sym$ICloneable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_clone),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38921__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields__$2], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$IHash,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_hash),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38922__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_caching_DASH_hash),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38922__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$coll__38923__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__9762__auto__ = cljs.core.hash([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(rname))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_unordered_DASH_coll),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$coll__38923__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__hash)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$IEquiv,(function (){var this$ = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$this);
var other = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$other);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_equiv),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_some_QMARK_),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),(function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.to_property(field);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.to_property(field);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH___extmap),(function (){var x__9762__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH___extmap),(function (){var x__9762__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
})(),cljs.core.cst$sym$IMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38924__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0)))),cljs.core.cst$sym$IWithMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38925__auto__),(function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$__meta,gs], null),fields__$2)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$ILookup,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38926__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__38927__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_lookup),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38926__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__38927__auto__),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38928__auto__),(function (){var x__9762__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__38929__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__9762__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__38929__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$ICounted,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_count),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38930__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__9762__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$ICollection,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_conj),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38931__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__38932__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__38932__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38931__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__38932__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__38932__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reduce),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38931__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__38932__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$IAssociative,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_assoc),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38933__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__38934__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_condp),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_keyword_DASH_identical_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__38934__auto__),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$new,tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,cljs.core.cst$sym$__hash,null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__38934__auto__),(function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$IMap,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_dissoc),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38935__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__38936__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__38936__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_with_DASH_meta),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38935__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__38936__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__38936__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$ISeqable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_seq),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38938__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__38937_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38937_SHARP_);
return cljs.core._conj((function (){var x__9762__auto____$1 = p1__38937_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$IIterable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_iterator),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$RecordIter$),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_DASH_iter))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.cst$sym$IPrintWithWriter,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_pr_DASH_writer),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38940__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__38941__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__38942__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__38943__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__38944__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__38941__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__38942__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__38944__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__38941__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__38943__auto__),(function (){var x__9762__auto__ = pr_open;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__38942__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__38939_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38939_SHARP_);
return cljs.core._conj((function (){var x__9762__auto____$1 = p1__38939_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null));
var vec__38945 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38945,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38945,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defrecord_STAR_),(function (){var x__9762__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = hinted_fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__9762__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$map_DASH__GT_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$map));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__9762__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([getters,cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__9762__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
var ret__10133__auto___38955 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38956 = arguments.length;
var i__10088__auto___38957 = (0);
while(true){
if((i__10088__auto___38957 < len__10087__auto___38956)){
args__10094__auto__.push((arguments[i__10088__auto___38957]));

var G__38958 = (i__10088__auto___38957 + (1));
i__10088__auto___38957 = G__38958;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),rsym__$1)),cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrSeq),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38948__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__38948__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__38949__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__38949__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.build_positional_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.build_map_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq38950){
var G__38951 = cljs.core.first(seq38950);
var seq38950__$1 = cljs.core.next(seq38950);
var G__38952 = cljs.core.first(seq38950__$1);
var seq38950__$2 = cljs.core.next(seq38950__$1);
var G__38953 = cljs.core.first(seq38950__$2);
var seq38950__$3 = cljs.core.next(seq38950__$2);
var G__38954 = cljs.core.first(seq38950__$3);
var seq38950__$4 = cljs.core.next(seq38950__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__38951,G__38952,G__38953,G__38954,seq38950__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__10133__auto___38986 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__10094__auto__ = [];
var len__10087__auto___38987 = arguments.length;
var i__10088__auto___38988 = (0);
while(true){
if((i__10088__auto___38988 < len__10087__auto___38987)){
args__10094__auto__.push((arguments[i__10088__auto___38988]));

var G__38989 = (i__10088__auto___38988 + (1));
i__10088__auto___38988 = G__38989;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var vec__38965 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38965,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38965,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$protocol_DASH_symbol,true);
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__38965,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__38965,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__38968 = cljs.core.seq(methods$);
var chunk__38969 = null;
var count__38970 = (0);
var i__38971 = (0);
while(true){
if((i__38971 < count__38970)){
var vec__38972 = chunk__38969.cljs$core$IIndexed$_nth$arity$2(null,i__38971);
var seq__38973 = cljs.core.seq(vec__38972);
var first__38974 = cljs.core.first(seq__38973);
var seq__38973__$1 = cljs.core.next(seq__38973);
var mname = first__38974;
var arities = seq__38973__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__38990 = seq__38968;
var G__38991 = chunk__38969;
var G__38992 = count__38970;
var G__38993 = (i__38971 + (1));
seq__38968 = G__38990;
chunk__38969 = G__38991;
count__38970 = G__38992;
i__38971 = G__38993;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38968);
if(temp__5457__auto__){
var seq__38968__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38968__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__38968__$1);
var G__38994 = cljs.core.chunk_rest(seq__38968__$1);
var G__38995 = c__9739__auto__;
var G__38996 = cljs.core.count(c__9739__auto__);
var G__38997 = (0);
seq__38968 = G__38994;
chunk__38969 = G__38995;
count__38970 = G__38996;
i__38971 = G__38997;
continue;
} else {
var vec__38975 = cljs.core.first(seq__38968__$1);
var seq__38976 = cljs.core.seq(vec__38975);
var first__38977 = cljs.core.first(seq__38976);
var seq__38976__$1 = cljs.core.next(seq__38976);
var mname = first__38977;
var arities = seq__38976__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__38998 = cljs.core.next(seq__38968__$1);
var G__38999 = null;
var G__39000 = (0);
var G__39001 = (0);
seq__38968 = G__38998;
chunk__38969 = G__38999;
count__38970 = G__39000;
i__38971 = G__39001;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_(arg)) && (!((cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();

}
}
});})(p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = sig__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),sig__$1], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38959__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__38960__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__9762__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_typeOf),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__38959__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__38960__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__38960__auto__),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__38960__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__9762__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__38960__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__38960__auto__),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_missing_DASH_protocol),(function (){var x__9762__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_info,cljs.core.cst$kw$methods], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__38978){
var vec__38979 = p__38978;
var seq__38980 = cljs.core.seq(vec__38979);
var first__38981 = cljs.core.first(seq__38980);
var seq__38980__$1 = cljs.core.next(seq__38980);
var fname = first__38981;
var sigs = seq__38980__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,cljs.core.cst$kw$doc,doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__38982){
var vec__38983 = p__38982;
var seq__38984 = cljs.core.seq(vec__38983);
var first__38985 = cljs.core.first(seq__38984);
var seq__38984__$1 = cljs.core.next(seq__38984);
var fname = first__38985;
var sigs = seq__38984__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,sigs__$1)))?cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,psym__$2,cljs.core.cst$kw$name,fname], null)):null);
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fname))].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$doc,doc__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__9762__auto__ = fname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__38983,seq__38984,first__38985,seq__38984__$1,fname,sigs,p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__38983,seq__38984,first__38985,seq__38984__$1,fname,sigs,p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__38965,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__9762__auto__ = psym__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq38961){
var G__38962 = cljs.core.first(seq38961);
var seq38961__$1 = cljs.core.next(seq38961);
var G__38963 = cljs.core.first(seq38961__$1);
var seq38961__$2 = cljs.core.next(seq38961__$1);
var G__38964 = cljs.core.first(seq38961__$2);
var seq38961__$3 = cljs.core.next(seq38961__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__38962,G__38963,G__38964,seq38961__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__10133__auto___39005 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__39002 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39002,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39002,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__9762__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__9762__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___39009 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__39006 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39006,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39006,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__9762__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__9762__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__9762__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__10133__auto___39013 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39014 = arguments.length;
var i__10088__auto___39015 = (0);
while(true){
if((i__10088__auto___39015 < len__10087__auto___39014)){
args__10094__auto__.push((arguments[i__10088__auto___39015]));

var G__39016 = (i__10088__auto___39015 + (1));
i__10088__auto___39015 = G__39016;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_LazySeq),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq39010){
var G__39011 = cljs.core.first(seq39010);
var seq39010__$1 = cljs.core.next(seq39010);
var G__39012 = cljs.core.first(seq39010__$1);
var seq39010__$2 = cljs.core.next(seq39010__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__39011,G__39012,seq39010__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__10133__auto___39020 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39021 = arguments.length;
var i__10088__auto___39022 = (0);
while(true){
if((i__10088__auto___39022 < len__10087__auto___39021)){
args__10094__auto__.push((arguments[i__10088__auto___39022]));

var G__39023 = (i__10088__auto___39022 + (1));
i__10088__auto___39022 = G__39023;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Delay),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq39017){
var G__39018 = cljs.core.first(seq39017);
var seq39017__$1 = cljs.core.next(seq39017);
var G__39019 = cljs.core.first(seq39017__$1);
var seq39017__$2 = cljs.core.next(seq39017__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__39018,G__39019,seq39017__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__10133__auto___39032 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39033 = arguments.length;
var i__10088__auto___39034 = (0);
while(true){
if((i__10088__auto___39034 < len__10087__auto___39033)){
args__10094__auto__.push((arguments[i__10088__auto___39034]));

var G__39035 = (i__10088__auto___39034 + (1));
i__10088__auto___39034 = G__39035;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__39028){
var vec__39029 = p__39028;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39029,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39029,(1),null);
return cljs.core._conj((function (){var x__9762__auto__ = k;
return cljs.core._conj((function (){var x__9762__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$set_BANG_);
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$try),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$finally),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq39024){
var G__39025 = cljs.core.first(seq39024);
var seq39024__$1 = cljs.core.next(seq39024);
var G__39026 = cljs.core.first(seq39024__$1);
var seq39024__$2 = cljs.core.next(seq39024__$1);
var G__39027 = cljs.core.first(seq39024__$2);
var seq39024__$3 = cljs.core.next(seq39024__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__39025,G__39026,G__39027,seq39024__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__10133__auto___39040 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39041 = arguments.length;
var i__10088__auto___39042 = (0);
while(true){
if((i__10088__auto___39042 < len__10087__auto___39041)){
args__10094__auto__.push((arguments[i__10088__auto___39042]));

var G__39043 = (i__10088__auto___39042 + (1));
i__10088__auto___39042 = G__39043;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_with_DASH_redefs),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq39036){
var G__39037 = cljs.core.first(seq39036);
var seq39036__$1 = cljs.core.next(seq39036);
var G__39038 = cljs.core.first(seq39036__$1);
var seq39036__$2 = cljs.core.next(seq39036__$1);
var G__39039 = cljs.core.first(seq39036__$2);
var seq39036__$3 = cljs.core.next(seq39036__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__39037,G__39038,G__39039,seq39036__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__10133__auto___39056 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39057 = arguments.length;
var i__10088__auto___39058 = (0);
while(true){
if((i__10088__auto___39058 < len__10087__auto___39057)){
args__10094__auto__.push((arguments[i__10088__auto___39058]));

var G__39059 = (i__10088__auto___39058 + (1));
i__10088__auto___39058 = G__39059;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__39050 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_GT__GT_,cljs.core.second(args)))?(3):(2)),args);
var vec__39053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39050,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39053,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39053,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39053,(2),null);
var clause = vec__39053;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39050,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__39044__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__39044__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = gpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gexpr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = emit(gpred,gexpr,clauses);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq39045){
var G__39046 = cljs.core.first(seq39045);
var seq39045__$1 = cljs.core.next(seq39045);
var G__39047 = cljs.core.first(seq39045__$1);
var seq39045__$2 = cljs.core.next(seq39045__$1);
var G__39048 = cljs.core.first(seq39045__$2);
var seq39045__$3 = cljs.core.next(seq39045__$2);
var G__39049 = cljs.core.first(seq39045__$3);
var seq39045__$4 = cljs.core.next(seq39045__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__39046,G__39047,G__39048,G__39049,seq39045__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__8796__auto__ = cljs.core.list_QMARK_(x);
if(and__8796__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$const);
} else {
return null;
}
});
var ret__10133__auto___39080 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39081 = arguments.length;
var i__10088__auto___39082 = (0);
while(true){
if((i__10088__auto___39082 < len__10087__auto___39081)){
args__10094__auto__.push((arguments[i__10088__auto___39082]));

var G__39083 = (i__10088__auto___39082 + (1));
i__10088__auto___39082 = G__39083;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (esym,default$,env){
return (function (m,p__39068){
var vec__39069 = p__39068;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39069,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39069,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__39069,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__9762__auto__ = test__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$quote):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__39069,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj((function (){var x__9762__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$quote),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,cljs.core.cst$kw$nonchar),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (esym,default$,env,pairs,tests){
return (function (p1__39060_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__39060_SHARP_);
});})(esym,default$,env,pairs,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__39061_SHARP_){
if(cljs.core.seq_QMARK_(p1__39061_SHARP_)){
return cljs.core.vec(p1__39061_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39061_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__39062_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39062_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__39063_SHARP_){
if(cljs.core.seq_QMARK_(p1__39063_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kw_str,p1__39063_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str(p1__39063_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_keyword_QMARK_),(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_fqn),(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_cond),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (esym,default$,env,pairs,tests){
return (function (p__39076){
var vec__39077 = p__39076;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39077,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39077,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__9762__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pairs], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq39064){
var G__39065 = cljs.core.first(seq39064);
var seq39064__$1 = cljs.core.next(seq39064);
var G__39066 = cljs.core.first(seq39064__$1);
var seq39064__$2 = cljs.core.next(seq39064__$1);
var G__39067 = cljs.core.first(seq39064__$2);
var seq39064__$3 = cljs.core.next(seq39064__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__39065,G__39066,G__39067,seq39064__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__10133__auto___39084 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__10133__auto___39087 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__39086 = arguments.length;
switch (G__39086) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__9762__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"\n"),(function (){var x__9762__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__10133__auto___39125 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__39094){
var vec__39095 = p__39094;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39095,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__39126__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__39126 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__39127__i = 0, G__39127__a = new Array(arguments.length -  0);
while (G__39127__i < G__39127__a.length) {G__39127__a[G__39127__i] = arguments[G__39127__i + 0]; ++G__39127__i;}
  msg = new cljs.core.IndexedSeq(G__39127__a,0,null);
} 
return G__39126__delegate.call(this,msg);};
G__39126.cljs$lang$maxFixedArity = 0;
G__39126.cljs$lang$applyTo = (function (arglist__39128){
var msg = cljs.core.seq(arglist__39128);
return G__39126__delegate(msg);
});
G__39126.cljs$core$IFn$_invoke$arity$variadic = G__39126__delegate;
return G__39126;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__39098){
var vec__39099 = p__39098;
var seq__39100 = cljs.core.seq(vec__39099);
var first__39101 = cljs.core.first(seq__39100);
var seq__39100__$1 = cljs.core.next(seq__39100);
var vec__39102 = first__39101;
var seq__39103 = cljs.core.seq(vec__39102);
var first__39104 = cljs.core.first(seq__39103);
var seq__39103__$1 = cljs.core.next(seq__39103);
var bind = first__39104;
var first__39104__$1 = cljs.core.first(seq__39103__$1);
var seq__39103__$2 = cljs.core.next(seq__39103__$1);
var expr = first__39104__$1;
var mod_pairs = seq__39103__$2;
var vec__39105 = seq__39100__$1;
var vec__39108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39105,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39108,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39108,(1),null);
var next_groups = vec__39105;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__39099,seq__39100,first__39101,seq__39100__$1,vec__39102,seq__39103,first__39104,seq__39103__$1,bind,first__39104__$1,seq__39103__$2,expr,mod_pairs,vec__39105,vec__39108,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__39111){
var vec__39112 = p__39111;
var seq__39113 = cljs.core.seq(vec__39112);
var first__39114 = cljs.core.first(seq__39113);
var seq__39113__$1 = cljs.core.next(seq__39113);
var vec__39115 = first__39114;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39115,(1),null);
var pair = vec__39115;
var etc = seq__39113__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'for' keyword ",k], 0));
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__39089__auto__),(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind(next_groups);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__39090__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__39089__auto__),(function (){var x__9762__auto__ = next_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__39090__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__39090__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cons),(function (){var x__9762__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

}
}
}
}
}
});})(giter,gxs,vec__39099,seq__39100,first__39101,seq__39100__$1,vec__39102,seq__39103,first__39104,seq__39103__$1,bind,first__39104__$1,seq__39103__$2,expr,mod_pairs,vec__39105,vec__39108,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_first),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__39099,seq__39100,first__39101,seq__39100__$1,vec__39102,seq__39103,first__39104,seq__39103__$1,bind,first__39104__$1,seq__39103__$2,expr,mod_pairs,vec__39105,vec__39108,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__39118){
var vec__39119 = p__39118;
var seq__39120 = cljs.core.seq(vec__39119);
var first__39121 = cljs.core.first(seq__39120);
var seq__39120__$1 = cljs.core.next(seq__39120);
var vec__39122 = first__39121;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(1),null);
var pair = vec__39122;
var etc = seq__39120__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_append),(function (){var x__9762__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__39099,seq__39100,first__39101,seq__39100__$1,vec__39102,seq__39103,first__39104,seq__39103__$1,bind,first__39104__$1,seq__39103__$2,expr,mod_pairs,vec__39105,vec__39108,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__39091__auto__),(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/wseobseo/.boot/cache/tmp/Users/wseobseo/aikakone/8tm/-qm324k/public/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2383),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2383),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$tag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_native)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__39092__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__39091__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_buffer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__39092__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__39092__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__39091__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = do_cmod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__9762__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__9762__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__9762__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__39093__auto__),(function (){var x__9762__auto__ = emit_bind(to_groups(seq_exprs));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__39093__auto__),(function (){var x__9762__auto__ = cljs.core.second(seq_exprs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__10133__auto___39134 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39135 = arguments.length;
var i__10088__auto___39136 = (0);
while(true){
if((i__10088__auto___39136 < len__10087__auto___39135)){
args__10094__auto__.push((arguments[i__10088__auto___39136]));

var G__39137 = (i__10088__auto___39136 + (1));
i__10088__auto___39136 = G__39137;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__39138__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__39138 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__39139__i = 0, G__39139__a = new Array(arguments.length -  0);
while (G__39139__i < G__39139__a.length) {G__39139__a[G__39139__i] = arguments[G__39139__i + 0]; ++G__39139__i;}
  msg = new cljs.core.IndexedSeq(G__39139__a,0,null);
} 
return G__39138__delegate.call(this,msg);};
G__39138.cljs$lang$maxFixedArity = 0;
G__39138.cljs$lang$applyTo = (function (arglist__39140){
var msg = cljs.core.seq(arglist__39140);
return G__39138__delegate(msg);
});
G__39138.cljs$core$IFn$_invoke$arity$variadic = G__39138__delegate;
return G__39138;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = recform__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__9762__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__9762__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),(function (){var x__9762__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__9762__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),(function (){var x__9762__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = subform_chunk;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__39129__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__39129__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__39129__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__9762__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq39130){
var G__39131 = cljs.core.first(seq39130);
var seq39130__$1 = cljs.core.next(seq39130);
var G__39132 = cljs.core.first(seq39130__$1);
var seq39130__$2 = cljs.core.next(seq39130__$1);
var G__39133 = cljs.core.first(seq39130__$2);
var seq39130__$3 = cljs.core.next(seq39130__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__39131,G__39132,G__39133,seq39130__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__10133__auto___39144 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39145 = arguments.length;
var i__10088__auto___39146 = (0);
while(true){
if((i__10088__auto___39146 < len__10087__auto___39145)){
args__10094__auto__.push((arguments[i__10088__auto___39146]));

var G__39147 = (i__10088__auto___39146 + (1));
i__10088__auto___39146 = G__39147;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq39141){
var G__39142 = cljs.core.first(seq39141);
var seq39141__$1 = cljs.core.next(seq39141);
var G__39143 = cljs.core.first(seq39141__$1);
var seq39141__$2 = cljs.core.next(seq39141__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__39142,G__39143,seq39141__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__10133__auto___39158 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__39157 = arguments.length;
switch (G__39157) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___39160 = arguments.length;
var i__10088__auto___39161 = (0);
while(true){
if((i__10088__auto___39161 < len__10087__auto___39160)){
args_arr__10110__auto__.push((arguments[i__10088__auto___39161]));

var G__39162 = (i__10088__auto___39161 + (1));
i__10088__auto___39161 = G__39162;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10111__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Array$),(function (){var x__9762__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__9762__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__39148__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),more_sizes)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__39149__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__9762__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__39150__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__39149__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__39149__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__39150__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__39148__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__39149__auto__)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq39152){
var G__39153 = cljs.core.first(seq39152);
var seq39152__$1 = cljs.core.next(seq39152);
var G__39154 = cljs.core.first(seq39152__$1);
var seq39152__$2 = cljs.core.next(seq39152__$1);
var G__39155 = cljs.core.first(seq39152__$2);
var seq39152__$3 = cljs.core.next(seq39152__$2);
var G__39156 = cljs.core.first(seq39152__$3);
var seq39152__$4 = cljs.core.next(seq39152__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__39153,G__39154,G__39155,G__39156,seq39152__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__10133__auto___39171 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__39169 = arguments.length;
switch (G__39169) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___39173 = arguments.length;
var i__10088__auto___39174 = (0);
while(true){
if((i__10088__auto___39174 < len__10087__auto___39173)){
args_arr__10110__auto__.push((arguments[i__10088__auto___39174]));

var G__39175 = (i__10088__auto___39174 + (1));
i__10088__auto___39174 = G__39175;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10111__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_List);
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_39170 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_39170;
}})()))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__39163__auto__),(function (){var x__9762__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__39163__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq39165){
var G__39166 = cljs.core.first(seq39165);
var seq39165__$1 = cljs.core.next(seq39165);
var G__39167 = cljs.core.first(seq39165__$1);
var seq39165__$2 = cljs.core.next(seq39165__$1);
var G__39168 = cljs.core.first(seq39165__$2);
var seq39165__$3 = cljs.core.next(seq39165__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__39166,G__39167,G__39168,seq39165__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__10133__auto___39181 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__39180 = arguments.length;
switch (G__39180) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___39183 = arguments.length;
var i__10088__auto___39184 = (0);
while(true){
if((i__10088__auto___39184 < len__10087__auto___39183)){
args_arr__10110__auto__.push((arguments[i__10088__auto___39184]));

var G__39185 = (i__10088__auto___39184 + (1));
i__10088__auto___39184 = G__39185;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cnt;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(5)),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY_DASH_NODE),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq39177){
var G__39178 = cljs.core.first(seq39177);
var seq39177__$1 = cljs.core.next(seq39177);
var G__39179 = cljs.core.first(seq39177__$1);
var seq39177__$2 = cljs.core.next(seq39177__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__39178,G__39179,seq39177__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__10133__auto___39195 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__39192 = arguments.length;
switch (G__39192) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___39197 = arguments.length;
var i__10088__auto___39198 = (0);
while(true){
if((i__10088__auto___39198 < len__10087__auto___39197)){
args_arr__10110__auto__.push((arguments[i__10088__auto___39198]));

var G__39199 = (i__10088__auto___39198 + (1));
i__10088__auto___39198 = G__39199;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap);
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__39186_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__39186_SHARP_),cljs.core.cst$kw$constant);
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__39187_SHARP_){
var _STAR_cljs_warnings_STAR_39194 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__39187_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_39194;
}});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = (cljs.core.count(kvs) / (2));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$createAsIfByAssoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq39189){
var G__39190 = cljs.core.first(seq39189);
var seq39189__$1 = cljs.core.next(seq39189);
var G__39191 = cljs.core.first(seq39189__$1);
var seq39189__$2 = cljs.core.next(seq39189__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__39190,G__39191,seq39189__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__10133__auto___39205 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__39204 = arguments.length;
switch (G__39204) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___39207 = arguments.length;
var i__10088__auto___39208 = (0);
while(true){
if((i__10088__auto___39208 < len__10087__auto___39207)){
args_arr__10110__auto__.push((arguments[i__10088__auto___39208]));

var G__39209 = (i__10088__auto___39208 + (1));
i__10088__auto___39208 = G__39209;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArrays),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),ks)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),vs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap);
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq39201){
var G__39202 = cljs.core.first(seq39201);
var seq39201__$1 = cljs.core.next(seq39201);
var G__39203 = cljs.core.first(seq39201__$1);
var seq39201__$2 = cljs.core.next(seq39201__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__39202,G__39203,seq39201__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__10133__auto___39219 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__39216 = arguments.length;
switch (G__39216) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___39221 = arguments.length;
var i__10088__auto___39222 = (0);
while(true){
if((i__10088__auto___39222 < len__10087__auto___39221)){
args_arr__10110__auto__.push((arguments[i__10088__auto___39222]));

var G__39223 = (i__10088__auto___39222 + (1));
i__10088__auto___39222 = G__39223;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__39210_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__39210_SHARP_),cljs.core.cst$kw$constant);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39211_SHARP_){
var _STAR_cljs_warnings_STAR_39218 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__39211_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_39218;
}}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.count(xs);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$createAsIfByAssoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet);
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq39213){
var G__39214 = cljs.core.first(seq39213);
var seq39213__$1 = cljs.core.next(seq39213);
var G__39215 = cljs.core.first(seq39213__$1);
var seq39213__$2 = cljs.core.next(seq39213__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__39214,G__39215,seq39213__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$object);
});
var ret__10133__auto___39239 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39240 = arguments.length;
var i__10088__auto___39241 = (0);
while(true){
if((i__10088__auto___39241 < len__10087__auto___39240)){
args__10094__auto__.push((arguments[i__10088__auto___39241]));

var G__39242 = (i__10088__auto___39241 + (1));
i__10088__auto___39241 = G__39242;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__39227){
var vec__39228 = p__39227;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39228,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39228,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(function (){var x__9762__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__39231){
var vec__39232 = p__39231;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39232,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39232,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__9762__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__39235){
var vec__39236 = p__39235;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39236,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39236,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__9762__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__9762__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq39224){
var G__39225 = cljs.core.first(seq39224);
var seq39224__$1 = cljs.core.next(seq39224);
var G__39226 = cljs.core.first(seq39224__$1);
var seq39224__$2 = cljs.core.next(seq39224__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__39225,G__39226,seq39224__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__10133__auto___39243 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"~{}.length"),cljs.core.cst$sym$js_STAR_),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$number);
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__10133__auto___39246 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__39244__auto__),(function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__39245__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__39244__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__39244__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__39245__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__10133__auto___39249 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__39247__auto__),(function (){var x__9762__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__39248__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__39247__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__39248__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__9762__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__10133__auto___39255 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39256 = arguments.length;
var i__10088__auto___39257 = (0);
while(true){
if((i__10088__auto___39257 < len__10087__auto___39256)){
args__10094__auto__.push((arguments[i__10088__auto___39257]));

var G__39258 = (i__10088__auto___39257 + (1));
i__10088__auto___39257 = G__39258;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__39250__auto__),(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__9762__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__39250__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__9762__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq39251){
var G__39252 = cljs.core.first(seq39251);
var seq39251__$1 = cljs.core.next(seq39251);
var G__39253 = cljs.core.first(seq39251__$1);
var seq39251__$2 = cljs.core.next(seq39251__$1);
var G__39254 = cljs.core.first(seq39251__$2);
var seq39251__$3 = cljs.core.next(seq39251__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__39252,G__39253,G__39254,seq39251__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39262 = arguments.length;
var i__10088__auto___39263 = (0);
while(true){
if((i__10088__auto___39263 < len__10087__auto___39262)){
args__10094__auto__.push((arguments[i__10088__auto___39263]));

var G__39264 = (i__10088__auto___39263 + (1));
i__10088__auto___39263 = G__39264;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39259_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39259_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq39260){
var G__39261 = cljs.core.first(seq39260);
var seq39260__$1 = cljs.core.next(seq39260);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__39261,seq39260__$1);
});

var ret__10133__auto___39274 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39275 = arguments.length;
var i__10088__auto___39276 = (0);
while(true){
if((i__10088__auto___39276 < len__10087__auto___39275)){
args__10094__auto__.push((arguments[i__10088__auto___39276]));

var G__39277 = (i__10088__auto___39276 + (1));
i__10088__auto___39276 = G__39277;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$doc,docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,cljs.core.cst$kw$default,cljs.core.cst$kw$default);
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,cljs.core.cst$kw$hierarchy], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defonce),(function (){var x__9762__auto__ = cljs.core.with_meta(mm_name,m__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__39265__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__39266__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__39267__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__39268__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__39269__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__9762__auto__ = options__$4;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$hierarchy),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_global_DASH_hierarchy))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_MultiFn$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__9762__auto__ = mm_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.name(mm_name);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = dispatch_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__39269__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__39265__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__39266__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__39267__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__39268__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq39270){
var G__39271 = cljs.core.first(seq39270);
var seq39270__$1 = cljs.core.next(seq39270);
var G__39272 = cljs.core.first(seq39270__$1);
var seq39270__$2 = cljs.core.next(seq39270__$1);
var G__39273 = cljs.core.first(seq39270__$2);
var seq39270__$3 = cljs.core.next(seq39270__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__39271,G__39272,G__39273,seq39270__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__10133__auto___39283 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39284 = arguments.length;
var i__10088__auto___39285 = (0);
while(true){
if((i__10088__auto___39285 < len__10087__auto___39284)){
args__10094__auto__.push((arguments[i__10088__auto___39285]));

var G__39286 = (i__10088__auto___39285 + (1));
i__10088__auto___39285 = G__39286;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_add_DASH_method),(function (){var x__9762__auto__ = cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_MultiFn], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = dispatch_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),fn_tail)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq39278){
var G__39279 = cljs.core.first(seq39278);
var seq39278__$1 = cljs.core.next(seq39278);
var G__39280 = cljs.core.first(seq39278__$1);
var seq39278__$2 = cljs.core.next(seq39278__$1);
var G__39281 = cljs.core.first(seq39278__$2);
var seq39278__$3 = cljs.core.next(seq39278__$2);
var G__39282 = cljs.core.first(seq39278__$3);
var seq39278__$4 = cljs.core.next(seq39278__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__39279,G__39280,G__39281,G__39282,seq39278__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__10133__auto___39289 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__39287__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__39288__auto__),(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_prn),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$toFixed),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__39287__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(6))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__39288__auto__)], 0))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__10133__auto___39304 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39305 = arguments.length;
var i__10088__auto___39306 = (0);
while(true){
if((i__10088__auto___39306 < len__10087__auto___39305)){
args__10094__auto__.push((arguments[i__10088__auto___39306]));

var G__39307 = (i__10088__auto___39306 + (1));
i__10088__auto___39306 = G__39307;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((5) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10095__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__39301){
var map__39302 = p__39301;
var map__39302__$1 = ((((!((map__39302 == null)))?((((map__39302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39302):map__39302);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39302__$1,cljs.core.cst$kw$print_DASH_fn,cljs.core.cst$sym$println);
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__39290__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__39291__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$___39292__auto__),(function (){var x__9762__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__39293__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__39294__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__39293__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__39290__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = print_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),(function (){var x__9762__auto__ = bs_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__9762__auto__ = expr_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__9762__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__39294__auto__),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq39295){
var G__39296 = cljs.core.first(seq39295);
var seq39295__$1 = cljs.core.next(seq39295);
var G__39297 = cljs.core.first(seq39295__$1);
var seq39295__$2 = cljs.core.next(seq39295__$1);
var G__39298 = cljs.core.first(seq39295__$2);
var seq39295__$3 = cljs.core.next(seq39295__$2);
var G__39299 = cljs.core.first(seq39295__$3);
var seq39295__$4 = cljs.core.next(seq39295__$3);
var G__39300 = cljs.core.first(seq39295__$4);
var seq39295__$5 = cljs.core.next(seq39295__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__39296,G__39297,G__39298,G__39299,G__39300,seq39295__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__39309 = arguments.length;
switch (G__39309) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = (function (){var G__39313 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__39313) : cljs.core$macros.cs.call(null,G__39313));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_rest),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__10133__auto___39315 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$apply_DASH_to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_zero_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__39316_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39316_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((num_args + (1))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = new_arg_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),(function (){var x__9762__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__9762__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__9762__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = proto_prop;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = proto_inv;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$call),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),all_args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = ((((19) <= num_args))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$arr__39317__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_array),all_args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__39318__auto__),(function (){var x__9762__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__39318__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$arr__39317__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__39318__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__39318__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$arr__39317__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):(function (){var G__39328 = f;
var G__39329 = (num_args + (1));
var G__39330 = next_sym;
return (cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3 ? cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3(G__39328,G__39329,G__39330) : cljs.core$macros.gen_apply_to_simple_helper.call(null,G__39328,G__39329,G__39330));
})());
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
var ret__10133__auto___39331 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper(f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__10133__auto___39337 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39338 = arguments.length;
var i__10088__auto___39339 = (0);
while(true){
if((i__10088__auto___39339 < len__10087__auto___39338)){
args__10094__auto__.push((arguments[i__10088__auto___39339]));

var G__39340 = (i__10088__auto___39339 + (1));
i__10088__auto___39339 = G__39340;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__39332__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog$string$StringBuffer$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_binding),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_newline_STAR_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_fn_STAR_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__39333__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$append),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__39332__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__39333__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__39332__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq39334){
var G__39335 = cljs.core.first(seq39334);
var seq39334__$1 = cljs.core.next(seq39334);
var G__39336 = cljs.core.first(seq39334__$1);
var seq39334__$2 = cljs.core.next(seq39334__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__39335,G__39336,seq39334__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__10133__auto___39345 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39346 = arguments.length;
var i__10088__auto___39347 = (0);
while(true){
if((i__10088__auto___39347 < len__10087__auto___39346)){
args__10094__auto__.push((arguments[i__10088__auto___39347]));

var G__39348 = (i__10088__auto___39347 + (1));
i__10088__auto___39347 = G__39348;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39341_SHARP_){
return cljs.core._conj((function (){var x__9762__auto__ = p1__39341_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq);
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq39342){
var G__39343 = cljs.core.first(seq39342);
var seq39342__$1 = cljs.core.next(seq39342);
var G__39344 = cljs.core.first(seq39342__$1);
var seq39342__$2 = cljs.core.next(seq39342__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__39343,G__39344,seq39342__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__10133__auto___39349 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj((function (){var x__9762__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),"''+~{}"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__10133__auto___39351 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__9762__auto__ = ty;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ITER_SYMBOL),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39350__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_es6_DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__39350__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__10133__auto___39368 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__39360){
var vec__39361 = p__39360;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39361,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39361,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__9762__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
});})(ns))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__39364){
var vec__39365 = p__39364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39365,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39365,(1),null);
return cljs.core.not(cljs.core.cst$kw$private.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__10133__auto___39377 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__39373){
var vec__39374 = p__39373;
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39374,(0),null);
var qualified_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39374,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__9762__auto__ = cljs.core.name(ctor);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(qualified_ctor);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$imports], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__10133__auto___39386 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__9762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__39382){
var vec__39383 = p__39382;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39383,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39383,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__9762__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__10133__auto___39387 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_sym),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
var sym = cljs.core.second(quoted_sym);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_delete),(function (){var x__9762__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__10133__auto___39393 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39394 = arguments.length;
var i__10088__auto___39395 = (0);
while(true){
if((i__10088__auto___39395 < len__10087__auto___39394)){
args__10094__auto__.push((arguments[i__10088__auto___39395]));

var G__39396 = (i__10088__auto___39395 + (1));
i__10088__auto___39395 = G__39396;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((4) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10095__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_vreset_BANG_),(function (){var x__9762__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_deref),(function (){var x__9762__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq39388){
var G__39389 = cljs.core.first(seq39388);
var seq39388__$1 = cljs.core.next(seq39388);
var G__39390 = cljs.core.first(seq39388__$1);
var seq39388__$2 = cljs.core.next(seq39388__$1);
var G__39391 = cljs.core.first(seq39388__$2);
var seq39388__$3 = cljs.core.next(seq39388__$2);
var G__39392 = cljs.core.first(seq39388__$3);
var seq39388__$4 = cljs.core.next(seq39388__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39389,G__39390,G__39391,G__39392,seq39388__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__10133__auto___39401 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39402 = arguments.length;
var i__10088__auto___39403 = (0);
while(true){
if((i__10088__auto___39403 < len__10087__auto___39402)){
args__10094__auto__.push((arguments[i__10088__auto___39403]));

var G__39404 = (i__10088__auto___39403 + (1));
i__10088__auto___39403 = G__39404;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq39397){
var G__39398 = cljs.core.first(seq39397);
var seq39397__$1 = cljs.core.next(seq39397);
var G__39399 = cljs.core.first(seq39397__$1);
var seq39397__$2 = cljs.core.next(seq39397__$1);
var G__39400 = cljs.core.first(seq39397__$2);
var seq39397__$3 = cljs.core.next(seq39397__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__39398,G__39399,G__39400,seq39397__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__10133__auto___39408 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39409 = arguments.length;
var i__10088__auto___39410 = (0);
while(true){
if((i__10088__auto___39410 < len__10087__auto___39409)){
args__10094__auto__.push((arguments[i__10088__auto___39410]));

var G__39411 = (i__10088__auto___39410 + (1));
i__10088__auto___39410 = G__39411;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__9762__auto__ = cljs.core.cons(cljs.core.cst$kw$require,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq39405){
var G__39406 = cljs.core.first(seq39405);
var seq39405__$1 = cljs.core.next(seq39405);
var G__39407 = cljs.core.first(seq39405__$1);
var seq39405__$2 = cljs.core.next(seq39405__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__39406,G__39407,seq39405__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__10133__auto___39415 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39416 = arguments.length;
var i__10088__auto___39417 = (0);
while(true){
if((i__10088__auto___39417 < len__10087__auto___39416)){
args__10094__auto__.push((arguments[i__10088__auto___39417]));

var G__39418 = (i__10088__auto___39417 + (1));
i__10088__auto___39417 = G__39418;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__9762__auto__ = cljs.core.cons(cljs.core.cst$kw$require_DASH_macros,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq39412){
var G__39413 = cljs.core.first(seq39412);
var seq39412__$1 = cljs.core.next(seq39412);
var G__39414 = cljs.core.first(seq39412__$1);
var seq39412__$2 = cljs.core.next(seq39412__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__39413,G__39414,seq39412__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__10133__auto___39422 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39423 = arguments.length;
var i__10088__auto___39424 = (0);
while(true){
if((i__10088__auto___39424 < len__10087__auto___39423)){
args__10094__auto__.push((arguments[i__10088__auto___39424]));

var G__39425 = (i__10088__auto___39424 + (1));
i__10088__auto___39424 = G__39425;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__9762__auto__ = cljs.core.cons(cljs.core.cst$kw$use,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq39419){
var G__39420 = cljs.core.first(seq39419);
var seq39419__$1 = cljs.core.next(seq39419);
var G__39421 = cljs.core.first(seq39419__$1);
var seq39419__$2 = cljs.core.next(seq39419__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__39420,G__39421,seq39419__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__10133__auto___39429 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39430 = arguments.length;
var i__10088__auto___39431 = (0);
while(true){
if((i__10088__auto___39431 < len__10087__auto___39430)){
args__10094__auto__.push((arguments[i__10088__auto___39431]));

var G__39432 = (i__10088__auto___39431 + (1));
i__10088__auto___39431 = G__39432;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__9762__auto__ = cljs.core.cons(cljs.core.cst$kw$use_DASH_macros,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq39426){
var G__39427 = cljs.core.first(seq39426);
var seq39426__$1 = cljs.core.next(seq39426);
var G__39428 = cljs.core.first(seq39426__$1);
var seq39426__$2 = cljs.core.next(seq39426__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__39427,G__39428,seq39426__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__10133__auto___39436 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39437 = arguments.length;
var i__10088__auto___39438 = (0);
while(true){
if((i__10088__auto___39438 < len__10087__auto___39437)){
args__10094__auto__.push((arguments[i__10088__auto___39438]));

var G__39439 = (i__10088__auto___39438 + (1));
i__10088__auto___39438 = G__39439;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__9762__auto__ = cljs.core.cons(cljs.core.cst$kw$import,import_symbols_or_lists);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq39433){
var G__39434 = cljs.core.first(seq39433);
var seq39433__$1 = cljs.core.next(seq39433);
var G__39435 = cljs.core.first(seq39433__$1);
var seq39433__$2 = cljs.core.next(seq39433__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__39434,G__39435,seq39433__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__10133__auto___39443 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39444 = arguments.length;
var i__10088__auto___39445 = (0);
while(true){
if((i__10088__auto___39445 < len__10087__auto___39444)){
args__10094__auto__.push((arguments[i__10088__auto___39445]));

var G__39446 = (i__10088__auto___39445 + (1));
i__10088__auto___39445 = G__39446;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__9762__auto__ = cljs.core.cons(cljs.core.cst$kw$refer_DASH_clojure,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq39440){
var G__39441 = cljs.core.first(seq39440);
var seq39440__$1 = cljs.core.next(seq39440);
var G__39442 = cljs.core.first(seq39440__$1);
var seq39440__$2 = cljs.core.next(seq39440__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__39441,G__39442,seq39440__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__10133__auto___39447 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$nodeGlobalRequire),(function (){var x__9762__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__10133__auto___39448 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__9762__auto__ = cljs.analyzer.macroexpand_1(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__10133__auto___39449 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_(form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__39450 = form_SINGLEQUOTE_;
var G__39451 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__39450;
form_SINGLEQUOTE_ = G__39451;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__9762__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__8796__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__8796__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__39453 = arguments.length;
switch (G__39453) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__39454,solo){
var vec__39455 = p__39454;
var seq__39456 = cljs.core.seq(vec__39455);
var first__39457 = cljs.core.first(seq__39456);
var seq__39456__$1 = cljs.core.next(seq__39456);
var arglist = first__39457;
var body = seq__39456__$1;
var method = vec__39455;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__39455,seq__39456,first__39457,seq__39456__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic;
});})(sig,restarg,vec__39455,seq__39456,first__39457,seq__39456__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__39455,seq__39456,first__39457,seq__39456__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});})(sig,restarg,vec__39455,seq__39456,first__39457,seq__39456__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__39455,seq__39456,first__39457,seq__39456__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = param;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_first,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/wseobseo/.boot/cache/tmp/Users/wseobseo/aikakone/8tm/-qm324k/public/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2999),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2999),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_next,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/wseobseo/.boot/cache/tmp/Users/wseobseo/aikakone/8tm/-qm324k/public/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,3000),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,3000),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))));
});})(sig,restarg,vec__39455,seq__39456,first__39457,seq__39456__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__39455,seq__39456,first__39457,seq__39456__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__9762__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__9762__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
}
});})(sig,restarg,vec__39455,seq__39456,first__39457,seq__39456__$1,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = get_delegate_prop();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.vec(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = (cljs.core.count(sig) - (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())))):null),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$applyTo)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = apply_to();
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__10133__auto___39461 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__39459__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__39460__auto__),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__39460__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__39459__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),(function (){var x__9762__auto__ = dest;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__39460__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__39460__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__39464,emit_var_QMARK_){
var vec__39465 = p__39464;
var vec__39468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39465,(0),null);
var seq__39469 = cljs.core.seq(vec__39468);
var first__39470 = cljs.core.first(seq__39469);
var seq__39469__$1 = cljs.core.next(seq__39469);
var arglist = first__39470;
var body = seq__39469__$1;
var method = vec__39468;
var fdecl = vec__39465;
var dest_args = ((function (vec__39465,vec__39468,seq__39469,first__39470,seq__39469__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__39465,vec__39468,seq__39469,first__39470,seq__39469__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});})(vec__39465,vec__39468,seq__39469,first__39470,seq__39469__$1,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__39465,vec__39468,seq__39469,first__39470,seq__39469__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,true,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,c_1,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.cst$kw$arglists,(function (){var x__9762__auto__ = arglist;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__9762__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__39462__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__39462__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__39463__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__9762__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__39462__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/wseobseo/.boot/cache/tmp/Users/wseobseo/aikakone/8tm/-qm324k/public/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,3047),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,3047),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__39462__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(c_1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__39463__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),dest_args(c))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__39479){
var vec__39480 = p__39479;
var seq__39481 = cljs.core.seq(vec__39480);
var first__39482 = cljs.core.first(seq__39481);
var seq__39481__$1 = cljs.core.next(seq__39481);
var sig = first__39482;
var body = seq__39481__$1;
var method = vec__39480;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = method;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__39471_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),p1__39471_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,maxfa,cljs.core.cst$kw$method_DASH_params,sigs,cljs.core.cst$kw$arglists,arglists,cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
var param_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,arglists);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts),param_counts)){
cljs.analyzer.warning(cljs.core.cst$kw$overload_DASH_arity,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__9762__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__39472_SHARP_){
return fixed_arity(rname,p1__39472_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)),(function (){var x__9762__auto__ = ((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args_DASH_arr__39473__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args_DASH_arr__39473__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__39474__auto__),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__9762__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/Users/wseobseo/.boot/cache/tmp/Users/wseobseo/aikakone/8tm/-qm324k/public/main.out/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,3108),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,59),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,3108),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,79),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args_DASH_arr__39473__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(maxfa),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__39474__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0)))):(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(2))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(function (){var x__9762__auto__ = fdecl__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core._conj((function (){var x__9762__auto__ = cljs.core$macros.sigs(fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$quote)], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.with_meta(name,m__$4);
return cljs.core._conj((function (){var x__9762__auto____$1 = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$def);

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__39483__i = 0, G__39483__a = new Array(arguments.length -  3);
while (G__39483__i < G__39483__a.length) {G__39483__a[G__39483__i] = arguments[G__39483__i + 3]; ++G__39483__i;}
  fdecl = new cljs.core.IndexedSeq(G__39483__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__39484){
var _AMPERSAND_form = cljs.core.first(arglist__39484);
arglist__39484 = cljs.core.next(arglist__39484);
var _AMPERSAND_env = cljs.core.first(arglist__39484);
arglist__39484 = cljs.core.next(arglist__39484);
var name = cljs.core.first(arglist__39484);
var fdecl = cljs.core.rest(arglist__39484);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39490 = arguments.length;
var i__10088__auto___39491 = (0);
while(true){
if((i__10088__auto___39491 < len__10087__auto___39490)){
args__10094__auto__.push((arguments[i__10088__auto___39491]));

var G__39492 = (i__10088__auto___39491 + (1));
i__10088__auto___39491 = G__39492;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__9762__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,cljs.core.cst$kw$macro,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__39493 = cljs.core.cons(f,p);
var G__39494 = cljs.core.next(args__$1);
p = G__39493;
args__$1 = G__39494;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__39495 = cljs.core.cons(f,p);
var G__39496 = cljs.core.next(args__$1);
p = G__39495;
args__$1 = G__39496;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__39497 = cljs.core.next(fd);
fd = G__39497;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__39498 = cljs.core.next(fd);
fd = G__39498;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(function (){var x__9762__auto__ = fdecl;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_env,args__$1))),cljs.core.next(fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__39499 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__39500 = cljs.core.next(ds);
acc = G__39499;
ds = G__39500;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__39501 = cljs.core.next(p);
var G__39502 = cljs.core.cons(cljs.core.first(p),d);
p = G__39501;
d = G__39502;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__39485__auto__),(function (){var x__9762__auto__ = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,decl);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__9762__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$macro)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__39485__auto__)], 0))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq39486){
var G__39487 = cljs.core.first(seq39486);
var seq39486__$1 = cljs.core.next(seq39486);
var G__39488 = cljs.core.first(seq39486__$1);
var seq39486__$2 = cljs.core.next(seq39486__$1);
var G__39489 = cljs.core.first(seq39486__$2);
var seq39486__$3 = cljs.core.next(seq39486__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__39487,G__39488,G__39489,seq39486__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__10133__auto___39507 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second(quoted_sym);
var env = _AMPERSAND_env;
var vec__39503 = (function (){try{var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1(var$)], null);
}catch (e39506){var e = e39506;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym),null], null);
}})();
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39503,(0),null);
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39503,(1),null);
var resolved = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__9762__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Var$),(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__9762__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9762__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__9762__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),(function (){var x__9762__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})()], 0))));
});
cljs.core$macros.resolve.cljs$lang$macro = true;

