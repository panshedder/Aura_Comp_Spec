({
    onInit: function (component) {
        let boatSelected = component.get("v.boat");

        component.find("service").getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function () {
                let rec = component.get("v.boatReview");
                let error = component.get("v.recordError");

                if (error || (rec === null)) {
                    console.log("Error initializing record template: " + error);

                } else {
                    component.set("v.boatReview.Boat__c", boatSelected.Id);
                    console.log("Record template initialized: " + rec.apiName);
                }
            })
        );
    }
})
