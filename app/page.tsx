import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function RealtorLanding() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
            {/* Header */}
            <header className='border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm'>
                <div className='container mx-auto px-4 py-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-2'>
                            <img
                                src='/homely-logo.png'
                                alt='Homely Realtor Logo'
                                className='w-10 h-10 object-contain sm:w-12 sm:h-12 md:w-20 md:h-20'
                            />
                            <span className='text-lg sm:text-xl md:text-2xl font-bold text-slate-800'>
                                Property Investors NG
                            </span>
                        </div>

                        <nav className='hidden md:flex items-center space-x-6'>
                            <a
                                href='#services'
                                className='text-slate-600 hover:text-blue-600 transition-colors font-medium'
                            >
                                Services
                            </a>
                            <a
                                href='#contact'
                                className='text-slate-600 hover:text-blue-600 transition-colors font-medium'
                            >
                                Contact
                            </a>
                            <Button className='bg-blue-600 hover:bg-blue-700 text-white'>Call Now</Button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Section */}
            <main className='container mx-auto px-4'>
                {/* Hero Section */}
                <section className='relative bg-gradient-to-r from-blue-900 via-slate-800 to-teal-900 text-white py-20 mb-16 -mx-4 overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-900/60 to-teal-900/60'></div>
                    <div className='relative container mx-auto px-4 text-center'>
                        <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
                            Property Investing,
                            <br />
                            Open to Everyone
                            {/* <span className='block text-4xl md:text-6xl text-blue-200'>Awaits You</span> */}
                        </h1>
                        <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed'>
                            Join thousands of investors earning an income <br /> from Nigeria's property market.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <Button
                                asChild
                                size='lg'
                                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50'
                            >
                                <a href='#contact'>Start Here</a>
                            </Button>
                        </div>
                        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                            <div className='bg-white/10 backdrop-blur rounded-lg p-4'>
                                <div className='text-3xl font-bold mb-2 text-blue-200'>500+</div>
                                <div className='text-blue-100'>Properties Sold</div>
                            </div>
                            <div className='bg-white/10 backdrop-blur rounded-lg p-4'>
                                <div className='text-3xl font-bold mb-2 text-blue-200'>15+</div>
                                <div className='text-blue-100'>Years Experience</div>
                            </div>
                            <div className='bg-white/10 backdrop-blur rounded-lg p-4'>
                                <div className='text-3xl font-bold mb-2 text-blue-200'>98%</div>
                                <div className='text-blue-100'>Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Three Scenarios */}
                <section id='services' className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>Our Services</h2>
                        <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
                            Comprehensive real estate solutions tailored to your unique needs and investment goals.
                        </p>
                    </div>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {/* Buying */}
                        <Card className='border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur'>
                            <CardHeader className='text-center'>
                                <div className='mx-auto mb-4 p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-fit'>
                                    <Key className='h-8 w-8 text-blue-600' />
                                </div>
                                <CardTitle className='text-2xl text-slate-800'>Buying</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='text-center text-lg text-slate-600'>
                                    It's yours to flip or retain. Get exclusive access to the best deals in the market
                                    today.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        {/* Renting
                        <Card className='border-2 border-teal-200 hover:border-teal-400 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur'>
                            <CardHeader className='text-center'>
                                <div className='mx-auto mb-4 p-3 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full w-fit'>
                                    <Home className='h-8 w-8 text-teal-600' />
                                </div>
                                <CardTitle className='text-2xl text-slate-800'>Renting</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='text-center text-lg text-slate-600'>
                                    R2R, R2SA, lease option. Flexible rental solutions tailored to your investment
                                    strategy.
                                </CardDescription>
                            </CardContent>
                        </Card> */}

                        {/* Selling */}
                        {/* <Card className='border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur'>
                            <CardHeader className='text-center'>
                                <div className='mx-auto mb-4 p-3 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full w-fit'>
                                    <Layers className='h-8 w-8 text-cyan-600' />
                                </div>
                                <CardTitle className='text-2xl text-slate-800'>Selling</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className='text-center text-lg text-slate-600'>
                                    Move with a good offer. Cash back without delay. Quick closings guaranteed.
                                </CardDescription>
                            </CardContent>
                        </Card> */}
                    </div>
                </section>
                {/* Contact Form */}
                <ContactForm />
                {/* <section id='contact' className='max-w-2xl mx-auto'>
                    <div className='text-center mb-8'>
                        <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4'>
                            Get Started Today
                        </h2>
                        <p className='text-lg text-slate-700'>
                            Ready to make your next move? Contact us and let's discuss your real estate goals.
                        </p>
                    </div>

                    <Card className='border-2 border-blue-200 shadow-xl bg-white/90 backdrop-blur'>
                        <CardHeader className='bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg'>
                            <CardTitle className='text-center text-2xl'>Contact Information</CardTitle>
                            <CardDescription className='text-center text-blue-50'>
                                Fill out the form below and we'll get back to you within 24 hours
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='p-6'>
                            <form className='space-y-6'>
                                <div className='grid md:grid-cols-2 gap-4'>
                                    <div className='space-y-2'>
                                        <Label htmlFor='name' className='text-slate-700 font-medium'>
                                            Full Name *
                                        </Label>
                                        <Input
                                            id='name'
                                            placeholder='Enter your full name'
                                            required
                                            className='border-blue-200 focus:border-blue-400 focus:ring-blue-400'
                                        />
                                    </div>
                                    <div className='space-y-2'>
                                        <Label htmlFor='phone' className='text-slate-700 font-medium'>
                                            Phone Number *
                                        </Label>
                                        <Input
                                            id='phone'
                                            type='tel'
                                            placeholder='(555) 123-4567'
                                            required
                                            className='border-blue-200 focus:border-blue-400 focus:ring-blue-400'
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='email' className='text-slate-700 font-medium'>
                                        Email Address *
                                    </Label>
                                    <Input
                                        id='email'
                                        type='email'
                                        placeholder='your.email@example.com'
                                        required
                                        className='border-blue-200 focus:border-blue-400 focus:ring-blue-400'
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='interest' className='text-slate-700 font-medium'>
                                        I'm interested in:
                                    </Label>
                                    <select
                                        id='interest'
                                        className='w-full p-2 border border-blue-200 rounded-md bg-background focus:border-blue-400 focus:ring-blue-400'
                                    >
                                        <option value=''>Select an option</option>
                                        <option value='buying'>Buying</option>
                                        <option value='renting'>Renting</option>
                                        <option value='selling'>Selling</option>
                                    </select>
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='message' className='text-slate-700 font-medium'>
                                        Additional Details (Optional)
                                    </Label>
                                    <Textarea
                                        id='message'
                                        placeholder="Tell us more about what you're looking for..."
                                        rows={4}
                                        className='border-blue-200 focus:border-blue-400 focus:ring-blue-400'
                                    />
                                </div>

                                <Button
                                    type='submit'
                                    className='w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300'
                                >
                                    Get My Free Consultation
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </section> */}
            </main>

            {/* Footer */}
            <footer className='bg-gradient-to-r from-slate-800 to-slate-900 text-white mt-16'>
                <div className='container mx-auto px-4 py-12'>
                    <div className='grid md:grid-cols-4 gap-3'>
                        <div>
                            <div className='flex items-center space-x-2 mb-4'>
                                <img
                                    src='/homely-logo.png'
                                    alt='Homely Realtor Logo'
                                    className='w-10 h-10 object-contain sm:w-12 sm:h-12 md:w-20 md:h-20'
                                />
                                <span className='text-xl font-bold'>Homely Realtor</span>
                            </div>
                            <p className='text-slate-300 w-[90%]'>
                                Your trusted partner in real estate. Making property dreams come true since 2010.
                            </p>
                        </div>

                        <div>
                            <h3 className='text-lg font-semibold mb-4 text-blue-400'>Contact Info</h3>
                            <div className='space-y-2 text-slate-300'>
                                <div className='flex items-center space-x-2 hover:text-blue-400 transition-colors'>
                                    <Phone className='h-4 w-4' />
                                    <span>08056118087</span>
                                </div>
                                <div className='flex items-center space-x-2 hover:text-blue-400 transition-colors'>
                                    <Mail className='h-4 w-4' />
                                    <span>contact@homelyrealtors.com</span>
                                </div>
                                <div className='flex items-center space-x-2 hover:text-blue-400 transition-colors'>
                                    Whatsapp: 08057322373
                                    <span></span>
                                </div>
                                {/* <div className='flex items-center space-x-2 hover:text-blue-400 transition-colors'>
                                    <MapPin className='h-4 w-4' />
                                    <span>123 Main St, Your City, ST 12345</span>
                                </div> */}
                            </div>
                        </div>

                        <div>
                            <h3 className='text-lg font-semibold mb-4 text-blue-400'>Services</h3>
                            <ul className='space-y-2 text-slate-300'>
                                <li className='hover:text-blue-400 transition-colors'>Property Buying</li>
                                <li className='hover:text-blue-400 transition-colors'>Rental Solutions</li>
                                <li className='hover:text-blue-400 transition-colors'>Property Selling</li>
                                <li className='hover:text-blue-400 transition-colors'>Investment Consulting</li>
                            </ul>
                        </div>
                    </div>

                    <div className='border-t border-slate-700 mt-8 pt-8 text-center text-slate-400'>
                        <p>&copy; 2024 Homely Realtor. All rights reserved.</p>
                        <div className='mt-2'>
                            <Link
                                href='/privacy'
                                className='text-blue-400 hover:text-blue-300 transition-colors text-sm underline'
                            >
                                Privacy Notice
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
