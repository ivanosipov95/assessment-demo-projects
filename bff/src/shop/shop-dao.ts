import {Transport} from '../models';
import {EntityDao} from "../util/entity-dao";
import {Shop} from "../models/shop";

export class ShopDao extends EntityDao<Shop> {
    constructor(protected transport: Transport<Shop>) {
        super(transport);
        this.endpoint = 'api/shops';
    }
}
