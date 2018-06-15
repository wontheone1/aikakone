// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('hello_world.config');
goog.require('hello_world.game');
goog.require('hello_world.util');
goog.require('hello_world.web_socket');
goog.require('re_frame.core');
goog.require('reagent.core');
hello_world.components.table_header_style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"3em",cljs.core.cst$kw$font_DASH_weight,"700",cljs.core.cst$kw$color,"#fff",cljs.core.cst$kw$background_DASH_color,"rgba(238, 108, 77, 0.7)"], null)], null);
hello_world.components.table_body_style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"2em",cljs.core.cst$kw$color,"#696969"], null)], null);
hello_world.components.backend_url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hello_world.config.protocol_to_backend),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hello_world.config.backend_host)].join('');
hello_world.components.check_backend_health = (function hello_world$components$check_backend_health(){
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__){
return (function (state_45297){
var state_val_45298 = (state_45297[(1)]);
if((state_val_45298 === (1))){
var inst_45290 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hello_world.components.backend_url),"/health"].join('');
var inst_45291 = cljs_http.client.get(inst_45290);
var state_45297__$1 = state_45297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45297__$1,(2),inst_45291);
} else {
if((state_val_45298 === (2))){
var inst_45293 = (state_45297[(2)]);
var inst_45294 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_45293);
var inst_45295 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$backend_DASH_health_DASH_check_DASH_success,inst_45294], 0));
var state_45297__$1 = state_45297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45297__$1,inst_45295);
} else {
return null;
}
}
});})(c__34390__auto__))
;
return ((function (switch__34288__auto__,c__34390__auto__){
return (function() {
var hello_world$components$check_backend_health_$_state_machine__34289__auto__ = null;
var hello_world$components$check_backend_health_$_state_machine__34289__auto____0 = (function (){
var statearr_45299 = [null,null,null,null,null,null,null];
(statearr_45299[(0)] = hello_world$components$check_backend_health_$_state_machine__34289__auto__);

(statearr_45299[(1)] = (1));

return statearr_45299;
});
var hello_world$components$check_backend_health_$_state_machine__34289__auto____1 = (function (state_45297){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_45297);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e45300){if((e45300 instanceof Object)){
var ex__34292__auto__ = e45300;
var statearr_45301_45303 = state_45297;
(statearr_45301_45303[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45297);

return cljs.core.cst$kw$recur;
} else {
throw e45300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__45304 = state_45297;
state_45297 = G__45304;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
hello_world$components$check_backend_health_$_state_machine__34289__auto__ = function(state_45297){
switch(arguments.length){
case 0:
return hello_world$components$check_backend_health_$_state_machine__34289__auto____0.call(this);
case 1:
return hello_world$components$check_backend_health_$_state_machine__34289__auto____1.call(this,state_45297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
hello_world$components$check_backend_health_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$components$check_backend_health_$_state_machine__34289__auto____0;
hello_world$components$check_backend_health_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$components$check_backend_health_$_state_machine__34289__auto____1;
return hello_world$components$check_backend_health_$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__))
})();
var state__34392__auto__ = (function (){var statearr_45302 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_45302[(6)] = c__34390__auto__);

return statearr_45302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__))
);

return c__34390__auto__;
});
hello_world.components.go_back_to_game_button = (function hello_world$components$go_back_to_game_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$muiTheme,cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((MaterialUIStyles["DarkRawTheme"]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,"Play game",cljs.core.cst$kw$size,"large",cljs.core.cst$kw$on_DASH_click,(function (){
var G__45305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$game], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__45305) : re_frame.core.dispatch.call(null,G__45305));
})], null)], null)], null);
});
hello_world.components.ranking_dashboard = (function hello_world$components$ranking_dashboard(){
var c__34390__auto___45328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___45328){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___45328){
return (function (state_45317){
var state_val_45318 = (state_45317[(1)]);
if((state_val_45318 === (1))){
var inst_45306 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hello_world.components.backend_url),"/rankings"].join('');
var inst_45307 = cljs_http.client.get(inst_45306);
var state_45317__$1 = state_45317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45317__$1,(2),inst_45307);
} else {
if((state_val_45318 === (2))){
var inst_45309 = (state_45317[(2)]);
var inst_45310 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_45309);
var inst_45311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45312 = hello_world.util.parse_json(inst_45310);
var inst_45313 = [cljs.core.cst$kw$ranking,inst_45312];
var inst_45314 = (new cljs.core.PersistentVector(null,2,(5),inst_45311,inst_45313,null));
var inst_45315 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_45314) : re_frame.core.dispatch.call(null,inst_45314));
var state_45317__$1 = state_45317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45317__$1,inst_45315);
} else {
return null;
}
}
});})(c__34390__auto___45328))
;
return ((function (switch__34288__auto__,c__34390__auto___45328){
return (function() {
var hello_world$components$ranking_dashboard_$_state_machine__34289__auto__ = null;
var hello_world$components$ranking_dashboard_$_state_machine__34289__auto____0 = (function (){
var statearr_45319 = [null,null,null,null,null,null,null];
(statearr_45319[(0)] = hello_world$components$ranking_dashboard_$_state_machine__34289__auto__);

(statearr_45319[(1)] = (1));

return statearr_45319;
});
var hello_world$components$ranking_dashboard_$_state_machine__34289__auto____1 = (function (state_45317){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_45317);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e45320){if((e45320 instanceof Object)){
var ex__34292__auto__ = e45320;
var statearr_45321_45329 = state_45317;
(statearr_45321_45329[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45317);

return cljs.core.cst$kw$recur;
} else {
throw e45320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__45330 = state_45317;
state_45317 = G__45330;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
hello_world$components$ranking_dashboard_$_state_machine__34289__auto__ = function(state_45317){
switch(arguments.length){
case 0:
return hello_world$components$ranking_dashboard_$_state_machine__34289__auto____0.call(this);
case 1:
return hello_world$components$ranking_dashboard_$_state_machine__34289__auto____1.call(this,state_45317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
hello_world$components$ranking_dashboard_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$components$ranking_dashboard_$_state_machine__34289__auto____0;
hello_world$components$ranking_dashboard_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$components$ranking_dashboard_$_state_machine__34289__auto____1;
return hello_world$components$ranking_dashboard_$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___45328))
})();
var state__34392__auto__ = (function (){var statearr_45322 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_45322[(6)] = c__34390__auto___45328);

return statearr_45322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___45328))
);


var ranking = cljs.core.deref((function (){var G__45323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ranking], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45323) : re_frame.core.subscribe.call(null,G__45323));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_image,"url(\"images/ranking-board-bg.png\")",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$muiTheme,cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$palette,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_color,cljs_react_material_ui.core.color(cljs.core.cst$kw$grey600)], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"rgba(255, 255, 255, 0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$displaySelectAll,false,cljs.core.cst$kw$adjustForCheckbox,false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,hello_world.components.table_header_style,"Ranking"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,hello_world.components.table_header_style,"Time Record"], null)], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$displayRowCheckbox,false], null)], null),(function (){var iter__9690__auto__ = ((function (ranking){
return (function hello_world$components$ranking_dashboard_$_iter__45324(s__45325){
return (new cljs.core.LazySeq(null,((function (ranking){
return (function (){
var s__45325__$1 = s__45325;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__45325__$1);
if(temp__5457__auto__){
var s__45325__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45325__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__45325__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__45327 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__45326 = (0);
while(true){
if((i__45326 < size__9689__auto__)){
var rank = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__45326);
cljs.core.chunk_append(b__45327,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,hello_world.components.table_body_style,(rank + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,hello_world.components.table_body_style,(ranking.cljs$core$IFn$_invoke$arity$1 ? ranking.cljs$core$IFn$_invoke$arity$1(rank) : ranking.call(null,rank))], null)], null));

var G__45331 = (i__45326 + (1));
i__45326 = G__45331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45327),hello_world$components$ranking_dashboard_$_iter__45324(cljs.core.chunk_rest(s__45325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45327),null);
}
} else {
var rank = cljs.core.first(s__45325__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,hello_world.components.table_body_style,(rank + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,hello_world.components.table_body_style,(ranking.cljs$core$IFn$_invoke$arity$1 ? ranking.cljs$core$IFn$_invoke$arity$1(rank) : ranking.call(null,rank))], null)], null),hello_world$components$ranking_dashboard_$_iter__45324(cljs.core.rest(s__45325__$2)));
}
} else {
return null;
}
break;
}
});})(ranking))
,null,null));
});})(ranking))
;
return iter__9690__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ranking)));
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"flex-end"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.components.go_back_to_game_button], null)], null)], null);
});
hello_world.components.puzzle_selection_view = (function hello_world$components$puzzle_selection_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null),cljs.core.cst$kw$src,"images/puzzle-selection-bg.png",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$z_DASH_index,"2",cljs.core.cst$kw$right,"3%",cljs.core.cst$kw$bottom,"25%",cljs.core.cst$kw$width,"16%"], null),cljs.core.cst$kw$src,"images/speech-bubble.png"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45332){
var map__45333 = p__45332;
var map__45333__$1 = ((((!((map__45333 == null)))?((((map__45333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45333):map__45333);
var search_word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45333__$1,cljs.core.cst$kw$search_DASH_word);
var position_in_puzzle_selection_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45333__$1,cljs.core.cst$kw$position_DASH_in_DASH_puzzle_DASH_selection_DASH_view);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,search_word,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$z_DASH_index,"1",cljs.core.cst$kw$box_DASH_shadow,"7px 7px 5px grey",cljs.core.cst$kw$left,cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(position_in_puzzle_selection_view),cljs.core.cst$kw$top,cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(position_in_puzzle_selection_view)], null),cljs.core.cst$kw$src,(function (){var temp__5457__auto__ = cljs.core.deref((function (){var G__45335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_word_DASH__GT_game_DASH_img_DASH_url], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45335) : re_frame.core.subscribe.call(null,G__45335));
})());
if(cljs.core.truth_(temp__5457__auto__)){
var search_word__GT_game_img_url = temp__5457__auto__;
return (search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$2 ? search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$2(search_word,"") : search_word__GT_game_img_url.call(null,search_word,""));
} else {
return null;
}
})(),cljs.core.cst$kw$width,"20%",cljs.core.cst$kw$height,"26%",cljs.core.cst$kw$on_DASH_click,((function (map__45333,map__45333__$1,search_word,position_in_puzzle_selection_view){
return (function (){
return hello_world.util.show_game_BANG_(search_word);
});})(map__45333,map__45333__$1,search_word,position_in_puzzle_selection_view))
], null)], null);
}),hello_world.util.puzzle_images))], null);
});
hello_world.components.game_screen = (function hello_world$components$game_screen(search_word__GT_game_img_url,game_img){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return hello_world.game.start_game_BANG_((search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$1 ? search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$1(game_img) : search_word__GT_game_img_url.call(null,game_img)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chsk_DASH_send_DASH_fn_BANG_,hello_world.web_socket.chsk_send_BANG_,cljs.core.cst$kw$send_DASH_sprites_DASH_state_DASH_fn_BANG_,hello_world.web_socket.send_sprites_state_BANG_,cljs.core.cst$kw$send_DASH_puzzle_DASH_complete_DASH_fn_BANG_,hello_world.web_socket.send_puzzle_complete_BANG_,cljs.core.cst$kw$send_DASH_reset_DASH_fn_BANG_,hello_world.web_socket.send_reset_BANG_], null));
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_canvas], null);
})], null));
});
hello_world.components.app = (function hello_world$components$app(){
var search_word__GT_game_img_url = cljs.core.deref((function (){var G__45336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_word_DASH__GT_game_DASH_img_DASH_url], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45336) : re_frame.core.subscribe.call(null,G__45336));
})());
var game_img = cljs.core.deref((function (){var G__45337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_img], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45337) : re_frame.core.subscribe.call(null,G__45337));
})());
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game,cljs.core.deref((function (){var G__45339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45339) : re_frame.core.subscribe.call(null,G__45339));
})()));
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(hello_world.util.puzzle_images),cljs.core.count(search_word__GT_game_img_url));
if(and__8796__auto____$1){
if(cljs.core.truth_(search_word__GT_game_img_url)){
return typeof (search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$1 ? search_word__GT_game_img_url.cljs$core$IFn$_invoke$arity$1(game_img) : search_word__GT_game_img_url.call(null,game_img)) === 'string';
} else {
return null;
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hello_world.util.game_state,cljs.core.merge,hello_world.util.initial_game_state);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.components.game_screen,search_word__GT_game_img_url,game_img], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$intro,cljs.core.deref((function (){var G__45340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45340) : re_frame.core.subscribe.call(null,G__45340));
})()))){
hello_world.components.check_backend_health();

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$animation_DASH_direction,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$animation_DASH_duration,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$animation_DASH_iteration_DASH_count,cljs.core.cst$kw$animation_DASH_name,cljs.core.cst$kw$height],["alternate","20%","4","2s","50%","fixed","infinite","touchAnywhere","20%"]),cljs.core.cst$kw$src,"images/touch-anywhere.png",cljs.core.cst$kw$on_DASH_click,hello_world.util.show_puzzle_selection_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$background,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$z_DASH_index,"3"], null),cljs.core.cst$kw$src,"images/aikakone-intro.png",cljs.core.cst$kw$on_DASH_click,hello_world.util.show_puzzle_selection_BANG_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.components.puzzle_selection_view], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$puzzle_DASH_selection,cljs.core.deref((function (){var G__45341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45341) : re_frame.core.subscribe.call(null,G__45341));
})()))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"block"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.components.puzzle_selection_view], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ranking_DASH_dashboard,cljs.core.deref((function (){var G__45342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__45342) : re_frame.core.subscribe.call(null,G__45342));
})()))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.components.ranking_dashboard], null);
} else {
return null;
}
}
}
}
});
