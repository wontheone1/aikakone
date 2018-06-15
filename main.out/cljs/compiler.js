// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ecmascript5,cljs.core.cst$kw$ecmascript5_DASH_strict,cljs.core.cst$kw$ecmascript6,cljs.core.cst$kw$ecmascript6_DASH_strict,cljs.core.cst$kw$ecmascript_DASH_2015,cljs.core.cst$kw$ecmascript6_DASH_typed,cljs.core.cst$kw$ecmascript_DASH_2016,cljs.core.cst$kw$ecmascript_DASH_2017,cljs.core.cst$kw$ecmascript_DASH_next], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__30098 = s;
var map__30098__$1 = ((((!((map__30098 == null)))?((((map__30098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30098):map__30098);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30098__$1,cljs.core.cst$kw$info);
var d = (0);
var G__30101 = info;
var map__30102 = G__30101;
var map__30102__$1 = ((((!((map__30102 == null)))?((((map__30102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30102):map__30102);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30102__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__30101__$1 = G__30101;
while(true){
var d__$2 = d__$1;
var map__30104 = G__30101__$1;
var map__30104__$1 = ((((!((map__30104 == null)))?((((map__30104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30104):map__30104);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30104__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__30106 = (d__$2 + (1));
var G__30107 = shadow__$1;
d__$1 = G__30106;
G__30101__$1 = G__30107;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__30108){
var map__30109 = p__30108;
var map__30109__$1 = ((((!((map__30109 == null)))?((((map__30109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30109):map__30109);
var name_var = map__30109__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30109__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30109__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__30111 = info;
var map__30111__$1 = ((((!((map__30111 == null)))?((((map__30111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30111):map__30111);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30111__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30111__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__30113 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__30113) : cljs.compiler.munge.call(null,G__30113));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__30115 = arguments.length;
switch (G__30115) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge_str(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__30117 = cp;
switch (G__30117) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__30119_30123 = cljs.core.seq(s);
var chunk__30120_30124 = null;
var count__30121_30125 = (0);
var i__30122_30126 = (0);
while(true){
if((i__30122_30126 < count__30121_30125)){
var c_30127 = chunk__30120_30124.cljs$core$IIndexed$_nth$arity$2(null,i__30122_30126);
sb.append(cljs.compiler.escape_char(c_30127));

var G__30128 = seq__30119_30123;
var G__30129 = chunk__30120_30124;
var G__30130 = count__30121_30125;
var G__30131 = (i__30122_30126 + (1));
seq__30119_30123 = G__30128;
chunk__30120_30124 = G__30129;
count__30121_30125 = G__30130;
i__30122_30126 = G__30131;
continue;
} else {
var temp__5457__auto___30132 = cljs.core.seq(seq__30119_30123);
if(temp__5457__auto___30132){
var seq__30119_30133__$1 = temp__5457__auto___30132;
if(cljs.core.chunked_seq_QMARK_(seq__30119_30133__$1)){
var c__9739__auto___30134 = cljs.core.chunk_first(seq__30119_30133__$1);
var G__30135 = cljs.core.chunk_rest(seq__30119_30133__$1);
var G__30136 = c__9739__auto___30134;
var G__30137 = cljs.core.count(c__9739__auto___30134);
var G__30138 = (0);
seq__30119_30123 = G__30135;
chunk__30120_30124 = G__30136;
count__30121_30125 = G__30137;
i__30122_30126 = G__30138;
continue;
} else {
var c_30139 = cljs.core.first(seq__30119_30133__$1);
sb.append(cljs.compiler.escape_char(c_30139));

var G__30140 = cljs.core.next(seq__30119_30133__$1);
var G__30141 = null;
var G__30142 = (0);
var G__30143 = (0);
seq__30119_30123 = G__30140;
chunk__30120_30124 = G__30141;
count__30121_30125 = G__30142;
i__30122_30126 = G__30143;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__28324__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__28324__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__30144_30149 = ast;
var map__30144_30150__$1 = ((((!((map__30144_30149 == null)))?((((map__30144_30149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30144_30149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30144_30149):map__30144_30149);
var env_30151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30144_30150__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_30151))){
var map__30146_30152 = env_30151;
var map__30146_30153__$1 = ((((!((map__30146_30152 == null)))?((((map__30146_30152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30146_30152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30146_30152):map__30146_30152);
var line_30154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30146_30153__$1,cljs.core.cst$kw$line);
var column_30155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30146_30153__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__30146_30152,map__30146_30153__$1,line_30154,column_30155,map__30144_30149,map__30144_30150__$1,env_30151,val__28324__auto__){
return (function (m){
var minfo = (function (){var G__30148 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$var)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30148,cljs.core.cst$kw$name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__30148;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_30154 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__30146_30152,map__30146_30153__$1,line_30154,column_30155,map__30144_30149,map__30144_30150__$1,env_30151,val__28324__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_30155)?(column_30155 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__30146_30152,map__30146_30153__$1,line_30154,column_30155,map__30144_30149,map__30144_30150__$1,env_30151,val__28324__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__30146_30152,map__30146_30153__$1,line_30154,column_30155,map__30144_30149,map__30144_30150__$1,env_30151,val__28324__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__30146_30152,map__30146_30153__$1,line_30154,column_30155,map__30144_30149,map__30144_30150__$1,env_30151,val__28324__auto__))
,cljs.core.sorted_map()));
});})(map__30146_30152,map__30146_30153__$1,line_30154,column_30155,map__30144_30149,map__30144_30150__$1,env_30151,val__28324__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__28324__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__10094__auto__ = [];
var len__10087__auto___30162 = arguments.length;
var i__10088__auto___30163 = (0);
while(true){
if((i__10088__auto___30163 < len__10087__auto___30162)){
args__10094__auto__.push((arguments[i__10088__auto___30163]));

var G__30164 = (i__10088__auto___30163 + (1));
i__10088__auto___30163 = G__30164;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__30158_30165 = cljs.core.seq(xs);
var chunk__30159_30166 = null;
var count__30160_30167 = (0);
var i__30161_30168 = (0);
while(true){
if((i__30161_30168 < count__30160_30167)){
var x_30169 = chunk__30159_30166.cljs$core$IIndexed$_nth$arity$2(null,i__30161_30168);
if((x_30169 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_30169)){
cljs.compiler.emit(x_30169);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_30169)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_30169);
} else {
if(goog.isFunction(x_30169)){
(x_30169.cljs$core$IFn$_invoke$arity$0 ? x_30169.cljs$core$IFn$_invoke$arity$0() : x_30169.call(null));
} else {
var s_30170 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_30169], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__30158_30165,chunk__30159_30166,count__30160_30167,i__30161_30168,s_30170,x_30169){
return (function (p1__30156_SHARP_){
return (p1__30156_SHARP_ + cljs.core.count(s_30170));
});})(seq__30158_30165,chunk__30159_30166,count__30160_30167,i__30161_30168,s_30170,x_30169))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30170], 0));

}
}
}
}

var G__30171 = seq__30158_30165;
var G__30172 = chunk__30159_30166;
var G__30173 = count__30160_30167;
var G__30174 = (i__30161_30168 + (1));
seq__30158_30165 = G__30171;
chunk__30159_30166 = G__30172;
count__30160_30167 = G__30173;
i__30161_30168 = G__30174;
continue;
} else {
var temp__5457__auto___30175 = cljs.core.seq(seq__30158_30165);
if(temp__5457__auto___30175){
var seq__30158_30176__$1 = temp__5457__auto___30175;
if(cljs.core.chunked_seq_QMARK_(seq__30158_30176__$1)){
var c__9739__auto___30177 = cljs.core.chunk_first(seq__30158_30176__$1);
var G__30178 = cljs.core.chunk_rest(seq__30158_30176__$1);
var G__30179 = c__9739__auto___30177;
var G__30180 = cljs.core.count(c__9739__auto___30177);
var G__30181 = (0);
seq__30158_30165 = G__30178;
chunk__30159_30166 = G__30179;
count__30160_30167 = G__30180;
i__30161_30168 = G__30181;
continue;
} else {
var x_30182 = cljs.core.first(seq__30158_30176__$1);
if((x_30182 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_30182)){
cljs.compiler.emit(x_30182);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_30182)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_30182);
} else {
if(goog.isFunction(x_30182)){
(x_30182.cljs$core$IFn$_invoke$arity$0 ? x_30182.cljs$core$IFn$_invoke$arity$0() : x_30182.call(null));
} else {
var s_30183 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_30182], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gen_DASH_col], null),((function (seq__30158_30165,chunk__30159_30166,count__30160_30167,i__30161_30168,s_30183,x_30182,seq__30158_30176__$1,temp__5457__auto___30175){
return (function (p1__30156_SHARP_){
return (p1__30156_SHARP_ + cljs.core.count(s_30183));
});})(seq__30158_30165,chunk__30159_30166,count__30160_30167,i__30161_30168,s_30183,x_30182,seq__30158_30176__$1,temp__5457__auto___30175))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30183], 0));

}
}
}
}

var G__30184 = cljs.core.next(seq__30158_30176__$1);
var G__30185 = null;
var G__30186 = (0);
var G__30187 = (0);
seq__30158_30165 = G__30184;
chunk__30159_30166 = G__30185;
count__30160_30167 = G__30186;
i__30161_30168 = G__30187;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq30157){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30157));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__10094__auto__ = [];
var len__10087__auto___30193 = arguments.length;
var i__10088__auto___30194 = (0);
while(true){
if((i__10088__auto___30194 < len__10087__auto___30193)){
args__10094__auto__.push((arguments[i__10088__auto___30194]));

var G__30195 = (i__10088__auto___30194 + (1));
i__10088__auto___30194 = G__30195;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_30189_30196 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_30189_30196;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__30190){
var map__30191 = p__30190;
var map__30191__$1 = ((((!((map__30191 == null)))?((((map__30191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30191):map__30191);
var m = map__30191__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30191__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq30188){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30188));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9935__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30197_30199 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30198_30200 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30197_30199,_STAR_print_fn_STAR_30198_30200,sb__9935__auto__){
return (function (x__9936__auto__){
return sb__9935__auto__.append(x__9936__auto__);
});})(_STAR_print_newline_STAR_30197_30199,_STAR_print_fn_STAR_30198_30200,sb__9935__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30198_30200;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30197_30199;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9935__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9863__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9864__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9865__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9867__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__9867__auto__,method_table__9863__auto__,prefer_table__9864__auto__,method_cache__9865__auto__,cached_hierarchy__9866__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$constant,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NaN"], 0));
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((x > (0)))?"Infinity":"-Infinity")], 0));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",x,")"], 0));

}
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new RegExp(\"\"))"], 0));
} else {
var vec__30201 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__30204_30206 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__30204_30206) : cljs.compiler.emit_constant.call(null,G__30204_30206));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__30205_30207 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__30205_30207) : cljs.compiler.emit_constant.call(null,G__30205_30207));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__30208_30209 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__30208_30209) : cljs.compiler.emit_constant.call(null,G__30208_30209));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__8796__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8796__auto__)){
var G__30210 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__30210) : x.call(null,G__30210));
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__8796__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__8796__auto__)){
var G__30211 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__30211) : x.call(null,G__30211));
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (p__30213){
var map__30214 = p__30213;
var map__30214__$1 = ((((!((map__30214 == null)))?((((map__30214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30214):map__30214);
var ast = map__30214__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30214__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30214__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30214__$1,cljs.core.cst$kw$form);
var temp__5455__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__30216 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__30216__$1 = ((((!((map__30216 == null)))?((((map__30216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30216):map__30216);
var cenv = map__30216__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30216__$1,cljs.core.cst$kw$options);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name),cljs.core.cst$kw$name], null));
var or__8808__auto__ = js_module_name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__30218 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__8796__auto__ = (function (){var G__30220 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__30220) : cljs.compiler.es5_GT__EQ_.call(null,G__30220));
})();
if(cljs.core.truth_(and__8796__auto__)){
return !((cljs.core.namespace(var_name) == null));
} else {
return and__8796__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__30218,cljs.analyzer.es5_allowed);
} else {
return G__30218;
}
})();
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30221 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__30221,reserved);
} else {
return G__30221;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var_DASH_special,(function (p__30222){
var map__30223 = p__30222;
var map__30223__$1 = ((((!((map__30223 == null)))?((((map__30223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30223):map__30223);
var arg = map__30223__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30223__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30223__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30223__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30223__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__30225 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__30225__$1 = ((((!((map__30225 == null)))?((((map__30225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30225):map__30225);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30225__$1,cljs.core.cst$kw$name);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (p__30227){
var map__30228 = p__30227;
var map__30228__$1 = ((((!((map__30228 == null)))?((((map__30228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30228):map__30228);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30228__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30228__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30228__$1,cljs.core.cst$kw$env);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__30230_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__30230_SHARP_),cljs.core.cst$kw$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__30231){
var map__30232 = p__30231;
var map__30232__$1 = ((((!((map__30232 == null)))?((((map__30232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30232):map__30232);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30232__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30232__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30232__$1,cljs.core.cst$kw$vals);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (p__30234){
var map__30235 = p__30234;
var map__30235__$1 = ((((!((map__30235 == null)))?((((map__30235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30235):map__30235);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30235__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30235__$1,cljs.core.cst$kw$env);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__30237){
var map__30238 = p__30237;
var map__30238__$1 = ((((!((map__30238 == null)))?((((map__30238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30238):map__30238);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30238__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30238__$1,cljs.core.cst$kw$env);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_30240 = cljs.core.count(items);
if((cnt_30240 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_30240,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__30241_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__30241_SHARP_),cljs.core.cst$kw$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__30242){
var map__30243 = p__30242;
var map__30243__$1 = ((((!((map__30243 == null)))?((((map__30243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30243):map__30243);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30243__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30243__$1,cljs.core.cst$kw$env);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_value,(function (p__30245){
var map__30246 = p__30245;
var map__30246__$1 = ((((!((map__30246 == null)))?((((map__30246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30246):map__30246);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,cljs.core.cst$kw$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,cljs.core.cst$kw$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,cljs.core.cst$kw$env);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.cst$kw$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5457__auto___30264 = cljs.core.seq(items);
if(temp__5457__auto___30264){
var items_30265__$1 = temp__5457__auto___30264;
var vec__30248_30266 = items_30265__$1;
var seq__30249_30267 = cljs.core.seq(vec__30248_30266);
var first__30250_30268 = cljs.core.first(seq__30249_30267);
var seq__30249_30269__$1 = cljs.core.next(seq__30249_30267);
var vec__30251_30270 = first__30250_30268;
var k_30271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30251_30270,(0),null);
var v_30272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30251_30270,(1),null);
var r_30273 = seq__30249_30269__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_30271),"\": ",v_30272], 0));

var seq__30254_30274 = cljs.core.seq(r_30273);
var chunk__30255_30275 = null;
var count__30256_30276 = (0);
var i__30257_30277 = (0);
while(true){
if((i__30257_30277 < count__30256_30276)){
var vec__30258_30278 = chunk__30255_30275.cljs$core$IIndexed$_nth$arity$2(null,i__30257_30277);
var k_30279__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30258_30278,(0),null);
var v_30280__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30258_30278,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_30279__$1),"\": ",v_30280__$1], 0));

var G__30281 = seq__30254_30274;
var G__30282 = chunk__30255_30275;
var G__30283 = count__30256_30276;
var G__30284 = (i__30257_30277 + (1));
seq__30254_30274 = G__30281;
chunk__30255_30275 = G__30282;
count__30256_30276 = G__30283;
i__30257_30277 = G__30284;
continue;
} else {
var temp__5457__auto___30285__$1 = cljs.core.seq(seq__30254_30274);
if(temp__5457__auto___30285__$1){
var seq__30254_30286__$1 = temp__5457__auto___30285__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30254_30286__$1)){
var c__9739__auto___30287 = cljs.core.chunk_first(seq__30254_30286__$1);
var G__30288 = cljs.core.chunk_rest(seq__30254_30286__$1);
var G__30289 = c__9739__auto___30287;
var G__30290 = cljs.core.count(c__9739__auto___30287);
var G__30291 = (0);
seq__30254_30274 = G__30288;
chunk__30255_30275 = G__30289;
count__30256_30276 = G__30290;
i__30257_30277 = G__30291;
continue;
} else {
var vec__30261_30292 = cljs.core.first(seq__30254_30286__$1);
var k_30293__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30261_30292,(0),null);
var v_30294__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30261_30292,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_30293__$1),"\": ",v_30294__$1], 0));

var G__30295 = cljs.core.next(seq__30254_30286__$1);
var G__30296 = null;
var G__30297 = (0);
var G__30298 = (0);
seq__30254_30274 = G__30295;
chunk__30255_30275 = G__30296;
count__30256_30276 = G__30297;
i__30257_30277 = G__30298;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$record_DASH_value,(function (p__30299){
var map__30300 = p__30299;
var map__30300__$1 = ((((!((map__30300 == null)))?((((map__30300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30300):map__30300);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300__$1,cljs.core.cst$kw$items);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30300__$1,cljs.core.cst$kw$env);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns,".map__GT_",name,"(",items,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$constant,(function (p__30302){
var map__30303 = p__30302;
var map__30303__$1 = ((((!((map__30303 == null)))?((((map__30303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30303):map__30303);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30303__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30303__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__30305){
var map__30306 = p__30305;
var map__30306__$1 = ((((!((map__30306 == null)))?((((map__30306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30306):map__30306);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30306__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30306__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30306__$1,cljs.core.cst$kw$const_DASH_expr);
var or__8808__auto__ = (function (){var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant);
if(and__8796__auto__){
var and__8796__auto____$1 = form;
if(cljs.core.truth_(and__8796__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var and__8796__auto__ = !((const_expr == null));
if(and__8796__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__8796__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__30308){
var map__30309 = p__30308;
var map__30309__$1 = ((((!((map__30309 == null)))?((((map__30309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30309):map__30309);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30309__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30309__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30309__$1,cljs.core.cst$kw$const_DASH_expr);
var or__8808__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$constant)) && ((form === false) || ((form == null)));
if(or__8808__auto__){
return or__8808__auto__;
} else {
var and__8796__auto__ = !((const_expr == null));
if(and__8796__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__8796__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__8808__auto__ = (function (){var fexpr__30312 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__30312.cljs$core$IFn$_invoke$arity$1 ? fexpr__30312.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__30312.call(null,tag));
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__30313){
var map__30314 = p__30313;
var map__30314__$1 = ((((!((map__30314 == null)))?((((map__30314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30314):map__30314);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30314__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30314__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30314__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30314__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30314__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__8808__auto__ = unchecked;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case_STAR_,(function (p__30316){
var map__30317 = p__30316;
var map__30317__$1 = ((((!((map__30317 == null)))?((((map__30317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30317):map__30317);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30317__$1,cljs.core.cst$kw$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30317__$1,cljs.core.cst$kw$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30317__$1,cljs.core.cst$kw$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30317__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30317__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch (",v,") {"], 0));

var seq__30319_30337 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__30320_30338 = null;
var count__30321_30339 = (0);
var i__30322_30340 = (0);
while(true){
if((i__30322_30340 < count__30321_30339)){
var vec__30323_30341 = chunk__30320_30338.cljs$core$IIndexed$_nth$arity$2(null,i__30322_30340);
var ts_30342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30323_30341,(0),null);
var then_30343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30323_30341,(1),null);
var seq__30326_30344 = cljs.core.seq(ts_30342);
var chunk__30327_30345 = null;
var count__30328_30346 = (0);
var i__30329_30347 = (0);
while(true){
if((i__30329_30347 < count__30328_30346)){
var test_30348 = chunk__30327_30345.cljs$core$IIndexed$_nth$arity$2(null,i__30329_30347);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_30348,":"], 0));

var G__30349 = seq__30326_30344;
var G__30350 = chunk__30327_30345;
var G__30351 = count__30328_30346;
var G__30352 = (i__30329_30347 + (1));
seq__30326_30344 = G__30349;
chunk__30327_30345 = G__30350;
count__30328_30346 = G__30351;
i__30329_30347 = G__30352;
continue;
} else {
var temp__5457__auto___30353 = cljs.core.seq(seq__30326_30344);
if(temp__5457__auto___30353){
var seq__30326_30354__$1 = temp__5457__auto___30353;
if(cljs.core.chunked_seq_QMARK_(seq__30326_30354__$1)){
var c__9739__auto___30355 = cljs.core.chunk_first(seq__30326_30354__$1);
var G__30356 = cljs.core.chunk_rest(seq__30326_30354__$1);
var G__30357 = c__9739__auto___30355;
var G__30358 = cljs.core.count(c__9739__auto___30355);
var G__30359 = (0);
seq__30326_30344 = G__30356;
chunk__30327_30345 = G__30357;
count__30328_30346 = G__30358;
i__30329_30347 = G__30359;
continue;
} else {
var test_30360 = cljs.core.first(seq__30326_30354__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_30360,":"], 0));

var G__30361 = cljs.core.next(seq__30326_30354__$1);
var G__30362 = null;
var G__30363 = (0);
var G__30364 = (0);
seq__30326_30344 = G__30361;
chunk__30327_30345 = G__30362;
count__30328_30346 = G__30363;
i__30329_30347 = G__30364;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_30343], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_30343], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__30365 = seq__30319_30337;
var G__30366 = chunk__30320_30338;
var G__30367 = count__30321_30339;
var G__30368 = (i__30322_30340 + (1));
seq__30319_30337 = G__30365;
chunk__30320_30338 = G__30366;
count__30321_30339 = G__30367;
i__30322_30340 = G__30368;
continue;
} else {
var temp__5457__auto___30369 = cljs.core.seq(seq__30319_30337);
if(temp__5457__auto___30369){
var seq__30319_30370__$1 = temp__5457__auto___30369;
if(cljs.core.chunked_seq_QMARK_(seq__30319_30370__$1)){
var c__9739__auto___30371 = cljs.core.chunk_first(seq__30319_30370__$1);
var G__30372 = cljs.core.chunk_rest(seq__30319_30370__$1);
var G__30373 = c__9739__auto___30371;
var G__30374 = cljs.core.count(c__9739__auto___30371);
var G__30375 = (0);
seq__30319_30337 = G__30372;
chunk__30320_30338 = G__30373;
count__30321_30339 = G__30374;
i__30322_30340 = G__30375;
continue;
} else {
var vec__30330_30376 = cljs.core.first(seq__30319_30370__$1);
var ts_30377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30330_30376,(0),null);
var then_30378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30330_30376,(1),null);
var seq__30333_30379 = cljs.core.seq(ts_30377);
var chunk__30334_30380 = null;
var count__30335_30381 = (0);
var i__30336_30382 = (0);
while(true){
if((i__30336_30382 < count__30335_30381)){
var test_30383 = chunk__30334_30380.cljs$core$IIndexed$_nth$arity$2(null,i__30336_30382);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_30383,":"], 0));

var G__30384 = seq__30333_30379;
var G__30385 = chunk__30334_30380;
var G__30386 = count__30335_30381;
var G__30387 = (i__30336_30382 + (1));
seq__30333_30379 = G__30384;
chunk__30334_30380 = G__30385;
count__30335_30381 = G__30386;
i__30336_30382 = G__30387;
continue;
} else {
var temp__5457__auto___30388__$1 = cljs.core.seq(seq__30333_30379);
if(temp__5457__auto___30388__$1){
var seq__30333_30389__$1 = temp__5457__auto___30388__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30333_30389__$1)){
var c__9739__auto___30390 = cljs.core.chunk_first(seq__30333_30389__$1);
var G__30391 = cljs.core.chunk_rest(seq__30333_30389__$1);
var G__30392 = c__9739__auto___30390;
var G__30393 = cljs.core.count(c__9739__auto___30390);
var G__30394 = (0);
seq__30333_30379 = G__30391;
chunk__30334_30380 = G__30392;
count__30335_30381 = G__30393;
i__30336_30382 = G__30394;
continue;
} else {
var test_30395 = cljs.core.first(seq__30333_30389__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_30395,":"], 0));

var G__30396 = cljs.core.next(seq__30333_30389__$1);
var G__30397 = null;
var G__30398 = (0);
var G__30399 = (0);
seq__30333_30379 = G__30396;
chunk__30334_30380 = G__30397;
count__30335_30381 = G__30398;
i__30336_30382 = G__30399;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_30378], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_30378], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__30400 = cljs.core.next(seq__30319_30370__$1);
var G__30401 = null;
var G__30402 = (0);
var G__30403 = (0);
seq__30319_30337 = G__30400;
chunk__30320_30338 = G__30401;
count__30321_30339 = G__30402;
i__30322_30340 = G__30403;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__30404){
var map__30405 = p__30404;
var map__30405__$1 = ((((!((map__30405 == null)))?((((map__30405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30405):map__30405);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30405__$1,cljs.core.cst$kw$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30405__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30408 = env;
var G__30409 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__30408,G__30409) : cljs.compiler.resolve_type.call(null,G__30408,G__30409));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__30410 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30410,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30410,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__30410,fstr,rstr,ret_t,axstr){
return (function (p1__30407_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__30407_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__30407_SHARP_));
});})(idx,vec__30410,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__30413 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30413),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__30413;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30414 = env;
var G__30415 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__30414,G__30415) : cljs.compiler.resolve_type.call(null,G__30414,G__30415));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__30416_SHARP_){
return cljs.compiler.resolve_type(env,p1__30416_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__30417 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__30418 = cljs.core.seq(vec__30417);
var first__30419 = cljs.core.first(seq__30418);
var seq__30418__$1 = cljs.core.next(seq__30418);
var p = first__30419;
var first__30419__$1 = cljs.core.first(seq__30418__$1);
var seq__30418__$2 = cljs.core.next(seq__30418__$1);
var ts = first__30419__$1;
var first__30419__$2 = cljs.core.first(seq__30418__$2);
var seq__30418__$3 = cljs.core.next(seq__30418__$2);
var n = first__30419__$2;
var xs = seq__30418__$3;
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__8796__auto__){
var and__8796__auto____$1 = ts;
if(cljs.core.truth_(and__8796__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__30420 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__30421 = cljs.core.seq(vec__30420);
var first__30422 = cljs.core.first(seq__30421);
var seq__30421__$1 = cljs.core.next(seq__30421);
var p = first__30422;
var first__30422__$1 = cljs.core.first(seq__30421__$1);
var seq__30421__$2 = cljs.core.next(seq__30421__$1);
var ts = first__30422__$1;
var xs = seq__30421__$2;
if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__8796__auto__){
var and__8796__auto____$1 = ts;
if(cljs.core.truth_(and__8796__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__30424 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__30423 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__30423.cljs$core$IFn$_invoke$arity$1 ? fexpr__30423.cljs$core$IFn$_invoke$arity$1(G__30424) : fexpr__30423.call(null,G__30424));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__30427 = arguments.length;
switch (G__30427) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__30435 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__30425_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__30425_SHARP_);
} else {
return p1__30425_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__30436 = cljs.core.seq(vec__30435);
var first__30437 = cljs.core.first(seq__30436);
var seq__30436__$1 = cljs.core.next(seq__30436);
var x = first__30437;
var ys = seq__30436__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__30438 = cljs.core.seq(ys);
var chunk__30439 = null;
var count__30440 = (0);
var i__30441 = (0);
while(true){
if((i__30441 < count__30440)){
var next_line = chunk__30439.cljs$core$IIndexed$_nth$arity$2(null,i__30441);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__30447 = seq__30438;
var G__30448 = chunk__30439;
var G__30449 = count__30440;
var G__30450 = (i__30441 + (1));
seq__30438 = G__30447;
chunk__30439 = G__30448;
count__30440 = G__30449;
i__30441 = G__30450;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30438);
if(temp__5457__auto__){
var seq__30438__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30438__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__30438__$1);
var G__30451 = cljs.core.chunk_rest(seq__30438__$1);
var G__30452 = c__9739__auto__;
var G__30453 = cljs.core.count(c__9739__auto__);
var G__30454 = (0);
seq__30438 = G__30451;
chunk__30439 = G__30452;
count__30440 = G__30453;
i__30441 = G__30454;
continue;
} else {
var next_line = cljs.core.first(seq__30438__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__30455 = cljs.core.next(seq__30438__$1);
var G__30456 = null;
var G__30457 = (0);
var G__30458 = (0);
seq__30438 = G__30455;
chunk__30439 = G__30456;
count__30440 = G__30457;
i__30441 = G__30458;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

var seq__30442_30459 = cljs.core.seq(docs__$2);
var chunk__30443_30460 = null;
var count__30444_30461 = (0);
var i__30445_30462 = (0);
while(true){
if((i__30445_30462 < count__30444_30461)){
var e_30463 = chunk__30443_30460.cljs$core$IIndexed$_nth$arity$2(null,i__30445_30462);
if(cljs.core.truth_(e_30463)){
print_comment_lines(e_30463);
} else {
}

var G__30464 = seq__30442_30459;
var G__30465 = chunk__30443_30460;
var G__30466 = count__30444_30461;
var G__30467 = (i__30445_30462 + (1));
seq__30442_30459 = G__30464;
chunk__30443_30460 = G__30465;
count__30444_30461 = G__30466;
i__30445_30462 = G__30467;
continue;
} else {
var temp__5457__auto___30468 = cljs.core.seq(seq__30442_30459);
if(temp__5457__auto___30468){
var seq__30442_30469__$1 = temp__5457__auto___30468;
if(cljs.core.chunked_seq_QMARK_(seq__30442_30469__$1)){
var c__9739__auto___30470 = cljs.core.chunk_first(seq__30442_30469__$1);
var G__30471 = cljs.core.chunk_rest(seq__30442_30469__$1);
var G__30472 = c__9739__auto___30470;
var G__30473 = cljs.core.count(c__9739__auto___30470);
var G__30474 = (0);
seq__30442_30459 = G__30471;
chunk__30443_30460 = G__30472;
count__30444_30461 = G__30473;
i__30445_30462 = G__30474;
continue;
} else {
var e_30475 = cljs.core.first(seq__30442_30469__$1);
if(cljs.core.truth_(e_30475)){
print_comment_lines(e_30475);
} else {
}

var G__30476 = cljs.core.next(seq__30442_30469__$1);
var G__30477 = null;
var G__30478 = (0);
var G__30479 = (0);
seq__30442_30459 = G__30476;
chunk__30443_30460 = G__30477;
count__30444_30461 = G__30478;
i__30445_30462 = G__30479;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
var and__8796__auto__ = cljs.core.some(((function (opts){
return (function (p1__30481_SHARP_){
return goog.string.startsWith(p1__30481_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = opts;
if(cljs.core.truth_(and__8796__auto____$1)){
var and__8796__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__8796__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__8796__auto____$2;
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__30482){
var map__30483 = p__30482;
var map__30483__$1 = ((((!((map__30483 == null)))?((((map__30483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30483):map__30483);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,cljs.core.cst$kw$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,cljs.core.cst$kw$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,cljs.core.cst$kw$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,cljs.core.cst$kw$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,cljs.core.cst$kw$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,cljs.core.cst$kw$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,cljs.core.cst$kw$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__8808__auto__ = init;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ("], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$var_DASH_special,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__8796__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__8796__auto__){
return test;
} else {
return and__8796__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__30485){
var map__30486 = p__30485;
var map__30486__$1 = ((((!((map__30486 == null)))?((((map__30486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30486):map__30486);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30486__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30486__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30486__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__30488_30506 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__30489_30507 = null;
var count__30490_30508 = (0);
var i__30491_30509 = (0);
while(true){
if((i__30491_30509 < count__30490_30508)){
var vec__30492_30510 = chunk__30489_30507.cljs$core$IIndexed$_nth$arity$2(null,i__30491_30509);
var i_30511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30492_30510,(0),null);
var param_30512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30492_30510,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_30512);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__30513 = seq__30488_30506;
var G__30514 = chunk__30489_30507;
var G__30515 = count__30490_30508;
var G__30516 = (i__30491_30509 + (1));
seq__30488_30506 = G__30513;
chunk__30489_30507 = G__30514;
count__30490_30508 = G__30515;
i__30491_30509 = G__30516;
continue;
} else {
var temp__5457__auto___30517 = cljs.core.seq(seq__30488_30506);
if(temp__5457__auto___30517){
var seq__30488_30518__$1 = temp__5457__auto___30517;
if(cljs.core.chunked_seq_QMARK_(seq__30488_30518__$1)){
var c__9739__auto___30519 = cljs.core.chunk_first(seq__30488_30518__$1);
var G__30520 = cljs.core.chunk_rest(seq__30488_30518__$1);
var G__30521 = c__9739__auto___30519;
var G__30522 = cljs.core.count(c__9739__auto___30519);
var G__30523 = (0);
seq__30488_30506 = G__30520;
chunk__30489_30507 = G__30521;
count__30490_30508 = G__30522;
i__30491_30509 = G__30523;
continue;
} else {
var vec__30495_30524 = cljs.core.first(seq__30488_30518__$1);
var i_30525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30495_30524,(0),null);
var param_30526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30495_30524,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_30526);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__30527 = cljs.core.next(seq__30488_30518__$1);
var G__30528 = null;
var G__30529 = (0);
var G__30530 = (0);
seq__30488_30506 = G__30527;
chunk__30489_30507 = G__30528;
count__30490_30508 = G__30529;
i__30491_30509 = G__30530;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__30498_30531 = cljs.core.seq(params);
var chunk__30499_30532 = null;
var count__30500_30533 = (0);
var i__30501_30534 = (0);
while(true){
if((i__30501_30534 < count__30500_30533)){
var param_30535 = chunk__30499_30532.cljs$core$IIndexed$_nth$arity$2(null,i__30501_30534);
cljs.compiler.emit(param_30535);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30535,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30536 = seq__30498_30531;
var G__30537 = chunk__30499_30532;
var G__30538 = count__30500_30533;
var G__30539 = (i__30501_30534 + (1));
seq__30498_30531 = G__30536;
chunk__30499_30532 = G__30537;
count__30500_30533 = G__30538;
i__30501_30534 = G__30539;
continue;
} else {
var temp__5457__auto___30540 = cljs.core.seq(seq__30498_30531);
if(temp__5457__auto___30540){
var seq__30498_30541__$1 = temp__5457__auto___30540;
if(cljs.core.chunked_seq_QMARK_(seq__30498_30541__$1)){
var c__9739__auto___30542 = cljs.core.chunk_first(seq__30498_30541__$1);
var G__30543 = cljs.core.chunk_rest(seq__30498_30541__$1);
var G__30544 = c__9739__auto___30542;
var G__30545 = cljs.core.count(c__9739__auto___30542);
var G__30546 = (0);
seq__30498_30531 = G__30543;
chunk__30499_30532 = G__30544;
count__30500_30533 = G__30545;
i__30501_30534 = G__30546;
continue;
} else {
var param_30547 = cljs.core.first(seq__30498_30541__$1);
cljs.compiler.emit(param_30547);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30547,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30548 = cljs.core.next(seq__30498_30541__$1);
var G__30549 = null;
var G__30550 = (0);
var G__30551 = (0);
seq__30498_30531 = G__30548;
chunk__30499_30532 = G__30549;
count__30500_30533 = G__30550;
i__30501_30534 = G__30551;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__30502_30552 = cljs.core.seq(params);
var chunk__30503_30553 = null;
var count__30504_30554 = (0);
var i__30505_30555 = (0);
while(true){
if((i__30505_30555 < count__30504_30554)){
var param_30556 = chunk__30503_30553.cljs$core$IIndexed$_nth$arity$2(null,i__30505_30555);
cljs.compiler.emit(param_30556);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30556,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30557 = seq__30502_30552;
var G__30558 = chunk__30503_30553;
var G__30559 = count__30504_30554;
var G__30560 = (i__30505_30555 + (1));
seq__30502_30552 = G__30557;
chunk__30503_30553 = G__30558;
count__30504_30554 = G__30559;
i__30505_30555 = G__30560;
continue;
} else {
var temp__5457__auto___30561 = cljs.core.seq(seq__30502_30552);
if(temp__5457__auto___30561){
var seq__30502_30562__$1 = temp__5457__auto___30561;
if(cljs.core.chunked_seq_QMARK_(seq__30502_30562__$1)){
var c__9739__auto___30563 = cljs.core.chunk_first(seq__30502_30562__$1);
var G__30564 = cljs.core.chunk_rest(seq__30502_30562__$1);
var G__30565 = c__9739__auto___30563;
var G__30566 = cljs.core.count(c__9739__auto___30563);
var G__30567 = (0);
seq__30502_30552 = G__30564;
chunk__30503_30553 = G__30565;
count__30504_30554 = G__30566;
i__30505_30555 = G__30567;
continue;
} else {
var param_30568 = cljs.core.first(seq__30502_30562__$1);
cljs.compiler.emit(param_30568);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30568,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30569 = cljs.core.next(seq__30502_30562__$1);
var G__30570 = null;
var G__30571 = (0);
var G__30572 = (0);
seq__30502_30552 = G__30569;
chunk__30503_30553 = G__30570;
count__30504_30554 = G__30571;
i__30505_30555 = G__30572;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__30573 = cljs.core.seq(params);
var chunk__30574 = null;
var count__30575 = (0);
var i__30576 = (0);
while(true){
if((i__30576 < count__30575)){
var param = chunk__30574.cljs$core$IIndexed$_nth$arity$2(null,i__30576);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30577 = seq__30573;
var G__30578 = chunk__30574;
var G__30579 = count__30575;
var G__30580 = (i__30576 + (1));
seq__30573 = G__30577;
chunk__30574 = G__30578;
count__30575 = G__30579;
i__30576 = G__30580;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30573);
if(temp__5457__auto__){
var seq__30573__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30573__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__30573__$1);
var G__30581 = cljs.core.chunk_rest(seq__30573__$1);
var G__30582 = c__9739__auto__;
var G__30583 = cljs.core.count(c__9739__auto__);
var G__30584 = (0);
seq__30573 = G__30581;
chunk__30574 = G__30582;
count__30575 = G__30583;
i__30576 = G__30584;
continue;
} else {
var param = cljs.core.first(seq__30573__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30585 = cljs.core.next(seq__30573__$1);
var G__30586 = null;
var G__30587 = (0);
var G__30588 = (0);
seq__30573 = G__30585;
chunk__30574 = G__30586;
count__30575 = G__30587;
i__30576 = G__30588;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__30589){
var map__30590 = p__30589;
var map__30590__$1 = ((((!((map__30590 == null)))?((((map__30590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30590):map__30590);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30590__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30590__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30590__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30590__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30590__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30590__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30590__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30590__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__30592){
var map__30593 = p__30592;
var map__30593__$1 = ((((!((map__30593 == null)))?((((map__30593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30593):map__30593);
var f = map__30593__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30593__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30593__$1,cljs.core.cst$kw$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30593__$1,cljs.core.cst$kw$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30593__$1,cljs.core.cst$kw$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30593__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30593__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30593__$1,cljs.core.cst$kw$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30593__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_30603__$1 = (function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_30604 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_30603__$1);
var delegate_name_30605 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30604),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_30605," = function ("], 0));

var seq__30595_30606 = cljs.core.seq(params);
var chunk__30596_30607 = null;
var count__30597_30608 = (0);
var i__30598_30609 = (0);
while(true){
if((i__30598_30609 < count__30597_30608)){
var param_30610 = chunk__30596_30607.cljs$core$IIndexed$_nth$arity$2(null,i__30598_30609);
cljs.compiler.emit(param_30610);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30610,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30611 = seq__30595_30606;
var G__30612 = chunk__30596_30607;
var G__30613 = count__30597_30608;
var G__30614 = (i__30598_30609 + (1));
seq__30595_30606 = G__30611;
chunk__30596_30607 = G__30612;
count__30597_30608 = G__30613;
i__30598_30609 = G__30614;
continue;
} else {
var temp__5457__auto___30615 = cljs.core.seq(seq__30595_30606);
if(temp__5457__auto___30615){
var seq__30595_30616__$1 = temp__5457__auto___30615;
if(cljs.core.chunked_seq_QMARK_(seq__30595_30616__$1)){
var c__9739__auto___30617 = cljs.core.chunk_first(seq__30595_30616__$1);
var G__30618 = cljs.core.chunk_rest(seq__30595_30616__$1);
var G__30619 = c__9739__auto___30617;
var G__30620 = cljs.core.count(c__9739__auto___30617);
var G__30621 = (0);
seq__30595_30606 = G__30618;
chunk__30596_30607 = G__30619;
count__30597_30608 = G__30620;
i__30598_30609 = G__30621;
continue;
} else {
var param_30622 = cljs.core.first(seq__30595_30616__$1);
cljs.compiler.emit(param_30622);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30622,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30623 = cljs.core.next(seq__30595_30616__$1);
var G__30624 = null;
var G__30625 = (0);
var G__30626 = (0);
seq__30595_30606 = G__30623;
chunk__30596_30607 = G__30624;
count__30597_30608 = G__30625;
i__30598_30609 = G__30626;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_30604," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_30627 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_30627,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_30605,".call(this,"], 0));

var seq__30599_30628 = cljs.core.seq(params);
var chunk__30600_30629 = null;
var count__30601_30630 = (0);
var i__30602_30631 = (0);
while(true){
if((i__30602_30631 < count__30601_30630)){
var param_30632 = chunk__30600_30629.cljs$core$IIndexed$_nth$arity$2(null,i__30602_30631);
cljs.compiler.emit(param_30632);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30632,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30633 = seq__30599_30628;
var G__30634 = chunk__30600_30629;
var G__30635 = count__30601_30630;
var G__30636 = (i__30602_30631 + (1));
seq__30599_30628 = G__30633;
chunk__30600_30629 = G__30634;
count__30601_30630 = G__30635;
i__30602_30631 = G__30636;
continue;
} else {
var temp__5457__auto___30637 = cljs.core.seq(seq__30599_30628);
if(temp__5457__auto___30637){
var seq__30599_30638__$1 = temp__5457__auto___30637;
if(cljs.core.chunked_seq_QMARK_(seq__30599_30638__$1)){
var c__9739__auto___30639 = cljs.core.chunk_first(seq__30599_30638__$1);
var G__30640 = cljs.core.chunk_rest(seq__30599_30638__$1);
var G__30641 = c__9739__auto___30639;
var G__30642 = cljs.core.count(c__9739__auto___30639);
var G__30643 = (0);
seq__30599_30628 = G__30640;
chunk__30600_30629 = G__30641;
count__30601_30630 = G__30642;
i__30602_30631 = G__30643;
continue;
} else {
var param_30644 = cljs.core.first(seq__30599_30638__$1);
cljs.compiler.emit(param_30644);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_30644,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__30645 = cljs.core.next(seq__30599_30638__$1);
var G__30646 = null;
var G__30647 = (0);
var G__30648 = (0);
seq__30599_30628 = G__30645;
chunk__30600_30629 = G__30646;
count__30601_30630 = G__30647;
i__30602_30631 = G__30648;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30604,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30604,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_30603__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30604,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_30605,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_30604,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__30652){
var map__30653 = p__30652;
var map__30653__$1 = ((((!((map__30653 == null)))?((((map__30653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30653):map__30653);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30653__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30653__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30653__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30653__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30653__$1,cljs.core.cst$kw$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30653__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30653__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__30653,map__30653__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30649_SHARP_){
var and__8796__auto__ = p1__30649_SHARP_;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__30649_SHARP_));
} else {
return and__8796__auto__;
}
});})(map__30653,map__30653__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_30688__$1 = (function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_30689 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_30688__$1);
var maxparams_30690 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_30691 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_30688__$1,mname_30689,maxparams_30690,loop_locals,map__30653,map__30653__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_30689),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_30688__$1,mname_30689,maxparams_30690,loop_locals,map__30653,map__30653__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_30692 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_30688__$1,mname_30689,maxparams_30690,mmap_30691,loop_locals,map__30653,map__30653__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30650_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30650_SHARP_)));
});})(name_30688__$1,mname_30689,maxparams_30690,mmap_30691,loop_locals,map__30653,map__30653__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_30691));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_30689," = null;"], 0));

var seq__30655_30693 = cljs.core.seq(ms_30692);
var chunk__30656_30694 = null;
var count__30657_30695 = (0);
var i__30658_30696 = (0);
while(true){
if((i__30658_30696 < count__30657_30695)){
var vec__30659_30697 = chunk__30656_30694.cljs$core$IIndexed$_nth$arity$2(null,i__30658_30696);
var n_30698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30659_30697,(0),null);
var meth_30699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30659_30697,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_30698," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_30699))){
cljs.compiler.emit_variadic_fn_method(meth_30699);
} else {
cljs.compiler.emit_fn_method(meth_30699);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__30700 = seq__30655_30693;
var G__30701 = chunk__30656_30694;
var G__30702 = count__30657_30695;
var G__30703 = (i__30658_30696 + (1));
seq__30655_30693 = G__30700;
chunk__30656_30694 = G__30701;
count__30657_30695 = G__30702;
i__30658_30696 = G__30703;
continue;
} else {
var temp__5457__auto___30704 = cljs.core.seq(seq__30655_30693);
if(temp__5457__auto___30704){
var seq__30655_30705__$1 = temp__5457__auto___30704;
if(cljs.core.chunked_seq_QMARK_(seq__30655_30705__$1)){
var c__9739__auto___30706 = cljs.core.chunk_first(seq__30655_30705__$1);
var G__30707 = cljs.core.chunk_rest(seq__30655_30705__$1);
var G__30708 = c__9739__auto___30706;
var G__30709 = cljs.core.count(c__9739__auto___30706);
var G__30710 = (0);
seq__30655_30693 = G__30707;
chunk__30656_30694 = G__30708;
count__30657_30695 = G__30709;
i__30658_30696 = G__30710;
continue;
} else {
var vec__30662_30711 = cljs.core.first(seq__30655_30705__$1);
var n_30712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30662_30711,(0),null);
var meth_30713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30662_30711,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_30712," = "], 0));

if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_30713))){
cljs.compiler.emit_variadic_fn_method(meth_30713);
} else {
cljs.compiler.emit_fn_method(meth_30713);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__30714 = cljs.core.next(seq__30655_30705__$1);
var G__30715 = null;
var G__30716 = (0);
var G__30717 = (0);
seq__30655_30693 = G__30714;
chunk__30656_30694 = G__30715;
count__30657_30695 = G__30716;
i__30658_30696 = G__30717;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30689," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_30690),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_30690)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_30690));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__30665_30718 = cljs.core.seq(ms_30692);
var chunk__30666_30719 = null;
var count__30667_30720 = (0);
var i__30668_30721 = (0);
while(true){
if((i__30668_30721 < count__30667_30720)){
var vec__30669_30722 = chunk__30666_30719.cljs$core$IIndexed$_nth$arity$2(null,i__30668_30721);
var n_30723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30669_30722,(0),null);
var meth_30724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30669_30722,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_30724))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_30725 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_30725," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_30726 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_30725," = new cljs.core.IndexedSeq(",a_30726,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_30723,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_30690)),(((cljs.core.count(maxparams_30690) > (1)))?", ":null),restarg_30725,");"], 0));
} else {
var pcnt_30727 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_30724));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_30727,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_30723,".call(this",(((pcnt_30727 === (0)))?null:cljs.core._conj((function (){var x__9762__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_30727,maxparams_30690));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),",")),");"], 0));
}

var G__30728 = seq__30665_30718;
var G__30729 = chunk__30666_30719;
var G__30730 = count__30667_30720;
var G__30731 = (i__30668_30721 + (1));
seq__30665_30718 = G__30728;
chunk__30666_30719 = G__30729;
count__30667_30720 = G__30730;
i__30668_30721 = G__30731;
continue;
} else {
var temp__5457__auto___30732 = cljs.core.seq(seq__30665_30718);
if(temp__5457__auto___30732){
var seq__30665_30733__$1 = temp__5457__auto___30732;
if(cljs.core.chunked_seq_QMARK_(seq__30665_30733__$1)){
var c__9739__auto___30734 = cljs.core.chunk_first(seq__30665_30733__$1);
var G__30735 = cljs.core.chunk_rest(seq__30665_30733__$1);
var G__30736 = c__9739__auto___30734;
var G__30737 = cljs.core.count(c__9739__auto___30734);
var G__30738 = (0);
seq__30665_30718 = G__30735;
chunk__30666_30719 = G__30736;
count__30667_30720 = G__30737;
i__30668_30721 = G__30738;
continue;
} else {
var vec__30672_30739 = cljs.core.first(seq__30665_30733__$1);
var n_30740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30672_30739,(0),null);
var meth_30741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30672_30739,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_30741))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_30742 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_30742," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_30743 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_30742," = new cljs.core.IndexedSeq(",a_30743,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_30740,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_30690)),(((cljs.core.count(maxparams_30690) > (1)))?", ":null),restarg_30742,");"], 0));
} else {
var pcnt_30744 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_30741));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_30744,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_30740,".call(this",(((pcnt_30744 === (0)))?null:cljs.core._conj((function (){var x__9762__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_30744,maxparams_30690));
return cljs.core._conj(cljs.core.List.EMPTY,x__9762__auto__);
})(),",")),");"], 0));
}

var G__30745 = cljs.core.next(seq__30665_30733__$1);
var G__30746 = null;
var G__30747 = (0);
var G__30748 = (0);
seq__30665_30718 = G__30745;
chunk__30666_30719 = G__30746;
count__30667_30720 = G__30747;
i__30668_30721 = G__30748;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw(new Error('Invalid arity: ' + (arguments.length - 1)));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30689,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30689,".cljs$lang$applyTo = ",cljs.core.some(((function (name_30688__$1,mname_30689,maxparams_30690,mmap_30691,ms_30692,loop_locals,map__30653,map__30653__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__30651_SHARP_){
var vec__30675 = p1__30651_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30675,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30675,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_30688__$1,mname_30689,maxparams_30690,mmap_30691,ms_30692,loop_locals,map__30653,map__30653__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_30692),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__30678_30749 = cljs.core.seq(ms_30692);
var chunk__30679_30750 = null;
var count__30680_30751 = (0);
var i__30681_30752 = (0);
while(true){
if((i__30681_30752 < count__30680_30751)){
var vec__30682_30753 = chunk__30679_30750.cljs$core$IIndexed$_nth$arity$2(null,i__30681_30752);
var n_30754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30682_30753,(0),null);
var meth_30755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30682_30753,(1),null);
var c_30756 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_30755));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_30755))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30689,".cljs$core$IFn$_invoke$arity$variadic = ",n_30754,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30689,".cljs$core$IFn$_invoke$arity$",c_30756," = ",n_30754,";"], 0));
}

var G__30757 = seq__30678_30749;
var G__30758 = chunk__30679_30750;
var G__30759 = count__30680_30751;
var G__30760 = (i__30681_30752 + (1));
seq__30678_30749 = G__30757;
chunk__30679_30750 = G__30758;
count__30680_30751 = G__30759;
i__30681_30752 = G__30760;
continue;
} else {
var temp__5457__auto___30761 = cljs.core.seq(seq__30678_30749);
if(temp__5457__auto___30761){
var seq__30678_30762__$1 = temp__5457__auto___30761;
if(cljs.core.chunked_seq_QMARK_(seq__30678_30762__$1)){
var c__9739__auto___30763 = cljs.core.chunk_first(seq__30678_30762__$1);
var G__30764 = cljs.core.chunk_rest(seq__30678_30762__$1);
var G__30765 = c__9739__auto___30763;
var G__30766 = cljs.core.count(c__9739__auto___30763);
var G__30767 = (0);
seq__30678_30749 = G__30764;
chunk__30679_30750 = G__30765;
count__30680_30751 = G__30766;
i__30681_30752 = G__30767;
continue;
} else {
var vec__30685_30768 = cljs.core.first(seq__30678_30762__$1);
var n_30769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30685_30768,(0),null);
var meth_30770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30685_30768,(1),null);
var c_30771 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_30770));
if(cljs.core.truth_(cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(meth_30770))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30689,".cljs$core$IFn$_invoke$arity$variadic = ",n_30769,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_30689,".cljs$core$IFn$_invoke$arity$",c_30771," = ",n_30769,";"], 0));
}

var G__30772 = cljs.core.next(seq__30678_30762__$1);
var G__30773 = null;
var G__30774 = (0);
var G__30775 = (0);
seq__30678_30749 = G__30772;
chunk__30679_30750 = G__30773;
count__30680_30751 = G__30774;
i__30681_30752 = G__30775;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_30689,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__30776){
var map__30777 = p__30776;
var map__30777__$1 = ((((!((map__30777 == null)))?((((map__30777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30777):map__30777);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30777__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30777__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30777__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8796__auto__ = statements;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__8796__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__30779_30783 = cljs.core.seq(statements);
var chunk__30780_30784 = null;
var count__30781_30785 = (0);
var i__30782_30786 = (0);
while(true){
if((i__30782_30786 < count__30781_30785)){
var s_30787 = chunk__30780_30784.cljs$core$IIndexed$_nth$arity$2(null,i__30782_30786);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30787], 0));

var G__30788 = seq__30779_30783;
var G__30789 = chunk__30780_30784;
var G__30790 = count__30781_30785;
var G__30791 = (i__30782_30786 + (1));
seq__30779_30783 = G__30788;
chunk__30780_30784 = G__30789;
count__30781_30785 = G__30790;
i__30782_30786 = G__30791;
continue;
} else {
var temp__5457__auto___30792 = cljs.core.seq(seq__30779_30783);
if(temp__5457__auto___30792){
var seq__30779_30793__$1 = temp__5457__auto___30792;
if(cljs.core.chunked_seq_QMARK_(seq__30779_30793__$1)){
var c__9739__auto___30794 = cljs.core.chunk_first(seq__30779_30793__$1);
var G__30795 = cljs.core.chunk_rest(seq__30779_30793__$1);
var G__30796 = c__9739__auto___30794;
var G__30797 = cljs.core.count(c__9739__auto___30794);
var G__30798 = (0);
seq__30779_30783 = G__30795;
chunk__30780_30784 = G__30796;
count__30781_30785 = G__30797;
i__30782_30786 = G__30798;
continue;
} else {
var s_30799 = cljs.core.first(seq__30779_30793__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_30799], 0));

var G__30800 = cljs.core.next(seq__30779_30793__$1);
var G__30801 = null;
var G__30802 = (0);
var G__30803 = (0);
seq__30779_30783 = G__30800;
chunk__30780_30784 = G__30801;
count__30781_30785 = G__30802;
i__30782_30786 = G__30803;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__8796__auto__ = statements;
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context);
} else {
return and__8796__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__30804){
var map__30805 = p__30804;
var map__30805__$1 = ((((!((map__30805 == null)))?((((map__30805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30805):map__30805);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,cljs.core.cst$kw$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,cljs.core.cst$kw$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30805__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8808__auto__ = name;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__30807,is_loop){
var map__30808 = p__30807;
var map__30808__$1 = ((((!((map__30808 == null)))?((((map__30808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30808):map__30808);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30808__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30808__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30808__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_30810_30819 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_30810_30819,context,map__30808,map__30808__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_30810_30819,context,map__30808,map__30808__$1,bindings,expr,env))
,bindings):null));

try{var seq__30811_30820 = cljs.core.seq(bindings);
var chunk__30812_30821 = null;
var count__30813_30822 = (0);
var i__30814_30823 = (0);
while(true){
if((i__30814_30823 < count__30813_30822)){
var map__30815_30824 = chunk__30812_30821.cljs$core$IIndexed$_nth$arity$2(null,i__30814_30823);
var map__30815_30825__$1 = ((((!((map__30815_30824 == null)))?((((map__30815_30824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30815_30824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30815_30824):map__30815_30824);
var binding_30826 = map__30815_30825__$1;
var init_30827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30815_30825__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_30826);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_30827,";"], 0));

var G__30828 = seq__30811_30820;
var G__30829 = chunk__30812_30821;
var G__30830 = count__30813_30822;
var G__30831 = (i__30814_30823 + (1));
seq__30811_30820 = G__30828;
chunk__30812_30821 = G__30829;
count__30813_30822 = G__30830;
i__30814_30823 = G__30831;
continue;
} else {
var temp__5457__auto___30832 = cljs.core.seq(seq__30811_30820);
if(temp__5457__auto___30832){
var seq__30811_30833__$1 = temp__5457__auto___30832;
if(cljs.core.chunked_seq_QMARK_(seq__30811_30833__$1)){
var c__9739__auto___30834 = cljs.core.chunk_first(seq__30811_30833__$1);
var G__30835 = cljs.core.chunk_rest(seq__30811_30833__$1);
var G__30836 = c__9739__auto___30834;
var G__30837 = cljs.core.count(c__9739__auto___30834);
var G__30838 = (0);
seq__30811_30820 = G__30835;
chunk__30812_30821 = G__30836;
count__30813_30822 = G__30837;
i__30814_30823 = G__30838;
continue;
} else {
var map__30817_30839 = cljs.core.first(seq__30811_30833__$1);
var map__30817_30840__$1 = ((((!((map__30817_30839 == null)))?((((map__30817_30839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30817_30839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30817_30839):map__30817_30839);
var binding_30841 = map__30817_30840__$1;
var init_30842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30817_30840__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_30841);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_30842,";"], 0));

var G__30843 = cljs.core.next(seq__30811_30833__$1);
var G__30844 = null;
var G__30845 = (0);
var G__30846 = (0);
seq__30811_30820 = G__30843;
chunk__30812_30821 = G__30844;
count__30813_30822 = G__30845;
i__30814_30823 = G__30846;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_30810_30819;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__30847){
var map__30848 = p__30847;
var map__30848__$1 = ((((!((map__30848 == null)))?((((map__30848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30848):map__30848);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30848__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30848__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30848__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__9853__auto___30850 = cljs.core.count(exprs);
var i_30851 = (0);
while(true){
if((i_30851 < n__9853__auto___30850)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_30851) : temps.call(null,i_30851))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_30851) : exprs.call(null,i_30851)),";"], 0));

var G__30852 = (i_30851 + (1));
i_30851 = G__30852;
continue;
} else {
}
break;
}

var n__9853__auto___30853 = cljs.core.count(exprs);
var i_30854 = (0);
while(true){
if((i_30854 < n__9853__auto___30853)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_30854) : params.call(null,i_30854)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_30854) : temps.call(null,i_30854)),";"], 0));

var G__30855 = (i_30854 + (1));
i_30854 = G__30855;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__30856){
var map__30857 = p__30856;
var map__30857__$1 = ((((!((map__30857 == null)))?((((map__30857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30857):map__30857);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30857__$1,cljs.core.cst$kw$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30857__$1,cljs.core.cst$kw$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30857__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__30859_30867 = cljs.core.seq(bindings);
var chunk__30860_30868 = null;
var count__30861_30869 = (0);
var i__30862_30870 = (0);
while(true){
if((i__30862_30870 < count__30861_30869)){
var map__30863_30871 = chunk__30860_30868.cljs$core$IIndexed$_nth$arity$2(null,i__30862_30870);
var map__30863_30872__$1 = ((((!((map__30863_30871 == null)))?((((map__30863_30871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30863_30871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30863_30871):map__30863_30871);
var binding_30873 = map__30863_30872__$1;
var init_30874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30863_30872__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_30873)," = ",init_30874,";"], 0));

var G__30875 = seq__30859_30867;
var G__30876 = chunk__30860_30868;
var G__30877 = count__30861_30869;
var G__30878 = (i__30862_30870 + (1));
seq__30859_30867 = G__30875;
chunk__30860_30868 = G__30876;
count__30861_30869 = G__30877;
i__30862_30870 = G__30878;
continue;
} else {
var temp__5457__auto___30879 = cljs.core.seq(seq__30859_30867);
if(temp__5457__auto___30879){
var seq__30859_30880__$1 = temp__5457__auto___30879;
if(cljs.core.chunked_seq_QMARK_(seq__30859_30880__$1)){
var c__9739__auto___30881 = cljs.core.chunk_first(seq__30859_30880__$1);
var G__30882 = cljs.core.chunk_rest(seq__30859_30880__$1);
var G__30883 = c__9739__auto___30881;
var G__30884 = cljs.core.count(c__9739__auto___30881);
var G__30885 = (0);
seq__30859_30867 = G__30882;
chunk__30860_30868 = G__30883;
count__30861_30869 = G__30884;
i__30862_30870 = G__30885;
continue;
} else {
var map__30865_30886 = cljs.core.first(seq__30859_30880__$1);
var map__30865_30887__$1 = ((((!((map__30865_30886 == null)))?((((map__30865_30886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30865_30886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30865_30886):map__30865_30886);
var binding_30888 = map__30865_30887__$1;
var init_30889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30865_30887__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_30888)," = ",init_30889,";"], 0));

var G__30890 = cljs.core.next(seq__30859_30880__$1);
var G__30891 = null;
var G__30892 = (0);
var G__30893 = (0);
seq__30859_30867 = G__30890;
chunk__30860_30868 = G__30891;
count__30861_30869 = G__30892;
i__30862_30870 = G__30893;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__30896){
var map__30897 = p__30896;
var map__30897__$1 = ((((!((map__30897 == null)))?((((map__30897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30897):map__30897);
var expr = map__30897__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30897__$1,cljs.core.cst$kw$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30897__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30897__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8796__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8796__auto__){
var and__8796__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__8796__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8796__auto__ = protocol;
if(cljs.core.truth_(and__8796__auto__)){
var and__8796__auto____$1 = tag;
if(cljs.core.truth_(and__8796__auto____$1)){
var or__8808__auto__ = (function (){var and__8796__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8796__auto____$2){
var and__8796__auto____$3 = protocol;
if(cljs.core.truth_(and__8796__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__8796__auto____$3;
}
} else {
return and__8796__auto____$2;
}
})();
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var and__8796__auto____$2 = (function (){var or__8808__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__8808__auto____$1){
return or__8808__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8796__auto____$2)){
var or__8808__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__8808__auto____$1){
return or__8808__auto____$1;
} else {
var and__8796__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__8796__auto____$3){
var and__8796__auto____$4 = cljs.core.not((function (){var fexpr__30907 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,null,cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$any,null,cljs.core.cst$sym$js,null,cljs.core.cst$sym$number,null,cljs.core.cst$sym$clj_DASH_or_DASH_nil,null,cljs.core.cst$sym$array,null,cljs.core.cst$sym$string,null,cljs.core.cst$sym$function,null,cljs.core.cst$sym$clj_DASH_nil,null], null), null);
return (fexpr__30907.cljs$core$IFn$_invoke$arity$1 ? fexpr__30907.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__30907.call(null,tag));
})());
if(and__8796__auto____$4){
var temp__5457__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__8796__auto____$4;
}
} else {
return and__8796__auto____$3;
}
}
} else {
return and__8796__auto____$2;
}
}
} else {
return and__8796__auto____$1;
}
} else {
return and__8796__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8808__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__8808__auto__){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__8808__auto____$1)){
return or__8808__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.analyzer.infer_tag(env,f))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$constant)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__30899 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8796__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8796__auto__)){
return (arity > mfa);
} else {
return and__8796__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30897,map__30897__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30897,map__30897__$1,expr,f,args,env){
return (function (p1__30894_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30894_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30897,map__30897__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30897,map__30897__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30897,map__30897__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30897,map__30897__$1,expr,f,args,env){
return (function (p1__30895_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30895_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30897,map__30897__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30897,map__30897__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30899,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30899,(1),null);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_30908 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_30908,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30909 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_30909,args)),(((mfa_30909 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_30909,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
var or__8808__auto____$1 = js_QMARK_;
if(or__8808__auto____$1){
return or__8808__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$var))){
var fprop_30910 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_30910," ? ",f__$1,fprop_30910,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_30910," ? ",f__$1,fprop_30910,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__30911){
var map__30912 = p__30911;
var map__30912__$1 = ((((!((map__30912 == null)))?((((map__30912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30912):map__30912);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30912__$1,cljs.core.cst$kw$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30912__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30912__$1,cljs.core.cst$kw$env);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__30914){
var map__30915 = p__30914;
var map__30915__$1 = ((((!((map__30915 == null)))?((((map__30915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30915):map__30915);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30915__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30915__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30915__$1,cljs.core.cst$kw$env);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__30917 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__30917__$1 = ((((!((map__30917 == null)))?((((map__30917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30917):map__30917);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30917__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30917__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__30918 = options;
var map__30918__$1 = ((((!((map__30918 == null)))?((((map__30918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30918):map__30918);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30918__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30918__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__30919 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__30925 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__30925__$1 = ((((!((map__30925 == null)))?((((map__30925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30925):map__30925);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30925__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30925__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30919,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30919,(1),null);
var map__30922 = cljs.core.group_by(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
var map__30922__$1 = ((((!((map__30922 == null)))?((((map__30922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30922):map__30922);
var global_exports_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30922__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30922__$1,false);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);"], 0));
} else {
}

var seq__30928_30944 = cljs.core.seq(libs_to_load__$1);
var chunk__30929_30945 = null;
var count__30930_30946 = (0);
var i__30931_30947 = (0);
while(true){
if((i__30931_30947 < count__30930_30946)){
var lib_30948 = chunk__30929_30945.cljs$core$IIndexed$_nth$arity$2(null,i__30931_30947);
if((cljs.analyzer.foreign_dep_QMARK_(lib_30948)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_30948),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30948),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_30948),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30948),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30948),"');"], 0));

}
}
}

var G__30949 = seq__30928_30944;
var G__30950 = chunk__30929_30945;
var G__30951 = count__30930_30946;
var G__30952 = (i__30931_30947 + (1));
seq__30928_30944 = G__30949;
chunk__30929_30945 = G__30950;
count__30930_30946 = G__30951;
i__30931_30947 = G__30952;
continue;
} else {
var temp__5457__auto___30953 = cljs.core.seq(seq__30928_30944);
if(temp__5457__auto___30953){
var seq__30928_30954__$1 = temp__5457__auto___30953;
if(cljs.core.chunked_seq_QMARK_(seq__30928_30954__$1)){
var c__9739__auto___30955 = cljs.core.chunk_first(seq__30928_30954__$1);
var G__30956 = cljs.core.chunk_rest(seq__30928_30954__$1);
var G__30957 = c__9739__auto___30955;
var G__30958 = cljs.core.count(c__9739__auto___30955);
var G__30959 = (0);
seq__30928_30944 = G__30956;
chunk__30929_30945 = G__30957;
count__30930_30946 = G__30958;
i__30931_30947 = G__30959;
continue;
} else {
var lib_30960 = cljs.core.first(seq__30928_30954__$1);
if((cljs.analyzer.foreign_dep_QMARK_(lib_30960)) && (!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))){
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_30960),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30960),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8808__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_30960),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30960),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_30960),"');"], 0));

}
}
}

var G__30961 = cljs.core.next(seq__30928_30954__$1);
var G__30962 = null;
var G__30963 = (0);
var G__30964 = (0);
seq__30928_30944 = G__30961;
chunk__30929_30945 = G__30962;
count__30930_30946 = G__30963;
i__30931_30947 = G__30964;
continue;
}
} else {
}
}
break;
}

var seq__30932_30965 = cljs.core.seq(node_libs);
var chunk__30933_30966 = null;
var count__30934_30967 = (0);
var i__30935_30968 = (0);
while(true){
if((i__30935_30968 < count__30934_30967)){
var lib_30969 = chunk__30933_30966.cljs$core$IIndexed$_nth$arity$2(null,i__30935_30968);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_30969)," = require('",lib_30969,"');"], 0));

var G__30970 = seq__30932_30965;
var G__30971 = chunk__30933_30966;
var G__30972 = count__30934_30967;
var G__30973 = (i__30935_30968 + (1));
seq__30932_30965 = G__30970;
chunk__30933_30966 = G__30971;
count__30934_30967 = G__30972;
i__30935_30968 = G__30973;
continue;
} else {
var temp__5457__auto___30974 = cljs.core.seq(seq__30932_30965);
if(temp__5457__auto___30974){
var seq__30932_30975__$1 = temp__5457__auto___30974;
if(cljs.core.chunked_seq_QMARK_(seq__30932_30975__$1)){
var c__9739__auto___30976 = cljs.core.chunk_first(seq__30932_30975__$1);
var G__30977 = cljs.core.chunk_rest(seq__30932_30975__$1);
var G__30978 = c__9739__auto___30976;
var G__30979 = cljs.core.count(c__9739__auto___30976);
var G__30980 = (0);
seq__30932_30965 = G__30977;
chunk__30933_30966 = G__30978;
count__30934_30967 = G__30979;
i__30935_30968 = G__30980;
continue;
} else {
var lib_30981 = cljs.core.first(seq__30932_30975__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_30981)," = require('",lib_30981,"');"], 0));

var G__30982 = cljs.core.next(seq__30932_30975__$1);
var G__30983 = null;
var G__30984 = (0);
var G__30985 = (0);
seq__30932_30965 = G__30982;
chunk__30933_30966 = G__30983;
count__30934_30967 = G__30984;
i__30935_30968 = G__30985;
continue;
}
} else {
}
}
break;
}

var seq__30936_30986 = cljs.core.seq(global_exports_libs);
var chunk__30937_30987 = null;
var count__30938_30988 = (0);
var i__30939_30989 = (0);
while(true){
if((i__30939_30989 < count__30938_30988)){
var lib_30990 = chunk__30937_30987.cljs$core$IIndexed$_nth$arity$2(null,i__30939_30989);
var map__30940_30991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_30990));
var map__30940_30992__$1 = ((((!((map__30940_30991 == null)))?((((map__30940_30991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30940_30991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30940_30991):map__30940_30991);
var global_exports_30993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30940_30992__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_30990)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_30993,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_30990)),";"], 0));

var G__30994 = seq__30936_30986;
var G__30995 = chunk__30937_30987;
var G__30996 = count__30938_30988;
var G__30997 = (i__30939_30989 + (1));
seq__30936_30986 = G__30994;
chunk__30937_30987 = G__30995;
count__30938_30988 = G__30996;
i__30939_30989 = G__30997;
continue;
} else {
var temp__5457__auto___30998 = cljs.core.seq(seq__30936_30986);
if(temp__5457__auto___30998){
var seq__30936_30999__$1 = temp__5457__auto___30998;
if(cljs.core.chunked_seq_QMARK_(seq__30936_30999__$1)){
var c__9739__auto___31000 = cljs.core.chunk_first(seq__30936_30999__$1);
var G__31001 = cljs.core.chunk_rest(seq__30936_30999__$1);
var G__31002 = c__9739__auto___31000;
var G__31003 = cljs.core.count(c__9739__auto___31000);
var G__31004 = (0);
seq__30936_30986 = G__31001;
chunk__30937_30987 = G__31002;
count__30938_30988 = G__31003;
i__30939_30989 = G__31004;
continue;
} else {
var lib_31005 = cljs.core.first(seq__30936_30999__$1);
var map__30942_31006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_31005));
var map__30942_31007__$1 = ((((!((map__30942_31006 == null)))?((((map__30942_31006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30942_31006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30942_31006):map__30942_31006);
var global_exports_31008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30942_31007__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib_31005)," = goog.global.",cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports_31008,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_31005)),";"], 0));

var G__31009 = cljs.core.next(seq__30936_30999__$1);
var G__31010 = null;
var G__31011 = (0);
var G__31012 = (0);
seq__30936_30986 = G__31009;
chunk__30937_30987 = G__31010;
count__30938_30988 = G__31011;
i__30939_30989 = G__31012;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__31013){
var map__31014 = p__31013;
var map__31014__$1 = ((((!((map__31014 == null)))?((((map__31014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31014):map__31014);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null;"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__31016){
var map__31017 = p__31016;
var map__31017__$1 = ((((!((map__31017 == null)))?((((map__31017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31017):map__31017);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,cljs.core.cst$kw$deps);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype_STAR_,(function (p__31019){
var map__31020 = p__31019;
var map__31020__$1 = ((((!((map__31020 == null)))?((((map__31020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31020):map__31020);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31020__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31020__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31020__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31020__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31020__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__31022_31040 = cljs.core.seq(protocols);
var chunk__31023_31041 = null;
var count__31024_31042 = (0);
var i__31025_31043 = (0);
while(true){
if((i__31025_31043 < count__31024_31042)){
var protocol_31044 = chunk__31023_31041.cljs$core$IIndexed$_nth$arity$2(null,i__31025_31043);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31044)].join('')),"}"], 0));

var G__31045 = seq__31022_31040;
var G__31046 = chunk__31023_31041;
var G__31047 = count__31024_31042;
var G__31048 = (i__31025_31043 + (1));
seq__31022_31040 = G__31045;
chunk__31023_31041 = G__31046;
count__31024_31042 = G__31047;
i__31025_31043 = G__31048;
continue;
} else {
var temp__5457__auto___31049 = cljs.core.seq(seq__31022_31040);
if(temp__5457__auto___31049){
var seq__31022_31050__$1 = temp__5457__auto___31049;
if(cljs.core.chunked_seq_QMARK_(seq__31022_31050__$1)){
var c__9739__auto___31051 = cljs.core.chunk_first(seq__31022_31050__$1);
var G__31052 = cljs.core.chunk_rest(seq__31022_31050__$1);
var G__31053 = c__9739__auto___31051;
var G__31054 = cljs.core.count(c__9739__auto___31051);
var G__31055 = (0);
seq__31022_31040 = G__31052;
chunk__31023_31041 = G__31053;
count__31024_31042 = G__31054;
i__31025_31043 = G__31055;
continue;
} else {
var protocol_31056 = cljs.core.first(seq__31022_31050__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31056)].join('')),"}"], 0));

var G__31057 = cljs.core.next(seq__31022_31050__$1);
var G__31058 = null;
var G__31059 = (0);
var G__31060 = (0);
seq__31022_31040 = G__31057;
chunk__31023_31041 = G__31058;
count__31024_31042 = G__31059;
i__31025_31043 = G__31060;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__31026_31061 = cljs.core.seq(fields__$1);
var chunk__31027_31062 = null;
var count__31028_31063 = (0);
var i__31029_31064 = (0);
while(true){
if((i__31029_31064 < count__31028_31063)){
var fld_31065 = chunk__31027_31062.cljs$core$IIndexed$_nth$arity$2(null,i__31029_31064);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_31065," = ",fld_31065,";"], 0));

var G__31066 = seq__31026_31061;
var G__31067 = chunk__31027_31062;
var G__31068 = count__31028_31063;
var G__31069 = (i__31029_31064 + (1));
seq__31026_31061 = G__31066;
chunk__31027_31062 = G__31067;
count__31028_31063 = G__31068;
i__31029_31064 = G__31069;
continue;
} else {
var temp__5457__auto___31070 = cljs.core.seq(seq__31026_31061);
if(temp__5457__auto___31070){
var seq__31026_31071__$1 = temp__5457__auto___31070;
if(cljs.core.chunked_seq_QMARK_(seq__31026_31071__$1)){
var c__9739__auto___31072 = cljs.core.chunk_first(seq__31026_31071__$1);
var G__31073 = cljs.core.chunk_rest(seq__31026_31071__$1);
var G__31074 = c__9739__auto___31072;
var G__31075 = cljs.core.count(c__9739__auto___31072);
var G__31076 = (0);
seq__31026_31061 = G__31073;
chunk__31027_31062 = G__31074;
count__31028_31063 = G__31075;
i__31029_31064 = G__31076;
continue;
} else {
var fld_31077 = cljs.core.first(seq__31026_31071__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_31077," = ",fld_31077,";"], 0));

var G__31078 = cljs.core.next(seq__31026_31071__$1);
var G__31079 = null;
var G__31080 = (0);
var G__31081 = (0);
seq__31026_31061 = G__31078;
chunk__31027_31062 = G__31079;
count__31028_31063 = G__31080;
i__31029_31064 = G__31081;
continue;
}
} else {
}
}
break;
}

var seq__31030_31082 = cljs.core.seq(pmasks);
var chunk__31031_31083 = null;
var count__31032_31084 = (0);
var i__31033_31085 = (0);
while(true){
if((i__31033_31085 < count__31032_31084)){
var vec__31034_31086 = chunk__31031_31083.cljs$core$IIndexed$_nth$arity$2(null,i__31033_31085);
var pno_31087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31034_31086,(0),null);
var pmask_31088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31034_31086,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_31087,"$ = ",pmask_31088,";"], 0));

var G__31089 = seq__31030_31082;
var G__31090 = chunk__31031_31083;
var G__31091 = count__31032_31084;
var G__31092 = (i__31033_31085 + (1));
seq__31030_31082 = G__31089;
chunk__31031_31083 = G__31090;
count__31032_31084 = G__31091;
i__31033_31085 = G__31092;
continue;
} else {
var temp__5457__auto___31093 = cljs.core.seq(seq__31030_31082);
if(temp__5457__auto___31093){
var seq__31030_31094__$1 = temp__5457__auto___31093;
if(cljs.core.chunked_seq_QMARK_(seq__31030_31094__$1)){
var c__9739__auto___31095 = cljs.core.chunk_first(seq__31030_31094__$1);
var G__31096 = cljs.core.chunk_rest(seq__31030_31094__$1);
var G__31097 = c__9739__auto___31095;
var G__31098 = cljs.core.count(c__9739__auto___31095);
var G__31099 = (0);
seq__31030_31082 = G__31096;
chunk__31031_31083 = G__31097;
count__31032_31084 = G__31098;
i__31033_31085 = G__31099;
continue;
} else {
var vec__31037_31100 = cljs.core.first(seq__31030_31094__$1);
var pno_31101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31037_31100,(0),null);
var pmask_31102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31037_31100,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_31101,"$ = ",pmask_31102,";"], 0));

var G__31103 = cljs.core.next(seq__31030_31094__$1);
var G__31104 = null;
var G__31105 = (0);
var G__31106 = (0);
seq__31030_31082 = G__31103;
chunk__31031_31083 = G__31104;
count__31032_31084 = G__31105;
i__31033_31085 = G__31106;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord_STAR_,(function (p__31107){
var map__31108 = p__31107;
var map__31108__$1 = ((((!((map__31108 == null)))?((((map__31108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31108):map__31108);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31108__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31108__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31108__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31108__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31108__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__31110_31128 = cljs.core.seq(protocols);
var chunk__31111_31129 = null;
var count__31112_31130 = (0);
var i__31113_31131 = (0);
while(true){
if((i__31113_31131 < count__31112_31130)){
var protocol_31132 = chunk__31111_31129.cljs$core$IIndexed$_nth$arity$2(null,i__31113_31131);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31132)].join('')),"}"], 0));

var G__31133 = seq__31110_31128;
var G__31134 = chunk__31111_31129;
var G__31135 = count__31112_31130;
var G__31136 = (i__31113_31131 + (1));
seq__31110_31128 = G__31133;
chunk__31111_31129 = G__31134;
count__31112_31130 = G__31135;
i__31113_31131 = G__31136;
continue;
} else {
var temp__5457__auto___31137 = cljs.core.seq(seq__31110_31128);
if(temp__5457__auto___31137){
var seq__31110_31138__$1 = temp__5457__auto___31137;
if(cljs.core.chunked_seq_QMARK_(seq__31110_31138__$1)){
var c__9739__auto___31139 = cljs.core.chunk_first(seq__31110_31138__$1);
var G__31140 = cljs.core.chunk_rest(seq__31110_31138__$1);
var G__31141 = c__9739__auto___31139;
var G__31142 = cljs.core.count(c__9739__auto___31139);
var G__31143 = (0);
seq__31110_31128 = G__31140;
chunk__31111_31129 = G__31141;
count__31112_31130 = G__31142;
i__31113_31131 = G__31143;
continue;
} else {
var protocol_31144 = cljs.core.first(seq__31110_31138__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_31144)].join('')),"}"], 0));

var G__31145 = cljs.core.next(seq__31110_31138__$1);
var G__31146 = null;
var G__31147 = (0);
var G__31148 = (0);
seq__31110_31128 = G__31145;
chunk__31111_31129 = G__31146;
count__31112_31130 = G__31147;
i__31113_31131 = G__31148;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__31114_31149 = cljs.core.seq(fields__$1);
var chunk__31115_31150 = null;
var count__31116_31151 = (0);
var i__31117_31152 = (0);
while(true){
if((i__31117_31152 < count__31116_31151)){
var fld_31153 = chunk__31115_31150.cljs$core$IIndexed$_nth$arity$2(null,i__31117_31152);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_31153," = ",fld_31153,";"], 0));

var G__31154 = seq__31114_31149;
var G__31155 = chunk__31115_31150;
var G__31156 = count__31116_31151;
var G__31157 = (i__31117_31152 + (1));
seq__31114_31149 = G__31154;
chunk__31115_31150 = G__31155;
count__31116_31151 = G__31156;
i__31117_31152 = G__31157;
continue;
} else {
var temp__5457__auto___31158 = cljs.core.seq(seq__31114_31149);
if(temp__5457__auto___31158){
var seq__31114_31159__$1 = temp__5457__auto___31158;
if(cljs.core.chunked_seq_QMARK_(seq__31114_31159__$1)){
var c__9739__auto___31160 = cljs.core.chunk_first(seq__31114_31159__$1);
var G__31161 = cljs.core.chunk_rest(seq__31114_31159__$1);
var G__31162 = c__9739__auto___31160;
var G__31163 = cljs.core.count(c__9739__auto___31160);
var G__31164 = (0);
seq__31114_31149 = G__31161;
chunk__31115_31150 = G__31162;
count__31116_31151 = G__31163;
i__31117_31152 = G__31164;
continue;
} else {
var fld_31165 = cljs.core.first(seq__31114_31159__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_31165," = ",fld_31165,";"], 0));

var G__31166 = cljs.core.next(seq__31114_31159__$1);
var G__31167 = null;
var G__31168 = (0);
var G__31169 = (0);
seq__31114_31149 = G__31166;
chunk__31115_31150 = G__31167;
count__31116_31151 = G__31168;
i__31117_31152 = G__31169;
continue;
}
} else {
}
}
break;
}

var seq__31118_31170 = cljs.core.seq(pmasks);
var chunk__31119_31171 = null;
var count__31120_31172 = (0);
var i__31121_31173 = (0);
while(true){
if((i__31121_31173 < count__31120_31172)){
var vec__31122_31174 = chunk__31119_31171.cljs$core$IIndexed$_nth$arity$2(null,i__31121_31173);
var pno_31175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31122_31174,(0),null);
var pmask_31176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31122_31174,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_31175,"$ = ",pmask_31176,";"], 0));

var G__31177 = seq__31118_31170;
var G__31178 = chunk__31119_31171;
var G__31179 = count__31120_31172;
var G__31180 = (i__31121_31173 + (1));
seq__31118_31170 = G__31177;
chunk__31119_31171 = G__31178;
count__31120_31172 = G__31179;
i__31121_31173 = G__31180;
continue;
} else {
var temp__5457__auto___31181 = cljs.core.seq(seq__31118_31170);
if(temp__5457__auto___31181){
var seq__31118_31182__$1 = temp__5457__auto___31181;
if(cljs.core.chunked_seq_QMARK_(seq__31118_31182__$1)){
var c__9739__auto___31183 = cljs.core.chunk_first(seq__31118_31182__$1);
var G__31184 = cljs.core.chunk_rest(seq__31118_31182__$1);
var G__31185 = c__9739__auto___31183;
var G__31186 = cljs.core.count(c__9739__auto___31183);
var G__31187 = (0);
seq__31118_31170 = G__31184;
chunk__31119_31171 = G__31185;
count__31120_31172 = G__31186;
i__31121_31173 = G__31187;
continue;
} else {
var vec__31125_31188 = cljs.core.first(seq__31118_31182__$1);
var pno_31189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125_31188,(0),null);
var pmask_31190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31125_31188,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_31189,"$ = ",pmask_31190,";"], 0));

var G__31191 = cljs.core.next(seq__31118_31182__$1);
var G__31192 = null;
var G__31193 = (0);
var G__31194 = (0);
seq__31118_31170 = G__31191;
chunk__31119_31171 = G__31192;
count__31120_31172 = G__31193;
i__31121_31173 = G__31194;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$dot,(function (p__31195){
var map__31196 = p__31195;
var map__31196__$1 = ((((!((map__31196 == null)))?((((map__31196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31196):map__31196);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31196__$1,cljs.core.cst$kw$env);
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__31198){
var map__31199 = p__31198;
var map__31199__$1 = ((((!((map__31199 == null)))?((((map__31199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31199):map__31199);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31199__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__8796__auto__ = code;
if(cljs.core.truth_(and__8796__auto__)){
var G__31201 = clojure.string.trim(code);
var G__31202 = "/*";
return goog.string.startsWith(G__31201,G__31202);
} else {
return and__8796__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__30090__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__30090__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$kw$fn_DASH_invoke_DASH_direct,cljs.core.cst$kw$optimize_DASH_constants,cljs.core.cst$kw$elide_DASH_asserts,cljs.core.cst$kw$target,cljs.core.cst$kw$cache_DASH_key,cljs.core.cst$kw$checked_DASH_arrays,cljs.core.cst$kw$language_DASH_out], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

var seq__31206 = cljs.core.seq(table);
var chunk__31207 = null;
var count__31208 = (0);
var i__31209 = (0);
while(true){
if((i__31209 < count__31208)){
var vec__31210 = chunk__31207.cljs$core$IIndexed$_nth$arity$2(null,i__31209);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31210,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31210,(1),null);
var ns_31216 = cljs.core.namespace(sym);
var name_31217 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__31218 = seq__31206;
var G__31219 = chunk__31207;
var G__31220 = count__31208;
var G__31221 = (i__31209 + (1));
seq__31206 = G__31218;
chunk__31207 = G__31219;
count__31208 = G__31220;
i__31209 = G__31221;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__31206);
if(temp__5457__auto__){
var seq__31206__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31206__$1)){
var c__9739__auto__ = cljs.core.chunk_first(seq__31206__$1);
var G__31222 = cljs.core.chunk_rest(seq__31206__$1);
var G__31223 = c__9739__auto__;
var G__31224 = cljs.core.count(c__9739__auto__);
var G__31225 = (0);
seq__31206 = G__31222;
chunk__31207 = G__31223;
count__31208 = G__31224;
i__31209 = G__31225;
continue;
} else {
var vec__31213 = cljs.core.first(seq__31206__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31213,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31213,(1),null);
var ns_31226 = cljs.core.namespace(sym);
var name_31227 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__31228 = cljs.core.next(seq__31206__$1);
var G__31229 = null;
var G__31230 = (0);
var G__31231 = (0);
seq__31206 = G__31228;
chunk__31207 = G__31229;
count__31208 = G__31230;
i__31209 = G__31231;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__31233 = arguments.length;
switch (G__31233) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$cljs$analyzer_SLASH_externs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_31238 = cljs.core.first(ks);
var vec__31234_31239 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_31238);
var top_31240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31234_31239,(0),null);
var prefix_SINGLEQUOTE__31241 = vec__31234_31239;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_31238)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__31241) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_31240)) || (cljs.core.contains_QMARK_(known_externs,top_31240)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__31241)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_31240);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__31241)),";"], 0));
}
} else {
}

var m_31242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_31238);
if(cljs.core.empty_QMARK_(m_31242)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__31241,m_31242,top_level,known_externs);
}

var G__31243 = cljs.core.next(ks);
ks = G__31243;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

