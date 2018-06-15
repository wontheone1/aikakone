// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//);
var last_part = cljs.core.last(parts);
var new_parts = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parts),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_part,clojure.string.lower_case(last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(last_part)], null)));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var G__36383 = arguments.length;
switch (G__36383) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches(/^goog\/.*/,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(opts,(cljs.core.truth_(cljs.core.cst$kw$macros.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__5455__auto__ = cljs.core.first(extensions);
if(cljs.core.truth_(temp__5455__auto__)){
var extension = temp__5455__auto__;
try{return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),((function (extension,temp__5455__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
var G__36385 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(extension,".js"))?cljs.core.cst$kw$js:cljs.core.cst$kw$clj),cljs.core.cst$kw$source,e.target.getResponseText()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__36385) : cb.call(null,G__36385));
} else {
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.rest(extensions),cb);
}
});})(extension,temp__5455__auto__))
);
}catch (e36384){if((e36384 instanceof Error)){
var _ = e36384;
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.rest(extensions),cb);
} else {
throw e36384;

}
}} else {
var G__36386 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$source,""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__36386) : cb.call(null,G__36386));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(ns_sym,s){
try{var _STAR_ns_STAR_36389 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns_sym);

try{return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow], null),s);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_36389;
}}catch (e36388){if((e36388 instanceof Error)){
var _ = e36388;
return null;
} else {
throw e36388;

}
}});
eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,_STAR_state,_STAR_current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$eval,cljs.js.js_eval,cljs.core.cst$kw$load,custom_load,cljs.core.cst$kw$context,cljs.core.cst$kw$expr,cljs.core.cst$kw$def_DASH_emits_DASH_var,true], null);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var _STAR_forms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(forms);
var _STAR_results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (state_36483){
var state_val_36484 = (state_36483[(1)]);
if((state_val_36484 === (7))){
var inst_36434 = (state_36483[(2)]);
var inst_36435 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_forms,cljs.core.rest);
var state_36483__$1 = (function (){var statearr_36485 = state_36483;
(statearr_36485[(7)] = inst_36434);

(statearr_36485[(8)] = inst_36435);

return statearr_36485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36483__$1,(19),channel);
} else {
if((state_val_36484 === (20))){
var inst_36438 = (state_36483[(9)]);
var inst_36443 = inst_36438.cljs$lang$protocol_mask$partition0$;
var inst_36444 = (inst_36443 & (64));
var inst_36445 = inst_36438.cljs$core$ISeq$;
var inst_36446 = (cljs.core.PROTOCOL_SENTINEL === inst_36445);
var inst_36447 = (inst_36444) || (inst_36446);
var state_36483__$1 = state_36483;
if(cljs.core.truth_(inst_36447)){
var statearr_36486_36534 = state_36483__$1;
(statearr_36486_36534[(1)] = (23));

} else {
var statearr_36487_36535 = state_36483__$1;
(statearr_36487_36535[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (27))){
var inst_36438 = (state_36483[(9)]);
var state_36483__$1 = state_36483;
var statearr_36488_36536 = state_36483__$1;
(statearr_36488_36536[(2)] = inst_36438);

(statearr_36488_36536[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (1))){
var state_36483__$1 = state_36483;
var statearr_36489_36537 = state_36483__$1;
(statearr_36489_36537[(2)] = null);

(statearr_36489_36537[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (24))){
var state_36483__$1 = state_36483;
var statearr_36490_36538 = state_36483__$1;
(statearr_36490_36538[(2)] = false);

(statearr_36490_36538[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (4))){
var state_36483__$1 = state_36483;
var statearr_36491_36539 = state_36483__$1;
(statearr_36491_36539[(2)] = null);

(statearr_36491_36539[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (15))){
var inst_36418 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36492_36540 = state_36483__$1;
(statearr_36492_36540[(2)] = inst_36418);

(statearr_36492_36540[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (21))){
var state_36483__$1 = state_36483;
var statearr_36493_36541 = state_36483__$1;
(statearr_36493_36541[(2)] = false);

(statearr_36493_36541[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (31))){
var inst_36470 = (state_36483[(2)]);
var inst_36471 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_results,cljs.core.conj,inst_36470);
var state_36483__$1 = (function (){var statearr_36494 = state_36483;
(statearr_36494[(10)] = inst_36471);

return statearr_36494;
})();
var statearr_36495_36542 = state_36483__$1;
(statearr_36495_36542[(2)] = null);

(statearr_36495_36542[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (32))){
var inst_36463 = (state_36483[(11)]);
var inst_36465 = (state_36483[(2)]);
var inst_36466 = [inst_36465];
var inst_36467 = cljs.core.PersistentHashMap.fromArrays(inst_36463,inst_36466);
var state_36483__$1 = state_36483;
var statearr_36496_36543 = state_36483__$1;
(statearr_36496_36543[(2)] = inst_36467);

(statearr_36496_36543[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (13))){
var inst_36406 = (state_36483[(12)]);
var inst_36414 = cljs.core.second(inst_36406);
var inst_36415 = cljs.core.reset_BANG_(_STAR_current_ns,inst_36414);
var state_36483__$1 = state_36483;
var statearr_36497_36544 = state_36483__$1;
(statearr_36497_36544[(2)] = inst_36415);

(statearr_36497_36544[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (22))){
var inst_36454 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
if(cljs.core.truth_(inst_36454)){
var statearr_36498_36545 = state_36483__$1;
(statearr_36498_36545[(1)] = (26));

} else {
var statearr_36499_36546 = state_36483__$1;
(statearr_36499_36546[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (29))){
var inst_36460 = (state_36483[(13)]);
var inst_36463 = [cljs.core.cst$kw$value];
var state_36483__$1 = (function (){var statearr_36500 = state_36483;
(statearr_36500[(11)] = inst_36463);

return statearr_36500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36483__$1,(32),inst_36460);
} else {
if((state_val_36484 === (6))){
var inst_36475 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36501_36547 = state_36483__$1;
(statearr_36501_36547[(2)] = inst_36475);

(statearr_36501_36547[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (28))){
var inst_36460 = (state_36483[(13)]);
var inst_36459 = (state_36483[(14)]);
var inst_36459__$1 = (state_36483[(2)]);
var inst_36460__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36459__$1,cljs.core.cst$kw$value);
var inst_36461 = (inst_36460__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);
var state_36483__$1 = (function (){var statearr_36502 = state_36483;
(statearr_36502[(13)] = inst_36460__$1);

(statearr_36502[(14)] = inst_36459__$1);

return statearr_36502;
})();
if(cljs.core.truth_(inst_36461)){
var statearr_36503_36548 = state_36483__$1;
(statearr_36503_36548[(1)] = (29));

} else {
var statearr_36504_36549 = state_36483__$1;
(statearr_36504_36549[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (25))){
var inst_36451 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36505_36550 = state_36483__$1;
(statearr_36505_36550[(2)] = inst_36451);

(statearr_36505_36550[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (17))){
var inst_36404 = (state_36483[(15)]);
var inst_36407 = (state_36483[(16)]);
var inst_36406 = (state_36483[(12)]);
var inst_36429 = (function (){var current_ns = inst_36404;
var form = inst_36406;
var opts__$1 = inst_36407;
return ((function (current_ns,form,opts__$1,inst_36404,inst_36407,inst_36406,state_val_36484,c__34390__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__36390_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,p1__36390_SHARP_);
});
;})(current_ns,form,opts__$1,inst_36404,inst_36407,inst_36406,state_val_36484,c__34390__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_36430 = cljs.js.eval.cljs$core$IFn$_invoke$arity$4(_STAR_state,inst_36406,inst_36407,inst_36429);
var state_36483__$1 = state_36483;
var statearr_36506_36551 = state_36483__$1;
(statearr_36506_36551[(2)] = inst_36430);

(statearr_36506_36551[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (3))){
var inst_36477 = (state_36483[(2)]);
var inst_36478 = (function (){return ((function (inst_36477,state_val_36484,c__34390__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__36391_SHARP_){
var or__8808__auto__ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(p1__36391_SHARP_);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p1__36391_SHARP_);
}
});
;})(inst_36477,state_val_36484,c__34390__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_36479 = cljs.core.deref(_STAR_results);
var inst_36480 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_36478,inst_36479);
var inst_36481 = (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(inst_36480) : cb.call(null,inst_36480));
var state_36483__$1 = (function (){var statearr_36507 = state_36483;
(statearr_36507[(17)] = inst_36477);

return statearr_36507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36483__$1,inst_36481);
} else {
if((state_val_36484 === (12))){
var inst_36406 = (state_36483[(12)]);
var inst_36421 = (state_36483[(2)]);
var inst_36422 = (inst_36406 instanceof Error);
var state_36483__$1 = (function (){var statearr_36508 = state_36483;
(statearr_36508[(18)] = inst_36421);

return statearr_36508;
})();
if(cljs.core.truth_(inst_36422)){
var statearr_36509_36552 = state_36483__$1;
(statearr_36509_36552[(1)] = (16));

} else {
var statearr_36510_36553 = state_36483__$1;
(statearr_36510_36553[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (2))){
var inst_36393 = cljs.core.deref(_STAR_forms);
var inst_36394 = cljs.core.seq(inst_36393);
var state_36483__$1 = state_36483;
if(inst_36394){
var statearr_36511_36554 = state_36483__$1;
(statearr_36511_36554[(1)] = (4));

} else {
var statearr_36512_36555 = state_36483__$1;
(statearr_36512_36555[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (23))){
var state_36483__$1 = state_36483;
var statearr_36513_36556 = state_36483__$1;
(statearr_36513_36556[(2)] = true);

(statearr_36513_36556[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (19))){
var inst_36438 = (state_36483[(9)]);
var inst_36438__$1 = (state_36483[(2)]);
var inst_36440 = (inst_36438__$1 == null);
var inst_36441 = cljs.core.not(inst_36440);
var state_36483__$1 = (function (){var statearr_36514 = state_36483;
(statearr_36514[(9)] = inst_36438__$1);

return statearr_36514;
})();
if(inst_36441){
var statearr_36515_36557 = state_36483__$1;
(statearr_36515_36557[(1)] = (20));

} else {
var statearr_36516_36558 = state_36483__$1;
(statearr_36516_36558[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (11))){
var state_36483__$1 = state_36483;
var statearr_36517_36559 = state_36483__$1;
(statearr_36517_36559[(2)] = null);

(statearr_36517_36559[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (9))){
var inst_36404 = (state_36483[(15)]);
var inst_36406 = (state_36483[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36483,(8),Error,null,(7));
var inst_36404__$1 = cljs.core.deref(_STAR_current_ns);
var inst_36405 = cljs.core.deref(_STAR_forms);
var inst_36406__$1 = cljs.core.first(inst_36405);
var inst_36407 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$ns,inst_36404__$1);
var inst_36408 = cljs.core.list_QMARK_(inst_36406__$1);
var state_36483__$1 = (function (){var statearr_36518 = state_36483;
(statearr_36518[(15)] = inst_36404__$1);

(statearr_36518[(16)] = inst_36407);

(statearr_36518[(12)] = inst_36406__$1);

return statearr_36518;
})();
if(inst_36408){
var statearr_36519_36560 = state_36483__$1;
(statearr_36519_36560[(1)] = (10));

} else {
var statearr_36520_36561 = state_36483__$1;
(statearr_36520_36561[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (5))){
var state_36483__$1 = state_36483;
var statearr_36521_36562 = state_36483__$1;
(statearr_36521_36562[(2)] = null);

(statearr_36521_36562[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (14))){
var state_36483__$1 = state_36483;
var statearr_36522_36563 = state_36483__$1;
(statearr_36522_36563[(2)] = null);

(statearr_36522_36563[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (26))){
var inst_36438 = (state_36483[(9)]);
var inst_36456 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36438);
var state_36483__$1 = state_36483;
var statearr_36523_36564 = state_36483__$1;
(statearr_36523_36564[(2)] = inst_36456);

(statearr_36523_36564[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (16))){
var inst_36406 = (state_36483[(12)]);
var inst_36424 = [cljs.core.cst$kw$error];
var inst_36425 = [inst_36406];
var inst_36426 = cljs.core.PersistentHashMap.fromArrays(inst_36424,inst_36425);
var inst_36427 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_36426);
var state_36483__$1 = state_36483;
var statearr_36524_36565 = state_36483__$1;
(statearr_36524_36565[(2)] = inst_36427);

(statearr_36524_36565[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (30))){
var inst_36459 = (state_36483[(14)]);
var state_36483__$1 = state_36483;
var statearr_36525_36566 = state_36483__$1;
(statearr_36525_36566[(2)] = inst_36459);

(statearr_36525_36566[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (10))){
var inst_36406 = (state_36483[(12)]);
var inst_36410 = cljs.core.cst$sym$ns;
var inst_36411 = cljs.core.first(inst_36406);
var inst_36412 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36410,inst_36411);
var state_36483__$1 = state_36483;
if(inst_36412){
var statearr_36526_36567 = state_36483__$1;
(statearr_36526_36567[(1)] = (13));

} else {
var statearr_36527_36568 = state_36483__$1;
(statearr_36527_36568[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (18))){
var inst_36432 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36528_36569 = state_36483__$1;
(statearr_36528_36569[(2)] = inst_36432);


cljs.core.async.impl.ioc_helpers.process_exception(state_36483__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_36484 === (8))){
var inst_36396 = (state_36483[(2)]);
var inst_36397 = [cljs.core.cst$kw$error];
var inst_36398 = [inst_36396];
var inst_36399 = cljs.core.PersistentHashMap.fromArrays(inst_36397,inst_36398);
var inst_36400 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_36399);
var state_36483__$1 = state_36483;
var statearr_36529_36570 = state_36483__$1;
(statearr_36529_36570[(2)] = inst_36400);


cljs.core.async.impl.ioc_helpers.process_exception(state_36483__$1);

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
});})(c__34390__auto__,opts,channel,_STAR_forms,_STAR_results))
;
return ((function (switch__34288__auto__,c__34390__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__34289__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__34289__auto____0 = (function (){
var statearr_36530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36530[(0)] = eval_soup$core$eval_forms_$_state_machine__34289__auto__);

(statearr_36530[(1)] = (1));

return statearr_36530;
});
var eval_soup$core$eval_forms_$_state_machine__34289__auto____1 = (function (state_36483){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_36483);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e36531){if((e36531 instanceof Object)){
var ex__34292__auto__ = e36531;
var statearr_36532_36571 = state_36483;
(statearr_36532_36571[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36483);

return cljs.core.cst$kw$recur;
} else {
throw e36531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__36572 = state_36483;
state_36483 = G__36572;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__34289__auto__ = function(state_36483){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__34289__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__34289__auto____1.call(this,state_36483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eval_soup$core$eval_forms_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__34289__auto____0;
eval_soup$core$eval_forms_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__34289__auto____1;
return eval_soup$core$eval_forms_$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var state__34392__auto__ = (function (){var statearr_36533 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_36533[(6)] = c__34390__auto__);

return statearr_36533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__,opts,channel,_STAR_forms,_STAR_results))
);

return c__34390__auto__;
});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_(form)){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core._conj((function (){var x__9762__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$quote);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$macroexpand);
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core.list(cljs.core.cst$sym$cljs$user_SLASH_ps_DASH_reset_DASH_timeout_BANG_);
return cljs.core._conj((function (){var x__9762__auto____$1 = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$do);
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(timeout,form){
if((cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(form)))){
return form;
} else {
var form__$1 = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(eval_soup.core.add_timeout_checks,timeout),cljs.core.identity,form);
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$recur,cljs.core.first(form__$1)))){
return cljs.core._conj((function (){var x__9762__auto__ = cljs.core._conj((function (){var x__9762__auto__ = timeout;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$cljs$user_SLASH_ps_DASH_check_DASH_for_DASH_timeout_BANG_);
return cljs.core._conj((function (){var x__9762__auto____$1 = form__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto____$1);
})(),x__9762__auto__);
})(),cljs.core.cst$sym$do);
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(timeout,forms,expanded_forms){
var iter__9690__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__36573(s__36574){
return (new cljs.core.LazySeq(null,(function (){
var s__36574__$1 = s__36574;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__36574__$1);
if(temp__5457__auto__){
var s__36574__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36574__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__36574__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__36576 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__36575 = (0);
while(true){
if((i__36575 < size__9689__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__36575);
var expanded_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_forms,i);
cljs.core.chunk_append(b__36576,(((cljs.core.coll_QMARK_(expanded_form)) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.flatten(expanded_form)),cljs.core.cst$sym$recur)))?eval_soup.core.add_timeout_reset(eval_soup.core.add_timeout_checks(timeout,expanded_form)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(forms,i)));

var G__36577 = (i__36575 + (1));
i__36575 = G__36577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36576),eval_soup$core$add_timeouts_if_necessary_$_iter__36573(cljs.core.chunk_rest(s__36574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36576),null);
}
} else {
var i = cljs.core.first(s__36574__$2);
var expanded_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_forms,i);
return cljs.core.cons((((cljs.core.coll_QMARK_(expanded_form)) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.flatten(expanded_form)),cljs.core.cst$sym$recur)))?eval_soup.core.add_timeout_reset(eval_soup.core.add_timeout_checks(timeout,expanded_form)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__36573(cljs.core.rest(s__36574__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(forms)));
});
if(typeof eval_soup.core._STAR_cljs_state !== 'undefined'){
} else {
eval_soup.core._STAR_cljs_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Evaluates each form, providing the results in a callback.
 *   If any of the forms are strings, it will read them first.
 */
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var G__36580 = arguments.length;
switch (G__36580) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3(forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__36581){
var map__36582 = p__36581;
var map__36582__$1 = ((((!((map__36582 == null)))?((((map__36582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36582):map__36582);
var opts = map__36582__$1;
var _STAR_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36582__$1,cljs.core.cst$kw$_STAR_current_DASH_ns,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$user));
var _STAR_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36582__$1,cljs.core.cst$kw$_STAR_state,eval_soup.core._STAR_cljs_state);
var custom_load = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36582__$1,cljs.core.cst$kw$custom_DASH_load,eval_soup.core.custom_load_BANG_);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36582__$1,cljs.core.cst$kw$timeout,(4000));
var disable_timeout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36582__$1,cljs.core.cst$kw$disable_DASH_timeout_QMARK_,false);
var forms__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__36582,map__36582__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (p1__36578_SHARP_){
if(typeof p1__36578_SHARP_ === 'string'){
return eval_soup.core.str__GT_form(cljs.core.deref(_STAR_current_ns),p1__36578_SHARP_);
} else {
return p1__36578_SHARP_;
}
});})(map__36582,map__36582__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
,forms);
var init_forms = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$ns,cljs.core.cst$sym$cljs$user)], null),(cljs.core.truth_(disable_timeout_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$def,cljs.core.cst$sym$ps_DASH_last_DASH_time,cljs.core.list(cljs.core.cst$sym$atom,(0))),cljs.core.list(cljs.core.cst$sym$defn,cljs.core.cst$sym$ps_DASH_reset_DASH_timeout_BANG_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$reset_BANG_,cljs.core.cst$sym$ps_DASH_last_DASH_time,cljs.core.list(cljs.core.cst$sym$$getTime,cljs.core.list(cljs.core.cst$sym$js_SLASH_Date$)))),cljs.core.list(cljs.core.cst$sym$defn,cljs.core.cst$sym$ps_DASH_check_DASH_for_DASH_timeout_BANG_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$timeout], null),cljs.core.list(cljs.core.cst$sym$when,cljs.core.list(cljs.core.cst$sym$_GT_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.list(cljs.core.cst$sym$$getTime,cljs.core.list(cljs.core.cst$sym$js_SLASH_Date$)),cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$ps_DASH_last_DASH_time)),cljs.core.cst$sym$timeout),cljs.core.list(cljs.core.cst$sym$throw,cljs.core.list(cljs.core.cst$sym$js_SLASH_Error$,"Execution timed out."))))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$set_BANG_,cljs.core.cst$sym$_STAR_print_DASH_err_DASH_fn_STAR_,cljs.core.list(cljs.core.cst$sym$fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null))),cljs.core._conj((function (){var x__9762__auto__ = cljs.core.deref(_STAR_current_ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),cljs.core.cst$sym$ns)], null)], 0)));
var timeout_cb = ((function (forms__$1,init_forms,map__36582,map__36582__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms(eval_soup.core.add_timeouts_if_necessary(timeout,forms__$1,results),cb,_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,map__36582,map__36582__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
var init_cb = ((function (forms__$1,init_forms,timeout_cb,map__36582,map__36582__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms((cljs.core.truth_(disable_timeout_QMARK_)?forms__$1:cljs.core.map.cljs$core$IFn$_invoke$arity$2(eval_soup.core.wrap_macroexpand,forms__$1)),(cljs.core.truth_(disable_timeout_QMARK_)?cb:timeout_cb),_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,timeout_cb,map__36582,map__36582__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
return eval_soup.core.eval_forms(init_forms,init_cb,_STAR_state,_STAR_current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;

