class CurrencyUI {
    constructor() {
        this.currency = document.getElementById('currency');
    }

    get currencyValue() {
        return this.currency.value;
    }
}

const currencyUi = new CurrencyUI();

export default currencyUi;