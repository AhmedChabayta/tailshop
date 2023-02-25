import AutocompleteInput from '../AutocompleteInput/AutocompleteInput';
import AutocompleteProvider, {
  AutocompleteProviderProps,
} from '../AutocompleteProvider/AutocompleteProvider';
import AutocompleteActions from '../AutocompleteActions/AutocompleteActions';
import AutocompleteOptions from '../AutocompleteOptions/AutocompleteOptions';
import Flex from '../../Flex';

const Autocomplete = (props: AutocompleteProviderProps) => {
  const { options, onItemSelect, children, className } = props;

  return (
    <AutocompleteProvider options={options} onItemSelect={onItemSelect}>
      <Flex className={`${className}`}>{children}</Flex>
    </AutocompleteProvider>
  );
};
export default Autocomplete;
Autocomplete.Input = AutocompleteInput;
Autocomplete.Actions = AutocompleteActions;
Autocomplete.Options = AutocompleteOptions;
