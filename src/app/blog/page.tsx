import Blog from '@/components/Blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Blog | Jackson Ndeti',
    description: 'Growth marketing insights and strategies to help scale your business.',
};

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <Blog />
            </main>
            <Footer />
        </>
    );
}
