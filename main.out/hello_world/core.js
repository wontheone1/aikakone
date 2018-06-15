// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('hello_world.components');
goog.require('hello_world.web_socket');
goog.require('nightlight.repl_server');
goog.require('hello_world.util');
goog.require('reagent.core');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_();
hello_world.core.add_game_image_url_BANG_ = (function hello_world$core$add_game_image_url_BANG_(search_word){
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__){
return (function (state_45373){
var state_val_45374 = (state_45373[(1)]);
if((state_val_45374 === (1))){
var inst_45350 = [cljs.core.cst$kw$with_DASH_credentials_QMARK_,cljs.core.cst$kw$query_DASH_params];
var inst_45351 = ["lookfor"];
var inst_45352 = [search_word];
var inst_45353 = cljs.core.PersistentHashMap.fromArrays(inst_45351,inst_45352);
var inst_45354 = [false,inst_45353];
var inst_45355 = cljs.core.PersistentHashMap.fromArrays(inst_45350,inst_45354);
var inst_45356 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://api.finna.fi/v1/search",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45355], 0));
var state_45373__$1 = state_45373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45373__$1,(2),inst_45356);
} else {
if((state_val_45374 === (2))){
var inst_45358 = (state_45373[(2)]);
var inst_45359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45361 = [cljs.core.cst$kw$body,cljs.core.cst$kw$records];
var inst_45362 = (new cljs.core.PersistentVector(null,2,(5),inst_45360,inst_45361,null));
var inst_45363 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_45358,inst_45362);
var inst_45364 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$images,inst_45363);
var inst_45365 = cljs.core.second(inst_45364);
var inst_45366 = cljs.core.cst$kw$images.cljs$core$IFn$_invoke$arity$1(inst_45365);
var inst_45367 = cljs.core.first(inst_45366);
var inst_45368 = ["https://api.finna.fi",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45367)].join('');
var inst_45369 = [cljs.core.cst$kw$add_DASH_game_DASH_img_DASH_url,search_word,inst_45368];
var inst_45370 = (new cljs.core.PersistentVector(null,3,(5),inst_45359,inst_45369,null));
var inst_45371 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_45370) : re_frame.core.dispatch.call(null,inst_45370));
var state_45373__$1 = state_45373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45373__$1,inst_45371);
} else {
return null;
}
}
});})(c__34390__auto__))
;
return ((function (switch__34288__auto__,c__34390__auto__){
return (function() {
var hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto__ = null;
var hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto____0 = (function (){
var statearr_45375 = [null,null,null,null,null,null,null];
(statearr_45375[(0)] = hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto__);

(statearr_45375[(1)] = (1));

return statearr_45375;
});
var hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto____1 = (function (state_45373){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_45373);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e45376){if((e45376 instanceof Object)){
var ex__34292__auto__ = e45376;
var statearr_45377_45379 = state_45373;
(statearr_45377_45379[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45373);

return cljs.core.cst$kw$recur;
} else {
throw e45376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__45380 = state_45373;
state_45373 = G__45380;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto__ = function(state_45373){
switch(arguments.length){
case 0:
return hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto____0.call(this);
case 1:
return hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto____1.call(this,state_45373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto____0;
hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto____1;
return hello_world$core$add_game_image_url_BANG__$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__))
})();
var state__34392__auto__ = (function (){var statearr_45378 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_45378[(6)] = c__34390__auto__);

return statearr_45378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__))
);

return c__34390__auto__;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
var seq__45381_45389 = cljs.core.seq(hello_world.util.puzzle_images);
var chunk__45382_45390 = null;
var count__45383_45391 = (0);
var i__45384_45392 = (0);
while(true){
if((i__45384_45392 < count__45383_45391)){
var map__45385_45393 = chunk__45382_45390.cljs$core$IIndexed$_nth$arity$2(null,i__45384_45392);
var map__45385_45394__$1 = ((((!((map__45385_45393 == null)))?((((map__45385_45393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45385_45393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45385_45393):map__45385_45393);
var search_word_45395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45385_45394__$1,cljs.core.cst$kw$search_DASH_word);
hello_world.core.add_game_image_url_BANG_(search_word_45395);

var G__45396 = seq__45381_45389;
var G__45397 = chunk__45382_45390;
var G__45398 = count__45383_45391;
var G__45399 = (i__45384_45392 + (1));
seq__45381_45389 = G__45396;
chunk__45382_45390 = G__45397;
count__45383_45391 = G__45398;
i__45384_45392 = G__45399;
continue;
} else {
var temp__5457__auto___45400 = cljs.core.seq(seq__45381_45389);
if(temp__5457__auto___45400){
var seq__45381_45401__$1 = temp__5457__auto___45400;
if(cljs.core.chunked_seq_QMARK_(seq__45381_45401__$1)){
var c__9739__auto___45402 = cljs.core.chunk_first(seq__45381_45401__$1);
var G__45403 = cljs.core.chunk_rest(seq__45381_45401__$1);
var G__45404 = c__9739__auto___45402;
var G__45405 = cljs.core.count(c__9739__auto___45402);
var G__45406 = (0);
seq__45381_45389 = G__45403;
chunk__45382_45390 = G__45404;
count__45383_45391 = G__45405;
i__45384_45392 = G__45406;
continue;
} else {
var map__45387_45407 = cljs.core.first(seq__45381_45401__$1);
var map__45387_45408__$1 = ((((!((map__45387_45407 == null)))?((((map__45387_45407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45387_45407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45387_45407):map__45387_45407);
var search_word_45409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45387_45408__$1,cljs.core.cst$kw$search_DASH_word);
hello_world.core.add_game_image_url_BANG_(search_word_45409);

var G__45410 = cljs.core.next(seq__45381_45401__$1);
var G__45411 = null;
var G__45412 = (0);
var G__45413 = (0);
seq__45381_45389 = G__45410;
chunk__45382_45390 = G__45411;
count__45383_45391 = G__45412;
i__45384_45392 = G__45413;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$screen,cljs.core.cst$kw$intro,cljs.core.cst$kw$ranking,cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ranking,(function (db,p__45414){
var vec__45415 = p__45414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45415,(0),null);
var ranking = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45415,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$ranking,ranking);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$screen_DASH_change,(function (db,p__45418){
var vec__45419 = p__45418;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45419,(0),null);
var screen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45419,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$screen,screen);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_game_DASH_img,(function (db,p__45422){
var vec__45423 = p__45422;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45423,(0),null);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45423,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$game_DASH_img,search_word);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add_DASH_game_DASH_img_DASH_url,(function (db,p__45426){
var vec__45427 = p__45426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45427,(0),null);
var search_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45427,(1),null);
var image_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45427,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,cljs.core.cst$kw$search_DASH_word_DASH__GT_game_DASH_img_DASH_url,cljs.core.assoc,search_word,image_url);
}));
var G__45430_45432 = cljs.core.cst$kw$screen;
var G__45431_45433 = ((function (G__45430_45432){
return (function (db,_){
return cljs.core.cst$kw$screen.cljs$core$IFn$_invoke$arity$1(db);
});})(G__45430_45432))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45430_45432,G__45431_45433) : re_frame.core.reg_sub.call(null,G__45430_45432,G__45431_45433));
var G__45434_45436 = cljs.core.cst$kw$ranking;
var G__45435_45437 = ((function (G__45434_45436){
return (function (db,_){
return cljs.core.cst$kw$ranking.cljs$core$IFn$_invoke$arity$1(db);
});})(G__45434_45436))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45434_45436,G__45435_45437) : re_frame.core.reg_sub.call(null,G__45434_45436,G__45435_45437));
var G__45438_45440 = cljs.core.cst$kw$game_DASH_img;
var G__45439_45441 = ((function (G__45438_45440){
return (function (db,_){
return cljs.core.cst$kw$game_DASH_img.cljs$core$IFn$_invoke$arity$1(db);
});})(G__45438_45440))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45438_45440,G__45439_45441) : re_frame.core.reg_sub.call(null,G__45438_45440,G__45439_45441));
var G__45442_45444 = cljs.core.cst$kw$search_DASH_word_DASH__GT_game_DASH_img_DASH_url;
var G__45443_45445 = ((function (G__45442_45444){
return (function (db,_){
return cljs.core.cst$kw$search_DASH_word_DASH__GT_game_DASH_img_DASH_url.cljs$core$IFn$_invoke$arity$1(db);
});})(G__45442_45444))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__45442_45444,G__45443_45445) : re_frame.core.reg_sub.call(null,G__45442_45444,G__45443_45445));
var G__45446_45447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__45446_45447) : re_frame.core.dispatch_sync.call(null,G__45446_45447));
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.components.app], null),document.getElementById("app"));
var buttons_img_45448 = (new Image());
buttons_img_45448.onload = cljs.core.clj__GT_js(((function (buttons_img_45448){
return (function (){
cljs.core.reset_BANG_(hello_world.util.button_sprite_sheet_width,buttons_img_45448.width);

cljs.core.reset_BANG_(hello_world.util.button_sprite_sheet_height,buttons_img_45448.height);

return hello_world.web_socket.start_web_socket_BANG_();
});})(buttons_img_45448))
);

buttons_img_45448.src = "images/control-buttons.png";
