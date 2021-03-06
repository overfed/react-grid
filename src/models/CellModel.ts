import { observable } from 'mobx'
import { Guid } from "guid-typescript";

class CellModel {
  @observable private value: any;
  private type: any;
  private id: Guid;

  constructor(type: any, value: any) {
    this.type = type;
    this.setValue(value);
    this.id = Guid.create();
  }

  public get Id(): Guid {
    return this.id;
  }

  public get Value(): any {
    return this.value;
  }

  public setValue(newValue: any) {
    if (typeof newValue === this.type) {
      this.value = newValue;
    }
    else {
      throw new Error("Provided Cell value is not consistent to cell type.");
    }
  }
}

export default CellModel;