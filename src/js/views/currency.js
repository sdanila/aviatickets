class CurrencyUI {
    constructor() {
        this.currency = document.getElementById('currency');
        this.dictionary = {
            USD: '$',
            EUR: '€',
            RUB: '₽',
        }
    }

    get currencyValue() {
        return this.currency.value;
    }

    getCurrencySymbol() {
        return this.dictionary[this.currencyValue];
    }
}

const currencyUi = new CurrencyUI();

export default currencyUi;