import { useSetLang } from '../../App';
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