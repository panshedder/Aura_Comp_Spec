({
    onFormSubmit : function(component, event, helper) {
        let boatTypeId = event.getParam("formData");

        let BSRComp = component.find("BoatSearchResultsCMP");
        BSRComp.search(boatTypeId);
    }
})
