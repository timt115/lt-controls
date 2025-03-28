export default function Projects() {
    return (
        <div className="min-h-screen  bg-[var--forground]; text-[var(--text)] font-sans">
            {/* Header */}

            {/* Main Content */}
            <main className="px-6 sm:px-12 py-12 bg-[var(--background)] text-bg-[var(--foreground)]">
                {/* Title Section */}
                <section className="mb-12 text-center bg-[var(--background)]">
                    <h1 className="text-4xl font-extrabold text-[var(--text)] mb-6">
                        Major Projects
                    </h1>
                    <p className="text-lg text-[var(--text)]">
                        Since 2018, LT has taken on a lot of challenges, starting from breakdown jobs and gradually taking on massive automation programming projects.
                    </p>
                </section>

                {/* Projects Section */}
                <section className="space-y-12 bg-[var(--background)]">
                    {/* JBS Foods Australia */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">JBS Foods Australia</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    JBS AUSTRALIA, CHILLERS AND MARSHALLING PROCESS
                                </h3>
                                <p className="text-[var(--text)]">
                                    LT Automation Controls engineered a very unique world’s first new automatic grading and sorting system for a leading global food company JBS beef Foods...
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Two-year project</p>
                            </div>
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    JBS AUSTRALIA, KILL FLOOR UPGRADE
                                </h3>
                                <p className="text-[var(--text)]">
                                    LT was approached to perform an upgrade of the JBS Kill Floor PLC program from SLC to an Allen Bradley Control Logix...
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Six months</p>
                            </div>
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    JBS AUSTRALIA, APV UPGRADE
                                </h3>
                                <p className="text-[var(--text)]">
                                    When JBS was looking to upgrade the APV PLC from Allen Bradley SLC to Allen Bradley Control Logix, LT was contacted for the job...
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Three months</p>
                            </div>
                        </div>
                    </div>

                    {/* Australian Country Choice */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">Australian Country Choice</h2>
                        <div className="flex flex-nowrap overflow-x-scroll gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow min-w-[500px]">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    AUSTRALIAN COUNTRY CHOICE, HOT MEAT CHILLER UPGRADE
                                </h3>
                                <p className="text-[var(--text)]">
                                    LT was engaged to perform a complete reprogram and PLC upgrade for the Hot Meat Chillers at Australian Country Choice (ACC)...
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Six months</p>
                            </div>
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow min-w-[500px]">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    AUSTRALIAN COUNTRY CHOICE, BONING ROOM UPGRADE
                                </h3>
                                <p className="text-[var(--text)]">
                                    LT was engaged by CEQ to aid in the programming of the ACC Boning Room Upgrade, and as part of this were required to reprogram many areas...
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Six months</p>
                            </div>
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow min-w-[400px]">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    AUSTRALIAN COUNTRY CHOICE, KILL FLOOR UPGRADE
                                </h3>
                                <p className="text-[var(--text)]">
                                    LT was contracted to assist in raising the Kill Floor Chain by 1m with Wiley’s and CEQ to allow for bigger beef to be processed...
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Six months</p>
                            </div>
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow min-w-[400px]">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    AUSTRALIAN COUNTRY CHOICE, LIDDER UPGRADE
                                </h3>
                                <p className="text-[var(--text)]">
                                LT was required to reprogram the entire conveyor system at the backend of the boning room to the Lidder feed. This projected required the control of over 60 conveyors and had 3 merge points. As well as this, the system contained 4 Lector SICK barcode scanners to decide where the carton needed to be sent. Startek also created a FactoryTalk ME HMI and Ignition SCADA page to control the system.
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Three months</p>
                            </div>
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow min-w-[400px]">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    AUSTRALIAN COUNTRY CHOICE, KILL FLOOR SAFETY
                                </h3>
                                <p className="text-[var(--text)]">
                                Startek was required to reprogram the entire conveyor system at the backend of the boning room to the Lidder feed. This projected required the control of over 60 conveyors and had 3 merge points. As well as this, the system contained 4 Lector SICK barcode scanners to decide where the carton needed to be sent. Startek also created a FactoryTalk ME HMI and Ignition SCADA page to control the system.
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Three months</p>
                            </div>
                            
                        </div>
                    </div>

                    {/* Real Pet Food Co */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">Real Pet Food Co</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    REAL PET FOOD CO, DOG ROLL LINE UPGRADE
                                </h3>
                                <p className="text-[var(--text)]">
                                    LT was recently tasked with reprogramming the whole Dog Roll Line at Real Pet Food which had previously suffered from several issues...
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Three months</p>
                            </div>
                            <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                    REAL PET FOOD CO, CHUNKERS LINE UPGRADE
                                </h3>
                                <p className="text-[var(--text)]">
                                    The Chunkers Line was originally running with Omron PLC and Exor HMI. The line has 2 existing cookers and a new cooker was installed...
                                </p>
                                <p className="italic text-[var(--text)] mt-2">Duration: Twelve months</p>
                            </div>
                        </div>
                    </div>

                    {/* Norco Milk */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">Norco MILK</h2>
                        <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                NORCO MILK, FILLER 2 MILK RECLAIM UPGRADE & CIP KITCHEN
                            </h3>
                            <p className="text-[var(--text)]">
                                At Norco Milk Labrador, LT was responsible for the Filler 2 Milk Reclaim Upgrade. This consisted of implementing a new system to recover lost milk...
                            </p>
                            <p className="italic text-[var(--text)] mt-2">Duration: Six months</p>
                        </div>
                    </div>

                    {/* Grove Juice */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">Grove Juice</h2>
                        <div className="p-6 bg-[var(--foreground)] shadow-md rounded-lg hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">
                                GROVE JUICE, PRODUCTION AUTOMATION
                            </h3>
                            <p className="text-[var(--text)]">
                                LT was approached to provide automation for the entire production line at Grove Juice Warwick, up until the bottling process...
                            </p>
                            <p className="italic text-[var(--text)] mt-2">Duration: Six months</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
        </div>
    );
}