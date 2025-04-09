import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Me2You Treasures</title>
                <meta name="description" content="Welcome to Me2You Treasures, your online marketplace for unique items." />
            </Head>
            <Header />
            <main>
                <h1>Welcome to Me2You Treasures</h1>
                <p>Your online marketplace for unique items.</p>
                <p>Browse our collection and find something special!</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;