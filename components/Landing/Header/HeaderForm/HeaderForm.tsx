import { Box } from '@src/components';
import { Autocomplete } from '@src/components/AutocompleteV2';
import { categories as _categories } from '../constants/cat';

const HeaderForm = () => {
  const categories = _categories.categories.map((cat) => cat.category);
  return (
    <Box className="mt-4 w-screen px-10 md:w-full lg:mt-0">
      <Autocomplete
        className="relative h-14 max-h-[70px] items-center rounded border border-gray-300 bg-gray-100 py-1 px-2 dark:border-gray-400 dark:bg-gray-900 lg:h-full lg:px-4"
        options={categories}
        onItemSelect={(item) => console.log(item)}
      >
        <Autocomplete.Input className="h-full flex-1 appearance-none bg-transparent text-gray-900 outline-none focus:outline-none dark:bg-transparent dark:text-gray-300" />
        <Autocomplete.Actions
          atSelect={(value) => console.log(value)}
          className="mr-2 flex flex-col items-center space-y-2 text-4xl"
          iconsClassName="w-3 lg:w-4"
          chevronClassName="w-5 lg:w-8"
        />
        <Autocomplete.Options
          className="absolute inset-x-0 top-full mt-2 max-h-[300px] overflow-x-hidden overflow-y-scroll rounded border border-gray-300  bg-gray-100 dark:border-gray-400 dark:bg-gray-900"
          optionsClassName="cursor-pointer p-3 capitalize text-gray-900 hover:bg-sky-400 dark:text-gray-300 dark:hover:bg-gray-500"
        />
      </Autocomplete>
    </Box>
  );
};
export default HeaderForm;
