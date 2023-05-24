import { useSetLang } from '../../App';
import PoetBox from '../../components/poetBox/PoetBox';
import { PageContainer } from './languagePageStyles';

function Language() {
  const { isMenuShown } = useSetLang();

  if (!isMenuShown) {
    return (
      <PageContainer>
          <PoetBox />
      </PageContainer>
    );
  } else {
    return null;
  }
}

export default Language;