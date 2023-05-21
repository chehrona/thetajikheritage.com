import { useSetLang } from '../../App';
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