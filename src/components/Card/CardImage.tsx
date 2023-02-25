import Image, { StaticImageData } from 'next/image';

const CardImage = ({
  src,
  fill,
  alt,
  width,
  height,
  className,
}: {
  src: StaticImageData | string;
  fill?: boolean;
  alt?: string;
  className?: string;
  width: `${number}` | number;
  height: `${number}` | number;
}) => {
  return (
    <Image
      className={className}
      width={width}
      height={height}
      fill={fill}
      src={src}
      alt={`${alt}`}
    />
  );
};
export default CardImage;
