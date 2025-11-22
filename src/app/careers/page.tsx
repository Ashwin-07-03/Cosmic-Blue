import { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
    title: 'Careers | Cosmic Blue',
    description: 'Join our mission to make space more affordable, accessible, and repeatable',
};

export default function CareersPage() {
    return <CareersClient />;
}
