// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34450 = arguments.length;
switch (G__34450) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34451 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34451 = (function (f,blockable,meta34452){
this.f = f;
this.blockable = blockable;
this.meta34452 = meta34452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34453,meta34452__$1){
var self__ = this;
var _34453__$1 = this;
return (new cljs.core.async.t_cljs$core$async34451(self__.f,self__.blockable,meta34452__$1));
});

cljs.core.async.t_cljs$core$async34451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34453){
var self__ = this;
var _34453__$1 = this;
return self__.meta34452;
});

cljs.core.async.t_cljs$core$async34451.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34451.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta34452], null);
});

cljs.core.async.t_cljs$core$async34451.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34451";

cljs.core.async.t_cljs$core$async34451.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async34451");
});

cljs.core.async.__GT_t_cljs$core$async34451 = (function cljs$core$async$__GT_t_cljs$core$async34451(f__$1,blockable__$1,meta34452){
return (new cljs.core.async.t_cljs$core$async34451(f__$1,blockable__$1,meta34452));
});

}

return (new cljs.core.async.t_cljs$core$async34451(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34457 = arguments.length;
switch (G__34457) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34460 = arguments.length;
switch (G__34460) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34463 = arguments.length;
switch (G__34463) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34465 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34465) : fn1.call(null,val_34465));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34465,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34465) : fn1.call(null,val_34465));
});})(val_34465,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34467 = arguments.length;
switch (G__34467) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9853__auto___34469 = n;
var x_34470 = (0);
while(true){
if((x_34470 < n__9853__auto___34469)){
(a[x_34470] = (0));

var G__34471 = (x_34470 + (1));
x_34470 = G__34471;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34472 = (i + (1));
i = G__34472;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async34473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34473 = (function (flag,meta34474){
this.flag = flag;
this.meta34474 = meta34474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34475,meta34474__$1){
var self__ = this;
var _34475__$1 = this;
return (new cljs.core.async.t_cljs$core$async34473(self__.flag,meta34474__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34475){
var self__ = this;
var _34475__$1 = this;
return self__.meta34474;
});})(flag))
;

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34473.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta34474], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34473";

cljs.core.async.t_cljs$core$async34473.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async34473");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34473 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34473(flag__$1,meta34474){
return (new cljs.core.async.t_cljs$core$async34473(flag__$1,meta34474));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34473(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34476 = (function (flag,cb,meta34477){
this.flag = flag;
this.cb = cb;
this.meta34477 = meta34477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34478,meta34477__$1){
var self__ = this;
var _34478__$1 = this;
return (new cljs.core.async.t_cljs$core$async34476(self__.flag,self__.cb,meta34477__$1));
});

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34478){
var self__ = this;
var _34478__$1 = this;
return self__.meta34477;
});

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta34477], null);
});

cljs.core.async.t_cljs$core$async34476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34476";

cljs.core.async.t_cljs$core$async34476.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async34476");
});

cljs.core.async.__GT_t_cljs$core$async34476 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34476(flag__$1,cb__$1,meta34477){
return (new cljs.core.async.t_cljs$core$async34476(flag__$1,cb__$1,meta34477));
});

}

return (new cljs.core.async.t_cljs$core$async34476(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34479_SHARP_){
var G__34481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34479_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34481) : fret.call(null,G__34481));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34480_SHARP_){
var G__34482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34480_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34482) : fret.call(null,G__34482));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__8808__auto__ = wport;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34483 = (i + (1));
i = G__34483;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8808__auto__ = ret;
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__8796__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__8796__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__8796__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___34489 = arguments.length;
var i__10088__auto___34490 = (0);
while(true){
if((i__10088__auto___34490 < len__10087__auto___34489)){
args__10094__auto__.push((arguments[i__10088__auto___34490]));

var G__34491 = (i__10088__auto___34490 + (1));
i__10088__auto___34490 = G__34491;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((1) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10095__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34486){
var map__34487 = p__34486;
var map__34487__$1 = ((((!((map__34487 == null)))?((((map__34487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34487):map__34487);
var opts = map__34487__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34484){
var G__34485 = cljs.core.first(seq34484);
var seq34484__$1 = cljs.core.next(seq34484);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34485,seq34484__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34493 = arguments.length;
switch (G__34493) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34390__auto___34539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___34539){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___34539){
return (function (state_34517){
var state_val_34518 = (state_34517[(1)]);
if((state_val_34518 === (7))){
var inst_34513 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34519_34540 = state_34517__$1;
(statearr_34519_34540[(2)] = inst_34513);

(statearr_34519_34540[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (1))){
var state_34517__$1 = state_34517;
var statearr_34520_34541 = state_34517__$1;
(statearr_34520_34541[(2)] = null);

(statearr_34520_34541[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (4))){
var inst_34496 = (state_34517[(7)]);
var inst_34496__$1 = (state_34517[(2)]);
var inst_34497 = (inst_34496__$1 == null);
var state_34517__$1 = (function (){var statearr_34521 = state_34517;
(statearr_34521[(7)] = inst_34496__$1);

return statearr_34521;
})();
if(cljs.core.truth_(inst_34497)){
var statearr_34522_34542 = state_34517__$1;
(statearr_34522_34542[(1)] = (5));

} else {
var statearr_34523_34543 = state_34517__$1;
(statearr_34523_34543[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (13))){
var state_34517__$1 = state_34517;
var statearr_34524_34544 = state_34517__$1;
(statearr_34524_34544[(2)] = null);

(statearr_34524_34544[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (6))){
var inst_34496 = (state_34517[(7)]);
var state_34517__$1 = state_34517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34517__$1,(11),to,inst_34496);
} else {
if((state_val_34518 === (3))){
var inst_34515 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34517__$1,inst_34515);
} else {
if((state_val_34518 === (12))){
var state_34517__$1 = state_34517;
var statearr_34525_34545 = state_34517__$1;
(statearr_34525_34545[(2)] = null);

(statearr_34525_34545[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (2))){
var state_34517__$1 = state_34517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34517__$1,(4),from);
} else {
if((state_val_34518 === (11))){
var inst_34506 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
if(cljs.core.truth_(inst_34506)){
var statearr_34526_34546 = state_34517__$1;
(statearr_34526_34546[(1)] = (12));

} else {
var statearr_34527_34547 = state_34517__$1;
(statearr_34527_34547[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (9))){
var state_34517__$1 = state_34517;
var statearr_34528_34548 = state_34517__$1;
(statearr_34528_34548[(2)] = null);

(statearr_34528_34548[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (5))){
var state_34517__$1 = state_34517;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34529_34549 = state_34517__$1;
(statearr_34529_34549[(1)] = (8));

} else {
var statearr_34530_34550 = state_34517__$1;
(statearr_34530_34550[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (14))){
var inst_34511 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34531_34551 = state_34517__$1;
(statearr_34531_34551[(2)] = inst_34511);

(statearr_34531_34551[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (10))){
var inst_34503 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34532_34552 = state_34517__$1;
(statearr_34532_34552[(2)] = inst_34503);

(statearr_34532_34552[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34518 === (8))){
var inst_34500 = cljs.core.async.close_BANG_(to);
var state_34517__$1 = state_34517;
var statearr_34533_34553 = state_34517__$1;
(statearr_34533_34553[(2)] = inst_34500);

(statearr_34533_34553[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___34539))
;
return ((function (switch__34288__auto__,c__34390__auto___34539){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_34534 = [null,null,null,null,null,null,null,null];
(statearr_34534[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_34534[(1)] = (1));

return statearr_34534;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_34517){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34517);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34535){if((e34535 instanceof Object)){
var ex__34292__auto__ = e34535;
var statearr_34536_34554 = state_34517;
(statearr_34536_34554[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34517);

return cljs.core.cst$kw$recur;
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34555 = state_34517;
state_34517 = G__34555;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_34517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_34517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___34539))
})();
var state__34392__auto__ = (function (){var statearr_34537 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34537[(6)] = c__34390__auto___34539);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___34539))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__34556){
var vec__34557 = p__34556;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34557,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34557,(1),null);
var job = vec__34557;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34390__auto___34728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___34728,res,vec__34557,v,p,job,jobs,results){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___34728,res,vec__34557,v,p,job,jobs,results){
return (function (state_34564){
var state_val_34565 = (state_34564[(1)]);
if((state_val_34565 === (1))){
var state_34564__$1 = state_34564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34564__$1,(2),res,v);
} else {
if((state_val_34565 === (2))){
var inst_34561 = (state_34564[(2)]);
var inst_34562 = cljs.core.async.close_BANG_(res);
var state_34564__$1 = (function (){var statearr_34566 = state_34564;
(statearr_34566[(7)] = inst_34561);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34564__$1,inst_34562);
} else {
return null;
}
}
});})(c__34390__auto___34728,res,vec__34557,v,p,job,jobs,results))
;
return ((function (switch__34288__auto__,c__34390__auto___34728,res,vec__34557,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0 = (function (){
var statearr_34567 = [null,null,null,null,null,null,null,null];
(statearr_34567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__);

(statearr_34567[(1)] = (1));

return statearr_34567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1 = (function (state_34564){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34564);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34568){if((e34568 instanceof Object)){
var ex__34292__auto__ = e34568;
var statearr_34569_34729 = state_34564;
(statearr_34569_34729[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34564);

return cljs.core.cst$kw$recur;
} else {
throw e34568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34730 = state_34564;
state_34564 = G__34730;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = function(state_34564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1.call(this,state_34564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___34728,res,vec__34557,v,p,job,jobs,results))
})();
var state__34392__auto__ = (function (){var statearr_34570 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34570[(6)] = c__34390__auto___34728);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___34728,res,vec__34557,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34571){
var vec__34572 = p__34571;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34572,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34572,(1),null);
var job = vec__34572;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__9853__auto___34731 = n;
var __34732 = (0);
while(true){
if((__34732 < n__9853__auto___34731)){
var G__34575_34733 = type;
var G__34575_34734__$1 = (((G__34575_34733 instanceof cljs.core.Keyword))?G__34575_34733.fqn:null);
switch (G__34575_34734__$1) {
case "compute":
var c__34390__auto___34736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34732,c__34390__auto___34736,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (__34732,c__34390__auto___34736,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async){
return (function (state_34588){
var state_val_34589 = (state_34588[(1)]);
if((state_val_34589 === (1))){
var state_34588__$1 = state_34588;
var statearr_34590_34737 = state_34588__$1;
(statearr_34590_34737[(2)] = null);

(statearr_34590_34737[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34589 === (2))){
var state_34588__$1 = state_34588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34588__$1,(4),jobs);
} else {
if((state_val_34589 === (3))){
var inst_34586 = (state_34588[(2)]);
var state_34588__$1 = state_34588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34588__$1,inst_34586);
} else {
if((state_val_34589 === (4))){
var inst_34578 = (state_34588[(2)]);
var inst_34579 = process(inst_34578);
var state_34588__$1 = state_34588;
if(cljs.core.truth_(inst_34579)){
var statearr_34591_34738 = state_34588__$1;
(statearr_34591_34738[(1)] = (5));

} else {
var statearr_34592_34739 = state_34588__$1;
(statearr_34592_34739[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34589 === (5))){
var state_34588__$1 = state_34588;
var statearr_34593_34740 = state_34588__$1;
(statearr_34593_34740[(2)] = null);

(statearr_34593_34740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34589 === (6))){
var state_34588__$1 = state_34588;
var statearr_34594_34741 = state_34588__$1;
(statearr_34594_34741[(2)] = null);

(statearr_34594_34741[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34589 === (7))){
var inst_34584 = (state_34588[(2)]);
var state_34588__$1 = state_34588;
var statearr_34595_34742 = state_34588__$1;
(statearr_34595_34742[(2)] = inst_34584);

(statearr_34595_34742[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__34732,c__34390__auto___34736,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async))
;
return ((function (__34732,switch__34288__auto__,c__34390__auto___34736,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0 = (function (){
var statearr_34596 = [null,null,null,null,null,null,null];
(statearr_34596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__);

(statearr_34596[(1)] = (1));

return statearr_34596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1 = (function (state_34588){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34588);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34597){if((e34597 instanceof Object)){
var ex__34292__auto__ = e34597;
var statearr_34598_34743 = state_34588;
(statearr_34598_34743[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34588);

return cljs.core.cst$kw$recur;
} else {
throw e34597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34744 = state_34588;
state_34588 = G__34744;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = function(state_34588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1.call(this,state_34588);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__;
})()
;})(__34732,switch__34288__auto__,c__34390__auto___34736,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async))
})();
var state__34392__auto__ = (function (){var statearr_34599 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34599[(6)] = c__34390__auto___34736);

return statearr_34599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(__34732,c__34390__auto___34736,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async))
);


break;
case "async":
var c__34390__auto___34745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34732,c__34390__auto___34745,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (__34732,c__34390__auto___34745,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async){
return (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34614_34746 = state_34612__$1;
(statearr_34614_34746[(2)] = null);

(statearr_34614_34746[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34613 === (2))){
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(4),jobs);
} else {
if((state_val_34613 === (3))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (4))){
var inst_34602 = (state_34612[(2)]);
var inst_34603 = async(inst_34602);
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34603)){
var statearr_34615_34747 = state_34612__$1;
(statearr_34615_34747[(1)] = (5));

} else {
var statearr_34616_34748 = state_34612__$1;
(statearr_34616_34748[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
var statearr_34617_34749 = state_34612__$1;
(statearr_34617_34749[(2)] = null);

(statearr_34617_34749[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34613 === (6))){
var state_34612__$1 = state_34612;
var statearr_34618_34750 = state_34612__$1;
(statearr_34618_34750[(2)] = null);

(statearr_34618_34750[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34613 === (7))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34619_34751 = state_34612__$1;
(statearr_34619_34751[(2)] = inst_34608);

(statearr_34619_34751[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__34732,c__34390__auto___34745,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async))
;
return ((function (__34732,switch__34288__auto__,c__34390__auto___34745,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0 = (function (){
var statearr_34620 = [null,null,null,null,null,null,null];
(statearr_34620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__);

(statearr_34620[(1)] = (1));

return statearr_34620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1 = (function (state_34612){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34612);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34621){if((e34621 instanceof Object)){
var ex__34292__auto__ = e34621;
var statearr_34622_34752 = state_34612;
(statearr_34622_34752[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return cljs.core.cst$kw$recur;
} else {
throw e34621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34753 = state_34612;
state_34612 = G__34753;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = function(state_34612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1.call(this,state_34612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__;
})()
;})(__34732,switch__34288__auto__,c__34390__auto___34745,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async))
})();
var state__34392__auto__ = (function (){var statearr_34623 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34623[(6)] = c__34390__auto___34745);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(__34732,c__34390__auto___34745,G__34575_34733,G__34575_34734__$1,n__9853__auto___34731,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34575_34734__$1)].join('')));

}

var G__34754 = (__34732 + (1));
__34732 = G__34754;
continue;
} else {
}
break;
}

var c__34390__auto___34755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___34755,jobs,results,process,async){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___34755,jobs,results,process,async){
return (function (state_34645){
var state_val_34646 = (state_34645[(1)]);
if((state_val_34646 === (1))){
var state_34645__$1 = state_34645;
var statearr_34647_34756 = state_34645__$1;
(statearr_34647_34756[(2)] = null);

(statearr_34647_34756[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34646 === (2))){
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34645__$1,(4),from);
} else {
if((state_val_34646 === (3))){
var inst_34643 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34645__$1,inst_34643);
} else {
if((state_val_34646 === (4))){
var inst_34626 = (state_34645[(7)]);
var inst_34626__$1 = (state_34645[(2)]);
var inst_34627 = (inst_34626__$1 == null);
var state_34645__$1 = (function (){var statearr_34648 = state_34645;
(statearr_34648[(7)] = inst_34626__$1);

return statearr_34648;
})();
if(cljs.core.truth_(inst_34627)){
var statearr_34649_34757 = state_34645__$1;
(statearr_34649_34757[(1)] = (5));

} else {
var statearr_34650_34758 = state_34645__$1;
(statearr_34650_34758[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34646 === (5))){
var inst_34629 = cljs.core.async.close_BANG_(jobs);
var state_34645__$1 = state_34645;
var statearr_34651_34759 = state_34645__$1;
(statearr_34651_34759[(2)] = inst_34629);

(statearr_34651_34759[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34646 === (6))){
var inst_34631 = (state_34645[(8)]);
var inst_34626 = (state_34645[(7)]);
var inst_34631__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34633 = [inst_34626,inst_34631__$1];
var inst_34634 = (new cljs.core.PersistentVector(null,2,(5),inst_34632,inst_34633,null));
var state_34645__$1 = (function (){var statearr_34652 = state_34645;
(statearr_34652[(8)] = inst_34631__$1);

return statearr_34652;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34645__$1,(8),jobs,inst_34634);
} else {
if((state_val_34646 === (7))){
var inst_34641 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34653_34760 = state_34645__$1;
(statearr_34653_34760[(2)] = inst_34641);

(statearr_34653_34760[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34646 === (8))){
var inst_34631 = (state_34645[(8)]);
var inst_34636 = (state_34645[(2)]);
var state_34645__$1 = (function (){var statearr_34654 = state_34645;
(statearr_34654[(9)] = inst_34636);

return statearr_34654;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34645__$1,(9),results,inst_34631);
} else {
if((state_val_34646 === (9))){
var inst_34638 = (state_34645[(2)]);
var state_34645__$1 = (function (){var statearr_34655 = state_34645;
(statearr_34655[(10)] = inst_34638);

return statearr_34655;
})();
var statearr_34656_34761 = state_34645__$1;
(statearr_34656_34761[(2)] = null);

(statearr_34656_34761[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___34755,jobs,results,process,async))
;
return ((function (switch__34288__auto__,c__34390__auto___34755,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0 = (function (){
var statearr_34657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__);

(statearr_34657[(1)] = (1));

return statearr_34657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1 = (function (state_34645){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34645);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34658){if((e34658 instanceof Object)){
var ex__34292__auto__ = e34658;
var statearr_34659_34762 = state_34645;
(statearr_34659_34762[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34645);

return cljs.core.cst$kw$recur;
} else {
throw e34658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34763 = state_34645;
state_34645 = G__34763;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = function(state_34645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1.call(this,state_34645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___34755,jobs,results,process,async))
})();
var state__34392__auto__ = (function (){var statearr_34660 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34660[(6)] = c__34390__auto___34755);

return statearr_34660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___34755,jobs,results,process,async))
);


var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__,jobs,results,process,async){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__,jobs,results,process,async){
return (function (state_34698){
var state_val_34699 = (state_34698[(1)]);
if((state_val_34699 === (7))){
var inst_34694 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34700_34764 = state_34698__$1;
(statearr_34700_34764[(2)] = inst_34694);

(statearr_34700_34764[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (20))){
var state_34698__$1 = state_34698;
var statearr_34701_34765 = state_34698__$1;
(statearr_34701_34765[(2)] = null);

(statearr_34701_34765[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (1))){
var state_34698__$1 = state_34698;
var statearr_34702_34766 = state_34698__$1;
(statearr_34702_34766[(2)] = null);

(statearr_34702_34766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (4))){
var inst_34663 = (state_34698[(7)]);
var inst_34663__$1 = (state_34698[(2)]);
var inst_34664 = (inst_34663__$1 == null);
var state_34698__$1 = (function (){var statearr_34703 = state_34698;
(statearr_34703[(7)] = inst_34663__$1);

return statearr_34703;
})();
if(cljs.core.truth_(inst_34664)){
var statearr_34704_34767 = state_34698__$1;
(statearr_34704_34767[(1)] = (5));

} else {
var statearr_34705_34768 = state_34698__$1;
(statearr_34705_34768[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (15))){
var inst_34676 = (state_34698[(8)]);
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34698__$1,(18),to,inst_34676);
} else {
if((state_val_34699 === (21))){
var inst_34689 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34706_34769 = state_34698__$1;
(statearr_34706_34769[(2)] = inst_34689);

(statearr_34706_34769[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (13))){
var inst_34691 = (state_34698[(2)]);
var state_34698__$1 = (function (){var statearr_34707 = state_34698;
(statearr_34707[(9)] = inst_34691);

return statearr_34707;
})();
var statearr_34708_34770 = state_34698__$1;
(statearr_34708_34770[(2)] = null);

(statearr_34708_34770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (6))){
var inst_34663 = (state_34698[(7)]);
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34698__$1,(11),inst_34663);
} else {
if((state_val_34699 === (17))){
var inst_34684 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
if(cljs.core.truth_(inst_34684)){
var statearr_34709_34771 = state_34698__$1;
(statearr_34709_34771[(1)] = (19));

} else {
var statearr_34710_34772 = state_34698__$1;
(statearr_34710_34772[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (3))){
var inst_34696 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34698__$1,inst_34696);
} else {
if((state_val_34699 === (12))){
var inst_34673 = (state_34698[(10)]);
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34698__$1,(14),inst_34673);
} else {
if((state_val_34699 === (2))){
var state_34698__$1 = state_34698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34698__$1,(4),results);
} else {
if((state_val_34699 === (19))){
var state_34698__$1 = state_34698;
var statearr_34711_34773 = state_34698__$1;
(statearr_34711_34773[(2)] = null);

(statearr_34711_34773[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (11))){
var inst_34673 = (state_34698[(2)]);
var state_34698__$1 = (function (){var statearr_34712 = state_34698;
(statearr_34712[(10)] = inst_34673);

return statearr_34712;
})();
var statearr_34713_34774 = state_34698__$1;
(statearr_34713_34774[(2)] = null);

(statearr_34713_34774[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (9))){
var state_34698__$1 = state_34698;
var statearr_34714_34775 = state_34698__$1;
(statearr_34714_34775[(2)] = null);

(statearr_34714_34775[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (5))){
var state_34698__$1 = state_34698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34715_34776 = state_34698__$1;
(statearr_34715_34776[(1)] = (8));

} else {
var statearr_34716_34777 = state_34698__$1;
(statearr_34716_34777[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (14))){
var inst_34678 = (state_34698[(11)]);
var inst_34676 = (state_34698[(8)]);
var inst_34676__$1 = (state_34698[(2)]);
var inst_34677 = (inst_34676__$1 == null);
var inst_34678__$1 = cljs.core.not(inst_34677);
var state_34698__$1 = (function (){var statearr_34717 = state_34698;
(statearr_34717[(11)] = inst_34678__$1);

(statearr_34717[(8)] = inst_34676__$1);

return statearr_34717;
})();
if(inst_34678__$1){
var statearr_34718_34778 = state_34698__$1;
(statearr_34718_34778[(1)] = (15));

} else {
var statearr_34719_34779 = state_34698__$1;
(statearr_34719_34779[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (16))){
var inst_34678 = (state_34698[(11)]);
var state_34698__$1 = state_34698;
var statearr_34720_34780 = state_34698__$1;
(statearr_34720_34780[(2)] = inst_34678);

(statearr_34720_34780[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (10))){
var inst_34670 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34721_34781 = state_34698__$1;
(statearr_34721_34781[(2)] = inst_34670);

(statearr_34721_34781[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (18))){
var inst_34681 = (state_34698[(2)]);
var state_34698__$1 = state_34698;
var statearr_34722_34782 = state_34698__$1;
(statearr_34722_34782[(2)] = inst_34681);

(statearr_34722_34782[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34699 === (8))){
var inst_34667 = cljs.core.async.close_BANG_(to);
var state_34698__$1 = state_34698;
var statearr_34723_34783 = state_34698__$1;
(statearr_34723_34783[(2)] = inst_34667);

(statearr_34723_34783[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto__,jobs,results,process,async))
;
return ((function (switch__34288__auto__,c__34390__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0 = (function (){
var statearr_34724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__);

(statearr_34724[(1)] = (1));

return statearr_34724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1 = (function (state_34698){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34698);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34725){if((e34725 instanceof Object)){
var ex__34292__auto__ = e34725;
var statearr_34726_34784 = state_34698;
(statearr_34726_34784[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34698);

return cljs.core.cst$kw$recur;
} else {
throw e34725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34785 = state_34698;
state_34698 = G__34785;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__ = function(state_34698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1.call(this,state_34698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__,jobs,results,process,async))
})();
var state__34392__auto__ = (function (){var statearr_34727 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34727[(6)] = c__34390__auto__);

return statearr_34727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__,jobs,results,process,async))
);

return c__34390__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34787 = arguments.length;
switch (G__34787) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34790 = arguments.length;
switch (G__34790) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34793 = arguments.length;
switch (G__34793) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34390__auto___34842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___34842,tc,fc){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___34842,tc,fc){
return (function (state_34819){
var state_val_34820 = (state_34819[(1)]);
if((state_val_34820 === (7))){
var inst_34815 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34821_34843 = state_34819__$1;
(statearr_34821_34843[(2)] = inst_34815);

(statearr_34821_34843[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (1))){
var state_34819__$1 = state_34819;
var statearr_34822_34844 = state_34819__$1;
(statearr_34822_34844[(2)] = null);

(statearr_34822_34844[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (4))){
var inst_34796 = (state_34819[(7)]);
var inst_34796__$1 = (state_34819[(2)]);
var inst_34797 = (inst_34796__$1 == null);
var state_34819__$1 = (function (){var statearr_34823 = state_34819;
(statearr_34823[(7)] = inst_34796__$1);

return statearr_34823;
})();
if(cljs.core.truth_(inst_34797)){
var statearr_34824_34845 = state_34819__$1;
(statearr_34824_34845[(1)] = (5));

} else {
var statearr_34825_34846 = state_34819__$1;
(statearr_34825_34846[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (13))){
var state_34819__$1 = state_34819;
var statearr_34826_34847 = state_34819__$1;
(statearr_34826_34847[(2)] = null);

(statearr_34826_34847[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (6))){
var inst_34796 = (state_34819[(7)]);
var inst_34802 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34796) : p.call(null,inst_34796));
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34802)){
var statearr_34827_34848 = state_34819__$1;
(statearr_34827_34848[(1)] = (9));

} else {
var statearr_34828_34849 = state_34819__$1;
(statearr_34828_34849[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (3))){
var inst_34817 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34819__$1,inst_34817);
} else {
if((state_val_34820 === (12))){
var state_34819__$1 = state_34819;
var statearr_34829_34850 = state_34819__$1;
(statearr_34829_34850[(2)] = null);

(statearr_34829_34850[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (2))){
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34819__$1,(4),ch);
} else {
if((state_val_34820 === (11))){
var inst_34796 = (state_34819[(7)]);
var inst_34806 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34819__$1,(8),inst_34806,inst_34796);
} else {
if((state_val_34820 === (9))){
var state_34819__$1 = state_34819;
var statearr_34830_34851 = state_34819__$1;
(statearr_34830_34851[(2)] = tc);

(statearr_34830_34851[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (5))){
var inst_34799 = cljs.core.async.close_BANG_(tc);
var inst_34800 = cljs.core.async.close_BANG_(fc);
var state_34819__$1 = (function (){var statearr_34831 = state_34819;
(statearr_34831[(8)] = inst_34799);

return statearr_34831;
})();
var statearr_34832_34852 = state_34819__$1;
(statearr_34832_34852[(2)] = inst_34800);

(statearr_34832_34852[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (14))){
var inst_34813 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34833_34853 = state_34819__$1;
(statearr_34833_34853[(2)] = inst_34813);

(statearr_34833_34853[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (10))){
var state_34819__$1 = state_34819;
var statearr_34834_34854 = state_34819__$1;
(statearr_34834_34854[(2)] = fc);

(statearr_34834_34854[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34820 === (8))){
var inst_34808 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34808)){
var statearr_34835_34855 = state_34819__$1;
(statearr_34835_34855[(1)] = (12));

} else {
var statearr_34836_34856 = state_34819__$1;
(statearr_34836_34856[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___34842,tc,fc))
;
return ((function (switch__34288__auto__,c__34390__auto___34842,tc,fc){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_34837 = [null,null,null,null,null,null,null,null,null];
(statearr_34837[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_34837[(1)] = (1));

return statearr_34837;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_34819){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34819);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34292__auto__ = e34838;
var statearr_34839_34857 = state_34819;
(statearr_34839_34857[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34819);

return cljs.core.cst$kw$recur;
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34858 = state_34819;
state_34819 = G__34858;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_34819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_34819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___34842,tc,fc))
})();
var state__34392__auto__ = (function (){var statearr_34840 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34840[(6)] = c__34390__auto___34842);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___34842,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__){
return (function (state_34879){
var state_val_34880 = (state_34879[(1)]);
if((state_val_34880 === (7))){
var inst_34875 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
var statearr_34881_34899 = state_34879__$1;
(statearr_34881_34899[(2)] = inst_34875);

(statearr_34881_34899[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34880 === (1))){
var inst_34859 = init;
var state_34879__$1 = (function (){var statearr_34882 = state_34879;
(statearr_34882[(7)] = inst_34859);

return statearr_34882;
})();
var statearr_34883_34900 = state_34879__$1;
(statearr_34883_34900[(2)] = null);

(statearr_34883_34900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34880 === (4))){
var inst_34862 = (state_34879[(8)]);
var inst_34862__$1 = (state_34879[(2)]);
var inst_34863 = (inst_34862__$1 == null);
var state_34879__$1 = (function (){var statearr_34884 = state_34879;
(statearr_34884[(8)] = inst_34862__$1);

return statearr_34884;
})();
if(cljs.core.truth_(inst_34863)){
var statearr_34885_34901 = state_34879__$1;
(statearr_34885_34901[(1)] = (5));

} else {
var statearr_34886_34902 = state_34879__$1;
(statearr_34886_34902[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34880 === (6))){
var inst_34862 = (state_34879[(8)]);
var inst_34866 = (state_34879[(9)]);
var inst_34859 = (state_34879[(7)]);
var inst_34866__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34859,inst_34862) : f.call(null,inst_34859,inst_34862));
var inst_34867 = cljs.core.reduced_QMARK_(inst_34866__$1);
var state_34879__$1 = (function (){var statearr_34887 = state_34879;
(statearr_34887[(9)] = inst_34866__$1);

return statearr_34887;
})();
if(inst_34867){
var statearr_34888_34903 = state_34879__$1;
(statearr_34888_34903[(1)] = (8));

} else {
var statearr_34889_34904 = state_34879__$1;
(statearr_34889_34904[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34880 === (3))){
var inst_34877 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34879__$1,inst_34877);
} else {
if((state_val_34880 === (2))){
var state_34879__$1 = state_34879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34879__$1,(4),ch);
} else {
if((state_val_34880 === (9))){
var inst_34866 = (state_34879[(9)]);
var inst_34859 = inst_34866;
var state_34879__$1 = (function (){var statearr_34890 = state_34879;
(statearr_34890[(7)] = inst_34859);

return statearr_34890;
})();
var statearr_34891_34905 = state_34879__$1;
(statearr_34891_34905[(2)] = null);

(statearr_34891_34905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34880 === (5))){
var inst_34859 = (state_34879[(7)]);
var state_34879__$1 = state_34879;
var statearr_34892_34906 = state_34879__$1;
(statearr_34892_34906[(2)] = inst_34859);

(statearr_34892_34906[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34880 === (10))){
var inst_34873 = (state_34879[(2)]);
var state_34879__$1 = state_34879;
var statearr_34893_34907 = state_34879__$1;
(statearr_34893_34907[(2)] = inst_34873);

(statearr_34893_34907[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34880 === (8))){
var inst_34866 = (state_34879[(9)]);
var inst_34869 = cljs.core.deref(inst_34866);
var state_34879__$1 = state_34879;
var statearr_34894_34908 = state_34879__$1;
(statearr_34894_34908[(2)] = inst_34869);

(statearr_34894_34908[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto__))
;
return ((function (switch__34288__auto__,c__34390__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34289__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34289__auto____0 = (function (){
var statearr_34895 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34895[(0)] = cljs$core$async$reduce_$_state_machine__34289__auto__);

(statearr_34895[(1)] = (1));

return statearr_34895;
});
var cljs$core$async$reduce_$_state_machine__34289__auto____1 = (function (state_34879){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34879);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34896){if((e34896 instanceof Object)){
var ex__34292__auto__ = e34896;
var statearr_34897_34909 = state_34879;
(statearr_34897_34909[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34879);

return cljs.core.cst$kw$recur;
} else {
throw e34896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34910 = state_34879;
state_34879 = G__34910;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34289__auto__ = function(state_34879){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34289__auto____1.call(this,state_34879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34289__auto____0;
cljs$core$async$reduce_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34289__auto____1;
return cljs$core$async$reduce_$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__))
})();
var state__34392__auto__ = (function (){var statearr_34898 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34898[(6)] = c__34390__auto__);

return statearr_34898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__))
);

return c__34390__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__,f__$1){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__,f__$1){
return (function (state_34916){
var state_val_34917 = (state_34916[(1)]);
if((state_val_34917 === (1))){
var inst_34911 = cljs.core.async.reduce(f__$1,init,ch);
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34916__$1,(2),inst_34911);
} else {
if((state_val_34917 === (2))){
var inst_34913 = (state_34916[(2)]);
var inst_34914 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34913) : f__$1.call(null,inst_34913));
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34916__$1,inst_34914);
} else {
return null;
}
}
});})(c__34390__auto__,f__$1))
;
return ((function (switch__34288__auto__,c__34390__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34289__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34289__auto____0 = (function (){
var statearr_34918 = [null,null,null,null,null,null,null];
(statearr_34918[(0)] = cljs$core$async$transduce_$_state_machine__34289__auto__);

(statearr_34918[(1)] = (1));

return statearr_34918;
});
var cljs$core$async$transduce_$_state_machine__34289__auto____1 = (function (state_34916){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34916);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34919){if((e34919 instanceof Object)){
var ex__34292__auto__ = e34919;
var statearr_34920_34922 = state_34916;
(statearr_34920_34922[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34916);

return cljs.core.cst$kw$recur;
} else {
throw e34919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34923 = state_34916;
state_34916 = G__34923;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34289__auto__ = function(state_34916){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34289__auto____1.call(this,state_34916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34289__auto____0;
cljs$core$async$transduce_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34289__auto____1;
return cljs$core$async$transduce_$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__,f__$1))
})();
var state__34392__auto__ = (function (){var statearr_34921 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34921[(6)] = c__34390__auto__);

return statearr_34921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__,f__$1))
);

return c__34390__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34925 = arguments.length;
switch (G__34925) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__){
return (function (state_34950){
var state_val_34951 = (state_34950[(1)]);
if((state_val_34951 === (7))){
var inst_34932 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34952_34973 = state_34950__$1;
(statearr_34952_34973[(2)] = inst_34932);

(statearr_34952_34973[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (1))){
var inst_34926 = cljs.core.seq(coll);
var inst_34927 = inst_34926;
var state_34950__$1 = (function (){var statearr_34953 = state_34950;
(statearr_34953[(7)] = inst_34927);

return statearr_34953;
})();
var statearr_34954_34974 = state_34950__$1;
(statearr_34954_34974[(2)] = null);

(statearr_34954_34974[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (4))){
var inst_34927 = (state_34950[(7)]);
var inst_34930 = cljs.core.first(inst_34927);
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34950__$1,(7),ch,inst_34930);
} else {
if((state_val_34951 === (13))){
var inst_34944 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34955_34975 = state_34950__$1;
(statearr_34955_34975[(2)] = inst_34944);

(statearr_34955_34975[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (6))){
var inst_34935 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34935)){
var statearr_34956_34976 = state_34950__$1;
(statearr_34956_34976[(1)] = (8));

} else {
var statearr_34957_34977 = state_34950__$1;
(statearr_34957_34977[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (3))){
var inst_34948 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34950__$1,inst_34948);
} else {
if((state_val_34951 === (12))){
var state_34950__$1 = state_34950;
var statearr_34958_34978 = state_34950__$1;
(statearr_34958_34978[(2)] = null);

(statearr_34958_34978[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (2))){
var inst_34927 = (state_34950[(7)]);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34927)){
var statearr_34959_34979 = state_34950__$1;
(statearr_34959_34979[(1)] = (4));

} else {
var statearr_34960_34980 = state_34950__$1;
(statearr_34960_34980[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (11))){
var inst_34941 = cljs.core.async.close_BANG_(ch);
var state_34950__$1 = state_34950;
var statearr_34961_34981 = state_34950__$1;
(statearr_34961_34981[(2)] = inst_34941);

(statearr_34961_34981[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (9))){
var state_34950__$1 = state_34950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34962_34982 = state_34950__$1;
(statearr_34962_34982[(1)] = (11));

} else {
var statearr_34963_34983 = state_34950__$1;
(statearr_34963_34983[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (5))){
var inst_34927 = (state_34950[(7)]);
var state_34950__$1 = state_34950;
var statearr_34964_34984 = state_34950__$1;
(statearr_34964_34984[(2)] = inst_34927);

(statearr_34964_34984[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (10))){
var inst_34946 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34965_34985 = state_34950__$1;
(statearr_34965_34985[(2)] = inst_34946);

(statearr_34965_34985[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34951 === (8))){
var inst_34927 = (state_34950[(7)]);
var inst_34937 = cljs.core.next(inst_34927);
var inst_34927__$1 = inst_34937;
var state_34950__$1 = (function (){var statearr_34966 = state_34950;
(statearr_34966[(7)] = inst_34927__$1);

return statearr_34966;
})();
var statearr_34967_34986 = state_34950__$1;
(statearr_34967_34986[(2)] = null);

(statearr_34967_34986[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto__))
;
return ((function (switch__34288__auto__,c__34390__auto__){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_34968 = [null,null,null,null,null,null,null,null];
(statearr_34968[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_34968[(1)] = (1));

return statearr_34968;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_34950){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_34950);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e34969){if((e34969 instanceof Object)){
var ex__34292__auto__ = e34969;
var statearr_34970_34987 = state_34950;
(statearr_34970_34987[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34950);

return cljs.core.cst$kw$recur;
} else {
throw e34969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__34988 = state_34950;
state_34950 = G__34988;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_34950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_34950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__))
})();
var state__34392__auto__ = (function (){var statearr_34971 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_34971[(6)] = c__34390__auto__);

return statearr_34971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__))
);

return c__34390__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9541__auto__ = (((_ == null))?null:_);
var m__9542__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto__.call(null,_));
} else {
var m__9542__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9542__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9542__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__9542__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9542__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto__.call(null,m,ch));
} else {
var m__9542__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9542__auto__.call(null,m));
} else {
var m__9542__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9542__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34989 = (function (ch,cs,meta34990){
this.ch = ch;
this.cs = cs;
this.meta34990 = meta34990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34991,meta34990__$1){
var self__ = this;
var _34991__$1 = this;
return (new cljs.core.async.t_cljs$core$async34989(self__.ch,self__.cs,meta34990__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34991){
var self__ = this;
var _34991__$1 = this;
return self__.meta34990;
});})(cs))
;

cljs.core.async.t_cljs$core$async34989.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34989.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34989.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34989.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34989.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34989.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34989.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta34990], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34989";

cljs.core.async.t_cljs$core$async34989.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async34989");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34989 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34989(ch__$1,cs__$1,meta34990){
return (new cljs.core.async.t_cljs$core$async34989(ch__$1,cs__$1,meta34990));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34989(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34390__auto___35211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___35211,cs,m,dchan,dctr,done){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___35211,cs,m,dchan,dctr,done){
return (function (state_35126){
var state_val_35127 = (state_35126[(1)]);
if((state_val_35127 === (7))){
var inst_35122 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35128_35212 = state_35126__$1;
(statearr_35128_35212[(2)] = inst_35122);

(statearr_35128_35212[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (20))){
var inst_35025 = (state_35126[(7)]);
var inst_35037 = cljs.core.first(inst_35025);
var inst_35038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35037,(0),null);
var inst_35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35037,(1),null);
var state_35126__$1 = (function (){var statearr_35129 = state_35126;
(statearr_35129[(8)] = inst_35038);

return statearr_35129;
})();
if(cljs.core.truth_(inst_35039)){
var statearr_35130_35213 = state_35126__$1;
(statearr_35130_35213[(1)] = (22));

} else {
var statearr_35131_35214 = state_35126__$1;
(statearr_35131_35214[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (27))){
var inst_35067 = (state_35126[(9)]);
var inst_35074 = (state_35126[(10)]);
var inst_34994 = (state_35126[(11)]);
var inst_35069 = (state_35126[(12)]);
var inst_35074__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35067,inst_35069);
var inst_35075 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35074__$1,inst_34994,done);
var state_35126__$1 = (function (){var statearr_35132 = state_35126;
(statearr_35132[(10)] = inst_35074__$1);

return statearr_35132;
})();
if(cljs.core.truth_(inst_35075)){
var statearr_35133_35215 = state_35126__$1;
(statearr_35133_35215[(1)] = (30));

} else {
var statearr_35134_35216 = state_35126__$1;
(statearr_35134_35216[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (1))){
var state_35126__$1 = state_35126;
var statearr_35135_35217 = state_35126__$1;
(statearr_35135_35217[(2)] = null);

(statearr_35135_35217[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (24))){
var inst_35025 = (state_35126[(7)]);
var inst_35044 = (state_35126[(2)]);
var inst_35045 = cljs.core.next(inst_35025);
var inst_35003 = inst_35045;
var inst_35004 = null;
var inst_35005 = (0);
var inst_35006 = (0);
var state_35126__$1 = (function (){var statearr_35136 = state_35126;
(statearr_35136[(13)] = inst_35004);

(statearr_35136[(14)] = inst_35005);

(statearr_35136[(15)] = inst_35003);

(statearr_35136[(16)] = inst_35044);

(statearr_35136[(17)] = inst_35006);

return statearr_35136;
})();
var statearr_35137_35218 = state_35126__$1;
(statearr_35137_35218[(2)] = null);

(statearr_35137_35218[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (39))){
var state_35126__$1 = state_35126;
var statearr_35141_35219 = state_35126__$1;
(statearr_35141_35219[(2)] = null);

(statearr_35141_35219[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (4))){
var inst_34994 = (state_35126[(11)]);
var inst_34994__$1 = (state_35126[(2)]);
var inst_34995 = (inst_34994__$1 == null);
var state_35126__$1 = (function (){var statearr_35142 = state_35126;
(statearr_35142[(11)] = inst_34994__$1);

return statearr_35142;
})();
if(cljs.core.truth_(inst_34995)){
var statearr_35143_35220 = state_35126__$1;
(statearr_35143_35220[(1)] = (5));

} else {
var statearr_35144_35221 = state_35126__$1;
(statearr_35144_35221[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (15))){
var inst_35004 = (state_35126[(13)]);
var inst_35005 = (state_35126[(14)]);
var inst_35003 = (state_35126[(15)]);
var inst_35006 = (state_35126[(17)]);
var inst_35021 = (state_35126[(2)]);
var inst_35022 = (inst_35006 + (1));
var tmp35138 = inst_35004;
var tmp35139 = inst_35005;
var tmp35140 = inst_35003;
var inst_35003__$1 = tmp35140;
var inst_35004__$1 = tmp35138;
var inst_35005__$1 = tmp35139;
var inst_35006__$1 = inst_35022;
var state_35126__$1 = (function (){var statearr_35145 = state_35126;
(statearr_35145[(13)] = inst_35004__$1);

(statearr_35145[(14)] = inst_35005__$1);

(statearr_35145[(15)] = inst_35003__$1);

(statearr_35145[(18)] = inst_35021);

(statearr_35145[(17)] = inst_35006__$1);

return statearr_35145;
})();
var statearr_35146_35222 = state_35126__$1;
(statearr_35146_35222[(2)] = null);

(statearr_35146_35222[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (21))){
var inst_35048 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35150_35223 = state_35126__$1;
(statearr_35150_35223[(2)] = inst_35048);

(statearr_35150_35223[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (31))){
var inst_35074 = (state_35126[(10)]);
var inst_35078 = done(null);
var inst_35079 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35074);
var state_35126__$1 = (function (){var statearr_35151 = state_35126;
(statearr_35151[(19)] = inst_35078);

return statearr_35151;
})();
var statearr_35152_35224 = state_35126__$1;
(statearr_35152_35224[(2)] = inst_35079);

(statearr_35152_35224[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (32))){
var inst_35067 = (state_35126[(9)]);
var inst_35068 = (state_35126[(20)]);
var inst_35069 = (state_35126[(12)]);
var inst_35066 = (state_35126[(21)]);
var inst_35081 = (state_35126[(2)]);
var inst_35082 = (inst_35069 + (1));
var tmp35147 = inst_35067;
var tmp35148 = inst_35068;
var tmp35149 = inst_35066;
var inst_35066__$1 = tmp35149;
var inst_35067__$1 = tmp35147;
var inst_35068__$1 = tmp35148;
var inst_35069__$1 = inst_35082;
var state_35126__$1 = (function (){var statearr_35153 = state_35126;
(statearr_35153[(9)] = inst_35067__$1);

(statearr_35153[(20)] = inst_35068__$1);

(statearr_35153[(22)] = inst_35081);

(statearr_35153[(12)] = inst_35069__$1);

(statearr_35153[(21)] = inst_35066__$1);

return statearr_35153;
})();
var statearr_35154_35225 = state_35126__$1;
(statearr_35154_35225[(2)] = null);

(statearr_35154_35225[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (40))){
var inst_35094 = (state_35126[(23)]);
var inst_35098 = done(null);
var inst_35099 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35094);
var state_35126__$1 = (function (){var statearr_35155 = state_35126;
(statearr_35155[(24)] = inst_35098);

return statearr_35155;
})();
var statearr_35156_35226 = state_35126__$1;
(statearr_35156_35226[(2)] = inst_35099);

(statearr_35156_35226[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (33))){
var inst_35085 = (state_35126[(25)]);
var inst_35087 = cljs.core.chunked_seq_QMARK_(inst_35085);
var state_35126__$1 = state_35126;
if(inst_35087){
var statearr_35157_35227 = state_35126__$1;
(statearr_35157_35227[(1)] = (36));

} else {
var statearr_35158_35228 = state_35126__$1;
(statearr_35158_35228[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (13))){
var inst_35015 = (state_35126[(26)]);
var inst_35018 = cljs.core.async.close_BANG_(inst_35015);
var state_35126__$1 = state_35126;
var statearr_35159_35229 = state_35126__$1;
(statearr_35159_35229[(2)] = inst_35018);

(statearr_35159_35229[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (22))){
var inst_35038 = (state_35126[(8)]);
var inst_35041 = cljs.core.async.close_BANG_(inst_35038);
var state_35126__$1 = state_35126;
var statearr_35160_35230 = state_35126__$1;
(statearr_35160_35230[(2)] = inst_35041);

(statearr_35160_35230[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (36))){
var inst_35085 = (state_35126[(25)]);
var inst_35089 = cljs.core.chunk_first(inst_35085);
var inst_35090 = cljs.core.chunk_rest(inst_35085);
var inst_35091 = cljs.core.count(inst_35089);
var inst_35066 = inst_35090;
var inst_35067 = inst_35089;
var inst_35068 = inst_35091;
var inst_35069 = (0);
var state_35126__$1 = (function (){var statearr_35161 = state_35126;
(statearr_35161[(9)] = inst_35067);

(statearr_35161[(20)] = inst_35068);

(statearr_35161[(12)] = inst_35069);

(statearr_35161[(21)] = inst_35066);

return statearr_35161;
})();
var statearr_35162_35231 = state_35126__$1;
(statearr_35162_35231[(2)] = null);

(statearr_35162_35231[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (41))){
var inst_35085 = (state_35126[(25)]);
var inst_35101 = (state_35126[(2)]);
var inst_35102 = cljs.core.next(inst_35085);
var inst_35066 = inst_35102;
var inst_35067 = null;
var inst_35068 = (0);
var inst_35069 = (0);
var state_35126__$1 = (function (){var statearr_35163 = state_35126;
(statearr_35163[(9)] = inst_35067);

(statearr_35163[(20)] = inst_35068);

(statearr_35163[(27)] = inst_35101);

(statearr_35163[(12)] = inst_35069);

(statearr_35163[(21)] = inst_35066);

return statearr_35163;
})();
var statearr_35164_35232 = state_35126__$1;
(statearr_35164_35232[(2)] = null);

(statearr_35164_35232[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (43))){
var state_35126__$1 = state_35126;
var statearr_35165_35233 = state_35126__$1;
(statearr_35165_35233[(2)] = null);

(statearr_35165_35233[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (29))){
var inst_35110 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35166_35234 = state_35126__$1;
(statearr_35166_35234[(2)] = inst_35110);

(statearr_35166_35234[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (44))){
var inst_35119 = (state_35126[(2)]);
var state_35126__$1 = (function (){var statearr_35167 = state_35126;
(statearr_35167[(28)] = inst_35119);

return statearr_35167;
})();
var statearr_35168_35235 = state_35126__$1;
(statearr_35168_35235[(2)] = null);

(statearr_35168_35235[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (6))){
var inst_35058 = (state_35126[(29)]);
var inst_35057 = cljs.core.deref(cs);
var inst_35058__$1 = cljs.core.keys(inst_35057);
var inst_35059 = cljs.core.count(inst_35058__$1);
var inst_35060 = cljs.core.reset_BANG_(dctr,inst_35059);
var inst_35065 = cljs.core.seq(inst_35058__$1);
var inst_35066 = inst_35065;
var inst_35067 = null;
var inst_35068 = (0);
var inst_35069 = (0);
var state_35126__$1 = (function (){var statearr_35169 = state_35126;
(statearr_35169[(9)] = inst_35067);

(statearr_35169[(30)] = inst_35060);

(statearr_35169[(29)] = inst_35058__$1);

(statearr_35169[(20)] = inst_35068);

(statearr_35169[(12)] = inst_35069);

(statearr_35169[(21)] = inst_35066);

return statearr_35169;
})();
var statearr_35170_35236 = state_35126__$1;
(statearr_35170_35236[(2)] = null);

(statearr_35170_35236[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (28))){
var inst_35085 = (state_35126[(25)]);
var inst_35066 = (state_35126[(21)]);
var inst_35085__$1 = cljs.core.seq(inst_35066);
var state_35126__$1 = (function (){var statearr_35171 = state_35126;
(statearr_35171[(25)] = inst_35085__$1);

return statearr_35171;
})();
if(inst_35085__$1){
var statearr_35172_35237 = state_35126__$1;
(statearr_35172_35237[(1)] = (33));

} else {
var statearr_35173_35238 = state_35126__$1;
(statearr_35173_35238[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (25))){
var inst_35068 = (state_35126[(20)]);
var inst_35069 = (state_35126[(12)]);
var inst_35071 = (inst_35069 < inst_35068);
var inst_35072 = inst_35071;
var state_35126__$1 = state_35126;
if(cljs.core.truth_(inst_35072)){
var statearr_35174_35239 = state_35126__$1;
(statearr_35174_35239[(1)] = (27));

} else {
var statearr_35175_35240 = state_35126__$1;
(statearr_35175_35240[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (34))){
var state_35126__$1 = state_35126;
var statearr_35176_35241 = state_35126__$1;
(statearr_35176_35241[(2)] = null);

(statearr_35176_35241[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (17))){
var state_35126__$1 = state_35126;
var statearr_35177_35242 = state_35126__$1;
(statearr_35177_35242[(2)] = null);

(statearr_35177_35242[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (3))){
var inst_35124 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35126__$1,inst_35124);
} else {
if((state_val_35127 === (12))){
var inst_35053 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35178_35243 = state_35126__$1;
(statearr_35178_35243[(2)] = inst_35053);

(statearr_35178_35243[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (2))){
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35126__$1,(4),ch);
} else {
if((state_val_35127 === (23))){
var state_35126__$1 = state_35126;
var statearr_35179_35244 = state_35126__$1;
(statearr_35179_35244[(2)] = null);

(statearr_35179_35244[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (35))){
var inst_35108 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35180_35245 = state_35126__$1;
(statearr_35180_35245[(2)] = inst_35108);

(statearr_35180_35245[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (19))){
var inst_35025 = (state_35126[(7)]);
var inst_35029 = cljs.core.chunk_first(inst_35025);
var inst_35030 = cljs.core.chunk_rest(inst_35025);
var inst_35031 = cljs.core.count(inst_35029);
var inst_35003 = inst_35030;
var inst_35004 = inst_35029;
var inst_35005 = inst_35031;
var inst_35006 = (0);
var state_35126__$1 = (function (){var statearr_35181 = state_35126;
(statearr_35181[(13)] = inst_35004);

(statearr_35181[(14)] = inst_35005);

(statearr_35181[(15)] = inst_35003);

(statearr_35181[(17)] = inst_35006);

return statearr_35181;
})();
var statearr_35182_35246 = state_35126__$1;
(statearr_35182_35246[(2)] = null);

(statearr_35182_35246[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (11))){
var inst_35003 = (state_35126[(15)]);
var inst_35025 = (state_35126[(7)]);
var inst_35025__$1 = cljs.core.seq(inst_35003);
var state_35126__$1 = (function (){var statearr_35183 = state_35126;
(statearr_35183[(7)] = inst_35025__$1);

return statearr_35183;
})();
if(inst_35025__$1){
var statearr_35184_35247 = state_35126__$1;
(statearr_35184_35247[(1)] = (16));

} else {
var statearr_35185_35248 = state_35126__$1;
(statearr_35185_35248[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (9))){
var inst_35055 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35186_35249 = state_35126__$1;
(statearr_35186_35249[(2)] = inst_35055);

(statearr_35186_35249[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (5))){
var inst_35001 = cljs.core.deref(cs);
var inst_35002 = cljs.core.seq(inst_35001);
var inst_35003 = inst_35002;
var inst_35004 = null;
var inst_35005 = (0);
var inst_35006 = (0);
var state_35126__$1 = (function (){var statearr_35187 = state_35126;
(statearr_35187[(13)] = inst_35004);

(statearr_35187[(14)] = inst_35005);

(statearr_35187[(15)] = inst_35003);

(statearr_35187[(17)] = inst_35006);

return statearr_35187;
})();
var statearr_35188_35250 = state_35126__$1;
(statearr_35188_35250[(2)] = null);

(statearr_35188_35250[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (14))){
var state_35126__$1 = state_35126;
var statearr_35189_35251 = state_35126__$1;
(statearr_35189_35251[(2)] = null);

(statearr_35189_35251[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (45))){
var inst_35116 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35190_35252 = state_35126__$1;
(statearr_35190_35252[(2)] = inst_35116);

(statearr_35190_35252[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (26))){
var inst_35058 = (state_35126[(29)]);
var inst_35112 = (state_35126[(2)]);
var inst_35113 = cljs.core.seq(inst_35058);
var state_35126__$1 = (function (){var statearr_35191 = state_35126;
(statearr_35191[(31)] = inst_35112);

return statearr_35191;
})();
if(inst_35113){
var statearr_35192_35253 = state_35126__$1;
(statearr_35192_35253[(1)] = (42));

} else {
var statearr_35193_35254 = state_35126__$1;
(statearr_35193_35254[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (16))){
var inst_35025 = (state_35126[(7)]);
var inst_35027 = cljs.core.chunked_seq_QMARK_(inst_35025);
var state_35126__$1 = state_35126;
if(inst_35027){
var statearr_35194_35255 = state_35126__$1;
(statearr_35194_35255[(1)] = (19));

} else {
var statearr_35195_35256 = state_35126__$1;
(statearr_35195_35256[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (38))){
var inst_35105 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35196_35257 = state_35126__$1;
(statearr_35196_35257[(2)] = inst_35105);

(statearr_35196_35257[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (30))){
var state_35126__$1 = state_35126;
var statearr_35197_35258 = state_35126__$1;
(statearr_35197_35258[(2)] = null);

(statearr_35197_35258[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (10))){
var inst_35004 = (state_35126[(13)]);
var inst_35006 = (state_35126[(17)]);
var inst_35014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35004,inst_35006);
var inst_35015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35014,(0),null);
var inst_35016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35014,(1),null);
var state_35126__$1 = (function (){var statearr_35198 = state_35126;
(statearr_35198[(26)] = inst_35015);

return statearr_35198;
})();
if(cljs.core.truth_(inst_35016)){
var statearr_35199_35259 = state_35126__$1;
(statearr_35199_35259[(1)] = (13));

} else {
var statearr_35200_35260 = state_35126__$1;
(statearr_35200_35260[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (18))){
var inst_35051 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35201_35261 = state_35126__$1;
(statearr_35201_35261[(2)] = inst_35051);

(statearr_35201_35261[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (42))){
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35126__$1,(45),dchan);
} else {
if((state_val_35127 === (37))){
var inst_35085 = (state_35126[(25)]);
var inst_34994 = (state_35126[(11)]);
var inst_35094 = (state_35126[(23)]);
var inst_35094__$1 = cljs.core.first(inst_35085);
var inst_35095 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35094__$1,inst_34994,done);
var state_35126__$1 = (function (){var statearr_35202 = state_35126;
(statearr_35202[(23)] = inst_35094__$1);

return statearr_35202;
})();
if(cljs.core.truth_(inst_35095)){
var statearr_35203_35262 = state_35126__$1;
(statearr_35203_35262[(1)] = (39));

} else {
var statearr_35204_35263 = state_35126__$1;
(statearr_35204_35263[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35127 === (8))){
var inst_35005 = (state_35126[(14)]);
var inst_35006 = (state_35126[(17)]);
var inst_35008 = (inst_35006 < inst_35005);
var inst_35009 = inst_35008;
var state_35126__$1 = state_35126;
if(cljs.core.truth_(inst_35009)){
var statearr_35205_35264 = state_35126__$1;
(statearr_35205_35264[(1)] = (10));

} else {
var statearr_35206_35265 = state_35126__$1;
(statearr_35206_35265[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___35211,cs,m,dchan,dctr,done))
;
return ((function (switch__34288__auto__,c__34390__auto___35211,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34289__auto__ = null;
var cljs$core$async$mult_$_state_machine__34289__auto____0 = (function (){
var statearr_35207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35207[(0)] = cljs$core$async$mult_$_state_machine__34289__auto__);

(statearr_35207[(1)] = (1));

return statearr_35207;
});
var cljs$core$async$mult_$_state_machine__34289__auto____1 = (function (state_35126){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_35126);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e35208){if((e35208 instanceof Object)){
var ex__34292__auto__ = e35208;
var statearr_35209_35266 = state_35126;
(statearr_35209_35266[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35126);

return cljs.core.cst$kw$recur;
} else {
throw e35208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__35267 = state_35126;
state_35126 = G__35267;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34289__auto__ = function(state_35126){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34289__auto____1.call(this,state_35126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34289__auto____0;
cljs$core$async$mult_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34289__auto____1;
return cljs$core$async$mult_$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___35211,cs,m,dchan,dctr,done))
})();
var state__34392__auto__ = (function (){var statearr_35210 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_35210[(6)] = c__34390__auto___35211);

return statearr_35210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___35211,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35269 = arguments.length;
switch (G__35269) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto__.call(null,m,ch));
} else {
var m__9542__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto__.call(null,m,ch));
} else {
var m__9542__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9542__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9542__auto__.call(null,m));
} else {
var m__9542__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9542__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9542__auto__.call(null,m,state_map));
} else {
var m__9542__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9542__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9541__auto__ = (((m == null))?null:m);
var m__9542__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9542__auto__.call(null,m,mode));
} else {
var m__9542__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9542__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10094__auto__ = [];
var len__10087__auto___35281 = arguments.length;
var i__10088__auto___35282 = (0);
while(true){
if((i__10088__auto___35282 < len__10087__auto___35281)){
args__10094__auto__.push((arguments[i__10088__auto___35282]));

var G__35283 = (i__10088__auto___35282 + (1));
i__10088__auto___35282 = G__35283;
continue;
} else {
}
break;
}

var argseq__10095__auto__ = ((((3) < args__10094__auto__.length))?(new cljs.core.IndexedSeq(args__10094__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10095__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35275){
var map__35276 = p__35275;
var map__35276__$1 = ((((!((map__35276 == null)))?((((map__35276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35276):map__35276);
var opts = map__35276__$1;
var statearr_35278_35284 = state;
(statearr_35278_35284[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__35276,map__35276__$1,opts){
return (function (val){
var statearr_35279_35285 = state;
(statearr_35279_35285[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__35276,map__35276__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35280_35286 = state;
(statearr_35280_35286[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35271){
var G__35272 = cljs.core.first(seq35271);
var seq35271__$1 = cljs.core.next(seq35271);
var G__35273 = cljs.core.first(seq35271__$1);
var seq35271__$2 = cljs.core.next(seq35271__$1);
var G__35274 = cljs.core.first(seq35271__$2);
var seq35271__$3 = cljs.core.next(seq35271__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35272,G__35273,G__35274,seq35271__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35287 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35288){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35288 = meta35288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35289,meta35288__$1){
var self__ = this;
var _35289__$1 = this;
return (new cljs.core.async.t_cljs$core$async35287(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35288__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35289){
var self__ = this;
var _35289__$1 = this;
return self__.meta35288;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35287.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35287.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta35288], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35287";

cljs.core.async.t_cljs$core$async35287.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async35287");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35287 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35287(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35288){
return (new cljs.core.async.t_cljs$core$async35287(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35288));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35287(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34390__auto___35451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___35451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___35451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35391){
var state_val_35392 = (state_35391[(1)]);
if((state_val_35392 === (7))){
var inst_35306 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
var statearr_35393_35452 = state_35391__$1;
(statearr_35393_35452[(2)] = inst_35306);

(statearr_35393_35452[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (20))){
var inst_35318 = (state_35391[(7)]);
var state_35391__$1 = state_35391;
var statearr_35394_35453 = state_35391__$1;
(statearr_35394_35453[(2)] = inst_35318);

(statearr_35394_35453[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (27))){
var state_35391__$1 = state_35391;
var statearr_35395_35454 = state_35391__$1;
(statearr_35395_35454[(2)] = null);

(statearr_35395_35454[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (1))){
var inst_35293 = (state_35391[(8)]);
var inst_35293__$1 = calc_state();
var inst_35295 = (inst_35293__$1 == null);
var inst_35296 = cljs.core.not(inst_35295);
var state_35391__$1 = (function (){var statearr_35396 = state_35391;
(statearr_35396[(8)] = inst_35293__$1);

return statearr_35396;
})();
if(inst_35296){
var statearr_35397_35455 = state_35391__$1;
(statearr_35397_35455[(1)] = (2));

} else {
var statearr_35398_35456 = state_35391__$1;
(statearr_35398_35456[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (24))){
var inst_35342 = (state_35391[(9)]);
var inst_35365 = (state_35391[(10)]);
var inst_35351 = (state_35391[(11)]);
var inst_35365__$1 = (inst_35342.cljs$core$IFn$_invoke$arity$1 ? inst_35342.cljs$core$IFn$_invoke$arity$1(inst_35351) : inst_35342.call(null,inst_35351));
var state_35391__$1 = (function (){var statearr_35399 = state_35391;
(statearr_35399[(10)] = inst_35365__$1);

return statearr_35399;
})();
if(cljs.core.truth_(inst_35365__$1)){
var statearr_35400_35457 = state_35391__$1;
(statearr_35400_35457[(1)] = (29));

} else {
var statearr_35401_35458 = state_35391__$1;
(statearr_35401_35458[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (4))){
var inst_35309 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
if(cljs.core.truth_(inst_35309)){
var statearr_35402_35459 = state_35391__$1;
(statearr_35402_35459[(1)] = (8));

} else {
var statearr_35403_35460 = state_35391__$1;
(statearr_35403_35460[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (15))){
var inst_35336 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
if(cljs.core.truth_(inst_35336)){
var statearr_35404_35461 = state_35391__$1;
(statearr_35404_35461[(1)] = (19));

} else {
var statearr_35405_35462 = state_35391__$1;
(statearr_35405_35462[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (21))){
var inst_35341 = (state_35391[(12)]);
var inst_35341__$1 = (state_35391[(2)]);
var inst_35342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35341__$1,cljs.core.cst$kw$solos);
var inst_35343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35341__$1,cljs.core.cst$kw$mutes);
var inst_35344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35341__$1,cljs.core.cst$kw$reads);
var state_35391__$1 = (function (){var statearr_35406 = state_35391;
(statearr_35406[(13)] = inst_35343);

(statearr_35406[(9)] = inst_35342);

(statearr_35406[(12)] = inst_35341__$1);

return statearr_35406;
})();
return cljs.core.async.ioc_alts_BANG_(state_35391__$1,(22),inst_35344);
} else {
if((state_val_35392 === (31))){
var inst_35373 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
if(cljs.core.truth_(inst_35373)){
var statearr_35407_35463 = state_35391__$1;
(statearr_35407_35463[(1)] = (32));

} else {
var statearr_35408_35464 = state_35391__$1;
(statearr_35408_35464[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (32))){
var inst_35350 = (state_35391[(14)]);
var state_35391__$1 = state_35391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35391__$1,(35),out,inst_35350);
} else {
if((state_val_35392 === (33))){
var inst_35341 = (state_35391[(12)]);
var inst_35318 = inst_35341;
var state_35391__$1 = (function (){var statearr_35409 = state_35391;
(statearr_35409[(7)] = inst_35318);

return statearr_35409;
})();
var statearr_35410_35465 = state_35391__$1;
(statearr_35410_35465[(2)] = null);

(statearr_35410_35465[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (13))){
var inst_35318 = (state_35391[(7)]);
var inst_35325 = inst_35318.cljs$lang$protocol_mask$partition0$;
var inst_35326 = (inst_35325 & (64));
var inst_35327 = inst_35318.cljs$core$ISeq$;
var inst_35328 = (cljs.core.PROTOCOL_SENTINEL === inst_35327);
var inst_35329 = (inst_35326) || (inst_35328);
var state_35391__$1 = state_35391;
if(cljs.core.truth_(inst_35329)){
var statearr_35411_35466 = state_35391__$1;
(statearr_35411_35466[(1)] = (16));

} else {
var statearr_35412_35467 = state_35391__$1;
(statearr_35412_35467[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (22))){
var inst_35350 = (state_35391[(14)]);
var inst_35351 = (state_35391[(11)]);
var inst_35349 = (state_35391[(2)]);
var inst_35350__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35349,(0),null);
var inst_35351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35349,(1),null);
var inst_35352 = (inst_35350__$1 == null);
var inst_35353 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35351__$1,change);
var inst_35354 = (inst_35352) || (inst_35353);
var state_35391__$1 = (function (){var statearr_35413 = state_35391;
(statearr_35413[(14)] = inst_35350__$1);

(statearr_35413[(11)] = inst_35351__$1);

return statearr_35413;
})();
if(cljs.core.truth_(inst_35354)){
var statearr_35414_35468 = state_35391__$1;
(statearr_35414_35468[(1)] = (23));

} else {
var statearr_35415_35469 = state_35391__$1;
(statearr_35415_35469[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (36))){
var inst_35341 = (state_35391[(12)]);
var inst_35318 = inst_35341;
var state_35391__$1 = (function (){var statearr_35416 = state_35391;
(statearr_35416[(7)] = inst_35318);

return statearr_35416;
})();
var statearr_35417_35470 = state_35391__$1;
(statearr_35417_35470[(2)] = null);

(statearr_35417_35470[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (29))){
var inst_35365 = (state_35391[(10)]);
var state_35391__$1 = state_35391;
var statearr_35418_35471 = state_35391__$1;
(statearr_35418_35471[(2)] = inst_35365);

(statearr_35418_35471[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (6))){
var state_35391__$1 = state_35391;
var statearr_35419_35472 = state_35391__$1;
(statearr_35419_35472[(2)] = false);

(statearr_35419_35472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (28))){
var inst_35361 = (state_35391[(2)]);
var inst_35362 = calc_state();
var inst_35318 = inst_35362;
var state_35391__$1 = (function (){var statearr_35420 = state_35391;
(statearr_35420[(7)] = inst_35318);

(statearr_35420[(15)] = inst_35361);

return statearr_35420;
})();
var statearr_35421_35473 = state_35391__$1;
(statearr_35421_35473[(2)] = null);

(statearr_35421_35473[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (25))){
var inst_35387 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
var statearr_35422_35474 = state_35391__$1;
(statearr_35422_35474[(2)] = inst_35387);

(statearr_35422_35474[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (34))){
var inst_35385 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
var statearr_35423_35475 = state_35391__$1;
(statearr_35423_35475[(2)] = inst_35385);

(statearr_35423_35475[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (17))){
var state_35391__$1 = state_35391;
var statearr_35424_35476 = state_35391__$1;
(statearr_35424_35476[(2)] = false);

(statearr_35424_35476[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (3))){
var state_35391__$1 = state_35391;
var statearr_35425_35477 = state_35391__$1;
(statearr_35425_35477[(2)] = false);

(statearr_35425_35477[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (12))){
var inst_35389 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35391__$1,inst_35389);
} else {
if((state_val_35392 === (2))){
var inst_35293 = (state_35391[(8)]);
var inst_35298 = inst_35293.cljs$lang$protocol_mask$partition0$;
var inst_35299 = (inst_35298 & (64));
var inst_35300 = inst_35293.cljs$core$ISeq$;
var inst_35301 = (cljs.core.PROTOCOL_SENTINEL === inst_35300);
var inst_35302 = (inst_35299) || (inst_35301);
var state_35391__$1 = state_35391;
if(cljs.core.truth_(inst_35302)){
var statearr_35426_35478 = state_35391__$1;
(statearr_35426_35478[(1)] = (5));

} else {
var statearr_35427_35479 = state_35391__$1;
(statearr_35427_35479[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (23))){
var inst_35350 = (state_35391[(14)]);
var inst_35356 = (inst_35350 == null);
var state_35391__$1 = state_35391;
if(cljs.core.truth_(inst_35356)){
var statearr_35428_35480 = state_35391__$1;
(statearr_35428_35480[(1)] = (26));

} else {
var statearr_35429_35481 = state_35391__$1;
(statearr_35429_35481[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (35))){
var inst_35376 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
if(cljs.core.truth_(inst_35376)){
var statearr_35430_35482 = state_35391__$1;
(statearr_35430_35482[(1)] = (36));

} else {
var statearr_35431_35483 = state_35391__$1;
(statearr_35431_35483[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (19))){
var inst_35318 = (state_35391[(7)]);
var inst_35338 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35318);
var state_35391__$1 = state_35391;
var statearr_35432_35484 = state_35391__$1;
(statearr_35432_35484[(2)] = inst_35338);

(statearr_35432_35484[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (11))){
var inst_35318 = (state_35391[(7)]);
var inst_35322 = (inst_35318 == null);
var inst_35323 = cljs.core.not(inst_35322);
var state_35391__$1 = state_35391;
if(inst_35323){
var statearr_35433_35485 = state_35391__$1;
(statearr_35433_35485[(1)] = (13));

} else {
var statearr_35434_35486 = state_35391__$1;
(statearr_35434_35486[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (9))){
var inst_35293 = (state_35391[(8)]);
var state_35391__$1 = state_35391;
var statearr_35435_35487 = state_35391__$1;
(statearr_35435_35487[(2)] = inst_35293);

(statearr_35435_35487[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (5))){
var state_35391__$1 = state_35391;
var statearr_35436_35488 = state_35391__$1;
(statearr_35436_35488[(2)] = true);

(statearr_35436_35488[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (14))){
var state_35391__$1 = state_35391;
var statearr_35437_35489 = state_35391__$1;
(statearr_35437_35489[(2)] = false);

(statearr_35437_35489[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (26))){
var inst_35351 = (state_35391[(11)]);
var inst_35358 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35351);
var state_35391__$1 = state_35391;
var statearr_35438_35490 = state_35391__$1;
(statearr_35438_35490[(2)] = inst_35358);

(statearr_35438_35490[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (16))){
var state_35391__$1 = state_35391;
var statearr_35439_35491 = state_35391__$1;
(statearr_35439_35491[(2)] = true);

(statearr_35439_35491[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (38))){
var inst_35381 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
var statearr_35440_35492 = state_35391__$1;
(statearr_35440_35492[(2)] = inst_35381);

(statearr_35440_35492[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (30))){
var inst_35343 = (state_35391[(13)]);
var inst_35342 = (state_35391[(9)]);
var inst_35351 = (state_35391[(11)]);
var inst_35368 = cljs.core.empty_QMARK_(inst_35342);
var inst_35369 = (inst_35343.cljs$core$IFn$_invoke$arity$1 ? inst_35343.cljs$core$IFn$_invoke$arity$1(inst_35351) : inst_35343.call(null,inst_35351));
var inst_35370 = cljs.core.not(inst_35369);
var inst_35371 = (inst_35368) && (inst_35370);
var state_35391__$1 = state_35391;
var statearr_35441_35493 = state_35391__$1;
(statearr_35441_35493[(2)] = inst_35371);

(statearr_35441_35493[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (10))){
var inst_35293 = (state_35391[(8)]);
var inst_35314 = (state_35391[(2)]);
var inst_35315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35314,cljs.core.cst$kw$solos);
var inst_35316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35314,cljs.core.cst$kw$mutes);
var inst_35317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35314,cljs.core.cst$kw$reads);
var inst_35318 = inst_35293;
var state_35391__$1 = (function (){var statearr_35442 = state_35391;
(statearr_35442[(16)] = inst_35317);

(statearr_35442[(7)] = inst_35318);

(statearr_35442[(17)] = inst_35316);

(statearr_35442[(18)] = inst_35315);

return statearr_35442;
})();
var statearr_35443_35494 = state_35391__$1;
(statearr_35443_35494[(2)] = null);

(statearr_35443_35494[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (18))){
var inst_35333 = (state_35391[(2)]);
var state_35391__$1 = state_35391;
var statearr_35444_35495 = state_35391__$1;
(statearr_35444_35495[(2)] = inst_35333);

(statearr_35444_35495[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (37))){
var state_35391__$1 = state_35391;
var statearr_35445_35496 = state_35391__$1;
(statearr_35445_35496[(2)] = null);

(statearr_35445_35496[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35392 === (8))){
var inst_35293 = (state_35391[(8)]);
var inst_35311 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35293);
var state_35391__$1 = state_35391;
var statearr_35446_35497 = state_35391__$1;
(statearr_35446_35497[(2)] = inst_35311);

(statearr_35446_35497[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___35451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34288__auto__,c__34390__auto___35451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34289__auto__ = null;
var cljs$core$async$mix_$_state_machine__34289__auto____0 = (function (){
var statearr_35447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35447[(0)] = cljs$core$async$mix_$_state_machine__34289__auto__);

(statearr_35447[(1)] = (1));

return statearr_35447;
});
var cljs$core$async$mix_$_state_machine__34289__auto____1 = (function (state_35391){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_35391);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e35448){if((e35448 instanceof Object)){
var ex__34292__auto__ = e35448;
var statearr_35449_35498 = state_35391;
(statearr_35449_35498[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35391);

return cljs.core.cst$kw$recur;
} else {
throw e35448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__35499 = state_35391;
state_35391 = G__35499;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34289__auto__ = function(state_35391){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34289__auto____1.call(this,state_35391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34289__auto____0;
cljs$core$async$mix_$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34289__auto____1;
return cljs$core$async$mix_$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___35451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34392__auto__ = (function (){var statearr_35450 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_35450[(6)] = c__34390__auto___35451);

return statearr_35450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___35451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9541__auto__ = (((p == null))?null:p);
var m__9542__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$4 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9542__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__9542__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9542__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9541__auto__ = (((p == null))?null:p);
var m__9542__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9542__auto__.call(null,p,v,ch));
} else {
var m__9542__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9542__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35501 = arguments.length;
switch (G__35501) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9541__auto__ = (((p == null))?null:p);
var m__9542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__9542__auto__.call(null,p));
} else {
var m__9542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__9542__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9541__auto__ = (((p == null))?null:p);
var m__9542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9541__auto__)]);
if(!((m__9542__auto__ == null))){
return (m__9542__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__9542__auto__.call(null,p,v));
} else {
var m__9542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9542__auto____$1 == null))){
return (m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9542__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__9542__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35505 = arguments.length;
switch (G__35505) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8808__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__8808__auto__)){
return or__8808__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__8808__auto__,mults){
return (function (p1__35503_SHARP_){
if(cljs.core.truth_((p1__35503_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35503_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35503_SHARP_.call(null,topic)))){
return p1__35503_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35503_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__8808__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35506 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35507){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35507 = meta35507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35508,meta35507__$1){
var self__ = this;
var _35508__$1 = this;
return (new cljs.core.async.t_cljs$core$async35506(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35507__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35508){
var self__ = this;
var _35508__$1 = this;
return self__.meta35507;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35506.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35506.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35506.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35506.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35506.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35506.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35506.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta35507], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35506";

cljs.core.async.t_cljs$core$async35506.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async35506");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35506 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35506(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35507){
return (new cljs.core.async.t_cljs$core$async35506(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35507));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35506(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34390__auto___35626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___35626,mults,ensure_mult,p){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___35626,mults,ensure_mult,p){
return (function (state_35580){
var state_val_35581 = (state_35580[(1)]);
if((state_val_35581 === (7))){
var inst_35576 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35582_35627 = state_35580__$1;
(statearr_35582_35627[(2)] = inst_35576);

(statearr_35582_35627[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (20))){
var state_35580__$1 = state_35580;
var statearr_35583_35628 = state_35580__$1;
(statearr_35583_35628[(2)] = null);

(statearr_35583_35628[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (1))){
var state_35580__$1 = state_35580;
var statearr_35584_35629 = state_35580__$1;
(statearr_35584_35629[(2)] = null);

(statearr_35584_35629[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (24))){
var inst_35559 = (state_35580[(7)]);
var inst_35568 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35559);
var state_35580__$1 = state_35580;
var statearr_35585_35630 = state_35580__$1;
(statearr_35585_35630[(2)] = inst_35568);

(statearr_35585_35630[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (4))){
var inst_35511 = (state_35580[(8)]);
var inst_35511__$1 = (state_35580[(2)]);
var inst_35512 = (inst_35511__$1 == null);
var state_35580__$1 = (function (){var statearr_35586 = state_35580;
(statearr_35586[(8)] = inst_35511__$1);

return statearr_35586;
})();
if(cljs.core.truth_(inst_35512)){
var statearr_35587_35631 = state_35580__$1;
(statearr_35587_35631[(1)] = (5));

} else {
var statearr_35588_35632 = state_35580__$1;
(statearr_35588_35632[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (15))){
var inst_35553 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35589_35633 = state_35580__$1;
(statearr_35589_35633[(2)] = inst_35553);

(statearr_35589_35633[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (21))){
var inst_35573 = (state_35580[(2)]);
var state_35580__$1 = (function (){var statearr_35590 = state_35580;
(statearr_35590[(9)] = inst_35573);

return statearr_35590;
})();
var statearr_35591_35634 = state_35580__$1;
(statearr_35591_35634[(2)] = null);

(statearr_35591_35634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (13))){
var inst_35535 = (state_35580[(10)]);
var inst_35537 = cljs.core.chunked_seq_QMARK_(inst_35535);
var state_35580__$1 = state_35580;
if(inst_35537){
var statearr_35592_35635 = state_35580__$1;
(statearr_35592_35635[(1)] = (16));

} else {
var statearr_35593_35636 = state_35580__$1;
(statearr_35593_35636[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (22))){
var inst_35565 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35565)){
var statearr_35594_35637 = state_35580__$1;
(statearr_35594_35637[(1)] = (23));

} else {
var statearr_35595_35638 = state_35580__$1;
(statearr_35595_35638[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (6))){
var inst_35559 = (state_35580[(7)]);
var inst_35511 = (state_35580[(8)]);
var inst_35561 = (state_35580[(11)]);
var inst_35559__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35511) : topic_fn.call(null,inst_35511));
var inst_35560 = cljs.core.deref(mults);
var inst_35561__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35560,inst_35559__$1);
var state_35580__$1 = (function (){var statearr_35596 = state_35580;
(statearr_35596[(7)] = inst_35559__$1);

(statearr_35596[(11)] = inst_35561__$1);

return statearr_35596;
})();
if(cljs.core.truth_(inst_35561__$1)){
var statearr_35597_35639 = state_35580__$1;
(statearr_35597_35639[(1)] = (19));

} else {
var statearr_35598_35640 = state_35580__$1;
(statearr_35598_35640[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (25))){
var inst_35570 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35599_35641 = state_35580__$1;
(statearr_35599_35641[(2)] = inst_35570);

(statearr_35599_35641[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (17))){
var inst_35535 = (state_35580[(10)]);
var inst_35544 = cljs.core.first(inst_35535);
var inst_35545 = cljs.core.async.muxch_STAR_(inst_35544);
var inst_35546 = cljs.core.async.close_BANG_(inst_35545);
var inst_35547 = cljs.core.next(inst_35535);
var inst_35521 = inst_35547;
var inst_35522 = null;
var inst_35523 = (0);
var inst_35524 = (0);
var state_35580__$1 = (function (){var statearr_35600 = state_35580;
(statearr_35600[(12)] = inst_35524);

(statearr_35600[(13)] = inst_35546);

(statearr_35600[(14)] = inst_35521);

(statearr_35600[(15)] = inst_35523);

(statearr_35600[(16)] = inst_35522);

return statearr_35600;
})();
var statearr_35601_35642 = state_35580__$1;
(statearr_35601_35642[(2)] = null);

(statearr_35601_35642[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (3))){
var inst_35578 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35580__$1,inst_35578);
} else {
if((state_val_35581 === (12))){
var inst_35555 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35602_35643 = state_35580__$1;
(statearr_35602_35643[(2)] = inst_35555);

(statearr_35602_35643[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (2))){
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35580__$1,(4),ch);
} else {
if((state_val_35581 === (23))){
var state_35580__$1 = state_35580;
var statearr_35603_35644 = state_35580__$1;
(statearr_35603_35644[(2)] = null);

(statearr_35603_35644[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (19))){
var inst_35511 = (state_35580[(8)]);
var inst_35561 = (state_35580[(11)]);
var inst_35563 = cljs.core.async.muxch_STAR_(inst_35561);
var state_35580__$1 = state_35580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35580__$1,(22),inst_35563,inst_35511);
} else {
if((state_val_35581 === (11))){
var inst_35521 = (state_35580[(14)]);
var inst_35535 = (state_35580[(10)]);
var inst_35535__$1 = cljs.core.seq(inst_35521);
var state_35580__$1 = (function (){var statearr_35604 = state_35580;
(statearr_35604[(10)] = inst_35535__$1);

return statearr_35604;
})();
if(inst_35535__$1){
var statearr_35605_35645 = state_35580__$1;
(statearr_35605_35645[(1)] = (13));

} else {
var statearr_35606_35646 = state_35580__$1;
(statearr_35606_35646[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (9))){
var inst_35557 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35607_35647 = state_35580__$1;
(statearr_35607_35647[(2)] = inst_35557);

(statearr_35607_35647[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (5))){
var inst_35518 = cljs.core.deref(mults);
var inst_35519 = cljs.core.vals(inst_35518);
var inst_35520 = cljs.core.seq(inst_35519);
var inst_35521 = inst_35520;
var inst_35522 = null;
var inst_35523 = (0);
var inst_35524 = (0);
var state_35580__$1 = (function (){var statearr_35608 = state_35580;
(statearr_35608[(12)] = inst_35524);

(statearr_35608[(14)] = inst_35521);

(statearr_35608[(15)] = inst_35523);

(statearr_35608[(16)] = inst_35522);

return statearr_35608;
})();
var statearr_35609_35648 = state_35580__$1;
(statearr_35609_35648[(2)] = null);

(statearr_35609_35648[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (14))){
var state_35580__$1 = state_35580;
var statearr_35613_35649 = state_35580__$1;
(statearr_35613_35649[(2)] = null);

(statearr_35613_35649[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (16))){
var inst_35535 = (state_35580[(10)]);
var inst_35539 = cljs.core.chunk_first(inst_35535);
var inst_35540 = cljs.core.chunk_rest(inst_35535);
var inst_35541 = cljs.core.count(inst_35539);
var inst_35521 = inst_35540;
var inst_35522 = inst_35539;
var inst_35523 = inst_35541;
var inst_35524 = (0);
var state_35580__$1 = (function (){var statearr_35614 = state_35580;
(statearr_35614[(12)] = inst_35524);

(statearr_35614[(14)] = inst_35521);

(statearr_35614[(15)] = inst_35523);

(statearr_35614[(16)] = inst_35522);

return statearr_35614;
})();
var statearr_35615_35650 = state_35580__$1;
(statearr_35615_35650[(2)] = null);

(statearr_35615_35650[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (10))){
var inst_35524 = (state_35580[(12)]);
var inst_35521 = (state_35580[(14)]);
var inst_35523 = (state_35580[(15)]);
var inst_35522 = (state_35580[(16)]);
var inst_35529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35522,inst_35524);
var inst_35530 = cljs.core.async.muxch_STAR_(inst_35529);
var inst_35531 = cljs.core.async.close_BANG_(inst_35530);
var inst_35532 = (inst_35524 + (1));
var tmp35610 = inst_35521;
var tmp35611 = inst_35523;
var tmp35612 = inst_35522;
var inst_35521__$1 = tmp35610;
var inst_35522__$1 = tmp35612;
var inst_35523__$1 = tmp35611;
var inst_35524__$1 = inst_35532;
var state_35580__$1 = (function (){var statearr_35616 = state_35580;
(statearr_35616[(12)] = inst_35524__$1);

(statearr_35616[(17)] = inst_35531);

(statearr_35616[(14)] = inst_35521__$1);

(statearr_35616[(15)] = inst_35523__$1);

(statearr_35616[(16)] = inst_35522__$1);

return statearr_35616;
})();
var statearr_35617_35651 = state_35580__$1;
(statearr_35617_35651[(2)] = null);

(statearr_35617_35651[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (18))){
var inst_35550 = (state_35580[(2)]);
var state_35580__$1 = state_35580;
var statearr_35618_35652 = state_35580__$1;
(statearr_35618_35652[(2)] = inst_35550);

(statearr_35618_35652[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35581 === (8))){
var inst_35524 = (state_35580[(12)]);
var inst_35523 = (state_35580[(15)]);
var inst_35526 = (inst_35524 < inst_35523);
var inst_35527 = inst_35526;
var state_35580__$1 = state_35580;
if(cljs.core.truth_(inst_35527)){
var statearr_35619_35653 = state_35580__$1;
(statearr_35619_35653[(1)] = (10));

} else {
var statearr_35620_35654 = state_35580__$1;
(statearr_35620_35654[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___35626,mults,ensure_mult,p))
;
return ((function (switch__34288__auto__,c__34390__auto___35626,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_35621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35621[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_35621[(1)] = (1));

return statearr_35621;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_35580){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_35580);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e35622){if((e35622 instanceof Object)){
var ex__34292__auto__ = e35622;
var statearr_35623_35655 = state_35580;
(statearr_35623_35655[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35580);

return cljs.core.cst$kw$recur;
} else {
throw e35622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__35656 = state_35580;
state_35580 = G__35656;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_35580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_35580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___35626,mults,ensure_mult,p))
})();
var state__34392__auto__ = (function (){var statearr_35624 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_35624[(6)] = c__34390__auto___35626);

return statearr_35624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___35626,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35658 = arguments.length;
switch (G__35658) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35661 = arguments.length;
switch (G__35661) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35664 = arguments.length;
switch (G__35664) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34390__auto___35731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___35731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___35731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35703){
var state_val_35704 = (state_35703[(1)]);
if((state_val_35704 === (7))){
var state_35703__$1 = state_35703;
var statearr_35705_35732 = state_35703__$1;
(statearr_35705_35732[(2)] = null);

(statearr_35705_35732[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (1))){
var state_35703__$1 = state_35703;
var statearr_35706_35733 = state_35703__$1;
(statearr_35706_35733[(2)] = null);

(statearr_35706_35733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (4))){
var inst_35667 = (state_35703[(7)]);
var inst_35669 = (inst_35667 < cnt);
var state_35703__$1 = state_35703;
if(cljs.core.truth_(inst_35669)){
var statearr_35707_35734 = state_35703__$1;
(statearr_35707_35734[(1)] = (6));

} else {
var statearr_35708_35735 = state_35703__$1;
(statearr_35708_35735[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (15))){
var inst_35699 = (state_35703[(2)]);
var state_35703__$1 = state_35703;
var statearr_35709_35736 = state_35703__$1;
(statearr_35709_35736[(2)] = inst_35699);

(statearr_35709_35736[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (13))){
var inst_35692 = cljs.core.async.close_BANG_(out);
var state_35703__$1 = state_35703;
var statearr_35710_35737 = state_35703__$1;
(statearr_35710_35737[(2)] = inst_35692);

(statearr_35710_35737[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (6))){
var state_35703__$1 = state_35703;
var statearr_35711_35738 = state_35703__$1;
(statearr_35711_35738[(2)] = null);

(statearr_35711_35738[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (3))){
var inst_35701 = (state_35703[(2)]);
var state_35703__$1 = state_35703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35703__$1,inst_35701);
} else {
if((state_val_35704 === (12))){
var inst_35689 = (state_35703[(8)]);
var inst_35689__$1 = (state_35703[(2)]);
var inst_35690 = cljs.core.some(cljs.core.nil_QMARK_,inst_35689__$1);
var state_35703__$1 = (function (){var statearr_35712 = state_35703;
(statearr_35712[(8)] = inst_35689__$1);

return statearr_35712;
})();
if(cljs.core.truth_(inst_35690)){
var statearr_35713_35739 = state_35703__$1;
(statearr_35713_35739[(1)] = (13));

} else {
var statearr_35714_35740 = state_35703__$1;
(statearr_35714_35740[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (2))){
var inst_35666 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35667 = (0);
var state_35703__$1 = (function (){var statearr_35715 = state_35703;
(statearr_35715[(7)] = inst_35667);

(statearr_35715[(9)] = inst_35666);

return statearr_35715;
})();
var statearr_35716_35741 = state_35703__$1;
(statearr_35716_35741[(2)] = null);

(statearr_35716_35741[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (11))){
var inst_35667 = (state_35703[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35703,(10),Object,null,(9));
var inst_35676 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35667) : chs__$1.call(null,inst_35667));
var inst_35677 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35667) : done.call(null,inst_35667));
var inst_35678 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35676,inst_35677);
var state_35703__$1 = state_35703;
var statearr_35717_35742 = state_35703__$1;
(statearr_35717_35742[(2)] = inst_35678);


cljs.core.async.impl.ioc_helpers.process_exception(state_35703__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (9))){
var inst_35667 = (state_35703[(7)]);
var inst_35680 = (state_35703[(2)]);
var inst_35681 = (inst_35667 + (1));
var inst_35667__$1 = inst_35681;
var state_35703__$1 = (function (){var statearr_35718 = state_35703;
(statearr_35718[(7)] = inst_35667__$1);

(statearr_35718[(10)] = inst_35680);

return statearr_35718;
})();
var statearr_35719_35743 = state_35703__$1;
(statearr_35719_35743[(2)] = null);

(statearr_35719_35743[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (5))){
var inst_35687 = (state_35703[(2)]);
var state_35703__$1 = (function (){var statearr_35720 = state_35703;
(statearr_35720[(11)] = inst_35687);

return statearr_35720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35703__$1,(12),dchan);
} else {
if((state_val_35704 === (14))){
var inst_35689 = (state_35703[(8)]);
var inst_35694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35689);
var state_35703__$1 = state_35703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35703__$1,(16),out,inst_35694);
} else {
if((state_val_35704 === (16))){
var inst_35696 = (state_35703[(2)]);
var state_35703__$1 = (function (){var statearr_35721 = state_35703;
(statearr_35721[(12)] = inst_35696);

return statearr_35721;
})();
var statearr_35722_35744 = state_35703__$1;
(statearr_35722_35744[(2)] = null);

(statearr_35722_35744[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (10))){
var inst_35671 = (state_35703[(2)]);
var inst_35672 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35703__$1 = (function (){var statearr_35723 = state_35703;
(statearr_35723[(13)] = inst_35671);

return statearr_35723;
})();
var statearr_35724_35745 = state_35703__$1;
(statearr_35724_35745[(2)] = inst_35672);


cljs.core.async.impl.ioc_helpers.process_exception(state_35703__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_35704 === (8))){
var inst_35685 = (state_35703[(2)]);
var state_35703__$1 = state_35703;
var statearr_35725_35746 = state_35703__$1;
(statearr_35725_35746[(2)] = inst_35685);

(statearr_35725_35746[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___35731,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34288__auto__,c__34390__auto___35731,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_35726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35726[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_35726[(1)] = (1));

return statearr_35726;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_35703){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_35703);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e35727){if((e35727 instanceof Object)){
var ex__34292__auto__ = e35727;
var statearr_35728_35747 = state_35703;
(statearr_35728_35747[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35703);

return cljs.core.cst$kw$recur;
} else {
throw e35727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__35748 = state_35703;
state_35703 = G__35748;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_35703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_35703);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___35731,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34392__auto__ = (function (){var statearr_35729 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_35729[(6)] = c__34390__auto___35731);

return statearr_35729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___35731,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35751 = arguments.length;
switch (G__35751) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34390__auto___35805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___35805,out){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___35805,out){
return (function (state_35783){
var state_val_35784 = (state_35783[(1)]);
if((state_val_35784 === (7))){
var inst_35762 = (state_35783[(7)]);
var inst_35763 = (state_35783[(8)]);
var inst_35762__$1 = (state_35783[(2)]);
var inst_35763__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35762__$1,(0),null);
var inst_35764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35762__$1,(1),null);
var inst_35765 = (inst_35763__$1 == null);
var state_35783__$1 = (function (){var statearr_35785 = state_35783;
(statearr_35785[(7)] = inst_35762__$1);

(statearr_35785[(9)] = inst_35764);

(statearr_35785[(8)] = inst_35763__$1);

return statearr_35785;
})();
if(cljs.core.truth_(inst_35765)){
var statearr_35786_35806 = state_35783__$1;
(statearr_35786_35806[(1)] = (8));

} else {
var statearr_35787_35807 = state_35783__$1;
(statearr_35787_35807[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35784 === (1))){
var inst_35752 = cljs.core.vec(chs);
var inst_35753 = inst_35752;
var state_35783__$1 = (function (){var statearr_35788 = state_35783;
(statearr_35788[(10)] = inst_35753);

return statearr_35788;
})();
var statearr_35789_35808 = state_35783__$1;
(statearr_35789_35808[(2)] = null);

(statearr_35789_35808[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35784 === (4))){
var inst_35753 = (state_35783[(10)]);
var state_35783__$1 = state_35783;
return cljs.core.async.ioc_alts_BANG_(state_35783__$1,(7),inst_35753);
} else {
if((state_val_35784 === (6))){
var inst_35779 = (state_35783[(2)]);
var state_35783__$1 = state_35783;
var statearr_35790_35809 = state_35783__$1;
(statearr_35790_35809[(2)] = inst_35779);

(statearr_35790_35809[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35784 === (3))){
var inst_35781 = (state_35783[(2)]);
var state_35783__$1 = state_35783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35783__$1,inst_35781);
} else {
if((state_val_35784 === (2))){
var inst_35753 = (state_35783[(10)]);
var inst_35755 = cljs.core.count(inst_35753);
var inst_35756 = (inst_35755 > (0));
var state_35783__$1 = state_35783;
if(cljs.core.truth_(inst_35756)){
var statearr_35792_35810 = state_35783__$1;
(statearr_35792_35810[(1)] = (4));

} else {
var statearr_35793_35811 = state_35783__$1;
(statearr_35793_35811[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35784 === (11))){
var inst_35753 = (state_35783[(10)]);
var inst_35772 = (state_35783[(2)]);
var tmp35791 = inst_35753;
var inst_35753__$1 = tmp35791;
var state_35783__$1 = (function (){var statearr_35794 = state_35783;
(statearr_35794[(10)] = inst_35753__$1);

(statearr_35794[(11)] = inst_35772);

return statearr_35794;
})();
var statearr_35795_35812 = state_35783__$1;
(statearr_35795_35812[(2)] = null);

(statearr_35795_35812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35784 === (9))){
var inst_35763 = (state_35783[(8)]);
var state_35783__$1 = state_35783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35783__$1,(11),out,inst_35763);
} else {
if((state_val_35784 === (5))){
var inst_35777 = cljs.core.async.close_BANG_(out);
var state_35783__$1 = state_35783;
var statearr_35796_35813 = state_35783__$1;
(statearr_35796_35813[(2)] = inst_35777);

(statearr_35796_35813[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35784 === (10))){
var inst_35775 = (state_35783[(2)]);
var state_35783__$1 = state_35783;
var statearr_35797_35814 = state_35783__$1;
(statearr_35797_35814[(2)] = inst_35775);

(statearr_35797_35814[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35784 === (8))){
var inst_35762 = (state_35783[(7)]);
var inst_35753 = (state_35783[(10)]);
var inst_35764 = (state_35783[(9)]);
var inst_35763 = (state_35783[(8)]);
var inst_35767 = (function (){var cs = inst_35753;
var vec__35758 = inst_35762;
var v = inst_35763;
var c = inst_35764;
return ((function (cs,vec__35758,v,c,inst_35762,inst_35753,inst_35764,inst_35763,state_val_35784,c__34390__auto___35805,out){
return (function (p1__35749_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35749_SHARP_);
});
;})(cs,vec__35758,v,c,inst_35762,inst_35753,inst_35764,inst_35763,state_val_35784,c__34390__auto___35805,out))
})();
var inst_35768 = cljs.core.filterv(inst_35767,inst_35753);
var inst_35753__$1 = inst_35768;
var state_35783__$1 = (function (){var statearr_35798 = state_35783;
(statearr_35798[(10)] = inst_35753__$1);

return statearr_35798;
})();
var statearr_35799_35815 = state_35783__$1;
(statearr_35799_35815[(2)] = null);

(statearr_35799_35815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___35805,out))
;
return ((function (switch__34288__auto__,c__34390__auto___35805,out){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_35800 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35800[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_35800[(1)] = (1));

return statearr_35800;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_35783){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_35783);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e35801){if((e35801 instanceof Object)){
var ex__34292__auto__ = e35801;
var statearr_35802_35816 = state_35783;
(statearr_35802_35816[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35783);

return cljs.core.cst$kw$recur;
} else {
throw e35801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__35817 = state_35783;
state_35783 = G__35817;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_35783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_35783);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___35805,out))
})();
var state__34392__auto__ = (function (){var statearr_35803 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_35803[(6)] = c__34390__auto___35805);

return statearr_35803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___35805,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35819 = arguments.length;
switch (G__35819) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34390__auto___35864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___35864,out){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___35864,out){
return (function (state_35843){
var state_val_35844 = (state_35843[(1)]);
if((state_val_35844 === (7))){
var inst_35825 = (state_35843[(7)]);
var inst_35825__$1 = (state_35843[(2)]);
var inst_35826 = (inst_35825__$1 == null);
var inst_35827 = cljs.core.not(inst_35826);
var state_35843__$1 = (function (){var statearr_35845 = state_35843;
(statearr_35845[(7)] = inst_35825__$1);

return statearr_35845;
})();
if(inst_35827){
var statearr_35846_35865 = state_35843__$1;
(statearr_35846_35865[(1)] = (8));

} else {
var statearr_35847_35866 = state_35843__$1;
(statearr_35847_35866[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35844 === (1))){
var inst_35820 = (0);
var state_35843__$1 = (function (){var statearr_35848 = state_35843;
(statearr_35848[(8)] = inst_35820);

return statearr_35848;
})();
var statearr_35849_35867 = state_35843__$1;
(statearr_35849_35867[(2)] = null);

(statearr_35849_35867[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35844 === (4))){
var state_35843__$1 = state_35843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35843__$1,(7),ch);
} else {
if((state_val_35844 === (6))){
var inst_35838 = (state_35843[(2)]);
var state_35843__$1 = state_35843;
var statearr_35850_35868 = state_35843__$1;
(statearr_35850_35868[(2)] = inst_35838);

(statearr_35850_35868[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35844 === (3))){
var inst_35840 = (state_35843[(2)]);
var inst_35841 = cljs.core.async.close_BANG_(out);
var state_35843__$1 = (function (){var statearr_35851 = state_35843;
(statearr_35851[(9)] = inst_35840);

return statearr_35851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35843__$1,inst_35841);
} else {
if((state_val_35844 === (2))){
var inst_35820 = (state_35843[(8)]);
var inst_35822 = (inst_35820 < n);
var state_35843__$1 = state_35843;
if(cljs.core.truth_(inst_35822)){
var statearr_35852_35869 = state_35843__$1;
(statearr_35852_35869[(1)] = (4));

} else {
var statearr_35853_35870 = state_35843__$1;
(statearr_35853_35870[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35844 === (11))){
var inst_35820 = (state_35843[(8)]);
var inst_35830 = (state_35843[(2)]);
var inst_35831 = (inst_35820 + (1));
var inst_35820__$1 = inst_35831;
var state_35843__$1 = (function (){var statearr_35854 = state_35843;
(statearr_35854[(10)] = inst_35830);

(statearr_35854[(8)] = inst_35820__$1);

return statearr_35854;
})();
var statearr_35855_35871 = state_35843__$1;
(statearr_35855_35871[(2)] = null);

(statearr_35855_35871[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35844 === (9))){
var state_35843__$1 = state_35843;
var statearr_35856_35872 = state_35843__$1;
(statearr_35856_35872[(2)] = null);

(statearr_35856_35872[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35844 === (5))){
var state_35843__$1 = state_35843;
var statearr_35857_35873 = state_35843__$1;
(statearr_35857_35873[(2)] = null);

(statearr_35857_35873[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35844 === (10))){
var inst_35835 = (state_35843[(2)]);
var state_35843__$1 = state_35843;
var statearr_35858_35874 = state_35843__$1;
(statearr_35858_35874[(2)] = inst_35835);

(statearr_35858_35874[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35844 === (8))){
var inst_35825 = (state_35843[(7)]);
var state_35843__$1 = state_35843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35843__$1,(11),out,inst_35825);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___35864,out))
;
return ((function (switch__34288__auto__,c__34390__auto___35864,out){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_35859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35859[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_35859[(1)] = (1));

return statearr_35859;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_35843){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_35843);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e35860){if((e35860 instanceof Object)){
var ex__34292__auto__ = e35860;
var statearr_35861_35875 = state_35843;
(statearr_35861_35875[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35843);

return cljs.core.cst$kw$recur;
} else {
throw e35860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__35876 = state_35843;
state_35843 = G__35876;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_35843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_35843);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___35864,out))
})();
var state__34392__auto__ = (function (){var statearr_35862 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_35862[(6)] = c__34390__auto___35864);

return statearr_35862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___35864,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35878 = (function (f,ch,meta35879){
this.f = f;
this.ch = ch;
this.meta35879 = meta35879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35880,meta35879__$1){
var self__ = this;
var _35880__$1 = this;
return (new cljs.core.async.t_cljs$core$async35878(self__.f,self__.ch,meta35879__$1));
});

cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35880){
var self__ = this;
var _35880__$1 = this;
return self__.meta35879;
});

cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35881 = (function (f,ch,meta35879,_,fn1,meta35882){
this.f = f;
this.ch = ch;
this.meta35879 = meta35879;
this._ = _;
this.fn1 = fn1;
this.meta35882 = meta35882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35883,meta35882__$1){
var self__ = this;
var _35883__$1 = this;
return (new cljs.core.async.t_cljs$core$async35881(self__.f,self__.ch,self__.meta35879,self__._,self__.fn1,meta35882__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35883){
var self__ = this;
var _35883__$1 = this;
return self__.meta35882;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35877_SHARP_){
var G__35884 = (((p1__35877_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35877_SHARP_) : self__.f.call(null,p1__35877_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35884) : f1.call(null,G__35884));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35881.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta35879,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async35878], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta35882], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35881";

cljs.core.async.t_cljs$core$async35881.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async35881");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35881 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35881(f__$1,ch__$1,meta35879__$1,___$2,fn1__$1,meta35882){
return (new cljs.core.async.t_cljs$core$async35881(f__$1,ch__$1,meta35879__$1,___$2,fn1__$1,meta35882));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35881(self__.f,self__.ch,self__.meta35879,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8796__auto__ = ret;
if(cljs.core.truth_(and__8796__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__8796__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35885 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35885) : self__.f.call(null,G__35885));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35878.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta35879], null);
});

cljs.core.async.t_cljs$core$async35878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35878";

cljs.core.async.t_cljs$core$async35878.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async35878");
});

cljs.core.async.__GT_t_cljs$core$async35878 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35878(f__$1,ch__$1,meta35879){
return (new cljs.core.async.t_cljs$core$async35878(f__$1,ch__$1,meta35879));
});

}

return (new cljs.core.async.t_cljs$core$async35878(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35886 = (function (f,ch,meta35887){
this.f = f;
this.ch = ch;
this.meta35887 = meta35887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35888,meta35887__$1){
var self__ = this;
var _35888__$1 = this;
return (new cljs.core.async.t_cljs$core$async35886(self__.f,self__.ch,meta35887__$1));
});

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35888){
var self__ = this;
var _35888__$1 = this;
return self__.meta35887;
});

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async35886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta35887], null);
});

cljs.core.async.t_cljs$core$async35886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35886";

cljs.core.async.t_cljs$core$async35886.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async35886");
});

cljs.core.async.__GT_t_cljs$core$async35886 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35886(f__$1,ch__$1,meta35887){
return (new cljs.core.async.t_cljs$core$async35886(f__$1,ch__$1,meta35887));
});

}

return (new cljs.core.async.t_cljs$core$async35886(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35889 = (function (p,ch,meta35890){
this.p = p;
this.ch = ch;
this.meta35890 = meta35890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35891,meta35890__$1){
var self__ = this;
var _35891__$1 = this;
return (new cljs.core.async.t_cljs$core$async35889(self__.p,self__.ch,meta35890__$1));
});

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35891){
var self__ = this;
var _35891__$1 = this;
return self__.meta35890;
});

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta35890], null);
});

cljs.core.async.t_cljs$core$async35889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35889";

cljs.core.async.t_cljs$core$async35889.cljs$lang$ctorPrWriter = (function (this__9479__auto__,writer__9480__auto__,opt__9481__auto__){
return cljs.core._write(writer__9480__auto__,"cljs.core.async/t_cljs$core$async35889");
});

cljs.core.async.__GT_t_cljs$core$async35889 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35889(p__$1,ch__$1,meta35890){
return (new cljs.core.async.t_cljs$core$async35889(p__$1,ch__$1,meta35890));
});

}

return (new cljs.core.async.t_cljs$core$async35889(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35893 = arguments.length;
switch (G__35893) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34390__auto___35933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___35933,out){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___35933,out){
return (function (state_35914){
var state_val_35915 = (state_35914[(1)]);
if((state_val_35915 === (7))){
var inst_35910 = (state_35914[(2)]);
var state_35914__$1 = state_35914;
var statearr_35916_35934 = state_35914__$1;
(statearr_35916_35934[(2)] = inst_35910);

(statearr_35916_35934[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35915 === (1))){
var state_35914__$1 = state_35914;
var statearr_35917_35935 = state_35914__$1;
(statearr_35917_35935[(2)] = null);

(statearr_35917_35935[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35915 === (4))){
var inst_35896 = (state_35914[(7)]);
var inst_35896__$1 = (state_35914[(2)]);
var inst_35897 = (inst_35896__$1 == null);
var state_35914__$1 = (function (){var statearr_35918 = state_35914;
(statearr_35918[(7)] = inst_35896__$1);

return statearr_35918;
})();
if(cljs.core.truth_(inst_35897)){
var statearr_35919_35936 = state_35914__$1;
(statearr_35919_35936[(1)] = (5));

} else {
var statearr_35920_35937 = state_35914__$1;
(statearr_35920_35937[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35915 === (6))){
var inst_35896 = (state_35914[(7)]);
var inst_35901 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35896) : p.call(null,inst_35896));
var state_35914__$1 = state_35914;
if(cljs.core.truth_(inst_35901)){
var statearr_35921_35938 = state_35914__$1;
(statearr_35921_35938[(1)] = (8));

} else {
var statearr_35922_35939 = state_35914__$1;
(statearr_35922_35939[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35915 === (3))){
var inst_35912 = (state_35914[(2)]);
var state_35914__$1 = state_35914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35914__$1,inst_35912);
} else {
if((state_val_35915 === (2))){
var state_35914__$1 = state_35914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35914__$1,(4),ch);
} else {
if((state_val_35915 === (11))){
var inst_35904 = (state_35914[(2)]);
var state_35914__$1 = state_35914;
var statearr_35923_35940 = state_35914__$1;
(statearr_35923_35940[(2)] = inst_35904);

(statearr_35923_35940[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35915 === (9))){
var state_35914__$1 = state_35914;
var statearr_35924_35941 = state_35914__$1;
(statearr_35924_35941[(2)] = null);

(statearr_35924_35941[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35915 === (5))){
var inst_35899 = cljs.core.async.close_BANG_(out);
var state_35914__$1 = state_35914;
var statearr_35925_35942 = state_35914__$1;
(statearr_35925_35942[(2)] = inst_35899);

(statearr_35925_35942[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35915 === (10))){
var inst_35907 = (state_35914[(2)]);
var state_35914__$1 = (function (){var statearr_35926 = state_35914;
(statearr_35926[(8)] = inst_35907);

return statearr_35926;
})();
var statearr_35927_35943 = state_35914__$1;
(statearr_35927_35943[(2)] = null);

(statearr_35927_35943[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35915 === (8))){
var inst_35896 = (state_35914[(7)]);
var state_35914__$1 = state_35914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35914__$1,(11),out,inst_35896);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___35933,out))
;
return ((function (switch__34288__auto__,c__34390__auto___35933,out){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_35928 = [null,null,null,null,null,null,null,null,null];
(statearr_35928[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_35928[(1)] = (1));

return statearr_35928;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_35914){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_35914);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e35929){if((e35929 instanceof Object)){
var ex__34292__auto__ = e35929;
var statearr_35930_35944 = state_35914;
(statearr_35930_35944[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35914);

return cljs.core.cst$kw$recur;
} else {
throw e35929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__35945 = state_35914;
state_35914 = G__35945;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_35914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_35914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___35933,out))
})();
var state__34392__auto__ = (function (){var statearr_35931 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_35931[(6)] = c__34390__auto___35933);

return statearr_35931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___35933,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35947 = arguments.length;
switch (G__35947) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto__){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto__){
return (function (state_36010){
var state_val_36011 = (state_36010[(1)]);
if((state_val_36011 === (7))){
var inst_36006 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36012_36050 = state_36010__$1;
(statearr_36012_36050[(2)] = inst_36006);

(statearr_36012_36050[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (20))){
var inst_35976 = (state_36010[(7)]);
var inst_35987 = (state_36010[(2)]);
var inst_35988 = cljs.core.next(inst_35976);
var inst_35962 = inst_35988;
var inst_35963 = null;
var inst_35964 = (0);
var inst_35965 = (0);
var state_36010__$1 = (function (){var statearr_36013 = state_36010;
(statearr_36013[(8)] = inst_35964);

(statearr_36013[(9)] = inst_35963);

(statearr_36013[(10)] = inst_35965);

(statearr_36013[(11)] = inst_35987);

(statearr_36013[(12)] = inst_35962);

return statearr_36013;
})();
var statearr_36014_36051 = state_36010__$1;
(statearr_36014_36051[(2)] = null);

(statearr_36014_36051[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (1))){
var state_36010__$1 = state_36010;
var statearr_36015_36052 = state_36010__$1;
(statearr_36015_36052[(2)] = null);

(statearr_36015_36052[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (4))){
var inst_35951 = (state_36010[(13)]);
var inst_35951__$1 = (state_36010[(2)]);
var inst_35952 = (inst_35951__$1 == null);
var state_36010__$1 = (function (){var statearr_36016 = state_36010;
(statearr_36016[(13)] = inst_35951__$1);

return statearr_36016;
})();
if(cljs.core.truth_(inst_35952)){
var statearr_36017_36053 = state_36010__$1;
(statearr_36017_36053[(1)] = (5));

} else {
var statearr_36018_36054 = state_36010__$1;
(statearr_36018_36054[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (15))){
var state_36010__$1 = state_36010;
var statearr_36022_36055 = state_36010__$1;
(statearr_36022_36055[(2)] = null);

(statearr_36022_36055[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (21))){
var state_36010__$1 = state_36010;
var statearr_36023_36056 = state_36010__$1;
(statearr_36023_36056[(2)] = null);

(statearr_36023_36056[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (13))){
var inst_35964 = (state_36010[(8)]);
var inst_35963 = (state_36010[(9)]);
var inst_35965 = (state_36010[(10)]);
var inst_35962 = (state_36010[(12)]);
var inst_35972 = (state_36010[(2)]);
var inst_35973 = (inst_35965 + (1));
var tmp36019 = inst_35964;
var tmp36020 = inst_35963;
var tmp36021 = inst_35962;
var inst_35962__$1 = tmp36021;
var inst_35963__$1 = tmp36020;
var inst_35964__$1 = tmp36019;
var inst_35965__$1 = inst_35973;
var state_36010__$1 = (function (){var statearr_36024 = state_36010;
(statearr_36024[(8)] = inst_35964__$1);

(statearr_36024[(9)] = inst_35963__$1);

(statearr_36024[(14)] = inst_35972);

(statearr_36024[(10)] = inst_35965__$1);

(statearr_36024[(12)] = inst_35962__$1);

return statearr_36024;
})();
var statearr_36025_36057 = state_36010__$1;
(statearr_36025_36057[(2)] = null);

(statearr_36025_36057[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (22))){
var state_36010__$1 = state_36010;
var statearr_36026_36058 = state_36010__$1;
(statearr_36026_36058[(2)] = null);

(statearr_36026_36058[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (6))){
var inst_35951 = (state_36010[(13)]);
var inst_35960 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35951) : f.call(null,inst_35951));
var inst_35961 = cljs.core.seq(inst_35960);
var inst_35962 = inst_35961;
var inst_35963 = null;
var inst_35964 = (0);
var inst_35965 = (0);
var state_36010__$1 = (function (){var statearr_36027 = state_36010;
(statearr_36027[(8)] = inst_35964);

(statearr_36027[(9)] = inst_35963);

(statearr_36027[(10)] = inst_35965);

(statearr_36027[(12)] = inst_35962);

return statearr_36027;
})();
var statearr_36028_36059 = state_36010__$1;
(statearr_36028_36059[(2)] = null);

(statearr_36028_36059[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (17))){
var inst_35976 = (state_36010[(7)]);
var inst_35980 = cljs.core.chunk_first(inst_35976);
var inst_35981 = cljs.core.chunk_rest(inst_35976);
var inst_35982 = cljs.core.count(inst_35980);
var inst_35962 = inst_35981;
var inst_35963 = inst_35980;
var inst_35964 = inst_35982;
var inst_35965 = (0);
var state_36010__$1 = (function (){var statearr_36029 = state_36010;
(statearr_36029[(8)] = inst_35964);

(statearr_36029[(9)] = inst_35963);

(statearr_36029[(10)] = inst_35965);

(statearr_36029[(12)] = inst_35962);

return statearr_36029;
})();
var statearr_36030_36060 = state_36010__$1;
(statearr_36030_36060[(2)] = null);

(statearr_36030_36060[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (3))){
var inst_36008 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36010__$1,inst_36008);
} else {
if((state_val_36011 === (12))){
var inst_35996 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36031_36061 = state_36010__$1;
(statearr_36031_36061[(2)] = inst_35996);

(statearr_36031_36061[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (2))){
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36010__$1,(4),in$);
} else {
if((state_val_36011 === (23))){
var inst_36004 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36032_36062 = state_36010__$1;
(statearr_36032_36062[(2)] = inst_36004);

(statearr_36032_36062[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (19))){
var inst_35991 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36033_36063 = state_36010__$1;
(statearr_36033_36063[(2)] = inst_35991);

(statearr_36033_36063[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (11))){
var inst_35976 = (state_36010[(7)]);
var inst_35962 = (state_36010[(12)]);
var inst_35976__$1 = cljs.core.seq(inst_35962);
var state_36010__$1 = (function (){var statearr_36034 = state_36010;
(statearr_36034[(7)] = inst_35976__$1);

return statearr_36034;
})();
if(inst_35976__$1){
var statearr_36035_36064 = state_36010__$1;
(statearr_36035_36064[(1)] = (14));

} else {
var statearr_36036_36065 = state_36010__$1;
(statearr_36036_36065[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (9))){
var inst_35998 = (state_36010[(2)]);
var inst_35999 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36010__$1 = (function (){var statearr_36037 = state_36010;
(statearr_36037[(15)] = inst_35998);

return statearr_36037;
})();
if(cljs.core.truth_(inst_35999)){
var statearr_36038_36066 = state_36010__$1;
(statearr_36038_36066[(1)] = (21));

} else {
var statearr_36039_36067 = state_36010__$1;
(statearr_36039_36067[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (5))){
var inst_35954 = cljs.core.async.close_BANG_(out);
var state_36010__$1 = state_36010;
var statearr_36040_36068 = state_36010__$1;
(statearr_36040_36068[(2)] = inst_35954);

(statearr_36040_36068[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (14))){
var inst_35976 = (state_36010[(7)]);
var inst_35978 = cljs.core.chunked_seq_QMARK_(inst_35976);
var state_36010__$1 = state_36010;
if(inst_35978){
var statearr_36041_36069 = state_36010__$1;
(statearr_36041_36069[(1)] = (17));

} else {
var statearr_36042_36070 = state_36010__$1;
(statearr_36042_36070[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (16))){
var inst_35994 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36043_36071 = state_36010__$1;
(statearr_36043_36071[(2)] = inst_35994);

(statearr_36043_36071[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36011 === (10))){
var inst_35963 = (state_36010[(9)]);
var inst_35965 = (state_36010[(10)]);
var inst_35970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35963,inst_35965);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36010__$1,(13),out,inst_35970);
} else {
if((state_val_36011 === (18))){
var inst_35976 = (state_36010[(7)]);
var inst_35985 = cljs.core.first(inst_35976);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36010__$1,(20),out,inst_35985);
} else {
if((state_val_36011 === (8))){
var inst_35964 = (state_36010[(8)]);
var inst_35965 = (state_36010[(10)]);
var inst_35967 = (inst_35965 < inst_35964);
var inst_35968 = inst_35967;
var state_36010__$1 = state_36010;
if(cljs.core.truth_(inst_35968)){
var statearr_36044_36072 = state_36010__$1;
(statearr_36044_36072[(1)] = (10));

} else {
var statearr_36045_36073 = state_36010__$1;
(statearr_36045_36073[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto__))
;
return ((function (switch__34288__auto__,c__34390__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34289__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34289__auto____0 = (function (){
var statearr_36046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36046[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34289__auto__);

(statearr_36046[(1)] = (1));

return statearr_36046;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34289__auto____1 = (function (state_36010){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_36010);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e36047){if((e36047 instanceof Object)){
var ex__34292__auto__ = e36047;
var statearr_36048_36074 = state_36010;
(statearr_36048_36074[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36010);

return cljs.core.cst$kw$recur;
} else {
throw e36047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__36075 = state_36010;
state_36010 = G__36075;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34289__auto__ = function(state_36010){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34289__auto____1.call(this,state_36010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34289__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34289__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto__))
})();
var state__34392__auto__ = (function (){var statearr_36049 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_36049[(6)] = c__34390__auto__);

return statearr_36049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto__))
);

return c__34390__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36077 = arguments.length;
switch (G__36077) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36080 = arguments.length;
switch (G__36080) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36083 = arguments.length;
switch (G__36083) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34390__auto___36130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___36130,out){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___36130,out){
return (function (state_36107){
var state_val_36108 = (state_36107[(1)]);
if((state_val_36108 === (7))){
var inst_36102 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36109_36131 = state_36107__$1;
(statearr_36109_36131[(2)] = inst_36102);

(statearr_36109_36131[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36108 === (1))){
var inst_36084 = null;
var state_36107__$1 = (function (){var statearr_36110 = state_36107;
(statearr_36110[(7)] = inst_36084);

return statearr_36110;
})();
var statearr_36111_36132 = state_36107__$1;
(statearr_36111_36132[(2)] = null);

(statearr_36111_36132[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36108 === (4))){
var inst_36087 = (state_36107[(8)]);
var inst_36087__$1 = (state_36107[(2)]);
var inst_36088 = (inst_36087__$1 == null);
var inst_36089 = cljs.core.not(inst_36088);
var state_36107__$1 = (function (){var statearr_36112 = state_36107;
(statearr_36112[(8)] = inst_36087__$1);

return statearr_36112;
})();
if(inst_36089){
var statearr_36113_36133 = state_36107__$1;
(statearr_36113_36133[(1)] = (5));

} else {
var statearr_36114_36134 = state_36107__$1;
(statearr_36114_36134[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36108 === (6))){
var state_36107__$1 = state_36107;
var statearr_36115_36135 = state_36107__$1;
(statearr_36115_36135[(2)] = null);

(statearr_36115_36135[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36108 === (3))){
var inst_36104 = (state_36107[(2)]);
var inst_36105 = cljs.core.async.close_BANG_(out);
var state_36107__$1 = (function (){var statearr_36116 = state_36107;
(statearr_36116[(9)] = inst_36104);

return statearr_36116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36107__$1,inst_36105);
} else {
if((state_val_36108 === (2))){
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36107__$1,(4),ch);
} else {
if((state_val_36108 === (11))){
var inst_36087 = (state_36107[(8)]);
var inst_36096 = (state_36107[(2)]);
var inst_36084 = inst_36087;
var state_36107__$1 = (function (){var statearr_36117 = state_36107;
(statearr_36117[(7)] = inst_36084);

(statearr_36117[(10)] = inst_36096);

return statearr_36117;
})();
var statearr_36118_36136 = state_36107__$1;
(statearr_36118_36136[(2)] = null);

(statearr_36118_36136[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36108 === (9))){
var inst_36087 = (state_36107[(8)]);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36107__$1,(11),out,inst_36087);
} else {
if((state_val_36108 === (5))){
var inst_36084 = (state_36107[(7)]);
var inst_36087 = (state_36107[(8)]);
var inst_36091 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36087,inst_36084);
var state_36107__$1 = state_36107;
if(inst_36091){
var statearr_36120_36137 = state_36107__$1;
(statearr_36120_36137[(1)] = (8));

} else {
var statearr_36121_36138 = state_36107__$1;
(statearr_36121_36138[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36108 === (10))){
var inst_36099 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36122_36139 = state_36107__$1;
(statearr_36122_36139[(2)] = inst_36099);

(statearr_36122_36139[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36108 === (8))){
var inst_36084 = (state_36107[(7)]);
var tmp36119 = inst_36084;
var inst_36084__$1 = tmp36119;
var state_36107__$1 = (function (){var statearr_36123 = state_36107;
(statearr_36123[(7)] = inst_36084__$1);

return statearr_36123;
})();
var statearr_36124_36140 = state_36107__$1;
(statearr_36124_36140[(2)] = null);

(statearr_36124_36140[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___36130,out))
;
return ((function (switch__34288__auto__,c__34390__auto___36130,out){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_36125 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_36107){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_36107);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e36126){if((e36126 instanceof Object)){
var ex__34292__auto__ = e36126;
var statearr_36127_36141 = state_36107;
(statearr_36127_36141[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36107);

return cljs.core.cst$kw$recur;
} else {
throw e36126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__36142 = state_36107;
state_36107 = G__36142;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_36107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_36107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___36130,out))
})();
var state__34392__auto__ = (function (){var statearr_36128 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_36128[(6)] = c__34390__auto___36130);

return statearr_36128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___36130,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36144 = arguments.length;
switch (G__36144) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34390__auto___36210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___36210,out){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___36210,out){
return (function (state_36182){
var state_val_36183 = (state_36182[(1)]);
if((state_val_36183 === (7))){
var inst_36178 = (state_36182[(2)]);
var state_36182__$1 = state_36182;
var statearr_36184_36211 = state_36182__$1;
(statearr_36184_36211[(2)] = inst_36178);

(statearr_36184_36211[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (1))){
var inst_36145 = (new Array(n));
var inst_36146 = inst_36145;
var inst_36147 = (0);
var state_36182__$1 = (function (){var statearr_36185 = state_36182;
(statearr_36185[(7)] = inst_36147);

(statearr_36185[(8)] = inst_36146);

return statearr_36185;
})();
var statearr_36186_36212 = state_36182__$1;
(statearr_36186_36212[(2)] = null);

(statearr_36186_36212[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (4))){
var inst_36150 = (state_36182[(9)]);
var inst_36150__$1 = (state_36182[(2)]);
var inst_36151 = (inst_36150__$1 == null);
var inst_36152 = cljs.core.not(inst_36151);
var state_36182__$1 = (function (){var statearr_36187 = state_36182;
(statearr_36187[(9)] = inst_36150__$1);

return statearr_36187;
})();
if(inst_36152){
var statearr_36188_36213 = state_36182__$1;
(statearr_36188_36213[(1)] = (5));

} else {
var statearr_36189_36214 = state_36182__$1;
(statearr_36189_36214[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (15))){
var inst_36172 = (state_36182[(2)]);
var state_36182__$1 = state_36182;
var statearr_36190_36215 = state_36182__$1;
(statearr_36190_36215[(2)] = inst_36172);

(statearr_36190_36215[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (13))){
var state_36182__$1 = state_36182;
var statearr_36191_36216 = state_36182__$1;
(statearr_36191_36216[(2)] = null);

(statearr_36191_36216[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (6))){
var inst_36147 = (state_36182[(7)]);
var inst_36168 = (inst_36147 > (0));
var state_36182__$1 = state_36182;
if(cljs.core.truth_(inst_36168)){
var statearr_36192_36217 = state_36182__$1;
(statearr_36192_36217[(1)] = (12));

} else {
var statearr_36193_36218 = state_36182__$1;
(statearr_36193_36218[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (3))){
var inst_36180 = (state_36182[(2)]);
var state_36182__$1 = state_36182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36182__$1,inst_36180);
} else {
if((state_val_36183 === (12))){
var inst_36146 = (state_36182[(8)]);
var inst_36170 = cljs.core.vec(inst_36146);
var state_36182__$1 = state_36182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36182__$1,(15),out,inst_36170);
} else {
if((state_val_36183 === (2))){
var state_36182__$1 = state_36182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36182__$1,(4),ch);
} else {
if((state_val_36183 === (11))){
var inst_36162 = (state_36182[(2)]);
var inst_36163 = (new Array(n));
var inst_36146 = inst_36163;
var inst_36147 = (0);
var state_36182__$1 = (function (){var statearr_36194 = state_36182;
(statearr_36194[(7)] = inst_36147);

(statearr_36194[(8)] = inst_36146);

(statearr_36194[(10)] = inst_36162);

return statearr_36194;
})();
var statearr_36195_36219 = state_36182__$1;
(statearr_36195_36219[(2)] = null);

(statearr_36195_36219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (9))){
var inst_36146 = (state_36182[(8)]);
var inst_36160 = cljs.core.vec(inst_36146);
var state_36182__$1 = state_36182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36182__$1,(11),out,inst_36160);
} else {
if((state_val_36183 === (5))){
var inst_36147 = (state_36182[(7)]);
var inst_36146 = (state_36182[(8)]);
var inst_36150 = (state_36182[(9)]);
var inst_36155 = (state_36182[(11)]);
var inst_36154 = (inst_36146[inst_36147] = inst_36150);
var inst_36155__$1 = (inst_36147 + (1));
var inst_36156 = (inst_36155__$1 < n);
var state_36182__$1 = (function (){var statearr_36196 = state_36182;
(statearr_36196[(11)] = inst_36155__$1);

(statearr_36196[(12)] = inst_36154);

return statearr_36196;
})();
if(cljs.core.truth_(inst_36156)){
var statearr_36197_36220 = state_36182__$1;
(statearr_36197_36220[(1)] = (8));

} else {
var statearr_36198_36221 = state_36182__$1;
(statearr_36198_36221[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (14))){
var inst_36175 = (state_36182[(2)]);
var inst_36176 = cljs.core.async.close_BANG_(out);
var state_36182__$1 = (function (){var statearr_36200 = state_36182;
(statearr_36200[(13)] = inst_36175);

return statearr_36200;
})();
var statearr_36201_36222 = state_36182__$1;
(statearr_36201_36222[(2)] = inst_36176);

(statearr_36201_36222[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (10))){
var inst_36166 = (state_36182[(2)]);
var state_36182__$1 = state_36182;
var statearr_36202_36223 = state_36182__$1;
(statearr_36202_36223[(2)] = inst_36166);

(statearr_36202_36223[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36183 === (8))){
var inst_36146 = (state_36182[(8)]);
var inst_36155 = (state_36182[(11)]);
var tmp36199 = inst_36146;
var inst_36146__$1 = tmp36199;
var inst_36147 = inst_36155;
var state_36182__$1 = (function (){var statearr_36203 = state_36182;
(statearr_36203[(7)] = inst_36147);

(statearr_36203[(8)] = inst_36146__$1);

return statearr_36203;
})();
var statearr_36204_36224 = state_36182__$1;
(statearr_36204_36224[(2)] = null);

(statearr_36204_36224[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___36210,out))
;
return ((function (switch__34288__auto__,c__34390__auto___36210,out){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_36205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36205[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_36205[(1)] = (1));

return statearr_36205;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_36182){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_36182);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e36206){if((e36206 instanceof Object)){
var ex__34292__auto__ = e36206;
var statearr_36207_36225 = state_36182;
(statearr_36207_36225[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36182);

return cljs.core.cst$kw$recur;
} else {
throw e36206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__36226 = state_36182;
state_36182 = G__36226;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_36182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_36182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___36210,out))
})();
var state__34392__auto__ = (function (){var statearr_36208 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_36208[(6)] = c__34390__auto___36210);

return statearr_36208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___36210,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36228 = arguments.length;
switch (G__36228) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34390__auto___36298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__34390__auto___36298,out){
return (function (){
var f__34391__auto__ = (function (){var switch__34288__auto__ = ((function (c__34390__auto___36298,out){
return (function (state_36270){
var state_val_36271 = (state_36270[(1)]);
if((state_val_36271 === (7))){
var inst_36266 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36272_36299 = state_36270__$1;
(statearr_36272_36299[(2)] = inst_36266);

(statearr_36272_36299[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (1))){
var inst_36229 = [];
var inst_36230 = inst_36229;
var inst_36231 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_36270__$1 = (function (){var statearr_36273 = state_36270;
(statearr_36273[(7)] = inst_36231);

(statearr_36273[(8)] = inst_36230);

return statearr_36273;
})();
var statearr_36274_36300 = state_36270__$1;
(statearr_36274_36300[(2)] = null);

(statearr_36274_36300[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (4))){
var inst_36234 = (state_36270[(9)]);
var inst_36234__$1 = (state_36270[(2)]);
var inst_36235 = (inst_36234__$1 == null);
var inst_36236 = cljs.core.not(inst_36235);
var state_36270__$1 = (function (){var statearr_36275 = state_36270;
(statearr_36275[(9)] = inst_36234__$1);

return statearr_36275;
})();
if(inst_36236){
var statearr_36276_36301 = state_36270__$1;
(statearr_36276_36301[(1)] = (5));

} else {
var statearr_36277_36302 = state_36270__$1;
(statearr_36277_36302[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (15))){
var inst_36260 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36278_36303 = state_36270__$1;
(statearr_36278_36303[(2)] = inst_36260);

(statearr_36278_36303[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (13))){
var state_36270__$1 = state_36270;
var statearr_36279_36304 = state_36270__$1;
(statearr_36279_36304[(2)] = null);

(statearr_36279_36304[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (6))){
var inst_36230 = (state_36270[(8)]);
var inst_36255 = inst_36230.length;
var inst_36256 = (inst_36255 > (0));
var state_36270__$1 = state_36270;
if(cljs.core.truth_(inst_36256)){
var statearr_36280_36305 = state_36270__$1;
(statearr_36280_36305[(1)] = (12));

} else {
var statearr_36281_36306 = state_36270__$1;
(statearr_36281_36306[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (3))){
var inst_36268 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36270__$1,inst_36268);
} else {
if((state_val_36271 === (12))){
var inst_36230 = (state_36270[(8)]);
var inst_36258 = cljs.core.vec(inst_36230);
var state_36270__$1 = state_36270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36270__$1,(15),out,inst_36258);
} else {
if((state_val_36271 === (2))){
var state_36270__$1 = state_36270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36270__$1,(4),ch);
} else {
if((state_val_36271 === (11))){
var inst_36234 = (state_36270[(9)]);
var inst_36238 = (state_36270[(10)]);
var inst_36248 = (state_36270[(2)]);
var inst_36249 = [];
var inst_36250 = inst_36249.push(inst_36234);
var inst_36230 = inst_36249;
var inst_36231 = inst_36238;
var state_36270__$1 = (function (){var statearr_36282 = state_36270;
(statearr_36282[(7)] = inst_36231);

(statearr_36282[(11)] = inst_36248);

(statearr_36282[(12)] = inst_36250);

(statearr_36282[(8)] = inst_36230);

return statearr_36282;
})();
var statearr_36283_36307 = state_36270__$1;
(statearr_36283_36307[(2)] = null);

(statearr_36283_36307[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (9))){
var inst_36230 = (state_36270[(8)]);
var inst_36246 = cljs.core.vec(inst_36230);
var state_36270__$1 = state_36270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36270__$1,(11),out,inst_36246);
} else {
if((state_val_36271 === (5))){
var inst_36234 = (state_36270[(9)]);
var inst_36231 = (state_36270[(7)]);
var inst_36238 = (state_36270[(10)]);
var inst_36238__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36234) : f.call(null,inst_36234));
var inst_36239 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36238__$1,inst_36231);
var inst_36240 = cljs.core.keyword_identical_QMARK_(inst_36231,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_36241 = (inst_36239) || (inst_36240);
var state_36270__$1 = (function (){var statearr_36284 = state_36270;
(statearr_36284[(10)] = inst_36238__$1);

return statearr_36284;
})();
if(cljs.core.truth_(inst_36241)){
var statearr_36285_36308 = state_36270__$1;
(statearr_36285_36308[(1)] = (8));

} else {
var statearr_36286_36309 = state_36270__$1;
(statearr_36286_36309[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (14))){
var inst_36263 = (state_36270[(2)]);
var inst_36264 = cljs.core.async.close_BANG_(out);
var state_36270__$1 = (function (){var statearr_36288 = state_36270;
(statearr_36288[(13)] = inst_36263);

return statearr_36288;
})();
var statearr_36289_36310 = state_36270__$1;
(statearr_36289_36310[(2)] = inst_36264);

(statearr_36289_36310[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (10))){
var inst_36253 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36290_36311 = state_36270__$1;
(statearr_36290_36311[(2)] = inst_36253);

(statearr_36290_36311[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_36271 === (8))){
var inst_36234 = (state_36270[(9)]);
var inst_36238 = (state_36270[(10)]);
var inst_36230 = (state_36270[(8)]);
var inst_36243 = inst_36230.push(inst_36234);
var tmp36287 = inst_36230;
var inst_36230__$1 = tmp36287;
var inst_36231 = inst_36238;
var state_36270__$1 = (function (){var statearr_36291 = state_36270;
(statearr_36291[(14)] = inst_36243);

(statearr_36291[(7)] = inst_36231);

(statearr_36291[(8)] = inst_36230__$1);

return statearr_36291;
})();
var statearr_36292_36312 = state_36270__$1;
(statearr_36292_36312[(2)] = null);

(statearr_36292_36312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34390__auto___36298,out))
;
return ((function (switch__34288__auto__,c__34390__auto___36298,out){
return (function() {
var cljs$core$async$state_machine__34289__auto__ = null;
var cljs$core$async$state_machine__34289__auto____0 = (function (){
var statearr_36293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36293[(0)] = cljs$core$async$state_machine__34289__auto__);

(statearr_36293[(1)] = (1));

return statearr_36293;
});
var cljs$core$async$state_machine__34289__auto____1 = (function (state_36270){
while(true){
var ret_value__34290__auto__ = (function (){try{while(true){
var result__34291__auto__ = switch__34288__auto__(state_36270);
if(cljs.core.keyword_identical_QMARK_(result__34291__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__34291__auto__;
}
break;
}
}catch (e36294){if((e36294 instanceof Object)){
var ex__34292__auto__ = e36294;
var statearr_36295_36313 = state_36270;
(statearr_36295_36313[(5)] = ex__34292__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36270);

return cljs.core.cst$kw$recur;
} else {
throw e36294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34290__auto__,cljs.core.cst$kw$recur)){
var G__36314 = state_36270;
state_36270 = G__36314;
continue;
} else {
return ret_value__34290__auto__;
}
break;
}
});
cljs$core$async$state_machine__34289__auto__ = function(state_36270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34289__auto____1.call(this,state_36270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34289__auto____0;
cljs$core$async$state_machine__34289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34289__auto____1;
return cljs$core$async$state_machine__34289__auto__;
})()
;})(switch__34288__auto__,c__34390__auto___36298,out))
})();
var state__34392__auto__ = (function (){var statearr_36296 = (f__34391__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34391__auto__.cljs$core$IFn$_invoke$arity$0() : f__34391__auto__.call(null));
(statearr_36296[(6)] = c__34390__auto___36298);

return statearr_36296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34392__auto__);
});})(c__34390__auto___36298,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

