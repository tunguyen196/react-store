import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Grid, Pagination, Paper } from '@mui/material';
import productApi from 'api/productApi';
import ProductSkeletopnList from '../components/ProductSkeletopnList';
import ProductList from '../components/ProductList';
import { makeStyles } from '@mui/styles';
import ProductFilters from '../components/ProductFilters';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';

ListPage.propTypes = {

};

const useStyles = makeStyles({
    pagination: {
        '& ul': {
            justifyContent: 'center',
            marginTop: '15px'
        },
    }
})

function ListPage(props) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const queryParams = queryString.parse(location.search);

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const [pagination, setPagination] = useState({
        limit: 10,
        total: {
            data: 12
        },
        page: 1,
    });


    const [filters, setFilter] = useState(() => ({
        ...queryParams,
        _page: queryParams._page || 1,
        _limit: queryParams._limit || 12,
    }));

    //add url 
    useEffect(() => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }, [history, filters]);

    useEffect(() => {
        (async () => {
            try {
                const { data: { data }, pagination } = await productApi.getAll(filters);

                setProductList(data);
                setPagination(pagination);
                // console.log(pagination);
                // console.log(data);

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

    const handleFiltersChange = (newFilters) => {
        setFilter(prevFilters => ({
            ...prevFilters,
            ...newFilters,
            _page: 1
        }))
    }

    return (
        <Box>
            <Container maxWidth={'xl'}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Paper elevation={1}>
                            <ProductFilters filters={filters} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper elevation={1}>
                            {loading ? <ProductSkeletopnList /> : <ProductList data={productList} />}

                            <Pagination className={classes.pagination} count={Math.ceil(pagination.total.data / pagination.limit)} page={pagination.page} onChange={handlePageChange} color="primary" />

                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;