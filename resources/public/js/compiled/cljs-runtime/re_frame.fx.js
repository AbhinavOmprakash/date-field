goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24266 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24267 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24267);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24395 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24395)){
var new_db_24396 = temp__5804__auto___24395;
var fexpr__24280_24397 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24280_24397.cljs$core$IFn$_invoke$arity$1 ? fexpr__24280_24397.cljs$core$IFn$_invoke$arity$1(new_db_24396) : fexpr__24280_24397.call(null,new_db_24396));
} else {
}

var seq__24281 = cljs.core.seq(effects_without_db);
var chunk__24282 = null;
var count__24283 = (0);
var i__24284 = (0);
while(true){
if((i__24284 < count__24283)){
var vec__24291 = chunk__24282.cljs$core$IIndexed$_nth$arity$2(null,i__24284);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24291,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24291,(1),null);
var temp__5802__auto___24398 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24398)){
var effect_fn_24399 = temp__5802__auto___24398;
(effect_fn_24399.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24399.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24399.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24400 = seq__24281;
var G__24401 = chunk__24282;
var G__24402 = count__24283;
var G__24403 = (i__24284 + (1));
seq__24281 = G__24400;
chunk__24282 = G__24401;
count__24283 = G__24402;
i__24284 = G__24403;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24281);
if(temp__5804__auto__){
var seq__24281__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24281__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24281__$1);
var G__24404 = cljs.core.chunk_rest(seq__24281__$1);
var G__24405 = c__5568__auto__;
var G__24406 = cljs.core.count(c__5568__auto__);
var G__24407 = (0);
seq__24281 = G__24404;
chunk__24282 = G__24405;
count__24283 = G__24406;
i__24284 = G__24407;
continue;
} else {
var vec__24294 = cljs.core.first(seq__24281__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294,(1),null);
var temp__5802__auto___24408 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24408)){
var effect_fn_24409 = temp__5802__auto___24408;
(effect_fn_24409.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24409.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24409.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24410 = cljs.core.next(seq__24281__$1);
var G__24411 = null;
var G__24412 = (0);
var G__24413 = (0);
seq__24281 = G__24410;
chunk__24282 = G__24411;
count__24283 = G__24412;
i__24284 = G__24413;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23923__auto___24414 = re_frame.interop.now();
var duration__23924__auto___24415 = (end__23923__auto___24414 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23924__auto___24415,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23923__auto___24414);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24266);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24416 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24416)){
var new_db_24417 = temp__5804__auto___24416;
var fexpr__24297_24418 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24297_24418.cljs$core$IFn$_invoke$arity$1 ? fexpr__24297_24418.cljs$core$IFn$_invoke$arity$1(new_db_24417) : fexpr__24297_24418.call(null,new_db_24417));
} else {
}

var seq__24298 = cljs.core.seq(effects_without_db);
var chunk__24299 = null;
var count__24300 = (0);
var i__24301 = (0);
while(true){
if((i__24301 < count__24300)){
var vec__24312 = chunk__24299.cljs$core$IIndexed$_nth$arity$2(null,i__24301);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24312,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24312,(1),null);
var temp__5802__auto___24419 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24419)){
var effect_fn_24420 = temp__5802__auto___24419;
(effect_fn_24420.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24420.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24420.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24421 = seq__24298;
var G__24422 = chunk__24299;
var G__24423 = count__24300;
var G__24424 = (i__24301 + (1));
seq__24298 = G__24421;
chunk__24299 = G__24422;
count__24300 = G__24423;
i__24301 = G__24424;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24298);
if(temp__5804__auto__){
var seq__24298__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24298__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24298__$1);
var G__24425 = cljs.core.chunk_rest(seq__24298__$1);
var G__24426 = c__5568__auto__;
var G__24427 = cljs.core.count(c__5568__auto__);
var G__24428 = (0);
seq__24298 = G__24425;
chunk__24299 = G__24426;
count__24300 = G__24427;
i__24301 = G__24428;
continue;
} else {
var vec__24317 = cljs.core.first(seq__24298__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24317,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24317,(1),null);
var temp__5802__auto___24429 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24429)){
var effect_fn_24430 = temp__5802__auto___24429;
(effect_fn_24430.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24430.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24430.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24431 = cljs.core.next(seq__24298__$1);
var G__24432 = null;
var G__24433 = (0);
var G__24434 = (0);
seq__24298 = G__24431;
chunk__24299 = G__24432;
count__24300 = G__24433;
i__24301 = G__24434;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24320){
var map__24321 = p__24320;
var map__24321__$1 = cljs.core.__destructure_map(map__24321);
var effect = map__24321__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24321__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24321__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24325 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24326 = null;
var count__24327 = (0);
var i__24328 = (0);
while(true){
if((i__24328 < count__24327)){
var effect = chunk__24326.cljs$core$IIndexed$_nth$arity$2(null,i__24328);
re_frame.fx.dispatch_later(effect);


var G__24435 = seq__24325;
var G__24436 = chunk__24326;
var G__24437 = count__24327;
var G__24438 = (i__24328 + (1));
seq__24325 = G__24435;
chunk__24326 = G__24436;
count__24327 = G__24437;
i__24328 = G__24438;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24325);
if(temp__5804__auto__){
var seq__24325__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24325__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24325__$1);
var G__24439 = cljs.core.chunk_rest(seq__24325__$1);
var G__24440 = c__5568__auto__;
var G__24441 = cljs.core.count(c__5568__auto__);
var G__24442 = (0);
seq__24325 = G__24439;
chunk__24326 = G__24440;
count__24327 = G__24441;
i__24328 = G__24442;
continue;
} else {
var effect = cljs.core.first(seq__24325__$1);
re_frame.fx.dispatch_later(effect);


var G__24443 = cljs.core.next(seq__24325__$1);
var G__24444 = null;
var G__24445 = (0);
var G__24446 = (0);
seq__24325 = G__24443;
chunk__24326 = G__24444;
count__24327 = G__24445;
i__24328 = G__24446;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24339 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24340 = null;
var count__24341 = (0);
var i__24342 = (0);
while(true){
if((i__24342 < count__24341)){
var vec__24355 = chunk__24340.cljs$core$IIndexed$_nth$arity$2(null,i__24342);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24355,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24355,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24447 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24447)){
var effect_fn_24448 = temp__5802__auto___24447;
(effect_fn_24448.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24448.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24448.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24449 = seq__24339;
var G__24450 = chunk__24340;
var G__24451 = count__24341;
var G__24452 = (i__24342 + (1));
seq__24339 = G__24449;
chunk__24340 = G__24450;
count__24341 = G__24451;
i__24342 = G__24452;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24339);
if(temp__5804__auto__){
var seq__24339__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24339__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24339__$1);
var G__24453 = cljs.core.chunk_rest(seq__24339__$1);
var G__24454 = c__5568__auto__;
var G__24455 = cljs.core.count(c__5568__auto__);
var G__24456 = (0);
seq__24339 = G__24453;
chunk__24340 = G__24454;
count__24341 = G__24455;
i__24342 = G__24456;
continue;
} else {
var vec__24359 = cljs.core.first(seq__24339__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24457 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24457)){
var effect_fn_24458 = temp__5802__auto___24457;
(effect_fn_24458.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24458.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24458.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24459 = cljs.core.next(seq__24339__$1);
var G__24460 = null;
var G__24461 = (0);
var G__24462 = (0);
seq__24339 = G__24459;
chunk__24340 = G__24460;
count__24341 = G__24461;
i__24342 = G__24462;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24387 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24388 = null;
var count__24389 = (0);
var i__24390 = (0);
while(true){
if((i__24390 < count__24389)){
var event = chunk__24388.cljs$core$IIndexed$_nth$arity$2(null,i__24390);
re_frame.router.dispatch(event);


var G__24463 = seq__24387;
var G__24464 = chunk__24388;
var G__24465 = count__24389;
var G__24466 = (i__24390 + (1));
seq__24387 = G__24463;
chunk__24388 = G__24464;
count__24389 = G__24465;
i__24390 = G__24466;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24387);
if(temp__5804__auto__){
var seq__24387__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24387__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24387__$1);
var G__24467 = cljs.core.chunk_rest(seq__24387__$1);
var G__24468 = c__5568__auto__;
var G__24469 = cljs.core.count(c__5568__auto__);
var G__24470 = (0);
seq__24387 = G__24467;
chunk__24388 = G__24468;
count__24389 = G__24469;
i__24390 = G__24470;
continue;
} else {
var event = cljs.core.first(seq__24387__$1);
re_frame.router.dispatch(event);


var G__24471 = cljs.core.next(seq__24387__$1);
var G__24472 = null;
var G__24473 = (0);
var G__24474 = (0);
seq__24387 = G__24471;
chunk__24388 = G__24472;
count__24389 = G__24473;
i__24390 = G__24474;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24391 = cljs.core.seq(value);
var chunk__24392 = null;
var count__24393 = (0);
var i__24394 = (0);
while(true){
if((i__24394 < count__24393)){
var event = chunk__24392.cljs$core$IIndexed$_nth$arity$2(null,i__24394);
clear_event(event);


var G__24475 = seq__24391;
var G__24476 = chunk__24392;
var G__24477 = count__24393;
var G__24478 = (i__24394 + (1));
seq__24391 = G__24475;
chunk__24392 = G__24476;
count__24393 = G__24477;
i__24394 = G__24478;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24391);
if(temp__5804__auto__){
var seq__24391__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24391__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24391__$1);
var G__24479 = cljs.core.chunk_rest(seq__24391__$1);
var G__24480 = c__5568__auto__;
var G__24481 = cljs.core.count(c__5568__auto__);
var G__24482 = (0);
seq__24391 = G__24479;
chunk__24392 = G__24480;
count__24393 = G__24481;
i__24394 = G__24482;
continue;
} else {
var event = cljs.core.first(seq__24391__$1);
clear_event(event);


var G__24483 = cljs.core.next(seq__24391__$1);
var G__24484 = null;
var G__24485 = (0);
var G__24486 = (0);
seq__24391 = G__24483;
chunk__24392 = G__24484;
count__24393 = G__24485;
i__24394 = G__24486;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
