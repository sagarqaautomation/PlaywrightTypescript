export class RuntimeData {
    private data: Map<string, any> = new Map();

    // Add data
     async  setData(key: string, value: any): Promise<void> {
        this.data.set(key, value);
    }

    // Get data 
    async getData(key: string): Promise<any> {
        if (!this.data.has(key)) {
            throw new Error(`Key "${key}" not found in runtime data store.`);
        }
        return this.data.get(key);
    }

    // Add a list of key-value pairs
    async setListOfData(dataList: { key: string; value: any }[]): Promise<void> {
        for (const item of dataList) {
            this.data.set(item.key, item.value);
        }
    }

    // Check if a key exists
    async hasData(key: string): Promise<boolean> {
        return this.data.has(key);
    }

    // Remove data from the store
    async removeData(key: string): Promise<void> {
        this.data.delete(key);
    }

    // Clear all data
    async clearData(): Promise<void> {
        this.data.clear();
    }
}