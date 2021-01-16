({
    onBoatClick: function (component, event, helper) {
        let boatId = event.getSource().get("v.name");
        let boatObject = event.getSource().get("v.value");
       
        let boatIdEvent = component.getEvent("boatSelectedId");
        let boatSelectedEvt = $A.get("e.c:BoatSelected");

        boatIdEvent.setParams({ "boatId": boatId });
        boatIdEvent.fire();
        
        boatSelectedEvt.setParams({ "boat": boatObject });
        boatSelectedEvt.fire();
    }
})