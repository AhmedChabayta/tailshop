import Image, { StaticImageData } from 'next/image';
import AvatarIcon from './AvatarIcon';

const Avatar = ({
  src,
  className,
  alt,
}: {
  src?: StaticImageData;
  className?: string;
  alt?: string;
}) => {
  return (
    <>
      {src ? (
        <Image className={className} src={src} alt="" />
      ) : (
        <AvatarIcon className={className} />
      )}
    </>
  );
};
export default Avatar;
