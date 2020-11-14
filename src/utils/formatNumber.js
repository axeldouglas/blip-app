function formatNumber(number, digits = 2) {
    return new Intl.NumberFormat("pt-BR", {
        maximumFractionDigits: digits,
    }).format(number);
}

export { formatNumber };
