import { Accordion, List } from '../../components';

export function PrivacyPolicyPage() {
    return (
        <>
            <h1>Polityka prywatności</h1>
            <List numbered>
                <List.Item title="Postanowienia ogólne">
                    <p>Niniejsza Polityka prywatności określa sposób zbierania, przetwarzania i przechowywania danych osobowych niezbędnych do świadczenia usług fotograficznych oferowanych przez Agatę Grzybowską-Judas, właścicielkę strony kinoko.fotografia (dalej: Serwis).</p>
                    <p>Administratorem danych osobowych Użytkowników Serwisu jest Agata Grzybowska-Judas, prowadząca działalność gospodarczą pod adresem [tu wpisz adres], NIP: [tu wpisz NIP], e-mail: [tu wpisz e-mail kontaktowy] (dalej: Administrator).</p>
                    <p>Dane osobowe są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).</p>
                    <p>Administrator przetwarza dane:</p>
                    <List>
                        <List.Item>zgodnie z prawem,</List.Item>
                        <List.Item>w określonych i prawnie uzasadnionych celach,</List.Item>
                        <List.Item>w sposób rzetelny i przejrzysty,</List.Item>
                        <List.Item>adekwatny do celów przetwarzania,</List.Item>
                        <List.Item>nie dłużej, niż jest to konieczne do realizacji celu.</List.Item>
                    </List>
                </List.Item>
                <List.Item title="Cele i podstawy prawne przetwarzania danych">
                    aaa
                </List.Item>
            </List>
            <Accordion>
                <Accordion.Item title="Jak długo trwa sesja?" defaultOpen>
                    Ważne jest, aby nie spieszyć się i w pełni cieszyć się tym czasem – zależy mi na tym, byś czuł/a się komfortowo, a zdjęcia były pełne emocji.
                </Accordion.Item>
                <Accordion.Item title="Czy oferujesz sesje w plenerze?">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellendus.
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default PrivacyPolicyPage;
