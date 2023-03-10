'use client';

import {
  ChevronDownIcon,
  XMarkIcon,
  ClipboardIcon,
} from '@heroicons/react/24/solid';
import classnames from 'classnames';
import React from 'react';
import uuid from 'react-uuid';

import { useCopyToClipboard } from '../../hooks';
import useClickOutside from '../../hooks/useClickOutside/useClickOutside';
import { AutocompleteProps } from './Autocomplete.Types';
import { containerStyles } from './Autocomplete.Styles';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';
import Typography from '../Typography/Typography';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Autocomplete: React.FC<AutocompleteProps> = React.forwardRef<
  HTMLInputElement,
  AutocompleteProps
>((props, ref) => {
  const {
    options,
    atSelect,
    className,
    chevronClassName,
    labelClassName,
    inputClassName,
    actionsContainerClassName,
    iconClassName,
    optionsContainerClassName,
    optionsClassName,
    placeholder,
    label,
    customRef,
    id,
    ...rest
  } = props;

  const Styles = React.useMemo(
    () => ({
      container: containerStyles.container,
      label: containerStyles.label,
      actionsContainer: containerStyles.actionsContainer,
      clearIcon: containerStyles.clearIcon,
      copyIcon: containerStyles.copyIcon,
      optionsContainer: containerStyles.optionsContainer,
      options: containerStyles.options,
      optionAlt: containerStyles.optionAlt,
      chevron: containerStyles.chevron,
      // add any additional styles or overrides here
      // e.g. backgroundColor: color, padding: padding
    }),
    []
  );

  const [inputValue, setInputValue] = React.useState('');
  const [showOptions, setShowOptions] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);
  // const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [copyToClipboard] = useCopyToClipboard();

  const filteredItems = React.useMemo(() => {
    try {
      const OPTIONS = options?.filter(
        (item) =>
          typeof item === 'string' &&
          item.toLowerCase().includes(inputValue.toLowerCase())
      );
      return OPTIONS;
    } catch (error: unknown) {
      console.error(error);
    }
    return [];
  }, [options, inputValue]);

  React.useEffect(() => {
    if (inputRef?.current) {
      inputRef?.current?.focus();
    }
  }, []);

  const clickOutsideRef = useClickOutside(() => setShowOptions(false));

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = event;
      setInputValue(target.value);
      setShowOptions(true);
    },
    []
  );

  const handleItemSelect = React.useCallback(
    (item: string) => {
      atSelect(item);
      setInputValue(item);
      setShowOptions(false);
    },
    [atSelect]
  );

  return (
    <Flex className="w-full">
      <Flex
        ref={clickOutsideRef}
        className={classnames(Styles.container, className)}
      >
        <Box className={classnames(Styles.label, labelClassName)}>
          <Typography htmlFor={id} as="label">
            {label}
          </Typography>
        </Box>

        <Input
          type="text"
          className={classnames(inputClassName)}
          id={id}
          placeholder={placeholder}
          ref={customRef ? ref : inputRef}
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          {...rest}
        />

        <Flex
          style={{
            visibility: inputValue.length > 0 ? 'visible' : 'hidden',
          }}
          direction="col"
          className={classnames(
            actionsContainerClassName,
            Styles.actionsContainer
          )}
        >
          <Button
            aria-details="clear input button"
            type="button"
            className="group m-0 p-0"
            onClick={() => {
              atSelect('');
              setInputValue('');
            }}
          >
            <XMarkIcon
              className={classnames(Styles.clearIcon, iconClassName)}
            />
          </Button>
          <Button
            type="button"
            aria-details="copy input button"
            onClick={() => {
              copyToClipboard(inputValue);
            }}
            className="group m-0 p-0"
          >
            <ClipboardIcon
              className={classnames(Styles.copyIcon, iconClassName)}
            />
          </Button>
        </Flex>

        <hr className="mx-3 h-8 w-[0.1px] rounded-full border border-gray-400" />

        {showOptions && filteredItems && (
          <ul
            className={classnames(
              Styles.optionsContainer,
              optionsContainerClassName
            )}
          >
            {filteredItems?.length > 0 || inputValue.length
              ? filteredItems?.map((option) => (
                  <Button
                    type="button"
                    key={uuid()}
                    onClick={() => handleItemSelect(option)}
                    className={classnames(Styles.options, optionsClassName)}
                  >
                    <li>
                      <Typography>{option}</Typography>
                    </li>
                  </Button>
                ))
              : options?.map((option) => (
                  <Button
                    type="button"
                    key={uuid()}
                    onClick={() => handleItemSelect(option)}
                    className={classnames(Styles.options, optionsClassName)}
                  >
                    <li>
                      <Typography>{option}</Typography>
                    </li>
                  </Button>
                ))}
          </ul>
        )}

        <Button
          aria-label={showOptions ? 'Hide options' : 'Show options'}
          type="button"
          className="h-fit bg-transparent p-0 "
        >
          <ChevronDownIcon
            onClick={() => setShowOptions((prev) => prev !== true)}
            className={classnames(
              chevronClassName,
              Styles.chevron,
              showOptions ? 'rotate-180' : 'rotate-0'
            )}
          />
        </Button>
      </Flex>
    </Flex>
  );
});
Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;
