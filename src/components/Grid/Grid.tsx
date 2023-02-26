import React from 'react';
import classnames from 'classnames';
import { GridItemProps, GridProps } from './Grid.Types';
import { Box } from '..';

type GridType = {
  (props: GridProps): JSX.Element;
  Item: (props: GridItemProps) => JSX.Element;
};

const Grid: GridType = (props: GridProps) => {
  const { children, className } = props;

  return <Box className={classnames(className, 'grid')}>{children}</Box>;
};

const GridItem = (props: GridItemProps) => {
  const { children, className } = props;
  const DEFAULT_GRID_ITEM_CLASSNAME = 'DEFAULT_GRID_ITEM_CLASSNAME';

  return (
    <Box className={classnames(className, DEFAULT_GRID_ITEM_CLASSNAME)}>
      {children}
    </Box>
  );
};

Grid.Item = GridItem;

export default Grid;
