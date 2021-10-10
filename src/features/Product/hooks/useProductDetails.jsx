import productApi from "api/productApi";
import { useEffect, useState } from "react"

export default function useProductDetail(productId) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await productApi.get(productId);
                setProduct(response.data);
            } catch (error) {
                console.log('Failed to fetch product', error)
            }

            setLoading(false);
        })();
    }, [productId])

    return { product, loading };
}