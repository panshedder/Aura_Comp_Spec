({
    onInit : function(component) {
        let action = component.get("c.getAll");

        action.setCallback(this, function (response) {
            let state = response.getState();

            if (state === "SUCCESS") {
                component.set("v.boatReviews", response.getReturnValue());
            } else {
                console.log("There was an error trying to find the reviews with state: " + state);
            }
        });
    }
})
