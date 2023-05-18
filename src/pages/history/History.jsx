import { useSetLang } from '../../App';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import SideNav from '../../components/sideNav/SideNav';
import { PageContainer } from './historyPageStyles';

function History() {
  const { isMenuShown } = useSetLang();

  if (!isMenuShown) {
    return (
      <PageContainer>
          History
      </PageContainer>
    );
  } else {
    return null;
  }
}

export default History;