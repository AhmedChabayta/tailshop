import Box from '../Box/Box';

const CardDetails = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <Box className={className}>{children}</Box>;
};
export default CardDetails;
