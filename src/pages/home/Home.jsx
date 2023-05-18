import { useSetLang } from '../../App';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import SideNav from '../../components/sideNav/SideNav';
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