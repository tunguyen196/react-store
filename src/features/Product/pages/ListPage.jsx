import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Grid, Pagination, Paper } from '@mui/material';
import productApi from 'api/productApi';
import ProductSkeletopnList from '../components/ProductSkeletopnList';
import ProductList from '../components/ProductList';

ListPage.propTypes = {

};

function ListPage(props) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        limit: 10,
        total: {
            data: 10
        },
        page: 1,
    });
    const [filters, setFilter] = useState({
        _page: 1,
        _limit: 10,
    });

    useEffect(() => {
        (async () => {
            try {
                const { data: { data }, pagination } = await productApi.getAll({ _page: filters._page, _limit: filters._limit });

                setProductList(data);
                setPagination(pagination);
                console.log(pagination);
                console.log(data);

            } catch (error) {
                console.log('set product list fail', error);
            }
            setLoading(false);
        })();
    }, [filters]);

    const handlePageChange = (e, page) => {
        setFilter(prevFilters => ({
            ...prevFilters,
            _page: page
        }))
    }
    return (
        <Box>
            <Container maxWidth={'xl'}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Paper elevation={0}>
                            Left
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper elevation={0}>
                            {loading ? <ProductSkeletopnList /> : <ProductList data={productList} />}

                            <Pagination count={Math.ceil(pagination.total.data / pagination.limit)} page={pagination.page} onChange={handlePageChange} color="primary" />

                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;