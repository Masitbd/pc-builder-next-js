import { useRouter } from 'next/router';
import { Button, Space } from 'antd';

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button type='primary' danger onClick={handleGoBack}>Go Back</Button>
  );
};

export default BackButton;
