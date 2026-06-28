import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        const baseCurrency = (currency || 'USD').toUpperCase()

        fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates || {}))
            .catch(() => setData({}))
    }, [currency])

    return data
}

export default useCurrencyInfo;