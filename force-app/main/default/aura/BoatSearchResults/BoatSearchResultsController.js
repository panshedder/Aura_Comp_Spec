({
    doInit : function(component, event, helper) {
        helper.onSearch(component, "");
    },
    doSearch: function (component, event, helper) {
        helper.onSearch(component, event.getParam("arguments").boatTypeId);
    },
    onBoatSelect: function (component, event, helper) {
        let boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);

    }
})
