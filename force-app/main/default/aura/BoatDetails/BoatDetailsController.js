({
    onBoatSelected: function (component, event, helper) {
        let boatSelected = event.getParam("boat");

        component.set("v.id", boatSelected.Id);
        component.set("v.boat", boatSelected);
    },
    onRecordUpdated: function (component, event, helper) {
        component.find("service").reloadRecord();
    }
})
