// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('leipzig.melody');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('leipzig.scale');
/**
 * Returns a function that translates a beat number into seconds.
 *   e.g. ((bpm 90) 5)
 */
leipzig.melody.bpm = (function leipzig$melody$bpm(beats){
return (function (beat){
return ((beat / beats) * (60));
});
});
/**
 * Zips an arbitrary quality onto a melody.
 *   e.g. (->> (rhythm [1 1/2]) (having :drum [:kick :snare]))
 */
leipzig.melody.having = (function leipzig$melody$having(k,values,notes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__39651_SHARP_,p2__39652_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39651_SHARP_,k,p2__39652_SHARP_);
}),notes,values);
});
leipzig.melody.utter = (function leipzig$melody$utter(object,time,duration,velocity){
if(typeof object === 'number'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pitch,object,cljs.core.cst$kw$time,time,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$velocity,velocity], null)], null);
} else {
if(cljs.core.sequential_QMARK_(object)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__39653_SHARP_){
return (leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4 ? leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4(p1__39653_SHARP_,time,duration,velocity) : leipzig.melody.utter.call(null,p1__39653_SHARP_,time,duration,velocity));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0));
} else {
if(cljs.core.map_QMARK_(object)){
var G__39654 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(object));
var G__39655 = time;
var G__39656 = duration;
var G__39657 = velocity;
return (leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4 ? leipzig.melody.utter.cljs$core$IFn$_invoke$arity$4(G__39654,G__39655,G__39656,G__39657) : leipzig.melody.utter.call(null,G__39654,G__39655,G__39656,G__39657));
} else {
if((object == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$time,time,cljs.core.cst$kw$duration,duration], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Translates a sequence of durations and pitches into a melody.
 *   nil pitches signify rests, vectors represent clusters, and maps
 *   represent chords. Vector durations represent repeated notes.
 *   e.g. (phrase [1/2 1/2 3/2 3/2] [0 1 nil 4])
 *   (phrase [1 1 2] [4 3 [0 2]])
 *   (phrase [1 [1 2]] [4 3])
 *   (phrase (repeat 4) (map #(-> triad (root %))) [0 3 4 3])
 */
leipzig.melody.phrase = (function leipzig$melody$phrase(var_args){
var G__39660 = arguments.length;
switch (G__39660) {
case 3:
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3 = (function (durations,pitches,velocities){
var wrap = (function (x){
if(cljs.core.sequential_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
var counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,wrap),durations);
var normalised_pitches = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([counts,pitches], 0));
var normalised_durations = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(wrap,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([durations], 0));
var times = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),normalised_durations);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(leipzig.melody.utter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([normalised_pitches,times,normalised_durations,velocities], 0));
});

leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2 = (function (durations,pitches){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39658_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39658_SHARP_,cljs.core.cst$kw$velocity);
}),leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$3(durations,pitches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});

leipzig.melody.phrase.cljs$lang$maxFixedArity = 3;

/**
 * Translates a sequence of durations into a rhythm.
 *   e.g. (rhythm [1 1 2])
 */
leipzig.melody.rhythm = (function leipzig$melody$rhythm(durations){
return leipzig.melody.phrase.cljs$core$IFn$_invoke$arity$2(durations,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Synonym for constantly.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :bass)))
 */
leipzig.melody.is = cljs.core.constantly;
leipzig.melody.if_applicable = (function leipzig$melody$if_applicable(applies_QMARK_,f){
return (function (x){
if(cljs.core.truth_((applies_QMARK_.cljs$core$IFn$_invoke$arity$1 ? applies_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : applies_QMARK_.call(null,x)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return x;
}
});
});
/**
 * Applies f to the k key of each note wherever condition? returns true.
 *   e.g. (->> notes (wherever (comp not :part), :part (is :piano))
 */
leipzig.melody.wherever = (function leipzig$melody$wherever(applies_QMARK_,k,f,notes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(leipzig.melody.if_applicable(applies_QMARK_,(function (p1__39662_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__39662_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f);
})),notes);
});
/**
 * Applies f to the k key of each note in notes, ignoring missing keys.
 *   e.g. (->> notes (where :time (bpm 90)))
 */
leipzig.melody.where = (function leipzig$melody$where(k,f,notes){
return leipzig.melody.wherever((function (p1__39663_SHARP_){
return cljs.core.contains_QMARK_(p1__39663_SHARP_,k);
}),k,f,notes);
});
/**
 * Sets a constant value for each note of a melody.
 *   e.g. (->> notes (all :part :drum))
 */
leipzig.melody.all = (function leipzig$melody$all(k,v,notes){
return leipzig.melody.wherever((leipzig.melody.is.cljs$core$IFn$_invoke$arity$1 ? leipzig.melody.is.cljs$core$IFn$_invoke$arity$1(true) : leipzig.melody.is.call(null,true)),k,(leipzig.melody.is.cljs$core$IFn$_invoke$arity$1 ? leipzig.melody.is.cljs$core$IFn$_invoke$arity$1(v) : leipzig.melody.is.call(null,v)),notes);
});
/**
 * Delay notes by wait.
 *   e.g. (->> melody (after 3))
 */
leipzig.melody.after = (function leipzig$melody$after(wait,notes){
return leipzig.melody.where(cljs.core.cst$kw$time,leipzig.scale.from(wait),notes);
});
leipzig.melody.before_QMARK_ = (function leipzig$melody$before_QMARK_(a,b){
return (cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(a) <= cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Blends melodies.
 *   e.g. (->> melody (with bass drums))
 */
leipzig.melody.with$ = (function leipzig$melody$with(var_args){
var G__39668 = arguments.length;
switch (G__39668) {
case 2:
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10110__auto__ = [];
var len__10087__auto___39678 = arguments.length;
var i__10088__auto___39679 = (0);
while(true){
if((i__10088__auto___39679 < len__10087__auto___39678)){
args_arr__10110__auto__.push((arguments[i__10088__auto___39679]));

var G__39680 = (i__10088__auto___39679 + (1));
i__10088__auto___39679 = G__39680;
continue;
} else {
}
break;
}

var argseq__10111__auto__ = (new cljs.core.IndexedSeq(args_arr__10110__auto__.slice((2)),(0),null));
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10111__auto__);

}
});

leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2 = (function (p__39669,p__39670){
var vec__39671 = p__39669;
var seq__39672 = cljs.core.seq(vec__39671);
var first__39673 = cljs.core.first(seq__39672);
var seq__39672__$1 = cljs.core.next(seq__39672);
var a = first__39673;
var other_as = seq__39672__$1;
var as = vec__39671;
var vec__39674 = p__39670;
var seq__39675 = cljs.core.seq(vec__39674);
var first__39676 = cljs.core.first(seq__39675);
var seq__39675__$1 = cljs.core.next(seq__39675);
var b = first__39676;
var other_bs = seq__39675__$1;
var bs = vec__39674;
if(cljs.core.empty_QMARK_(as)){
return bs;
} else {
if(cljs.core.empty_QMARK_(bs)){
return as;
} else {
if(cljs.core.truth_(leipzig.melody.before_QMARK_(a,b))){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,((function (vec__39671,seq__39672,first__39673,seq__39672__$1,a,other_as,as,vec__39674,seq__39675,first__39676,seq__39675__$1,b,other_bs,bs){
return (function (){
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(other_as,bs);
});})(vec__39671,seq__39672,first__39673,seq__39672__$1,a,other_as,as,vec__39674,seq__39675,first__39676,seq__39675__$1,b,other_bs,bs))
,null,null)));
} else {
return cljs.core.cons(b,(new cljs.core.LazySeq(null,((function (vec__39671,seq__39672,first__39673,seq__39672__$1,a,other_as,as,vec__39674,seq__39675,first__39676,seq__39675__$1,b,other_bs,bs){
return (function (){
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(as,other_bs);
});})(vec__39671,seq__39672,first__39673,seq__39672__$1,a,other_as,as,vec__39674,seq__39675,first__39676,seq__39675__$1,b,other_bs,bs))
,null,null)));

}
}
}
});

leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic = (function (as,bs,others){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(leipzig.melody.with$,cljs.core.cons(as,cljs.core.cons(bs,others)));
});

leipzig.melody.with$.cljs$lang$applyTo = (function (seq39665){
var G__39666 = cljs.core.first(seq39665);
var seq39665__$1 = cljs.core.next(seq39665);
var G__39667 = cljs.core.first(seq39665__$1);
var seq39665__$2 = cljs.core.next(seq39665__$1);
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$variadic(G__39666,G__39667,seq39665__$2);
});

leipzig.melody.with$.cljs$lang$maxFixedArity = (2);

/**
 * Replaces part of a melody with another.
 *   e.g. (->> notes (but 2 4 variation))
 */
leipzig.melody.but = (function leipzig$melody$but(start,end,variation,notes){
var starts_in_QMARK_ = (function (p__39681){
var map__39682 = p__39681;
var map__39682__$1 = ((((!((map__39682 == null)))?((((map__39682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39682):map__39682);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39682__$1,cljs.core.cst$kw$time);
return ((start <= time)) && ((time < end));
});
var clip = ((function (starts_in_QMARK_){
return (function (p__39684){
var map__39685 = p__39684;
var map__39685__$1 = ((((!((map__39685 == null)))?((((map__39685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39685):map__39685);
var note = map__39685__$1;
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39685__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39685__$1,cljs.core.cst$kw$duration);
if(((time < start)) && ((start <= (time + duration)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$duration,(start - time));
} else {
return note;
}
});})(starts_in_QMARK_))
;
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(leipzig.melody.after(start,variation),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clip,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(starts_in_QMARK_),notes)));
});
/**
 * Returns the total duration of notes.
 *   e.g. (->> melody duration)
 */
leipzig.melody.duration = (function leipzig$melody$duration(notes){
var length = (function (p__39687){
var map__39688 = p__39687;
var map__39688__$1 = ((((!((map__39688 == null)))?((((map__39688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39688):map__39688);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39688__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39688__$1,cljs.core.cst$kw$duration);
return (time + duration);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(length,notes));
});
/**
 * Sequences later after earlier.
 *   e.g. (->> call (then response))
 */
leipzig.melody.then = (function leipzig$melody$then(later,earlier){
return leipzig.melody.with$.cljs$core$IFn$_invoke$arity$2(earlier,leipzig.melody.after(leipzig.melody.duration(earlier),later));
});
leipzig.melody.mapthen = (function leipzig$melody$mapthen(var_args){
var args__10094__auto__ = [];
var len__10087__auto___39694 = arguments.length;
var i__10088__auto___39695 = (0);
while(true){
if((i__10088__auto___39695 < len__10087__auto___39694)){
args__10094__auto__.push((arguments[i__10088__auto___39695]));

var G__39696 = (i__10088__auto___39695 + (1));
i__10088__auto___39695 = G__39696;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic = (function (f,melodies){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39691_SHARP_,p2__39690_SHARP_){
return leipzig.melody.then(p2__39690_SHARP_,p1__39691_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,melodies));
});

leipzig.melody.mapthen.cljs$lang$maxFixedArity = (1);

leipzig.melody.mapthen.cljs$lang$applyTo = (function (seq39692){
var G__39693 = cljs.core.first(seq39692);
var seq39692__$1 = cljs.core.next(seq39692);
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic(G__39693,seq39692__$1);
});

/**
 * Repeats notes n times.
 *   e.g. (->> bassline (times 4))
 */
leipzig.melody.times = (function leipzig$melody$times(n,notes){
return leipzig.melody.mapthen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,notes)], 0));
});
/**
 * Transform both :time and :duration according to timing.
 *   e.g. (->> notes (tempo (bpm 120)))
 */
leipzig.melody.tempo = (function leipzig$melody$tempo(timing,notes){
return leipzig.melody.where(cljs.core.cst$kw$time,timing,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39697){
var map__39698 = p__39697;
var map__39698__$1 = ((((!((map__39698 == null)))?((((map__39698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39698):map__39698);
var note = map__39698__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39698__$1,cljs.core.cst$kw$time);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39698__$1,cljs.core.cst$kw$duration);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(note,cljs.core.cst$kw$duration,((function (){var G__39700 = (start + duration);
return (timing.cljs$core$IFn$_invoke$arity$1 ? timing.cljs$core$IFn$_invoke$arity$1(G__39700) : timing.call(null,G__39700));
})() - (timing.cljs$core$IFn$_invoke$arity$1 ? timing.cljs$core$IFn$_invoke$arity$1(start) : timing.call(null,start))));
}),notes));
});
/**
 * Linearly interpolated change between from and to.
 *   e.g. (->> notes (tempo (accelerando 0 4 3/2))))
 */
leipzig.melody.accelerando = (function leipzig$melody$accelerando(from,to,by){
return (function leipzig$melody$accelerando_$_rate(t){
if((from >= t)){
return t;
} else {
if((to >= t)){
var duration = (to - from);
var position = (t - from);
var completion = (position / duration);
var extent = (by - (1));
var base = t;
var extra = (((position * 0.5) * completion) * extent);
return (base + extra);
} else {
return (leipzig$melody$accelerando_$_rate(to) + (by * (t - to)));

}
}
});
});
