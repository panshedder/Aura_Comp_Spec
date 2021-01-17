({
    doInit: function (component, event, helper) {
        let redirectToSObjectPageEvent = $A.get("event.force:navigateToSObject");

        if (redirectToSObjectPageEvent)
            component.set("v.displayButton", true);
    },
    onFullDetails : function(component, event, helper) {
        let redirectToSObjectPageEvent = $A.get("event.force:navigateToSObject");
        let boatrecord = component.get("v.boat");
        if (boatrecord) {
            redirectToSObjectPageEvent.setParams({
                "recordId": boat.Id
            });
            redirectToSObjectPageEvent.fire();
        }
    }
})
