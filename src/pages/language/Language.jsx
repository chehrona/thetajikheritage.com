import { useSetLang } from '../../App';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import SideNav from '../../components/sideNav/SideNav';
import { PageContainer } from './languagePageStyles';

function Language() {
    const { isMenuShown } = useSetLang();
  return (
        <PageContainer>
            <Header />
            <SideNav />
            {isMenuShown && <Menu />}
        </PageContainer>
  );
}

export default Language;