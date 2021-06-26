import {observable, action, computed, reaction} from "mobx";
import {createContext} from "react";

class TotalStore {
    constructor() {
        reaction(
            () => this.total,
            (_) => console.log(this.total)
        );
    }
    @observable total = 0;
    @observable incrementTotal = 0;
    @observable decrementTotal = 0;

    @action addToTotal = () => {
        this.total = this.total + 1;
    };

    @action addToIncrement = () => {
        this.incrementTotal = this.incrementTotal + 1;
    };

    @action addToDecrement = () => {
        this.decrementTotal = this.decrementTotal + 1;
    };

    @computed get info() {
        return {
            total: this.total,
            incrementTotal: this.incrementTotal,
            decrementTotal: this.decrementTotal
        };
    }
}

export default createContext(new TotalStore());
