import React from 'react';
import { mainElectronics } from '@src/assets/products/consumer_electronics';
import { mainHomeImage } from '@src/assets/products/home_and_decor';
import { Flex, Section } from '@src/components';
import { CardDataInterface } from '@src/store/dataStoreTypes';
import {
  About,
  Deals,
  Hero,
  Layout,
  Recommended,
  RequestForm,
  Row,
  Services,
  Subscribe,
  Suppliers,
} from 'components';
import { useStore } from '@src/store/useDataStore';

type DataProps = {
  products: CardDataInterface[];
  categories: string[];
};

const Home = ({ products, categories }: DataProps) => {
  const { setProducts, setCategories } = useStore();
  React.useEffect(() => {
    setProducts(products);
    setCategories(categories);
  }, [categories, products, setCategories, setProducts]);
  return (
    <Layout>
      <Flex className="w-full flex-col items-center justify-center">
        <Section className="mx-auto w-full">
          <Hero />
          <Deals data={products} />
        </Section>
        <Section className="mx-auto">
          <Flex className="flex-col space-y-4">
            <Row
              className="w-full overflow-hidden rounded-md bg-white"
              list={products.slice(0, 8)}
              main={mainHomeImage}
            />
            <Row
              className="w-full overflow-hidden rounded-md bg-white"
              list={products.slice(0, 8)}
              main={mainElectronics}
            />
          </Flex>
        </Section>
        <RequestForm />
        <Section>
          <Recommended cardData={products} />
        </Section>
        <Section>
          <Services />
        </Section>
        <Section>
          <Suppliers />
        </Section>
        <Section className="relative">
          <Subscribe />
          <About />
        </Section>
      </Flex>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const [products, categories] = await Promise.all([
    fetch('https://fakestoreapi.com/products?limit=10').then((res) =>
      res.json()
    ),
    fetch('https://fakestoreapi.com/products/categories').then((res) =>
      res.json()
    ),
  ]);

  return {
    props: {
      products,
      categories,
    },
    revalidate: 60,
  };
}
