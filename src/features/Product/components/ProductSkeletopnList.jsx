import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid'
import { Skeleton } from '@mui/material';


ProductSkeletopnList.propTypes = {
    length: PropTypes.number,
};

ProductSkeletopnList.defaultProps = {
    length: 12,
};

function ProductSkeletopnList({ length }) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12} sm={8} md={3}>
                        <Box padding={1}>
                            <Skeleton variant="rect" width="100%" height={118}></Skeleton>
                            <Skeleton width="60%" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeletopnList;