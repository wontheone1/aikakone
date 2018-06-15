// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.web_socket');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('taoensso.sente');
goog.require('hello_world.config');
goog.require('hello_world.util');
goog.require('hello_world.game');
/**
 * Connect to a configured server instead of the page host
 */
hello_world.web_socket.get_chsk_url = (function hello_world$web_socket$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__44926 = type;
var G__44926__$1 = (((G__44926 instanceof cljs.core.Keyword))?G__44926.fqn:null);
switch (G__44926__$1) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44926__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hello_world.config.backend_host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chsk_path)].join('');
});
var get_chsk_url44928_44933 = taoensso.sente.get_chsk_url;
taoensso.sente.get_chsk_url = hello_world.web_socket.get_chsk_url;

try{var map__44929_44934 = (function (){var G__44930 = "/chsk";
var G__44931 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$auto], null);
return (taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$2(G__44930,G__44931) : taoensso.sente.make_channel_socket_BANG_.call(null,G__44930,G__44931));
})();
var map__44929_44935__$1 = ((((!((map__44929_44934 == null)))?((((map__44929_44934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44929_44934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44929_44934):map__44929_44934);
var ch_recv_44936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44929_44935__$1,cljs.core.cst$kw$ch_DASH_recv);
var send_fn_44937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44929_44935__$1,cljs.core.cst$kw$send_DASH_fn);
hello_world.web_socket.ch_chsk = ch_recv_44936;

hello_world.web_socket.chsk_send_BANG_ = send_fn_44937;
}finally {taoensso.sente.get_chsk_url = get_chsk_url44928_44933;
}hello_world.web_socket.send_sprites_state_BANG_ = (function hello_world$web_socket$send_sprites_state_BANG_(){
var G__44938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_sprites_DASH_state,cljs.core.cst$kw$sprites_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state))], null);
return (hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44938) : hello_world.web_socket.chsk_send_BANG_.call(null,G__44938));
});
hello_world.web_socket.send_puzzle_complete_BANG_ = (function hello_world$web_socket$send_puzzle_complete_BANG_(play_time){
var G__44939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_puzzle_DASH_complete_BANG_,play_time], null);
return (hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44939) : hello_world.web_socket.chsk_send_BANG_.call(null,G__44939));
});
hello_world.web_socket.send_start_timer_BANG_ = (function hello_world$web_socket$send_start_timer_BANG_(){
var G__44940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_start_DASH_timer,null], null);
return (hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44940) : hello_world.web_socket.chsk_send_BANG_.call(null,G__44940));
});
hello_world.web_socket.send_reset_BANG_ = (function hello_world$web_socket$send_reset_BANG_(){
var G__44941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_reset,null], null);
return (hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44941) : hello_world.web_socket.chsk_send_BANG_.call(null,G__44941));
});
if(typeof hello_world.web_socket.event_msg_handler !== 'undefined'){
} else {
hello_world.web_socket.event_msg_handler = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hello-world.web-socket","event-msg-handler"),cljs.core.cst$kw$id,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
hello_world.web_socket.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__44942){
var map__44943 = p__44942;
var map__44943__$1 = ((((!((map__44943 == null)))?((((map__44943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44943):map__44943);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44943__$1,cljs.core.cst$kw$event);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unhandled event: ",event], 0));
}));
hello_world.web_socket.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chsk_SLASH_state,(function (p__44945){
var map__44946 = p__44945;
var map__44946__$1 = ((((!((map__44946 == null)))?((((map__44946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44946):map__44946);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44946__$1,cljs.core.cst$kw$_QMARK_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$first_DASH_open_QMARK_,true], null))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Channel socket successfully established!"], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Channel socket state change:",_QMARK_data], 0));
}
}));
hello_world.web_socket.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chsk_SLASH_recv,(function (p__44948){
var map__44949 = p__44948;
var map__44949__$1 = ((((!((map__44949 == null)))?((((map__44949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44949):map__44949);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44949__$1,cljs.core.cst$kw$_QMARK_data);
var vec__44951 = _QMARK_data;
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44951,(0),null);
var event_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44951,(1),null);
var G__44954 = event_id;
var G__44954__$1 = (((G__44954 instanceof cljs.core.Keyword))?G__44954.fqn:null);
switch (G__44954__$1) {
case "aikakone/sprites-state":
if(cljs.core.truth_(hello_world.util.currently_playing_game_QMARK_())){
hello_world.util.synchronize_puzzle_board_BANG_(event_data);
} else {
}

return hello_world.util.finish_game_when_puzzle_is_complete_BANG_(hello_world.web_socket.send_puzzle_complete_BANG_);

break;
case "aikakone/game-start":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$sprites_DASH_state,event_data);

hello_world.util.set_game_play_state_BANG_(cljs.core.cst$kw$playing);

hello_world.game.show_puzzle_board_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$send_DASH_start_DASH_timer_DASH_fn_BANG_,hello_world.web_socket.send_start_timer_BANG_], null));

return hello_world.web_socket.send_sprites_state_BANG_();

break;
case "aikakone/current-time":
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core.cst$kw$play_DASH_time_DASH_text.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state));
if(cljs.core.truth_(and__8796__auto__)){
return hello_world.util.currently_playing_game_QMARK_();
} else {
return and__8796__auto__;
}
})())){
return hello_world.util.update_play_time_to_current_time_BANG_(event_data);
} else {
return null;
}

break;
case "aikakone/reset":
return hello_world.util.reset_game_BANG_();

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_id," is unknown event type"], 0));

}
}));
hello_world.web_socket.send_uid = (function hello_world$web_socket$send_uid(){
var G__44956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aikakone_SLASH_uid,cljs.core.cst$kw$uid.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state))], null);
return (hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1 ? hello_world.web_socket.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$1(G__44956) : hello_world.web_socket.chsk_send_BANG_.call(null,G__44956));
});
hello_world.web_socket.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chsk_SLASH_handshake,(function (p__44957){
var map__44958 = p__44957;
var map__44958__$1 = ((((!((map__44958 == null)))?((((map__44958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44958):map__44958);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44958__$1,cljs.core.cst$kw$_QMARK_data);
var vec__44960 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44960,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44960,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44960,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handshake established"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hello_world.util.game_state,cljs.core.assoc,cljs.core.cst$kw$uid,_QMARK_uid);

return hello_world.web_socket.send_uid();
}));
hello_world.web_socket.start_web_socket_BANG_ = (function hello_world$web_socket$start_web_socket_BANG_(){
return (taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$2(hello_world.web_socket.ch_chsk,hello_world.web_socket.event_msg_handler) : taoensso.sente.start_chsk_router_BANG_.call(null,hello_world.web_socket.ch_chsk,hello_world.web_socket.event_msg_handler));
});
