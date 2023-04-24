import { useSetLang } from '../../App';

import RecipeBox from '../../components/recipeBox/RecipeBox';
import { PageContainer } from './cuisinePageStyles';

function Cuisine() {
    const { isMenuShown } = useSetLang();
  return (
        <PageContainer>
            <RecipeBox />
        </PageContainer>
  );
}

export default Cuisine;