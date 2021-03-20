export class LifeCycleModel{
    cycleName: string = '';
    cycleOrder: string = '';
    constructor(cycleName: string, cycleOrder: string) {
        this.cycleName = cycleName;
        this.cycleOrder = cycleOrder;
    }
}