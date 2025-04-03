export default function Footer() {
    return (
        <footer className="bg-[var(--foreground)] text-[var(--text)] py-8 fontsize-8">
            <div className="container mx-auto text-right">
                <p className="text-lg">
                    &copy; {new Date().getFullYear()} LT Controls PLY LTD - All rights reserved.
                </p>
            </div>
        </footer>
    );
}