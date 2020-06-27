import {Dao, Transport} from '../models';
import {ReferenceData} from "../models/reference-data";
import {Author} from "../models/author";

export class ReferenceDataDao implements Dao<ReferenceData> {
    private endpoint = 'api/reference-data';

    constructor(private transport: Transport<ReferenceData>) {
    }

    getAll(): Promise<ReferenceData[]> {
        return this.transport.getAll(this.endpoint);
    }

    getById(id: string): Promise<ReferenceData> {
        return this.transport.getOne(`${this.endpoint}/${id}`);
    }


    getByCode(code: string): Promise<ReferenceData> {
        return this.transport.getOne(`${this.endpoint}/${code}`);
    }
}
