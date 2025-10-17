import CustomHero from "../../components/common/CustomHero";
import Connect from "../home/Connect";
import Faqs from "../home/Faqs";

const Policy = () => {
    return (
        <div>
            <CustomHero
                title={<>OUR PRIVACY POLICY</>}
                desc={<div className="max-w-[50rem] mx-auto"></div>}
            />
            <div className="my-[3rem]">
                <div className="max-w-4xl mx-auto p-6 text-gray-800">
                    <p className="mb-4">
                        Our Privacy Policy describes how we use your personal
                        information we collect from you. It explains the
                        following topics:
                    </p>

                    <ul className="list-disc pl-6 mb-6 space-y-1">
                        <li>What data we collect</li>
                        <li>Why we collect the data</li>
                        <li>When we collect the data</li>
                        <li>Grounds for processing your data</li>
                        <li>What we use your data for</li>
                        <li>Who we share your data with</li>
                        <li>Your rights as data subject</li>
                        <li>Remedies for data breach</li>
                        <li>What are Cookies</li>
                        <li>Why we use cookies</li>
                        <li>What types of Cookies we use</li>
                        <li>How to manage cookies</li>
                        <li>Privacy Policies of other websites</li>
                        <li>Changes to our privacy policy</li>
                        <li>How to contact us</li>
                        <li>How to contact the appropriate authority</li>
                    </ul>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            What data we collect
                        </h2>
                        <p>
                            We collect your personal information necessary to
                            access our products, which are majorly online. This
                            includes name, phone number, date of birth, address,
                            references, BVN, NIN, photographs, means of
                            identification, geo-location, mobile device data,
                            tracking and cookies data, etc. All these pieces of
                            information are necessary to access our products
                            online. You may be required to take a photograph of
                            yourself and upload it on our site for security,
                            quality control, and online verification. For our
                            e-KYC verification, we may collect your location and
                            other personal information with your permission.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Why we collect the data
                        </h2>
                        <p>
                            We collect your information to meet our compliance
                            obligations, to comply with laws and regulations,
                            and to share it with regulators when absolutely
                            necessary. This includes location data collected
                            from your mobile device, used to perform electronic
                            address verification KYC requirements. This
                            information will be stored securely and shared only
                            when required.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            When we collect the data
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                When you perform transactions such as deposits
                                or withdrawals
                            </li>
                            <li>
                                When you provide identity information such as ID
                                cards
                            </li>
                            <li>
                                When you contact customer service for assistance
                            </li>
                            <li>
                                When you complete BVN or facial authentication
                                procedures
                            </li>
                            <li>
                                When you use your credentials for online
                                transactions
                            </li>
                            <li>
                                When you visit our website via browser cookies
                            </li>
                            <li>
                                When we conduct due diligence or compliance
                                checks
                            </li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Grounds for processing your data
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                For the performance of a contract with the data
                                subject
                            </li>
                            <li>For compliance with legal obligations</li>
                            <li>
                                For tasks carried out in the public interest or
                                official authority
                            </li>
                            <li>
                                To protect the vital interests of the data
                                subject
                            </li>
                            <li>
                                For legitimate interests pursued by the data
                                controller or third parties
                            </li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            What we use your data for
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                To manage transactions and respond to your
                                requests
                            </li>
                            <li>
                                To deliver our products and services efficiently
                            </li>
                            <li>
                                To comply with laws and share data with
                                regulators if required
                            </li>
                            <li>
                                To send you important notifications or
                                announcements
                            </li>
                            <li>
                                To conduct facial recognition verification if
                                required
                            </li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Who we share your data with
                        </h2>
                        <p>
                            To ensure smooth service delivery, we may share your
                            data with technical partners and service providers.
                            Where necessary, we execute compliant data-sharing
                            agreements to protect your personal information.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Your rights as a data subject
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                Right to know why and how your data is processed
                            </li>
                            <li>Right to know who has access to your data</li>
                            <li>
                                Right to request correction or deletion of
                                personal information
                            </li>
                            <li>Right to withdraw consent at any time</li>
                            <li>
                                Right to restrict or object to processing of
                                personal information
                            </li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Remedies for data breach
                        </h2>
                        <p>
                            In case of a data breach, we will take prompt action
                            to remedy the situation. You may also report to the
                            Nigeria Data Protection Commission (NDPC) or pursue
                            other legal remedies.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            What are Cookies?
                        </h2>
                        <p>
                            Cookies are small text files stored on your computer
                            to collect standard internet log and visitor
                            behavior information. When you visit our websites,
                            we may collect data automatically through cookies or
                            similar technologies.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Why we use Cookies
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                To keep you logged in and maintain session
                                continuity
                            </li>
                            <li>
                                To monitor user behavior and improve content and
                                services
                            </li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Types of Cookies we use
                        </h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>
                                <strong>Functionality:</strong> To remember user
                                preferences
                            </li>
                            <li>
                                <strong>Advertising:</strong> To collect data
                                about content viewed, links followed, and
                                browsing behavior
                            </li>
                            <li>
                                <strong>Analytics:</strong> To understand site
                                usage and improve user experience
                            </li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            How to manage cookies
                        </h2>
                        <p>
                            You can manage cookies by adjusting your browser
                            settings to allow or block them. Access your
                            browser’s “Privacy and Security” section to
                            customize your preferences.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Privacy policies of other websites
                        </h2>
                        <p>
                            Our website may contain links to other websites.
                            This Privacy Policy applies only to our own website.
                            You should review the privacy policy of any external
                            site you visit.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            Changes to our privacy policy
                        </h2>
                        <p>
                            Our Privacy Policy is subject to periodic review.
                            Updates will be posted on our website.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
                            How to contact us
                        </h2>
                        <p>
                            For inquiries or data protection concerns, contact
                            our Data Protection Officer at{" "}
                            <a
                                href="mailto:dataprotectionandprivacy@supricon.com"
                                className="text-blue-600 underline"
                            >
                                dataprotectionandprivacy@supricon.com
                            </a>{" "}
                            or visit our office at A306 Alhaja Mogaji Mall,
                            Ogba, Lagos, Nigeria.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">
                            How to contact the appropriate authority
                        </h2>
                        <p>
                            If you believe your concern has not been properly
                            addressed, you may contact the Nigeria Data
                            Protection Commission at{" "}
                            <a
                                href="mailto:info@ndpc.gov.ng"
                                className="text-blue-600 underline"
                            >
                                info@ndpc.gov.ng
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
            <Connect />
            <Faqs />
        </div>
    );
};

export default Policy;
