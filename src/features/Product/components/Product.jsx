import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Skeleton, Typography } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_NOTFOUND } from 'constants/index';
import { useHistory } from 'react-router';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const history = useHistory();
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_NOTFOUND;

    const handleClick = () => {
        history.push(`/products/${product.id}`)
    }

    return (
        <Box padding={1} onClick={handleClick}>
            <Box padding={1}>
                <img src={thumbnailUrl} alt={product.name} width="100%" height={200} />
            </Box>

            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" mr={2} fontSize="14px" fontWeight="bold">
                    {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ''}</Typography>
        </Box>
    );
}

export default Product;