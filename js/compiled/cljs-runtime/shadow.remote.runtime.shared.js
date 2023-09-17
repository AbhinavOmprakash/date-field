goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18078,res){
var map__18079 = p__18078;
var map__18079__$1 = cljs.core.__destructure_map(map__18079);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18080 = res;
var G__18080__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18080,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18080);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18080__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18080__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18092 = arguments.length;
switch (G__18092) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18107,msg,handlers,timeout_after_ms){
var map__18108 = p__18107;
var map__18108__$1 = cljs.core.__destructure_map(map__18108);
var runtime = map__18108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18327 = arguments.length;
var i__5770__auto___18328 = (0);
while(true){
if((i__5770__auto___18328 < len__5769__auto___18327)){
args__5775__auto__.push((arguments[i__5770__auto___18328]));

var G__18330 = (i__5770__auto___18328 + (1));
i__5770__auto___18328 = G__18330;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18117,ev,args){
var map__18118 = p__18117;
var map__18118__$1 = cljs.core.__destructure_map(map__18118);
var runtime = map__18118__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18118__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18119 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18122 = null;
var count__18123 = (0);
var i__18124 = (0);
while(true){
if((i__18124 < count__18123)){
var ext = chunk__18122.cljs$core$IIndexed$_nth$arity$2(null,i__18124);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18334 = seq__18119;
var G__18335 = chunk__18122;
var G__18336 = count__18123;
var G__18337 = (i__18124 + (1));
seq__18119 = G__18334;
chunk__18122 = G__18335;
count__18123 = G__18336;
i__18124 = G__18337;
continue;
} else {
var G__18338 = seq__18119;
var G__18339 = chunk__18122;
var G__18340 = count__18123;
var G__18341 = (i__18124 + (1));
seq__18119 = G__18338;
chunk__18122 = G__18339;
count__18123 = G__18340;
i__18124 = G__18341;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18119);
if(temp__5804__auto__){
var seq__18119__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18119__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18119__$1);
var G__18343 = cljs.core.chunk_rest(seq__18119__$1);
var G__18344 = c__5568__auto__;
var G__18345 = cljs.core.count(c__5568__auto__);
var G__18346 = (0);
seq__18119 = G__18343;
chunk__18122 = G__18344;
count__18123 = G__18345;
i__18124 = G__18346;
continue;
} else {
var ext = cljs.core.first(seq__18119__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18347 = cljs.core.next(seq__18119__$1);
var G__18348 = null;
var G__18349 = (0);
var G__18350 = (0);
seq__18119 = G__18347;
chunk__18122 = G__18348;
count__18123 = G__18349;
i__18124 = G__18350;
continue;
} else {
var G__18352 = cljs.core.next(seq__18119__$1);
var G__18353 = null;
var G__18354 = (0);
var G__18355 = (0);
seq__18119 = G__18352;
chunk__18122 = G__18353;
count__18123 = G__18354;
i__18124 = G__18355;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18111){
var G__18112 = cljs.core.first(seq18111);
var seq18111__$1 = cljs.core.next(seq18111);
var G__18113 = cljs.core.first(seq18111__$1);
var seq18111__$2 = cljs.core.next(seq18111__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18112,G__18113,seq18111__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18142,p__18143){
var map__18145 = p__18142;
var map__18145__$1 = cljs.core.__destructure_map(map__18145);
var runtime = map__18145__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18145__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18146 = p__18143;
var map__18146__$1 = cljs.core.__destructure_map(map__18146);
var msg = map__18146__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18146__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__18148 = cljs.core.deref(state_ref);
var map__18148__$1 = cljs.core.__destructure_map(map__18148);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18150){
var map__18151 = p__18150;
var map__18151__$1 = cljs.core.__destructure_map(map__18151);
var runtime = map__18151__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18151__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18154,msg){
var map__18155 = p__18154;
var map__18155__$1 = cljs.core.__destructure_map(map__18155);
var runtime = map__18155__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18155__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18156,key,p__18157){
var map__18158 = p__18156;
var map__18158__$1 = cljs.core.__destructure_map(map__18158);
var state = map__18158__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18159 = p__18157;
var map__18159__$1 = cljs.core.__destructure_map(map__18159);
var spec = map__18159__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18159__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18160,key,spec){
var map__18161 = p__18160;
var map__18161__$1 = cljs.core.__destructure_map(map__18161);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18161__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18162_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18162_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18163_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18163_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18164_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18164_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18165_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18165_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18166_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18166_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18167,key){
var map__18168 = p__18167;
var map__18168__$1 = cljs.core.__destructure_map(map__18168);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18168__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18169,msg){
var map__18170 = p__18169;
var map__18170__$1 = cljs.core.__destructure_map(map__18170);
var runtime = map__18170__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18170__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18174,p__18175){
var map__18176 = p__18174;
var map__18176__$1 = cljs.core.__destructure_map(map__18176);
var runtime = map__18176__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18176__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18177 = p__18175;
var map__18177__$1 = cljs.core.__destructure_map(map__18177);
var msg = map__18177__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18177__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18177__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18178 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18180 = null;
var count__18181 = (0);
var i__18182 = (0);
while(true){
if((i__18182 < count__18181)){
var map__18253 = chunk__18180.cljs$core$IIndexed$_nth$arity$2(null,i__18182);
var map__18253__$1 = cljs.core.__destructure_map(map__18253);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18253__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18389 = seq__18178;
var G__18390 = chunk__18180;
var G__18391 = count__18181;
var G__18392 = (i__18182 + (1));
seq__18178 = G__18389;
chunk__18180 = G__18390;
count__18181 = G__18391;
i__18182 = G__18392;
continue;
} else {
var G__18393 = seq__18178;
var G__18394 = chunk__18180;
var G__18395 = count__18181;
var G__18396 = (i__18182 + (1));
seq__18178 = G__18393;
chunk__18180 = G__18394;
count__18181 = G__18395;
i__18182 = G__18396;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18178);
if(temp__5804__auto__){
var seq__18178__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18178__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18178__$1);
var G__18397 = cljs.core.chunk_rest(seq__18178__$1);
var G__18398 = c__5568__auto__;
var G__18399 = cljs.core.count(c__5568__auto__);
var G__18400 = (0);
seq__18178 = G__18397;
chunk__18180 = G__18398;
count__18181 = G__18399;
i__18182 = G__18400;
continue;
} else {
var map__18267 = cljs.core.first(seq__18178__$1);
var map__18267__$1 = cljs.core.__destructure_map(map__18267);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18267__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18403 = cljs.core.next(seq__18178__$1);
var G__18404 = null;
var G__18405 = (0);
var G__18406 = (0);
seq__18178 = G__18403;
chunk__18180 = G__18404;
count__18181 = G__18405;
i__18182 = G__18406;
continue;
} else {
var G__18407 = cljs.core.next(seq__18178__$1);
var G__18408 = null;
var G__18409 = (0);
var G__18410 = (0);
seq__18178 = G__18407;
chunk__18180 = G__18408;
count__18181 = G__18409;
i__18182 = G__18410;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
