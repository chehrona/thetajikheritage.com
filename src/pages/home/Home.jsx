import HomeNav from '../../components/homeNav/HomeNav';
import ImageBall from '../../components/imageBall/ImageBall';
import { balls } from './helper';
import { PageContainer, HomeImage } from './homePageStyles';

function Home() {
    return (
        <PageContainer>
            <HomeNav />
            {balls.outer.map((ball, i) => {
                return <ImageBall key={i} ball={ball} />
            })}
            {balls.inner.map((ball, i) => {
                return (
                    <ImageBall key={i} ball={ball} />
                );
            })}
        </PageContainer>
    );
}

export default Home;