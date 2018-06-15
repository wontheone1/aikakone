// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hello_world.sound_effect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_bach.synthesis');
goog.require('hello_world.util');
goog.require('leipzig.melody');
hello_world.sound_effect.frequencies_in_major_scale_4th_octave = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [261.63,293.66,329.63,349.23,392.0,(440),493.88,523.25], null);
hello_world.sound_effect.C5 = ((2) * (hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1((0)) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,(0))));
hello_world.sound_effect.D5 = ((2) * (hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1((1)) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,(1))));
hello_world.sound_effect.E5 = ((2) * (hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1((2)) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,(2))));
hello_world.sound_effect.F5 = ((2) * (hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1((3)) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,(3))));
hello_world.sound_effect.G5 = ((2) * (hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1 ? hello_world.sound_effect.frequencies_in_major_scale_4th_octave.cljs$core$IFn$_invoke$arity$1((4)) : hello_world.sound_effect.frequencies_in_major_scale_4th_octave.call(null,(4))));
if(typeof hello_world.sound_effect.context !== 'undefined'){
} else {
hello_world.sound_effect.context = cljs_bach.synthesis.audio_context();
}
hello_world.sound_effect.play_beep_BANG_ = (function hello_world$sound_effect$play_beep_BANG_(frequency){
if(cljs.core.truth_(cljs.core.cst$kw$audio_DASH_on_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)))){
return cljs_bach.synthesis.run_with(cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs_bach.synthesis.square.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.square.cljs$core$IFn$_invoke$arity$1(frequency) : cljs_bach.synthesis.square.call(null,frequency)),cljs_bach.synthesis.percussive(0.01,0.6),cljs_bach.synthesis.gain(0.1),cljs_bach.synthesis.destination], 0)),hello_world.sound_effect.context,cljs_bach.synthesis.current_time(hello_world.sound_effect.context),1.0);
} else {
return null;
}
});
hello_world.sound_effect.melody = leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),0.67,0.33,(1),0.67,0.33,0.67,0.33,(1)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.sound_effect.C5,hello_world.sound_effect.C5,hello_world.sound_effect.C5,hello_world.sound_effect.D5,hello_world.sound_effect.E5,hello_world.sound_effect.E5,hello_world.sound_effect.D5,hello_world.sound_effect.E5,hello_world.sound_effect.F5,hello_world.sound_effect.G5], null));
/**
 * An imitation bell, made by adding together harmonics.
 */
hello_world.sound_effect.bell = (function hello_world$sound_effect$bell(p__40413){
var map__40414 = p__40413;
var map__40414__$1 = ((((!((map__40414 == null)))?((((map__40414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40414):map__40414);
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40414__$1,cljs.core.cst$kw$pitch);
var harmonic = ((function (map__40414,map__40414__$1,pitch){
return (function (multiple,decay){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__40416 = (multiple * pitch);
return (cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1 ? cljs_bach.synthesis.sine.cljs$core$IFn$_invoke$arity$1(G__40416) : cljs_bach.synthesis.sine.call(null,G__40416));
})(),cljs_bach.synthesis.percussive(0.01,decay),cljs_bach.synthesis.gain(0.05)], 0));
});})(map__40414,map__40414__$1,pitch))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.add,cljs.core.map.cljs$core$IFn$_invoke$arity$3(harmonic,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,2.0,3.0,4.1,5.2], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.6,0.4,0.3,0.2], null)));
});
/**
 * Take a sequence of notes and play them from a set point in an audiocontext.
 */
hello_world.sound_effect.play_from_BANG_ = (function hello_world$sound_effect$play_from_BANG_(audiocontext,from,notes){
var seq__40417 = cljs.core.seq(notes);
var chunk__40418 = null;
var count__40419 = (0);
var i__40420 = (0);
while(true){
if((i__40420 < count__40419)){
var map__40421 = chunk__40418.cljs$core$IIndexed$_nth$arity$2(null,i__40420);
var map__40421__$1 = ((((!((map__40421 == null)))?((((map__40421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40421):map__40421);
var note = map__40421__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40421__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40421__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40421__$1,cljs.core.cst$kw$instrument);
var at_40427 = (time + from);
var synth_instance_40428 = (function (){var G__40423 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(note,cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__40423) : instrument.call(null,G__40423));
})();
var connected_instance_40429 = cljs_bach.synthesis.connect(synth_instance_40428,cljs_bach.synthesis.destination);
(connected_instance_40429.cljs$core$IFn$_invoke$arity$3 ? connected_instance_40429.cljs$core$IFn$_invoke$arity$3(audiocontext,at_40427,duration) : connected_instance_40429.call(null,audiocontext,at_40427,duration));

var G__40430 = seq__40417;
var G__40431 = chunk__40418;
var G__40432 = count__40419;
var G__40433 = (i__40420 + (1));
seq__40417 = G__40430;
chunk__40418 = G__40431;
count__40419 = G__40432;
i__40420 = G__40433;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__40417);
if(temp__5457__auto__){
var seq__40417__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40417__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__40417__$1);
var G__40434 = cljs.core.chunk_rest(seq__40417__$1);
var G__40435 = c__9739__auto__;
var G__40436 = cljs.core.count(c__9739__auto__);
var G__40437 = (0);
seq__40417 = G__40434;
chunk__40418 = G__40435;
count__40419 = G__40436;
i__40420 = G__40437;
continue;
} else {
var map__40424 = cljs.core.first(seq__40417__$1);
var map__40424__$1 = ((((!((map__40424 == null)))?((((map__40424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40424):map__40424);
var note = map__40424__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40424__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40424__$1,cljs.core.cst$kw$duration);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40424__$1,cljs.core.cst$kw$instrument);
var at_40438 = (time + from);
var synth_instance_40439 = (function (){var G__40426 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(note,cljs.core.cst$kw$time);
return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(G__40426) : instrument.call(null,G__40426));
})();
var connected_instance_40440 = cljs_bach.synthesis.connect(synth_instance_40439,cljs_bach.synthesis.destination);
(connected_instance_40440.cljs$core$IFn$_invoke$arity$3 ? connected_instance_40440.cljs$core$IFn$_invoke$arity$3(audiocontext,at_40438,duration) : connected_instance_40440.call(null,audiocontext,at_40438,duration));

var G__40441 = cljs.core.next(seq__40417__$1);
var G__40442 = null;
var G__40443 = (0);
var G__40444 = (0);
seq__40417 = G__40441;
chunk__40418 = G__40442;
count__40419 = G__40443;
i__40420 = G__40444;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Take a sequence of notes and play them in an audiocontext.
 */
hello_world.sound_effect.play_BANG_ = (function hello_world$sound_effect$play_BANG_(audiocontext,notes){
return hello_world.sound_effect.play_from_BANG_(audiocontext,cljs_bach.synthesis.current_time(audiocontext),notes);
});
hello_world.sound_effect.play_row_row_row_your_boat = (function hello_world$sound_effect$play_row_row_row_your_boat(){
if(cljs.core.truth_(cljs.core.cst$kw$audio_DASH_on_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_world.util.game_state)))){
hello_world.sound_effect.play_BANG_(hello_world.sound_effect.context,leipzig.melody.wherever(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.cst$kw$instrument),cljs.core.cst$kw$instrument,(leipzig.melody.is.cljs$core$IFn$_invoke$arity$1 ? leipzig.melody.is.cljs$core$IFn$_invoke$arity$1(hello_world.sound_effect.bell) : leipzig.melody.is.call(null,hello_world.sound_effect.bell)),hello_world.sound_effect.melody));
} else {
}

return setTimeout(hello_world.sound_effect.play_row_row_row_your_boat,(8000));
});
hello_world.sound_effect.play_row_row_row_your_boat();
