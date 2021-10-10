import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {

    const handeFiltersChange = (newCategoryId) => {
        const newFilters = {
            ...filters,
            'category.id': newCategoryId,
        }

        onChange(newFilters);
    }

    return (
        <Box>
            <FilterByCategory onChange={handeFiltersChange} />
        </Box>
    );
}

export default ProductFilters;