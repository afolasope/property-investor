"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mblkwjnp");
    const formRef = useRef(null);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (state.succeeded && formRef.current) {
            formRef.current.reset();
            setShowSuccess(true);
        }
    }, [state.succeeded]);

    return (
        <section id='contact' className='max-w-2xl mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold text-slate-800 mb-4'>Get Started Today</h2>
                <p className='text-lg text-slate-600'>
                    Ready to make your next move? Contact us and let's discuss your real estate goals.
                </p>
            </div>

            <Card className='border-2'>
                {showSuccess ? null : (
                    <CardHeader>
                        <CardTitle className='text-center text-2xl'>Contact Information</CardTitle>
                        <CardDescription className='text-center'>
                            Fill out the form below and we'll get back to you within 24 hours
                        </CardDescription>
                    </CardHeader>
                )}
                <CardContent className='p-6'>
                    {showSuccess ? (
                        <div className='flex flex-col items-center justify-center py-12 text-center space-y-6'>
                            <div className='bg-green-100 text-green-700 rounded-full p-4 animate-bounce'>
                                <svg
                                    className='h-8 w-8'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    viewBox='0 0 24 24'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                                </svg>
                            </div>
                            <h3 className='text-2xl font-bold text-slate-800'>Thanks for reaching out!</h3>
                            <p className='text-slate-600 max-w-md'>
                                Your message has been submitted successfully. We'll be in touch within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form ref={formRef} className='space-y-6' onSubmit={handleSubmit}>
                            <div className='grid md:grid-cols-2 gap-4'>
                                <div className='space-y-2'>
                                    <Label htmlFor='name'>Full Name *</Label>
                                    <Input
                                        id='name'
                                        name='name'
                                        type='text'
                                        placeholder='Enter your full name'
                                        required
                                    />
                                    <ValidationError prefix='Name' field='name' errors={state.errors} />
                                </div>
                                <div className='space-y-2'>
                                    <Label htmlFor='phone'>Phone Number</Label>
                                    <Input id='phone' name='phone' placeholder='' type='tel' />
                                    <ValidationError prefix='Phone' field='phone' errors={state.errors} />
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <Label htmlFor='email'>Email Address *</Label>
                                <Input
                                    id='email'
                                    name='email'
                                    placeholder='your.email@example.com'
                                    type='email'
                                    required
                                />
                                <ValidationError prefix='Email' field='email' errors={state.errors} />
                            </div>

                            <div className='space-y-2'>
                                <Label htmlFor='interest'>I'm interested in:</Label>
                                <select
                                    id='interest'
                                    name='interest'
                                    className='w-full p-2 border rounded-md bg-background'
                                >
                                    <option value=''>Select an option</option>
                                    <option value='buying'>Lagos</option>
                                    <option value='renting'>Abuja</option>
                                    <option value='selling'>Others</option>
                                </select>
                            </div>

                            <div className='space-y-2'>
                                <Label htmlFor='message'>Additional Details (Optional)</Label>
                                <Textarea
                                    name='message'
                                    id='message'
                                    placeholder="Tell us more about what you're looking for..."
                                    rows={4}
                                />
                                <ValidationError prefix='Message' field='message' errors={state.errors} />
                            </div>

                            <Button
                                type='submit'
                                className='w-full text-lg py-6 flex items-center justify-center'
                                disabled={state.submitting}
                            >
                                {state.submitting ? (
                                    <>
                                        <svg
                                            className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                        >
                                            <circle
                                                className='opacity-25'
                                                cx='12'
                                                cy='12'
                                                r='10'
                                                stroke='currentColor'
                                                strokeWidth='4'
                                            ></circle>
                                            <path
                                                className='opacity-75'
                                                fill='currentColor'
                                                d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 010 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z'
                                            ></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    "START HERE"
                                )}
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>
        </section>
    );
}
