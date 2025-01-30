import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="container mx-auto p-4">
            <header className="bg-gray-800 text-white p-4">Header</header>
            <main>{children}</main>
            <footer className="bg-gray-800 text-white p-4">Footer</footer>
        </div>
    );
};

export default MainLayout;