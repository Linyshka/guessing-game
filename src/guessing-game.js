class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.centre = Math.round((this.min + this.max) / 2 );
        return this.centre;     
    }

    lower() {
        this.max = this.centre;
    }

    greater() {
        this.min = this.centre;
    }
}

module.exports = GuessingGame;
