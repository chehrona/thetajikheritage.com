import { useSetLang } from '../../App';
import { PageContainer } from './artsPageStyles';

function Arts() {
  const { isMenuShown } = useSetLang();

  if (!isMenuShown) {
    return (
      <PageContainer>
          Arts
      </PageContainer>
    );
  } else {
    return null;
  }
}

export default Arts;