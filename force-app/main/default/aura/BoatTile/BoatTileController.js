({
    onBoatClick: function (component, event, helper) {
        let boatId = event.getSource().get("v.name");
        let eventClickBoat = component.getEvent("boatSelected");
        eventClickBoat.setParams({ "boatId": boatId });
        eventClickBoat.fire();
    }
})