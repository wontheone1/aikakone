// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__45011){
var vec__45012 = p__45011;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45012,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45012,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(k) : t.call(null,k)),v], null);
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var G__45016 = arguments.length;
switch (G__45016) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first(args);
var args__$1 = (((cljs.core.map_QMARK_(first_arg)) || ((first_arg == null)))?args:cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,react_class,(function (){var G__45017 = cljs.core.first(args__$1);
return (cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1(G__45017) : cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,G__45017));
})(),cljs.core.rest(args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var G__45020 = arguments.length;
switch (G__45020) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
var G__45021 = cljs.core.clj__GT_js(cljs_react_material_ui.core.transform_keys(sablono.util.camel_case,raw_theme));
return MaterialUIStyles.getMuiTheme(G__45021);
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name(sablono.util.camel_case(color_key))]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45025 = arguments.length;
var i__10088__auto___45026 = (0);
while(true){
if((i__10088__auto___45026 < len__10087__auto___45025)){
args__10094__auto__.push((arguments[i__10088__auto___45026]));

var G__45027 = (i__10088__auto___45026 + (1));
i__10088__auto___45026 = G__45027;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((function (){var G__45024 = (MaterialUI["List"]);
return (cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$1(G__45024) : cljs_react_material_ui.core.make_selectable.call(null,G__45024));
})(),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq45023){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45023));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45029 = arguments.length;
var i__10088__auto___45030 = (0);
while(true){
if((i__10088__auto___45030 < len__10087__auto___45029)){
args__10094__auto__.push((arguments[i__10088__auto___45030]));

var G__45031 = (i__10088__auto___45030 + (1));
i__10088__auto___45030 = G__45031;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("AppBar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args));
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq45028){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45028));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45033 = arguments.length;
var i__10088__auto___45034 = (0);
while(true){
if((i__10088__auto___45034 < len__10087__auto___45033)){
args__10094__auto__.push((arguments[i__10088__auto___45034]));

var G__45035 = (i__10088__auto___45034 + (1));
i__10088__auto___45034 = G__45035;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("AutoComplete",args) : cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args));
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq45032){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45032));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45037 = arguments.length;
var i__10088__auto___45038 = (0);
while(true){
if((i__10088__auto___45038 < len__10087__auto___45037)){
args__10094__auto__.push((arguments[i__10088__auto___45038]));

var G__45039 = (i__10088__auto___45038 + (1));
i__10088__auto___45038 = G__45039;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Avatar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args));
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq45036){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45036));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45041 = arguments.length;
var i__10088__auto___45042 = (0);
while(true){
if((i__10088__auto___45042 < len__10087__auto___45041)){
args__10094__auto__.push((arguments[i__10088__auto___45042]));

var G__45043 = (i__10088__auto___45042 + (1));
i__10088__auto___45042 = G__45043;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Badge",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args));
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq45040){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45040));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45045 = arguments.length;
var i__10088__auto___45046 = (0);
while(true){
if((i__10088__auto___45046 < len__10087__auto___45045)){
args__10094__auto__.push((arguments[i__10088__auto___45046]));

var G__45047 = (i__10088__auto___45046 + (1));
i__10088__auto___45046 = G__45047;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("BottomNavigation",args) : cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args));
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq45044){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45044));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45049 = arguments.length;
var i__10088__auto___45050 = (0);
while(true){
if((i__10088__auto___45050 < len__10087__auto___45049)){
args__10094__auto__.push((arguments[i__10088__auto___45050]));

var G__45051 = (i__10088__auto___45050 + (1));
i__10088__auto___45050 = G__45051;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("BottomNavigationItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args));
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq45048){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45048));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45053 = arguments.length;
var i__10088__auto___45054 = (0);
while(true){
if((i__10088__auto___45054 < len__10087__auto___45053)){
args__10094__auto__.push((arguments[i__10088__auto___45054]));

var G__45055 = (i__10088__auto___45054 + (1));
i__10088__auto___45054 = G__45055;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Card",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Card",args));
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq45052){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45052));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45057 = arguments.length;
var i__10088__auto___45058 = (0);
while(true){
if((i__10088__auto___45058 < len__10087__auto___45057)){
args__10094__auto__.push((arguments[i__10088__auto___45058]));

var G__45059 = (i__10088__auto___45058 + (1));
i__10088__auto___45058 = G__45059;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardActions",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args));
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq45056){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45056));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45061 = arguments.length;
var i__10088__auto___45062 = (0);
while(true){
if((i__10088__auto___45062 < len__10087__auto___45061)){
args__10094__auto__.push((arguments[i__10088__auto___45062]));

var G__45063 = (i__10088__auto___45062 + (1));
i__10088__auto___45062 = G__45063;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardHeader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args));
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq45060){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45060));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45065 = arguments.length;
var i__10088__auto___45066 = (0);
while(true){
if((i__10088__auto___45066 < len__10087__auto___45065)){
args__10094__auto__.push((arguments[i__10088__auto___45066]));

var G__45067 = (i__10088__auto___45066 + (1));
i__10088__auto___45066 = G__45067;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardMedia",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args));
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq45064){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45064));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45069 = arguments.length;
var i__10088__auto___45070 = (0);
while(true){
if((i__10088__auto___45070 < len__10087__auto___45069)){
args__10094__auto__.push((arguments[i__10088__auto___45070]));

var G__45071 = (i__10088__auto___45070 + (1));
i__10088__auto___45070 = G__45071;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardTitle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args));
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq45068){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45068));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45073 = arguments.length;
var i__10088__auto___45074 = (0);
while(true){
if((i__10088__auto___45074 < len__10087__auto___45073)){
args__10094__auto__.push((arguments[i__10088__auto___45074]));

var G__45075 = (i__10088__auto___45074 + (1));
i__10088__auto___45074 = G__45075;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardText",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args));
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq45072){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45072));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45077 = arguments.length;
var i__10088__auto___45078 = (0);
while(true){
if((i__10088__auto___45078 < len__10087__auto___45077)){
args__10094__auto__.push((arguments[i__10088__auto___45078]));

var G__45079 = (i__10088__auto___45078 + (1));
i__10088__auto___45078 = G__45079;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Checkbox",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args));
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq45076){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45076));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45081 = arguments.length;
var i__10088__auto___45082 = (0);
while(true){
if((i__10088__auto___45082 < len__10087__auto___45081)){
args__10094__auto__.push((arguments[i__10088__auto___45082]));

var G__45083 = (i__10088__auto___45082 + (1));
i__10088__auto___45082 = G__45083;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Chip",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args));
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq45080){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45080));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45085 = arguments.length;
var i__10088__auto___45086 = (0);
while(true){
if((i__10088__auto___45086 < len__10087__auto___45085)){
args__10094__auto__.push((arguments[i__10088__auto___45086]));

var G__45087 = (i__10088__auto___45086 + (1));
i__10088__auto___45086 = G__45087;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CircularProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args));
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq45084){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45084));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45089 = arguments.length;
var i__10088__auto___45090 = (0);
while(true){
if((i__10088__auto___45090 < len__10087__auto___45089)){
args__10094__auto__.push((arguments[i__10088__auto___45090]));

var G__45091 = (i__10088__auto___45090 + (1));
i__10088__auto___45090 = G__45091;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DatePicker",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args));
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq45088){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45088));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45093 = arguments.length;
var i__10088__auto___45094 = (0);
while(true){
if((i__10088__auto___45094 < len__10087__auto___45093)){
args__10094__auto__.push((arguments[i__10088__auto___45094]));

var G__45095 = (i__10088__auto___45094 + (1));
i__10088__auto___45094 = G__45095;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Dialog",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args));
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq45092){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45092));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45097 = arguments.length;
var i__10088__auto___45098 = (0);
while(true){
if((i__10088__auto___45098 < len__10087__auto___45097)){
args__10094__auto__.push((arguments[i__10088__auto___45098]));

var G__45099 = (i__10088__auto___45098 + (1));
i__10088__auto___45098 = G__45099;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Divider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args));
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq45096){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45096));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45101 = arguments.length;
var i__10088__auto___45102 = (0);
while(true){
if((i__10088__auto___45102 < len__10087__auto___45101)){
args__10094__auto__.push((arguments[i__10088__auto___45102]));

var G__45103 = (i__10088__auto___45102 + (1));
i__10088__auto___45102 = G__45103;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Drawer",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args));
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq45100){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45100));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45105 = arguments.length;
var i__10088__auto___45106 = (0);
while(true){
if((i__10088__auto___45106 < len__10087__auto___45105)){
args__10094__auto__.push((arguments[i__10088__auto___45106]));

var G__45107 = (i__10088__auto___45106 + (1));
i__10088__auto___45106 = G__45107;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DropDownMenu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args));
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq45104){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45104));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45109 = arguments.length;
var i__10088__auto___45110 = (0);
while(true){
if((i__10088__auto___45110 < len__10087__auto___45109)){
args__10094__auto__.push((arguments[i__10088__auto___45110]));

var G__45111 = (i__10088__auto___45110 + (1));
i__10088__auto___45110 = G__45111;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FlatButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args));
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq45108){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45108));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45113 = arguments.length;
var i__10088__auto___45114 = (0);
while(true){
if((i__10088__auto___45114 < len__10087__auto___45113)){
args__10094__auto__.push((arguments[i__10088__auto___45114]));

var G__45115 = (i__10088__auto___45114 + (1));
i__10088__auto___45114 = G__45115;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FloatingActionButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args));
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq45112){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45112));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45117 = arguments.length;
var i__10088__auto___45118 = (0);
while(true){
if((i__10088__auto___45118 < len__10087__auto___45117)){
args__10094__auto__.push((arguments[i__10088__auto___45118]));

var G__45119 = (i__10088__auto___45118 + (1));
i__10088__auto___45118 = G__45119;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FontIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args));
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq45116){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45116));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45121 = arguments.length;
var i__10088__auto___45122 = (0);
while(true){
if((i__10088__auto___45122 < len__10087__auto___45121)){
args__10094__auto__.push((arguments[i__10088__auto___45122]));

var G__45123 = (i__10088__auto___45122 + (1));
i__10088__auto___45122 = G__45123;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridList",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args));
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq45120){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45120));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45125 = arguments.length;
var i__10088__auto___45126 = (0);
while(true){
if((i__10088__auto___45126 < len__10087__auto___45125)){
args__10094__auto__.push((arguments[i__10088__auto___45126]));

var G__45127 = (i__10088__auto___45126 + (1));
i__10088__auto___45126 = G__45127;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridTile",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args));
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq45124){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45124));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45129 = arguments.length;
var i__10088__auto___45130 = (0);
while(true){
if((i__10088__auto___45130 < len__10087__auto___45129)){
args__10094__auto__.push((arguments[i__10088__auto___45130]));

var G__45131 = (i__10088__auto___45130 + (1));
i__10088__auto___45130 = G__45131;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("IconButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args));
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq45128){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45128));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45133 = arguments.length;
var i__10088__auto___45134 = (0);
while(true){
if((i__10088__auto___45134 < len__10087__auto___45133)){
args__10094__auto__.push((arguments[i__10088__auto___45134]));

var G__45135 = (i__10088__auto___45134 + (1));
i__10088__auto___45134 = G__45135;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("IconMenu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args));
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq45132){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45132));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45137 = arguments.length;
var i__10088__auto___45138 = (0);
while(true){
if((i__10088__auto___45138 < len__10087__auto___45137)){
args__10094__auto__.push((arguments[i__10088__auto___45138]));

var G__45139 = (i__10088__auto___45138 + (1));
i__10088__auto___45138 = G__45139;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("LinearProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args));
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq45136){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45136));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45141 = arguments.length;
var i__10088__auto___45142 = (0);
while(true){
if((i__10088__auto___45142 < len__10087__auto___45141)){
args__10094__auto__.push((arguments[i__10088__auto___45142]));

var G__45143 = (i__10088__auto___45142 + (1));
i__10088__auto___45142 = G__45143;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("List",args) : cljs_react_material_ui.core.create_mui_el.call(null,"List",args));
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq45140){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45140));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45145 = arguments.length;
var i__10088__auto___45146 = (0);
while(true){
if((i__10088__auto___45146 < len__10087__auto___45145)){
args__10094__auto__.push((arguments[i__10088__auto___45146]));

var G__45147 = (i__10088__auto___45146 + (1));
i__10088__auto___45146 = G__45147;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args));
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq45144){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45144));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45149 = arguments.length;
var i__10088__auto___45150 = (0);
while(true){
if((i__10088__auto___45150 < len__10087__auto___45149)){
args__10094__auto__.push((arguments[i__10088__auto___45150]));

var G__45151 = (i__10088__auto___45150 + (1));
i__10088__auto___45150 = G__45151;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Menu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args));
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq45148){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45148));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45153 = arguments.length;
var i__10088__auto___45154 = (0);
while(true){
if((i__10088__auto___45154 < len__10087__auto___45153)){
args__10094__auto__.push((arguments[i__10088__auto___45154]));

var G__45155 = (i__10088__auto___45154 + (1));
i__10088__auto___45154 = G__45155;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MenuItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args));
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq45152){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45152));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45157 = arguments.length;
var i__10088__auto___45158 = (0);
while(true){
if((i__10088__auto___45158 < len__10087__auto___45157)){
args__10094__auto__.push((arguments[i__10088__auto___45158]));

var G__45159 = (i__10088__auto___45158 + (1));
i__10088__auto___45158 = G__45159;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MuiThemeProvider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args));
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq45156){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45156));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45161 = arguments.length;
var i__10088__auto___45162 = (0);
while(true){
if((i__10088__auto___45162 < len__10087__auto___45161)){
args__10094__auto__.push((arguments[i__10088__auto___45162]));

var G__45163 = (i__10088__auto___45162 + (1));
i__10088__auto___45162 = G__45163;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Paper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args));
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq45160){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45160));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45165 = arguments.length;
var i__10088__auto___45166 = (0);
while(true){
if((i__10088__auto___45166 < len__10087__auto___45165)){
args__10094__auto__.push((arguments[i__10088__auto___45166]));

var G__45167 = (i__10088__auto___45166 + (1));
i__10088__auto___45166 = G__45167;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Popover",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args));
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq45164){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45164));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45169 = arguments.length;
var i__10088__auto___45170 = (0);
while(true){
if((i__10088__auto___45170 < len__10087__auto___45169)){
args__10094__auto__.push((arguments[i__10088__auto___45170]));

var G__45171 = (i__10088__auto___45170 + (1));
i__10088__auto___45170 = G__45171;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RadioButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args));
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq45168){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45168));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45173 = arguments.length;
var i__10088__auto___45174 = (0);
while(true){
if((i__10088__auto___45174 < len__10087__auto___45173)){
args__10094__auto__.push((arguments[i__10088__auto___45174]));

var G__45175 = (i__10088__auto___45174 + (1));
i__10088__auto___45174 = G__45175;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RadioButtonGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args));
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq45172){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45172));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45177 = arguments.length;
var i__10088__auto___45178 = (0);
while(true){
if((i__10088__auto___45178 < len__10087__auto___45177)){
args__10094__auto__.push((arguments[i__10088__auto___45178]));

var G__45179 = (i__10088__auto___45178 + (1));
i__10088__auto___45178 = G__45179;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RaisedButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args));
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq45176){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45176));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45181 = arguments.length;
var i__10088__auto___45182 = (0);
while(true){
if((i__10088__auto___45182 < len__10087__auto___45181)){
args__10094__auto__.push((arguments[i__10088__auto___45182]));

var G__45183 = (i__10088__auto___45182 + (1));
i__10088__auto___45182 = G__45183;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RefreshIndicator",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args));
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq45180){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45180));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45185 = arguments.length;
var i__10088__auto___45186 = (0);
while(true){
if((i__10088__auto___45186 < len__10087__auto___45185)){
args__10094__auto__.push((arguments[i__10088__auto___45186]));

var G__45187 = (i__10088__auto___45186 + (1));
i__10088__auto___45186 = G__45187;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SelectField",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args));
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq45184){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45184));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45189 = arguments.length;
var i__10088__auto___45190 = (0);
while(true){
if((i__10088__auto___45190 < len__10087__auto___45189)){
args__10094__auto__.push((arguments[i__10088__auto___45190]));

var G__45191 = (i__10088__auto___45190 + (1));
i__10088__auto___45190 = G__45191;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Slider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args));
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq45188){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45188));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45193 = arguments.length;
var i__10088__auto___45194 = (0);
while(true){
if((i__10088__auto___45194 < len__10087__auto___45193)){
args__10094__auto__.push((arguments[i__10088__auto___45194]));

var G__45195 = (i__10088__auto___45194 + (1));
i__10088__auto___45194 = G__45195;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Subheader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args));
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq45192){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45192));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45197 = arguments.length;
var i__10088__auto___45198 = (0);
while(true){
if((i__10088__auto___45198 < len__10087__auto___45197)){
args__10094__auto__.push((arguments[i__10088__auto___45198]));

var G__45199 = (i__10088__auto___45198 + (1));
i__10088__auto___45198 = G__45199;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SvgIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args));
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq45196){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45196));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45201 = arguments.length;
var i__10088__auto___45202 = (0);
while(true){
if((i__10088__auto___45202 < len__10087__auto___45201)){
args__10094__auto__.push((arguments[i__10088__auto___45202]));

var G__45203 = (i__10088__auto___45202 + (1));
i__10088__auto___45202 = G__45203;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Step",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Step",args));
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq45200){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45200));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45205 = arguments.length;
var i__10088__auto___45206 = (0);
while(true){
if((i__10088__auto___45206 < len__10087__auto___45205)){
args__10094__auto__.push((arguments[i__10088__auto___45206]));

var G__45207 = (i__10088__auto___45206 + (1));
i__10088__auto___45206 = G__45207;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args));
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq45204){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45204));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45209 = arguments.length;
var i__10088__auto___45210 = (0);
while(true){
if((i__10088__auto___45210 < len__10087__auto___45209)){
args__10094__auto__.push((arguments[i__10088__auto___45210]));

var G__45211 = (i__10088__auto___45210 + (1));
i__10088__auto___45210 = G__45211;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepContent",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args));
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq45208){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45208));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45213 = arguments.length;
var i__10088__auto___45214 = (0);
while(true){
if((i__10088__auto___45214 < len__10087__auto___45213)){
args__10094__auto__.push((arguments[i__10088__auto___45214]));

var G__45215 = (i__10088__auto___45214 + (1));
i__10088__auto___45214 = G__45215;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepLabel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args));
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq45212){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45212));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45217 = arguments.length;
var i__10088__auto___45218 = (0);
while(true){
if((i__10088__auto___45218 < len__10087__auto___45217)){
args__10094__auto__.push((arguments[i__10088__auto___45218]));

var G__45219 = (i__10088__auto___45218 + (1));
i__10088__auto___45218 = G__45219;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Stepper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args));
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq45216){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45216));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45221 = arguments.length;
var i__10088__auto___45222 = (0);
while(true){
if((i__10088__auto___45222 < len__10087__auto___45221)){
args__10094__auto__.push((arguments[i__10088__auto___45222]));

var G__45223 = (i__10088__auto___45222 + (1));
i__10088__auto___45222 = G__45223;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Snackbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args));
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq45220){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45220));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45225 = arguments.length;
var i__10088__auto___45226 = (0);
while(true){
if((i__10088__auto___45226 < len__10087__auto___45225)){
args__10094__auto__.push((arguments[i__10088__auto___45226]));

var G__45227 = (i__10088__auto___45226 + (1));
i__10088__auto___45226 = G__45227;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tabs",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args));
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq45224){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45224));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45229 = arguments.length;
var i__10088__auto___45230 = (0);
while(true){
if((i__10088__auto___45230 < len__10087__auto___45229)){
args__10094__auto__.push((arguments[i__10088__auto___45230]));

var G__45231 = (i__10088__auto___45230 + (1));
i__10088__auto___45230 = G__45231;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tab",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args));
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq45228){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45228));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45233 = arguments.length;
var i__10088__auto___45234 = (0);
while(true){
if((i__10088__auto___45234 < len__10087__auto___45233)){
args__10094__auto__.push((arguments[i__10088__auto___45234]));

var G__45235 = (i__10088__auto___45234 + (1));
i__10088__auto___45234 = G__45235;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Table",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Table",args));
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq45232){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45232));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45237 = arguments.length;
var i__10088__auto___45238 = (0);
while(true){
if((i__10088__auto___45238 < len__10087__auto___45237)){
args__10094__auto__.push((arguments[i__10088__auto___45238]));

var G__45239 = (i__10088__auto___45238 + (1));
i__10088__auto___45238 = G__45239;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableBody",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args));
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq45236){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45236));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45241 = arguments.length;
var i__10088__auto___45242 = (0);
while(true){
if((i__10088__auto___45242 < len__10087__auto___45241)){
args__10094__auto__.push((arguments[i__10088__auto___45242]));

var G__45243 = (i__10088__auto___45242 + (1));
i__10088__auto___45242 = G__45243;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableFooter",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args));
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq45240){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45240));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45245 = arguments.length;
var i__10088__auto___45246 = (0);
while(true){
if((i__10088__auto___45246 < len__10087__auto___45245)){
args__10094__auto__.push((arguments[i__10088__auto___45246]));

var G__45247 = (i__10088__auto___45246 + (1));
i__10088__auto___45246 = G__45247;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableHeader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args));
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq45244){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45244));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45249 = arguments.length;
var i__10088__auto___45250 = (0);
while(true){
if((i__10088__auto___45250 < len__10087__auto___45249)){
args__10094__auto__.push((arguments[i__10088__auto___45250]));

var G__45251 = (i__10088__auto___45250 + (1));
i__10088__auto___45250 = G__45251;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableHeaderColumn",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args));
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq45248){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45248));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45253 = arguments.length;
var i__10088__auto___45254 = (0);
while(true){
if((i__10088__auto___45254 < len__10087__auto___45253)){
args__10094__auto__.push((arguments[i__10088__auto___45254]));

var G__45255 = (i__10088__auto___45254 + (1));
i__10088__auto___45254 = G__45255;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableRow",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args));
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq45252){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45252));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45257 = arguments.length;
var i__10088__auto___45258 = (0);
while(true){
if((i__10088__auto___45258 < len__10087__auto___45257)){
args__10094__auto__.push((arguments[i__10088__auto___45258]));

var G__45259 = (i__10088__auto___45258 + (1));
i__10088__auto___45258 = G__45259;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableRowColumn",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args));
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq45256){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45256));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45261 = arguments.length;
var i__10088__auto___45262 = (0);
while(true){
if((i__10088__auto___45262 < len__10087__auto___45261)){
args__10094__auto__.push((arguments[i__10088__auto___45262]));

var G__45263 = (i__10088__auto___45262 + (1));
i__10088__auto___45262 = G__45263;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TextField",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args));
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq45260){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45260));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45265 = arguments.length;
var i__10088__auto___45266 = (0);
while(true){
if((i__10088__auto___45266 < len__10087__auto___45265)){
args__10094__auto__.push((arguments[i__10088__auto___45266]));

var G__45267 = (i__10088__auto___45266 + (1));
i__10088__auto___45266 = G__45267;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TimePicker",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args));
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq45264){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45264));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45269 = arguments.length;
var i__10088__auto___45270 = (0);
while(true){
if((i__10088__auto___45270 < len__10087__auto___45269)){
args__10094__auto__.push((arguments[i__10088__auto___45270]));

var G__45271 = (i__10088__auto___45270 + (1));
i__10088__auto___45270 = G__45271;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Toggle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args));
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq45268){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45268));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45273 = arguments.length;
var i__10088__auto___45274 = (0);
while(true){
if((i__10088__auto___45274 < len__10087__auto___45273)){
args__10094__auto__.push((arguments[i__10088__auto___45274]));

var G__45275 = (i__10088__auto___45274 + (1));
i__10088__auto___45274 = G__45275;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Toolbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args));
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq45272){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45272));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45277 = arguments.length;
var i__10088__auto___45278 = (0);
while(true){
if((i__10088__auto___45278 < len__10087__auto___45277)){
args__10094__auto__.push((arguments[i__10088__auto___45278]));

var G__45279 = (i__10088__auto___45278 + (1));
i__10088__auto___45278 = G__45279;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args));
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq45276){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45276));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45281 = arguments.length;
var i__10088__auto___45282 = (0);
while(true){
if((i__10088__auto___45282 < len__10087__auto___45281)){
args__10094__auto__.push((arguments[i__10088__auto___45282]));

var G__45283 = (i__10088__auto___45282 + (1));
i__10088__auto___45282 = G__45283;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarSeparator",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args));
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq45280){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45280));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__10094__auto__ = [];
var len__10087__auto___45285 = arguments.length;
var i__10088__auto___45286 = (0);
while(true){
if((i__10088__auto___45286 < len__10087__auto___45285)){
args__10094__auto__.push((arguments[i__10088__auto___45286]));

var G__45287 = (i__10088__auto___45286 + (1));
i__10088__auto___45286 = G__45287;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((0) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__10095__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarTitle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args));
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq45284){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45284));
});

