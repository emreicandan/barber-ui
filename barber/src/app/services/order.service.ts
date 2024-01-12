import { Injectable } from "@angular/core";
import { extend } from "jquery";
import { BaseService } from "./base/base.service";
import { Order } from "../models/order";

@Injectable ({
    providedIn:'root'
})
export class OrderService extends BaseService<Order>{
    override path: string='orders'
}