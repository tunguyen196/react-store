import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid'
import { Skeleton } from '@mui/material';
import Product from './Product';


ProductList.propTypes = {
    data: PropTypes.array,
};

ProductList.defaultProps = {
    data: [],
};

function ProductList({ data }) {
    return (
        <Box>
            <Grid container>
                {data.map((product, index) => (
                    <Grid item key={product.id} xs={12} sm={8} md={3}>
                        <Box padding={1}>
                            <Product product={product} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;