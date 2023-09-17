goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20590 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20590(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20594 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20594(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19636 = coll;
var G__19637 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19636,G__19637) : shadow.dom.lazy_native_coll_seq.call(null,G__19636,G__19637));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19652 = arguments.length;
switch (G__19652) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19657 = arguments.length;
switch (G__19657) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19662 = arguments.length;
switch (G__19662) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19667 = arguments.length;
switch (G__19667) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19690 = arguments.length;
switch (G__19690) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19710 = arguments.length;
switch (G__19710) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19717){if((e19717 instanceof Object)){
var e = e19717;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19717;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19720 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19721 = null;
var count__19722 = (0);
var i__19723 = (0);
while(true){
if((i__19723 < count__19722)){
var el = chunk__19721.cljs$core$IIndexed$_nth$arity$2(null,i__19723);
var handler_20645__$1 = ((function (seq__19720,chunk__19721,count__19722,i__19723,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19720,chunk__19721,count__19722,i__19723,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20645__$1);


var G__20647 = seq__19720;
var G__20648 = chunk__19721;
var G__20649 = count__19722;
var G__20650 = (i__19723 + (1));
seq__19720 = G__20647;
chunk__19721 = G__20648;
count__19722 = G__20649;
i__19723 = G__20650;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19720);
if(temp__5804__auto__){
var seq__19720__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19720__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19720__$1);
var G__20652 = cljs.core.chunk_rest(seq__19720__$1);
var G__20653 = c__5568__auto__;
var G__20654 = cljs.core.count(c__5568__auto__);
var G__20655 = (0);
seq__19720 = G__20652;
chunk__19721 = G__20653;
count__19722 = G__20654;
i__19723 = G__20655;
continue;
} else {
var el = cljs.core.first(seq__19720__$1);
var handler_20656__$1 = ((function (seq__19720,chunk__19721,count__19722,i__19723,el,seq__19720__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19720,chunk__19721,count__19722,i__19723,el,seq__19720__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20656__$1);


var G__20658 = cljs.core.next(seq__19720__$1);
var G__20659 = null;
var G__20660 = (0);
var G__20661 = (0);
seq__19720 = G__20658;
chunk__19721 = G__20659;
count__19722 = G__20660;
i__19723 = G__20661;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19739 = arguments.length;
switch (G__19739) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19753 = cljs.core.seq(events);
var chunk__19754 = null;
var count__19755 = (0);
var i__19756 = (0);
while(true){
if((i__19756 < count__19755)){
var vec__19772 = chunk__19754.cljs$core$IIndexed$_nth$arity$2(null,i__19756);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19772,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20687 = seq__19753;
var G__20688 = chunk__19754;
var G__20689 = count__19755;
var G__20690 = (i__19756 + (1));
seq__19753 = G__20687;
chunk__19754 = G__20688;
count__19755 = G__20689;
i__19756 = G__20690;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19753);
if(temp__5804__auto__){
var seq__19753__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19753__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19753__$1);
var G__20691 = cljs.core.chunk_rest(seq__19753__$1);
var G__20692 = c__5568__auto__;
var G__20693 = cljs.core.count(c__5568__auto__);
var G__20694 = (0);
seq__19753 = G__20691;
chunk__19754 = G__20692;
count__19755 = G__20693;
i__19756 = G__20694;
continue;
} else {
var vec__19776 = cljs.core.first(seq__19753__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19776,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19776,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20695 = cljs.core.next(seq__19753__$1);
var G__20696 = null;
var G__20697 = (0);
var G__20698 = (0);
seq__19753 = G__20695;
chunk__19754 = G__20696;
count__19755 = G__20697;
i__19756 = G__20698;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19783 = cljs.core.seq(styles);
var chunk__19784 = null;
var count__19785 = (0);
var i__19786 = (0);
while(true){
if((i__19786 < count__19785)){
var vec__19799 = chunk__19784.cljs$core$IIndexed$_nth$arity$2(null,i__19786);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19799,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20701 = seq__19783;
var G__20702 = chunk__19784;
var G__20703 = count__19785;
var G__20704 = (i__19786 + (1));
seq__19783 = G__20701;
chunk__19784 = G__20702;
count__19785 = G__20703;
i__19786 = G__20704;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19783);
if(temp__5804__auto__){
var seq__19783__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19783__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19783__$1);
var G__20706 = cljs.core.chunk_rest(seq__19783__$1);
var G__20707 = c__5568__auto__;
var G__20708 = cljs.core.count(c__5568__auto__);
var G__20709 = (0);
seq__19783 = G__20706;
chunk__19784 = G__20707;
count__19785 = G__20708;
i__19786 = G__20709;
continue;
} else {
var vec__19806 = cljs.core.first(seq__19783__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19806,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19806,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20712 = cljs.core.next(seq__19783__$1);
var G__20713 = null;
var G__20714 = (0);
var G__20715 = (0);
seq__19783 = G__20712;
chunk__19784 = G__20713;
count__19785 = G__20714;
i__19786 = G__20715;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19816_20717 = key;
var G__19816_20718__$1 = (((G__19816_20717 instanceof cljs.core.Keyword))?G__19816_20717.fqn:null);
switch (G__19816_20718__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20724 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20724,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20724,"aria-");
}
})())){
el.setAttribute(ks_20724,value);
} else {
(el[ks_20724] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19835){
var map__19836 = p__19835;
var map__19836__$1 = cljs.core.__destructure_map(map__19836);
var props = map__19836__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19836__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19838 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19838,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19838,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19838,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19843 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19843,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19843;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19848 = arguments.length;
switch (G__19848) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19870){
var vec__19872 = p__19870;
var seq__19873 = cljs.core.seq(vec__19872);
var first__19874 = cljs.core.first(seq__19873);
var seq__19873__$1 = cljs.core.next(seq__19873);
var nn = first__19874;
var first__19874__$1 = cljs.core.first(seq__19873__$1);
var seq__19873__$2 = cljs.core.next(seq__19873__$1);
var np = first__19874__$1;
var nc = seq__19873__$2;
var node = vec__19872;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19889 = nn;
var G__19890 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19889,G__19890) : create_fn.call(null,G__19889,G__19890));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19897 = nn;
var G__19898 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19897,G__19898) : create_fn.call(null,G__19897,G__19898));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19914 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19914,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19914,(1),null);
var seq__19918_20734 = cljs.core.seq(node_children);
var chunk__19919_20735 = null;
var count__19920_20736 = (0);
var i__19921_20737 = (0);
while(true){
if((i__19921_20737 < count__19920_20736)){
var child_struct_20738 = chunk__19919_20735.cljs$core$IIndexed$_nth$arity$2(null,i__19921_20737);
var children_20740 = shadow.dom.dom_node(child_struct_20738);
if(cljs.core.seq_QMARK_(children_20740)){
var seq__19945_20741 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20740));
var chunk__19947_20742 = null;
var count__19948_20743 = (0);
var i__19949_20744 = (0);
while(true){
if((i__19949_20744 < count__19948_20743)){
var child_20746 = chunk__19947_20742.cljs$core$IIndexed$_nth$arity$2(null,i__19949_20744);
if(cljs.core.truth_(child_20746)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20746);


var G__20747 = seq__19945_20741;
var G__20748 = chunk__19947_20742;
var G__20749 = count__19948_20743;
var G__20750 = (i__19949_20744 + (1));
seq__19945_20741 = G__20747;
chunk__19947_20742 = G__20748;
count__19948_20743 = G__20749;
i__19949_20744 = G__20750;
continue;
} else {
var G__20751 = seq__19945_20741;
var G__20752 = chunk__19947_20742;
var G__20753 = count__19948_20743;
var G__20754 = (i__19949_20744 + (1));
seq__19945_20741 = G__20751;
chunk__19947_20742 = G__20752;
count__19948_20743 = G__20753;
i__19949_20744 = G__20754;
continue;
}
} else {
var temp__5804__auto___20755 = cljs.core.seq(seq__19945_20741);
if(temp__5804__auto___20755){
var seq__19945_20756__$1 = temp__5804__auto___20755;
if(cljs.core.chunked_seq_QMARK_(seq__19945_20756__$1)){
var c__5568__auto___20757 = cljs.core.chunk_first(seq__19945_20756__$1);
var G__20758 = cljs.core.chunk_rest(seq__19945_20756__$1);
var G__20759 = c__5568__auto___20757;
var G__20760 = cljs.core.count(c__5568__auto___20757);
var G__20761 = (0);
seq__19945_20741 = G__20758;
chunk__19947_20742 = G__20759;
count__19948_20743 = G__20760;
i__19949_20744 = G__20761;
continue;
} else {
var child_20762 = cljs.core.first(seq__19945_20756__$1);
if(cljs.core.truth_(child_20762)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20762);


var G__20763 = cljs.core.next(seq__19945_20756__$1);
var G__20764 = null;
var G__20765 = (0);
var G__20766 = (0);
seq__19945_20741 = G__20763;
chunk__19947_20742 = G__20764;
count__19948_20743 = G__20765;
i__19949_20744 = G__20766;
continue;
} else {
var G__20767 = cljs.core.next(seq__19945_20756__$1);
var G__20768 = null;
var G__20769 = (0);
var G__20770 = (0);
seq__19945_20741 = G__20767;
chunk__19947_20742 = G__20768;
count__19948_20743 = G__20769;
i__19949_20744 = G__20770;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20740);
}


var G__20771 = seq__19918_20734;
var G__20772 = chunk__19919_20735;
var G__20773 = count__19920_20736;
var G__20774 = (i__19921_20737 + (1));
seq__19918_20734 = G__20771;
chunk__19919_20735 = G__20772;
count__19920_20736 = G__20773;
i__19921_20737 = G__20774;
continue;
} else {
var temp__5804__auto___20776 = cljs.core.seq(seq__19918_20734);
if(temp__5804__auto___20776){
var seq__19918_20777__$1 = temp__5804__auto___20776;
if(cljs.core.chunked_seq_QMARK_(seq__19918_20777__$1)){
var c__5568__auto___20778 = cljs.core.chunk_first(seq__19918_20777__$1);
var G__20779 = cljs.core.chunk_rest(seq__19918_20777__$1);
var G__20780 = c__5568__auto___20778;
var G__20781 = cljs.core.count(c__5568__auto___20778);
var G__20782 = (0);
seq__19918_20734 = G__20779;
chunk__19919_20735 = G__20780;
count__19920_20736 = G__20781;
i__19921_20737 = G__20782;
continue;
} else {
var child_struct_20783 = cljs.core.first(seq__19918_20777__$1);
var children_20784 = shadow.dom.dom_node(child_struct_20783);
if(cljs.core.seq_QMARK_(children_20784)){
var seq__19966_20785 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20784));
var chunk__19968_20786 = null;
var count__19969_20787 = (0);
var i__19970_20788 = (0);
while(true){
if((i__19970_20788 < count__19969_20787)){
var child_20789 = chunk__19968_20786.cljs$core$IIndexed$_nth$arity$2(null,i__19970_20788);
if(cljs.core.truth_(child_20789)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20789);


var G__20790 = seq__19966_20785;
var G__20791 = chunk__19968_20786;
var G__20792 = count__19969_20787;
var G__20793 = (i__19970_20788 + (1));
seq__19966_20785 = G__20790;
chunk__19968_20786 = G__20791;
count__19969_20787 = G__20792;
i__19970_20788 = G__20793;
continue;
} else {
var G__20794 = seq__19966_20785;
var G__20795 = chunk__19968_20786;
var G__20796 = count__19969_20787;
var G__20797 = (i__19970_20788 + (1));
seq__19966_20785 = G__20794;
chunk__19968_20786 = G__20795;
count__19969_20787 = G__20796;
i__19970_20788 = G__20797;
continue;
}
} else {
var temp__5804__auto___20798__$1 = cljs.core.seq(seq__19966_20785);
if(temp__5804__auto___20798__$1){
var seq__19966_20799__$1 = temp__5804__auto___20798__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19966_20799__$1)){
var c__5568__auto___20800 = cljs.core.chunk_first(seq__19966_20799__$1);
var G__20801 = cljs.core.chunk_rest(seq__19966_20799__$1);
var G__20802 = c__5568__auto___20800;
var G__20803 = cljs.core.count(c__5568__auto___20800);
var G__20804 = (0);
seq__19966_20785 = G__20801;
chunk__19968_20786 = G__20802;
count__19969_20787 = G__20803;
i__19970_20788 = G__20804;
continue;
} else {
var child_20805 = cljs.core.first(seq__19966_20799__$1);
if(cljs.core.truth_(child_20805)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20805);


var G__20806 = cljs.core.next(seq__19966_20799__$1);
var G__20807 = null;
var G__20808 = (0);
var G__20809 = (0);
seq__19966_20785 = G__20806;
chunk__19968_20786 = G__20807;
count__19969_20787 = G__20808;
i__19970_20788 = G__20809;
continue;
} else {
var G__20810 = cljs.core.next(seq__19966_20799__$1);
var G__20811 = null;
var G__20812 = (0);
var G__20813 = (0);
seq__19966_20785 = G__20810;
chunk__19968_20786 = G__20811;
count__19969_20787 = G__20812;
i__19970_20788 = G__20813;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20784);
}


var G__20814 = cljs.core.next(seq__19918_20777__$1);
var G__20815 = null;
var G__20816 = (0);
var G__20817 = (0);
seq__19918_20734 = G__20814;
chunk__19919_20735 = G__20815;
count__19920_20736 = G__20816;
i__19921_20737 = G__20817;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__19994 = cljs.core.seq(node);
var chunk__19995 = null;
var count__19996 = (0);
var i__19997 = (0);
while(true){
if((i__19997 < count__19996)){
var n = chunk__19995.cljs$core$IIndexed$_nth$arity$2(null,i__19997);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20828 = seq__19994;
var G__20829 = chunk__19995;
var G__20830 = count__19996;
var G__20831 = (i__19997 + (1));
seq__19994 = G__20828;
chunk__19995 = G__20829;
count__19996 = G__20830;
i__19997 = G__20831;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19994);
if(temp__5804__auto__){
var seq__19994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19994__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19994__$1);
var G__20833 = cljs.core.chunk_rest(seq__19994__$1);
var G__20834 = c__5568__auto__;
var G__20835 = cljs.core.count(c__5568__auto__);
var G__20836 = (0);
seq__19994 = G__20833;
chunk__19995 = G__20834;
count__19996 = G__20835;
i__19997 = G__20836;
continue;
} else {
var n = cljs.core.first(seq__19994__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20837 = cljs.core.next(seq__19994__$1);
var G__20838 = null;
var G__20839 = (0);
var G__20840 = (0);
seq__19994 = G__20837;
chunk__19995 = G__20838;
count__19996 = G__20839;
i__19997 = G__20840;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20002 = arguments.length;
switch (G__20002) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20007 = arguments.length;
switch (G__20007) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20016 = arguments.length;
switch (G__20016) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20849 = arguments.length;
var i__5770__auto___20850 = (0);
while(true){
if((i__5770__auto___20850 < len__5769__auto___20849)){
args__5775__auto__.push((arguments[i__5770__auto___20850]));

var G__20851 = (i__5770__auto___20850 + (1));
i__5770__auto___20850 = G__20851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20027_20852 = cljs.core.seq(nodes);
var chunk__20028_20853 = null;
var count__20029_20854 = (0);
var i__20030_20855 = (0);
while(true){
if((i__20030_20855 < count__20029_20854)){
var node_20856 = chunk__20028_20853.cljs$core$IIndexed$_nth$arity$2(null,i__20030_20855);
fragment.appendChild(shadow.dom._to_dom(node_20856));


var G__20858 = seq__20027_20852;
var G__20859 = chunk__20028_20853;
var G__20860 = count__20029_20854;
var G__20861 = (i__20030_20855 + (1));
seq__20027_20852 = G__20858;
chunk__20028_20853 = G__20859;
count__20029_20854 = G__20860;
i__20030_20855 = G__20861;
continue;
} else {
var temp__5804__auto___20862 = cljs.core.seq(seq__20027_20852);
if(temp__5804__auto___20862){
var seq__20027_20863__$1 = temp__5804__auto___20862;
if(cljs.core.chunked_seq_QMARK_(seq__20027_20863__$1)){
var c__5568__auto___20864 = cljs.core.chunk_first(seq__20027_20863__$1);
var G__20865 = cljs.core.chunk_rest(seq__20027_20863__$1);
var G__20866 = c__5568__auto___20864;
var G__20867 = cljs.core.count(c__5568__auto___20864);
var G__20868 = (0);
seq__20027_20852 = G__20865;
chunk__20028_20853 = G__20866;
count__20029_20854 = G__20867;
i__20030_20855 = G__20868;
continue;
} else {
var node_20869 = cljs.core.first(seq__20027_20863__$1);
fragment.appendChild(shadow.dom._to_dom(node_20869));


var G__20870 = cljs.core.next(seq__20027_20863__$1);
var G__20871 = null;
var G__20872 = (0);
var G__20873 = (0);
seq__20027_20852 = G__20870;
chunk__20028_20853 = G__20871;
count__20029_20854 = G__20872;
i__20030_20855 = G__20873;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20024){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20024));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20067_20874 = cljs.core.seq(scripts);
var chunk__20068_20875 = null;
var count__20069_20876 = (0);
var i__20070_20877 = (0);
while(true){
if((i__20070_20877 < count__20069_20876)){
var vec__20085_20878 = chunk__20068_20875.cljs$core$IIndexed$_nth$arity$2(null,i__20070_20877);
var script_tag_20880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20085_20878,(0),null);
var script_body_20881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20085_20878,(1),null);
eval(script_body_20881);


var G__20883 = seq__20067_20874;
var G__20884 = chunk__20068_20875;
var G__20885 = count__20069_20876;
var G__20886 = (i__20070_20877 + (1));
seq__20067_20874 = G__20883;
chunk__20068_20875 = G__20884;
count__20069_20876 = G__20885;
i__20070_20877 = G__20886;
continue;
} else {
var temp__5804__auto___20887 = cljs.core.seq(seq__20067_20874);
if(temp__5804__auto___20887){
var seq__20067_20888__$1 = temp__5804__auto___20887;
if(cljs.core.chunked_seq_QMARK_(seq__20067_20888__$1)){
var c__5568__auto___20889 = cljs.core.chunk_first(seq__20067_20888__$1);
var G__20890 = cljs.core.chunk_rest(seq__20067_20888__$1);
var G__20891 = c__5568__auto___20889;
var G__20892 = cljs.core.count(c__5568__auto___20889);
var G__20893 = (0);
seq__20067_20874 = G__20890;
chunk__20068_20875 = G__20891;
count__20069_20876 = G__20892;
i__20070_20877 = G__20893;
continue;
} else {
var vec__20091_20895 = cljs.core.first(seq__20067_20888__$1);
var script_tag_20896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20091_20895,(0),null);
var script_body_20897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20091_20895,(1),null);
eval(script_body_20897);


var G__20899 = cljs.core.next(seq__20067_20888__$1);
var G__20900 = null;
var G__20901 = (0);
var G__20902 = (0);
seq__20067_20874 = G__20899;
chunk__20068_20875 = G__20900;
count__20069_20876 = G__20901;
i__20070_20877 = G__20902;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20095){
var vec__20096 = p__20095;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20096,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20096,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20104 = arguments.length;
switch (G__20104) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20113 = cljs.core.seq(style_keys);
var chunk__20114 = null;
var count__20115 = (0);
var i__20116 = (0);
while(true){
if((i__20116 < count__20115)){
var it = chunk__20114.cljs$core$IIndexed$_nth$arity$2(null,i__20116);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20905 = seq__20113;
var G__20906 = chunk__20114;
var G__20907 = count__20115;
var G__20908 = (i__20116 + (1));
seq__20113 = G__20905;
chunk__20114 = G__20906;
count__20115 = G__20907;
i__20116 = G__20908;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20113);
if(temp__5804__auto__){
var seq__20113__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20113__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20113__$1);
var G__20912 = cljs.core.chunk_rest(seq__20113__$1);
var G__20913 = c__5568__auto__;
var G__20914 = cljs.core.count(c__5568__auto__);
var G__20915 = (0);
seq__20113 = G__20912;
chunk__20114 = G__20913;
count__20115 = G__20914;
i__20116 = G__20915;
continue;
} else {
var it = cljs.core.first(seq__20113__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20916 = cljs.core.next(seq__20113__$1);
var G__20917 = null;
var G__20918 = (0);
var G__20919 = (0);
seq__20113 = G__20916;
chunk__20114 = G__20917;
count__20115 = G__20918;
i__20116 = G__20919;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20121,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20125 = k20121;
var G__20125__$1 = (((G__20125 instanceof cljs.core.Keyword))?G__20125.fqn:null);
switch (G__20125__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20121,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20126){
var vec__20127 = p__20126;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20127,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20127,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20120){
var self__ = this;
var G__20120__$1 = this;
return (new cljs.core.RecordIter((0),G__20120__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20122,other20123){
var self__ = this;
var this20122__$1 = this;
return (((!((other20123 == null)))) && ((((this20122__$1.constructor === other20123.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20122__$1.x,other20123.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20122__$1.y,other20123.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20122__$1.__extmap,other20123.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20121){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20154 = k20121;
var G__20154__$1 = (((G__20154 instanceof cljs.core.Keyword))?G__20154.fqn:null);
switch (G__20154__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20121);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20120){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20157 = cljs.core.keyword_identical_QMARK_;
var expr__20158 = k__5352__auto__;
if(cljs.core.truth_((pred__20157.cljs$core$IFn$_invoke$arity$2 ? pred__20157.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20158) : pred__20157.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20158)))){
return (new shadow.dom.Coordinate(G__20120,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20157.cljs$core$IFn$_invoke$arity$2 ? pred__20157.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20158) : pred__20157.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20158)))){
return (new shadow.dom.Coordinate(self__.x,G__20120,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20120),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20120){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20120,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20124){
var extmap__5385__auto__ = (function (){var G__20171 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20124,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20124)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20171);
} else {
return G__20171;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20124),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20124),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20187,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20193 = k20187;
var G__20193__$1 = (((G__20193 instanceof cljs.core.Keyword))?G__20193.fqn:null);
switch (G__20193__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20187,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20194){
var vec__20195 = p__20194;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20186){
var self__ = this;
var G__20186__$1 = this;
return (new cljs.core.RecordIter((0),G__20186__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20188,other20189){
var self__ = this;
var this20188__$1 = this;
return (((!((other20189 == null)))) && ((((this20188__$1.constructor === other20189.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20188__$1.w,other20189.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20188__$1.h,other20189.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20188__$1.__extmap,other20189.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20187){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20250 = k20187;
var G__20250__$1 = (((G__20250 instanceof cljs.core.Keyword))?G__20250.fqn:null);
switch (G__20250__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20187);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20186){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20261 = cljs.core.keyword_identical_QMARK_;
var expr__20262 = k__5352__auto__;
if(cljs.core.truth_((pred__20261.cljs$core$IFn$_invoke$arity$2 ? pred__20261.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20262) : pred__20261.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20262)))){
return (new shadow.dom.Size(G__20186,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20261.cljs$core$IFn$_invoke$arity$2 ? pred__20261.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20262) : pred__20261.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20262)))){
return (new shadow.dom.Size(self__.w,G__20186,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20186),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20186){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20186,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20190){
var extmap__5385__auto__ = (function (){var G__20275 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20190,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20190)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20275);
} else {
return G__20275;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20190),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20190),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__20948 = (i + (1));
var G__20949 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20948;
ret = G__20949;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20293){
var vec__20295 = p__20293;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20295,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20295,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20301 = arguments.length;
switch (G__20301) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__20953 = ps;
var G__20954 = (i + (1));
el__$1 = G__20953;
i = G__20954;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20339 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20339,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20346_20958 = cljs.core.seq(props);
var chunk__20347_20959 = null;
var count__20348_20960 = (0);
var i__20349_20961 = (0);
while(true){
if((i__20349_20961 < count__20348_20960)){
var vec__20363_20962 = chunk__20347_20959.cljs$core$IIndexed$_nth$arity$2(null,i__20349_20961);
var k_20963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20363_20962,(0),null);
var v_20964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20363_20962,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20963);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20963),v_20964);


var G__20965 = seq__20346_20958;
var G__20966 = chunk__20347_20959;
var G__20967 = count__20348_20960;
var G__20968 = (i__20349_20961 + (1));
seq__20346_20958 = G__20965;
chunk__20347_20959 = G__20966;
count__20348_20960 = G__20967;
i__20349_20961 = G__20968;
continue;
} else {
var temp__5804__auto___20969 = cljs.core.seq(seq__20346_20958);
if(temp__5804__auto___20969){
var seq__20346_20970__$1 = temp__5804__auto___20969;
if(cljs.core.chunked_seq_QMARK_(seq__20346_20970__$1)){
var c__5568__auto___20971 = cljs.core.chunk_first(seq__20346_20970__$1);
var G__20972 = cljs.core.chunk_rest(seq__20346_20970__$1);
var G__20973 = c__5568__auto___20971;
var G__20974 = cljs.core.count(c__5568__auto___20971);
var G__20975 = (0);
seq__20346_20958 = G__20972;
chunk__20347_20959 = G__20973;
count__20348_20960 = G__20974;
i__20349_20961 = G__20975;
continue;
} else {
var vec__20378_20980 = cljs.core.first(seq__20346_20970__$1);
var k_20981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378_20980,(0),null);
var v_20982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20378_20980,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20981);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20981),v_20982);


var G__20986 = cljs.core.next(seq__20346_20970__$1);
var G__20987 = null;
var G__20988 = (0);
var G__20989 = (0);
seq__20346_20958 = G__20986;
chunk__20347_20959 = G__20987;
count__20348_20960 = G__20988;
i__20349_20961 = G__20989;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20389 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20389,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20389,(1),null);
var seq__20392_20990 = cljs.core.seq(node_children);
var chunk__20394_20991 = null;
var count__20395_20992 = (0);
var i__20396_20993 = (0);
while(true){
if((i__20396_20993 < count__20395_20992)){
var child_struct_20994 = chunk__20394_20991.cljs$core$IIndexed$_nth$arity$2(null,i__20396_20993);
if((!((child_struct_20994 == null)))){
if(typeof child_struct_20994 === 'string'){
var text_20995 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20995),child_struct_20994].join(''));
} else {
var children_20996 = shadow.dom.svg_node(child_struct_20994);
if(cljs.core.seq_QMARK_(children_20996)){
var seq__20431_20997 = cljs.core.seq(children_20996);
var chunk__20433_20998 = null;
var count__20434_20999 = (0);
var i__20435_21000 = (0);
while(true){
if((i__20435_21000 < count__20434_20999)){
var child_21001 = chunk__20433_20998.cljs$core$IIndexed$_nth$arity$2(null,i__20435_21000);
if(cljs.core.truth_(child_21001)){
node.appendChild(child_21001);


var G__21005 = seq__20431_20997;
var G__21006 = chunk__20433_20998;
var G__21007 = count__20434_20999;
var G__21008 = (i__20435_21000 + (1));
seq__20431_20997 = G__21005;
chunk__20433_20998 = G__21006;
count__20434_20999 = G__21007;
i__20435_21000 = G__21008;
continue;
} else {
var G__21009 = seq__20431_20997;
var G__21010 = chunk__20433_20998;
var G__21011 = count__20434_20999;
var G__21012 = (i__20435_21000 + (1));
seq__20431_20997 = G__21009;
chunk__20433_20998 = G__21010;
count__20434_20999 = G__21011;
i__20435_21000 = G__21012;
continue;
}
} else {
var temp__5804__auto___21013 = cljs.core.seq(seq__20431_20997);
if(temp__5804__auto___21013){
var seq__20431_21014__$1 = temp__5804__auto___21013;
if(cljs.core.chunked_seq_QMARK_(seq__20431_21014__$1)){
var c__5568__auto___21015 = cljs.core.chunk_first(seq__20431_21014__$1);
var G__21016 = cljs.core.chunk_rest(seq__20431_21014__$1);
var G__21017 = c__5568__auto___21015;
var G__21018 = cljs.core.count(c__5568__auto___21015);
var G__21019 = (0);
seq__20431_20997 = G__21016;
chunk__20433_20998 = G__21017;
count__20434_20999 = G__21018;
i__20435_21000 = G__21019;
continue;
} else {
var child_21020 = cljs.core.first(seq__20431_21014__$1);
if(cljs.core.truth_(child_21020)){
node.appendChild(child_21020);


var G__21021 = cljs.core.next(seq__20431_21014__$1);
var G__21022 = null;
var G__21023 = (0);
var G__21024 = (0);
seq__20431_20997 = G__21021;
chunk__20433_20998 = G__21022;
count__20434_20999 = G__21023;
i__20435_21000 = G__21024;
continue;
} else {
var G__21025 = cljs.core.next(seq__20431_21014__$1);
var G__21026 = null;
var G__21027 = (0);
var G__21028 = (0);
seq__20431_20997 = G__21025;
chunk__20433_20998 = G__21026;
count__20434_20999 = G__21027;
i__20435_21000 = G__21028;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20996);
}
}


var G__21029 = seq__20392_20990;
var G__21030 = chunk__20394_20991;
var G__21031 = count__20395_20992;
var G__21032 = (i__20396_20993 + (1));
seq__20392_20990 = G__21029;
chunk__20394_20991 = G__21030;
count__20395_20992 = G__21031;
i__20396_20993 = G__21032;
continue;
} else {
var G__21033 = seq__20392_20990;
var G__21034 = chunk__20394_20991;
var G__21035 = count__20395_20992;
var G__21036 = (i__20396_20993 + (1));
seq__20392_20990 = G__21033;
chunk__20394_20991 = G__21034;
count__20395_20992 = G__21035;
i__20396_20993 = G__21036;
continue;
}
} else {
var temp__5804__auto___21037 = cljs.core.seq(seq__20392_20990);
if(temp__5804__auto___21037){
var seq__20392_21038__$1 = temp__5804__auto___21037;
if(cljs.core.chunked_seq_QMARK_(seq__20392_21038__$1)){
var c__5568__auto___21039 = cljs.core.chunk_first(seq__20392_21038__$1);
var G__21043 = cljs.core.chunk_rest(seq__20392_21038__$1);
var G__21044 = c__5568__auto___21039;
var G__21045 = cljs.core.count(c__5568__auto___21039);
var G__21046 = (0);
seq__20392_20990 = G__21043;
chunk__20394_20991 = G__21044;
count__20395_20992 = G__21045;
i__20396_20993 = G__21046;
continue;
} else {
var child_struct_21047 = cljs.core.first(seq__20392_21038__$1);
if((!((child_struct_21047 == null)))){
if(typeof child_struct_21047 === 'string'){
var text_21048 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21048),child_struct_21047].join(''));
} else {
var children_21049 = shadow.dom.svg_node(child_struct_21047);
if(cljs.core.seq_QMARK_(children_21049)){
var seq__20457_21050 = cljs.core.seq(children_21049);
var chunk__20459_21051 = null;
var count__20460_21052 = (0);
var i__20461_21053 = (0);
while(true){
if((i__20461_21053 < count__20460_21052)){
var child_21054 = chunk__20459_21051.cljs$core$IIndexed$_nth$arity$2(null,i__20461_21053);
if(cljs.core.truth_(child_21054)){
node.appendChild(child_21054);


var G__21055 = seq__20457_21050;
var G__21056 = chunk__20459_21051;
var G__21057 = count__20460_21052;
var G__21058 = (i__20461_21053 + (1));
seq__20457_21050 = G__21055;
chunk__20459_21051 = G__21056;
count__20460_21052 = G__21057;
i__20461_21053 = G__21058;
continue;
} else {
var G__21059 = seq__20457_21050;
var G__21060 = chunk__20459_21051;
var G__21061 = count__20460_21052;
var G__21062 = (i__20461_21053 + (1));
seq__20457_21050 = G__21059;
chunk__20459_21051 = G__21060;
count__20460_21052 = G__21061;
i__20461_21053 = G__21062;
continue;
}
} else {
var temp__5804__auto___21063__$1 = cljs.core.seq(seq__20457_21050);
if(temp__5804__auto___21063__$1){
var seq__20457_21064__$1 = temp__5804__auto___21063__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20457_21064__$1)){
var c__5568__auto___21065 = cljs.core.chunk_first(seq__20457_21064__$1);
var G__21066 = cljs.core.chunk_rest(seq__20457_21064__$1);
var G__21067 = c__5568__auto___21065;
var G__21068 = cljs.core.count(c__5568__auto___21065);
var G__21069 = (0);
seq__20457_21050 = G__21066;
chunk__20459_21051 = G__21067;
count__20460_21052 = G__21068;
i__20461_21053 = G__21069;
continue;
} else {
var child_21070 = cljs.core.first(seq__20457_21064__$1);
if(cljs.core.truth_(child_21070)){
node.appendChild(child_21070);


var G__21071 = cljs.core.next(seq__20457_21064__$1);
var G__21072 = null;
var G__21073 = (0);
var G__21074 = (0);
seq__20457_21050 = G__21071;
chunk__20459_21051 = G__21072;
count__20460_21052 = G__21073;
i__20461_21053 = G__21074;
continue;
} else {
var G__21075 = cljs.core.next(seq__20457_21064__$1);
var G__21076 = null;
var G__21077 = (0);
var G__21078 = (0);
seq__20457_21050 = G__21075;
chunk__20459_21051 = G__21076;
count__20460_21052 = G__21077;
i__20461_21053 = G__21078;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21049);
}
}


var G__21079 = cljs.core.next(seq__20392_21038__$1);
var G__21080 = null;
var G__21081 = (0);
var G__21082 = (0);
seq__20392_20990 = G__21079;
chunk__20394_20991 = G__21080;
count__20395_20992 = G__21081;
i__20396_20993 = G__21082;
continue;
} else {
var G__21086 = cljs.core.next(seq__20392_21038__$1);
var G__21087 = null;
var G__21088 = (0);
var G__21089 = (0);
seq__20392_20990 = G__21086;
chunk__20394_20991 = G__21087;
count__20395_20992 = G__21088;
i__20396_20993 = G__21089;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21090 = arguments.length;
var i__5770__auto___21091 = (0);
while(true){
if((i__5770__auto___21091 < len__5769__auto___21090)){
args__5775__auto__.push((arguments[i__5770__auto___21091]));

var G__21092 = (i__5770__auto___21091 + (1));
i__5770__auto___21091 = G__21092;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20488){
var G__20489 = cljs.core.first(seq20488);
var seq20488__$1 = cljs.core.next(seq20488);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20489,seq20488__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20504 = arguments.length;
switch (G__20504) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17439__auto___21097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17440__auto__ = (function (){var switch__17279__auto__ = (function (state_20522){
var state_val_20523 = (state_20522[(1)]);
if((state_val_20523 === (1))){
var state_20522__$1 = state_20522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20522__$1,(2),once_or_cleanup);
} else {
if((state_val_20523 === (2))){
var inst_20516 = (state_20522[(2)]);
var inst_20518 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20522__$1 = (function (){var statearr_20525 = state_20522;
(statearr_20525[(7)] = inst_20516);

return statearr_20525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20522__$1,inst_20518);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17280__auto__ = null;
var shadow$dom$state_machine__17280__auto____0 = (function (){
var statearr_20528 = [null,null,null,null,null,null,null,null];
(statearr_20528[(0)] = shadow$dom$state_machine__17280__auto__);

(statearr_20528[(1)] = (1));

return statearr_20528;
});
var shadow$dom$state_machine__17280__auto____1 = (function (state_20522){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_20522);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e20530){var ex__17283__auto__ = e20530;
var statearr_20532_21098 = state_20522;
(statearr_20532_21098[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_20522[(4)]))){
var statearr_20534_21099 = state_20522;
(statearr_20534_21099[(1)] = cljs.core.first((state_20522[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21104 = state_20522;
state_20522 = G__21104;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
shadow$dom$state_machine__17280__auto__ = function(state_20522){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17280__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17280__auto____1.call(this,state_20522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17280__auto____0;
shadow$dom$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17280__auto____1;
return shadow$dom$state_machine__17280__auto__;
})()
})();
var state__17441__auto__ = (function (){var statearr_20536 = f__17440__auto__();
(statearr_20536[(6)] = c__17439__auto___21097);

return statearr_20536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17441__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
