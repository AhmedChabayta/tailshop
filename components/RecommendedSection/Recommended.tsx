import { Card, Grid, Typography } from '@src/components';
import { CardDataInterface } from '@src/store/dataStoreTypes';


interface cardDataProps {
  cardData?: CardDataInterface[];
}

const Recommended = (props: cardDataProps) => {
  const { cardData } = props;
  return (
    <>
      <Typography className="mt-6 mb-8 self-start text-3xl">
        Recommended
      </Typography>
      <Grid className="mx-auto my-4 grid-flow-row grid-cols-2 gap-1 border-gray-500 px-2 md:grid-cols-3 lg:grid-cols-5">
        {cardData
          ? cardData.map((card) => (
              <Grid.Item
                className="mx-auto h-[310px] w-full rounded-md border bg-white p-2 text-gray-900"
                key={card.id}
              >
                <Card className="flex flex-col space-y-2 overflow-hidden rounded-md">
                  <Card.Image
                    className="h-[200px] object-contain "
                    height={200}
                    width={200}
                    src={card.image}
                  />
                  <Card.Details>
                    <Typography className="">${card.price}</Typography>
                    <Typography className="max-w-[170px] truncate">
                      {card.description}
                    </Typography>
                  </Card.Details>
                </Card>
              </Grid.Item>
            ))
          : ''}
      </Grid>
    </>
  );
};
export default Recommended;
