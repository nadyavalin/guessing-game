class GuessingGame {
    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
      }

      setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;
      }

    guess() {
        const rangeSize = this.maxRange - this.minRange;
        const midpoint = Math.round(this.minRange + rangeSize / 2);
        return midpoint;
    }

    lower() {
        this.maxRange = this.guess();
    }

    greater() {
        this.minRange = this.guess();
    }
}

module.exports = GuessingGame;
