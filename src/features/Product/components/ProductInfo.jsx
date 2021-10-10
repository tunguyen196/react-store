import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { formatPrice } from 'utils';

const useStyle = makeStyles({
    boxInfo: {
        marginLeft: '15px',

        '& > h1,p': {
            paddingBottom: '10px',
        },
    },
    salePrice: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'red',
    },

    originalPrice: {
        textDecoration: 'line-through',
        paddingLeft: '5px',
    },

    promotionPercent: {
        fontSize: '8px',
        paddingLeft: '5px',
    },
})

ProductInfo.propTypes = {
    product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
    const classes = useStyle();
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
    return (
        <Box className={classes.boxInfo}>
            <Typography component="h1" variant="h4">{name}</Typography>
            <Typography variant="body2">{shortDescription}</Typography>
            <Box>
                <Box component="span" className={classes.salePrice}>{formatPrice(salePrice)}</Box>
                {promotionPercent > 0 && (
                    <>
                        <Box component="span" className={classes.originalPrice}>{formatPrice(originalPrice)}</Box>
                        <Box component="span" className={classes.promotionPercent}>{(promotionPercent)}%</Box>
                    </>
                )}

            </Box>
        </Box>
    );
}

export default ProductInfo;