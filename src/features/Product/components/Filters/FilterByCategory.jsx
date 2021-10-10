import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import categoryApi from 'api/categoryApi';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    menu: {
        '&  ul': {
            padding: 0
        },

        '& > li': {
            padding: 0,
            paddingTop: '5px',
            margin: 0,
            listStyle: 'none',

            '&:hover': {
                cursor: 'pointer',
                color: '#1976d2',
            }
        }
    }
})

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};


function FilterByCategory({ onChange }) {
    const classes = useStyles();

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await categoryApi.getAll();

                setCategoryList(data.map(response => (
                    {
                        id: response.id,
                        name: response.name,
                    }
                )));
                console.log('data:', data);

            } catch (error) {
                console.log('error:', error);
            }
        })()
    }, []);

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category);
        }
    }

    return (
        <Box>
            <Typography>DANH MỤC SẢN PHẨM</Typography>

            <ul className={classes.menu}>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;