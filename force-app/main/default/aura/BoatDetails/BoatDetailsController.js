({
    onBoatSelected: function (component, event, helper) {
        let boatSelected = event.getParam("boat");

        component.set("v.id", boatSelected.Id);
        component.set("v.boat", boatSelected);
    },
    onRecordUpdated: function (component, event, helper) {
        component.find("service").reloadRecord();
        component.get("v.boatReviewsCMP").refresh();
    },
    onBoatReviewAdded : function(component, event, helper) {
        component.set('v.selectedTabId', 'boatreviewtab');
        let boatReviewsCMP = component.find("boatReviewsCMP");
        if (boatReviewsCMP)
            boatReviewsCMP.refresh();
    },
})
