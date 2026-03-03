"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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
      <div className="mt-8 p-6 bg-muted/50 border border-border/30">
        <h3 className="text-lg font-semibold text-foreground">
          Inquiry Submitted
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your inquiry. We will review your submission and respond 
          via corporate email.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-md border-foreground/20 hover:bg-foreground/5"
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-sm font-medium">
          Company Name
        </Label>
        <Input
          id="companyName"
          name="companyName"
          type="text"
          required
          placeholder="Enter company name"
          className="h-11 rounded-md border-border/50 bg-background focus-visible:ring-foreground/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactPerson" className="text-sm font-medium">
          Contact Person
        </Label>
        <Input
          id="contactPerson"
          name="contactPerson"
          type="text"
          required
          placeholder="Enter contact person name"
          className="h-11 rounded-md border-border/50 bg-background focus-visible:ring-foreground/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Corporate Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter corporate email address"
          className="h-11 rounded-md border-border/50 bg-background focus-visible:ring-foreground/20"
        />
        <p className="text-xs text-muted-foreground">
          Personal email addresses (e.g., gmail.com, yahoo.com) are not accepted.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your inquiry or operational coordination requirements"
          className="rounded-md resize-none border-border/50 bg-background focus-visible:ring-foreground/20"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-11 px-8 rounded-md text-base font-medium"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  )
}
