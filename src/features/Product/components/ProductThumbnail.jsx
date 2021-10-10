import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_NOTFOUND } from 'constants/index';

ProductThumbnail.propTypes = {

};

function ProductThumbnail({ product }) {
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_NOTFOUND;
    return (
        <Box>
            <img src={thumbnailUrl} alt={product.name} width="100%" />
        </Box>
    );
}

export default ProductThumbnail;