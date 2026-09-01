import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function PrivacyNotice() {
    return (
        <div className='min-h-screen bg-white'>
            {/* Header */}
            <header className='border-b bg-white shadow-sm'>
                <div className='container mx-auto px-4 py-4'>
                    <div className='flex items-center justify-between'>
                        <Link href='/' className='flex items-center space-x-2 hover:opacity-80 transition-opacity'>
                            <img src='/homely-logo.png' alt='Homely Realtor Logo' className='w-8 h-8 object-contain' />
                            <span className='text-xl font-bold text-slate-800'>Property Investors NG</span>
                        </Link>
                        <Link href='/'>
                            <Button variant='outline' className='flex items-center space-x-2 bg-transparent'>
                                <ArrowLeft className='h-4 w-4' />
                                <span>Back to Home</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className='container mx-auto px-4 py-12 max-w-4xl'>
                {/* Page Header */}

                {/* Introduction */}
                <div className='mb-8'>
                    <p className='text-slate-700 leading-relaxed mb-4'>
                        We are the controller of your personal data. As data controllers we only collect your data in
                        line with section 24 of the Nigeria Data Protection Act. To this extent your data collected by
                        us will be processed in a fair, lawful and transparent manner. This privacy notice tells you
                        what to expect us to do with your personal information and other useful information including;
                    </p>
                    <div className='text-sm text-slate-600'>
                        <p className='font-medium mb-2'>This notice covers:</p>
                        <ul className='list-disc list-inside space-y-1 ml-4'>
                            <li>Contact details</li>
                            <li>What information we collect, use, and why</li>
                            <li>Lawful basis and data protection rights</li>
                            <li>Where we get personal information from</li>
                            <li>How long we keep information</li>
                            <li>Who we share information with</li>
                            <li>How to complain</li>
                        </ul>
                    </div>
                </div>

                {/* Contact Details */}
                <section className='mb-8'>
                    <h2 className='text-2xl font-bold text-slate-900 mb-4'>Contact Details</h2>
                    <div className='bg-slate-50 p-6 rounded-lg'>
                        <div className='space-y-3'>
                            <div className='flex items-start space-x-3'>
                                <MapPin className='h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5' />
                                <div>
                                    <p className='font-medium text-slate-800'>Address:</p>
                                    <p className='text-slate-700'>1, Ogo Oluwa Street, Ogba, Lagos Nigeria.</p>
                                    <p className='text-slate-700'>Lagos Nigeria.</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Phone className='h-5 w-5 text-slate-600 flex-shrink-0' />
                                <div>
                                    <p className='font-medium text-slate-800'>Telephone:</p>
                                    <div>
                                        <a
                                            href='tel:07412898253'
                                            className='text-blue-600 hover:text-blue-800 transition-colors'
                                        >
                                            234 (0)805 611 8087
                                        </a>
                                        <a
                                            href='tel:07412898253'
                                            className='text-blue-600 hover:text-blue-800 transition-colors'
                                        >
                                            234 (0)805 732 2373
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Mail className='h-5 w-5 text-slate-600 flex-shrink-0' />
                                <div>
                                    <p className='font-medium text-slate-800'>Email:</p>
                                    <a
                                        href='mailto:info@propertyinvestorsng.com'
                                        className='text-blue-600 hover:text-blue-800 transition-colors break-all'
                                    >
                                        info@propertyinvestorsng.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Information We Collect */}
                <section className='mb-8'>
                    <h2 className='text-2xl font-bold text-slate-900 mb-4'>
                        What Information We Collect, Use, and Why
                    </h2>
                    <p className='text-slate-700 mb-4'>
                        We collect or use the following personal information for information updates or marketing
                        purposes:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-slate-700 ml-4'>
                        <li>Names</li>
                        <li>Contact details</li>
                    </ul>
                </section>

                {/* Lawful Basis and Data Protection Rights */}
                <section className='mb-8'>
                    <h2 className='text-2xl font-bold text-slate-900 mb-4'>Lawful Basis and Data Protection Rights</h2>
                    <div className='space-y-6'>
                        <div>
                            <p className='text-slate-700 mb-4'>
                                Under UK data protection law, we must have a "lawful basis" for collecting and using
                                your personal information. There is a list of possible lawful bases in the UK GDPR. You
                                can find out more about lawful bases on the{" "}
                                <a
                                    href='https://ico.org.uk'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-blue-600 hover:text-blue-800 underline'
                                >
                                    ICO's website
                                </a>
                                .
                            </p>
                            <p className='text-slate-700 mb-6'>
                                Which lawful basis we rely on may affect your data protection rights which are set out
                                in brief below. You can find out more about your data protection rights and the
                                exemptions which may apply on the ICO's website:
                            </p>
                        </div>

                        <div className='space-y-4'>
                            <div>
                                <h3 className='font-semibold text-slate-900 mb-2'>Your right of access</h3>
                                <p className='text-slate-700'>
                                    You have the right to ask us for copies of your personal information. You can
                                    request other information such as details about where we get personal information
                                    from and who we share personal information with. There are some exemptions which
                                    means you may not receive all the information you ask for.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-slate-900 mb-2'>Your right to rectification</h3>
                                <p className='text-slate-700'>
                                    You have the right to ask us to correct or delete personal information you think is
                                    inaccurate or incomplete.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-slate-900 mb-2'>Your right to erasure</h3>
                                <p className='text-slate-700'>
                                    You have the right to ask us to delete your personal information.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-slate-900 mb-2'>
                                    Your right to restriction of processing
                                </h3>
                                <p className='text-slate-700'>
                                    You have the right to ask us to limit how we can use your personal information.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-slate-900 mb-2'>
                                    Your right to object to processing
                                </h3>
                                <p className='text-slate-700'>
                                    You have the right to object to the processing of your personal data.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-slate-900 mb-2'>Your right to data portability</h3>
                                <p className='text-slate-700'>
                                    You have the right to ask that we transfer the personal information you gave us to
                                    another organisation, or to you.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-slate-900 mb-2'>Your right to withdraw consent</h3>
                                <p className='text-slate-700'>
                                    When we use consent as our lawful basis you have the right to withdraw your consent
                                    at any time.
                                </p>
                            </div>
                        </div>

                        <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400'>
                            <h4 className='font-semibold text-slate-900 mb-2'>Making a Request</h4>
                            <p className='text-slate-700'>
                                If you make a request, we must respond to you without undue delay and in any event
                                within one month. To make a data protection rights request, please contact us using the
                                email at the top of this privacy notice.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Lawful Basis */}
                <section className='mb-8'>
                    <h2 className='text-2xl font-bold text-slate-900 mb-4'>Our Lawful Basis for Data Collection</h2>
                    <p className='text-slate-700 mb-4'>
                        Our lawful basis for collecting or using personal information for information updates or
                        marketing purposes are:
                    </p>
                    <div className='space-y-4'>
                        <div>
                            <h3 className='font-semibold text-slate-900 mb-2'>Consent</h3>
                            <p className='text-slate-700'>
                                We have permission from you after we gave you all the relevant information. All of your
                                data protection rights may apply, except the right to object. To be clear, you do have
                                the right to withdraw your consent at any time.
                            </p>
                        </div>
                        <div>
                            <h3 className='font-semibold text-slate-900 mb-2'>Contract</h3>
                            <p className='text-slate-700'>
                                We have to collect or use the information so we can enter into or carry out a contract
                                with you. All of your data protection rights may apply except the right to object.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Where We Get Information */}
                <section className='mb-8'>
                    <h2 className='text-2xl font-bold text-slate-900 mb-4'>Where We Get Personal Information From</h2>
                    <p className='text-slate-700'>Directly from you</p>
                </section>

                {/* How Long We Keep Information */}
                <section className='mb-8'>
                    <h2 className='text-2xl font-bold text-slate-900 mb-4'>How Long We Keep Information</h2>
                    <p className='text-slate-700'>
                        We will only keep it for as long as it's necessary for the purpose you collected it for. This is
                        as long as we have reasons to enter into a contract or send you offers as requested. However,
                        you may opt out at any time.
                    </p>
                </section>

                {/* Who We Share Information With */}
                <section className='mb-8'>
                    <h2 className='text-2xl font-bold text-slate-900 mb-4'>Who We Share Information With</h2>
                    <h3 className='font-semibold text-slate-900 mb-3'>Others we share personal information with:</h3>
                    <p className='text-slate-700'>
                        Professional or legal advisors after your consent to share may have been obtained for the
                        purpose of entering into a contract, otherwise we will not share your contact with anyone.
                    </p>
                </section>

                {/* How to Complain */}
                <section className='mb-8'>
                    <h2 className='text-2xl font-bold text-slate-900 mb-4'>How to Complain</h2>
                    <div className='space-y-4'>
                        <p className='text-slate-700'>
                            If you have any concerns about our use of your personal data, you can make a complaint to us
                            using the contact details at the top of this privacy notice.
                        </p>
                        <p className='text-slate-700'>
                            If you remain unhappy with how we've used your data after raising a complaint with us, you
                            can also complain to the ICO.
                        </p>

                        <div className='bg-slate-50 p-4 rounded-lg'>
                            <h3 className='font-semibold text-slate-900 mb-3'>ICO Contact Details:</h3>
                            <div className='space-y-2 text-slate-700'>
                                <p>
                                    <span>The NDPC’s address:</span> <br />
                                    The Chief Executive Officer,
                                    <br />
                                    Nigeria Data Protection Commission, <br />
                                    No. 12, Dr. Clement Isong Street, <br />
                                    Abuja. <br />
                                    Phone number: 234(0)916 061 5551 Email: info@ndpc.gov.ng Website:
                                    https://services.ndpc.gov.ng/breach/ Last updated 1st September 2026
                                </p>
                                <p>
                                    <span className='font-medium'>Phone number:</span>{" "}
                                    <a href='tel: 234(0)916 061 5551' className='text-blue-600 hover:text-blue-800'>
                                        234(0)916 061 5551
                                    </a>
                                </p>
                                <p>
                                    <span className='font-medium'>Email:</span>{" "}
                                    <a
                                        href='mailto:info@propertyinvestorsng.com'
                                        className='text-blue-600 hover:text-blue-800'
                                    >
                                        info@ndpc.gov.ng
                                    </a>
                                </p>

                                <p>
                                    <span className='font-medium'>Website:</span>{" "}
                                    <a
                                        href='https://services.ndpc.gov.ng/breach/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-600 hover:text-blue-800 underline'
                                    >
                                        https://services.ndpc.gov.ng/breach/
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Home Button */}
                <div className='text-center pt-8 border-t'>
                    <Link href='/'>
                        <Button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3'>
                            <ArrowLeft className='h-4 w-4 mr-2' />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className='bg-slate-100 border-t mt-16'>
                <div className='container mx-auto px-4 py-8'>
                    <div className='text-center'>
                        <div className='flex items-center justify-center space-x-2 mb-4'>
                            <img src='/homely-logo.png' alt='Homely Realtor Logo' className='w-6 h-6 object-contain' />
                            <span className='text-lg font-bold text-slate-800'>Property Investors NG</span>
                        </div>
                        <p className='text-slate-600 text-sm'>
                            &copy; 2024 Property Investors NG. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
