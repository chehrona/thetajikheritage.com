import { useSetLang } from '../../App';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import SideNav from '../../components/sideNav/SideNav';
import { PageContainer } from './cuisinePageStyles';

function Cuisine() {
    const { isMenuShown } = useSetLang();
  return (
        <PageContainer>
            <Header />
            <SideNav />
            {isMenuShown && <Menu />}
            Cuisine
        </PageContainer>
  );
}

export default Cuisine;