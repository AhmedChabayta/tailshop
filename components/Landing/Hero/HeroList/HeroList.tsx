import { List, Typography } from '@src/components';
import uuid from 'react-uuid';
import ListItem from '@src/components/List/ListItem';
import { SelectedState } from '../Hero.Types';

const HeroList = ({
  list,
  setSelected,
  selected,
}: {
  list: any[];
  setSelected: (value: SelectedState) => void;
  selected: SelectedState;
}) => (
  <List className="hidden max-w-xs space-y-2 lg:inline-block">
    {list?.map((button) => (
      <ListItem
        onClick={() => {
          setSelected(button);
        }}
        className={`cursor-pointer rounded p-2 hover:bg-blue-300 dark:hover:bg-orange-900 ${
          selected?.title === button.title
            ? 'bg-amber-400 font-normal dark:bg-blue-600'
            : 'font-semibold '
        }`}
        key={uuid()}
      >
        <Typography className="capitalize">{button.title}</Typography>
      </ListItem>
    ))}
  </List>
);
export default HeroList;
