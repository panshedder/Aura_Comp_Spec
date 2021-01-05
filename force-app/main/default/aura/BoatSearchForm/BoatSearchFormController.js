({
    doInit : function(component, event, helper) {
        let action = component.get("c.getBoatTypes");
        let isNewBtnEnabled = $A.get("event.force:createRecord");
        if (isNewBtnEnabled)
        component.set("v.isNewEnabled", true);

        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.boatTypes", response.getReturnValue());
            } else {
                console.log("Failed to get Boat Types with state: " + state);
            }
        });

        $A.enqueueAction(action);
    },
    handleCreateBoat: function (component, event, helper) {
        let createRecordEvent = $A.get("event.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                "Name": component.find("boatType").get("v.value")
            }
        });
        createRecordEvent.fire();
    }
})