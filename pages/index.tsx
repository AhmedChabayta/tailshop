import { Box, Card, Flex, Section, Typography } from '@src/components';
import Deals from 'components/DealsOffers/Deals';
import Hero from 'components/Hero/Hero';
import Layout from 'components/Layout/Layout';
import Row from 'components/Row/Row';
import { mainHomeImage } from '../src/assets/products/home_and_decor';
import { mainElectronics } from '../src/assets/products/consumer_electronics';
import RequestForm from 'components/RequestForm/RequestForm';
import React from 'react';
import Recommended from 'components/RecommendedSection/Recommended';
import { services } from '../src/assets/services';
import { CardDataInterface } from '@src/store/dataStoreTypes';
import uuid from 'react-uuid';

type DataProps = {
  data: CardDataInterface[];
};

const Home = ({ data }: DataProps) => {
  return (
    <Layout>
      <Flex className="w-full flex-col items-center justify-center">
        <Section className="mx-auto w-full">
          <Hero />
          <Deals data={data} />
        </Section>
        <Section className="mx-auto">
          <Flex className="flex-col space-y-4">
            <Row
              className="w-full overflow-hidden rounded-md bg-white"
              list={data}
              main={mainHomeImage}   
            />
            <Row
              className="w-full overflow-hidden rounded-md bg-white"
              list={data}
              main={mainElectronics}
            />
          </Flex>
        </Section>
        <RequestForm />
        <Section>
          <Recommended cardData={data} />
        </Section>

        <Section>
          <Flex className="space-x-6 overflow-x-scroll px-2">
            {services.map((service) => (
              <Card
                className="relative min-h-[200px] w-full min-w-[280px] rounded-md bg-white"
                key={uuid()}
              >
                <Box className="relative">
                  <Card.Image
                    className="w-full"
                    height={120}
                    width={280}
                    src={service.image}
                  />
                  <Box className="absolute inset-0 bg-black/50" />
                </Box>
                <Card.Details className="text-gray-900">
                  <service.Icon className="absolute right-3 top-1/2 w-[55px] min-w-[55px] translate-y-[-20%] rounded-full border border-white bg-sky-100 p-4" />
                  <Typography className="max-w-[175px] self-center p-2 capitalize ">
                    {service.title}
                  </Typography>
                </Card.Details>
              </Card>
            ))}
          </Flex>
        </Section>
        <Section className="min-h-screen">
          <Typography>Supplies by region</Typography>
        </Section>
      </Flex>
    </Layout>
  );
};

export default Home;
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=10');
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {}
};
