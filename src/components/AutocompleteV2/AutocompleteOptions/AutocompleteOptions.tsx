import uuid from 'react-uuid';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@src/components/Button/Button';
import { useAutocompleteActions } from '../AutocompleteProvider/AutocompleteProvider';
import Typography from '../../Typography';

interface AutocompleteOptionsInterface {
  className?: string;
  optionsClassName?: string;
}

const AutocompleteOptions = (props: AutocompleteOptionsInterface) => {
  const { className, optionsClassName } = props;
  const { inputValue, showOptions, handleItemSelect, filteredItems, options } =
    useAutocompleteActions();

  return (
    <AnimatePresence>
      {showOptions && filteredItems && (
        <motion.ul
          initial={{ opacity: 0, zIndex: -100 }}
          animate={{ opacity: 1, zIndex: 1 }}
          exit={{ opacity: 0, zIndex: -100 }}
          transition={{ duration: 0.1 }}
          className={className}
        >
          {filteredItems?.length > 0 || inputValue.length
            ? filteredItems?.map((option) => (
                <Button
                  key={uuid()}
                  onClick={() => handleItemSelect(option)}
                  className={optionsClassName}
                >
                  <li>
                    <Typography>{option}</Typography>
                  </li>
                </Button>
              ))
            : options?.map((option) => (
                <Button
                  key={uuid()}
                  onClick={() => handleItemSelect(option)}
                  className={optionsClassName}
                >
                  <li>
                    <Typography>{option}</Typography>
                  </li>
                </Button>
              ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};
export default AutocompleteOptions;
