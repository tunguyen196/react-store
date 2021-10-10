import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import ProductThumbnail from '../components/ProductThumbnail';
import { useRouteMatch } from 'react-router';
import useProductDetail from '../hooks/useProductDetails';
import ProductInfo from '../components/ProductInfo';

DetailPage.propTypes = {

};

function DetailPage(props) {
    const { params: { productId } } = useRouteMatch();

    const { product, loading } = useProductDetail(productId);

    if (loading) {
        return <Box>Loading</Box>
    }

    return (
        <Box>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item xs={4}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item xs={8}>
                            <ProductInfo product={product} />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default DetailPage;