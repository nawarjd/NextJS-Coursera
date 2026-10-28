import Image from 'next/image';
import loader from '@assets/loader.gif';

const LoadingPage = () => {
  return (
    <div
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}
      role="status"
      aria-label="Loading"
    >
      <Image src={loader} loading="eager" width={50} height={50} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
