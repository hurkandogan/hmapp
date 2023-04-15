import { createSlice } from '@reduxjs/toolkit';
import { Property } from '../types/Property';
import { Categories } from '../constants/Categories';

const initialState: { value: Property[] } = {
  value: [
    {
      id: 'berliner_str',
      name: 'Berliner Str.',
      sort_number: 0,
      available_categories: [Categories.PRAXIS, Categories.GENERAL],
    },
    {
      id: 'carl_private',
      name: 'Carl Prv..',
      sort_number: 1,
      available_categories: [Categories.GENERAL],
    },
    {
      id: 'zehn_str_32',
      name: 'Zehnstr. 32',
      sort_number: 2,
      available_categories: [
        Categories.SIDE_COSTS,
        Categories.RENOVATION,
        Categories.COSTS,
      ],
    },
    {
      id: 'hurkan_expenses',
      name: "Hurkas's Expenses",
      sort_number: 3,
      available_categories: [Categories.EXPENSES],
    },
    {
      id: 'gaisberg_str',
      name: 'Gaisbergstr.',
      sort_number: 14,
      sub_property: [
        {
          id: 'gaisberg_str_gb',
          name: 'Gaisbergstr. Gebäude',
          sort_number: 0,
          available_categories: [
            Categories.SIDE_COSTS,
            Categories.RENOVATION,
            Categories.COSTS,
          ],
        },
        {
          id: 'gaisberg_str_eg',
          name: 'Gaisbergstr. EG',
          sort_number: 1,
          available_categories: [
            Categories.SIDE_COSTS,
            Categories.RENOVATION,
            Categories.COSTS,
          ],
        },
        {
          id: 'gaisberg_str_first',
          name: 'Gaisbergstr. 1. Fl.',
          sort_number: 2,
          available_categories: [
            Categories.SIDE_COSTS,
            Categories.RENOVATION,
            Categories.COSTS,
          ],
        },
        {
          id: 'gaisberg_str_dg',
          name: 'Gaisbergstr. DG',
          sort_number: 3,
          available_categories: [
            Categories.SIDE_COSTS,
            Categories.RENOVATION,
            Categories.COSTS,
          ],
        },
      ],
    },
    {
      id: 'oftersheim',
      name: 'Oftersheim',
      sort_number: 5,
      sub_property: [
        {
          id: 'oftersheim_gb',
          name: 'Oftersheim Gebäude',
          sort_number: 0,
          available_categories: [
            Categories.SIDE_COSTS,
            Categories.RENOVATION,
            Categories.COSTS,
          ],
        },
        {
          id: 'oftersheim_eg',
          name: 'Oftersheim EG',
          sort_number: 1,
          available_categories: [
            Categories.SIDE_COSTS,
            Categories.RENOVATION,
            Categories.COSTS,
          ],
        },
        {
          id: 'oftersheim_first',
          name: 'Oftersheim 1. Fl.',
          sort_number: 2,
          available_categories: [
            Categories.SIDE_COSTS,
            Categories.RENOVATION,
            Categories.COSTS,
          ],
        },
        {
          id: 'oftersheim_dg',
          name: 'Oftersheim DG',
          sort_number: 3,
          available_categories: [
            Categories.SIDE_COSTS,
            Categories.RENOVATION,
            Categories.COSTS,
          ],
        },
      ],
    },
  ],
};

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {},
});

export default propertiesSlice.reducer;