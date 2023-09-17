goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23945){
var map__23946 = p__23945;
var map__23946__$1 = cljs.core.__destructure_map(map__23946);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23946__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__23949_23978 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23950_23979 = null;
var count__23951_23980 = (0);
var i__23952_23981 = (0);
while(true){
if((i__23952_23981 < count__23951_23980)){
var vec__23965_23982 = chunk__23950_23979.cljs$core$IIndexed$_nth$arity$2(null,i__23952_23981);
var k_23983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23965_23982,(0),null);
var cb_23984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23965_23982,(1),null);
try{var G__23969_23985 = cljs.core.deref(re_frame.trace.traces);
(cb_23984.cljs$core$IFn$_invoke$arity$1 ? cb_23984.cljs$core$IFn$_invoke$arity$1(G__23969_23985) : cb_23984.call(null,G__23969_23985));
}catch (e23968){var e_23986 = e23968;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23983,"while storing",cljs.core.deref(re_frame.trace.traces),e_23986], 0));
}

var G__23987 = seq__23949_23978;
var G__23988 = chunk__23950_23979;
var G__23989 = count__23951_23980;
var G__23990 = (i__23952_23981 + (1));
seq__23949_23978 = G__23987;
chunk__23950_23979 = G__23988;
count__23951_23980 = G__23989;
i__23952_23981 = G__23990;
continue;
} else {
var temp__5804__auto___23991 = cljs.core.seq(seq__23949_23978);
if(temp__5804__auto___23991){
var seq__23949_23992__$1 = temp__5804__auto___23991;
if(cljs.core.chunked_seq_QMARK_(seq__23949_23992__$1)){
var c__5568__auto___23993 = cljs.core.chunk_first(seq__23949_23992__$1);
var G__23994 = cljs.core.chunk_rest(seq__23949_23992__$1);
var G__23995 = c__5568__auto___23993;
var G__23996 = cljs.core.count(c__5568__auto___23993);
var G__23997 = (0);
seq__23949_23978 = G__23994;
chunk__23950_23979 = G__23995;
count__23951_23980 = G__23996;
i__23952_23981 = G__23997;
continue;
} else {
var vec__23970_23998 = cljs.core.first(seq__23949_23992__$1);
var k_23999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23970_23998,(0),null);
var cb_24000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23970_23998,(1),null);
try{var G__23974_24001 = cljs.core.deref(re_frame.trace.traces);
(cb_24000.cljs$core$IFn$_invoke$arity$1 ? cb_24000.cljs$core$IFn$_invoke$arity$1(G__23974_24001) : cb_24000.call(null,G__23974_24001));
}catch (e23973){var e_24002 = e23973;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23999,"while storing",cljs.core.deref(re_frame.trace.traces),e_24002], 0));
}

var G__24003 = cljs.core.next(seq__23949_23992__$1);
var G__24004 = null;
var G__24005 = (0);
var G__24006 = (0);
seq__23949_23978 = G__24003;
chunk__23950_23979 = G__24004;
count__23951_23980 = G__24005;
i__23952_23981 = G__24006;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
