import numeral from "numeral";
import { useCallback, useMemo } from "react";

export const usePriceFormat = (room) => {
    const formatPrice = useCallback((price) => {
        if (!price) return price;
        if (price && price * 1000 === 1000000) return numeral(price * 1000).format('0a')
        if (price && price * 1000 > 1000000) return numeral(price * 1000).format('0.00a')
        return numeral(price * 1000).format('00a')
    }, [])

    return useMemo(() => {
        const price1 = room?.option_prices?.option1;
        const price2 = room?.option_prices?.option2;
        return [formatPrice(price1), formatPrice(price2)]
    }, [room, formatPrice]);
}