({
    onFullDetails : function(component, event, helper) {
        let redirectToSObjectPageEvent = $A.get("e.force:navigateToSObject");
        let boatrecord = component.get("v.boat");
        if (boatrecord) {
            redirectToSObjectPageEvent.setParams({
                "recordId": boat.Id
            });
            redirectToSObjectPageEvent.fire();
        }
    }
})
