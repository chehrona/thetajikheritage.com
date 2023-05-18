import { useSetLang } from '../../App';
import RecipeBox from '../../components/recipeBox/RecipeBox';
import { PageContainer } from './cuisinePageStyles';

function Cuisine() {
    const { isMenuShown } = useSetLang();

    if (!isMenuShown) {
        return (
            <PageContainer>
                <RecipeBox />
            </PageContainer>
        );
    } else {
        return null;
    }
}

export default Cuisine;