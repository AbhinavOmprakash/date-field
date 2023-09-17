goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17536 = arguments.length;
switch (G__17536) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17537 = (function (f,blockable,meta17538){
this.f = f;
this.blockable = blockable;
this.meta17538 = meta17538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17539,meta17538__$1){
var self__ = this;
var _17539__$1 = this;
return (new cljs.core.async.t_cljs$core$async17537(self__.f,self__.blockable,meta17538__$1));
}));

(cljs.core.async.t_cljs$core$async17537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17539){
var self__ = this;
var _17539__$1 = this;
return self__.meta17538;
}));

(cljs.core.async.t_cljs$core$async17537.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17538","meta17538",1747701248,null)], null);
}));

(cljs.core.async.t_cljs$core$async17537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17537");

(cljs.core.async.t_cljs$core$async17537.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17537.
 */
cljs.core.async.__GT_t_cljs$core$async17537 = (function cljs$core$async$__GT_t_cljs$core$async17537(f__$1,blockable__$1,meta17538){
return (new cljs.core.async.t_cljs$core$async17537(f__$1,blockable__$1,meta17538));
});

}

return (new cljs.core.async.t_cljs$core$async17537(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__17542 = arguments.length;
switch (G__17542) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17544 = arguments.length;
switch (G__17544) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__17546 = arguments.length;
switch (G__17546) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19605 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19605) : fn1.call(null,val_19605));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19605) : fn1.call(null,val_19605));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17548 = arguments.length;
switch (G__17548) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19608 = n;
var x_19609 = (0);
while(true){
if((x_19609 < n__5636__auto___19608)){
(a[x_19609] = x_19609);

var G__19610 = (x_19609 + (1));
x_19609 = G__19610;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17556 = (function (flag,meta17557){
this.flag = flag;
this.meta17557 = meta17557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17558,meta17557__$1){
var self__ = this;
var _17558__$1 = this;
return (new cljs.core.async.t_cljs$core$async17556(self__.flag,meta17557__$1));
}));

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17558){
var self__ = this;
var _17558__$1 = this;
return self__.meta17557;
}));

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17557","meta17557",417112085,null)], null);
}));

(cljs.core.async.t_cljs$core$async17556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17556");

(cljs.core.async.t_cljs$core$async17556.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17556.
 */
cljs.core.async.__GT_t_cljs$core$async17556 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17556(flag__$1,meta17557){
return (new cljs.core.async.t_cljs$core$async17556(flag__$1,meta17557));
});

}

return (new cljs.core.async.t_cljs$core$async17556(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17559 = (function (flag,cb,meta17560){
this.flag = flag;
this.cb = cb;
this.meta17560 = meta17560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17561,meta17560__$1){
var self__ = this;
var _17561__$1 = this;
return (new cljs.core.async.t_cljs$core$async17559(self__.flag,self__.cb,meta17560__$1));
}));

(cljs.core.async.t_cljs$core$async17559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17561){
var self__ = this;
var _17561__$1 = this;
return self__.meta17560;
}));

(cljs.core.async.t_cljs$core$async17559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17560","meta17560",522997665,null)], null);
}));

(cljs.core.async.t_cljs$core$async17559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17559");

(cljs.core.async.t_cljs$core$async17559.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17559.
 */
cljs.core.async.__GT_t_cljs$core$async17559 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17559(flag__$1,cb__$1,meta17560){
return (new cljs.core.async.t_cljs$core$async17559(flag__$1,cb__$1,meta17560));
});

}

return (new cljs.core.async.t_cljs$core$async17559(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17563_SHARP_){
var G__17567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17563_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17567) : fret.call(null,G__17567));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17564_SHARP_){
var G__17568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17564_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17568) : fret.call(null,G__17568));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19614 = (i + (1));
i = G__19614;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___19615 = arguments.length;
var i__5770__auto___19616 = (0);
while(true){
if((i__5770__auto___19616 < len__5769__auto___19615)){
args__5775__auto__.push((arguments[i__5770__auto___19616]));

var G__19617 = (i__5770__auto___19616 + (1));
i__5770__auto___19616 = G__19617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17583){
var map__17584 = p__17583;
var map__17584__$1 = cljs.core.__destructure_map(map__17584);
var opts = map__17584__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17581){
var G__17582 = cljs.core.first(seq17581);
var seq17581__$1 = cljs.core.next(seq17581);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17582,seq17581__$1);
}));

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
var G__17592 = arguments.length;
switch (G__17592) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17439__auto___19621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_17620){
var state_val_17621 = (state_17620[(1)]);
if((state_val_17621 === (7))){
var inst_17616 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17624_19622 = state_17620__$1;
(statearr_17624_19622[(2)] = inst_17616);

(statearr_17624_19622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (1))){
var state_17620__$1 = state_17620;
var statearr_17625_19623 = state_17620__$1;
(statearr_17625_19623[(2)] = null);

(statearr_17625_19623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (4))){
var inst_17599 = (state_17620[(7)]);
var inst_17599__$1 = (state_17620[(2)]);
var inst_17600 = (inst_17599__$1 == null);
var state_17620__$1 = (function (){var statearr_17626 = state_17620;
(statearr_17626[(7)] = inst_17599__$1);

return statearr_17626;
})();
if(cljs.core.truth_(inst_17600)){
var statearr_17627_19624 = state_17620__$1;
(statearr_17627_19624[(1)] = (5));

} else {
var statearr_17628_19625 = state_17620__$1;
(statearr_17628_19625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (13))){
var state_17620__$1 = state_17620;
var statearr_17630_19626 = state_17620__$1;
(statearr_17630_19626[(2)] = null);

(statearr_17630_19626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (6))){
var inst_17599 = (state_17620[(7)]);
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17620__$1,(11),to,inst_17599);
} else {
if((state_val_17621 === (3))){
var inst_17618 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17620__$1,inst_17618);
} else {
if((state_val_17621 === (12))){
var state_17620__$1 = state_17620;
var statearr_17632_19627 = state_17620__$1;
(statearr_17632_19627[(2)] = null);

(statearr_17632_19627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (2))){
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17620__$1,(4),from);
} else {
if((state_val_17621 === (11))){
var inst_17609 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
if(cljs.core.truth_(inst_17609)){
var statearr_17634_19628 = state_17620__$1;
(statearr_17634_19628[(1)] = (12));

} else {
var statearr_17635_19629 = state_17620__$1;
(statearr_17635_19629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (9))){
var state_17620__$1 = state_17620;
var statearr_17636_19630 = state_17620__$1;
(statearr_17636_19630[(2)] = null);

(statearr_17636_19630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (5))){
var state_17620__$1 = state_17620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17638_19631 = state_17620__$1;
(statearr_17638_19631[(1)] = (8));

} else {
var statearr_17639_19632 = state_17620__$1;
(statearr_17639_19632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (14))){
var inst_17614 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17640_19633 = state_17620__$1;
(statearr_17640_19633[(2)] = inst_17614);

(statearr_17640_19633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (10))){
var inst_17606 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17641_19634 = state_17620__$1;
(statearr_17641_19634[(2)] = inst_17606);

(statearr_17641_19634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (8))){
var inst_17603 = cljs.core.async.close_BANG_(to);
var state_17620__$1 = state_17620;
var statearr_17643_19635 = state_17620__$1;
(statearr_17643_19635[(2)] = inst_17603);

(statearr_17643_19635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_17644 = [null,null,null,null,null,null,null,null];
(statearr_17644[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_17644[(1)] = (1));

return statearr_17644;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_17620){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17620);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17646){var ex__17283__auto__ = e17646;
var statearr_17647_19639 = state_17620;
(statearr_17647_19639[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17620[(4)]))){
var statearr_17648_19640 = state_17620;
(statearr_17648_19640[(1)] = cljs.core.first((state_17620[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19641 = state_17620;
state_17620 = G__19641;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_17620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_17620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_17649 = f__17440__auto__();
(statearr_17649[(6)] = c__17439__auto___19621);

return statearr_17649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17654){
var vec__17655 = p__17654;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(1),null);
var job = vec__17655;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17439__auto___19649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_17662){
var state_val_17663 = (state_17662[(1)]);
if((state_val_17663 === (1))){
var state_17662__$1 = state_17662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17662__$1,(2),res,v);
} else {
if((state_val_17663 === (2))){
var inst_17659 = (state_17662[(2)]);
var inst_17660 = cljs.core.async.close_BANG_(res);
var state_17662__$1 = (function (){var statearr_17664 = state_17662;
(statearr_17664[(7)] = inst_17659);

return statearr_17664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17662__$1,inst_17660);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17665 = [null,null,null,null,null,null,null,null];
(statearr_17665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17665[(1)] = (1));

return statearr_17665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17662){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17662);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17666){var ex__17283__auto__ = e17666;
var statearr_17667_19663 = state_17662;
(statearr_17667_19663[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17662[(4)]))){
var statearr_17668_19664 = state_17662;
(statearr_17668_19664[(1)] = cljs.core.first((state_17662[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19665 = state_17662;
state_17662 = G__19665;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_17669 = f__17440__auto__();
(statearr_17669[(6)] = c__17439__auto___19649);

return statearr_17669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17670){
var vec__17671 = p__17670;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17671,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17671,(1),null);
var job = vec__17671;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19688 = n;
var __19689 = (0);
while(true){
if((__19689 < n__5636__auto___19688)){
var G__17674_19695 = type;
var G__17674_19696__$1 = (((G__17674_19695 instanceof cljs.core.Keyword))?G__17674_19695.fqn:null);
switch (G__17674_19696__$1) {
case "compute":
var c__17439__auto___19704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19689,c__17439__auto___19704,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async){
return (function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = ((function (__19689,c__17439__auto___19704,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async){
return (function (state_17687){
var state_val_17688 = (state_17687[(1)]);
if((state_val_17688 === (1))){
var state_17687__$1 = state_17687;
var statearr_17689_19708 = state_17687__$1;
(statearr_17689_19708[(2)] = null);

(statearr_17689_19708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (2))){
var state_17687__$1 = state_17687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17687__$1,(4),jobs);
} else {
if((state_val_17688 === (3))){
var inst_17685 = (state_17687[(2)]);
var state_17687__$1 = state_17687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17687__$1,inst_17685);
} else {
if((state_val_17688 === (4))){
var inst_17677 = (state_17687[(2)]);
var inst_17678 = process__$1(inst_17677);
var state_17687__$1 = state_17687;
if(cljs.core.truth_(inst_17678)){
var statearr_17690_19715 = state_17687__$1;
(statearr_17690_19715[(1)] = (5));

} else {
var statearr_17691_19716 = state_17687__$1;
(statearr_17691_19716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (5))){
var state_17687__$1 = state_17687;
var statearr_17692_19718 = state_17687__$1;
(statearr_17692_19718[(2)] = null);

(statearr_17692_19718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (6))){
var state_17687__$1 = state_17687;
var statearr_17693_19719 = state_17687__$1;
(statearr_17693_19719[(2)] = null);

(statearr_17693_19719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17688 === (7))){
var inst_17683 = (state_17687[(2)]);
var state_17687__$1 = state_17687;
var statearr_17694_19724 = state_17687__$1;
(statearr_17694_19724[(2)] = inst_17683);

(statearr_17694_19724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19689,c__17439__auto___19704,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async))
;
return ((function (__19689,switch__17279__auto__,c__17439__auto___19704,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17695 = [null,null,null,null,null,null,null];
(statearr_17695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17695[(1)] = (1));

return statearr_17695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17687){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17687);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17696){var ex__17283__auto__ = e17696;
var statearr_17697_19732 = state_17687;
(statearr_17697_19732[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17687[(4)]))){
var statearr_17698_19734 = state_17687;
(statearr_17698_19734[(1)] = cljs.core.first((state_17687[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19735 = state_17687;
state_17687 = G__19735;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
;})(__19689,switch__17279__auto__,c__17439__auto___19704,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async))
})();
var state__17441__auto__ = (function (){var statearr_17699 = f__17440__auto__();
(statearr_17699[(6)] = c__17439__auto___19704);

return statearr_17699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
});})(__19689,c__17439__auto___19704,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async))
);


break;
case "async":
var c__17439__auto___19736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19689,c__17439__auto___19736,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async){
return (function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = ((function (__19689,c__17439__auto___19736,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async){
return (function (state_17712){
var state_val_17713 = (state_17712[(1)]);
if((state_val_17713 === (1))){
var state_17712__$1 = state_17712;
var statearr_17714_19737 = state_17712__$1;
(statearr_17714_19737[(2)] = null);

(statearr_17714_19737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (2))){
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17712__$1,(4),jobs);
} else {
if((state_val_17713 === (3))){
var inst_17710 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17712__$1,inst_17710);
} else {
if((state_val_17713 === (4))){
var inst_17702 = (state_17712[(2)]);
var inst_17703 = async(inst_17702);
var state_17712__$1 = state_17712;
if(cljs.core.truth_(inst_17703)){
var statearr_17715_19740 = state_17712__$1;
(statearr_17715_19740[(1)] = (5));

} else {
var statearr_17720_19741 = state_17712__$1;
(statearr_17720_19741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (5))){
var state_17712__$1 = state_17712;
var statearr_17721_19742 = state_17712__$1;
(statearr_17721_19742[(2)] = null);

(statearr_17721_19742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (6))){
var state_17712__$1 = state_17712;
var statearr_17748_19743 = state_17712__$1;
(statearr_17748_19743[(2)] = null);

(statearr_17748_19743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17713 === (7))){
var inst_17708 = (state_17712[(2)]);
var state_17712__$1 = state_17712;
var statearr_17749_19744 = state_17712__$1;
(statearr_17749_19744[(2)] = inst_17708);

(statearr_17749_19744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19689,c__17439__auto___19736,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async))
;
return ((function (__19689,switch__17279__auto__,c__17439__auto___19736,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17750 = [null,null,null,null,null,null,null];
(statearr_17750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17750[(1)] = (1));

return statearr_17750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17712){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17712);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17751){var ex__17283__auto__ = e17751;
var statearr_17752_19745 = state_17712;
(statearr_17752_19745[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17712[(4)]))){
var statearr_17753_19746 = state_17712;
(statearr_17753_19746[(1)] = cljs.core.first((state_17712[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19748 = state_17712;
state_17712 = G__19748;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
;})(__19689,switch__17279__auto__,c__17439__auto___19736,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async))
})();
var state__17441__auto__ = (function (){var statearr_17754 = f__17440__auto__();
(statearr_17754[(6)] = c__17439__auto___19736);

return statearr_17754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
});})(__19689,c__17439__auto___19736,G__17674_19695,G__17674_19696__$1,n__5636__auto___19688,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17674_19696__$1)].join('')));

}

var G__19750 = (__19689 + (1));
__19689 = G__19750;
continue;
} else {
}
break;
}

var c__17439__auto___19751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_17776){
var state_val_17777 = (state_17776[(1)]);
if((state_val_17777 === (7))){
var inst_17772 = (state_17776[(2)]);
var state_17776__$1 = state_17776;
var statearr_17778_19752 = state_17776__$1;
(statearr_17778_19752[(2)] = inst_17772);

(statearr_17778_19752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17777 === (1))){
var state_17776__$1 = state_17776;
var statearr_17779_19757 = state_17776__$1;
(statearr_17779_19757[(2)] = null);

(statearr_17779_19757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17777 === (4))){
var inst_17757 = (state_17776[(7)]);
var inst_17757__$1 = (state_17776[(2)]);
var inst_17758 = (inst_17757__$1 == null);
var state_17776__$1 = (function (){var statearr_17780 = state_17776;
(statearr_17780[(7)] = inst_17757__$1);

return statearr_17780;
})();
if(cljs.core.truth_(inst_17758)){
var statearr_17781_19761 = state_17776__$1;
(statearr_17781_19761[(1)] = (5));

} else {
var statearr_17782_19762 = state_17776__$1;
(statearr_17782_19762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17777 === (6))){
var inst_17757 = (state_17776[(7)]);
var inst_17762 = (state_17776[(8)]);
var inst_17762__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17764 = [inst_17757,inst_17762__$1];
var inst_17765 = (new cljs.core.PersistentVector(null,2,(5),inst_17763,inst_17764,null));
var state_17776__$1 = (function (){var statearr_17783 = state_17776;
(statearr_17783[(8)] = inst_17762__$1);

return statearr_17783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17776__$1,(8),jobs,inst_17765);
} else {
if((state_val_17777 === (3))){
var inst_17774 = (state_17776[(2)]);
var state_17776__$1 = state_17776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17776__$1,inst_17774);
} else {
if((state_val_17777 === (2))){
var state_17776__$1 = state_17776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17776__$1,(4),from);
} else {
if((state_val_17777 === (9))){
var inst_17769 = (state_17776[(2)]);
var state_17776__$1 = (function (){var statearr_17784 = state_17776;
(statearr_17784[(9)] = inst_17769);

return statearr_17784;
})();
var statearr_17785_19771 = state_17776__$1;
(statearr_17785_19771[(2)] = null);

(statearr_17785_19771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17777 === (5))){
var inst_17760 = cljs.core.async.close_BANG_(jobs);
var state_17776__$1 = state_17776;
var statearr_17786_19775 = state_17776__$1;
(statearr_17786_19775[(2)] = inst_17760);

(statearr_17786_19775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17777 === (8))){
var inst_17762 = (state_17776[(8)]);
var inst_17767 = (state_17776[(2)]);
var state_17776__$1 = (function (){var statearr_17787 = state_17776;
(statearr_17787[(10)] = inst_17767);

return statearr_17787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17776__$1,(9),results,inst_17762);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17795[(1)] = (1));

return statearr_17795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17776){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17776);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17802){var ex__17283__auto__ = e17802;
var statearr_17804_19779 = state_17776;
(statearr_17804_19779[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17776[(4)]))){
var statearr_17809_19780 = state_17776;
(statearr_17809_19780[(1)] = cljs.core.first((state_17776[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19781 = state_17776;
state_17776 = G__19781;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_17816 = f__17440__auto__();
(statearr_17816[(6)] = c__17439__auto___19751);

return statearr_17816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


var c__17439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_17855){
var state_val_17856 = (state_17855[(1)]);
if((state_val_17856 === (7))){
var inst_17851 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
var statearr_17858_19782 = state_17855__$1;
(statearr_17858_19782[(2)] = inst_17851);

(statearr_17858_19782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (20))){
var state_17855__$1 = state_17855;
var statearr_17859_19787 = state_17855__$1;
(statearr_17859_19787[(2)] = null);

(statearr_17859_19787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (1))){
var state_17855__$1 = state_17855;
var statearr_17860_19791 = state_17855__$1;
(statearr_17860_19791[(2)] = null);

(statearr_17860_19791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (4))){
var inst_17820 = (state_17855[(7)]);
var inst_17820__$1 = (state_17855[(2)]);
var inst_17821 = (inst_17820__$1 == null);
var state_17855__$1 = (function (){var statearr_17863 = state_17855;
(statearr_17863[(7)] = inst_17820__$1);

return statearr_17863;
})();
if(cljs.core.truth_(inst_17821)){
var statearr_17864_19792 = state_17855__$1;
(statearr_17864_19792[(1)] = (5));

} else {
var statearr_17865_19793 = state_17855__$1;
(statearr_17865_19793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (15))){
var inst_17833 = (state_17855[(8)]);
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17855__$1,(18),to,inst_17833);
} else {
if((state_val_17856 === (21))){
var inst_17846 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
var statearr_17866_19794 = state_17855__$1;
(statearr_17866_19794[(2)] = inst_17846);

(statearr_17866_19794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (13))){
var inst_17848 = (state_17855[(2)]);
var state_17855__$1 = (function (){var statearr_17867 = state_17855;
(statearr_17867[(9)] = inst_17848);

return statearr_17867;
})();
var statearr_17868_19798 = state_17855__$1;
(statearr_17868_19798[(2)] = null);

(statearr_17868_19798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (6))){
var inst_17820 = (state_17855[(7)]);
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17855__$1,(11),inst_17820);
} else {
if((state_val_17856 === (17))){
var inst_17841 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
if(cljs.core.truth_(inst_17841)){
var statearr_17869_19802 = state_17855__$1;
(statearr_17869_19802[(1)] = (19));

} else {
var statearr_17870_19803 = state_17855__$1;
(statearr_17870_19803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (3))){
var inst_17853 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17855__$1,inst_17853);
} else {
if((state_val_17856 === (12))){
var inst_17830 = (state_17855[(10)]);
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17855__$1,(14),inst_17830);
} else {
if((state_val_17856 === (2))){
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17855__$1,(4),results);
} else {
if((state_val_17856 === (19))){
var state_17855__$1 = state_17855;
var statearr_17881_19804 = state_17855__$1;
(statearr_17881_19804[(2)] = null);

(statearr_17881_19804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (11))){
var inst_17830 = (state_17855[(2)]);
var state_17855__$1 = (function (){var statearr_17888 = state_17855;
(statearr_17888[(10)] = inst_17830);

return statearr_17888;
})();
var statearr_17894_19805 = state_17855__$1;
(statearr_17894_19805[(2)] = null);

(statearr_17894_19805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (9))){
var state_17855__$1 = state_17855;
var statearr_17895_19809 = state_17855__$1;
(statearr_17895_19809[(2)] = null);

(statearr_17895_19809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (5))){
var state_17855__$1 = state_17855;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17896_19810 = state_17855__$1;
(statearr_17896_19810[(1)] = (8));

} else {
var statearr_17897_19811 = state_17855__$1;
(statearr_17897_19811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (14))){
var inst_17835 = (state_17855[(11)]);
var inst_17833 = (state_17855[(8)]);
var inst_17833__$1 = (state_17855[(2)]);
var inst_17834 = (inst_17833__$1 == null);
var inst_17835__$1 = cljs.core.not(inst_17834);
var state_17855__$1 = (function (){var statearr_17898 = state_17855;
(statearr_17898[(11)] = inst_17835__$1);

(statearr_17898[(8)] = inst_17833__$1);

return statearr_17898;
})();
if(inst_17835__$1){
var statearr_17899_19812 = state_17855__$1;
(statearr_17899_19812[(1)] = (15));

} else {
var statearr_17900_19813 = state_17855__$1;
(statearr_17900_19813[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (16))){
var inst_17835 = (state_17855[(11)]);
var state_17855__$1 = state_17855;
var statearr_17906_19814 = state_17855__$1;
(statearr_17906_19814[(2)] = inst_17835);

(statearr_17906_19814[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (10))){
var inst_17827 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
var statearr_17914_19815 = state_17855__$1;
(statearr_17914_19815[(2)] = inst_17827);

(statearr_17914_19815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (18))){
var inst_17838 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
var statearr_17924_19817 = state_17855__$1;
(statearr_17924_19817[(2)] = inst_17838);

(statearr_17924_19817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (8))){
var inst_17824 = cljs.core.async.close_BANG_(to);
var state_17855__$1 = state_17855;
var statearr_17925_19818 = state_17855__$1;
(statearr_17925_19818[(2)] = inst_17824);

(statearr_17925_19818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17931[(1)] = (1));

return statearr_17931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17855){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17855);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17939){var ex__17283__auto__ = e17939;
var statearr_17944_19819 = state_17855;
(statearr_17944_19819[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17855[(4)]))){
var statearr_17950_19820 = state_17855;
(statearr_17950_19820[(1)] = cljs.core.first((state_17855[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19821 = state_17855;
state_17855 = G__19821;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_17951 = f__17440__auto__();
(statearr_17951[(6)] = c__17439__auto__);

return statearr_17951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));

return c__17439__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17953 = arguments.length;
switch (G__17953) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__17957 = arguments.length;
switch (G__17957) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__17972 = arguments.length;
switch (G__17972) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17439__auto___19825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_17998){
var state_val_17999 = (state_17998[(1)]);
if((state_val_17999 === (7))){
var inst_17994 = (state_17998[(2)]);
var state_17998__$1 = state_17998;
var statearr_18000_19826 = state_17998__$1;
(statearr_18000_19826[(2)] = inst_17994);

(statearr_18000_19826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (1))){
var state_17998__$1 = state_17998;
var statearr_18001_19828 = state_17998__$1;
(statearr_18001_19828[(2)] = null);

(statearr_18001_19828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (4))){
var inst_17975 = (state_17998[(7)]);
var inst_17975__$1 = (state_17998[(2)]);
var inst_17976 = (inst_17975__$1 == null);
var state_17998__$1 = (function (){var statearr_18002 = state_17998;
(statearr_18002[(7)] = inst_17975__$1);

return statearr_18002;
})();
if(cljs.core.truth_(inst_17976)){
var statearr_18003_19829 = state_17998__$1;
(statearr_18003_19829[(1)] = (5));

} else {
var statearr_18004_19830 = state_17998__$1;
(statearr_18004_19830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (13))){
var state_17998__$1 = state_17998;
var statearr_18005_19831 = state_17998__$1;
(statearr_18005_19831[(2)] = null);

(statearr_18005_19831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (6))){
var inst_17975 = (state_17998[(7)]);
var inst_17981 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17975) : p.call(null,inst_17975));
var state_17998__$1 = state_17998;
if(cljs.core.truth_(inst_17981)){
var statearr_18006_19832 = state_17998__$1;
(statearr_18006_19832[(1)] = (9));

} else {
var statearr_18007_19833 = state_17998__$1;
(statearr_18007_19833[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (3))){
var inst_17996 = (state_17998[(2)]);
var state_17998__$1 = state_17998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17998__$1,inst_17996);
} else {
if((state_val_17999 === (12))){
var state_17998__$1 = state_17998;
var statearr_18008_19834 = state_17998__$1;
(statearr_18008_19834[(2)] = null);

(statearr_18008_19834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (2))){
var state_17998__$1 = state_17998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17998__$1,(4),ch);
} else {
if((state_val_17999 === (11))){
var inst_17975 = (state_17998[(7)]);
var inst_17985 = (state_17998[(2)]);
var state_17998__$1 = state_17998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17998__$1,(8),inst_17985,inst_17975);
} else {
if((state_val_17999 === (9))){
var state_17998__$1 = state_17998;
var statearr_18009_19837 = state_17998__$1;
(statearr_18009_19837[(2)] = tc);

(statearr_18009_19837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (5))){
var inst_17978 = cljs.core.async.close_BANG_(tc);
var inst_17979 = cljs.core.async.close_BANG_(fc);
var state_17998__$1 = (function (){var statearr_18010 = state_17998;
(statearr_18010[(8)] = inst_17978);

return statearr_18010;
})();
var statearr_18011_19841 = state_17998__$1;
(statearr_18011_19841[(2)] = inst_17979);

(statearr_18011_19841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (14))){
var inst_17992 = (state_17998[(2)]);
var state_17998__$1 = state_17998;
var statearr_18012_19842 = state_17998__$1;
(statearr_18012_19842[(2)] = inst_17992);

(statearr_18012_19842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (10))){
var state_17998__$1 = state_17998;
var statearr_18013_19844 = state_17998__$1;
(statearr_18013_19844[(2)] = fc);

(statearr_18013_19844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17999 === (8))){
var inst_17987 = (state_17998[(2)]);
var state_17998__$1 = state_17998;
if(cljs.core.truth_(inst_17987)){
var statearr_18014_19845 = state_17998__$1;
(statearr_18014_19845[(1)] = (12));

} else {
var statearr_18015_19846 = state_17998__$1;
(statearr_18015_19846[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18016 = [null,null,null,null,null,null,null,null,null];
(statearr_18016[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18016[(1)] = (1));

return statearr_18016;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_17998){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17998);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18017){var ex__17283__auto__ = e18017;
var statearr_18018_19849 = state_17998;
(statearr_18018_19849[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17998[(4)]))){
var statearr_18019_19850 = state_17998;
(statearr_18019_19850[(1)] = cljs.core.first((state_17998[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19851 = state_17998;
state_17998 = G__19851;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_17998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_17998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_18020 = f__17440__auto__();
(statearr_18020[(6)] = c__17439__auto___19825);

return statearr_18020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_18042){
var state_val_18043 = (state_18042[(1)]);
if((state_val_18043 === (7))){
var inst_18038 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18044_19852 = state_18042__$1;
(statearr_18044_19852[(2)] = inst_18038);

(statearr_18044_19852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (1))){
var inst_18021 = init;
var inst_18022 = inst_18021;
var state_18042__$1 = (function (){var statearr_18045 = state_18042;
(statearr_18045[(7)] = inst_18022);

return statearr_18045;
})();
var statearr_18046_19853 = state_18042__$1;
(statearr_18046_19853[(2)] = null);

(statearr_18046_19853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (4))){
var inst_18025 = (state_18042[(8)]);
var inst_18025__$1 = (state_18042[(2)]);
var inst_18026 = (inst_18025__$1 == null);
var state_18042__$1 = (function (){var statearr_18047 = state_18042;
(statearr_18047[(8)] = inst_18025__$1);

return statearr_18047;
})();
if(cljs.core.truth_(inst_18026)){
var statearr_18048_19854 = state_18042__$1;
(statearr_18048_19854[(1)] = (5));

} else {
var statearr_18049_19855 = state_18042__$1;
(statearr_18049_19855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (6))){
var inst_18022 = (state_18042[(7)]);
var inst_18025 = (state_18042[(8)]);
var inst_18029 = (state_18042[(9)]);
var inst_18029__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18022,inst_18025) : f.call(null,inst_18022,inst_18025));
var inst_18030 = cljs.core.reduced_QMARK_(inst_18029__$1);
var state_18042__$1 = (function (){var statearr_18050 = state_18042;
(statearr_18050[(9)] = inst_18029__$1);

return statearr_18050;
})();
if(inst_18030){
var statearr_18051_19859 = state_18042__$1;
(statearr_18051_19859[(1)] = (8));

} else {
var statearr_18052_19860 = state_18042__$1;
(statearr_18052_19860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (3))){
var inst_18040 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18042__$1,inst_18040);
} else {
if((state_val_18043 === (2))){
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18042__$1,(4),ch);
} else {
if((state_val_18043 === (9))){
var inst_18029 = (state_18042[(9)]);
var inst_18022 = inst_18029;
var state_18042__$1 = (function (){var statearr_18053 = state_18042;
(statearr_18053[(7)] = inst_18022);

return statearr_18053;
})();
var statearr_18054_19861 = state_18042__$1;
(statearr_18054_19861[(2)] = null);

(statearr_18054_19861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (5))){
var inst_18022 = (state_18042[(7)]);
var state_18042__$1 = state_18042;
var statearr_18055_19863 = state_18042__$1;
(statearr_18055_19863[(2)] = inst_18022);

(statearr_18055_19863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (10))){
var inst_18036 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18056_19864 = state_18042__$1;
(statearr_18056_19864[(2)] = inst_18036);

(statearr_18056_19864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (8))){
var inst_18029 = (state_18042[(9)]);
var inst_18032 = cljs.core.deref(inst_18029);
var state_18042__$1 = state_18042;
var statearr_18057_19865 = state_18042__$1;
(statearr_18057_19865[(2)] = inst_18032);

(statearr_18057_19865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17280__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17280__auto____0 = (function (){
var statearr_18058 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18058[(0)] = cljs$core$async$reduce_$_state_machine__17280__auto__);

(statearr_18058[(1)] = (1));

return statearr_18058;
});
var cljs$core$async$reduce_$_state_machine__17280__auto____1 = (function (state_18042){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18042);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18059){var ex__17283__auto__ = e18059;
var statearr_18060_19868 = state_18042;
(statearr_18060_19868[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18042[(4)]))){
var statearr_18061_19869 = state_18042;
(statearr_18061_19869[(1)] = cljs.core.first((state_18042[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19871 = state_18042;
state_18042 = G__19871;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17280__auto__ = function(state_18042){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17280__auto____1.call(this,state_18042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17280__auto____0;
cljs$core$async$reduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17280__auto____1;
return cljs$core$async$reduce_$_state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_18062 = f__17440__auto__();
(statearr_18062[(6)] = c__17439__auto__);

return statearr_18062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));

return c__17439__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_18068){
var state_val_18069 = (state_18068[(1)]);
if((state_val_18069 === (1))){
var inst_18063 = cljs.core.async.reduce(f__$1,init,ch);
var state_18068__$1 = state_18068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18068__$1,(2),inst_18063);
} else {
if((state_val_18069 === (2))){
var inst_18065 = (state_18068[(2)]);
var inst_18066 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18065) : f__$1.call(null,inst_18065));
var state_18068__$1 = state_18068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18068__$1,inst_18066);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17280__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17280__auto____0 = (function (){
var statearr_18071 = [null,null,null,null,null,null,null];
(statearr_18071[(0)] = cljs$core$async$transduce_$_state_machine__17280__auto__);

(statearr_18071[(1)] = (1));

return statearr_18071;
});
var cljs$core$async$transduce_$_state_machine__17280__auto____1 = (function (state_18068){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18068);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18072){var ex__17283__auto__ = e18072;
var statearr_18073_19877 = state_18068;
(statearr_18073_19877[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18068[(4)]))){
var statearr_18074_19878 = state_18068;
(statearr_18074_19878[(1)] = cljs.core.first((state_18068[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19882 = state_18068;
state_18068 = G__19882;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17280__auto__ = function(state_18068){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17280__auto____1.call(this,state_18068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17280__auto____0;
cljs$core$async$transduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17280__auto____1;
return cljs$core$async$transduce_$_state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_18075 = f__17440__auto__();
(statearr_18075[(6)] = c__17439__auto__);

return statearr_18075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));

return c__17439__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18077 = arguments.length;
switch (G__18077) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_18109){
var state_val_18110 = (state_18109[(1)]);
if((state_val_18110 === (7))){
var inst_18088 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18114_19884 = state_18109__$1;
(statearr_18114_19884[(2)] = inst_18088);

(statearr_18114_19884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (1))){
var inst_18081 = cljs.core.seq(coll);
var inst_18082 = inst_18081;
var state_18109__$1 = (function (){var statearr_18115 = state_18109;
(statearr_18115[(7)] = inst_18082);

return statearr_18115;
})();
var statearr_18116_19885 = state_18109__$1;
(statearr_18116_19885[(2)] = null);

(statearr_18116_19885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (4))){
var inst_18082 = (state_18109[(7)]);
var inst_18086 = cljs.core.first(inst_18082);
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18109__$1,(7),ch,inst_18086);
} else {
if((state_val_18110 === (13))){
var inst_18101 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18127_19886 = state_18109__$1;
(statearr_18127_19886[(2)] = inst_18101);

(statearr_18127_19886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (6))){
var inst_18091 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
if(cljs.core.truth_(inst_18091)){
var statearr_18128_19887 = state_18109__$1;
(statearr_18128_19887[(1)] = (8));

} else {
var statearr_18129_19888 = state_18109__$1;
(statearr_18129_19888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (3))){
var inst_18105 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18109__$1,inst_18105);
} else {
if((state_val_18110 === (12))){
var state_18109__$1 = state_18109;
var statearr_18130_19891 = state_18109__$1;
(statearr_18130_19891[(2)] = null);

(statearr_18130_19891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (2))){
var inst_18082 = (state_18109[(7)]);
var state_18109__$1 = state_18109;
if(cljs.core.truth_(inst_18082)){
var statearr_18131_19892 = state_18109__$1;
(statearr_18131_19892[(1)] = (4));

} else {
var statearr_18132_19893 = state_18109__$1;
(statearr_18132_19893[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (11))){
var inst_18098 = cljs.core.async.close_BANG_(ch);
var state_18109__$1 = state_18109;
var statearr_18133_19894 = state_18109__$1;
(statearr_18133_19894[(2)] = inst_18098);

(statearr_18133_19894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (9))){
var state_18109__$1 = state_18109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18134_19895 = state_18109__$1;
(statearr_18134_19895[(1)] = (11));

} else {
var statearr_18135_19896 = state_18109__$1;
(statearr_18135_19896[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (5))){
var inst_18082 = (state_18109[(7)]);
var state_18109__$1 = state_18109;
var statearr_18136_19899 = state_18109__$1;
(statearr_18136_19899[(2)] = inst_18082);

(statearr_18136_19899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (10))){
var inst_18103 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18137_19900 = state_18109__$1;
(statearr_18137_19900[(2)] = inst_18103);

(statearr_18137_19900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18110 === (8))){
var inst_18082 = (state_18109[(7)]);
var inst_18094 = cljs.core.next(inst_18082);
var inst_18082__$1 = inst_18094;
var state_18109__$1 = (function (){var statearr_18138 = state_18109;
(statearr_18138[(7)] = inst_18082__$1);

return statearr_18138;
})();
var statearr_18139_19901 = state_18109__$1;
(statearr_18139_19901[(2)] = null);

(statearr_18139_19901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18140 = [null,null,null,null,null,null,null,null];
(statearr_18140[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18140[(1)] = (1));

return statearr_18140;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18109){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18109);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18141){var ex__17283__auto__ = e18141;
var statearr_18144_19906 = state_18109;
(statearr_18144_19906[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18109[(4)]))){
var statearr_18147_19907 = state_18109;
(statearr_18147_19907[(1)] = cljs.core.first((state_18109[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19908 = state_18109;
state_18109 = G__19908;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_18149 = f__17440__auto__();
(statearr_18149[(6)] = c__17439__auto__);

return statearr_18149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));

return c__17439__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18153 = arguments.length;
switch (G__18153) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19917 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19917(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19928 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19928(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19929 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19929(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19930 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19930(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18171 = (function (ch,cs,meta18172){
this.ch = ch;
this.cs = cs;
this.meta18172 = meta18172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18173,meta18172__$1){
var self__ = this;
var _18173__$1 = this;
return (new cljs.core.async.t_cljs$core$async18171(self__.ch,self__.cs,meta18172__$1));
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18173){
var self__ = this;
var _18173__$1 = this;
return self__.meta18172;
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18171.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18172","meta18172",-1954329518,null)], null);
}));

(cljs.core.async.t_cljs$core$async18171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18171");

(cljs.core.async.t_cljs$core$async18171.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18171.
 */
cljs.core.async.__GT_t_cljs$core$async18171 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18171(ch__$1,cs__$1,meta18172){
return (new cljs.core.async.t_cljs$core$async18171(ch__$1,cs__$1,meta18172));
});

}

return (new cljs.core.async.t_cljs$core$async18171(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17439__auto___19937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_18324){
var state_val_18325 = (state_18324[(1)]);
if((state_val_18325 === (7))){
var inst_18320 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18326_19938 = state_18324__$1;
(statearr_18326_19938[(2)] = inst_18320);

(statearr_18326_19938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (20))){
var inst_18218 = (state_18324[(7)]);
var inst_18230 = cljs.core.first(inst_18218);
var inst_18231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18230,(0),null);
var inst_18232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18230,(1),null);
var state_18324__$1 = (function (){var statearr_18329 = state_18324;
(statearr_18329[(8)] = inst_18231);

return statearr_18329;
})();
if(cljs.core.truth_(inst_18232)){
var statearr_18331_19939 = state_18324__$1;
(statearr_18331_19939[(1)] = (22));

} else {
var statearr_18332_19940 = state_18324__$1;
(statearr_18332_19940[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (27))){
var inst_18264 = (state_18324[(9)]);
var inst_18187 = (state_18324[(10)]);
var inst_18262 = (state_18324[(11)]);
var inst_18271 = (state_18324[(12)]);
var inst_18271__$1 = cljs.core._nth(inst_18262,inst_18264);
var inst_18272 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18271__$1,inst_18187,done);
var state_18324__$1 = (function (){var statearr_18333 = state_18324;
(statearr_18333[(12)] = inst_18271__$1);

return statearr_18333;
})();
if(cljs.core.truth_(inst_18272)){
var statearr_18342_19941 = state_18324__$1;
(statearr_18342_19941[(1)] = (30));

} else {
var statearr_18351_19942 = state_18324__$1;
(statearr_18351_19942[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (1))){
var state_18324__$1 = state_18324;
var statearr_18356_19943 = state_18324__$1;
(statearr_18356_19943[(2)] = null);

(statearr_18356_19943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (24))){
var inst_18218 = (state_18324[(7)]);
var inst_18237 = (state_18324[(2)]);
var inst_18239 = cljs.core.next(inst_18218);
var inst_18196 = inst_18239;
var inst_18197 = null;
var inst_18198 = (0);
var inst_18199 = (0);
var state_18324__$1 = (function (){var statearr_18360 = state_18324;
(statearr_18360[(13)] = inst_18197);

(statearr_18360[(14)] = inst_18198);

(statearr_18360[(15)] = inst_18199);

(statearr_18360[(16)] = inst_18196);

(statearr_18360[(17)] = inst_18237);

return statearr_18360;
})();
var statearr_18362_19944 = state_18324__$1;
(statearr_18362_19944[(2)] = null);

(statearr_18362_19944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (39))){
var state_18324__$1 = state_18324;
var statearr_18367_19951 = state_18324__$1;
(statearr_18367_19951[(2)] = null);

(statearr_18367_19951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (4))){
var inst_18187 = (state_18324[(10)]);
var inst_18187__$1 = (state_18324[(2)]);
var inst_18188 = (inst_18187__$1 == null);
var state_18324__$1 = (function (){var statearr_18368 = state_18324;
(statearr_18368[(10)] = inst_18187__$1);

return statearr_18368;
})();
if(cljs.core.truth_(inst_18188)){
var statearr_18369_19953 = state_18324__$1;
(statearr_18369_19953[(1)] = (5));

} else {
var statearr_18370_19954 = state_18324__$1;
(statearr_18370_19954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (15))){
var inst_18197 = (state_18324[(13)]);
var inst_18198 = (state_18324[(14)]);
var inst_18199 = (state_18324[(15)]);
var inst_18196 = (state_18324[(16)]);
var inst_18214 = (state_18324[(2)]);
var inst_18215 = (inst_18199 + (1));
var tmp18363 = inst_18197;
var tmp18364 = inst_18198;
var tmp18365 = inst_18196;
var inst_18196__$1 = tmp18365;
var inst_18197__$1 = tmp18363;
var inst_18198__$1 = tmp18364;
var inst_18199__$1 = inst_18215;
var state_18324__$1 = (function (){var statearr_18371 = state_18324;
(statearr_18371[(13)] = inst_18197__$1);

(statearr_18371[(14)] = inst_18198__$1);

(statearr_18371[(15)] = inst_18199__$1);

(statearr_18371[(16)] = inst_18196__$1);

(statearr_18371[(18)] = inst_18214);

return statearr_18371;
})();
var statearr_18373_19956 = state_18324__$1;
(statearr_18373_19956[(2)] = null);

(statearr_18373_19956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (21))){
var inst_18242 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18378_19957 = state_18324__$1;
(statearr_18378_19957[(2)] = inst_18242);

(statearr_18378_19957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (31))){
var inst_18271 = (state_18324[(12)]);
var inst_18276 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18271);
var state_18324__$1 = state_18324;
var statearr_18379_19958 = state_18324__$1;
(statearr_18379_19958[(2)] = inst_18276);

(statearr_18379_19958[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (32))){
var inst_18264 = (state_18324[(9)]);
var inst_18263 = (state_18324[(19)]);
var inst_18262 = (state_18324[(11)]);
var inst_18261 = (state_18324[(20)]);
var inst_18278 = (state_18324[(2)]);
var inst_18279 = (inst_18264 + (1));
var tmp18374 = inst_18263;
var tmp18375 = inst_18262;
var tmp18376 = inst_18261;
var inst_18261__$1 = tmp18376;
var inst_18262__$1 = tmp18375;
var inst_18263__$1 = tmp18374;
var inst_18264__$1 = inst_18279;
var state_18324__$1 = (function (){var statearr_18381 = state_18324;
(statearr_18381[(9)] = inst_18264__$1);

(statearr_18381[(21)] = inst_18278);

(statearr_18381[(19)] = inst_18263__$1);

(statearr_18381[(11)] = inst_18262__$1);

(statearr_18381[(20)] = inst_18261__$1);

return statearr_18381;
})();
var statearr_18382_19962 = state_18324__$1;
(statearr_18382_19962[(2)] = null);

(statearr_18382_19962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (40))){
var inst_18291 = (state_18324[(22)]);
var inst_18296 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18291);
var state_18324__$1 = state_18324;
var statearr_18383_19963 = state_18324__$1;
(statearr_18383_19963[(2)] = inst_18296);

(statearr_18383_19963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (33))){
var inst_18282 = (state_18324[(23)]);
var inst_18284 = cljs.core.chunked_seq_QMARK_(inst_18282);
var state_18324__$1 = state_18324;
if(inst_18284){
var statearr_18384_19964 = state_18324__$1;
(statearr_18384_19964[(1)] = (36));

} else {
var statearr_18385_19965 = state_18324__$1;
(statearr_18385_19965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (13))){
var inst_18208 = (state_18324[(24)]);
var inst_18211 = cljs.core.async.close_BANG_(inst_18208);
var state_18324__$1 = state_18324;
var statearr_18386_19972 = state_18324__$1;
(statearr_18386_19972[(2)] = inst_18211);

(statearr_18386_19972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (22))){
var inst_18231 = (state_18324[(8)]);
var inst_18234 = cljs.core.async.close_BANG_(inst_18231);
var state_18324__$1 = state_18324;
var statearr_18388_19973 = state_18324__$1;
(statearr_18388_19973[(2)] = inst_18234);

(statearr_18388_19973[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (36))){
var inst_18282 = (state_18324[(23)]);
var inst_18286 = cljs.core.chunk_first(inst_18282);
var inst_18287 = cljs.core.chunk_rest(inst_18282);
var inst_18288 = cljs.core.count(inst_18286);
var inst_18261 = inst_18287;
var inst_18262 = inst_18286;
var inst_18263 = inst_18288;
var inst_18264 = (0);
var state_18324__$1 = (function (){var statearr_18401 = state_18324;
(statearr_18401[(9)] = inst_18264);

(statearr_18401[(19)] = inst_18263);

(statearr_18401[(11)] = inst_18262);

(statearr_18401[(20)] = inst_18261);

return statearr_18401;
})();
var statearr_18402_19974 = state_18324__$1;
(statearr_18402_19974[(2)] = null);

(statearr_18402_19974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (41))){
var inst_18282 = (state_18324[(23)]);
var inst_18298 = (state_18324[(2)]);
var inst_18299 = cljs.core.next(inst_18282);
var inst_18261 = inst_18299;
var inst_18262 = null;
var inst_18263 = (0);
var inst_18264 = (0);
var state_18324__$1 = (function (){var statearr_18411 = state_18324;
(statearr_18411[(25)] = inst_18298);

(statearr_18411[(9)] = inst_18264);

(statearr_18411[(19)] = inst_18263);

(statearr_18411[(11)] = inst_18262);

(statearr_18411[(20)] = inst_18261);

return statearr_18411;
})();
var statearr_18412_19975 = state_18324__$1;
(statearr_18412_19975[(2)] = null);

(statearr_18412_19975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (43))){
var state_18324__$1 = state_18324;
var statearr_18413_19976 = state_18324__$1;
(statearr_18413_19976[(2)] = null);

(statearr_18413_19976[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (29))){
var inst_18307 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18415_19977 = state_18324__$1;
(statearr_18415_19977[(2)] = inst_18307);

(statearr_18415_19977[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (44))){
var inst_18317 = (state_18324[(2)]);
var state_18324__$1 = (function (){var statearr_18416 = state_18324;
(statearr_18416[(26)] = inst_18317);

return statearr_18416;
})();
var statearr_18417_19978 = state_18324__$1;
(statearr_18417_19978[(2)] = null);

(statearr_18417_19978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (6))){
var inst_18252 = (state_18324[(27)]);
var inst_18251 = cljs.core.deref(cs);
var inst_18252__$1 = cljs.core.keys(inst_18251);
var inst_18254 = cljs.core.count(inst_18252__$1);
var inst_18255 = cljs.core.reset_BANG_(dctr,inst_18254);
var inst_18260 = cljs.core.seq(inst_18252__$1);
var inst_18261 = inst_18260;
var inst_18262 = null;
var inst_18263 = (0);
var inst_18264 = (0);
var state_18324__$1 = (function (){var statearr_18418 = state_18324;
(statearr_18418[(9)] = inst_18264);

(statearr_18418[(27)] = inst_18252__$1);

(statearr_18418[(19)] = inst_18263);

(statearr_18418[(11)] = inst_18262);

(statearr_18418[(28)] = inst_18255);

(statearr_18418[(20)] = inst_18261);

return statearr_18418;
})();
var statearr_18419_19979 = state_18324__$1;
(statearr_18419_19979[(2)] = null);

(statearr_18419_19979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (28))){
var inst_18282 = (state_18324[(23)]);
var inst_18261 = (state_18324[(20)]);
var inst_18282__$1 = cljs.core.seq(inst_18261);
var state_18324__$1 = (function (){var statearr_18420 = state_18324;
(statearr_18420[(23)] = inst_18282__$1);

return statearr_18420;
})();
if(inst_18282__$1){
var statearr_18421_19980 = state_18324__$1;
(statearr_18421_19980[(1)] = (33));

} else {
var statearr_18422_19981 = state_18324__$1;
(statearr_18422_19981[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (25))){
var inst_18264 = (state_18324[(9)]);
var inst_18263 = (state_18324[(19)]);
var inst_18268 = (inst_18264 < inst_18263);
var inst_18269 = inst_18268;
var state_18324__$1 = state_18324;
if(cljs.core.truth_(inst_18269)){
var statearr_18424_19982 = state_18324__$1;
(statearr_18424_19982[(1)] = (27));

} else {
var statearr_18425_19983 = state_18324__$1;
(statearr_18425_19983[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (34))){
var state_18324__$1 = state_18324;
var statearr_18426_19984 = state_18324__$1;
(statearr_18426_19984[(2)] = null);

(statearr_18426_19984[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (17))){
var state_18324__$1 = state_18324;
var statearr_18427_19985 = state_18324__$1;
(statearr_18427_19985[(2)] = null);

(statearr_18427_19985[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (3))){
var inst_18322 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18324__$1,inst_18322);
} else {
if((state_val_18325 === (12))){
var inst_18247 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18428_19986 = state_18324__$1;
(statearr_18428_19986[(2)] = inst_18247);

(statearr_18428_19986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (2))){
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18324__$1,(4),ch);
} else {
if((state_val_18325 === (23))){
var state_18324__$1 = state_18324;
var statearr_18429_19987 = state_18324__$1;
(statearr_18429_19987[(2)] = null);

(statearr_18429_19987[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (35))){
var inst_18305 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18430_19988 = state_18324__$1;
(statearr_18430_19988[(2)] = inst_18305);

(statearr_18430_19988[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (19))){
var inst_18218 = (state_18324[(7)]);
var inst_18222 = cljs.core.chunk_first(inst_18218);
var inst_18223 = cljs.core.chunk_rest(inst_18218);
var inst_18224 = cljs.core.count(inst_18222);
var inst_18196 = inst_18223;
var inst_18197 = inst_18222;
var inst_18198 = inst_18224;
var inst_18199 = (0);
var state_18324__$1 = (function (){var statearr_18432 = state_18324;
(statearr_18432[(13)] = inst_18197);

(statearr_18432[(14)] = inst_18198);

(statearr_18432[(15)] = inst_18199);

(statearr_18432[(16)] = inst_18196);

return statearr_18432;
})();
var statearr_18433_19989 = state_18324__$1;
(statearr_18433_19989[(2)] = null);

(statearr_18433_19989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (11))){
var inst_18218 = (state_18324[(7)]);
var inst_18196 = (state_18324[(16)]);
var inst_18218__$1 = cljs.core.seq(inst_18196);
var state_18324__$1 = (function (){var statearr_18434 = state_18324;
(statearr_18434[(7)] = inst_18218__$1);

return statearr_18434;
})();
if(inst_18218__$1){
var statearr_18435_19991 = state_18324__$1;
(statearr_18435_19991[(1)] = (16));

} else {
var statearr_18436_19992 = state_18324__$1;
(statearr_18436_19992[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (9))){
var inst_18249 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18437_19993 = state_18324__$1;
(statearr_18437_19993[(2)] = inst_18249);

(statearr_18437_19993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (5))){
var inst_18194 = cljs.core.deref(cs);
var inst_18195 = cljs.core.seq(inst_18194);
var inst_18196 = inst_18195;
var inst_18197 = null;
var inst_18198 = (0);
var inst_18199 = (0);
var state_18324__$1 = (function (){var statearr_18438 = state_18324;
(statearr_18438[(13)] = inst_18197);

(statearr_18438[(14)] = inst_18198);

(statearr_18438[(15)] = inst_18199);

(statearr_18438[(16)] = inst_18196);

return statearr_18438;
})();
var statearr_18440_19998 = state_18324__$1;
(statearr_18440_19998[(2)] = null);

(statearr_18440_19998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (14))){
var state_18324__$1 = state_18324;
var statearr_18441_19999 = state_18324__$1;
(statearr_18441_19999[(2)] = null);

(statearr_18441_19999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (45))){
var inst_18313 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18442_20000 = state_18324__$1;
(statearr_18442_20000[(2)] = inst_18313);

(statearr_18442_20000[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (26))){
var inst_18252 = (state_18324[(27)]);
var inst_18309 = (state_18324[(2)]);
var inst_18310 = cljs.core.seq(inst_18252);
var state_18324__$1 = (function (){var statearr_18443 = state_18324;
(statearr_18443[(29)] = inst_18309);

return statearr_18443;
})();
if(inst_18310){
var statearr_18444_20004 = state_18324__$1;
(statearr_18444_20004[(1)] = (42));

} else {
var statearr_18445_20005 = state_18324__$1;
(statearr_18445_20005[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (16))){
var inst_18218 = (state_18324[(7)]);
var inst_18220 = cljs.core.chunked_seq_QMARK_(inst_18218);
var state_18324__$1 = state_18324;
if(inst_18220){
var statearr_18446_20008 = state_18324__$1;
(statearr_18446_20008[(1)] = (19));

} else {
var statearr_18447_20009 = state_18324__$1;
(statearr_18447_20009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (38))){
var inst_18302 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18448_20013 = state_18324__$1;
(statearr_18448_20013[(2)] = inst_18302);

(statearr_18448_20013[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (30))){
var state_18324__$1 = state_18324;
var statearr_18450_20014 = state_18324__$1;
(statearr_18450_20014[(2)] = null);

(statearr_18450_20014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (10))){
var inst_18197 = (state_18324[(13)]);
var inst_18199 = (state_18324[(15)]);
var inst_18207 = cljs.core._nth(inst_18197,inst_18199);
var inst_18208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18207,(0),null);
var inst_18209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18207,(1),null);
var state_18324__$1 = (function (){var statearr_18451 = state_18324;
(statearr_18451[(24)] = inst_18208);

return statearr_18451;
})();
if(cljs.core.truth_(inst_18209)){
var statearr_18452_20021 = state_18324__$1;
(statearr_18452_20021[(1)] = (13));

} else {
var statearr_18453_20022 = state_18324__$1;
(statearr_18453_20022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (18))){
var inst_18245 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18454_20023 = state_18324__$1;
(statearr_18454_20023[(2)] = inst_18245);

(statearr_18454_20023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (42))){
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18324__$1,(45),dchan);
} else {
if((state_val_18325 === (37))){
var inst_18187 = (state_18324[(10)]);
var inst_18291 = (state_18324[(22)]);
var inst_18282 = (state_18324[(23)]);
var inst_18291__$1 = cljs.core.first(inst_18282);
var inst_18293 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18291__$1,inst_18187,done);
var state_18324__$1 = (function (){var statearr_18456 = state_18324;
(statearr_18456[(22)] = inst_18291__$1);

return statearr_18456;
})();
if(cljs.core.truth_(inst_18293)){
var statearr_18457_20025 = state_18324__$1;
(statearr_18457_20025[(1)] = (39));

} else {
var statearr_18458_20026 = state_18324__$1;
(statearr_18458_20026[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (8))){
var inst_18198 = (state_18324[(14)]);
var inst_18199 = (state_18324[(15)]);
var inst_18201 = (inst_18199 < inst_18198);
var inst_18202 = inst_18201;
var state_18324__$1 = state_18324;
if(cljs.core.truth_(inst_18202)){
var statearr_18459_20045 = state_18324__$1;
(statearr_18459_20045[(1)] = (10));

} else {
var statearr_18460_20052 = state_18324__$1;
(statearr_18460_20052[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__17280__auto__ = null;
var cljs$core$async$mult_$_state_machine__17280__auto____0 = (function (){
var statearr_18461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18461[(0)] = cljs$core$async$mult_$_state_machine__17280__auto__);

(statearr_18461[(1)] = (1));

return statearr_18461;
});
var cljs$core$async$mult_$_state_machine__17280__auto____1 = (function (state_18324){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18324);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18462){var ex__17283__auto__ = e18462;
var statearr_18463_20083 = state_18324;
(statearr_18463_20083[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18324[(4)]))){
var statearr_18465_20084 = state_18324;
(statearr_18465_20084[(1)] = cljs.core.first((state_18324[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20090 = state_18324;
state_18324 = G__20090;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17280__auto__ = function(state_18324){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17280__auto____1.call(this,state_18324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17280__auto____0;
cljs$core$async$mult_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17280__auto____1;
return cljs$core$async$mult_$_state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_18466 = f__17440__auto__();
(statearr_18466[(6)] = c__17439__auto___19937);

return statearr_18466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18468 = arguments.length;
switch (G__18468) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_20105 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20105(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20106 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20106(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20107 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20107(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20108 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20108(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20109 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20109(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20110 = arguments.length;
var i__5770__auto___20111 = (0);
while(true){
if((i__5770__auto___20111 < len__5769__auto___20110)){
args__5775__auto__.push((arguments[i__5770__auto___20111]));

var G__20112 = (i__5770__auto___20111 + (1));
i__5770__auto___20111 = G__20112;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18479){
var map__18480 = p__18479;
var map__18480__$1 = cljs.core.__destructure_map(map__18480);
var opts = map__18480__$1;
var statearr_18481_20117 = state;
(statearr_18481_20117[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18482_20118 = state;
(statearr_18482_20118[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18483_20119 = state;
(statearr_18483_20119[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18474){
var G__18475 = cljs.core.first(seq18474);
var seq18474__$1 = cljs.core.next(seq18474);
var G__18476 = cljs.core.first(seq18474__$1);
var seq18474__$2 = cljs.core.next(seq18474__$1);
var G__18477 = cljs.core.first(seq18474__$2);
var seq18474__$3 = cljs.core.next(seq18474__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18475,G__18476,G__18477,seq18474__$3);
}));

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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18486 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18487){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18487 = meta18487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18488,meta18487__$1){
var self__ = this;
var _18488__$1 = this;
return (new cljs.core.async.t_cljs$core$async18486(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18487__$1));
}));

(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18488){
var self__ = this;
var _18488__$1 = this;
return self__.meta18487;
}));

(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18486.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18487","meta18487",-519030497,null)], null);
}));

(cljs.core.async.t_cljs$core$async18486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18486");

(cljs.core.async.t_cljs$core$async18486.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18486.
 */
cljs.core.async.__GT_t_cljs$core$async18486 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18486(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18487){
return (new cljs.core.async.t_cljs$core$async18486(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18487));
});

}

return (new cljs.core.async.t_cljs$core$async18486(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17439__auto___20138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_18559){
var state_val_18560 = (state_18559[(1)]);
if((state_val_18560 === (7))){
var inst_18519 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18519)){
var statearr_18562_20139 = state_18559__$1;
(statearr_18562_20139[(1)] = (8));

} else {
var statearr_18563_20140 = state_18559__$1;
(statearr_18563_20140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (20))){
var inst_18511 = (state_18559[(7)]);
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18559__$1,(23),out,inst_18511);
} else {
if((state_val_18560 === (1))){
var inst_18494 = calc_state();
var inst_18495 = cljs.core.__destructure_map(inst_18494);
var inst_18496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18495,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18495,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18495,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18499 = inst_18494;
var state_18559__$1 = (function (){var statearr_18564 = state_18559;
(statearr_18564[(8)] = inst_18498);

(statearr_18564[(9)] = inst_18499);

(statearr_18564[(10)] = inst_18497);

(statearr_18564[(11)] = inst_18496);

return statearr_18564;
})();
var statearr_18566_20144 = state_18559__$1;
(statearr_18566_20144[(2)] = null);

(statearr_18566_20144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (24))){
var inst_18502 = (state_18559[(12)]);
var inst_18499 = inst_18502;
var state_18559__$1 = (function (){var statearr_18567 = state_18559;
(statearr_18567[(9)] = inst_18499);

return statearr_18567;
})();
var statearr_18568_20145 = state_18559__$1;
(statearr_18568_20145[(2)] = null);

(statearr_18568_20145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (4))){
var inst_18514 = (state_18559[(13)]);
var inst_18511 = (state_18559[(7)]);
var inst_18510 = (state_18559[(2)]);
var inst_18511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18510,(0),null);
var inst_18513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18510,(1),null);
var inst_18514__$1 = (inst_18511__$1 == null);
var state_18559__$1 = (function (){var statearr_18569 = state_18559;
(statearr_18569[(13)] = inst_18514__$1);

(statearr_18569[(7)] = inst_18511__$1);

(statearr_18569[(14)] = inst_18513);

return statearr_18569;
})();
if(cljs.core.truth_(inst_18514__$1)){
var statearr_18570_20146 = state_18559__$1;
(statearr_18570_20146[(1)] = (5));

} else {
var statearr_18571_20147 = state_18559__$1;
(statearr_18571_20147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (15))){
var inst_18533 = (state_18559[(15)]);
var inst_18503 = (state_18559[(16)]);
var inst_18533__$1 = cljs.core.empty_QMARK_(inst_18503);
var state_18559__$1 = (function (){var statearr_18572 = state_18559;
(statearr_18572[(15)] = inst_18533__$1);

return statearr_18572;
})();
if(inst_18533__$1){
var statearr_18573_20148 = state_18559__$1;
(statearr_18573_20148[(1)] = (17));

} else {
var statearr_18574_20149 = state_18559__$1;
(statearr_18574_20149[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (21))){
var inst_18502 = (state_18559[(12)]);
var inst_18499 = inst_18502;
var state_18559__$1 = (function (){var statearr_18575 = state_18559;
(statearr_18575[(9)] = inst_18499);

return statearr_18575;
})();
var statearr_18576_20150 = state_18559__$1;
(statearr_18576_20150[(2)] = null);

(statearr_18576_20150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (13))){
var inst_18526 = (state_18559[(2)]);
var inst_18527 = calc_state();
var inst_18499 = inst_18527;
var state_18559__$1 = (function (){var statearr_18577 = state_18559;
(statearr_18577[(17)] = inst_18526);

(statearr_18577[(9)] = inst_18499);

return statearr_18577;
})();
var statearr_18578_20151 = state_18559__$1;
(statearr_18578_20151[(2)] = null);

(statearr_18578_20151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (22))){
var inst_18553 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18579_20152 = state_18559__$1;
(statearr_18579_20152[(2)] = inst_18553);

(statearr_18579_20152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (6))){
var inst_18513 = (state_18559[(14)]);
var inst_18517 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18513,change);
var state_18559__$1 = state_18559;
var statearr_18581_20153 = state_18559__$1;
(statearr_18581_20153[(2)] = inst_18517);

(statearr_18581_20153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (25))){
var state_18559__$1 = state_18559;
var statearr_18582_20155 = state_18559__$1;
(statearr_18582_20155[(2)] = null);

(statearr_18582_20155[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (17))){
var inst_18513 = (state_18559[(14)]);
var inst_18504 = (state_18559[(18)]);
var inst_18535 = (inst_18504.cljs$core$IFn$_invoke$arity$1 ? inst_18504.cljs$core$IFn$_invoke$arity$1(inst_18513) : inst_18504.call(null,inst_18513));
var inst_18536 = cljs.core.not(inst_18535);
var state_18559__$1 = state_18559;
var statearr_18583_20156 = state_18559__$1;
(statearr_18583_20156[(2)] = inst_18536);

(statearr_18583_20156[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (3))){
var inst_18557 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18559__$1,inst_18557);
} else {
if((state_val_18560 === (12))){
var state_18559__$1 = state_18559;
var statearr_18584_20160 = state_18559__$1;
(statearr_18584_20160[(2)] = null);

(statearr_18584_20160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (2))){
var inst_18502 = (state_18559[(12)]);
var inst_18499 = (state_18559[(9)]);
var inst_18502__$1 = cljs.core.__destructure_map(inst_18499);
var inst_18503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18502__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18502__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18502__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18559__$1 = (function (){var statearr_18585 = state_18559;
(statearr_18585[(12)] = inst_18502__$1);

(statearr_18585[(16)] = inst_18503);

(statearr_18585[(18)] = inst_18504);

return statearr_18585;
})();
return cljs.core.async.ioc_alts_BANG_(state_18559__$1,(4),inst_18505);
} else {
if((state_val_18560 === (23))){
var inst_18544 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18544)){
var statearr_18586_20161 = state_18559__$1;
(statearr_18586_20161[(1)] = (24));

} else {
var statearr_18587_20162 = state_18559__$1;
(statearr_18587_20162[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (19))){
var inst_18539 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18588_20163 = state_18559__$1;
(statearr_18588_20163[(2)] = inst_18539);

(statearr_18588_20163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (11))){
var inst_18513 = (state_18559[(14)]);
var inst_18523 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18513);
var state_18559__$1 = state_18559;
var statearr_18589_20164 = state_18559__$1;
(statearr_18589_20164[(2)] = inst_18523);

(statearr_18589_20164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (9))){
var inst_18530 = (state_18559[(19)]);
var inst_18513 = (state_18559[(14)]);
var inst_18503 = (state_18559[(16)]);
var inst_18530__$1 = (inst_18503.cljs$core$IFn$_invoke$arity$1 ? inst_18503.cljs$core$IFn$_invoke$arity$1(inst_18513) : inst_18503.call(null,inst_18513));
var state_18559__$1 = (function (){var statearr_18590 = state_18559;
(statearr_18590[(19)] = inst_18530__$1);

return statearr_18590;
})();
if(cljs.core.truth_(inst_18530__$1)){
var statearr_18591_20165 = state_18559__$1;
(statearr_18591_20165[(1)] = (14));

} else {
var statearr_18592_20166 = state_18559__$1;
(statearr_18592_20166[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (5))){
var inst_18514 = (state_18559[(13)]);
var state_18559__$1 = state_18559;
var statearr_18593_20167 = state_18559__$1;
(statearr_18593_20167[(2)] = inst_18514);

(statearr_18593_20167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (14))){
var inst_18530 = (state_18559[(19)]);
var state_18559__$1 = state_18559;
var statearr_18594_20169 = state_18559__$1;
(statearr_18594_20169[(2)] = inst_18530);

(statearr_18594_20169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (26))){
var inst_18549 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18595_20170 = state_18559__$1;
(statearr_18595_20170[(2)] = inst_18549);

(statearr_18595_20170[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (16))){
var inst_18541 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18541)){
var statearr_18596_20173 = state_18559__$1;
(statearr_18596_20173[(1)] = (20));

} else {
var statearr_18597_20174 = state_18559__$1;
(statearr_18597_20174[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (10))){
var inst_18555 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18598_20175 = state_18559__$1;
(statearr_18598_20175[(2)] = inst_18555);

(statearr_18598_20175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (18))){
var inst_18533 = (state_18559[(15)]);
var state_18559__$1 = state_18559;
var statearr_18599_20176 = state_18559__$1;
(statearr_18599_20176[(2)] = inst_18533);

(statearr_18599_20176[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (8))){
var inst_18511 = (state_18559[(7)]);
var inst_18521 = (inst_18511 == null);
var state_18559__$1 = state_18559;
if(cljs.core.truth_(inst_18521)){
var statearr_18600_20177 = state_18559__$1;
(statearr_18600_20177[(1)] = (11));

} else {
var statearr_18601_20178 = state_18559__$1;
(statearr_18601_20178[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__17280__auto__ = null;
var cljs$core$async$mix_$_state_machine__17280__auto____0 = (function (){
var statearr_18603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18603[(0)] = cljs$core$async$mix_$_state_machine__17280__auto__);

(statearr_18603[(1)] = (1));

return statearr_18603;
});
var cljs$core$async$mix_$_state_machine__17280__auto____1 = (function (state_18559){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18559);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18604){var ex__17283__auto__ = e18604;
var statearr_18605_20181 = state_18559;
(statearr_18605_20181[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18559[(4)]))){
var statearr_18606_20182 = state_18559;
(statearr_18606_20182[(1)] = cljs.core.first((state_18559[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20185 = state_18559;
state_18559 = G__20185;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17280__auto__ = function(state_18559){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17280__auto____1.call(this,state_18559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17280__auto____0;
cljs$core$async$mix_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17280__auto____1;
return cljs$core$async$mix_$_state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_18607 = f__17440__auto__();
(statearr_18607[(6)] = c__17439__auto___20138);

return statearr_18607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_20198 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20198(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20199 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20199(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20200 = (function() {
var G__20201 = null;
var G__20201__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20201__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20201 = function(p,v){
switch(arguments.length){
case 1:
return G__20201__1.call(this,p);
case 2:
return G__20201__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20201.cljs$core$IFn$_invoke$arity$1 = G__20201__1;
G__20201.cljs$core$IFn$_invoke$arity$2 = G__20201__2;
return G__20201;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18610 = arguments.length;
switch (G__18610) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20200(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20200(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__18615 = arguments.length;
switch (G__18615) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18612_SHARP_){
if(cljs.core.truth_((p1__18612_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18612_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18612_SHARP_.call(null,topic)))){
return p1__18612_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18612_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18617 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18618){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18618 = meta18618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18619,meta18618__$1){
var self__ = this;
var _18619__$1 = this;
return (new cljs.core.async.t_cljs$core$async18617(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18618__$1));
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18619){
var self__ = this;
var _18619__$1 = this;
return self__.meta18618;
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18617.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18618","meta18618",1383112076,null)], null);
}));

(cljs.core.async.t_cljs$core$async18617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18617");

(cljs.core.async.t_cljs$core$async18617.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18617.
 */
cljs.core.async.__GT_t_cljs$core$async18617 = (function cljs$core$async$__GT_t_cljs$core$async18617(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18618){
return (new cljs.core.async.t_cljs$core$async18617(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18618));
});

}

return (new cljs.core.async.t_cljs$core$async18617(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17439__auto___20220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_18695){
var state_val_18696 = (state_18695[(1)]);
if((state_val_18696 === (7))){
var inst_18690 = (state_18695[(2)]);
var state_18695__$1 = state_18695;
var statearr_18697_20228 = state_18695__$1;
(statearr_18697_20228[(2)] = inst_18690);

(statearr_18697_20228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (20))){
var state_18695__$1 = state_18695;
var statearr_18698_20229 = state_18695__$1;
(statearr_18698_20229[(2)] = null);

(statearr_18698_20229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (1))){
var state_18695__$1 = state_18695;
var statearr_18699_20233 = state_18695__$1;
(statearr_18699_20233[(2)] = null);

(statearr_18699_20233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (24))){
var inst_18673 = (state_18695[(7)]);
var inst_18682 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18673);
var state_18695__$1 = state_18695;
var statearr_18701_20234 = state_18695__$1;
(statearr_18701_20234[(2)] = inst_18682);

(statearr_18701_20234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (4))){
var inst_18624 = (state_18695[(8)]);
var inst_18624__$1 = (state_18695[(2)]);
var inst_18625 = (inst_18624__$1 == null);
var state_18695__$1 = (function (){var statearr_18702 = state_18695;
(statearr_18702[(8)] = inst_18624__$1);

return statearr_18702;
})();
if(cljs.core.truth_(inst_18625)){
var statearr_18703_20235 = state_18695__$1;
(statearr_18703_20235[(1)] = (5));

} else {
var statearr_18704_20236 = state_18695__$1;
(statearr_18704_20236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (15))){
var inst_18667 = (state_18695[(2)]);
var state_18695__$1 = state_18695;
var statearr_18706_20237 = state_18695__$1;
(statearr_18706_20237[(2)] = inst_18667);

(statearr_18706_20237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (21))){
var inst_18687 = (state_18695[(2)]);
var state_18695__$1 = (function (){var statearr_18707 = state_18695;
(statearr_18707[(9)] = inst_18687);

return statearr_18707;
})();
var statearr_18708_20244 = state_18695__$1;
(statearr_18708_20244[(2)] = null);

(statearr_18708_20244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (13))){
var inst_18649 = (state_18695[(10)]);
var inst_18651 = cljs.core.chunked_seq_QMARK_(inst_18649);
var state_18695__$1 = state_18695;
if(inst_18651){
var statearr_18709_20249 = state_18695__$1;
(statearr_18709_20249[(1)] = (16));

} else {
var statearr_18710_20251 = state_18695__$1;
(statearr_18710_20251[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (22))){
var inst_18679 = (state_18695[(2)]);
var state_18695__$1 = state_18695;
if(cljs.core.truth_(inst_18679)){
var statearr_18711_20255 = state_18695__$1;
(statearr_18711_20255[(1)] = (23));

} else {
var statearr_18712_20256 = state_18695__$1;
(statearr_18712_20256[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (6))){
var inst_18673 = (state_18695[(7)]);
var inst_18675 = (state_18695[(11)]);
var inst_18624 = (state_18695[(8)]);
var inst_18673__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18624) : topic_fn.call(null,inst_18624));
var inst_18674 = cljs.core.deref(mults);
var inst_18675__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18674,inst_18673__$1);
var state_18695__$1 = (function (){var statearr_18714 = state_18695;
(statearr_18714[(7)] = inst_18673__$1);

(statearr_18714[(11)] = inst_18675__$1);

return statearr_18714;
})();
if(cljs.core.truth_(inst_18675__$1)){
var statearr_18715_20264 = state_18695__$1;
(statearr_18715_20264[(1)] = (19));

} else {
var statearr_18716_20265 = state_18695__$1;
(statearr_18716_20265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (25))){
var inst_18684 = (state_18695[(2)]);
var state_18695__$1 = state_18695;
var statearr_18717_20266 = state_18695__$1;
(statearr_18717_20266[(2)] = inst_18684);

(statearr_18717_20266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (17))){
var inst_18649 = (state_18695[(10)]);
var inst_18658 = cljs.core.first(inst_18649);
var inst_18659 = cljs.core.async.muxch_STAR_(inst_18658);
var inst_18660 = cljs.core.async.close_BANG_(inst_18659);
var inst_18661 = cljs.core.next(inst_18649);
var inst_18634 = inst_18661;
var inst_18635 = null;
var inst_18636 = (0);
var inst_18637 = (0);
var state_18695__$1 = (function (){var statearr_18718 = state_18695;
(statearr_18718[(12)] = inst_18637);

(statearr_18718[(13)] = inst_18660);

(statearr_18718[(14)] = inst_18635);

(statearr_18718[(15)] = inst_18636);

(statearr_18718[(16)] = inst_18634);

return statearr_18718;
})();
var statearr_18719_20269 = state_18695__$1;
(statearr_18719_20269[(2)] = null);

(statearr_18719_20269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (3))){
var inst_18692 = (state_18695[(2)]);
var state_18695__$1 = state_18695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18695__$1,inst_18692);
} else {
if((state_val_18696 === (12))){
var inst_18669 = (state_18695[(2)]);
var state_18695__$1 = state_18695;
var statearr_18721_20270 = state_18695__$1;
(statearr_18721_20270[(2)] = inst_18669);

(statearr_18721_20270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (2))){
var state_18695__$1 = state_18695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18695__$1,(4),ch);
} else {
if((state_val_18696 === (23))){
var state_18695__$1 = state_18695;
var statearr_18722_20271 = state_18695__$1;
(statearr_18722_20271[(2)] = null);

(statearr_18722_20271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (19))){
var inst_18675 = (state_18695[(11)]);
var inst_18624 = (state_18695[(8)]);
var inst_18677 = cljs.core.async.muxch_STAR_(inst_18675);
var state_18695__$1 = state_18695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18695__$1,(22),inst_18677,inst_18624);
} else {
if((state_val_18696 === (11))){
var inst_18649 = (state_18695[(10)]);
var inst_18634 = (state_18695[(16)]);
var inst_18649__$1 = cljs.core.seq(inst_18634);
var state_18695__$1 = (function (){var statearr_18723 = state_18695;
(statearr_18723[(10)] = inst_18649__$1);

return statearr_18723;
})();
if(inst_18649__$1){
var statearr_18724_20272 = state_18695__$1;
(statearr_18724_20272[(1)] = (13));

} else {
var statearr_18725_20273 = state_18695__$1;
(statearr_18725_20273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (9))){
var inst_18671 = (state_18695[(2)]);
var state_18695__$1 = state_18695;
var statearr_18727_20274 = state_18695__$1;
(statearr_18727_20274[(2)] = inst_18671);

(statearr_18727_20274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (5))){
var inst_18631 = cljs.core.deref(mults);
var inst_18632 = cljs.core.vals(inst_18631);
var inst_18633 = cljs.core.seq(inst_18632);
var inst_18634 = inst_18633;
var inst_18635 = null;
var inst_18636 = (0);
var inst_18637 = (0);
var state_18695__$1 = (function (){var statearr_18728 = state_18695;
(statearr_18728[(12)] = inst_18637);

(statearr_18728[(14)] = inst_18635);

(statearr_18728[(15)] = inst_18636);

(statearr_18728[(16)] = inst_18634);

return statearr_18728;
})();
var statearr_18729_20276 = state_18695__$1;
(statearr_18729_20276[(2)] = null);

(statearr_18729_20276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (14))){
var state_18695__$1 = state_18695;
var statearr_18733_20277 = state_18695__$1;
(statearr_18733_20277[(2)] = null);

(statearr_18733_20277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (16))){
var inst_18649 = (state_18695[(10)]);
var inst_18653 = cljs.core.chunk_first(inst_18649);
var inst_18654 = cljs.core.chunk_rest(inst_18649);
var inst_18655 = cljs.core.count(inst_18653);
var inst_18634 = inst_18654;
var inst_18635 = inst_18653;
var inst_18636 = inst_18655;
var inst_18637 = (0);
var state_18695__$1 = (function (){var statearr_18734 = state_18695;
(statearr_18734[(12)] = inst_18637);

(statearr_18734[(14)] = inst_18635);

(statearr_18734[(15)] = inst_18636);

(statearr_18734[(16)] = inst_18634);

return statearr_18734;
})();
var statearr_18736_20278 = state_18695__$1;
(statearr_18736_20278[(2)] = null);

(statearr_18736_20278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (10))){
var inst_18637 = (state_18695[(12)]);
var inst_18635 = (state_18695[(14)]);
var inst_18636 = (state_18695[(15)]);
var inst_18634 = (state_18695[(16)]);
var inst_18643 = cljs.core._nth(inst_18635,inst_18637);
var inst_18644 = cljs.core.async.muxch_STAR_(inst_18643);
var inst_18645 = cljs.core.async.close_BANG_(inst_18644);
var inst_18646 = (inst_18637 + (1));
var tmp18730 = inst_18635;
var tmp18731 = inst_18636;
var tmp18732 = inst_18634;
var inst_18634__$1 = tmp18732;
var inst_18635__$1 = tmp18730;
var inst_18636__$1 = tmp18731;
var inst_18637__$1 = inst_18646;
var state_18695__$1 = (function (){var statearr_18737 = state_18695;
(statearr_18737[(12)] = inst_18637__$1);

(statearr_18737[(14)] = inst_18635__$1);

(statearr_18737[(15)] = inst_18636__$1);

(statearr_18737[(17)] = inst_18645);

(statearr_18737[(16)] = inst_18634__$1);

return statearr_18737;
})();
var statearr_18738_20279 = state_18695__$1;
(statearr_18738_20279[(2)] = null);

(statearr_18738_20279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (18))){
var inst_18664 = (state_18695[(2)]);
var state_18695__$1 = state_18695;
var statearr_18739_20280 = state_18695__$1;
(statearr_18739_20280[(2)] = inst_18664);

(statearr_18739_20280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18696 === (8))){
var inst_18637 = (state_18695[(12)]);
var inst_18636 = (state_18695[(15)]);
var inst_18639 = (inst_18637 < inst_18636);
var inst_18640 = inst_18639;
var state_18695__$1 = state_18695;
if(cljs.core.truth_(inst_18640)){
var statearr_18742_20281 = state_18695__$1;
(statearr_18742_20281[(1)] = (10));

} else {
var statearr_18743_20282 = state_18695__$1;
(statearr_18743_20282[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18744[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18744[(1)] = (1));

return statearr_18744;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18695){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18695);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18745){var ex__17283__auto__ = e18745;
var statearr_18746_20283 = state_18695;
(statearr_18746_20283[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18695[(4)]))){
var statearr_18747_20284 = state_18695;
(statearr_18747_20284[(1)] = cljs.core.first((state_18695[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20285 = state_18695;
state_18695 = G__20285;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_18748 = f__17440__auto__();
(statearr_18748[(6)] = c__17439__auto___20220);

return statearr_18748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18752 = arguments.length;
switch (G__18752) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__18754 = arguments.length;
switch (G__18754) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__18756 = arguments.length;
switch (G__18756) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17439__auto___20300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_18801){
var state_val_18802 = (state_18801[(1)]);
if((state_val_18802 === (7))){
var state_18801__$1 = state_18801;
var statearr_18803_20302 = state_18801__$1;
(statearr_18803_20302[(2)] = null);

(statearr_18803_20302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (1))){
var state_18801__$1 = state_18801;
var statearr_18804_20303 = state_18801__$1;
(statearr_18804_20303[(2)] = null);

(statearr_18804_20303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (4))){
var inst_18761 = (state_18801[(7)]);
var inst_18762 = (state_18801[(8)]);
var inst_18764 = (inst_18762 < inst_18761);
var state_18801__$1 = state_18801;
if(cljs.core.truth_(inst_18764)){
var statearr_18805_20305 = state_18801__$1;
(statearr_18805_20305[(1)] = (6));

} else {
var statearr_18806_20306 = state_18801__$1;
(statearr_18806_20306[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (15))){
var inst_18787 = (state_18801[(9)]);
var inst_18792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18787);
var state_18801__$1 = state_18801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18801__$1,(17),out,inst_18792);
} else {
if((state_val_18802 === (13))){
var inst_18787 = (state_18801[(9)]);
var inst_18787__$1 = (state_18801[(2)]);
var inst_18788 = cljs.core.some(cljs.core.nil_QMARK_,inst_18787__$1);
var state_18801__$1 = (function (){var statearr_18807 = state_18801;
(statearr_18807[(9)] = inst_18787__$1);

return statearr_18807;
})();
if(cljs.core.truth_(inst_18788)){
var statearr_18808_20317 = state_18801__$1;
(statearr_18808_20317[(1)] = (14));

} else {
var statearr_18809_20318 = state_18801__$1;
(statearr_18809_20318[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (6))){
var state_18801__$1 = state_18801;
var statearr_18810_20319 = state_18801__$1;
(statearr_18810_20319[(2)] = null);

(statearr_18810_20319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (17))){
var inst_18794 = (state_18801[(2)]);
var state_18801__$1 = (function (){var statearr_18815 = state_18801;
(statearr_18815[(10)] = inst_18794);

return statearr_18815;
})();
var statearr_18816_20320 = state_18801__$1;
(statearr_18816_20320[(2)] = null);

(statearr_18816_20320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (3))){
var inst_18799 = (state_18801[(2)]);
var state_18801__$1 = state_18801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18801__$1,inst_18799);
} else {
if((state_val_18802 === (12))){
var _ = (function (){var statearr_18819 = state_18801;
(statearr_18819[(4)] = cljs.core.rest((state_18801[(4)])));

return statearr_18819;
})();
var state_18801__$1 = state_18801;
var ex18814 = (state_18801__$1[(2)]);
var statearr_18821_20322 = state_18801__$1;
(statearr_18821_20322[(5)] = ex18814);


if((ex18814 instanceof Object)){
var statearr_18825_20323 = state_18801__$1;
(statearr_18825_20323[(1)] = (11));

(statearr_18825_20323[(5)] = null);

} else {
throw ex18814;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (2))){
var inst_18760 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18761 = cnt;
var inst_18762 = (0);
var state_18801__$1 = (function (){var statearr_18826 = state_18801;
(statearr_18826[(11)] = inst_18760);

(statearr_18826[(7)] = inst_18761);

(statearr_18826[(8)] = inst_18762);

return statearr_18826;
})();
var statearr_18827_20325 = state_18801__$1;
(statearr_18827_20325[(2)] = null);

(statearr_18827_20325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (11))){
var inst_18766 = (state_18801[(2)]);
var inst_18767 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18801__$1 = (function (){var statearr_18828 = state_18801;
(statearr_18828[(12)] = inst_18766);

return statearr_18828;
})();
var statearr_18830_20326 = state_18801__$1;
(statearr_18830_20326[(2)] = inst_18767);

(statearr_18830_20326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (9))){
var inst_18762 = (state_18801[(8)]);
var _ = (function (){var statearr_18831 = state_18801;
(statearr_18831[(4)] = cljs.core.cons((12),(state_18801[(4)])));

return statearr_18831;
})();
var inst_18773 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18762) : chs__$1.call(null,inst_18762));
var inst_18774 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18762) : done.call(null,inst_18762));
var inst_18775 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18773,inst_18774);
var ___$1 = (function (){var statearr_18835 = state_18801;
(statearr_18835[(4)] = cljs.core.rest((state_18801[(4)])));

return statearr_18835;
})();
var state_18801__$1 = state_18801;
var statearr_18836_20327 = state_18801__$1;
(statearr_18836_20327[(2)] = inst_18775);

(statearr_18836_20327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (5))){
var inst_18785 = (state_18801[(2)]);
var state_18801__$1 = (function (){var statearr_18838 = state_18801;
(statearr_18838[(13)] = inst_18785);

return statearr_18838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18801__$1,(13),dchan);
} else {
if((state_val_18802 === (14))){
var inst_18790 = cljs.core.async.close_BANG_(out);
var state_18801__$1 = state_18801;
var statearr_18841_20328 = state_18801__$1;
(statearr_18841_20328[(2)] = inst_18790);

(statearr_18841_20328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (16))){
var inst_18797 = (state_18801[(2)]);
var state_18801__$1 = state_18801;
var statearr_18843_20329 = state_18801__$1;
(statearr_18843_20329[(2)] = inst_18797);

(statearr_18843_20329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (10))){
var inst_18762 = (state_18801[(8)]);
var inst_18778 = (state_18801[(2)]);
var inst_18779 = (inst_18762 + (1));
var inst_18762__$1 = inst_18779;
var state_18801__$1 = (function (){var statearr_18845 = state_18801;
(statearr_18845[(8)] = inst_18762__$1);

(statearr_18845[(14)] = inst_18778);

return statearr_18845;
})();
var statearr_18846_20330 = state_18801__$1;
(statearr_18846_20330[(2)] = null);

(statearr_18846_20330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18802 === (8))){
var inst_18783 = (state_18801[(2)]);
var state_18801__$1 = state_18801;
var statearr_18850_20331 = state_18801__$1;
(statearr_18850_20331[(2)] = inst_18783);

(statearr_18850_20331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18852[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18852[(1)] = (1));

return statearr_18852;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18801){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18801);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18855){var ex__17283__auto__ = e18855;
var statearr_18856_20332 = state_18801;
(statearr_18856_20332[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18801[(4)]))){
var statearr_18858_20333 = state_18801;
(statearr_18858_20333[(1)] = cljs.core.first((state_18801[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20334 = state_18801;
state_18801 = G__20334;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_18860 = f__17440__auto__();
(statearr_18860[(6)] = c__17439__auto___20300);

return statearr_18860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18867 = arguments.length;
switch (G__18867) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17439__auto___20336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_18910){
var state_val_18911 = (state_18910[(1)]);
if((state_val_18911 === (7))){
var inst_18885 = (state_18910[(7)]);
var inst_18886 = (state_18910[(8)]);
var inst_18885__$1 = (state_18910[(2)]);
var inst_18886__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18885__$1,(0),null);
var inst_18887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18885__$1,(1),null);
var inst_18888 = (inst_18886__$1 == null);
var state_18910__$1 = (function (){var statearr_18916 = state_18910;
(statearr_18916[(7)] = inst_18885__$1);

(statearr_18916[(8)] = inst_18886__$1);

(statearr_18916[(9)] = inst_18887);

return statearr_18916;
})();
if(cljs.core.truth_(inst_18888)){
var statearr_18917_20337 = state_18910__$1;
(statearr_18917_20337[(1)] = (8));

} else {
var statearr_18919_20338 = state_18910__$1;
(statearr_18919_20338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18911 === (1))){
var inst_18874 = cljs.core.vec(chs);
var inst_18875 = inst_18874;
var state_18910__$1 = (function (){var statearr_18920 = state_18910;
(statearr_18920[(10)] = inst_18875);

return statearr_18920;
})();
var statearr_18922_20343 = state_18910__$1;
(statearr_18922_20343[(2)] = null);

(statearr_18922_20343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18911 === (4))){
var inst_18875 = (state_18910[(10)]);
var state_18910__$1 = state_18910;
return cljs.core.async.ioc_alts_BANG_(state_18910__$1,(7),inst_18875);
} else {
if((state_val_18911 === (6))){
var inst_18903 = (state_18910[(2)]);
var state_18910__$1 = state_18910;
var statearr_18926_20345 = state_18910__$1;
(statearr_18926_20345[(2)] = inst_18903);

(statearr_18926_20345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18911 === (3))){
var inst_18905 = (state_18910[(2)]);
var state_18910__$1 = state_18910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18910__$1,inst_18905);
} else {
if((state_val_18911 === (2))){
var inst_18875 = (state_18910[(10)]);
var inst_18878 = cljs.core.count(inst_18875);
var inst_18879 = (inst_18878 > (0));
var state_18910__$1 = state_18910;
if(cljs.core.truth_(inst_18879)){
var statearr_18931_20353 = state_18910__$1;
(statearr_18931_20353[(1)] = (4));

} else {
var statearr_18932_20355 = state_18910__$1;
(statearr_18932_20355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18911 === (11))){
var inst_18875 = (state_18910[(10)]);
var inst_18896 = (state_18910[(2)]);
var tmp18927 = inst_18875;
var inst_18875__$1 = tmp18927;
var state_18910__$1 = (function (){var statearr_18934 = state_18910;
(statearr_18934[(11)] = inst_18896);

(statearr_18934[(10)] = inst_18875__$1);

return statearr_18934;
})();
var statearr_18935_20356 = state_18910__$1;
(statearr_18935_20356[(2)] = null);

(statearr_18935_20356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18911 === (9))){
var inst_18886 = (state_18910[(8)]);
var state_18910__$1 = state_18910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18910__$1,(11),out,inst_18886);
} else {
if((state_val_18911 === (5))){
var inst_18901 = cljs.core.async.close_BANG_(out);
var state_18910__$1 = state_18910;
var statearr_18943_20357 = state_18910__$1;
(statearr_18943_20357[(2)] = inst_18901);

(statearr_18943_20357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18911 === (10))){
var inst_18899 = (state_18910[(2)]);
var state_18910__$1 = state_18910;
var statearr_18944_20361 = state_18910__$1;
(statearr_18944_20361[(2)] = inst_18899);

(statearr_18944_20361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18911 === (8))){
var inst_18875 = (state_18910[(10)]);
var inst_18885 = (state_18910[(7)]);
var inst_18886 = (state_18910[(8)]);
var inst_18887 = (state_18910[(9)]);
var inst_18891 = (function (){var cs = inst_18875;
var vec__18881 = inst_18885;
var v = inst_18886;
var c = inst_18887;
return (function (p1__18864_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18864_SHARP_);
});
})();
var inst_18892 = cljs.core.filterv(inst_18891,inst_18875);
var inst_18875__$1 = inst_18892;
var state_18910__$1 = (function (){var statearr_18949 = state_18910;
(statearr_18949[(10)] = inst_18875__$1);

return statearr_18949;
})();
var statearr_18950_20362 = state_18910__$1;
(statearr_18950_20362[(2)] = null);

(statearr_18950_20362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18952[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18952[(1)] = (1));

return statearr_18952;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18910){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18910);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18955){var ex__17283__auto__ = e18955;
var statearr_18956_20375 = state_18910;
(statearr_18956_20375[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18910[(4)]))){
var statearr_18958_20376 = state_18910;
(statearr_18958_20376[(1)] = cljs.core.first((state_18910[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20377 = state_18910;
state_18910 = G__20377;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_18960 = f__17440__auto__();
(statearr_18960[(6)] = c__17439__auto___20336);

return statearr_18960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__18969 = arguments.length;
switch (G__18969) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17439__auto___20383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_18999){
var state_val_19001 = (state_18999[(1)]);
if((state_val_19001 === (7))){
var inst_18980 = (state_18999[(7)]);
var inst_18980__$1 = (state_18999[(2)]);
var inst_18981 = (inst_18980__$1 == null);
var inst_18982 = cljs.core.not(inst_18981);
var state_18999__$1 = (function (){var statearr_19004 = state_18999;
(statearr_19004[(7)] = inst_18980__$1);

return statearr_19004;
})();
if(inst_18982){
var statearr_19007_20385 = state_18999__$1;
(statearr_19007_20385[(1)] = (8));

} else {
var statearr_19009_20386 = state_18999__$1;
(statearr_19009_20386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (1))){
var inst_18974 = (0);
var state_18999__$1 = (function (){var statearr_19010 = state_18999;
(statearr_19010[(8)] = inst_18974);

return statearr_19010;
})();
var statearr_19011_20387 = state_18999__$1;
(statearr_19011_20387[(2)] = null);

(statearr_19011_20387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (4))){
var state_18999__$1 = state_18999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18999__$1,(7),ch);
} else {
if((state_val_19001 === (6))){
var inst_18993 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19015_20388 = state_18999__$1;
(statearr_19015_20388[(2)] = inst_18993);

(statearr_19015_20388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (3))){
var inst_18995 = (state_18999[(2)]);
var inst_18996 = cljs.core.async.close_BANG_(out);
var state_18999__$1 = (function (){var statearr_19017 = state_18999;
(statearr_19017[(9)] = inst_18995);

return statearr_19017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18999__$1,inst_18996);
} else {
if((state_val_19001 === (2))){
var inst_18974 = (state_18999[(8)]);
var inst_18976 = (inst_18974 < n);
var state_18999__$1 = state_18999;
if(cljs.core.truth_(inst_18976)){
var statearr_19019_20398 = state_18999__$1;
(statearr_19019_20398[(1)] = (4));

} else {
var statearr_19022_20399 = state_18999__$1;
(statearr_19022_20399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (11))){
var inst_18974 = (state_18999[(8)]);
var inst_18985 = (state_18999[(2)]);
var inst_18986 = (inst_18974 + (1));
var inst_18974__$1 = inst_18986;
var state_18999__$1 = (function (){var statearr_19024 = state_18999;
(statearr_19024[(8)] = inst_18974__$1);

(statearr_19024[(10)] = inst_18985);

return statearr_19024;
})();
var statearr_19026_20406 = state_18999__$1;
(statearr_19026_20406[(2)] = null);

(statearr_19026_20406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (9))){
var state_18999__$1 = state_18999;
var statearr_19027_20407 = state_18999__$1;
(statearr_19027_20407[(2)] = null);

(statearr_19027_20407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (5))){
var state_18999__$1 = state_18999;
var statearr_19031_20408 = state_18999__$1;
(statearr_19031_20408[(2)] = null);

(statearr_19031_20408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (10))){
var inst_18990 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19032_20409 = state_18999__$1;
(statearr_19032_20409[(2)] = inst_18990);

(statearr_19032_20409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19001 === (8))){
var inst_18980 = (state_18999[(7)]);
var state_18999__$1 = state_18999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18999__$1,(11),out,inst_18980);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19037[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19037[(1)] = (1));

return statearr_19037;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18999){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18999);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19038){var ex__17283__auto__ = e19038;
var statearr_19039_20412 = state_18999;
(statearr_19039_20412[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18999[(4)]))){
var statearr_19041_20413 = state_18999;
(statearr_19041_20413[(1)] = cljs.core.first((state_18999[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20414 = state_18999;
state_18999 = G__20414;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_19045 = f__17440__auto__();
(statearr_19045[(6)] = c__17439__auto___20383);

return statearr_19045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19051 = (function (f,ch,meta19052){
this.f = f;
this.ch = ch;
this.meta19052 = meta19052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19053,meta19052__$1){
var self__ = this;
var _19053__$1 = this;
return (new cljs.core.async.t_cljs$core$async19051(self__.f,self__.ch,meta19052__$1));
}));

(cljs.core.async.t_cljs$core$async19051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19053){
var self__ = this;
var _19053__$1 = this;
return self__.meta19052;
}));

(cljs.core.async.t_cljs$core$async19051.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19051.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19051.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19063 = (function (f,ch,meta19052,_,fn1,meta19064){
this.f = f;
this.ch = ch;
this.meta19052 = meta19052;
this._ = _;
this.fn1 = fn1;
this.meta19064 = meta19064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19065,meta19064__$1){
var self__ = this;
var _19065__$1 = this;
return (new cljs.core.async.t_cljs$core$async19063(self__.f,self__.ch,self__.meta19052,self__._,self__.fn1,meta19064__$1));
}));

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19065){
var self__ = this;
var _19065__$1 = this;
return self__.meta19064;
}));

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19047_SHARP_){
var G__19068 = (((p1__19047_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19047_SHARP_) : self__.f.call(null,p1__19047_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19068) : f1.call(null,G__19068));
});
}));

(cljs.core.async.t_cljs$core$async19063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19052","meta19052",-581726487,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19051","cljs.core.async/t_cljs$core$async19051",-1649647504,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19064","meta19064",1869211836,null)], null);
}));

(cljs.core.async.t_cljs$core$async19063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19063");

(cljs.core.async.t_cljs$core$async19063.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19063.
 */
cljs.core.async.__GT_t_cljs$core$async19063 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19063(f__$1,ch__$1,meta19052__$1,___$2,fn1__$1,meta19064){
return (new cljs.core.async.t_cljs$core$async19063(f__$1,ch__$1,meta19052__$1,___$2,fn1__$1,meta19064));
});

}

return (new cljs.core.async.t_cljs$core$async19063(self__.f,self__.ch,self__.meta19052,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19072 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19072) : self__.f.call(null,G__19072));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19051.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19052","meta19052",-581726487,null)], null);
}));

(cljs.core.async.t_cljs$core$async19051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19051");

(cljs.core.async.t_cljs$core$async19051.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19051.
 */
cljs.core.async.__GT_t_cljs$core$async19051 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19051(f__$1,ch__$1,meta19052){
return (new cljs.core.async.t_cljs$core$async19051(f__$1,ch__$1,meta19052));
});

}

return (new cljs.core.async.t_cljs$core$async19051(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19078 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19078 = (function (f,ch,meta19079){
this.f = f;
this.ch = ch;
this.meta19079 = meta19079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19080,meta19079__$1){
var self__ = this;
var _19080__$1 = this;
return (new cljs.core.async.t_cljs$core$async19078(self__.f,self__.ch,meta19079__$1));
}));

(cljs.core.async.t_cljs$core$async19078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19080){
var self__ = this;
var _19080__$1 = this;
return self__.meta19079;
}));

(cljs.core.async.t_cljs$core$async19078.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19078.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19078.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19079","meta19079",-1200118017,null)], null);
}));

(cljs.core.async.t_cljs$core$async19078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19078");

(cljs.core.async.t_cljs$core$async19078.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19078.
 */
cljs.core.async.__GT_t_cljs$core$async19078 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19078(f__$1,ch__$1,meta19079){
return (new cljs.core.async.t_cljs$core$async19078(f__$1,ch__$1,meta19079));
});

}

return (new cljs.core.async.t_cljs$core$async19078(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19092 = (function (p,ch,meta19093){
this.p = p;
this.ch = ch;
this.meta19093 = meta19093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19094,meta19093__$1){
var self__ = this;
var _19094__$1 = this;
return (new cljs.core.async.t_cljs$core$async19092(self__.p,self__.ch,meta19093__$1));
}));

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19094){
var self__ = this;
var _19094__$1 = this;
return self__.meta19093;
}));

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19093","meta19093",928102474,null)], null);
}));

(cljs.core.async.t_cljs$core$async19092.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19092");

(cljs.core.async.t_cljs$core$async19092.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19092");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19092.
 */
cljs.core.async.__GT_t_cljs$core$async19092 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19092(p__$1,ch__$1,meta19093){
return (new cljs.core.async.t_cljs$core$async19092(p__$1,ch__$1,meta19093));
});

}

return (new cljs.core.async.t_cljs$core$async19092(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19118 = arguments.length;
switch (G__19118) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17439__auto___20467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_19149){
var state_val_19150 = (state_19149[(1)]);
if((state_val_19150 === (7))){
var inst_19144 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19154_20471 = state_19149__$1;
(statearr_19154_20471[(2)] = inst_19144);

(statearr_19154_20471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (1))){
var state_19149__$1 = state_19149;
var statearr_19156_20474 = state_19149__$1;
(statearr_19156_20474[(2)] = null);

(statearr_19156_20474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (4))){
var inst_19130 = (state_19149[(7)]);
var inst_19130__$1 = (state_19149[(2)]);
var inst_19131 = (inst_19130__$1 == null);
var state_19149__$1 = (function (){var statearr_19159 = state_19149;
(statearr_19159[(7)] = inst_19130__$1);

return statearr_19159;
})();
if(cljs.core.truth_(inst_19131)){
var statearr_19161_20475 = state_19149__$1;
(statearr_19161_20475[(1)] = (5));

} else {
var statearr_19162_20476 = state_19149__$1;
(statearr_19162_20476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (6))){
var inst_19130 = (state_19149[(7)]);
var inst_19135 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19130) : p.call(null,inst_19130));
var state_19149__$1 = state_19149;
if(cljs.core.truth_(inst_19135)){
var statearr_19164_20477 = state_19149__$1;
(statearr_19164_20477[(1)] = (8));

} else {
var statearr_19166_20478 = state_19149__$1;
(statearr_19166_20478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (3))){
var inst_19146 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19149__$1,inst_19146);
} else {
if((state_val_19150 === (2))){
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19149__$1,(4),ch);
} else {
if((state_val_19150 === (11))){
var inst_19138 = (state_19149[(2)]);
var state_19149__$1 = state_19149;
var statearr_19168_20480 = state_19149__$1;
(statearr_19168_20480[(2)] = inst_19138);

(statearr_19168_20480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (9))){
var state_19149__$1 = state_19149;
var statearr_19169_20484 = state_19149__$1;
(statearr_19169_20484[(2)] = null);

(statearr_19169_20484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (5))){
var inst_19133 = cljs.core.async.close_BANG_(out);
var state_19149__$1 = state_19149;
var statearr_19170_20485 = state_19149__$1;
(statearr_19170_20485[(2)] = inst_19133);

(statearr_19170_20485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (10))){
var inst_19141 = (state_19149[(2)]);
var state_19149__$1 = (function (){var statearr_19171 = state_19149;
(statearr_19171[(8)] = inst_19141);

return statearr_19171;
})();
var statearr_19172_20487 = state_19149__$1;
(statearr_19172_20487[(2)] = null);

(statearr_19172_20487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19150 === (8))){
var inst_19130 = (state_19149[(7)]);
var state_19149__$1 = state_19149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19149__$1,(11),out,inst_19130);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19173 = [null,null,null,null,null,null,null,null,null];
(statearr_19173[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19173[(1)] = (1));

return statearr_19173;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19149){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19149);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19174){var ex__17283__auto__ = e19174;
var statearr_19175_20490 = state_19149;
(statearr_19175_20490[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19149[(4)]))){
var statearr_19176_20491 = state_19149;
(statearr_19176_20491[(1)] = cljs.core.first((state_19149[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20492 = state_19149;
state_19149 = G__20492;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_19177 = f__17440__auto__();
(statearr_19177[(6)] = c__17439__auto___20467);

return statearr_19177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19180 = arguments.length;
switch (G__19180) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_19243){
var state_val_19244 = (state_19243[(1)]);
if((state_val_19244 === (7))){
var inst_19239 = (state_19243[(2)]);
var state_19243__$1 = state_19243;
var statearr_19245_20502 = state_19243__$1;
(statearr_19245_20502[(2)] = inst_19239);

(statearr_19245_20502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (20))){
var inst_19209 = (state_19243[(7)]);
var inst_19220 = (state_19243[(2)]);
var inst_19221 = cljs.core.next(inst_19209);
var inst_19195 = inst_19221;
var inst_19196 = null;
var inst_19197 = (0);
var inst_19198 = (0);
var state_19243__$1 = (function (){var statearr_19246 = state_19243;
(statearr_19246[(8)] = inst_19197);

(statearr_19246[(9)] = inst_19195);

(statearr_19246[(10)] = inst_19198);

(statearr_19246[(11)] = inst_19196);

(statearr_19246[(12)] = inst_19220);

return statearr_19246;
})();
var statearr_19247_20505 = state_19243__$1;
(statearr_19247_20505[(2)] = null);

(statearr_19247_20505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (1))){
var state_19243__$1 = state_19243;
var statearr_19248_20507 = state_19243__$1;
(statearr_19248_20507[(2)] = null);

(statearr_19248_20507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (4))){
var inst_19184 = (state_19243[(13)]);
var inst_19184__$1 = (state_19243[(2)]);
var inst_19185 = (inst_19184__$1 == null);
var state_19243__$1 = (function (){var statearr_19249 = state_19243;
(statearr_19249[(13)] = inst_19184__$1);

return statearr_19249;
})();
if(cljs.core.truth_(inst_19185)){
var statearr_19250_20508 = state_19243__$1;
(statearr_19250_20508[(1)] = (5));

} else {
var statearr_19251_20509 = state_19243__$1;
(statearr_19251_20509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (15))){
var state_19243__$1 = state_19243;
var statearr_19255_20510 = state_19243__$1;
(statearr_19255_20510[(2)] = null);

(statearr_19255_20510[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (21))){
var state_19243__$1 = state_19243;
var statearr_19256_20511 = state_19243__$1;
(statearr_19256_20511[(2)] = null);

(statearr_19256_20511[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (13))){
var inst_19197 = (state_19243[(8)]);
var inst_19195 = (state_19243[(9)]);
var inst_19198 = (state_19243[(10)]);
var inst_19196 = (state_19243[(11)]);
var inst_19205 = (state_19243[(2)]);
var inst_19206 = (inst_19198 + (1));
var tmp19252 = inst_19197;
var tmp19253 = inst_19195;
var tmp19254 = inst_19196;
var inst_19195__$1 = tmp19253;
var inst_19196__$1 = tmp19254;
var inst_19197__$1 = tmp19252;
var inst_19198__$1 = inst_19206;
var state_19243__$1 = (function (){var statearr_19257 = state_19243;
(statearr_19257[(8)] = inst_19197__$1);

(statearr_19257[(9)] = inst_19195__$1);

(statearr_19257[(10)] = inst_19198__$1);

(statearr_19257[(11)] = inst_19196__$1);

(statearr_19257[(14)] = inst_19205);

return statearr_19257;
})();
var statearr_19258_20514 = state_19243__$1;
(statearr_19258_20514[(2)] = null);

(statearr_19258_20514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (22))){
var state_19243__$1 = state_19243;
var statearr_19259_20517 = state_19243__$1;
(statearr_19259_20517[(2)] = null);

(statearr_19259_20517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (6))){
var inst_19184 = (state_19243[(13)]);
var inst_19193 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19184) : f.call(null,inst_19184));
var inst_19194 = cljs.core.seq(inst_19193);
var inst_19195 = inst_19194;
var inst_19196 = null;
var inst_19197 = (0);
var inst_19198 = (0);
var state_19243__$1 = (function (){var statearr_19260 = state_19243;
(statearr_19260[(8)] = inst_19197);

(statearr_19260[(9)] = inst_19195);

(statearr_19260[(10)] = inst_19198);

(statearr_19260[(11)] = inst_19196);

return statearr_19260;
})();
var statearr_19261_20524 = state_19243__$1;
(statearr_19261_20524[(2)] = null);

(statearr_19261_20524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (17))){
var inst_19209 = (state_19243[(7)]);
var inst_19213 = cljs.core.chunk_first(inst_19209);
var inst_19214 = cljs.core.chunk_rest(inst_19209);
var inst_19215 = cljs.core.count(inst_19213);
var inst_19195 = inst_19214;
var inst_19196 = inst_19213;
var inst_19197 = inst_19215;
var inst_19198 = (0);
var state_19243__$1 = (function (){var statearr_19262 = state_19243;
(statearr_19262[(8)] = inst_19197);

(statearr_19262[(9)] = inst_19195);

(statearr_19262[(10)] = inst_19198);

(statearr_19262[(11)] = inst_19196);

return statearr_19262;
})();
var statearr_19263_20526 = state_19243__$1;
(statearr_19263_20526[(2)] = null);

(statearr_19263_20526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (3))){
var inst_19241 = (state_19243[(2)]);
var state_19243__$1 = state_19243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19243__$1,inst_19241);
} else {
if((state_val_19244 === (12))){
var inst_19229 = (state_19243[(2)]);
var state_19243__$1 = state_19243;
var statearr_19264_20529 = state_19243__$1;
(statearr_19264_20529[(2)] = inst_19229);

(statearr_19264_20529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (2))){
var state_19243__$1 = state_19243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19243__$1,(4),in$);
} else {
if((state_val_19244 === (23))){
var inst_19237 = (state_19243[(2)]);
var state_19243__$1 = state_19243;
var statearr_19265_20533 = state_19243__$1;
(statearr_19265_20533[(2)] = inst_19237);

(statearr_19265_20533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (19))){
var inst_19224 = (state_19243[(2)]);
var state_19243__$1 = state_19243;
var statearr_19266_20535 = state_19243__$1;
(statearr_19266_20535[(2)] = inst_19224);

(statearr_19266_20535[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (11))){
var inst_19195 = (state_19243[(9)]);
var inst_19209 = (state_19243[(7)]);
var inst_19209__$1 = cljs.core.seq(inst_19195);
var state_19243__$1 = (function (){var statearr_19267 = state_19243;
(statearr_19267[(7)] = inst_19209__$1);

return statearr_19267;
})();
if(inst_19209__$1){
var statearr_19268_20537 = state_19243__$1;
(statearr_19268_20537[(1)] = (14));

} else {
var statearr_19269_20538 = state_19243__$1;
(statearr_19269_20538[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (9))){
var inst_19231 = (state_19243[(2)]);
var inst_19232 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19243__$1 = (function (){var statearr_19270 = state_19243;
(statearr_19270[(15)] = inst_19231);

return statearr_19270;
})();
if(cljs.core.truth_(inst_19232)){
var statearr_19271_20539 = state_19243__$1;
(statearr_19271_20539[(1)] = (21));

} else {
var statearr_19272_20540 = state_19243__$1;
(statearr_19272_20540[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (5))){
var inst_19187 = cljs.core.async.close_BANG_(out);
var state_19243__$1 = state_19243;
var statearr_19273_20541 = state_19243__$1;
(statearr_19273_20541[(2)] = inst_19187);

(statearr_19273_20541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (14))){
var inst_19209 = (state_19243[(7)]);
var inst_19211 = cljs.core.chunked_seq_QMARK_(inst_19209);
var state_19243__$1 = state_19243;
if(inst_19211){
var statearr_19274_20542 = state_19243__$1;
(statearr_19274_20542[(1)] = (17));

} else {
var statearr_19275_20543 = state_19243__$1;
(statearr_19275_20543[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (16))){
var inst_19227 = (state_19243[(2)]);
var state_19243__$1 = state_19243;
var statearr_19276_20544 = state_19243__$1;
(statearr_19276_20544[(2)] = inst_19227);

(statearr_19276_20544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19244 === (10))){
var inst_19198 = (state_19243[(10)]);
var inst_19196 = (state_19243[(11)]);
var inst_19203 = cljs.core._nth(inst_19196,inst_19198);
var state_19243__$1 = state_19243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19243__$1,(13),out,inst_19203);
} else {
if((state_val_19244 === (18))){
var inst_19209 = (state_19243[(7)]);
var inst_19218 = cljs.core.first(inst_19209);
var state_19243__$1 = state_19243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19243__$1,(20),out,inst_19218);
} else {
if((state_val_19244 === (8))){
var inst_19197 = (state_19243[(8)]);
var inst_19198 = (state_19243[(10)]);
var inst_19200 = (inst_19198 < inst_19197);
var inst_19201 = inst_19200;
var state_19243__$1 = state_19243;
if(cljs.core.truth_(inst_19201)){
var statearr_19277_20545 = state_19243__$1;
(statearr_19277_20545[(1)] = (10));

} else {
var statearr_19278_20546 = state_19243__$1;
(statearr_19278_20546[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_19279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19279[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__);

(statearr_19279[(1)] = (1));

return statearr_19279;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____1 = (function (state_19243){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19243);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19280){var ex__17283__auto__ = e19280;
var statearr_19282_20551 = state_19243;
(statearr_19282_20551[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19243[(4)]))){
var statearr_19284_20552 = state_19243;
(statearr_19284_20552[(1)] = cljs.core.first((state_19243[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20553 = state_19243;
state_19243 = G__20553;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__ = function(state_19243){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____1.call(this,state_19243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_19285 = f__17440__auto__();
(statearr_19285[(6)] = c__17439__auto__);

return statearr_19285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));

return c__17439__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19287 = arguments.length;
switch (G__19287) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19297 = arguments.length;
switch (G__19297) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19300 = arguments.length;
switch (G__19300) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17439__auto___20568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_19339){
var state_val_19340 = (state_19339[(1)]);
if((state_val_19340 === (7))){
var inst_19331 = (state_19339[(2)]);
var state_19339__$1 = state_19339;
var statearr_19342_20572 = state_19339__$1;
(statearr_19342_20572[(2)] = inst_19331);

(statearr_19342_20572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (1))){
var inst_19312 = null;
var state_19339__$1 = (function (){var statearr_19346 = state_19339;
(statearr_19346[(7)] = inst_19312);

return statearr_19346;
})();
var statearr_19348_20573 = state_19339__$1;
(statearr_19348_20573[(2)] = null);

(statearr_19348_20573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (4))){
var inst_19316 = (state_19339[(8)]);
var inst_19316__$1 = (state_19339[(2)]);
var inst_19317 = (inst_19316__$1 == null);
var inst_19318 = cljs.core.not(inst_19317);
var state_19339__$1 = (function (){var statearr_19349 = state_19339;
(statearr_19349[(8)] = inst_19316__$1);

return statearr_19349;
})();
if(inst_19318){
var statearr_19350_20574 = state_19339__$1;
(statearr_19350_20574[(1)] = (5));

} else {
var statearr_19351_20575 = state_19339__$1;
(statearr_19351_20575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (6))){
var state_19339__$1 = state_19339;
var statearr_19353_20582 = state_19339__$1;
(statearr_19353_20582[(2)] = null);

(statearr_19353_20582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (3))){
var inst_19333 = (state_19339[(2)]);
var inst_19334 = cljs.core.async.close_BANG_(out);
var state_19339__$1 = (function (){var statearr_19354 = state_19339;
(statearr_19354[(9)] = inst_19333);

return statearr_19354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19339__$1,inst_19334);
} else {
if((state_val_19340 === (2))){
var state_19339__$1 = state_19339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19339__$1,(4),ch);
} else {
if((state_val_19340 === (11))){
var inst_19316 = (state_19339[(8)]);
var inst_19325 = (state_19339[(2)]);
var inst_19312 = inst_19316;
var state_19339__$1 = (function (){var statearr_19355 = state_19339;
(statearr_19355[(10)] = inst_19325);

(statearr_19355[(7)] = inst_19312);

return statearr_19355;
})();
var statearr_19356_20583 = state_19339__$1;
(statearr_19356_20583[(2)] = null);

(statearr_19356_20583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (9))){
var inst_19316 = (state_19339[(8)]);
var state_19339__$1 = state_19339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19339__$1,(11),out,inst_19316);
} else {
if((state_val_19340 === (5))){
var inst_19316 = (state_19339[(8)]);
var inst_19312 = (state_19339[(7)]);
var inst_19320 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19316,inst_19312);
var state_19339__$1 = state_19339;
if(inst_19320){
var statearr_19366_20591 = state_19339__$1;
(statearr_19366_20591[(1)] = (8));

} else {
var statearr_19367_20592 = state_19339__$1;
(statearr_19367_20592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (10))){
var inst_19328 = (state_19339[(2)]);
var state_19339__$1 = state_19339;
var statearr_19368_20593 = state_19339__$1;
(statearr_19368_20593[(2)] = inst_19328);

(statearr_19368_20593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (8))){
var inst_19312 = (state_19339[(7)]);
var tmp19361 = inst_19312;
var inst_19312__$1 = tmp19361;
var state_19339__$1 = (function (){var statearr_19369 = state_19339;
(statearr_19369[(7)] = inst_19312__$1);

return statearr_19369;
})();
var statearr_19373_20595 = state_19339__$1;
(statearr_19373_20595[(2)] = null);

(statearr_19373_20595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19375[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19375[(1)] = (1));

return statearr_19375;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19339){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19339);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19376){var ex__17283__auto__ = e19376;
var statearr_19377_20597 = state_19339;
(statearr_19377_20597[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19339[(4)]))){
var statearr_19381_20598 = state_19339;
(statearr_19381_20598[(1)] = cljs.core.first((state_19339[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20600 = state_19339;
state_19339 = G__20600;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_19383 = f__17440__auto__();
(statearr_19383[(6)] = c__17439__auto___20568);

return statearr_19383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19389 = arguments.length;
switch (G__19389) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17439__auto___20607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_19428){
var state_val_19429 = (state_19428[(1)]);
if((state_val_19429 === (7))){
var inst_19424 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19430_20608 = state_19428__$1;
(statearr_19430_20608[(2)] = inst_19424);

(statearr_19430_20608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (1))){
var inst_19391 = (new Array(n));
var inst_19392 = inst_19391;
var inst_19393 = (0);
var state_19428__$1 = (function (){var statearr_19431 = state_19428;
(statearr_19431[(7)] = inst_19392);

(statearr_19431[(8)] = inst_19393);

return statearr_19431;
})();
var statearr_19432_20615 = state_19428__$1;
(statearr_19432_20615[(2)] = null);

(statearr_19432_20615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (4))){
var inst_19396 = (state_19428[(9)]);
var inst_19396__$1 = (state_19428[(2)]);
var inst_19397 = (inst_19396__$1 == null);
var inst_19398 = cljs.core.not(inst_19397);
var state_19428__$1 = (function (){var statearr_19433 = state_19428;
(statearr_19433[(9)] = inst_19396__$1);

return statearr_19433;
})();
if(inst_19398){
var statearr_19435_20617 = state_19428__$1;
(statearr_19435_20617[(1)] = (5));

} else {
var statearr_19439_20618 = state_19428__$1;
(statearr_19439_20618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (15))){
var inst_19418 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19440_20619 = state_19428__$1;
(statearr_19440_20619[(2)] = inst_19418);

(statearr_19440_20619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (13))){
var state_19428__$1 = state_19428;
var statearr_19441_20621 = state_19428__$1;
(statearr_19441_20621[(2)] = null);

(statearr_19441_20621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (6))){
var inst_19393 = (state_19428[(8)]);
var inst_19414 = (inst_19393 > (0));
var state_19428__$1 = state_19428;
if(cljs.core.truth_(inst_19414)){
var statearr_19445_20623 = state_19428__$1;
(statearr_19445_20623[(1)] = (12));

} else {
var statearr_19446_20624 = state_19428__$1;
(statearr_19446_20624[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (3))){
var inst_19426 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19428__$1,inst_19426);
} else {
if((state_val_19429 === (12))){
var inst_19392 = (state_19428[(7)]);
var inst_19416 = cljs.core.vec(inst_19392);
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19428__$1,(15),out,inst_19416);
} else {
if((state_val_19429 === (2))){
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19428__$1,(4),ch);
} else {
if((state_val_19429 === (11))){
var inst_19408 = (state_19428[(2)]);
var inst_19409 = (new Array(n));
var inst_19392 = inst_19409;
var inst_19393 = (0);
var state_19428__$1 = (function (){var statearr_19448 = state_19428;
(statearr_19448[(7)] = inst_19392);

(statearr_19448[(10)] = inst_19408);

(statearr_19448[(8)] = inst_19393);

return statearr_19448;
})();
var statearr_19449_20628 = state_19428__$1;
(statearr_19449_20628[(2)] = null);

(statearr_19449_20628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (9))){
var inst_19392 = (state_19428[(7)]);
var inst_19406 = cljs.core.vec(inst_19392);
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19428__$1,(11),out,inst_19406);
} else {
if((state_val_19429 === (5))){
var inst_19392 = (state_19428[(7)]);
var inst_19401 = (state_19428[(11)]);
var inst_19396 = (state_19428[(9)]);
var inst_19393 = (state_19428[(8)]);
var inst_19400 = (inst_19392[inst_19393] = inst_19396);
var inst_19401__$1 = (inst_19393 + (1));
var inst_19402 = (inst_19401__$1 < n);
var state_19428__$1 = (function (){var statearr_19450 = state_19428;
(statearr_19450[(12)] = inst_19400);

(statearr_19450[(11)] = inst_19401__$1);

return statearr_19450;
})();
if(cljs.core.truth_(inst_19402)){
var statearr_19451_20635 = state_19428__$1;
(statearr_19451_20635[(1)] = (8));

} else {
var statearr_19452_20636 = state_19428__$1;
(statearr_19452_20636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (14))){
var inst_19421 = (state_19428[(2)]);
var inst_19422 = cljs.core.async.close_BANG_(out);
var state_19428__$1 = (function (){var statearr_19454 = state_19428;
(statearr_19454[(13)] = inst_19421);

return statearr_19454;
})();
var statearr_19455_20637 = state_19428__$1;
(statearr_19455_20637[(2)] = inst_19422);

(statearr_19455_20637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (10))){
var inst_19412 = (state_19428[(2)]);
var state_19428__$1 = state_19428;
var statearr_19456_20638 = state_19428__$1;
(statearr_19456_20638[(2)] = inst_19412);

(statearr_19456_20638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19429 === (8))){
var inst_19392 = (state_19428[(7)]);
var inst_19401 = (state_19428[(11)]);
var tmp19453 = inst_19392;
var inst_19392__$1 = tmp19453;
var inst_19393 = inst_19401;
var state_19428__$1 = (function (){var statearr_19460 = state_19428;
(statearr_19460[(7)] = inst_19392__$1);

(statearr_19460[(8)] = inst_19393);

return statearr_19460;
})();
var statearr_19461_20639 = state_19428__$1;
(statearr_19461_20639[(2)] = null);

(statearr_19461_20639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19463[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19463[(1)] = (1));

return statearr_19463;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19428){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19428);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19464){var ex__17283__auto__ = e19464;
var statearr_19465_20644 = state_19428;
(statearr_19465_20644[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19428[(4)]))){
var statearr_19466_20646 = state_19428;
(statearr_19466_20646[(1)] = cljs.core.first((state_19428[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20651 = state_19428;
state_19428 = G__20651;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_19467 = f__17440__auto__();
(statearr_19467[(6)] = c__17439__auto___20607);

return statearr_19467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19473 = arguments.length;
switch (G__19473) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17439__auto___20663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_19522){
var state_val_19523 = (state_19522[(1)]);
if((state_val_19523 === (7))){
var inst_19518 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19525_20671 = state_19522__$1;
(statearr_19525_20671[(2)] = inst_19518);

(statearr_19525_20671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (1))){
var inst_19474 = [];
var inst_19475 = inst_19474;
var inst_19476 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19522__$1 = (function (){var statearr_19526 = state_19522;
(statearr_19526[(7)] = inst_19476);

(statearr_19526[(8)] = inst_19475);

return statearr_19526;
})();
var statearr_19527_20675 = state_19522__$1;
(statearr_19527_20675[(2)] = null);

(statearr_19527_20675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (4))){
var inst_19479 = (state_19522[(9)]);
var inst_19479__$1 = (state_19522[(2)]);
var inst_19480 = (inst_19479__$1 == null);
var inst_19481 = cljs.core.not(inst_19480);
var state_19522__$1 = (function (){var statearr_19528 = state_19522;
(statearr_19528[(9)] = inst_19479__$1);

return statearr_19528;
})();
if(inst_19481){
var statearr_19529_20676 = state_19522__$1;
(statearr_19529_20676[(1)] = (5));

} else {
var statearr_19530_20677 = state_19522__$1;
(statearr_19530_20677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (15))){
var inst_19475 = (state_19522[(8)]);
var inst_19510 = cljs.core.vec(inst_19475);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19522__$1,(18),out,inst_19510);
} else {
if((state_val_19523 === (13))){
var inst_19504 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19531_20678 = state_19522__$1;
(statearr_19531_20678[(2)] = inst_19504);

(statearr_19531_20678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (6))){
var inst_19475 = (state_19522[(8)]);
var inst_19507 = inst_19475.length;
var inst_19508 = (inst_19507 > (0));
var state_19522__$1 = state_19522;
if(cljs.core.truth_(inst_19508)){
var statearr_19532_20679 = state_19522__$1;
(statearr_19532_20679[(1)] = (15));

} else {
var statearr_19533_20680 = state_19522__$1;
(statearr_19533_20680[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (17))){
var inst_19515 = (state_19522[(2)]);
var inst_19516 = cljs.core.async.close_BANG_(out);
var state_19522__$1 = (function (){var statearr_19534 = state_19522;
(statearr_19534[(10)] = inst_19515);

return statearr_19534;
})();
var statearr_19535_20681 = state_19522__$1;
(statearr_19535_20681[(2)] = inst_19516);

(statearr_19535_20681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (3))){
var inst_19520 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19522__$1,inst_19520);
} else {
if((state_val_19523 === (12))){
var inst_19475 = (state_19522[(8)]);
var inst_19497 = cljs.core.vec(inst_19475);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19522__$1,(14),out,inst_19497);
} else {
if((state_val_19523 === (2))){
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19522__$1,(4),ch);
} else {
if((state_val_19523 === (11))){
var inst_19475 = (state_19522[(8)]);
var inst_19483 = (state_19522[(11)]);
var inst_19479 = (state_19522[(9)]);
var inst_19494 = inst_19475.push(inst_19479);
var tmp19536 = inst_19475;
var inst_19475__$1 = tmp19536;
var inst_19476 = inst_19483;
var state_19522__$1 = (function (){var statearr_19537 = state_19522;
(statearr_19537[(7)] = inst_19476);

(statearr_19537[(8)] = inst_19475__$1);

(statearr_19537[(12)] = inst_19494);

return statearr_19537;
})();
var statearr_19538_20685 = state_19522__$1;
(statearr_19538_20685[(2)] = null);

(statearr_19538_20685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (9))){
var inst_19476 = (state_19522[(7)]);
var inst_19487 = cljs.core.keyword_identical_QMARK_(inst_19476,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19522__$1 = state_19522;
var statearr_19539_20686 = state_19522__$1;
(statearr_19539_20686[(2)] = inst_19487);

(statearr_19539_20686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (5))){
var inst_19476 = (state_19522[(7)]);
var inst_19483 = (state_19522[(11)]);
var inst_19479 = (state_19522[(9)]);
var inst_19484 = (state_19522[(13)]);
var inst_19483__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19479) : f.call(null,inst_19479));
var inst_19484__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19483__$1,inst_19476);
var state_19522__$1 = (function (){var statearr_19540 = state_19522;
(statearr_19540[(11)] = inst_19483__$1);

(statearr_19540[(13)] = inst_19484__$1);

return statearr_19540;
})();
if(inst_19484__$1){
var statearr_19541_20699 = state_19522__$1;
(statearr_19541_20699[(1)] = (8));

} else {
var statearr_19542_20700 = state_19522__$1;
(statearr_19542_20700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (14))){
var inst_19483 = (state_19522[(11)]);
var inst_19479 = (state_19522[(9)]);
var inst_19499 = (state_19522[(2)]);
var inst_19500 = [];
var inst_19501 = inst_19500.push(inst_19479);
var inst_19475 = inst_19500;
var inst_19476 = inst_19483;
var state_19522__$1 = (function (){var statearr_19543 = state_19522;
(statearr_19543[(7)] = inst_19476);

(statearr_19543[(14)] = inst_19501);

(statearr_19543[(15)] = inst_19499);

(statearr_19543[(8)] = inst_19475);

return statearr_19543;
})();
var statearr_19544_20705 = state_19522__$1;
(statearr_19544_20705[(2)] = null);

(statearr_19544_20705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (16))){
var state_19522__$1 = state_19522;
var statearr_19545_20710 = state_19522__$1;
(statearr_19545_20710[(2)] = null);

(statearr_19545_20710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (10))){
var inst_19489 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
if(cljs.core.truth_(inst_19489)){
var statearr_19546_20711 = state_19522__$1;
(statearr_19546_20711[(1)] = (11));

} else {
var statearr_19547_20716 = state_19522__$1;
(statearr_19547_20716[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (18))){
var inst_19512 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19548_20719 = state_19522__$1;
(statearr_19548_20719[(2)] = inst_19512);

(statearr_19548_20719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (8))){
var inst_19484 = (state_19522[(13)]);
var state_19522__$1 = state_19522;
var statearr_19549_20721 = state_19522__$1;
(statearr_19549_20721[(2)] = inst_19484);

(statearr_19549_20721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19550[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19550[(1)] = (1));

return statearr_19550;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19522){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19522);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19551){var ex__17283__auto__ = e19551;
var statearr_19552_20722 = state_19522;
(statearr_19552_20722[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19522[(4)]))){
var statearr_19553_20723 = state_19522;
(statearr_19553_20723[(1)] = cljs.core.first((state_19522[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20725 = state_19522;
state_19522 = G__20725;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_19554 = f__17440__auto__();
(statearr_19554[(6)] = c__17439__auto___20663);

return statearr_19554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
