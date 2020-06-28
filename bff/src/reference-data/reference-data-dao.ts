import {Transport} from '../models';
import {ReferenceData} from "../models/reference-data";
import {EntityDao} from "../util/entity-dao";

export class ReferenceDataDao extends EntityDao<ReferenceData> {
    constructor(protected transport: Transport<ReferenceData>) {
        super(transport);
        this.endpoint = 'api/reference-data';
    }

    getByCode(code: string): Promise<ReferenceData> {
        return this.transport.getOne(`${this.endpoint}/${code}`);
    }
}
