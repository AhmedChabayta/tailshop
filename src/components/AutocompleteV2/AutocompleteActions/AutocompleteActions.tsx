import {
  ChevronDownIcon,
  ClipboardIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import Button from '../../Button/Button';
import Flex from '../../Flex/Flex';
import { useAutocompleteActions } from '../AutocompleteProvider/AutocompleteProvider';
import { useCopyToClipboard } from '../../../hooks';

interface AutocompleteActionsInterface {
  className?: string;
  atSelect: (value: string) => void;
  iconsClassName?: string;
  chevronClassName?: string;
}

const AutocompleteActions = (props: AutocompleteActionsInterface) => {
  const {
    className,
    atSelect,
    iconsClassName = 'w-5',
    chevronClassName = 'w-5',
  } = props;
  const { inputValue, setInputValue, setShowOptions } =
    useAutocompleteActions();
  const [copyToClipboard, { isCopied, error }] = useCopyToClipboard();

  return (
    <Flex className="items-center">
      <motion.div
        animate={{ visibility: inputValue ? 'visible' : 'hidden' }}
        className={classNames(className)}
      >
        <Button
          className="m-0 flex h-fit w-fit items-center p-0"
          onClick={() => {
            atSelect('');
            setInputValue('');
          }}
          aria-details="clear input button"
          type="button"
        >
          <XMarkIcon className={iconsClassName} />
        </Button>
        <Button
          className="m-0 flex h-fit w-fit items-center p-0"
          onClick={() => copyToClipboard(inputValue)}
          type="button"
          aria-details="copy input button"
        >
          <ClipboardIcon className={iconsClassName} />
        </Button>
      </motion.div>
      <hr className="" />
      <Button
        className="m-0 h-fit w-fit p-0"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <ChevronDownIcon className={chevronClassName} />
      </Button>
    </Flex>
  );
};
export default AutocompleteActions;
