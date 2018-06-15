// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('ajax.protocols');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
cljs_bach.synthesis.audio_context = (function cljs_bach$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
goog.exportSymbol('cljs_bach.synthesis.audio_context', cljs_bach.synthesis.audio_context);
/**
 * Return the current time as recorded by the audio context.
 */
cljs_bach.synthesis.current_time = (function cljs_bach$synthesis$current_time(context){
return context.currentTime;
});
goog.exportSymbol('cljs_bach.synthesis.current_time', cljs_bach.synthesis.current_time);
cljs_bach.synthesis.subgraph = (function cljs_bach$synthesis$subgraph(var_args){
var G__39511 = arguments.length;
switch (G__39511) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input,
 *   so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(null,node);
});
/**
 * A graph of synthesis nodes without an output,
 *   so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete
 *   subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return (synth.cljs$core$IFn$_invoke$arity$3 ? synth.cljs$core$IFn$_invoke$arity$3(context,at,duration) : synth.call(null,context,at,duration));
});
goog.exportSymbol('cljs_bach.synthesis.run_with', cljs_bach.synthesis.run_with);
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink(context.destination);
});
goog.exportSymbol('cljs_bach.synthesis.destination', cljs_bach.synthesis.destination);
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with(input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__39513 = context.createGain();
cljs_bach.synthesis.plug(G__39513.gain,level,context,at,duration);

return G__39513;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.gain', cljs_bach.synthesis.gain);
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain(1.0);
goog.exportSymbol('cljs_bach.synthesis.pass_through', cljs_bach.synthesis.pass_through);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39521 = arguments.length;
var i__10088__auto___39522 = (0);
while(true){
if((i__10088__auto___39522 < len__10087__auto___39521)){
args__10094__auto__.push((arguments[i__10088__auto___39522]));

var G__39523 = (i__10088__auto___39522 + (1));
i__10088__auto___39522 = G__39523;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_39524 = at;
var coordinates_39525 = corners;
while(true){
var temp__5457__auto___39526 = coordinates_39525;
if(cljs.core.truth_(temp__5457__auto___39526)){
var vec__39515_39527 = temp__5457__auto___39526;
var seq__39516_39528 = cljs.core.seq(vec__39515_39527);
var first__39517_39529 = cljs.core.first(seq__39516_39528);
var seq__39516_39530__$1 = cljs.core.next(seq__39516_39528);
var vec__39518_39531 = first__39517_39529;
var dx_39532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39518_39531,(0),null);
var y_39533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39518_39531,(1),null);
var remaining_39534 = seq__39516_39530__$1;
audio_node.gain.linearRampToValueAtTime(y_39533,(x_39524 + dx_39532));

var G__39535 = (dx_39532 + x_39524);
var G__39536 = remaining_39534;
x_39524 = G__39535;
coordinates_39525 = G__39536;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1(audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq39514){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39514));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null)], 0));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - release);
var hold = (function (){var x__9160__auto__ = 0.0;
var y__9161__auto__ = remainder;
return ((x__9160__auto__ > y__9161__auto__) ? x__9160__auto__ : y__9161__auto__);
})();
var node = cljs_bach.synthesis.adshr(attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with(node,context,at,duration);
});
});
goog.exportSymbol('cljs_bach.synthesis.adsr', cljs_bach.synthesis.adsr);
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null)], 0));
});
goog.exportSymbol('cljs_bach.synthesis.percussive', cljs_bach.synthesis.percussive);
/**
 * Like apply, but for the node graphs synths produce.
 */
cljs_bach.synthesis.apply_to_graph = (function cljs_bach$synthesis$apply_to_graph(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39540 = arguments.length;
var i__10088__auto___39541 = (0);
while(true){
if((i__10088__auto___39541 < len__10087__auto___39540)){
args__10094__auto__.push((arguments[i__10088__auto___39541]));

var G__39542 = (i__10088__auto___39541 + (1));
i__10088__auto___39541 = G__39542;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39537_SHARP_){
return cljs_bach.synthesis.run_with(p1__39537_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.apply_to_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.apply_to_graph.cljs$lang$applyTo = (function (seq39538){
var G__39539 = cljs.core.first(seq39538);
var seq39538__$1 = cljs.core.next(seq39538);
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(G__39539,seq39538__$1);
});

cljs_bach.synthesis.join_in_series = (function cljs_bach$synthesis$join_in_series(graph1,graph2){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph1).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph1),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph2));
});
/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.apply_to_graph.cljs$core$IFn$_invoke$arity$variadic(cljs_bach.synthesis.join_in_series,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upstream_synth,downstream_synth], 0));
});
goog.exportSymbol('cljs_bach.synthesis.connect', cljs_bach.synthesis.connect);
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39544 = arguments.length;
var i__10088__auto___39545 = (0);
while(true){
if((i__10088__auto___39545 < len__10087__auto___39544)){
args__10094__auto__.push((arguments[i__10088__auto___39545]));

var G__39546 = (i__10088__auto___39545 + (1));
i__10088__auto___39545 = G__39546;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq39543){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39543));
});

cljs_bach.synthesis.join_in_parallel = (function cljs_bach$synthesis$join_in_parallel(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39554 = arguments.length;
var i__10088__auto___39555 = (0);
while(true){
if((i__10088__auto___39555 < len__10087__auto___39554)){
args__10094__auto__.push((arguments[i__10088__auto___39555]));

var G__39556 = (i__10088__auto___39555 + (1));
i__10088__auto___39555 = G__39556;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((2) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10095__auto__);
});

cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__39550_39557 = cljs.core.seq(graphs);
var chunk__39551_39558 = null;
var count__39552_39559 = (0);
var i__39553_39560 = (0);
while(true){
if((i__39553_39560 < count__39552_39559)){
var graph_39561 = chunk__39551_39558.cljs$core$IIndexed$_nth$arity$2(null,i__39553_39560);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_39561).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_39561))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_39561));
} else {
}

var G__39562 = seq__39550_39557;
var G__39563 = chunk__39551_39558;
var G__39564 = count__39552_39559;
var G__39565 = (i__39553_39560 + (1));
seq__39550_39557 = G__39562;
chunk__39551_39558 = G__39563;
count__39552_39559 = G__39564;
i__39553_39560 = G__39565;
continue;
} else {
var temp__5457__auto___39566 = cljs.core.seq(seq__39550_39557);
if(temp__5457__auto___39566){
var seq__39550_39567__$1 = temp__5457__auto___39566;
if(cljs.core.chunked_seq_QMARK_(seq__39550_39567__$1)){
var c__9739__auto___39568 = cljs.core.chunk_first(seq__39550_39567__$1);
var G__39569 = cljs.core.chunk_rest(seq__39550_39567__$1);
var G__39570 = c__9739__auto___39568;
var G__39571 = cljs.core.count(c__9739__auto___39568);
var G__39572 = (0);
seq__39550_39557 = G__39569;
chunk__39551_39558 = G__39570;
count__39552_39559 = G__39571;
i__39553_39560 = G__39572;
continue;
} else {
var graph_39573 = cljs.core.first(seq__39550_39567__$1);
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(graph_39573).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_39573))){
cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(upstream).connect(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(graph_39573));
} else {
}

var G__39574 = cljs.core.next(seq__39550_39567__$1);
var G__39575 = null;
var G__39576 = (0);
var G__39577 = (0);
seq__39550_39557 = G__39574;
chunk__39551_39558 = G__39575;
count__39552_39559 = G__39576;
i__39553_39560 = G__39577;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(upstream),cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join_in_parallel.cljs$lang$maxFixedArity = (2);

cljs_bach.synthesis.join_in_parallel.cljs$lang$applyTo = (function (seq39547){
var G__39548 = cljs.core.first(seq39547);
var seq39547__$1 = cljs.core.next(seq39547);
var G__39549 = cljs.core.first(seq39547__$1);
var seq39547__$2 = cljs.core.next(seq39547__$1);
return cljs_bach.synthesis.join_in_parallel.cljs$core$IFn$_invoke$arity$variadic(G__39548,G__39549,seq39547__$2);
});

/**
 * Add together synths by connecting them all to the same
 *   upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39579 = arguments.length;
var i__10088__auto___39580 = (0);
while(true){
if((i__10088__auto___39580 < len__10087__auto___39579)){
args__10094__auto__.push((arguments[i__10088__auto___39580]));

var G__39581 = (i__10088__auto___39580 + (1));
i__10088__auto___39580 = G__39581;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});
goog.exportSymbol('cljs_bach.synthesis.add', cljs_bach.synthesis.add);

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs_bach.synthesis.apply_to_graph,cljs_bach.synthesis.join_in_parallel,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq39578){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39578));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__39582_39586 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(frame_count));
var chunk__39583_39587 = null;
var count__39584_39588 = (0);
var i__39585_39589 = (0);
while(true){
if((i__39585_39589 < count__39584_39588)){
var i_39590 = chunk__39583_39587.cljs$core$IIndexed$_nth$arity$2(null,i__39585_39589);
(data[i_39590] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_39590) : generate_bit_BANG_.call(null,i_39590)));

var G__39591 = seq__39582_39586;
var G__39592 = chunk__39583_39587;
var G__39593 = count__39584_39588;
var G__39594 = (i__39585_39589 + (1));
seq__39582_39586 = G__39591;
chunk__39583_39587 = G__39592;
count__39584_39588 = G__39593;
i__39585_39589 = G__39594;
continue;
} else {
var temp__5457__auto___39595 = cljs.core.seq(seq__39582_39586);
if(temp__5457__auto___39595){
var seq__39582_39596__$1 = temp__5457__auto___39595;
if(cljs.core.chunked_seq_QMARK_(seq__39582_39596__$1)){
var c__9739__auto___39597 = cljs.core.chunk_first(seq__39582_39596__$1);
var G__39598 = cljs.core.chunk_rest(seq__39582_39596__$1);
var G__39599 = c__9739__auto___39597;
var G__39600 = cljs.core.count(c__9739__auto___39597);
var G__39601 = (0);
seq__39582_39586 = G__39598;
chunk__39583_39587 = G__39599;
count__39584_39588 = G__39600;
i__39585_39589 = G__39601;
continue;
} else {
var i_39602 = cljs.core.first(seq__39582_39596__$1);
(data[i_39602] = (generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1 ? generate_bit_BANG_.cljs$core$IFn$_invoke$arity$1(i_39602) : generate_bit_BANG_.call(null,i_39602)));

var G__39603 = cljs.core.next(seq__39582_39596__$1);
var G__39604 = null;
var G__39605 = (0);
var G__39606 = (0);
seq__39582_39586 = G__39603;
chunk__39583_39587 = G__39604;
count__39584_39588 = G__39605;
i__39585_39589 = G__39606;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize(cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__39607 = context.createBufferSource();
G__39607.buffer = (function (){var G__39608 = generate_bit_BANG_;
var G__39609 = context;
var G__39610 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__39608,G__39609,G__39610) : cljs_bach.synthesis.buffer.call(null,G__39608,G__39609,G__39610));
})();

G__39607.start(at);

return G__39607;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise(white);
})();
goog.exportSymbol('cljs_bach.synthesis.white_noise', cljs_bach.synthesis.white_noise);
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise(cljs.core.constantly(x));
});
goog.exportSymbol('cljs_bach.synthesis.constant', cljs_bach.synthesis.constant);
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var G__39611 = context.createOscillator();
G__39611.frequency.value = (0);

cljs_bach.synthesis.plug(G__39611.frequency,freq,context,at,duration);

G__39611.type = type;

G__39611.start(at);

G__39611.stop(((at + duration) + 1.0));

return G__39611;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sine");
goog.exportSymbol('cljs_bach.synthesis.sine', cljs_bach.synthesis.sine);
cljs_bach.synthesis.sawtooth = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"sawtooth");
goog.exportSymbol('cljs_bach.synthesis.sawtooth', cljs_bach.synthesis.sawtooth);
cljs_bach.synthesis.square = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"square");
goog.exportSymbol('cljs_bach.synthesis.square', cljs_bach.synthesis.square);
cljs_bach.synthesis.triangle = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.oscillator,"triangle");
goog.exportSymbol('cljs_bach.synthesis.triangle', cljs_bach.synthesis.triangle);
/**
 * Attenuate frequencies beyond the cutoff, and intensify
 *   the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var G__39613 = arguments.length;
switch (G__39613) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3(type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__39614 = context.createBiquadFilter();
G__39614.frequency.value = (0);

cljs_bach.synthesis.plug(G__39614.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug(G__39614.Q,q,context,at,duration);

G__39614.type = type;

return G__39614;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"lowpass");
goog.exportSymbol('cljs_bach.synthesis.low_pass', cljs_bach.synthesis.low_pass);
cljs_bach.synthesis.high_pass = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_bach.synthesis.biquad_filter,"highpass");
goog.exportSymbol('cljs_bach.synthesis.high_pass', cljs_bach.synthesis.high_pass);
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__39616 = context.createStereoPanner();
cljs_bach.synthesis.plug(G__39616.pan,pan,context,at,duration);

return G__39616;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.stereo_panner', cljs_bach.synthesis.stereo_panner);
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var maximum = (5);
var G__39617 = context.createDelay(maximum);
cljs_bach.synthesis.plug(G__39617.delayTime,seconds,context,at,duration);

return G__39617;
})());
});
});
goog.exportSymbol('cljs_bach.synthesis.delay_line', cljs_bach.synthesis.delay_line);
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((function (){var G__39618 = context.createConvolver();
G__39618.buffer = (function (){var G__39619 = generate_bit_BANG_;
var G__39620 = context;
var G__39621 = (duration + 1.0);
return (cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3 ? cljs_bach.synthesis.buffer.cljs$core$IFn$_invoke$arity$3(G__39619,G__39620,G__39621) : cljs_bach.synthesis.buffer.call(null,G__39619,G__39620,G__39621));
})();

return G__39618;
})());
});
});
/**
 * Crude reverb.
 */
cljs_bach.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * (function (){var G__39622 = ((1) - (i / length));
var G__39623 = decay;
return Math.pow(G__39622,G__39623);
})());
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver(logarithmic_decay);
})();
goog.exportSymbol('cljs_bach.synthesis.reverb', cljs_bach.synthesis.reverb);
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([effect,cljs_bach.synthesis.gain(level)], 0))], 0));
});
goog.exportSymbol('cljs_bach.synthesis.enhance', cljs_bach.synthesis.enhance);
cljs_bach.synthesis.get_mp3 = (function cljs_bach$synthesis$get_mp3(uri,callback){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_format,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$arraybuffer,cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"audio",cljs.core.cst$kw$content_DASH_type,"audio/mpeg"], null),cljs.core.cst$kw$handler,callback], null)], 0));
});
/**
 * Play a sample addressed via a URI. Until fetching and decoding is complete, it will play silence.
 */
cljs_bach.synthesis.raw_sample = (function cljs_bach$synthesis$raw_sample(uri){
var psuedo_promise = {};
cljs_bach.synthesis.get_mp3(uri,((function (psuedo_promise){
return (function (p1__39624_SHARP_){
return psuedo_promise.data = p1__39624_SHARP_;
});})(psuedo_promise))
);

return ((function (psuedo_promise){
return (function (context,at,duration){
return cljs_bach.synthesis.source((function (){var node = (function (){var G__39627 = context.createBufferSource();
G__39627.start(at);

G__39627.stop((at + duration));

return G__39627;
})();
var set_buffer = ((function (node,psuedo_promise){
return (function (buffer){
psuedo_promise.buffer = buffer;

return node.buffer = buffer;
});})(node,psuedo_promise))
;
var temp__5457__auto___39628 = psuedo_promise.data;
if(cljs.core.truth_(temp__5457__auto___39628)){
var data_39629 = temp__5457__auto___39628;
var temp__5455__auto___39630 = psuedo_promise.buffer;
if(cljs.core.truth_(temp__5455__auto___39630)){
var buffer_39631 = temp__5455__auto___39630;
set_buffer(buffer_39631);
} else {
context.decodeAudioData(data_39629,set_buffer);
}
} else {
}

return node;
})());
});
;})(psuedo_promise))
});
cljs_bach.synthesis.sample = cljs.core.memoize(cljs_bach.synthesis.raw_sample);
goog.exportSymbol('cljs_bach.synthesis.sample', cljs_bach.synthesis.sample);
