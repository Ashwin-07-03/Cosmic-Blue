import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Form validation schema
const applicationSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Invalid phone number'),
    role: z.string().min(2, 'Please specify the role'),
    linkedinX: z.string().optional(),
    whyGoodFit: z.string().min(50, 'Please provide at least 50 characters'),
    contribution: z.string().min(50, 'Please provide at least 50 characters'),
    currentSalary: z.string().optional(),
    expectedSalary: z.string().optional(),
    resume: z.string().min(1, 'Resume is required'),
    resumeFileName: z.string().min(1, 'Resume file name is required'),
});

type ApplicationData = z.infer<typeof applicationSchema>;

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();

        // Validate form data
        const validatedData: ApplicationData = applicationSchema.parse(body);

        // Convert base64 resume to buffer for attachment
        const base64Data = validatedData.resume.includes(',')
            ? validatedData.resume.split(',')[1]
            : validatedData.resume;
        const resumeBuffer = Buffer.from(base64Data, 'base64');

        // Prepare email content
        const emailHtml = `
      <h2>New Job Application</h2>
      
      <h3>Applicant Information</h3>
      <p><strong>Name:</strong> ${validatedData.fullName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone}</p>
      <p><strong>LinkedIn/X Profile:</strong> ${validatedData.linkedinX || 'Not provided'}</p>
      
      <h3>Application Details</h3>
      <p><strong>Role Applying For:</strong> ${validatedData.role}</p>
      
      <h3>Why They're a Good Fit</h3>
      <p>${validatedData.whyGoodFit.replace(/\n/g, '<br>')}</p>
      
      <h3>Potential Contribution</h3>
      <p>${validatedData.contribution.replace(/\n/g, '<br>')}</p>
      
      <h3>Salary Information</h3>
      <p><strong>Current Salary:</strong> ${validatedData.currentSalary || 'Not provided'}</p>
      <p><strong>Expected Salary:</strong> ${validatedData.expectedSalary || 'Not provided'}</p>
      
      <p><em>Resume attached</em></p>
    `;

        // Send email using Resend
        const { data, error: resendError } = await resend.emails.send({
            from: 'Cosmic Blue Careers <onboarding@resend.dev>', // Use your verified domain in production
            to: ['ashwin.vk71@gmail.com'],
            subject: `Job Application - ${validatedData.role} - ${validatedData.fullName}`,
            html: emailHtml,
            attachments: [
                {
                    filename: validatedData.resumeFileName,
                    content: resumeBuffer,
                },
            ],
        });

        if (resendError) {
            console.error('Resend error:', resendError);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Application submitted successfully', id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        // Handle Zod validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation error', details: error.issues },
                { status: 400 }
            );
        }

        // Handle other errors
        console.error('Error submitting application:', error);
        return NextResponse.json(
            { error: 'Failed to submit application. Please try again.' },
            { status: 500 }
        );
    }
}
