export default function Footer() {
    return (
        <footer className="bg-[var(--foreground)] text-[var(--text)] py-8">
            <div className="container mx-auto text-center">
                <p className="text-lg">
                    &copy; {new Date().getFullYear()} LT Controls. All rights reserved.
                </p>
                <p className="text-sm mt-2">
                    Designed and Developed by LT Controls Team
                </p>
            </div>
        </footer>
    );
}