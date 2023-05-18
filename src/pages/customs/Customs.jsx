import { useSetLang } from '../../App';
import { PageContainer } from './customsPageStyles';

function Customs() {
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

export default Customs;