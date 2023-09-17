goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21132){
var map__21133 = p__21132;
var map__21133__$1 = cljs.core.__destructure_map(map__21133);
var m = map__21133__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21134_21352 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21135_21353 = null;
var count__21136_21354 = (0);
var i__21137_21355 = (0);
while(true){
if((i__21137_21355 < count__21136_21354)){
var f_21356 = chunk__21135_21353.cljs$core$IIndexed$_nth$arity$2(null,i__21137_21355);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21356], 0));


var G__21357 = seq__21134_21352;
var G__21358 = chunk__21135_21353;
var G__21359 = count__21136_21354;
var G__21360 = (i__21137_21355 + (1));
seq__21134_21352 = G__21357;
chunk__21135_21353 = G__21358;
count__21136_21354 = G__21359;
i__21137_21355 = G__21360;
continue;
} else {
var temp__5804__auto___21361 = cljs.core.seq(seq__21134_21352);
if(temp__5804__auto___21361){
var seq__21134_21362__$1 = temp__5804__auto___21361;
if(cljs.core.chunked_seq_QMARK_(seq__21134_21362__$1)){
var c__5568__auto___21363 = cljs.core.chunk_first(seq__21134_21362__$1);
var G__21364 = cljs.core.chunk_rest(seq__21134_21362__$1);
var G__21365 = c__5568__auto___21363;
var G__21366 = cljs.core.count(c__5568__auto___21363);
var G__21367 = (0);
seq__21134_21352 = G__21364;
chunk__21135_21353 = G__21365;
count__21136_21354 = G__21366;
i__21137_21355 = G__21367;
continue;
} else {
var f_21368 = cljs.core.first(seq__21134_21362__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21368], 0));


var G__21369 = cljs.core.next(seq__21134_21362__$1);
var G__21370 = null;
var G__21371 = (0);
var G__21372 = (0);
seq__21134_21352 = G__21369;
chunk__21135_21353 = G__21370;
count__21136_21354 = G__21371;
i__21137_21355 = G__21372;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21373 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21373], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21373)))?cljs.core.second(arglists_21373):arglists_21373)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21142_21378 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21143_21379 = null;
var count__21144_21380 = (0);
var i__21145_21381 = (0);
while(true){
if((i__21145_21381 < count__21144_21380)){
var vec__21154_21382 = chunk__21143_21379.cljs$core$IIndexed$_nth$arity$2(null,i__21145_21381);
var name_21383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21154_21382,(0),null);
var map__21157_21384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21154_21382,(1),null);
var map__21157_21385__$1 = cljs.core.__destructure_map(map__21157_21384);
var doc_21386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21157_21385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21157_21385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21383], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21387], 0));

if(cljs.core.truth_(doc_21386)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21386], 0));
} else {
}


var G__21388 = seq__21142_21378;
var G__21389 = chunk__21143_21379;
var G__21390 = count__21144_21380;
var G__21391 = (i__21145_21381 + (1));
seq__21142_21378 = G__21388;
chunk__21143_21379 = G__21389;
count__21144_21380 = G__21390;
i__21145_21381 = G__21391;
continue;
} else {
var temp__5804__auto___21392 = cljs.core.seq(seq__21142_21378);
if(temp__5804__auto___21392){
var seq__21142_21393__$1 = temp__5804__auto___21392;
if(cljs.core.chunked_seq_QMARK_(seq__21142_21393__$1)){
var c__5568__auto___21394 = cljs.core.chunk_first(seq__21142_21393__$1);
var G__21395 = cljs.core.chunk_rest(seq__21142_21393__$1);
var G__21396 = c__5568__auto___21394;
var G__21397 = cljs.core.count(c__5568__auto___21394);
var G__21398 = (0);
seq__21142_21378 = G__21395;
chunk__21143_21379 = G__21396;
count__21144_21380 = G__21397;
i__21145_21381 = G__21398;
continue;
} else {
var vec__21158_21399 = cljs.core.first(seq__21142_21393__$1);
var name_21400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158_21399,(0),null);
var map__21161_21401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21158_21399,(1),null);
var map__21161_21402__$1 = cljs.core.__destructure_map(map__21161_21401);
var doc_21403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21161_21402__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21161_21402__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21400], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21404], 0));

if(cljs.core.truth_(doc_21403)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21403], 0));
} else {
}


var G__21405 = cljs.core.next(seq__21142_21393__$1);
var G__21406 = null;
var G__21407 = (0);
var G__21408 = (0);
seq__21142_21378 = G__21405;
chunk__21143_21379 = G__21406;
count__21144_21380 = G__21407;
i__21145_21381 = G__21408;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21162 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21163 = null;
var count__21164 = (0);
var i__21165 = (0);
while(true){
if((i__21165 < count__21164)){
var role = chunk__21163.cljs$core$IIndexed$_nth$arity$2(null,i__21165);
var temp__5804__auto___21411__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21411__$1)){
var spec_21415 = temp__5804__auto___21411__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21415)], 0));
} else {
}


var G__21418 = seq__21162;
var G__21419 = chunk__21163;
var G__21420 = count__21164;
var G__21421 = (i__21165 + (1));
seq__21162 = G__21418;
chunk__21163 = G__21419;
count__21164 = G__21420;
i__21165 = G__21421;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21162);
if(temp__5804__auto____$1){
var seq__21162__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21162__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21162__$1);
var G__21422 = cljs.core.chunk_rest(seq__21162__$1);
var G__21423 = c__5568__auto__;
var G__21424 = cljs.core.count(c__5568__auto__);
var G__21425 = (0);
seq__21162 = G__21422;
chunk__21163 = G__21423;
count__21164 = G__21424;
i__21165 = G__21425;
continue;
} else {
var role = cljs.core.first(seq__21162__$1);
var temp__5804__auto___21426__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21426__$2)){
var spec_21427 = temp__5804__auto___21426__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21427)], 0));
} else {
}


var G__21428 = cljs.core.next(seq__21162__$1);
var G__21429 = null;
var G__21430 = (0);
var G__21431 = (0);
seq__21162 = G__21428;
chunk__21163 = G__21429;
count__21164 = G__21430;
i__21165 = G__21431;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21433 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__21434 = cljs.core.ex_cause(t);
via = G__21433;
t = G__21434;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21177 = datafied_throwable;
var map__21177__$1 = cljs.core.__destructure_map(map__21177);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21177__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21178 = cljs.core.last(via);
var map__21178__$1 = cljs.core.__destructure_map(map__21178);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21178__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21178__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21178__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21179 = data;
var map__21179__$1 = cljs.core.__destructure_map(map__21179);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21180 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21180__$1 = cljs.core.__destructure_map(map__21180);
var top_data = map__21180__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21181 = phase;
var G__21181__$1 = (((G__21181 instanceof cljs.core.Keyword))?G__21181.fqn:null);
switch (G__21181__$1) {
case "read-source":
var map__21182 = data;
var map__21182__$1 = cljs.core.__destructure_map(map__21182);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21182__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21182__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21183 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21183__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21183,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21183);
var G__21183__$2 = (cljs.core.truth_((function (){var fexpr__21184 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21184.cljs$core$IFn$_invoke$arity$1 ? fexpr__21184.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21184.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21183__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21183__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21183__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21183__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21185 = top_data;
var G__21185__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21185,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21185);
var G__21185__$2 = (cljs.core.truth_((function (){var fexpr__21186 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21186.cljs$core$IFn$_invoke$arity$1 ? fexpr__21186.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21186.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21185__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21185__$1);
var G__21185__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21185__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21185__$2);
var G__21185__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21185__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21185__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21185__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21185__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21187 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21187,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21187,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21187,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21187,(3),null);
var G__21190 = top_data;
var G__21190__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21190,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21190);
var G__21190__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21190__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21190__$1);
var G__21190__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21190__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21190__$2);
var G__21190__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21190__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21190__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21190__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21190__$4;
}

break;
case "execution":
var vec__21192 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21192,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21192,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21192,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21192,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21176_SHARP_){
var or__5045__auto__ = (p1__21176_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__21196 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21196.cljs$core$IFn$_invoke$arity$1 ? fexpr__21196.cljs$core$IFn$_invoke$arity$1(p1__21176_SHARP_) : fexpr__21196.call(null,p1__21176_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__21197 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21197__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21197,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21197);
var G__21197__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21197__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21197__$1);
var G__21197__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21197__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21197__$2);
var G__21197__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21197__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21197__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21197__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21197__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21181__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21201){
var map__21202 = p__21201;
var map__21202__$1 = cljs.core.__destructure_map(map__21202);
var triage_data = map__21202__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21202__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21203 = phase;
var G__21203__$1 = (((G__21203 instanceof cljs.core.Keyword))?G__21203.fqn:null);
switch (G__21203__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21205 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21206 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21207 = loc;
var G__21208 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21210_21465 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21211_21466 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21212_21467 = true;
var _STAR_print_fn_STAR__temp_val__21213_21468 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21212_21467);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21213_21468);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21198_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21198_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21211_21466);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21210_21465);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21205,G__21206,G__21207,G__21208) : format.call(null,G__21205,G__21206,G__21207,G__21208));

break;
case "macroexpansion":
var G__21219 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21220 = cause_type;
var G__21221 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21222 = loc;
var G__21223 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21219,G__21220,G__21221,G__21222,G__21223) : format.call(null,G__21219,G__21220,G__21221,G__21222,G__21223));

break;
case "compile-syntax-check":
var G__21224 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21225 = cause_type;
var G__21226 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21227 = loc;
var G__21228 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21224,G__21225,G__21226,G__21227,G__21228) : format.call(null,G__21224,G__21225,G__21226,G__21227,G__21228));

break;
case "compilation":
var G__21246 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21247 = cause_type;
var G__21248 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21249 = loc;
var G__21250 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21246,G__21247,G__21248,G__21249,G__21250) : format.call(null,G__21246,G__21247,G__21248,G__21249,G__21250));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21256 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21257 = symbol;
var G__21258 = loc;
var G__21259 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21263_21478 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21264_21479 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21265_21480 = true;
var _STAR_print_fn_STAR__temp_val__21266_21481 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21265_21480);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21266_21481);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21199_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21199_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21264_21479);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21263_21478);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21256,G__21257,G__21258,G__21259) : format.call(null,G__21256,G__21257,G__21258,G__21259));
} else {
var G__21297 = "Execution error%s at %s(%s).\n%s\n";
var G__21298 = cause_type;
var G__21299 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21300 = loc;
var G__21301 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21297,G__21298,G__21299,G__21300,G__21301) : format.call(null,G__21297,G__21298,G__21299,G__21300,G__21301));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21203__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
