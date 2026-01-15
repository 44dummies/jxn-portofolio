import Process from '@/components/Process';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'My Process | Jackson Ndeti',
    description: 'A proven 4-step framework for scaling your business with data-driven marketing.',
};

export default function ProcessPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <Process />
            </main>
            <Footer />
        </>
    );
}
