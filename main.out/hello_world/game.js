// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.game');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hello_world.sound_effect');
goog.require('hello_world.util');
hello_world.game.create_preload = (function hello_world$game$create_preload(image_src){
return (function (){
cljs.core.deref(hello_world.util.game).scale.scaleMode = Phaser.ScaleManager.RESIZE;

var phaser_loader = cljs.core.deref(hello_world.util.game).load;
phaser_loader.image("puzzle-background","images/puzzle-play-bg.png");

phaser_loader.image("puzzle-selection-button","images/puzzle-selection-button.png");

phaser_loader.image("audio-button","images/speaker.png");

phaser_loader.image("reset-button","images/reset-button.jpg");

phaser_loader.image("play-button","images/play-button.png");

phaser_loader.image("see-ranking-button","images/ranking.png");

phaser_loader.spritesheet("puzzle",image_src,hello_world.util.get_piece_width_height(cljs.core.deref(hello_world.util.puzzle_image_width)),hello_world.util.get_piece_width_height(cljs.core.deref(hello_world.util.puzzle_image_height)),(hello_world.util.row_col_num * hello_world.util.row_col_num));

return phaser_loader.spritesheet("flip-buttons","images/control-buttons.png",hello_world.util.get_button_width(),hello_world.util.get_button_height(),(6));
});
});
hello_world.game.flip_row_BANG_ = (function hello_world$game$flip_row_BANG_(row){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites_DASH_state,cljs.core.cst$kw$row_DASH_flipped_QMARK_,row], null),cljs.core.not);
});
hello_world.game.flip_col_BANG_ = (function hello_world$game$flip_col_BANG_(col){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites_DASH_state,cljs.core.cst$kw$col_DASH_flipped_QMARK_,col], null),cljs.core.not);
});
hello_world.game.flip_diagonal_pieces_BANG_ = (function hello_world$game$flip_diagonal_pieces_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites_DASH_state,cljs.core.cst$kw$diagonal_DASH_flipped_QMARK_], null),cljs.core.not);
});
hello_world.game.make_play_button_BANG_ = (function hello_world$game$make_play_button_BANG_(p__40659){
var map__40660 = p__40659;
var map__40660__$1 = ((((!((map__40660 == null)))?((((map__40660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40660):map__40660);
var chsk_send_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40660__$1,cljs.core.cst$kw$chsk_DASH_send_DASH_fn_BANG_);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$play_DASH_button,(function (){var this$ = this;
return cljs.core.deref(hello_world.util.game).add.button((10),(10),"play-button",((function (this$,map__40660,map__40660__$1,chsk_send_fn_BANG_){
return (function (){
var G__40662_40663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_game_DASH_start], null);
(chsk_send_fn_BANG_.cljs$core$IFn$_invoke$arity$1 ? chsk_send_fn_BANG_.cljs$core$IFn$_invoke$arity$1(G__40662_40663) : chsk_send_fn_BANG_.call(null,G__40662_40663));

return hello_world.util.hide_stage_clear_text_BANG_();
});})(this$,map__40660,map__40660__$1,chsk_send_fn_BANG_))
,this$);
})());
});
hello_world.game.store_control_button_and_return_it_BANG_ = (function hello_world$game$store_control_button_and_return_it_BANG_(key_for_control_button,control_button){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$control_DASH_buttons,key_for_control_button], null),control_button);

control_button.scale.setTo((0),(0));

control_button.anchor.x = 0.5;

control_button.anchor.y = 0.5;

return control_button;
});
hello_world.game.create_puzzle_piece_and_store_BANG_ = (function hello_world$game$create_puzzle_piece_and_store_BANG_(p__40664){
var map__40665 = p__40664;
var map__40665__$1 = ((((!((map__40665 == null)))?((((map__40665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40665):map__40665);
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40665__$1,cljs.core.cst$kw$frame_DASH_id);
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40665__$1,cljs.core.cst$kw$x_DASH_pos);
var y_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40665__$1,cljs.core.cst$kw$y_DASH_pos);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40665__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40665__$1,cljs.core.cst$kw$col);
var piece = cljs.core.deref(hello_world.util.game).add.sprite(x_pos,y_pos,"puzzle",frame_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sprites,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null),piece);

piece.scale.setTo((0),(0));

piece.anchor.x = 0.5;

return piece.anchor.y = 0.5;
});
hello_world.game.show_puzzle_board_BANG_ = (function hello_world$game$show_puzzle_board_BANG_(p__40667){
var map__40668 = p__40667;
var map__40668__$1 = ((((!((map__40668 == null)))?((((map__40668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40668):map__40668);
var send_start_timer_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40668__$1,cljs.core.cst$kw$send_DASH_start_DASH_timer_DASH_fn_BANG_);
hello_world.util.show_reset_button_BANG_();

hello_world.util.show_control_buttons_BANG_();

hello_world.util.hide_play_button_BANG_();

hello_world.util.hide_see_ranking_button_BANG_();

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_start_timer_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_start_timer_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_start_timer_fn_BANG_.call(null));

return hello_world.util.show_play_time_BANG_();
});
hello_world.game.render_background = (function hello_world$game$render_background(){
cljs.core.deref(hello_world.util.game).stage.backgroundColor = "#f6f4f3";

return cljs.core.deref(hello_world.util.game).add.image((0),(0),"puzzle-background");
});
hello_world.game.on_resize = (function hello_world$game$on_resize(){
hello_world.util.set_puzzle_width_height_in_relation_to_window_size_BANG_();

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.hide_control_buttons_BANG_();

hello_world.util.show_control_buttons_BANG_();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$before_DASH_started,cljs.core.cst$kw$game_DASH_play_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)))){
} else {
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
}

return hello_world.util.position_ui_elements_BANG_();
});
hello_world.game.create_create = (function hello_world$game$create_create(p__40670){
var map__40671 = p__40670;
var map__40671__$1 = ((((!((map__40671 == null)))?((((map__40671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40671):map__40671);
var websocket_message_send_functions = map__40671__$1;
var send_sprites_state_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40671__$1,cljs.core.cst$kw$send_DASH_sprites_DASH_state_DASH_fn_BANG_);
var send_puzzle_complete_fn_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40671__$1,cljs.core.cst$kw$send_DASH_puzzle_DASH_complete_DASH_fn_BANG_);
return ((function (map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
hello_world.game.render_background();

if(cljs.core.empty_QMARK_(cljs.core.cst$kw$sprites.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)))){
var game_object_factory_40693 = cljs.core.deref(hello_world.util.game).add;
var left_margin_40694 = hello_world.util.left_margin();
var top_margin_40695 = hello_world.util.top_margin();
var piece_width_height_40696 = hello_world.util.get_piece_width_height(cljs.core.cst$kw$puzzle_DASH_width_DASH_height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
var seq__40673_40697 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
var chunk__40680_40698 = null;
var count__40681_40699 = (0);
var i__40682_40700 = (0);
while(true){
if((i__40682_40700 < count__40681_40699)){
var row_40701 = chunk__40680_40698.cljs$core$IIndexed$_nth$arity$2(null,i__40682_40700);
var seq__40683_40702 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
var chunk__40685_40703 = null;
var count__40686_40704 = (0);
var i__40687_40705 = (0);
while(true){
if((i__40687_40705 < count__40686_40704)){
var col_40706 = chunk__40685_40703.cljs$core$IIndexed$_nth$arity$2(null,i__40687_40705);
var frame_id_40707 = ((hello_world.util.row_col_num * row_40701) + col_40706);
var x_pos_40708 = (((piece_width_height_40696 * col_40706) + left_margin_40694) + col_40706);
var y_pos_40709 = (((piece_width_height_40696 * row_40701) + top_margin_40695) + row_40701);
hello_world.game.create_puzzle_piece_and_store_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$frame_DASH_id,frame_id_40707,cljs.core.cst$kw$x_DASH_pos,x_pos_40708,cljs.core.cst$kw$y_DASH_pos,y_pos_40709,cljs.core.cst$kw$row,row_40701,cljs.core.cst$kw$col,col_40706], null));

if(((col_40706 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40701,(hello_world.util.row_col_num - (1))))){
var bottom_left_button_40710 = hello_world.game.store_control_button_and_return_it_BANG_(cljs.core.cst$kw$bottom_DASH_left,game_object_factory_40693.sprite((x_pos_40708 - piece_width_height_40696),(y_pos_40709 + piece_width_height_40696),"flip-buttons",(5)));
hello_world.util.set_on_click_callback_for_sprite_BANG_(bottom_left_button_40710,((function (seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_left_button_40710,frame_id_40707,x_pos_40708,y_pos_40709,col_40706,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,hello_world.util.row_col_num)));

hello_world.game.flip_diagonal_pieces_BANG_();

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_left_button_40710,frame_id_40707,x_pos_40708,y_pos_40709,col_40706,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

if((col_40706 === (0))){
var left_button_40711 = hello_world.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row_40701], null),game_object_factory_40693.sprite((x_pos_40708 - piece_width_height_40696),y_pos_40709,"flip-buttons",row_40701));
hello_world.util.set_on_click_callback_for_sprite_BANG_(left_button_40711,((function (seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,left_button_40711,frame_id_40707,x_pos_40708,y_pos_40709,col_40706,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(row_40701) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,row_40701)));

hello_world.game.flip_row_BANG_(row_40701);

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,left_button_40711,frame_id_40707,x_pos_40708,y_pos_40709,col_40706,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40701,(hello_world.util.row_col_num - (1)))){
var bottom_button_40712 = hello_world.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col_40706], null),game_object_factory_40693.sprite(x_pos_40708,(y_pos_40709 + piece_width_height_40696),"flip-buttons",col_40706));
hello_world.util.set_on_click_callback_for_sprite_BANG_(bottom_button_40712,((function (seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_button_40712,frame_id_40707,x_pos_40708,y_pos_40709,col_40706,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((function (){var G__40689 = cljs.core.mod((((1) + hello_world.util.row_col_num) + col_40706),cljs.core.count(hello_world.sound_effect.frequencies_in_major_scale_4th_octave));
return (hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(G__40689) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,G__40689));
})());

hello_world.game.flip_col_BANG_(col_40706);

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_button_40712,frame_id_40707,x_pos_40708,y_pos_40709,col_40706,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

var G__40713 = seq__40683_40702;
var G__40714 = chunk__40685_40703;
var G__40715 = count__40686_40704;
var G__40716 = (i__40687_40705 + (1));
seq__40683_40702 = G__40713;
chunk__40685_40703 = G__40714;
count__40686_40704 = G__40715;
i__40687_40705 = G__40716;
continue;
} else {
var temp__5457__auto___40717 = cljs.core.seq(seq__40683_40702);
if(temp__5457__auto___40717){
var seq__40683_40718__$1 = temp__5457__auto___40717;
if(cljs.core.chunked_seq_QMARK_(seq__40683_40718__$1)){
var c__9739__auto___40719 = cljs.core.chunk_first(seq__40683_40718__$1);
var G__40720 = cljs.core.chunk_rest(seq__40683_40718__$1);
var G__40721 = c__9739__auto___40719;
var G__40722 = cljs.core.count(c__9739__auto___40719);
var G__40723 = (0);
seq__40683_40702 = G__40720;
chunk__40685_40703 = G__40721;
count__40686_40704 = G__40722;
i__40687_40705 = G__40723;
continue;
} else {
var col_40724 = cljs.core.first(seq__40683_40718__$1);
var frame_id_40725 = ((hello_world.util.row_col_num * row_40701) + col_40724);
var x_pos_40726 = (((piece_width_height_40696 * col_40724) + left_margin_40694) + col_40724);
var y_pos_40727 = (((piece_width_height_40696 * row_40701) + top_margin_40695) + row_40701);
hello_world.game.create_puzzle_piece_and_store_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$frame_DASH_id,frame_id_40725,cljs.core.cst$kw$x_DASH_pos,x_pos_40726,cljs.core.cst$kw$y_DASH_pos,y_pos_40727,cljs.core.cst$kw$row,row_40701,cljs.core.cst$kw$col,col_40724], null));

if(((col_40724 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40701,(hello_world.util.row_col_num - (1))))){
var bottom_left_button_40728 = hello_world.game.store_control_button_and_return_it_BANG_(cljs.core.cst$kw$bottom_DASH_left,game_object_factory_40693.sprite((x_pos_40726 - piece_width_height_40696),(y_pos_40727 + piece_width_height_40696),"flip-buttons",(5)));
hello_world.util.set_on_click_callback_for_sprite_BANG_(bottom_left_button_40728,((function (seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_left_button_40728,frame_id_40725,x_pos_40726,y_pos_40727,col_40724,seq__40683_40718__$1,temp__5457__auto___40717,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,hello_world.util.row_col_num)));

hello_world.game.flip_diagonal_pieces_BANG_();

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_left_button_40728,frame_id_40725,x_pos_40726,y_pos_40727,col_40724,seq__40683_40718__$1,temp__5457__auto___40717,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

if((col_40724 === (0))){
var left_button_40729 = hello_world.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row_40701], null),game_object_factory_40693.sprite((x_pos_40726 - piece_width_height_40696),y_pos_40727,"flip-buttons",row_40701));
hello_world.util.set_on_click_callback_for_sprite_BANG_(left_button_40729,((function (seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,left_button_40729,frame_id_40725,x_pos_40726,y_pos_40727,col_40724,seq__40683_40718__$1,temp__5457__auto___40717,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(row_40701) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,row_40701)));

hello_world.game.flip_row_BANG_(row_40701);

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,left_button_40729,frame_id_40725,x_pos_40726,y_pos_40727,col_40724,seq__40683_40718__$1,temp__5457__auto___40717,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40701,(hello_world.util.row_col_num - (1)))){
var bottom_button_40730 = hello_world.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col_40724], null),game_object_factory_40693.sprite(x_pos_40726,(y_pos_40727 + piece_width_height_40696),"flip-buttons",col_40724));
hello_world.util.set_on_click_callback_for_sprite_BANG_(bottom_button_40730,((function (seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_button_40730,frame_id_40725,x_pos_40726,y_pos_40727,col_40724,seq__40683_40718__$1,temp__5457__auto___40717,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((function (){var G__40690 = cljs.core.mod((((1) + hello_world.util.row_col_num) + col_40724),cljs.core.count(hello_world.sound_effect.frequencies_in_major_scale_4th_octave));
return (hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(G__40690) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,G__40690));
})());

hello_world.game.flip_col_BANG_(col_40724);

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40683_40702,chunk__40685_40703,count__40686_40704,i__40687_40705,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_button_40730,frame_id_40725,x_pos_40726,y_pos_40727,col_40724,seq__40683_40718__$1,temp__5457__auto___40717,row_40701,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

var G__40731 = cljs.core.next(seq__40683_40718__$1);
var G__40732 = null;
var G__40733 = (0);
var G__40734 = (0);
seq__40683_40702 = G__40731;
chunk__40685_40703 = G__40732;
count__40686_40704 = G__40733;
i__40687_40705 = G__40734;
continue;
}
} else {
}
}
break;
}

var G__40735 = seq__40673_40697;
var G__40736 = chunk__40680_40698;
var G__40737 = count__40681_40699;
var G__40738 = (i__40682_40700 + (1));
seq__40673_40697 = G__40735;
chunk__40680_40698 = G__40736;
count__40681_40699 = G__40737;
i__40682_40700 = G__40738;
continue;
} else {
var temp__5457__auto___40739 = cljs.core.seq(seq__40673_40697);
if(temp__5457__auto___40739){
var seq__40673_40740__$1 = temp__5457__auto___40739;
if(cljs.core.chunked_seq_QMARK_(seq__40673_40740__$1)){
var c__9739__auto___40741 = cljs.core.chunk_first(seq__40673_40740__$1);
var G__40742 = cljs.core.chunk_rest(seq__40673_40740__$1);
var G__40743 = c__9739__auto___40741;
var G__40744 = cljs.core.count(c__9739__auto___40741);
var G__40745 = (0);
seq__40673_40697 = G__40742;
chunk__40680_40698 = G__40743;
count__40681_40699 = G__40744;
i__40682_40700 = G__40745;
continue;
} else {
var row_40746 = cljs.core.first(seq__40673_40740__$1);
var seq__40674_40747 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num));
var chunk__40676_40748 = null;
var count__40677_40749 = (0);
var i__40678_40750 = (0);
while(true){
if((i__40678_40750 < count__40677_40749)){
var col_40751 = chunk__40676_40748.cljs$core$IIndexed$_nth$arity$2(null,i__40678_40750);
var frame_id_40752 = ((hello_world.util.row_col_num * row_40746) + col_40751);
var x_pos_40753 = (((piece_width_height_40696 * col_40751) + left_margin_40694) + col_40751);
var y_pos_40754 = (((piece_width_height_40696 * row_40746) + top_margin_40695) + row_40746);
hello_world.game.create_puzzle_piece_and_store_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$frame_DASH_id,frame_id_40752,cljs.core.cst$kw$x_DASH_pos,x_pos_40753,cljs.core.cst$kw$y_DASH_pos,y_pos_40754,cljs.core.cst$kw$row,row_40746,cljs.core.cst$kw$col,col_40751], null));

if(((col_40751 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40746,(hello_world.util.row_col_num - (1))))){
var bottom_left_button_40755 = hello_world.game.store_control_button_and_return_it_BANG_(cljs.core.cst$kw$bottom_DASH_left,game_object_factory_40693.sprite((x_pos_40753 - piece_width_height_40696),(y_pos_40754 + piece_width_height_40696),"flip-buttons",(5)));
hello_world.util.set_on_click_callback_for_sprite_BANG_(bottom_left_button_40755,((function (seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_left_button_40755,frame_id_40752,x_pos_40753,y_pos_40754,col_40751,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,hello_world.util.row_col_num)));

hello_world.game.flip_diagonal_pieces_BANG_();

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_left_button_40755,frame_id_40752,x_pos_40753,y_pos_40754,col_40751,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

if((col_40751 === (0))){
var left_button_40756 = hello_world.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row_40746], null),game_object_factory_40693.sprite((x_pos_40753 - piece_width_height_40696),y_pos_40754,"flip-buttons",row_40746));
hello_world.util.set_on_click_callback_for_sprite_BANG_(left_button_40756,((function (seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,left_button_40756,frame_id_40752,x_pos_40753,y_pos_40754,col_40751,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(row_40746) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,row_40746)));

hello_world.game.flip_row_BANG_(row_40746);

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,left_button_40756,frame_id_40752,x_pos_40753,y_pos_40754,col_40751,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40746,(hello_world.util.row_col_num - (1)))){
var bottom_button_40757 = hello_world.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col_40751], null),game_object_factory_40693.sprite(x_pos_40753,(y_pos_40754 + piece_width_height_40696),"flip-buttons",col_40751));
hello_world.util.set_on_click_callback_for_sprite_BANG_(bottom_button_40757,((function (seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_button_40757,frame_id_40752,x_pos_40753,y_pos_40754,col_40751,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((function (){var G__40691 = cljs.core.mod((((1) + hello_world.util.row_col_num) + col_40751),cljs.core.count(hello_world.sound_effect.frequencies_in_major_scale_4th_octave));
return (hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(G__40691) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,G__40691));
})());

hello_world.game.flip_col_BANG_(col_40751);

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_button_40757,frame_id_40752,x_pos_40753,y_pos_40754,col_40751,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

var G__40758 = seq__40674_40747;
var G__40759 = chunk__40676_40748;
var G__40760 = count__40677_40749;
var G__40761 = (i__40678_40750 + (1));
seq__40674_40747 = G__40758;
chunk__40676_40748 = G__40759;
count__40677_40749 = G__40760;
i__40678_40750 = G__40761;
continue;
} else {
var temp__5457__auto___40762__$1 = cljs.core.seq(seq__40674_40747);
if(temp__5457__auto___40762__$1){
var seq__40674_40763__$1 = temp__5457__auto___40762__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40674_40763__$1)){
var c__9739__auto___40764 = cljs.core.chunk_first(seq__40674_40763__$1);
var G__40765 = cljs.core.chunk_rest(seq__40674_40763__$1);
var G__40766 = c__9739__auto___40764;
var G__40767 = cljs.core.count(c__9739__auto___40764);
var G__40768 = (0);
seq__40674_40747 = G__40765;
chunk__40676_40748 = G__40766;
count__40677_40749 = G__40767;
i__40678_40750 = G__40768;
continue;
} else {
var col_40769 = cljs.core.first(seq__40674_40763__$1);
var frame_id_40770 = ((hello_world.util.row_col_num * row_40746) + col_40769);
var x_pos_40771 = (((piece_width_height_40696 * col_40769) + left_margin_40694) + col_40769);
var y_pos_40772 = (((piece_width_height_40696 * row_40746) + top_margin_40695) + row_40746);
hello_world.game.create_puzzle_piece_and_store_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$frame_DASH_id,frame_id_40770,cljs.core.cst$kw$x_DASH_pos,x_pos_40771,cljs.core.cst$kw$y_DASH_pos,y_pos_40772,cljs.core.cst$kw$row,row_40746,cljs.core.cst$kw$col,col_40769], null));

if(((col_40769 === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40746,(hello_world.util.row_col_num - (1))))){
var bottom_left_button_40773 = hello_world.game.store_control_button_and_return_it_BANG_(cljs.core.cst$kw$bottom_DASH_left,game_object_factory_40693.sprite((x_pos_40771 - piece_width_height_40696),(y_pos_40772 + piece_width_height_40696),"flip-buttons",(5)));
hello_world.util.set_on_click_callback_for_sprite_BANG_(bottom_left_button_40773,((function (seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_left_button_40773,frame_id_40770,x_pos_40771,y_pos_40772,col_40769,seq__40674_40763__$1,temp__5457__auto___40762__$1,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(hello_world.util.row_col_num) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,hello_world.util.row_col_num)));

hello_world.game.flip_diagonal_pieces_BANG_();

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_left_button_40773,frame_id_40770,x_pos_40771,y_pos_40772,col_40769,seq__40674_40763__$1,temp__5457__auto___40762__$1,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

if((col_40769 === (0))){
var left_button_40774 = hello_world.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,row_40746], null),game_object_factory_40693.sprite((x_pos_40771 - piece_width_height_40696),y_pos_40772,"flip-buttons",row_40746));
hello_world.util.set_on_click_callback_for_sprite_BANG_(left_button_40774,((function (seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,left_button_40774,frame_id_40770,x_pos_40771,y_pos_40772,col_40769,seq__40674_40763__$1,temp__5457__auto___40762__$1,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(row_40746) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,row_40746)));

hello_world.game.flip_row_BANG_(row_40746);

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,left_button_40774,frame_id_40770,x_pos_40771,y_pos_40772,col_40769,seq__40674_40763__$1,temp__5457__auto___40762__$1,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_40746,(hello_world.util.row_col_num - (1)))){
var bottom_button_40775 = hello_world.game.store_control_button_and_return_it_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bottom,col_40769], null),game_object_factory_40693.sprite(x_pos_40771,(y_pos_40772 + piece_width_height_40696),"flip-buttons",col_40769));
hello_world.util.set_on_click_callback_for_sprite_BANG_(bottom_button_40775,((function (seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_button_40775,frame_id_40770,x_pos_40771,y_pos_40772,col_40769,seq__40674_40763__$1,temp__5457__auto___40762__$1,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_){
return (function (){
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.sound_effect.play_beep_BANG_((function (){var G__40692 = cljs.core.mod((((1) + hello_world.util.row_col_num) + col_40769),cljs.core.count(hello_world.sound_effect.frequencies_in_major_scale_4th_octave));
return (hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1(G__40692) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,G__40692));
})());

hello_world.game.flip_col_BANG_(col_40769);

if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)));
} else {
}

(send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? send_sprites_state_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : send_sprites_state_fn_BANG_.call(null));

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(send_puzzle_complete_fn_BANG_);
} else {
return null;
}
});})(seq__40674_40747,chunk__40676_40748,count__40677_40749,i__40678_40750,seq__40673_40697,chunk__40680_40698,count__40681_40699,i__40682_40700,bottom_button_40775,frame_id_40770,x_pos_40771,y_pos_40772,col_40769,seq__40674_40763__$1,temp__5457__auto___40762__$1,row_40746,seq__40673_40740__$1,temp__5457__auto___40739,game_object_factory_40693,left_margin_40694,top_margin_40695,piece_width_height_40696,map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
);
} else {
}

var G__40776 = cljs.core.next(seq__40674_40763__$1);
var G__40777 = null;
var G__40778 = (0);
var G__40779 = (0);
seq__40674_40747 = G__40776;
chunk__40676_40748 = G__40777;
count__40677_40749 = G__40778;
i__40678_40750 = G__40779;
continue;
}
} else {
}
}
break;
}

var G__40780 = cljs.core.next(seq__40673_40740__$1);
var G__40781 = null;
var G__40782 = (0);
var G__40783 = (0);
seq__40673_40697 = G__40780;
chunk__40680_40698 = G__40781;
count__40681_40699 = G__40782;
i__40682_40700 = G__40783;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$play_DASH_button.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)))){
} else {
hello_world.util.make_play_time_BANG_();

hello_world.util.hide_play_time_BANG_();

hello_world.util.make_congrat_message_BANG_();

hello_world.util.hide_stage_clear_text_BANG_();

hello_world.game.make_play_button_BANG_(websocket_message_send_functions);

hello_world.util.make_see_ranking_button_BANG_();

hello_world.util.make_reset_button_BANG_(cljs.core.cst$kw$send_DASH_reset_DASH_fn_BANG_.cljs$core$IFn$_invoke$arity$1(websocket_message_send_functions));

hello_world.util.make_audio_button_BANG_();

hello_world.util.make_puzzle_selection_button_BANG_();
}

return hello_world.game.on_resize();
});
;})(map__40671,map__40671__$1,websocket_message_send_functions,send_sprites_state_fn_BANG_,send_puzzle_complete_fn_BANG_))
});
hello_world.game.game_update = (function hello_world$game$game_update(){
return null;
});
hello_world.game.start_game_BANG_ = (function hello_world$game$start_game_BANG_(image_src,websocket_message_send_functions){
var puzzle_img = (new Image());
hello_world.util.set_puzzle_width_height_in_relation_to_window_size_BANG_();

puzzle_img.onload = cljs.core.clj__GT_js(((function (puzzle_img){
return (function (){
cljs.core.reset_BANG_(hello_world.util.puzzle_image_width,puzzle_img.width);

cljs.core.reset_BANG_(hello_world.util.puzzle_image_height,puzzle_img.height);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["starting game with image from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_src)].join('')], 0));

return cljs.core.reset_BANG_(hello_world.util.game,(new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.Canvas,"canvas",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$preload,hello_world.game.create_preload(image_src),cljs.core.cst$kw$create,hello_world.game.create_create(websocket_message_send_functions),cljs.core.cst$kw$update,hello_world.game.game_update,cljs.core.cst$kw$resize,hello_world.game.on_resize], null)))));
});})(puzzle_img))
);

return puzzle_img.src = image_src;
});
