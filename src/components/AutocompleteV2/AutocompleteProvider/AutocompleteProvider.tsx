import React from 'react';
import useClickOutside from '../../../hooks/useClickOutside/useClickOutside';

type AutocompleteContextValue = {
  inputValue: string;
  setInputValue: (value: string) => void;
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleItemSelect: (item: string) => void;
  filteredItems: string[] | undefined;
  options?: any[] | {};
};

export const AutocompleteContext =
  React.createContext<AutocompleteContextValue>({} as AutocompleteContextValue);

export const useAutocompleteActions = () => {
  return React.useContext<AutocompleteContextValue>(AutocompleteContext);
};

export type AutocompleteProviderProps = {
  options: string[];
  onItemSelect: (item: string) => void;
  children: React.ReactNode;
  className?: string;
};

const AutocompleteProvider: React.FC<AutocompleteProviderProps> = ({
  options,
  onItemSelect,
  children,
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [showOptions, setShowOptions] = React.useState(false);

  const filteredItems = React.useMemo(() => {
    try {
      const OPTIONS = options?.filter(
        (item) =>
          typeof item === 'string' &&
          item.toLowerCase().includes(inputValue.toLowerCase())
      );
      return OPTIONS;
    } catch (error) {}
  }, [options, inputValue]);

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
      onItemSelect(item);
      setInputValue(item);
      setShowOptions(false);
    },
    [onItemSelect]
  );

  const contextValue: AutocompleteContextValue = {
    inputValue,
    setInputValue,
    showOptions,
    setShowOptions,
    handleInputChange,
    handleItemSelect,
    filteredItems,
    options,
  };

  return (
    <AutocompleteContext.Provider value={contextValue}>
      <div ref={clickOutsideRef}>{children}</div>
    </AutocompleteContext.Provider>
  );
};

export default AutocompleteProvider;
