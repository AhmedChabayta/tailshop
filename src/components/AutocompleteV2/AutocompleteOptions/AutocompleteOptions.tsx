import uuid from 'react-uuid';
import { useAutocompleteActions } from '../AutocompleteProvider/AutocompleteProvider';
import Typography from '../../Typography';
import { AnimatePresence, motion } from 'framer-motion';

interface AutocompleteOptionsInterface {
  className?: string;
  optionsClassName?: string;
}

const AutocompleteOptions = (props: AutocompleteOptionsInterface) => {
  const { className, optionsClassName } = props;
  const { inputValue, showOptions, handleItemSelect, filteredItems, options } =
    useAutocompleteActions();

  return (
    <>
      {Array.isArray(options) ? (
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
                    <li
                      typeof="button"
                      key={uuid()}
                      onClick={() => handleItemSelect(option)}
                      className={optionsClassName}
                    >
                      <Typography>{option}</Typography>
                    </li>
                  ))
                : options?.map((option) => (
                    <li
                      typeof="button"
                      key={uuid()}
                      onClick={() => handleItemSelect(option)}
                      className={optionsClassName}
                    >
                      <Typography>{option}</Typography>
                    </li>
                  ))}
            </motion.ul>
          )}
        </AnimatePresence>
      ) : (
        options
      )}
    </>
  );
};
export default AutocompleteOptions;
