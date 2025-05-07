export const Currencies = [
    {value: "USD", label: "$ USD Dollar", locale: "en-US"},
    {value: "CAD", label: "$ CAD Dollar", locale: "en-CAD"},
    {value: "EUR", label: "€ Euro", locale: "de-DE"},
    {value: "JPY", label: "¥ Yen", locale: "ja-JP"},
    {value: "GBP", label: "£ Pound", locale: "en-GB"},
]

export type Currency = (typeof Currencies)[0]