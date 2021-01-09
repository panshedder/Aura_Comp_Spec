({
    doInit : function(component, event, helper) {
        helper.onSearch(component, "");
    },
    doSearch: function (component, event, helper) {
        helper.onSearch(component, event.getParam("arguments").boatTypeId);
    }
})
