"use client"

import { useState } from "react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 p-8 bg-muted border border-border text-center">
        <h3 className="text-xl font-serif text-foreground">
          Inquiry Submitted
        </h3>
        <p className="mt-4 text-sm text-muted-foreground">
          Thank you for your inquiry. We will review your submission and respond 
          via corporate email.
        </p>
        <button
          className="mt-6 btn-outline"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-2">
        <label htmlFor="companyName" className="text-sm font-medium text-foreground">
          Company Name
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          required
          placeholder="Enter company name"
          className="w-full h-12 px-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contactPerson" className="text-sm font-medium text-foreground">
          Contact Person
        </label>
        <input
          id="contactPerson"
          name="contactPerson"
          type="text"
          required
          placeholder="Enter contact person name"
          className="w-full h-12 px-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Corporate Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter corporate email address"
          className="w-full h-12 px-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
        <p className="text-xs text-muted-foreground">
          Personal email addresses (gmail, yahoo, etc.) are not accepted.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your inquiry or operational coordination requirements"
          className="w-full px-4 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  )
}
