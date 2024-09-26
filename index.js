import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_harRKRRUUuAqxdirjDchS3OfhtzoElxTkRkitIWo');

export async function currencieConverter(formCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: formCurrency, //base currency
        currencies: toCurrency //the converted currency
    })
    const multiplier = res.data[toCurrency]

    return multiplier * units;

}

