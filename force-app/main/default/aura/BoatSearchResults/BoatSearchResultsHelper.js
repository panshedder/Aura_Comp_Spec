({
    onSearch : function(component, boatTypeId) {
        let action = component.get("c.getBoats");
        action.setParams({ "boatTypeId": boatTypeId });

        action.setCallback(this, function (response) {
            let state = response.getState();
            //console.log(response.getReturnValue());
            if (state === "SUCCESS") {
                component.set("v.boats", response.getReturnValue());
            }
            else
                console.log("Failed to load boats with state: " + state);
        });
        $A.enqueueAction(action);
    }
})
