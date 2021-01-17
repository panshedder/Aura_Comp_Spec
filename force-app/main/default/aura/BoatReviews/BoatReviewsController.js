({
    doInit : function(component, event, helper) {
        helper.onInit(component);
    },
    onUserInfoClick: function (component, event, helper) {
        let dataUserId = event.target.getAttribute("data-userid");
        let redirectToUserEvent = $A.get("e.force:navigateToSObject");
        if (redirectToUserEvent) {
            redirectToUserEvent.setParams({
                "recordId": dataUserId
            });
        }
        redirectToUserEvent.fire();
    }
})
