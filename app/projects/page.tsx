import Header from "../components/header";

export default function Projects() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
            {/* Header */}

            {/* Main Content */}
            <main className="px-6 sm:px-12 py-12">
                {/* Title Section */}
                <section className="mb-12">
                    <h1 className="text-4xl font-extrabold text-center mb-6">
                        Major Projects
                    </h1>
                    <p className="text-lg text-center">
                        Since 2018, LT has taken on a lot of challenges, starting from breakdown jobs and gradually taking on massive automation programming projects.
                    </p>
                </section>

                {/* Projects Section */}
                <section className="space-y-12">
                    {/* JBS Foods Australia */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">JBS Foods Australia</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-semibold">JBS AUSTRALIA, CHILLERS AND MARSHALLING PROCESS
                                </h3>
                                <p>
                                LT Automation Controls engineered a very unique world’s first new automatic grading and sorting system for a leading global food company JBS beef Foods with operations in the United States, Australia, Canada, Europe, Mexico, New Zealand and the UK. This included automating the process of graded sides from the Kill Floor to the Boning Room on new conveyors, while tracking and storing carcass information. The number of sides and Chiller Assessment (CA) grade were settable for each of the four boning chains. A control system interfaced with a Microsoft MySQL database was used. The positions of carcasses were tracked using relative and absolute encoders, and numerous sensors and RFID tags were used for tracking and storing data. The areas included the Hot Beef Passage, Cold Beef Passage, Hot and Cold Beef Passage, Marshalling Incline, Marshalling Distribution, Marshalling Room 1-3, Marshalling Outfeed and Boning Room Infeed. Deliverables included PLC code, SCADA, alarming, paperless reporting and OEE.
                                </p>
                                <p className="italic">Duration: Two-year project</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">JBS AUSTRALIA, KILL FLOOR UPGRADE
                                </h3>
                                <p>
                                LT was approached to perform an upgrade of the JBS Kill Floor PLC program from SLC to an Allen Bradley Control Logix. This program included converting 15 IO racks consisting of DHRIO and Device Net as well as the Kill Floor Synchronisation and merged them into one project. This includes remapping all the IO and removing all aliases from the program. As well as this, the Experion SCADA System needed to have updated tag addresses for the new PLC. LT also remapped all the devices and removed 2 Device Net racks and converted these to Ethernet Point IO. Finally, as well as supervising the electrical and IO Testing, LT implemented a fibre ring for network redundancy in the case of any nodes dropping out.
                                </p>
                                <p className="italic">Duration: Six months</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">JBS AUSTRALIA, APV UPGRADE
                                </h3>
                                <p>
                                 When JBS was looking to upgrade the APV PLC from Allen Bradley SLC to Allen Bradley Control Logix, LT was contacted for the job. This involved merging the existing PLC code into the new Kill Floor PLC and commissioning all the IO as it was wired into the new PLC. As well as this, a Schneider Proface Panel needed to be updated with the new tag names.
                                </p>
                                <p className="italic">Duration: Three months</p>
                            </div>
                        </div>
                    </div>

                    {/* Australian Country Choice */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Australian Country Choice</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-semibold">AUSTRALIAN COUNTRY CHOICE, HOT MEAT CHILLER UPGRADE
                                </h3>
                                <p>
                                    LT was engaged to perform a complete reprogram and PLC upgrade for the Hot Meat Chillers at Australian Country Choice (ACC). This project consisted of 10 chillers, with each chiller being able to choose from 10 different profiles to ensure optimal cooling of the product. To complete this project all the existing Omron PLC’s needed to be removed and replaced with Allen Bradley PLC’s. Furthermore, both HMI’s and SCADA interfaces needed to be designed and implemented to ensure precise control of the system. These control systems needed security measures to ensure only those authorised could control the operation. In conjunction with this, LT reprogrammed the Ammonia detection and implemented SMS alarms to alert supervisors when these alarms were triggered. The commissioning of this project was split into two stages with Chiller’s 1 to 4 being completed over one weekend, and the remaining Chiller’s 5 to 10 being commissioned in a following weekend without complications.

                                </p>
                                <p className="italic">Duration: Six months</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">AUSTRALIAN COUNTRY CHOICE, BONING ROOM UPGRADE
                                </h3>
                                <p>
                                    LT was engaged by CEQ to aid in the programming of the ACC Boning Room Upgrade, and as part of this were required to reprogram many areas. These areas included the Primal, Waste Bone, Quartering Area, North and South Boning chains as well as the Edible Bone Chain. Furthermore, LT also upgraded all the conveyors in the boning room.

                                </p>
                                <p className="italic">Duration: Six months</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">AUSTRALIAN COUNTRY CHOICE, KILL FLOOR UPGRADE</h3>
                                <p>
                                    LT was contracted to assist in raising the Kill Floor Chain by 1m with Wiley’s and CEQ to allow for bigger beef to be processed. This included adding a new head removal hoist and reprogramming it to fit with the new height of the chain. As well as this, 4 new stimulation points were added in and the hide puller needed to be reprogrammed with a new stimulation arm. As well as this, the hock restrainer was commissioned by LT and the Elevator was also reprogrammed and commissioned. The existing Panelview HMI was removed and replaced with a Beijer HMI. LT was also responsible for the master slave synchronisation for the main chain on the Kill Floor. During the commissioning phase and for a period of time following, LT offered 24 hour coverage to ensure operation went as planned.
                                </p>
                                <p className="italic">Duration: Six months</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">AUSTRALIAN COUNTRY CHOICE, LIDDER UPGRADE
                                </h3>
                                <p>
                                    LT was required to reprogram the entire conveyor system at the backend of the boning room to the Lidder feed. This projected required the control of over 60 conveyors and had 3 merge points. As well as this, the system contained 4 Lector SICK barcode scanners to decide where the carton needed to be sent. LT also created a FactoryTalk ME HMI and Ignition SCADA page to control the system.
                                </p>
                                <p className="italic">Duration: Six months</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">AUSTRALIAN COUNTRY CHOICE, KILL FLOOR SAFETY
                                </h3>
                                <p>
                                    LT was approached to perform an upgrade on the Kill Floor Safety System at Australian Country Choice. This required the removal of all the IFM ASI Safety equipment and replacing it with Allen Bradley Guard Logix IO. In conjunction with this the original safety system was completely reprogrammed, where the original system was not categorized, the new system implemented was Category 3. This included adding a new safety routine with two channels for to ensure the system remains active in the case of a failure. This utilized the pre-defined safety blocks for the safety devices used.
                                </p>
                                <p className="italic">Duration: Six months</p>
                            </div>

                        </div>
                    </div>

                    {/* Real Pet Food Co */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Real Pet Food Co</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-semibold">REAL PET FOOD CO, DOG ROLL LINE UPGRADE
                                </h3>
                                <p>
                                LT was recently tasked with reprogramming the whole Dog Roll Line at Real Pet Food which had previously suffered from several issues. LT was informed that numerous programmers had been consulted for the project, but none had been able to solve the problem. This system used 3 fillers and 3 coolers, and the synchronisation of conveyor speeds had caused many issues with product falling to the floor. To rectify this LT spent time to investigate how the product ran and developed a system for each product time to ensure optimal conveyor speeds. As well as this a switching routine was developed to use 1 filler to feed 2 coolers at double the rate in the case of a filler fail.
                                </p>
                                <p className="italic">Duration: Three months</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">REAL PET FOOD CO, CHUNKERS LINE UPGRADE
                                </h3>
                                <p>
                                The Chunkers Line was originally running with Omron PLC and Exor HMI. The line has 2 existing cookers and a new cooker was installed to increase the production compacity. LT programmed the operation of the new cooker and at the same time reprogrammed the whole Chunkers Line with Allen Bradley PLC and VSD from the mixing area, cooking area, conveyor system and packing area. And converted the HMI controls to Ignition SCADA. 
                                </p>
                                <p className="italic">Duration: Twelve months</p>
                            </div>
                        </div>
                    </div>

                    {/* NORCO MILK */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Norco MILK</h2>
                        <div>
                            <h3 className="text-2xl font-semibold">NORCO MILK, FILLER 2 MILK RECLAIM UPGRADE & CIP KITCHEN
                            </h3>
                            <p>
                            At Norco Milk Labrador, LT was responsible for the Filler 2 Milk Reclaim Upgrade. This consisted of implementing a new system to recover lost milk as well as a new CIP program. As well as this, a new CIP Kitchen was to be added which involved reprogramming the CIP routine with new Tanks and lines. This CIP program was to be integrated into the current Tanker Bay CIP program to ensure efficient cleaning and no waste of CIP. In conjunction with the CIP program, LT also provided new Citect Pages to control this system and upgraded the existing Citect System from version 7.2 to 8.1.</p>
                            <p className="italic">Duration: Six months</p>
                        </div>
                    </div>

                    {/* Grove Juice */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Grove Juice</h2>
                        <div>
                            <h3 className="text-2xl font-semibold">GROVE JUICE, PRODUCTION AUTOMATION
                            </h3>
                            <p>
                            LT was approached to provide automation for the entire production line at Grove Juice Warwick, up until the bottling process. This was split into several programs, including Juice Extraction, Pasteurization, Extraction to Tanks, Batching between Tanks, and finally CIP routines. The largest of these programs being the Pasteurization which consisted of 72 different paths for sending juice and required the control of over 100 valves. To ensure no contamination of tanks these programs required a series of interlocks to ensure that no program operated a valve that was being used elsewhere. Furthermore, in the event of a physical valve failure, a shutdown sequence was programmed to ensure no contamination. As well as the PLC programming, LT was required to create SCADA pages with Ignition to allow the operators full control over the system, and setup trending to monitor the process and make improvements.
                            </p>
                            <p className="italic">Duration: Six months</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full bg-[var(--background)] py-6 text-center text-[var(--muted)]">
                <p className="text-sm">&copy; 2025 LT-CONTROLS Pty Ltd - All Rights Reserved.</p>
            </footer>
        </div>
    );
}