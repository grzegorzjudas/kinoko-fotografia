import { Button, WelcomeBanner } from '../../components';

export function HomePage() {
    return (
        <>
            <WelcomeBanner />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}><Button variant="primary">Umów sesję</Button></div>
        </>
    );
}

export default HomePage;
