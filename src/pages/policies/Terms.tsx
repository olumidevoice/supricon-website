import Connect from "../home/Connect";
import Faqs from "../home/Faqs";
import CustomHero from "../../components/common/CustomHero";

const Terms = () => {
    return (
        <div>
            <CustomHero
                title={
                    <>
                        OUR TERMS <br /> AND CONDITIONS{" "}
                    </>
                }
                desc={<div className="max-w-[50rem] mx-auto"></div>}
            />
            <div className="my-[3rem]">
                <main className="max-w-4xl mx-auto p-6">
                    <article className="">
                        <div className="p-6 space-y-6">
                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    Introduction
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    These terms of use govern your use of this
                                    Service and form an agreement between you
                                    (the User) and the Company (Supricon
                                    Limited). By accepting the Terms — either by
                                    clicking a box or by doing any act
                                    indicating acceptance — you agree that the
                                    Terms form part of the agreement between you
                                    and Supricon Limited.
                                </p>
                                <p className="text-sm leading-relaxed text-gray-800 mt-2">
                                    If you do not agree with all of these Terms
                                    and Conditions, you are expressly prohibited
                                    from using our products and must discontinue
                                    use immediately.
                                </p>
                                <p className="text-sm leading-relaxed text-gray-800 mt-2">
                                    These terms set out the rights and
                                    obligations of all Users regarding use of
                                    the Service. By accessing or using this
                                    service, you agree to be bound by these
                                    Terms and Conditions. Supricon Limited
                                    reserves the right to change the terms from
                                    time to time. If such changes are material,
                                    Supricon Limited will inform registered
                                    customers by email or other means the
                                    Company considers appropriate. You should
                                    periodically review these terms to keep
                                    abreast of changes — continued use after
                                    changes constitutes acceptance.
                                </p>
                                <p className="text-sm leading-relaxed text-gray-800 mt-2">
                                    The prevailing terms shall always be those
                                    available on our website,{" "}
                                    <a
                                        href="https://www.supricon.com"
                                        className="text-blue-600 underline"
                                    >
                                        www.supricon.com
                                    </a>
                                    .
                                </p>
                                <p className="text-sm leading-relaxed text-gray-800 mt-2">
                                    You accept to comply with the Company
                                    Privacy Policy before using our Service. The
                                    Privacy Policy explains how we collect, use
                                    and disclose your personal information when
                                    you use the Website or application.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    User Accounts
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    Users must provide accurate, complete and
                                    verifiable information. Failure to do so may
                                    result in immediate termination of your
                                    account.
                                </p>
                                <p className="text-sm leading-relaxed text-gray-800 mt-2">
                                    You are responsible for safeguarding your
                                    password and must not disclose it to a third
                                    party. If you suspect unauthorized use of
                                    your account, notify the Company immediately
                                    so the Company can take prompt action.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    User Representations
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    Users warrant that their chosen username is
                                    not offensive, vulgar, or unlawful.
                                    Usernames must not violate existing
                                    trademarks or the rights of any third party.
                                    All registration information you provide
                                    must be true, accurate, current and complete
                                    — you should update it when necessary.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    Prohibitions on Use of Our Service
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    The following activities are strictly
                                    prohibited:
                                </p>
                                <ul className="list-disc list-inside mt-2 text-sm text-gray-800 space-y-1">
                                    <li>
                                        Using the Service to promote unlawful or
                                        illegal activities.
                                    </li>
                                    <li>Violating another person's privacy.</li>
                                    <li>
                                        Infringing any proprietary rights
                                        (patent, trademark, trade secret,
                                        copyright).
                                    </li>
                                    <li>
                                        Entering false information while using
                                        the Service.
                                    </li>
                                    <li>
                                        Impersonating any person or entity,
                                        including Company employees or
                                        representatives.
                                    </li>
                                    <li>
                                        Attempting to damage or gain
                                        unauthorized access to data or systems.
                                    </li>
                                    <li>
                                        Using the Service in a manner
                                        inconsistent with applicable laws or
                                        regulations.
                                    </li>
                                </ul>
                                <p className="text-sm leading-relaxed text-gray-800 mt-3">
                                    The Company reserves the right (but not the
                                    obligation) to determine whether use of the
                                    Service is appropriate and to refuse any
                                    entry or process that violates these terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    User Eligibility
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    Our Services are primarily available to
                                    adults (18+). Minors should seek guidance
                                    from adults in order to access and use our
                                    Services. By placing an order through the
                                    service, you warrant you are legally capable
                                    of entering into binding contracts.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    Limitation of Liability
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    Notwithstanding any damages you might incur,
                                    the entire liability of the Company under
                                    these terms, and your exclusive remedy,
                                    shall be limited to the amount actually paid
                                    by you through the Service — or Two Hundred
                                    Thousand (NGN 200,000) if you haven’t paid
                                    anything through the Service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    Disclaimer
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    The Service is provided "as is" and "as
                                    available" with all faults and defects,
                                    without warranty of any kind. To the maximum
                                    extent permitted by law, the Company and its
                                    affiliates expressly disclaim all warranties
                                    — express, implied or statutory. The Company
                                    makes no representation that the Service
                                    will meet your requirements, be
                                    uninterrupted, meet any performance
                                    standard, or be error-free.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    Dispute Resolution
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    If you have any concern or dispute about the
                                    Service, you agree to first try to resolve
                                    the dispute informally by contacting the
                                    Company.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    Termination
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    We may terminate or suspend your account
                                    immediately and without prior notice for any
                                    reason, including (but not limited to) if
                                    you breach these Terms and Conditions. Upon
                                    termination, your right to use the Service
                                    ceases immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    Changes to These Terms and Conditions
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    The Company may modify or replace these
                                    Terms at any time. In the event of a
                                    material change, reasonable notice will be
                                    given before new terms take effect. What
                                    constitutes a material change is determined
                                    by the Company in its sole discretion.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-lg font-semibold mb-2">
                                    Contact Us
                                </h2>
                                <p className="text-sm leading-relaxed text-gray-800">
                                    If you have questions about these Terms and
                                    Conditions, contact us at:
                                </p>
                                <a
                                    href="mailto:info@supricon.com"
                                    className="text-sm block text-blue-600 underline mt-1"
                                >
                                    info@supricon.com
                                </a>
                            </section>
                        </div>

                        {/* <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-white border rounded-md text-sm hover:bg-gray-100"
              aria-label="Print Terms"
            >
              Print
            </button>

            <button
              onClick={handleAccept}
              disabled={accepted}
              className={`px-4 py-2 rounded-md text-sm text-white ${
                accepted ? "bg-gray-400 cursor-default" : "bg-blue-600 hover:bg-blue-700"
              }`}
              aria-pressed={accepted}
            >
              {accepted ? "Accepted" : "Accept"}
            </button>
          </div> */}
                    </article>
                </main>
            </div>
            <Connect />
            <Faqs />
        </div>
    );
};

export default Terms;
