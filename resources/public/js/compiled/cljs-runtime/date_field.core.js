goog.provide('date_field.core');
date_field.core.dev_setup = (function date_field$core$dev_setup(){
if(date_field.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
date_field.core.mount_root = (function date_field$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_field.views.main_panel], null),root_el);
});
date_field.core.init = (function date_field$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("date-field.events","initialize-db","date-field.events/initialize-db",841250788)], null));

date_field.core.dev_setup();

return date_field.core.mount_root();
});

//# sourceMappingURL=date_field.core.js.map
