"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import Link from "next/link"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!agreedToPrivacy) {
      return
    }
    
    const formData = new FormData(e.currentTarget)
    
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${company}`)
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nMessage:\n${message}`
    )
    
    window.location.href = `mailto:info@soficoserv.com?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 bg-muted border border-border text-center rounded-lg">
        <h3 className="text-xl font-semibold text-foreground">
          Email Client Opened
        </h3>
        <p className="mt-4 text-sm text-muted-foreground">
          Your email client should have opened with the inquiry details. 
          Please send the email to complete your submission.
        </p>
        <button
          className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-accent text-white rounded-md transition-all duration-200 hover:bg-accent/90"
          onClick={() => {
            setIsSubmitted(false)
            setAgreedToPrivacy(false)
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Company - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Full name"
            className="w-full h-12 px-4 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company <span className="text-accent">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Company name"
            className="w-full h-12 px-4 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@company.com"
          className="w-full h-12 px-4 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your requirements..."
          className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
        />
      </div>

      {/* Privacy Policy Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          checked={agreedToPrivacy}
          onChange={(e) => setAgreedToPrivacy(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border bg-background text-accent focus:ring-accent focus:ring-offset-0"
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          I agree to the{" "}
          <Link href="/privacy-policy" className="text-accent hover:text-accent/80 transition-colors">
            Privacy Policy
          </Link>{" "}
          and consent to Sofico processing my data for the purpose of this inquiry.
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={!agreedToPrivacy}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-accent text-white rounded-md transition-all duration-200 hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send Inquiry
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}
