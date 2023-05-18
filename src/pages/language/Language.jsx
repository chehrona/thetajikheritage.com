import { useSetLang } from '../../App';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import SideNav from '../../components/sideNav/SideNav';
import { PageContainer } from './languagePageStyles';

function Language() {
  const { isMenuShown } = useSetLang();

  if (!isMenuShown) {
    return (
      <PageContainer>
          Language
      </PageContainer>
    );
  } else {
    return null;
  }
}

export default Language;