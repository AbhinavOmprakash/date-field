goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22817 = arguments.length;
var i__5770__auto___22818 = (0);
while(true){
if((i__5770__auto___22818 < len__5769__auto___22817)){
args__5775__auto__.push((arguments[i__5770__auto___22818]));

var G__22819 = (i__5770__auto___22818 + (1));
i__5770__auto___22818 = G__22819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22419){
var G__22420 = cljs.core.first(seq22419);
var seq22419__$1 = cljs.core.next(seq22419);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22420,seq22419__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22423 = cljs.core.seq(sources);
var chunk__22424 = null;
var count__22425 = (0);
var i__22426 = (0);
while(true){
if((i__22426 < count__22425)){
var map__22434 = chunk__22424.cljs$core$IIndexed$_nth$arity$2(null,i__22426);
var map__22434__$1 = cljs.core.__destructure_map(map__22434);
var src = map__22434__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22434__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22434__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22434__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22434__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22436){var e_22822 = e22436;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22822);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22822.message)].join('')));
}

var G__22823 = seq__22423;
var G__22824 = chunk__22424;
var G__22825 = count__22425;
var G__22826 = (i__22426 + (1));
seq__22423 = G__22823;
chunk__22424 = G__22824;
count__22425 = G__22825;
i__22426 = G__22826;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22423);
if(temp__5804__auto__){
var seq__22423__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22423__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22423__$1);
var G__22829 = cljs.core.chunk_rest(seq__22423__$1);
var G__22830 = c__5568__auto__;
var G__22831 = cljs.core.count(c__5568__auto__);
var G__22832 = (0);
seq__22423 = G__22829;
chunk__22424 = G__22830;
count__22425 = G__22831;
i__22426 = G__22832;
continue;
} else {
var map__22438 = cljs.core.first(seq__22423__$1);
var map__22438__$1 = cljs.core.__destructure_map(map__22438);
var src = map__22438__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22438__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22438__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22438__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22438__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22439){var e_22836 = e22439;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22836);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22836.message)].join('')));
}

var G__22837 = cljs.core.next(seq__22423__$1);
var G__22838 = null;
var G__22839 = (0);
var G__22840 = (0);
seq__22423 = G__22837;
chunk__22424 = G__22838;
count__22425 = G__22839;
i__22426 = G__22840;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22441 = cljs.core.seq(js_requires);
var chunk__22442 = null;
var count__22443 = (0);
var i__22444 = (0);
while(true){
if((i__22444 < count__22443)){
var js_ns = chunk__22442.cljs$core$IIndexed$_nth$arity$2(null,i__22444);
var require_str_22841 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22841);


var G__22842 = seq__22441;
var G__22843 = chunk__22442;
var G__22844 = count__22443;
var G__22845 = (i__22444 + (1));
seq__22441 = G__22842;
chunk__22442 = G__22843;
count__22443 = G__22844;
i__22444 = G__22845;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22441);
if(temp__5804__auto__){
var seq__22441__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22441__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22441__$1);
var G__22846 = cljs.core.chunk_rest(seq__22441__$1);
var G__22847 = c__5568__auto__;
var G__22848 = cljs.core.count(c__5568__auto__);
var G__22849 = (0);
seq__22441 = G__22846;
chunk__22442 = G__22847;
count__22443 = G__22848;
i__22444 = G__22849;
continue;
} else {
var js_ns = cljs.core.first(seq__22441__$1);
var require_str_22850 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22850);


var G__22851 = cljs.core.next(seq__22441__$1);
var G__22852 = null;
var G__22853 = (0);
var G__22854 = (0);
seq__22441 = G__22851;
chunk__22442 = G__22852;
count__22443 = G__22853;
i__22444 = G__22854;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22450){
var map__22451 = p__22450;
var map__22451__$1 = cljs.core.__destructure_map(map__22451);
var msg = map__22451__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22451__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22451__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22452(s__22453){
return (new cljs.core.LazySeq(null,(function (){
var s__22453__$1 = s__22453;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22453__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22461 = cljs.core.first(xs__6360__auto__);
var map__22461__$1 = cljs.core.__destructure_map(map__22461);
var src = map__22461__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22461__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22461__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22453__$1,map__22461,map__22461__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22451,map__22451__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22452_$_iter__22454(s__22455){
return (new cljs.core.LazySeq(null,((function (s__22453__$1,map__22461,map__22461__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22451,map__22451__$1,msg,info,reload_info){
return (function (){
var s__22455__$1 = s__22455;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22455__$1);
if(temp__5804__auto____$1){
var s__22455__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22455__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22455__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22457 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22456 = (0);
while(true){
if((i__22456 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22456);
cljs.core.chunk_append(b__22457,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22856 = (i__22456 + (1));
i__22456 = G__22856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22457),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22452_$_iter__22454(cljs.core.chunk_rest(s__22455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22457),null);
}
} else {
var warning = cljs.core.first(s__22455__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22452_$_iter__22454(cljs.core.rest(s__22455__$2)));
}
} else {
return null;
}
break;
}
});})(s__22453__$1,map__22461,map__22461__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22451,map__22451__$1,msg,info,reload_info))
,null,null));
});})(s__22453__$1,map__22461,map__22461__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22451,map__22451__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22452(cljs.core.rest(s__22453__$1)));
} else {
var G__22857 = cljs.core.rest(s__22453__$1);
s__22453__$1 = G__22857;
continue;
}
} else {
var G__22858 = cljs.core.rest(s__22453__$1);
s__22453__$1 = G__22858;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22465_22859 = cljs.core.seq(warnings);
var chunk__22466_22860 = null;
var count__22467_22861 = (0);
var i__22468_22862 = (0);
while(true){
if((i__22468_22862 < count__22467_22861)){
var map__22471_22863 = chunk__22466_22860.cljs$core$IIndexed$_nth$arity$2(null,i__22468_22862);
var map__22471_22864__$1 = cljs.core.__destructure_map(map__22471_22863);
var w_22865 = map__22471_22864__$1;
var msg_22866__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22471_22864__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22471_22864__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22471_22864__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22471_22864__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22869)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22867),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22868),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22866__$1)].join(''));


var G__22870 = seq__22465_22859;
var G__22871 = chunk__22466_22860;
var G__22872 = count__22467_22861;
var G__22873 = (i__22468_22862 + (1));
seq__22465_22859 = G__22870;
chunk__22466_22860 = G__22871;
count__22467_22861 = G__22872;
i__22468_22862 = G__22873;
continue;
} else {
var temp__5804__auto___22874 = cljs.core.seq(seq__22465_22859);
if(temp__5804__auto___22874){
var seq__22465_22875__$1 = temp__5804__auto___22874;
if(cljs.core.chunked_seq_QMARK_(seq__22465_22875__$1)){
var c__5568__auto___22876 = cljs.core.chunk_first(seq__22465_22875__$1);
var G__22877 = cljs.core.chunk_rest(seq__22465_22875__$1);
var G__22878 = c__5568__auto___22876;
var G__22879 = cljs.core.count(c__5568__auto___22876);
var G__22880 = (0);
seq__22465_22859 = G__22877;
chunk__22466_22860 = G__22878;
count__22467_22861 = G__22879;
i__22468_22862 = G__22880;
continue;
} else {
var map__22472_22882 = cljs.core.first(seq__22465_22875__$1);
var map__22472_22883__$1 = cljs.core.__destructure_map(map__22472_22882);
var w_22884 = map__22472_22883__$1;
var msg_22885__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472_22883__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472_22883__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472_22883__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472_22883__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22888)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22886),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22887),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22885__$1)].join(''));


var G__22889 = cljs.core.next(seq__22465_22875__$1);
var G__22890 = null;
var G__22891 = (0);
var G__22892 = (0);
seq__22465_22859 = G__22889;
chunk__22466_22860 = G__22890;
count__22467_22861 = G__22891;
i__22468_22862 = G__22892;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22447_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22447_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22473){
var map__22474 = p__22473;
var map__22474__$1 = cljs.core.__destructure_map(map__22474);
var msg = map__22474__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22474__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22474__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22475 = cljs.core.seq(updates);
var chunk__22477 = null;
var count__22478 = (0);
var i__22479 = (0);
while(true){
if((i__22479 < count__22478)){
var path = chunk__22477.cljs$core$IIndexed$_nth$arity$2(null,i__22479);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22625_22893 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22629_22894 = null;
var count__22630_22895 = (0);
var i__22631_22896 = (0);
while(true){
if((i__22631_22896 < count__22630_22895)){
var node_22897 = chunk__22629_22894.cljs$core$IIndexed$_nth$arity$2(null,i__22631_22896);
if(cljs.core.not(node_22897.shadow$old)){
var path_match_22898 = shadow.cljs.devtools.client.browser.match_paths(node_22897.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22898)){
var new_link_22899 = (function (){var G__22689 = node_22897.cloneNode(true);
G__22689.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22898),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22689;
})();
(node_22897.shadow$old = true);

(new_link_22899.onload = ((function (seq__22625_22893,chunk__22629_22894,count__22630_22895,i__22631_22896,seq__22475,chunk__22477,count__22478,i__22479,new_link_22899,path_match_22898,node_22897,path,map__22474,map__22474__$1,msg,updates,reload_info){
return (function (e){
var seq__22690_22900 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22692_22901 = null;
var count__22693_22902 = (0);
var i__22694_22903 = (0);
while(true){
if((i__22694_22903 < count__22693_22902)){
var map__22700_22904 = chunk__22692_22901.cljs$core$IIndexed$_nth$arity$2(null,i__22694_22903);
var map__22700_22905__$1 = cljs.core.__destructure_map(map__22700_22904);
var task_22906 = map__22700_22905__$1;
var fn_str_22907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700_22905__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22700_22905__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22909 = goog.getObjectByName(fn_str_22907,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22908)].join(''));

(fn_obj_22909.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22909.cljs$core$IFn$_invoke$arity$2(path,new_link_22899) : fn_obj_22909.call(null,path,new_link_22899));


var G__22910 = seq__22690_22900;
var G__22911 = chunk__22692_22901;
var G__22912 = count__22693_22902;
var G__22913 = (i__22694_22903 + (1));
seq__22690_22900 = G__22910;
chunk__22692_22901 = G__22911;
count__22693_22902 = G__22912;
i__22694_22903 = G__22913;
continue;
} else {
var temp__5804__auto___22914 = cljs.core.seq(seq__22690_22900);
if(temp__5804__auto___22914){
var seq__22690_22915__$1 = temp__5804__auto___22914;
if(cljs.core.chunked_seq_QMARK_(seq__22690_22915__$1)){
var c__5568__auto___22916 = cljs.core.chunk_first(seq__22690_22915__$1);
var G__22917 = cljs.core.chunk_rest(seq__22690_22915__$1);
var G__22918 = c__5568__auto___22916;
var G__22919 = cljs.core.count(c__5568__auto___22916);
var G__22920 = (0);
seq__22690_22900 = G__22917;
chunk__22692_22901 = G__22918;
count__22693_22902 = G__22919;
i__22694_22903 = G__22920;
continue;
} else {
var map__22701_22921 = cljs.core.first(seq__22690_22915__$1);
var map__22701_22922__$1 = cljs.core.__destructure_map(map__22701_22921);
var task_22923 = map__22701_22922__$1;
var fn_str_22924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22701_22922__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22701_22922__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22926 = goog.getObjectByName(fn_str_22924,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22925)].join(''));

(fn_obj_22926.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22926.cljs$core$IFn$_invoke$arity$2(path,new_link_22899) : fn_obj_22926.call(null,path,new_link_22899));


var G__22927 = cljs.core.next(seq__22690_22915__$1);
var G__22928 = null;
var G__22929 = (0);
var G__22930 = (0);
seq__22690_22900 = G__22927;
chunk__22692_22901 = G__22928;
count__22693_22902 = G__22929;
i__22694_22903 = G__22930;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22897);
});})(seq__22625_22893,chunk__22629_22894,count__22630_22895,i__22631_22896,seq__22475,chunk__22477,count__22478,i__22479,new_link_22899,path_match_22898,node_22897,path,map__22474,map__22474__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22898], 0));

goog.dom.insertSiblingAfter(new_link_22899,node_22897);


var G__22931 = seq__22625_22893;
var G__22932 = chunk__22629_22894;
var G__22933 = count__22630_22895;
var G__22934 = (i__22631_22896 + (1));
seq__22625_22893 = G__22931;
chunk__22629_22894 = G__22932;
count__22630_22895 = G__22933;
i__22631_22896 = G__22934;
continue;
} else {
var G__22935 = seq__22625_22893;
var G__22936 = chunk__22629_22894;
var G__22937 = count__22630_22895;
var G__22938 = (i__22631_22896 + (1));
seq__22625_22893 = G__22935;
chunk__22629_22894 = G__22936;
count__22630_22895 = G__22937;
i__22631_22896 = G__22938;
continue;
}
} else {
var G__22939 = seq__22625_22893;
var G__22940 = chunk__22629_22894;
var G__22941 = count__22630_22895;
var G__22942 = (i__22631_22896 + (1));
seq__22625_22893 = G__22939;
chunk__22629_22894 = G__22940;
count__22630_22895 = G__22941;
i__22631_22896 = G__22942;
continue;
}
} else {
var temp__5804__auto___22943 = cljs.core.seq(seq__22625_22893);
if(temp__5804__auto___22943){
var seq__22625_22944__$1 = temp__5804__auto___22943;
if(cljs.core.chunked_seq_QMARK_(seq__22625_22944__$1)){
var c__5568__auto___22945 = cljs.core.chunk_first(seq__22625_22944__$1);
var G__22946 = cljs.core.chunk_rest(seq__22625_22944__$1);
var G__22947 = c__5568__auto___22945;
var G__22948 = cljs.core.count(c__5568__auto___22945);
var G__22949 = (0);
seq__22625_22893 = G__22946;
chunk__22629_22894 = G__22947;
count__22630_22895 = G__22948;
i__22631_22896 = G__22949;
continue;
} else {
var node_22950 = cljs.core.first(seq__22625_22944__$1);
if(cljs.core.not(node_22950.shadow$old)){
var path_match_22951 = shadow.cljs.devtools.client.browser.match_paths(node_22950.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22951)){
var new_link_22952 = (function (){var G__22706 = node_22950.cloneNode(true);
G__22706.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22951),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22706;
})();
(node_22950.shadow$old = true);

(new_link_22952.onload = ((function (seq__22625_22893,chunk__22629_22894,count__22630_22895,i__22631_22896,seq__22475,chunk__22477,count__22478,i__22479,new_link_22952,path_match_22951,node_22950,seq__22625_22944__$1,temp__5804__auto___22943,path,map__22474,map__22474__$1,msg,updates,reload_info){
return (function (e){
var seq__22707_22953 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22709_22954 = null;
var count__22710_22955 = (0);
var i__22711_22956 = (0);
while(true){
if((i__22711_22956 < count__22710_22955)){
var map__22715_22957 = chunk__22709_22954.cljs$core$IIndexed$_nth$arity$2(null,i__22711_22956);
var map__22715_22958__$1 = cljs.core.__destructure_map(map__22715_22957);
var task_22959 = map__22715_22958__$1;
var fn_str_22960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22715_22958__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22715_22958__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22962 = goog.getObjectByName(fn_str_22960,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22961)].join(''));

(fn_obj_22962.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22962.cljs$core$IFn$_invoke$arity$2(path,new_link_22952) : fn_obj_22962.call(null,path,new_link_22952));


var G__22963 = seq__22707_22953;
var G__22964 = chunk__22709_22954;
var G__22965 = count__22710_22955;
var G__22966 = (i__22711_22956 + (1));
seq__22707_22953 = G__22963;
chunk__22709_22954 = G__22964;
count__22710_22955 = G__22965;
i__22711_22956 = G__22966;
continue;
} else {
var temp__5804__auto___22967__$1 = cljs.core.seq(seq__22707_22953);
if(temp__5804__auto___22967__$1){
var seq__22707_22968__$1 = temp__5804__auto___22967__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22707_22968__$1)){
var c__5568__auto___22969 = cljs.core.chunk_first(seq__22707_22968__$1);
var G__22970 = cljs.core.chunk_rest(seq__22707_22968__$1);
var G__22971 = c__5568__auto___22969;
var G__22972 = cljs.core.count(c__5568__auto___22969);
var G__22973 = (0);
seq__22707_22953 = G__22970;
chunk__22709_22954 = G__22971;
count__22710_22955 = G__22972;
i__22711_22956 = G__22973;
continue;
} else {
var map__22716_22974 = cljs.core.first(seq__22707_22968__$1);
var map__22716_22975__$1 = cljs.core.__destructure_map(map__22716_22974);
var task_22976 = map__22716_22975__$1;
var fn_str_22977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22716_22975__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22716_22975__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22979 = goog.getObjectByName(fn_str_22977,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22978)].join(''));

(fn_obj_22979.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22979.cljs$core$IFn$_invoke$arity$2(path,new_link_22952) : fn_obj_22979.call(null,path,new_link_22952));


var G__22980 = cljs.core.next(seq__22707_22968__$1);
var G__22981 = null;
var G__22982 = (0);
var G__22983 = (0);
seq__22707_22953 = G__22980;
chunk__22709_22954 = G__22981;
count__22710_22955 = G__22982;
i__22711_22956 = G__22983;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22950);
});})(seq__22625_22893,chunk__22629_22894,count__22630_22895,i__22631_22896,seq__22475,chunk__22477,count__22478,i__22479,new_link_22952,path_match_22951,node_22950,seq__22625_22944__$1,temp__5804__auto___22943,path,map__22474,map__22474__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22951], 0));

goog.dom.insertSiblingAfter(new_link_22952,node_22950);


var G__22984 = cljs.core.next(seq__22625_22944__$1);
var G__22985 = null;
var G__22986 = (0);
var G__22987 = (0);
seq__22625_22893 = G__22984;
chunk__22629_22894 = G__22985;
count__22630_22895 = G__22986;
i__22631_22896 = G__22987;
continue;
} else {
var G__22988 = cljs.core.next(seq__22625_22944__$1);
var G__22989 = null;
var G__22990 = (0);
var G__22991 = (0);
seq__22625_22893 = G__22988;
chunk__22629_22894 = G__22989;
count__22630_22895 = G__22990;
i__22631_22896 = G__22991;
continue;
}
} else {
var G__22992 = cljs.core.next(seq__22625_22944__$1);
var G__22993 = null;
var G__22994 = (0);
var G__22995 = (0);
seq__22625_22893 = G__22992;
chunk__22629_22894 = G__22993;
count__22630_22895 = G__22994;
i__22631_22896 = G__22995;
continue;
}
}
} else {
}
}
break;
}


var G__22996 = seq__22475;
var G__22997 = chunk__22477;
var G__22998 = count__22478;
var G__22999 = (i__22479 + (1));
seq__22475 = G__22996;
chunk__22477 = G__22997;
count__22478 = G__22998;
i__22479 = G__22999;
continue;
} else {
var G__23000 = seq__22475;
var G__23001 = chunk__22477;
var G__23002 = count__22478;
var G__23003 = (i__22479 + (1));
seq__22475 = G__23000;
chunk__22477 = G__23001;
count__22478 = G__23002;
i__22479 = G__23003;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22475);
if(temp__5804__auto__){
var seq__22475__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22475__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22475__$1);
var G__23004 = cljs.core.chunk_rest(seq__22475__$1);
var G__23005 = c__5568__auto__;
var G__23006 = cljs.core.count(c__5568__auto__);
var G__23007 = (0);
seq__22475 = G__23004;
chunk__22477 = G__23005;
count__22478 = G__23006;
i__22479 = G__23007;
continue;
} else {
var path = cljs.core.first(seq__22475__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22719_23008 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22723_23009 = null;
var count__22724_23010 = (0);
var i__22725_23011 = (0);
while(true){
if((i__22725_23011 < count__22724_23010)){
var node_23012 = chunk__22723_23009.cljs$core$IIndexed$_nth$arity$2(null,i__22725_23011);
if(cljs.core.not(node_23012.shadow$old)){
var path_match_23013 = shadow.cljs.devtools.client.browser.match_paths(node_23012.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23013)){
var new_link_23014 = (function (){var G__22757 = node_23012.cloneNode(true);
G__22757.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23013),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22757;
})();
(node_23012.shadow$old = true);

(new_link_23014.onload = ((function (seq__22719_23008,chunk__22723_23009,count__22724_23010,i__22725_23011,seq__22475,chunk__22477,count__22478,i__22479,new_link_23014,path_match_23013,node_23012,path,seq__22475__$1,temp__5804__auto__,map__22474,map__22474__$1,msg,updates,reload_info){
return (function (e){
var seq__22758_23015 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22760_23016 = null;
var count__22761_23017 = (0);
var i__22762_23018 = (0);
while(true){
if((i__22762_23018 < count__22761_23017)){
var map__22766_23019 = chunk__22760_23016.cljs$core$IIndexed$_nth$arity$2(null,i__22762_23018);
var map__22766_23020__$1 = cljs.core.__destructure_map(map__22766_23019);
var task_23021 = map__22766_23020__$1;
var fn_str_23022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22766_23020__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22766_23020__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23024 = goog.getObjectByName(fn_str_23022,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23023)].join(''));

(fn_obj_23024.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23024.cljs$core$IFn$_invoke$arity$2(path,new_link_23014) : fn_obj_23024.call(null,path,new_link_23014));


var G__23025 = seq__22758_23015;
var G__23026 = chunk__22760_23016;
var G__23027 = count__22761_23017;
var G__23028 = (i__22762_23018 + (1));
seq__22758_23015 = G__23025;
chunk__22760_23016 = G__23026;
count__22761_23017 = G__23027;
i__22762_23018 = G__23028;
continue;
} else {
var temp__5804__auto___23029__$1 = cljs.core.seq(seq__22758_23015);
if(temp__5804__auto___23029__$1){
var seq__22758_23030__$1 = temp__5804__auto___23029__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22758_23030__$1)){
var c__5568__auto___23031 = cljs.core.chunk_first(seq__22758_23030__$1);
var G__23032 = cljs.core.chunk_rest(seq__22758_23030__$1);
var G__23033 = c__5568__auto___23031;
var G__23034 = cljs.core.count(c__5568__auto___23031);
var G__23035 = (0);
seq__22758_23015 = G__23032;
chunk__22760_23016 = G__23033;
count__22761_23017 = G__23034;
i__22762_23018 = G__23035;
continue;
} else {
var map__22767_23036 = cljs.core.first(seq__22758_23030__$1);
var map__22767_23037__$1 = cljs.core.__destructure_map(map__22767_23036);
var task_23038 = map__22767_23037__$1;
var fn_str_23039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22767_23037__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22767_23037__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23041 = goog.getObjectByName(fn_str_23039,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23040)].join(''));

(fn_obj_23041.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23041.cljs$core$IFn$_invoke$arity$2(path,new_link_23014) : fn_obj_23041.call(null,path,new_link_23014));


var G__23042 = cljs.core.next(seq__22758_23030__$1);
var G__23043 = null;
var G__23044 = (0);
var G__23045 = (0);
seq__22758_23015 = G__23042;
chunk__22760_23016 = G__23043;
count__22761_23017 = G__23044;
i__22762_23018 = G__23045;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23012);
});})(seq__22719_23008,chunk__22723_23009,count__22724_23010,i__22725_23011,seq__22475,chunk__22477,count__22478,i__22479,new_link_23014,path_match_23013,node_23012,path,seq__22475__$1,temp__5804__auto__,map__22474,map__22474__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23013], 0));

goog.dom.insertSiblingAfter(new_link_23014,node_23012);


var G__23046 = seq__22719_23008;
var G__23047 = chunk__22723_23009;
var G__23048 = count__22724_23010;
var G__23049 = (i__22725_23011 + (1));
seq__22719_23008 = G__23046;
chunk__22723_23009 = G__23047;
count__22724_23010 = G__23048;
i__22725_23011 = G__23049;
continue;
} else {
var G__23050 = seq__22719_23008;
var G__23051 = chunk__22723_23009;
var G__23052 = count__22724_23010;
var G__23053 = (i__22725_23011 + (1));
seq__22719_23008 = G__23050;
chunk__22723_23009 = G__23051;
count__22724_23010 = G__23052;
i__22725_23011 = G__23053;
continue;
}
} else {
var G__23054 = seq__22719_23008;
var G__23055 = chunk__22723_23009;
var G__23056 = count__22724_23010;
var G__23057 = (i__22725_23011 + (1));
seq__22719_23008 = G__23054;
chunk__22723_23009 = G__23055;
count__22724_23010 = G__23056;
i__22725_23011 = G__23057;
continue;
}
} else {
var temp__5804__auto___23058__$1 = cljs.core.seq(seq__22719_23008);
if(temp__5804__auto___23058__$1){
var seq__22719_23059__$1 = temp__5804__auto___23058__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22719_23059__$1)){
var c__5568__auto___23060 = cljs.core.chunk_first(seq__22719_23059__$1);
var G__23061 = cljs.core.chunk_rest(seq__22719_23059__$1);
var G__23062 = c__5568__auto___23060;
var G__23063 = cljs.core.count(c__5568__auto___23060);
var G__23064 = (0);
seq__22719_23008 = G__23061;
chunk__22723_23009 = G__23062;
count__22724_23010 = G__23063;
i__22725_23011 = G__23064;
continue;
} else {
var node_23065 = cljs.core.first(seq__22719_23059__$1);
if(cljs.core.not(node_23065.shadow$old)){
var path_match_23066 = shadow.cljs.devtools.client.browser.match_paths(node_23065.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23066)){
var new_link_23067 = (function (){var G__22768 = node_23065.cloneNode(true);
G__22768.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23066),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22768;
})();
(node_23065.shadow$old = true);

(new_link_23067.onload = ((function (seq__22719_23008,chunk__22723_23009,count__22724_23010,i__22725_23011,seq__22475,chunk__22477,count__22478,i__22479,new_link_23067,path_match_23066,node_23065,seq__22719_23059__$1,temp__5804__auto___23058__$1,path,seq__22475__$1,temp__5804__auto__,map__22474,map__22474__$1,msg,updates,reload_info){
return (function (e){
var seq__22769_23068 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22771_23069 = null;
var count__22772_23070 = (0);
var i__22773_23071 = (0);
while(true){
if((i__22773_23071 < count__22772_23070)){
var map__22777_23072 = chunk__22771_23069.cljs$core$IIndexed$_nth$arity$2(null,i__22773_23071);
var map__22777_23073__$1 = cljs.core.__destructure_map(map__22777_23072);
var task_23074 = map__22777_23073__$1;
var fn_str_23075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22777_23073__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22777_23073__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23077 = goog.getObjectByName(fn_str_23075,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23076)].join(''));

(fn_obj_23077.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23077.cljs$core$IFn$_invoke$arity$2(path,new_link_23067) : fn_obj_23077.call(null,path,new_link_23067));


var G__23078 = seq__22769_23068;
var G__23079 = chunk__22771_23069;
var G__23080 = count__22772_23070;
var G__23081 = (i__22773_23071 + (1));
seq__22769_23068 = G__23078;
chunk__22771_23069 = G__23079;
count__22772_23070 = G__23080;
i__22773_23071 = G__23081;
continue;
} else {
var temp__5804__auto___23082__$2 = cljs.core.seq(seq__22769_23068);
if(temp__5804__auto___23082__$2){
var seq__22769_23083__$1 = temp__5804__auto___23082__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22769_23083__$1)){
var c__5568__auto___23084 = cljs.core.chunk_first(seq__22769_23083__$1);
var G__23085 = cljs.core.chunk_rest(seq__22769_23083__$1);
var G__23086 = c__5568__auto___23084;
var G__23087 = cljs.core.count(c__5568__auto___23084);
var G__23088 = (0);
seq__22769_23068 = G__23085;
chunk__22771_23069 = G__23086;
count__22772_23070 = G__23087;
i__22773_23071 = G__23088;
continue;
} else {
var map__22782_23089 = cljs.core.first(seq__22769_23083__$1);
var map__22782_23090__$1 = cljs.core.__destructure_map(map__22782_23089);
var task_23091 = map__22782_23090__$1;
var fn_str_23092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22782_23090__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22782_23090__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23096 = goog.getObjectByName(fn_str_23092,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23093)].join(''));

(fn_obj_23096.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23096.cljs$core$IFn$_invoke$arity$2(path,new_link_23067) : fn_obj_23096.call(null,path,new_link_23067));


var G__23097 = cljs.core.next(seq__22769_23083__$1);
var G__23098 = null;
var G__23099 = (0);
var G__23100 = (0);
seq__22769_23068 = G__23097;
chunk__22771_23069 = G__23098;
count__22772_23070 = G__23099;
i__22773_23071 = G__23100;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23065);
});})(seq__22719_23008,chunk__22723_23009,count__22724_23010,i__22725_23011,seq__22475,chunk__22477,count__22478,i__22479,new_link_23067,path_match_23066,node_23065,seq__22719_23059__$1,temp__5804__auto___23058__$1,path,seq__22475__$1,temp__5804__auto__,map__22474,map__22474__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23066], 0));

goog.dom.insertSiblingAfter(new_link_23067,node_23065);


var G__23101 = cljs.core.next(seq__22719_23059__$1);
var G__23102 = null;
var G__23103 = (0);
var G__23104 = (0);
seq__22719_23008 = G__23101;
chunk__22723_23009 = G__23102;
count__22724_23010 = G__23103;
i__22725_23011 = G__23104;
continue;
} else {
var G__23105 = cljs.core.next(seq__22719_23059__$1);
var G__23106 = null;
var G__23107 = (0);
var G__23108 = (0);
seq__22719_23008 = G__23105;
chunk__22723_23009 = G__23106;
count__22724_23010 = G__23107;
i__22725_23011 = G__23108;
continue;
}
} else {
var G__23109 = cljs.core.next(seq__22719_23059__$1);
var G__23110 = null;
var G__23111 = (0);
var G__23112 = (0);
seq__22719_23008 = G__23109;
chunk__22723_23009 = G__23110;
count__22724_23010 = G__23111;
i__22725_23011 = G__23112;
continue;
}
}
} else {
}
}
break;
}


var G__23113 = cljs.core.next(seq__22475__$1);
var G__23114 = null;
var G__23115 = (0);
var G__23116 = (0);
seq__22475 = G__23113;
chunk__22477 = G__23114;
count__22478 = G__23115;
i__22479 = G__23116;
continue;
} else {
var G__23117 = cljs.core.next(seq__22475__$1);
var G__23118 = null;
var G__23119 = (0);
var G__23120 = (0);
seq__22475 = G__23117;
chunk__22477 = G__23118;
count__22478 = G__23119;
i__22479 = G__23120;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__22785){
var map__22786 = p__22785;
var map__22786__$1 = cljs.core.__destructure_map(map__22786);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__22790){
var map__22791 = p__22790;
var map__22791__$1 = cljs.core.__destructure_map(map__22791);
var _ = map__22791__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22791__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22792,done,error){
var map__22793 = p__22792;
var map__22793__$1 = cljs.core.__destructure_map(map__22793);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22793__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22794,done,error){
var map__22795 = p__22794;
var map__22795__$1 = cljs.core.__destructure_map(map__22795);
var msg = map__22795__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22795__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22795__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22795__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22796){
var map__22797 = p__22796;
var map__22797__$1 = cljs.core.__destructure_map(map__22797);
var src = map__22797__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22801 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22801) : done.call(null,G__22801));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22804){
var map__22805 = p__22804;
var map__22805__$1 = cljs.core.__destructure_map(map__22805);
var msg__$1 = map__22805__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22806){var ex = e22806;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22807){
var map__22808 = p__22807;
var map__22808__$1 = cljs.core.__destructure_map(map__22808);
var env = map__22808__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22808__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22811){
var map__22812 = p__22811;
var map__22812__$1 = cljs.core.__destructure_map(map__22812);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22812__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22812__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22813){
var map__22814 = p__22813;
var map__22814__$1 = cljs.core.__destructure_map(map__22814);
var svc = map__22814__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22814__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
