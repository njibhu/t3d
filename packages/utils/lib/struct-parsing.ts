import { RDataView } from "./rdataview";

class StructTabParser {
  private parsedStructsId: Array<any>;
  private rdataView : RDataView;

  constructor(rdataView: RDataView){
    this.parsedStructsId = [];
    this.rdataView = rdataView;
  }

  parseStructTab(address: number, nbVersions: number) {
    let currentAddress, loopIndex, historyDepth, subAddress;

    loopIndex = nbVersions - 1;
    historyDepth = 100;

    while (loopIndex >= 0 && loopIndex >= nbVersions - historyDepth) {
      currentAddress = this.rdataView.getAddress(currentAddress);
    }
  }
}
