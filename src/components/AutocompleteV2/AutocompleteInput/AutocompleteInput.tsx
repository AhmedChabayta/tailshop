import Input from '@src/components/Input/Input';
import { InputInterfaceProps } from '@src/components/Input/Input.Types';
import React from 'react';
import { useAutocompleteActions } from '../AutocompleteProvider/AutocompleteProvider';

interface AutocompleteInputInterface extends InputInterfaceProps {}

const AutocompleteInput = (props: AutocompleteInputInterface) => {
  const { inputValue, handleInputChange } = useAutocompleteActions();
  const { className, value, ...rest } = props;
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref?.current) {
      ref?.current?.focus();
    }
  }, []);
  return (
    <input
      className={className}
      ref={ref}
      value={inputValue}
      onChange={(e) => handleInputChange(e)}
      {...rest}
    />
  );
};
AutocompleteInput.displayName = 'AutocompleteInput';
export default AutocompleteInput;
