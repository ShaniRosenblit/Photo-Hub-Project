import { Category } from "./category";

export class Picture { 
 public src: string;
 public caption: string;
 public categories : Category[] = [];
 public loction : string;
 public favorite : boolean = false;
 public privateMode : boolean = false;
 public latPointLoctoin:number;
 public lngPointLoctoin:number;
}