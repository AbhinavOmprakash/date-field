goog.provide('date_field.views');
if((typeof date_field !== 'undefined') && (typeof date_field.views !== 'undefined') && (typeof date_field.views.subscriptions !== 'undefined')){
} else {
date_field.views.subscriptions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
date_field.views.panel_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date-field","date-field",683971009),"",new cljs.core.Keyword(null,"date-range","date-range",63083517),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),"",new cljs.core.Keyword(null,"end","end",-268185958),""], null),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-field","date-field",683971009),false,new cljs.core.Keyword(null,"date-range","date-range",63083517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),false,new cljs.core.Keyword(null,"end","end",-268185958),false,new cljs.core.Keyword(null,"value","value",305978217),false], null)], null)], null));
date_field.views.subscribe = (function date_field$views$subscribe(key_,ks){
var f = (function (p1__43572_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__43572_SHARP_,ks);
});
var atm = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(f(cljs.core.deref(date_field.views.panel_state)));
if(cljs.core.contains_QMARK_(cljs.core.deref(date_field.views.subscriptions),key_)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(date_field.views.subscriptions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"state","state",-1988618099)], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(date_field.views.subscriptions,cljs.core.assoc,key_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__43573_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__43573_SHARP_,ks);
}),new cljs.core.Keyword(null,"state","state",-1988618099),atm], null));

return atm;
}
});
date_field.views.contains_errors_QMARK_ = (function date_field$views$contains_errors_QMARK_(m){
var child_nodes = (function date_field$views$contains_errors_QMARK__$_this(m__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,el){
if(cljs.core.map_entry_QMARK_(el)){
var value = cljs.core.val(el);
if(cljs.core.boolean_QMARK_(value)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,value);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,date_field$views$contains_errors_QMARK__$_this(value));
} else {
return null;
}
}
} else {
return el;
}
}),cljs.core.PersistentVector.EMPTY,m__$1);
});
return (!(cljs.core.every_QMARK_(cljs.core.false_QMARK_,child_nodes(m))));
});
date_field.views.submit_button = (function date_field$views$submit_button(p__43574){
var map__43575 = p__43574;
var map__43575__$1 = cljs.core.__destructure_map(map__43575);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43575__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var subscription_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43575__$1,new cljs.core.Keyword(null,"subscription-path","subscription-path",402729161));
var enabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43575__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43575__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.identity);
var errors = cljs.core.deref(date_field.views.subscribe(id,subscription_path));
var enabled_QMARK___$1 = (!(date_field.views.contains_errors_QMARK_(errors)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button","my-3","is-dark"], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(enabled_QMARK___$1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),"submit"], null);
});
date_field.views.valid_date_format_QMARK_ = (function date_field$views$valid_date_format_QMARK_(date){
return ((cljs.core.empty_QMARK_(date)) || (cljs.core.boolean$(cljs.core.re_matches(/[\d]{2}\-[\d]{2}\-[\d]{4}/,date))));
});
date_field.views.date_field = (function date_field$views$date_field(p__43576){
var map__43577 = p__43576;
var map__43577__$1 = cljs.core.__destructure_map(map__43577);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var subscription_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43577__$1,new cljs.core.Keyword(null,"subscription-path","subscription-path",402729161));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43577__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.identity);
var on_error_resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43577__$1,new cljs.core.Keyword(null,"on-error-resolved","on-error-resolved",1747751983),cljs.core.identity);
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43577__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366),cljs.core.identity);
var continuation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43577__$1,new cljs.core.Keyword(null,"continuation","continuation",-1105939625),cljs.core.identity);
return (function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continuation",continuation], 0));

var G__43578 = (function (){var value = cljs.core.deref(date_field.views.subscribe(id,subscription_path));
var valid_input_QMARK_ = date_field.views.valid_date_format_QMARK_(value);
if(valid_input_QMARK_){
(on_error_resolved.cljs$core$IFn$_invoke$arity$0 ? on_error_resolved.cljs$core$IFn$_invoke$arity$0() : on_error_resolved.call(null));
} else {
(on_error.cljs$core$IFn$_invoke$arity$0 ? on_error.cljs$core$IFn$_invoke$arity$0() : on_error.call(null));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input",((valid_input_QMARK_)?null:"is-danger")], null),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"DD-MM-YYYY",new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (x){
var G__43579 = x.target.value;
return (on_input.cljs$core$IFn$_invoke$arity$1 ? on_input.cljs$core$IFn$_invoke$arity$1(G__43579) : on_input.call(null,G__43579));
})], null)], null),(((!(valid_input_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"help is-danger"], null),"incorrect input date format, use DD-MM-YYYY"], null):null)], null);
})();
return (continuation.cljs$core$IFn$_invoke$arity$1 ? continuation.cljs$core$IFn$_invoke$arity$1(G__43578) : continuation.call(null,G__43578));
});
});
date_field.views.dates_are_ascending_QMARK_ = (function date_field$views$dates_are_ascending_QMARK_(a,b){
var vec__43580 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(a,/-/);
var d_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43580,(0),null);
var m_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43580,(1),null);
var y_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43580,(2),null);
var vec__43583 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(b,/-/);
var d_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43583,(0),null);
var m_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43583,(1),null);
var y_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43583,(2),null);
var comp_ = cljs.core.compare(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_a,m_a,d_a], null)),clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_b,m_b,d_b], null)));
return (((comp_ < (0))) || ((comp_ === (0))));
});
date_field.views.date_range = (function date_field$views$date_range(p__43594){
var map__43595 = p__43594;
var map__43595__$1 = cljs.core.__destructure_map(map__43595);
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43595__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43595__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43595__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var subscription_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43595__$1,new cljs.core.Keyword(null,"subscription-path","subscription-path",402729161));
var on_error_resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43595__$1,new cljs.core.Keyword(null,"on-error-resolved","on-error-resolved",1747751983));
var start_date = cljs.core.deref(date_field.views.subscribe(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(id),"-","start"].join('')),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subscription_path,new cljs.core.Keyword(null,"start","start",-355208981))));
var end_date = cljs.core.deref(date_field.views.subscribe(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(id),"-","end"].join('')),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subscription_path,new cljs.core.Keyword(null,"end","end",-268185958))));
var valid_date_range_QMARK_ = date_field.views.dates_are_ascending_QMARK_(start_date,end_date);
var date_field_continuation = (function (hiccup){
if(cljs.core.truth_(cljs.core.deref(date_field.views.subscribe(new cljs.core.Keyword(null,"date-range-error","date-range-error",-1929108040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"date-range","date-range",63083517),new cljs.core.Keyword(null,"value","value",305978217)], null))))){
var G__43596 = hiccup;
var G__43596__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__43596,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),new cljs.core.Keyword(null,"class","class",-2030961996)], null),cljs.core.conj,"is-danger")
;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.last(hiccup)),new cljs.core.Keyword(null,"p","p",151049309))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__43596__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"help is-danger"], null),"Incorrect date range. Start date can't be before end date."], null));
} else {
return G__43596__$1;
}
} else {
return hiccup;
}
});
if((((!(clojure.string.blank_QMARK_(start_date)))) && ((((!(clojure.string.blank_QMARK_(end_date)))) && (((date_field.views.valid_date_format_QMARK_(start_date)) && (date_field.views.valid_date_format_QMARK_(end_date)))))))){
if(valid_date_range_QMARK_){
var G__43597_43625 = (function (p1__43586_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43586_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),false);
});
(on_error_resolved.cljs$core$IFn$_invoke$arity$1 ? on_error_resolved.cljs$core$IFn$_invoke$arity$1(G__43597_43625) : on_error_resolved.call(null,G__43597_43625));
} else {
var G__43598_43626 = (function (p1__43587_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43587_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),true);
});
(on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__43598_43626) : on_error.call(null,G__43598_43626));
}
} else {
}

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["my-6","is-flex is-align-items-center "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pr-3"], null),"from"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pr-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_field.views.date_field,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(id),"-","start"].join('')),new cljs.core.Keyword(null,"subscription-path","subscription-path",402729161),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subscription_path,new cljs.core.Keyword(null,"start","start",-355208981)),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (x){
var G__43599 = (function (p1__43588_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43588_SHARP_,new cljs.core.Keyword(null,"start","start",-355208981),x);
});
return (on_input.cljs$core$IFn$_invoke$arity$1 ? on_input.cljs$core$IFn$_invoke$arity$1(G__43599) : on_input.call(null,G__43599));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
var G__43600 = (function (p1__43589_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43589_SHARP_,new cljs.core.Keyword(null,"start","start",-355208981),true);
});
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__43600) : on_error.call(null,G__43600));
}),new cljs.core.Keyword(null,"on-error-resolved","on-error-resolved",1747751983),(function (){
var G__43601 = (function (p1__43590_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43590_SHARP_,new cljs.core.Keyword(null,"start","start",-355208981),false);
});
return (on_error_resolved.cljs$core$IFn$_invoke$arity$1 ? on_error_resolved.cljs$core$IFn$_invoke$arity$1(G__43601) : on_error_resolved.call(null,G__43601));
}),new cljs.core.Keyword(null,"continuation","continuation",-1105939625),date_field_continuation], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pr-3"], null),"to"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pr-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_field.views.date_field,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(id),"-","end"].join('')),new cljs.core.Keyword(null,"subscription-path","subscription-path",402729161),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subscription_path,new cljs.core.Keyword(null,"end","end",-268185958)),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (x){
var G__43602 = (function (p1__43591_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43591_SHARP_,new cljs.core.Keyword(null,"end","end",-268185958),x);
});
return (on_input.cljs$core$IFn$_invoke$arity$1 ? on_input.cljs$core$IFn$_invoke$arity$1(G__43602) : on_input.call(null,G__43602));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
var G__43603 = (function (p1__43592_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43592_SHARP_,new cljs.core.Keyword(null,"end","end",-268185958),true);
});
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__43603) : on_error.call(null,G__43603));
}),new cljs.core.Keyword(null,"on-error-resolved","on-error-resolved",1747751983),(function (){
var G__43604 = (function (p1__43593_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43593_SHARP_,new cljs.core.Keyword(null,"end","end",-268185958),false);
});
return (on_error_resolved.cljs$core$IFn$_invoke$arity$1 ? on_error_resolved.cljs$core$IFn$_invoke$arity$1(G__43604) : on_error_resolved.call(null,G__43604));
}),new cljs.core.Keyword(null,"continuation","continuation",-1105939625),date_field_continuation], null)], null)], null)], null);
});
date_field.views.watch_and_call_subscriptions = (function date_field$views$watch_and_call_subscriptions(_key,_ref,old_value,new_value){
var seq__43605 = cljs.core.seq(cljs.core.deref(date_field.views.subscriptions));
var chunk__43606 = null;
var count__43607 = (0);
var i__43608 = (0);
while(true){
if((i__43608 < count__43607)){
var vec__43617 = chunk__43606.cljs$core$IIndexed$_nth$arity$2(null,i__43608);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43617,(0),null);
var map__43620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43617,(1),null);
var map__43620__$1 = cljs.core.__destructure_map(map__43620);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43620__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43620__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_value) : f.call(null,old_value)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_value) : f.call(null,new_value)))){
cljs.core.reset_BANG_(state,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_value) : f.call(null,new_value)));
} else {
}


var G__43627 = seq__43605;
var G__43628 = chunk__43606;
var G__43629 = count__43607;
var G__43630 = (i__43608 + (1));
seq__43605 = G__43627;
chunk__43606 = G__43628;
count__43607 = G__43629;
i__43608 = G__43630;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43605);
if(temp__5804__auto__){
var seq__43605__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43605__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43605__$1);
var G__43631 = cljs.core.chunk_rest(seq__43605__$1);
var G__43632 = c__5568__auto__;
var G__43633 = cljs.core.count(c__5568__auto__);
var G__43634 = (0);
seq__43605 = G__43631;
chunk__43606 = G__43632;
count__43607 = G__43633;
i__43608 = G__43634;
continue;
} else {
var vec__43621 = cljs.core.first(seq__43605__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43621,(0),null);
var map__43624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43621,(1),null);
var map__43624__$1 = cljs.core.__destructure_map(map__43624);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43624__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43624__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_value) : f.call(null,old_value)),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_value) : f.call(null,new_value)))){
cljs.core.reset_BANG_(state,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_value) : f.call(null,new_value)));
} else {
}


var G__43635 = cljs.core.next(seq__43605__$1);
var G__43636 = null;
var G__43637 = (0);
var G__43638 = (0);
seq__43605 = G__43635;
chunk__43606 = G__43636;
count__43607 = G__43637;
i__43608 = G__43638;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.add_watch(date_field.views.panel_state,new cljs.core.Keyword(null,"watch-global-state","watch-global-state",1188195436),date_field.views.watch_and_call_subscriptions);
date_field.views.main_panel = (function date_field$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container","my-6"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_field.views.date_field,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(date_field.views.panel_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"date-field","date-field",683971009)], null),true);
}),new cljs.core.Keyword(null,"on-error-resolved","on-error-resolved",1747751983),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(date_field.views.panel_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"date-field","date-field",683971009)], null),false);
}),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-field","date-field",683971009),new cljs.core.Keyword(null,"subscription-path","subscription-path",402729161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-field","date-field",683971009)], null),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (x){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(date_field.views.panel_state,cljs.core.assoc,new cljs.core.Keyword(null,"date-field","date-field",683971009),x);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_field.views.date_range,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"date-range","date-range",63083517),new cljs.core.Keyword(null,"subscription-path","subscription-path",402729161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-range","date-range",63083517)], null),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(date_field.views.panel_state,cljs.core.update,new cljs.core.Keyword(null,"date-range","date-range",63083517),f);
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(date_field.views.panel_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"date-range","date-range",63083517)], null),f);
}),new cljs.core.Keyword(null,"on-error-resolved","on-error-resolved",1747751983),(function (f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(date_field.views.panel_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"date-range","date-range",63083517)], null),f);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_field.views.submit_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"submit-button","submit-button",-1260759784),new cljs.core.Keyword(null,"subscription-path","subscription-path",402729161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(date_field.views.panel_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-field","date-field",683971009),"",new cljs.core.Keyword(null,"date-range","date-range",63083517),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),"",new cljs.core.Keyword(null,"end","end",-268185958),""], null)], null));
})], null)], null)], null);
});
});

//# sourceMappingURL=date_field.views.js.map
