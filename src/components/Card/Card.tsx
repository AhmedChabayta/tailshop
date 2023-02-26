import Box from '../Box/Box';
import CardImage from './CardImage';
import CardDetails from './CardDetails';

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <Box className={className}>{children}</Box>;
export default Card;
Card.Details = CardDetails;
Card.Image = CardImage;
