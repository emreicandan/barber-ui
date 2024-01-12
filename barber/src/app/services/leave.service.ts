import { Injectable } from "@angular/core";
import { BaseService } from "./base/base.service";
import { Leave } from "../models/leave";

@Injectable ({
    providedIn: 'root'
})
export class LevaeService extends BaseService<Leave>{
    override path:string='leaves'
}