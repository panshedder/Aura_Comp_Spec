({
    doInit: function (component, event, helper) {
        helper.onInit(component, event, helper);
    },
    onSave: function (component, event, helper) {
        

        component.find("service").saveRecord($A.getCallback(function (saveResults) {
            if (saveResults.state === "SUCCESS" || saveResults.draft === "DRAFT") {
                console.log("Save completely succesfully");
                let toastEvent = $A.get("e.force:showToast");
                if (toastEvent == "undefined") {
                    alert("The record was saved");
                } else {
                toastEvent.setParams({
                    "title": "Record saved!",
                    "message": "The review has been saved succesfully!"
                });
                toastEvent.fire();
                let reviewEvt = component.getEvent("BoatReviewAdded");
                reviewEvt.fire();
                }
            } else if (saveResults.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResults.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResults.error));
                alert("Problem saving record");
            } else {
                console.log('Unknown problem, state: ' + saveResults.state + ', error: ' + JSON.stringify(saveResults.error));
                alert('Unknown problem, state: ' + saveResults.state);
            }
        }));
    },
    onRecordUpdated: function(component, event, helper) {
        component.find("service").reloadRecord($A.getCallback(function (updateResults) {
            if (updateResults.state === "SUCCESS") {
                console.log("Record has been updated");
                let toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Record updated!",
                    "message": "The review has been updated succesfully!"
                });
                toastEvent.fire();
            } else {
                console.log('Problem updating record, error: ' + JSON.stringify(updateResults.error));
                alert("Problem updating record");
            }
        }));
    }
})
