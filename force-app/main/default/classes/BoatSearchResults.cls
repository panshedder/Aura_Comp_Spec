public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
            return [SELECT Name FROM BoatType__c ORDER BY Name ASC];
    }

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        try {
            if(boatTypeId == '') {
                return [SELECT Name, BoatType__c, Picture__c, Contact__r.Name FROM Boat__c];
            } else {
                return [SELECT Name, BoatType__c, Picture__c, Contact__r.Name FROM Boat__c WHERE BoatType__c =: boatTypeId];
            } 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
        
    