import { useSetLang } from '../../App';
import { PageContainer } from './homePageStyles';

function Home() {
  const { isMenuShown } = useSetLang();
  if (!isMenuShown) {
    return (
      <PageContainer>
          Home
      </PageContainer>
    );
  } else {
    return null;
  }
}

export default Home;