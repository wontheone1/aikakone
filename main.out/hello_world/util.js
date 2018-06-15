// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_();
hello_world.util.puzzle_images = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_word,"tori",cljs.core.cst$kw$position_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"18.5%",cljs.core.cst$kw$top,"13.7%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_word,"Mannerheimintie",cljs.core.cst$kw$position_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"39.3%",cljs.core.cst$kw$top,"13.7%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_word,"Lapinlahdenkatu",cljs.core.cst$kw$position_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"60%",cljs.core.cst$kw$top,"13.7%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_word,"kamppi",cljs.core.cst$kw$position_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"18.5%",cljs.core.cst$kw$top,"43.8%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_word,"tuomiokirkko",cljs.core.cst$kw$position_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"39.3%",cljs.core.cst$kw$top,"43.8%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_word,"mustikka",cljs.core.cst$kw$position_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"60%",cljs.core.cst$kw$top,"43.8%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_word,"Rovaniemi",cljs.core.cst$kw$position_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"18.5%",cljs.core.cst$kw$top,"73.2%"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$search_DASH_word,"suomenlinna",cljs.core.cst$kw$position_DASH_in_DASH_puzzle_DASH_selection_DASH_view,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,"60%",cljs.core.cst$kw$top,"73.2%"], null)], null)], null);
hello_world.util.row_col_num = (5);
hello_world.util.parse_json = (function hello_world$util$parse_json(json_string){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(json_string));
});
hello_world.util.game = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hello_world.util.initial_game_state = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$play_DASH_button,cljs.core.cst$kw$control_DASH_buttons,cljs.core.cst$kw$stage_DASH_clear_DASH_text,cljs.core.cst$kw$play_DASH_time_DASH_text,cljs.core.cst$kw$play_DASH_time,cljs.core.cst$kw$puzzle_DASH_selection_DASH_button,cljs.core.cst$kw$audio_DASH_on_QMARK_,cljs.core.cst$kw$sprites_DASH_state,cljs.core.cst$kw$puzzle_DASH_width_DASH_height,cljs.core.cst$kw$control_DASH_button_DASH_tweens,cljs.core.cst$kw$game_DASH_play_DASH_state,cljs.core.cst$kw$sprites,cljs.core.cst$kw$see_DASH_ranking_DASH_button],[null,cljs.core.PersistentArrayMap.EMPTY,null,null,0.0,null,false,cljs.core.PersistentArrayMap.EMPTY,(0),cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$before_DASH_started,cljs.core.PersistentArrayMap.EMPTY,null]);
if(typeof hello_world.util.game_state !== 'undefined'){
} else {
hello_world.util.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hello_world.util.initial_game_state);
}
hello_world.util.set_game_play_state_BANG_ = (function hello_world$util$set_game_play_state_BANG_(play_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$game_DASH_play_DASH_state,play_state);
});
hello_world.util.set_puzzle_width_height_in_relation_to_window_size_BANG_ = (function hello_world$util$set_puzzle_width_height_in_relation_to_window_size_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$puzzle_DASH_width_DASH_height,((0.7 * (function (){var x__9167__auto__ = window.innerWidth;
var y__9168__auto__ = window.innerHeight;
return ((x__9167__auto__ < y__9168__auto__) ? x__9167__auto__ : y__9168__auto__);
})()) | (0)));
});
hello_world.util.puzzle_image_width = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hello_world.util.puzzle_image_height = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hello_world.util.button_sprite_sheet_width = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hello_world.util.button_sprite_sheet_height = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hello_world.util.get_button_width = (function hello_world$util$get_button_width(){
return (cljs.core.deref(hello_world.util.button_sprite_sheet_width) / (2));
});
hello_world.util.get_button_height = (function hello_world$util$get_button_height(){
return (cljs.core.deref(hello_world.util.button_sprite_sheet_height) / (3));
});
hello_world.util.left_margin = (function hello_world$util$left_margin(){
return ((window.innerWidth - cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state))) / (2));
});
hello_world.util.top_margin = (function hello_world$util$top_margin(){
return ((window.innerHeight - cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state))) / (2));
});
hello_world.util.get_piece_width_height = (function hello_world$util$get_piece_width_height(puzzle_width_height){
return (puzzle_width_height / hello_world.util.row_col_num);
});
hello_world.util.get_scale_for_same_size_as_piece = (function hello_world$util$get_scale_for_same_size_as_piece(){
return (hello_world.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state))) / hello_world.util.get_button_height());
});
hello_world.util.show_control_button_and_tween_scale_BANG_ = (function hello_world$util$show_control_button_and_tween_scale_BANG_(control_button){
var control_button_scale = hello_world.util.get_scale_for_same_size_as_piece();
var tween = cljs.core.deref(hello_world.util.game).add.tween(control_button.scale);
control_button.scale.setTo((0.9 * control_button_scale),(0.9 * control_button_scale));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(hello_world.util.game_state,cljs.core.update,cljs.core.cst$kw$control_DASH_button_DASH_tweens,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tween], 0));

return tween.to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,control_button_scale,cljs.core.cst$kw$y,control_button_scale], null)),(1000),Phaser.Easing.Linear.None,true,(0),(-1),true);
});
hello_world.util.currently_playing_game_QMARK_ = (function hello_world$util$currently_playing_game_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_play_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)),cljs.core.cst$kw$playing);
});
hello_world.util.puzzle_solved_QMARK_ = (function hello_world$util$puzzle_solved_QMARK_(){
var sprites_state = cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state));
var row_flipped_QMARK_ = cljs.core.cst$kw$row_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state);
var col_flipped_QMARK_ = cljs.core.cst$kw$col_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state);
var diagonal_flipped_QMARK_ = cljs.core.cst$kw$diagonal_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state);
return ((cljs.core.every_QMARK_(((function (sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_){
return (function (p1__40171_SHARP_){
return cljs.core.val(p1__40171_SHARP_) === false;
});})(sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_))
,row_flipped_QMARK_)) && (cljs.core.every_QMARK_(((function (sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_){
return (function (p1__40172_SHARP_){
return cljs.core.val(p1__40172_SHARP_) === false;
});})(sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_))
,col_flipped_QMARK_)) && (diagonal_flipped_QMARK_ === false)) || ((cljs.core.every_QMARK_(((function (sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_){
return (function (p1__40173_SHARP_){
return cljs.core.val(p1__40173_SHARP_) === true;
});})(sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_))
,row_flipped_QMARK_)) && (cljs.core.every_QMARK_(((function (sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_){
return (function (p1__40174_SHARP_){
return cljs.core.val(p1__40174_SHARP_) === true;
});})(sprites_state,row_flipped_QMARK_,col_flipped_QMARK_,diagonal_flipped_QMARK_))
,col_flipped_QMARK_)) && (diagonal_flipped_QMARK_ === false));
});
hello_world.util.show_play_button_BANG_ = (function hello_world$util$show_play_button_BANG_(){
return cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).scale.setTo((1),(1));
});
hello_world.util.hide_play_button_BANG_ = (function hello_world$util$hide_play_button_BANG_(){
return cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).scale.setTo((0),(0));
});
hello_world.util.make_congrat_message_BANG_ = (function hello_world$util$make_congrat_message_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$stage_DASH_clear_DASH_text,cljs.core.deref(hello_world.util.game).add.text((window.innerWidth / (5)),(window.innerHeight / (20)),"Congrats!\n You cleared the puzzle!",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font,"70px Arial",cljs.core.cst$kw$fill,"#FFDAB9",cljs.core.cst$kw$align,"center"], null))));

return cljs.core.cst$kw$stage_DASH_clear_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).setShadow((3),(3),"rgba(0,0,0,0.5)",(5));
});
hello_world.util.show_congrat_message_BANG_ = (function hello_world$util$show_congrat_message_BANG_(){
return cljs.core.cst$kw$stage_DASH_clear_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).visible = true;
});
hello_world.util.show_see_ranking_button_BANG_ = (function hello_world$util$show_see_ranking_button_BANG_(){
return cljs.core.cst$kw$see_DASH_ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).scale.setTo(0.5,0.5);
});
hello_world.util.hide_see_ranking_button_BANG_ = (function hello_world$util$hide_see_ranking_button_BANG_(){
return cljs.core.cst$kw$see_DASH_ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).scale.setTo((0),(0));
});
hello_world.util.make_see_ranking_button_BANG_ = (function hello_world$util$make_see_ranking_button_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$see_DASH_ranking_DASH_button,(function (){var this$ = this;
return cljs.core.deref(hello_world.util.game).add.button((0.75 * window.innerWidth),(0.2 * window.innerHeight),"see-ranking-button",((function (this$){
return (function (){
var G__40175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$ranking_DASH_dashboard], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40175) : re_frame.core.dispatch.call(null,G__40175));
});})(this$))
,this$);
})());

return hello_world.util.show_see_ranking_button_BANG_();
});
hello_world.util.make_puzzle_selection_button_BANG_ = (function hello_world$util$make_puzzle_selection_button_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$puzzle_DASH_selection_DASH_button,(function (){var this$ = this;
return cljs.core.deref(hello_world.util.game).add.button((0.75 * window.innerWidth),(0.5 * window.innerHeight),"puzzle-selection-button",((function (this$){
return (function (){
var G__40176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$puzzle_DASH_selection], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40176) : re_frame.core.dispatch.call(null,G__40176));
});})(this$))
,this$);
})());
});
hello_world.util.set_on_click_callback_for_sprite_BANG_ = (function hello_world$util$set_on_click_callback_for_sprite_BANG_(sprite,callback_fn){
sprite.inputEnabled = true;

return sprite.events.onInputDown.add(callback_fn);
});
hello_world.util.show_game_BANG_ = (function hello_world$util$show_game_BANG_(search_word){
var G__40177_40179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_game_DASH_img,search_word], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40177_40179) : re_frame.core.dispatch.call(null,G__40177_40179));

var G__40178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$game], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40178) : re_frame.core.dispatch.call(null,G__40178));
});
hello_world.util.show_puzzle_selection_BANG_ = (function hello_world$util$show_puzzle_selection_BANG_(){
var G__40180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$screen_DASH_change,cljs.core.cst$kw$puzzle_DASH_selection], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40180) : re_frame.core.dispatch.call(null,G__40180));
});
hello_world.util.show_reset_button_BANG_ = (function hello_world$util$show_reset_button_BANG_(){
return cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).scale.setTo(0.1,0.1);
});
hello_world.util.hide_reset_button_BANG_ = (function hello_world$util$hide_reset_button_BANG_(){
return cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).scale.setTo((0),(0));
});
hello_world.util.hide_control_buttons_BANG_ = (function hello_world$util$hide_control_buttons_BANG_(){
var seq__40181_40195 = cljs.core.seq(cljs.core.cst$kw$control_DASH_button_DASH_tweens.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
var chunk__40182_40196 = null;
var count__40183_40197 = (0);
var i__40184_40198 = (0);
while(true){
if((i__40184_40198 < count__40183_40197)){
var control_button_tween_40199 = chunk__40182_40196.cljs$core$IIndexed$_nth$arity$2(null,i__40184_40198);
control_button_tween_40199.stop();

var G__40200 = seq__40181_40195;
var G__40201 = chunk__40182_40196;
var G__40202 = count__40183_40197;
var G__40203 = (i__40184_40198 + (1));
seq__40181_40195 = G__40200;
chunk__40182_40196 = G__40201;
count__40183_40197 = G__40202;
i__40184_40198 = G__40203;
continue;
} else {
var temp__5457__auto___40204 = cljs.core.seq(seq__40181_40195);
if(temp__5457__auto___40204){
var seq__40181_40205__$1 = temp__5457__auto___40204;
if(cljs.core.chunked_seq_QMARK_(seq__40181_40205__$1)){
var c__9739__auto___40206 = cljs.core.chunk_first(seq__40181_40205__$1);
var G__40207 = cljs.core.chunk_rest(seq__40181_40205__$1);
var G__40208 = c__9739__auto___40206;
var G__40209 = cljs.core.count(c__9739__auto___40206);
var G__40210 = (0);
seq__40181_40195 = G__40207;
chunk__40182_40196 = G__40208;
count__40183_40197 = G__40209;
i__40184_40198 = G__40210;
continue;
} else {
var control_button_tween_40211 = cljs.core.first(seq__40181_40205__$1);
control_button_tween_40211.stop();

var G__40212 = cljs.core.next(seq__40181_40205__$1);
var G__40213 = null;
var G__40214 = (0);
var G__40215 = (0);
seq__40181_40195 = G__40212;
chunk__40182_40196 = G__40213;
count__40183_40197 = G__40214;
i__40184_40198 = G__40215;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$control_DASH_button_DASH_tweens,cljs.core.PersistentVector.EMPTY);

var seq__40185 = cljs.core.seq(cljs.core.cst$kw$control_DASH_buttons.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
var chunk__40186 = null;
var count__40187 = (0);
var i__40188 = (0);
while(true){
if((i__40188 < count__40187)){
var vec__40189 = chunk__40186.cljs$core$IIndexed$_nth$arity$2(null,i__40188);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40189,(0),null);
var control_button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40189,(1),null);
control_button.scale.setTo((0),(0));

var G__40216 = seq__40185;
var G__40217 = chunk__40186;
var G__40218 = count__40187;
var G__40219 = (i__40188 + (1));
seq__40185 = G__40216;
chunk__40186 = G__40217;
count__40187 = G__40218;
i__40188 = G__40219;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40185);
if(temp__5457__auto__){
var seq__40185__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40185__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40185__$1);
var G__40220 = cljs.core.chunk_rest(seq__40185__$1);
var G__40221 = c__9739__auto__;
var G__40222 = cljs.core.count(c__9739__auto__);
var G__40223 = (0);
seq__40185 = G__40220;
chunk__40186 = G__40221;
count__40187 = G__40222;
i__40188 = G__40223;
continue;
} else {
var vec__40192 = cljs.core.first(seq__40185__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40192,(0),null);
var control_button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40192,(1),null);
control_button.scale.setTo((0),(0));

var G__40224 = cljs.core.next(seq__40185__$1);
var G__40225 = null;
var G__40226 = (0);
var G__40227 = (0);
seq__40185 = G__40224;
chunk__40186 = G__40225;
count__40187 = G__40226;
i__40188 = G__40227;
continue;
}
} else {
return null;
}
}
break;
}
});
hello_world.util.show_control_buttons_BANG_ = (function hello_world$util$show_control_buttons_BANG_(){
var seq__40228 = cljs.core.seq(cljs.core.cst$kw$control_DASH_buttons.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
var chunk__40229 = null;
var count__40230 = (0);
var i__40231 = (0);
while(true){
if((i__40231 < count__40230)){
var vec__40232 = chunk__40229.cljs$core$IIndexed$_nth$arity$2(null,i__40231);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40232,(0),null);
var control_button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40232,(1),null);
hello_world.util.show_control_button_and_tween_scale_BANG_(control_button);

var G__40238 = seq__40228;
var G__40239 = chunk__40229;
var G__40240 = count__40230;
var G__40241 = (i__40231 + (1));
seq__40228 = G__40238;
chunk__40229 = G__40239;
count__40230 = G__40240;
i__40231 = G__40241;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40228);
if(temp__5457__auto__){
var seq__40228__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40228__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40228__$1);
var G__40242 = cljs.core.chunk_rest(seq__40228__$1);
var G__40243 = c__9739__auto__;
var G__40244 = cljs.core.count(c__9739__auto__);
var G__40245 = (0);
seq__40228 = G__40242;
chunk__40229 = G__40243;
count__40230 = G__40244;
i__40231 = G__40245;
continue;
} else {
var vec__40235 = cljs.core.first(seq__40228__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40235,(0),null);
var control_button = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40235,(1),null);
hello_world.util.show_control_button_and_tween_scale_BANG_(control_button);

var G__40246 = cljs.core.next(seq__40228__$1);
var G__40247 = null;
var G__40248 = (0);
var G__40249 = (0);
seq__40228 = G__40246;
chunk__40229 = G__40247;
count__40230 = G__40248;
i__40231 = G__40249;
continue;
}
} else {
return null;
}
}
break;
}
});
hello_world.util.finish_game_when_puzzle_is_complete_BANG_ = (function hello_world$util$finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_){
if(cljs.core.truth_((function (){var and__8796__auto__ = hello_world.util.currently_playing_game_QMARK_();
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = hello_world.util.puzzle_solved_QMARK_();
if(cljs.core.truth_(and__8796__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$stage_DASH_clear_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).visible);
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
hello_world.util.set_game_play_state_BANG_(cljs.core.cst$kw$solved);

hello_world.util.hide_reset_button_BANG_();

hello_world.util.hide_control_buttons_BANG_();

hello_world.util.show_play_button_BANG_();

hello_world.util.show_see_ranking_button_BANG_();

hello_world.util.show_congrat_message_BANG_();

var G__40250_40251 = cljs.core.cst$kw$play_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state));
(send_puzzle_complete_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_puzzle_complete_fn_BANG_.cljs$core$IFn$_invoke$arity$1(G__40250_40251) : send_puzzle_complete_fn_BANG_.call(null,G__40250_40251));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$sprites_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
});
hello_world.util.get_puzzle_image_width = (function hello_world$util$get_puzzle_image_width(){
return cljs.core.deref(hello_world.util.game).cache.getImage("puzzle").width;
});
hello_world.util.get_puzzle_image_height = (function hello_world$util$get_puzzle_image_height(){
return cljs.core.deref(hello_world.util.game).cache.getImage("puzzle").height;
});
hello_world.util.get_piece_x_scale = (function hello_world$util$get_piece_x_scale(){
return (cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)) / hello_world.util.get_puzzle_image_width());
});
hello_world.util.get_piece_y_scale = (function hello_world$util$get_piece_y_scale(){
return (cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)) / hello_world.util.get_puzzle_image_height());
});
hello_world.util.initial_sprites_state_per_piece = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40252_SHARP_,p2__40253_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40252_SHARP_,p2__40253_SHARP_,false);
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9690__auto__ = (function hello_world$util$iter__40254(s__40255){
return (new cljs.core.LazySeq(null,(function (){
var s__40255__$1 = s__40255;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__40255__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var row = cljs.core.first(xs__6012__auto__);
var iterys__9686__auto__ = ((function (s__40255__$1,row,xs__6012__auto__,temp__5457__auto__){
return (function hello_world$util$iter__40254_$_iter__40256(s__40257){
return (new cljs.core.LazySeq(null,((function (s__40255__$1,row,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__40257__$1 = s__40257;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__40257__$1);
if(temp__5457__auto____$1){
var s__40257__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40257__$2)){
var c__9688__auto__ = cljs.core.chunk_first(s__40257__$2);
var size__9689__auto__ = cljs.core.count(c__9688__auto__);
var b__40259 = cljs.core.chunk_buffer(size__9689__auto__);
if((function (){var i__40258 = (0);
while(true){
if((i__40258 < size__9689__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9688__auto__,i__40258);
cljs.core.chunk_append(b__40259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

var G__40260 = (i__40258 + (1));
i__40258 = G__40260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40259),hello_world$util$iter__40254_$_iter__40256(cljs.core.chunk_rest(s__40257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40259),null);
}
} else {
var col = cljs.core.first(s__40257__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),hello_world$util$iter__40254_$_iter__40256(cljs.core.rest(s__40257__$2)));
}
} else {
return null;
}
break;
}
});})(s__40255__$1,row,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__40255__$1,row,xs__6012__auto__,temp__5457__auto__))
;
var fs__9687__auto__ = cljs.core.seq(iterys__9686__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num)));
if(fs__9687__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__9687__auto__,hello_world$util$iter__40254(cljs.core.rest(s__40255__$1)));
} else {
var G__40261 = cljs.core.rest(s__40255__$1);
s__40255__$1 = G__40261;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9690__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
})());
hello_world.util.synchronize_puzzle_board_BANG_ = (function hello_world$util$synchronize_puzzle_board_BANG_(sprites_state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$sprites_DASH_state,sprites_state);

var game_object_factory = cljs.core.deref(hello_world.util.game).add;
var derefed_state = cljs.core.deref(hello_world.util.game_state);
var row_flips_applied = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (game_object_factory,derefed_state){
return (function (sprites_state_in_modification,p__40262){
var vec__40263 = p__40262;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263,(0),null);
var flipped_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__40263,row,flipped_QMARK_,game_object_factory,derefed_state){
return (function (sprites_state__$1,col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sprites_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),(cljs.core.truth_(flipped_QMARK_)?cljs.core.not:cljs.core.identity));
});})(vec__40263,row,flipped_QMARK_,game_object_factory,derefed_state))
,sprites_state_in_modification,cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
});})(game_object_factory,derefed_state))
,hello_world.util.initial_sprites_state_per_piece,cljs.core.cst$kw$row_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state));
var col_flips_applied = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (game_object_factory,derefed_state,row_flips_applied){
return (function (sprites_state_in_modification,p__40266){
var vec__40267 = p__40266;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(0),null);
var flipped_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40267,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__40267,col,flipped_QMARK_,game_object_factory,derefed_state,row_flips_applied){
return (function (sprites_state__$1,row){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sprites_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),(cljs.core.truth_(flipped_QMARK_)?cljs.core.not:cljs.core.identity));
});})(vec__40267,col,flipped_QMARK_,game_object_factory,derefed_state,row_flips_applied))
,sprites_state_in_modification,cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
});})(game_object_factory,derefed_state,row_flips_applied))
,row_flips_applied,cljs.core.cst$kw$col_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state));
var diagonal_flip_applied = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (game_object_factory,derefed_state,row_flips_applied,col_flips_applied){
return (function (sprites_state_in_modification,row_col){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(sprites_state_in_modification,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((hello_world.util.row_col_num - (1)) - row_col),row_col], null),(cljs.core.truth_(cljs.core.cst$kw$diagonal_DASH_flipped_QMARK_.cljs$core$IFn$_invoke$arity$1(sprites_state))?cljs.core.not:cljs.core.identity));
});})(game_object_factory,derefed_state,row_flips_applied,col_flips_applied))
,col_flips_applied,cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
var sprites = cljs.core.cst$kw$sprites.cljs$core$IFn$_invoke$arity$1(derefed_state);
var piece_x_scale = hello_world.util.get_piece_x_scale();
var piece_y_scale = hello_world.util.get_piece_y_scale();
var seq__40270 = cljs.core.seq(diagonal_flip_applied);
var chunk__40271 = null;
var count__40272 = (0);
var i__40273 = (0);
while(true){
if((i__40273 < count__40272)){
var vec__40274 = chunk__40271.cljs$core$IIndexed$_nth$arity$2(null,i__40273);
var vec__40277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40274,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40277,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40277,(1),null);
var sprite_flipped_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40274,(1),null);
var piece_scale_40288 = (function (){var G__40280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (sprites.cljs$core$IFn$_invoke$arity$1 ? sprites.cljs$core$IFn$_invoke$arity$1(G__40280) : sprites.call(null,G__40280));
})().scale;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,sprite_flipped_state)){
game_object_factory.tween(piece_scale_40288).to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,piece_x_scale,cljs.core.cst$kw$y,piece_y_scale], null)),(500),Phaser.Easing.Linear.None,true);
} else {
game_object_factory.tween(piece_scale_40288).to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null)),(500),Phaser.Easing.Linear.None,true);
}

var G__40289 = seq__40270;
var G__40290 = chunk__40271;
var G__40291 = count__40272;
var G__40292 = (i__40273 + (1));
seq__40270 = G__40289;
chunk__40271 = G__40290;
count__40272 = G__40291;
i__40273 = G__40292;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40270);
if(temp__5457__auto__){
var seq__40270__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40270__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40270__$1);
var G__40293 = cljs.core.chunk_rest(seq__40270__$1);
var G__40294 = c__9739__auto__;
var G__40295 = cljs.core.count(c__9739__auto__);
var G__40296 = (0);
seq__40270 = G__40293;
chunk__40271 = G__40294;
count__40272 = G__40295;
i__40273 = G__40296;
continue;
} else {
var vec__40281 = cljs.core.first(seq__40270__$1);
var vec__40284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40281,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40284,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40284,(1),null);
var sprite_flipped_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40281,(1),null);
var piece_scale_40297 = (function (){var G__40287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (sprites.cljs$core$IFn$_invoke$arity$1 ? sprites.cljs$core$IFn$_invoke$arity$1(G__40287) : sprites.call(null,G__40287));
})().scale;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,sprite_flipped_state)){
game_object_factory.tween(piece_scale_40297).to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,piece_x_scale,cljs.core.cst$kw$y,piece_y_scale], null)),(500),Phaser.Easing.Linear.None,true);
} else {
game_object_factory.tween(piece_scale_40297).to(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null)),(500),Phaser.Easing.Linear.None,true);
}

var G__40298 = cljs.core.next(seq__40270__$1);
var G__40299 = null;
var G__40300 = (0);
var G__40301 = (0);
seq__40270 = G__40298;
chunk__40271 = G__40299;
count__40272 = G__40300;
i__40273 = G__40301;
continue;
}
} else {
return null;
}
}
break;
}
});
hello_world.util.hide_all_puzzle_pieces_BANG_ = (function hello_world$util$hide_all_puzzle_pieces_BANG_(){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$row_DASH_flipped_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40302_SHARP_,p2__40303_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40302_SHARP_,p2__40303_SHARP_,true);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num)),cljs.core.cst$kw$col_DASH_flipped_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40304_SHARP_,p2__40305_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40304_SHARP_,p2__40305_SHARP_,false);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num)),cljs.core.cst$kw$diagonal_DASH_flipped_QMARK_,false], null));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$sprites_DASH_state,null);
});
hello_world.util.hide_play_time_BANG_ = (function hello_world$util$hide_play_time_BANG_(){
return cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).visible = false;
});
hello_world.util.reset_game_BANG_ = (function hello_world$util$reset_game_BANG_(){
hello_world.util.hide_all_puzzle_pieces_BANG_();

hello_world.util.hide_control_buttons_BANG_();

hello_world.util.hide_play_time_BANG_();

hello_world.util.set_game_play_state_BANG_(cljs.core.cst$kw$before_DASH_started);

hello_world.util.show_play_button_BANG_();

return hello_world.util.show_see_ranking_button_BANG_();
});
hello_world.util.make_reset_button_BANG_ = (function hello_world$util$make_reset_button_BANG_(send_reset_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$reset_DASH_button,(function (){var this$ = this;
return cljs.core.deref(hello_world.util.game).add.button((0.85 * window.innerWidth),(0.3 * window.innerHeight),"reset-button",((function (this$){
return (function (){
hello_world.util.reset_game_BANG_();

return (send_reset_fn.cljs$core$IFn$_invoke$arity$0 ? send_reset_fn.cljs$core$IFn$_invoke$arity$0() : send_reset_fn.call(null));
});})(this$))
,this$);
})());

return hello_world.util.hide_reset_button_BANG_();
});
hello_world.util.make_audio_button_BANG_ = (function hello_world$util$make_audio_button_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$audio_DASH_button,(function (){var this$ = this;
return cljs.core.deref(hello_world.util.game).add.button((0.85 * window.innerWidth),(0.5 * window.innerHeight),"audio-button",((function (this$){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.update,cljs.core.cst$kw$audio_DASH_on_QMARK_,cljs.core.not);
});})(this$))
,this$);
})());
});
hello_world.util.hide_stage_clear_text_BANG_ = (function hello_world$util$hide_stage_clear_text_BANG_(){
return cljs.core.cst$kw$stage_DASH_clear_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).visible = false;
});
hello_world.util.make_play_time_BANG_ = (function hello_world$util$make_play_time_BANG_(){
if(cljs.core.truth_(cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$play_DASH_time_DASH_text,cljs.core.deref(hello_world.util.game).add.text((window.innerWidth * 0.8),(window.innerHeight / (20)),"0.000",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font,"60px Arial",cljs.core.cst$kw$fill,"#ffffff",cljs.core.cst$kw$align,"center"], null))));
}
});
hello_world.util.show_play_time_BANG_ = (function hello_world$util$show_play_time_BANG_(){
return cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)).visible = true;
});
hello_world.util.update_play_time_to_current_time_BANG_ = (function hello_world$util$update_play_time_to_current_time_BANG_(play_time){
var derefed_state = cljs.core.deref(hello_world.util.game_state);
var play_time_in_sec = (play_time / (1000));
cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).setText([cljs.core.str.cljs$core$IFn$_invoke$arity$1(play_time_in_sec)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$play_DASH_time,play_time_in_sec);
});
hello_world.util.reposition_puzzle_piece_BANG_ = (function hello_world$util$reposition_puzzle_piece_BANG_(p__40306){
var map__40307 = p__40306;
var map__40307__$1 = ((((!((map__40307 == null)))?((((map__40307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40307):map__40307);
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40307__$1,cljs.core.cst$kw$x_DASH_pos);
var y_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40307__$1,cljs.core.cst$kw$y_DASH_pos);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40307__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40307__$1,cljs.core.cst$kw$col);
var piece = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hello_world.util.game_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null));
if(cljs.core.truth_(piece)){
piece.x = x_pos;

return piece.y = y_pos;
} else {
return null;
}
});
hello_world.util.reposition_control_button_BANG_ = (function hello_world$util$reposition_control_button_BANG_(row,col,x_pos,y_pos,piece_width_height){
if(((col === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(hello_world.util.row_col_num - (1))))){
var control_button_40327 = (function (){var G__40312 = cljs.core.cst$kw$bottom_DASH_left;
var fexpr__40311 = (function (){var G__40314 = cljs.core.cst$kw$control_DASH_buttons;
var fexpr__40313 = cljs.core.deref(hello_world.util.game_state);
return (fexpr__40313.cljs$core$IFn$_invoke$arity$1 ? fexpr__40313.cljs$core$IFn$_invoke$arity$1(G__40314) : fexpr__40313.call(null,G__40314));
})();
return (fexpr__40311.cljs$core$IFn$_invoke$arity$1 ? fexpr__40311.cljs$core$IFn$_invoke$arity$1(G__40312) : fexpr__40311.call(null,G__40312));
})();
if(cljs.core.truth_(control_button_40327)){
control_button_40327.x = (x_pos - piece_width_height);

control_button_40327.y = (y_pos + piece_width_height);
} else {
}
} else {
}

if((col === (0))){
var control_button_40328 = (function (){var G__40318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row], null);
var fexpr__40317 = (function (){var G__40320 = cljs.core.cst$kw$control_DASH_buttons;
var fexpr__40319 = cljs.core.deref(hello_world.util.game_state);
return (fexpr__40319.cljs$core$IFn$_invoke$arity$1 ? fexpr__40319.cljs$core$IFn$_invoke$arity$1(G__40320) : fexpr__40319.call(null,G__40320));
})();
return (fexpr__40317.cljs$core$IFn$_invoke$arity$1 ? fexpr__40317.cljs$core$IFn$_invoke$arity$1(G__40318) : fexpr__40317.call(null,G__40318));
})();
if(cljs.core.truth_(control_button_40328)){
control_button_40328.x = (x_pos - piece_width_height);

control_button_40328.y = y_pos;
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(hello_world.util.row_col_num - (1)))){
var control_button = (function (){var G__40324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col], null);
var fexpr__40323 = (function (){var G__40326 = cljs.core.cst$kw$control_DASH_buttons;
var fexpr__40325 = cljs.core.deref(hello_world.util.game_state);
return (fexpr__40325.cljs$core$IFn$_invoke$arity$1 ? fexpr__40325.cljs$core$IFn$_invoke$arity$1(G__40326) : fexpr__40325.call(null,G__40326));
})();
return (fexpr__40323.cljs$core$IFn$_invoke$arity$1 ? fexpr__40323.cljs$core$IFn$_invoke$arity$1(G__40324) : fexpr__40323.call(null,G__40324));
})();
if(cljs.core.truth_(control_button)){
control_button.x = x_pos;

return control_button.y = (y_pos + piece_width_height);
} else {
return null;
}
} else {
return null;
}
});
hello_world.util.position_controls_and_puzzle_pieces_BANG_ = (function hello_world$util$position_controls_and_puzzle_pieces_BANG_(){
var seq__40329 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
var chunk__40336 = null;
var count__40337 = (0);
var i__40338 = (0);
while(true){
if((i__40338 < count__40337)){
var row = chunk__40336.cljs$core$IIndexed$_nth$arity$2(null,i__40338);
var seq__40339_40345 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
var chunk__40341_40346 = null;
var count__40342_40347 = (0);
var i__40343_40348 = (0);
while(true){
if((i__40343_40348 < count__40342_40347)){
var col_40349 = chunk__40341_40346.cljs$core$IIndexed$_nth$arity$2(null,i__40343_40348);
var piece_width_height_40350 = hello_world.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
var x_pos_40351 = (((piece_width_height_40350 * col_40349) + hello_world.util.left_margin()) + col_40349);
var y_pos_40352 = (((piece_width_height_40350 * row) + hello_world.util.top_margin()) + row);
hello_world.util.reposition_puzzle_piece_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x_DASH_pos,x_pos_40351,cljs.core.cst$kw$y_DASH_pos,y_pos_40352,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40349], null));

hello_world.util.reposition_control_button_BANG_(row,col_40349,x_pos_40351,y_pos_40352,piece_width_height_40350);

var G__40353 = seq__40339_40345;
var G__40354 = chunk__40341_40346;
var G__40355 = count__40342_40347;
var G__40356 = (i__40343_40348 + (1));
seq__40339_40345 = G__40353;
chunk__40341_40346 = G__40354;
count__40342_40347 = G__40355;
i__40343_40348 = G__40356;
continue;
} else {
var temp__5457__auto___40357 = cljs.core.seq(seq__40339_40345);
if(temp__5457__auto___40357){
var seq__40339_40358__$1 = temp__5457__auto___40357;
if(cljs.core.chunked_seq_QMARK_(seq__40339_40358__$1)){
var c__9739__auto___40359 = cljs.core.chunk_first(seq__40339_40358__$1);
var G__40360 = cljs.core.chunk_rest(seq__40339_40358__$1);
var G__40361 = c__9739__auto___40359;
var G__40362 = cljs.core.count(c__9739__auto___40359);
var G__40363 = (0);
seq__40339_40345 = G__40360;
chunk__40341_40346 = G__40361;
count__40342_40347 = G__40362;
i__40343_40348 = G__40363;
continue;
} else {
var col_40364 = cljs.core.first(seq__40339_40358__$1);
var piece_width_height_40365 = hello_world.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
var x_pos_40366 = (((piece_width_height_40365 * col_40364) + hello_world.util.left_margin()) + col_40364);
var y_pos_40367 = (((piece_width_height_40365 * row) + hello_world.util.top_margin()) + row);
hello_world.util.reposition_puzzle_piece_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x_DASH_pos,x_pos_40366,cljs.core.cst$kw$y_DASH_pos,y_pos_40367,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40364], null));

hello_world.util.reposition_control_button_BANG_(row,col_40364,x_pos_40366,y_pos_40367,piece_width_height_40365);

var G__40368 = cljs.core.next(seq__40339_40358__$1);
var G__40369 = null;
var G__40370 = (0);
var G__40371 = (0);
seq__40339_40345 = G__40368;
chunk__40341_40346 = G__40369;
count__40342_40347 = G__40370;
i__40343_40348 = G__40371;
continue;
}
} else {
}
}
break;
}

var G__40372 = seq__40329;
var G__40373 = chunk__40336;
var G__40374 = count__40337;
var G__40375 = (i__40338 + (1));
seq__40329 = G__40372;
chunk__40336 = G__40373;
count__40337 = G__40374;
i__40338 = G__40375;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40329);
if(temp__5457__auto__){
var seq__40329__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40329__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40329__$1);
var G__40376 = cljs.core.chunk_rest(seq__40329__$1);
var G__40377 = c__9739__auto__;
var G__40378 = cljs.core.count(c__9739__auto__);
var G__40379 = (0);
seq__40329 = G__40376;
chunk__40336 = G__40377;
count__40337 = G__40378;
i__40338 = G__40379;
continue;
} else {
var row = cljs.core.first(seq__40329__$1);
var seq__40330_40380 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
var chunk__40332_40381 = null;
var count__40333_40382 = (0);
var i__40334_40383 = (0);
while(true){
if((i__40334_40383 < count__40333_40382)){
var col_40384 = chunk__40332_40381.cljs$core$IIndexed$_nth$arity$2(null,i__40334_40383);
var piece_width_height_40385 = hello_world.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
var x_pos_40386 = (((piece_width_height_40385 * col_40384) + hello_world.util.left_margin()) + col_40384);
var y_pos_40387 = (((piece_width_height_40385 * row) + hello_world.util.top_margin()) + row);
hello_world.util.reposition_puzzle_piece_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x_DASH_pos,x_pos_40386,cljs.core.cst$kw$y_DASH_pos,y_pos_40387,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40384], null));

hello_world.util.reposition_control_button_BANG_(row,col_40384,x_pos_40386,y_pos_40387,piece_width_height_40385);

var G__40388 = seq__40330_40380;
var G__40389 = chunk__40332_40381;
var G__40390 = count__40333_40382;
var G__40391 = (i__40334_40383 + (1));
seq__40330_40380 = G__40388;
chunk__40332_40381 = G__40389;
count__40333_40382 = G__40390;
i__40334_40383 = G__40391;
continue;
} else {
var temp__5457__auto___40392__$1 = cljs.core.seq(seq__40330_40380);
if(temp__5457__auto___40392__$1){
var seq__40330_40393__$1 = temp__5457__auto___40392__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40330_40393__$1)){
var c__9739__auto___40394 = cljs.core.chunk_first(seq__40330_40393__$1);
var G__40395 = cljs.core.chunk_rest(seq__40330_40393__$1);
var G__40396 = c__9739__auto___40394;
var G__40397 = cljs.core.count(c__9739__auto___40394);
var G__40398 = (0);
seq__40330_40380 = G__40395;
chunk__40332_40381 = G__40396;
count__40333_40382 = G__40397;
i__40334_40383 = G__40398;
continue;
} else {
var col_40399 = cljs.core.first(seq__40330_40393__$1);
var piece_width_height_40400 = hello_world.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
var x_pos_40401 = (((piece_width_height_40400 * col_40399) + hello_world.util.left_margin()) + col_40399);
var y_pos_40402 = (((piece_width_height_40400 * row) + hello_world.util.top_margin()) + row);
hello_world.util.reposition_puzzle_piece_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x_DASH_pos,x_pos_40401,cljs.core.cst$kw$y_DASH_pos,y_pos_40402,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col_40399], null));

hello_world.util.reposition_control_button_BANG_(row,col_40399,x_pos_40401,y_pos_40402,piece_width_height_40400);

var G__40403 = cljs.core.next(seq__40330_40393__$1);
var G__40404 = null;
var G__40405 = (0);
var G__40406 = (0);
seq__40330_40380 = G__40403;
chunk__40332_40381 = G__40404;
count__40333_40382 = G__40405;
i__40334_40383 = G__40406;
continue;
}
} else {
}
}
break;
}

var G__40407 = cljs.core.next(seq__40329__$1);
var G__40408 = null;
var G__40409 = (0);
var G__40410 = (0);
seq__40329 = G__40407;
chunk__40336 = G__40408;
count__40337 = G__40409;
i__40338 = G__40410;
continue;
}
} else {
return null;
}
}
break;
}
});
hello_world.util.position_ui_elements_for_landscape_mode_BANG_ = (function hello_world$util$position_ui_elements_for_landscape_mode_BANG_(){
var derefed_state = cljs.core.deref(hello_world.util.game_state);
var window_inner_width = window.innerWidth;
var window_inner_height = window.innerHeight;
cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (10);

cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (10);

cljs.core.cst$kw$see_DASH_ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (0.75 * window_inner_width);

cljs.core.cst$kw$see_DASH_ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (0.2 * window_inner_height);

cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (0.85 * window_inner_width);

cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (0.3 * window_inner_height);

cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (0.85 * window_inner_width);

cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (0.8 * window_inner_height);

cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (0.75 * window_inner_width);

cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (0.5 * window_inner_height);

cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (window_inner_width * 0.8);

cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (window_inner_height / (20));

cljs.core.cst$kw$stage_DASH_clear_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (window_inner_width / (5));

return cljs.core.cst$kw$stage_DASH_clear_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (window_inner_height / (20));
});
hello_world.util.position_ui_elements_for_portrait_mode_BANG_ = (function hello_world$util$position_ui_elements_for_portrait_mode_BANG_(){
var derefed_state = cljs.core.deref(hello_world.util.game_state);
var window_inner_width = window.innerWidth;
var window_inner_height = window.innerHeight;
cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (0.5 * window_inner_width);

cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (0.5 * window_inner_height);

cljs.core.cst$kw$see_DASH_ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (0.65 * window_inner_width);

cljs.core.cst$kw$see_DASH_ranking_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (0.85 * window_inner_height);

cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (0.55 * window_inner_width);

cljs.core.cst$kw$reset_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (0.85 * window_inner_height);

cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (0.45 * window_inner_width);

cljs.core.cst$kw$audio_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (0.85 * window_inner_height);

cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (0.2 * window_inner_width);

cljs.core.cst$kw$puzzle_DASH_selection_DASH_button.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (0.85 * window_inner_height);

cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (window_inner_width * 0.8);

cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (window_inner_height / (20));

cljs.core.cst$kw$stage_DASH_clear_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).x = (window_inner_width / (5));

return cljs.core.cst$kw$stage_DASH_clear_DASH_text.cljs$core$IFn$_invoke$arity$1(derefed_state).y = (window_inner_height / (20));
});
hello_world.util.position_ui_elements_BANG_ = (function hello_world$util$position_ui_elements_BANG_(){
var window_inner_width = window.innerWidth;
var window_inner_height = window.innerHeight;
var is_landscape = ((window_inner_height / window_inner_width) < 1.3);
hello_world.util.position_controls_and_puzzle_pieces_BANG_();

if(is_landscape){
return hello_world.util.position_ui_elements_for_landscape_mode_BANG_();
} else {
return hello_world.util.position_ui_elements_for_portrait_mode_BANG_();
}
});
