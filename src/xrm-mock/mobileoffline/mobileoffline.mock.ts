export class MobileOfflineMock implements Xrm.MobileOffline {
    public isOfflineEnabled(entityType: string): boolean {
        throw new Error(("not implemented"));
    }

    public createRecord(entityType: string, data: { [attributeName: string]: any }): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject> {
        throw new Error(("not implemented"));
    }

    public retrieveRecord(entityType: string, id: string, options: string): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject> {
        throw new Error(("not implemented"));
    }

    public retrieveMultipleRecords(entityType: string, options: string, maxPageSize: number): Xrm.Async.PromiseLike<Array<{ [key: string]: any }>> {
        throw new Error(("not implemented"));
    }

    public updateRecord(entityType: string, id: string, data: { [attributeName: string]: any })
            : Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject> {
        throw new Error(("not implemented"));
    }

    public deleteRecord(entityType: string, id: string): Xrm.Async.PromiseLike<Xrm.Async.OfflineOperationSuccessCallbackObject> {
        throw new Error(("not implemented"));
    }
}
