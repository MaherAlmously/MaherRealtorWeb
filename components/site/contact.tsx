"use client";

import { useEffect, useRef, useState, type BaseSyntheticEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquareText,
  Phone,
  TriangleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DecorativeBackdrop } from "@/components/site/decorative-backdrop";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-config";

const FALLBACK_ERROR = "Something went wrong. Please call or text instead.";
const WEB3FORMS_ACCESS_KEY = "19d46562-4249-4456-a2ff-f77a8fae9692";

export function Contact() {
  const { contact } = siteConfig;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState(FALLBACK_ERROR);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus();
  }, [status]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = async (
    values: ContactFormValues,
    event?: BaseSyntheticEvent
  ) => {
    setStatus("submitting");
    try {
      const formEl = event?.target as HTMLFormElement | undefined;
      const honeypot = formEl ? new FormData(formEl).get("company") : "";
      const intentLabel =
        contact.form.intents.find((intent) => intent.value === values.intent)?.label ??
        values.intent;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New website lead: ${values.name} (${intentLabel})`,
          from_name: "Website Contact Form",
          name: values.name,
          phone: values.phone,
          email: values.email,
          "Wants to": intentLabel,
          message: values.message ?? "",
          botcheck: typeof honeypot === "string" ? honeypot : "",
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.success) {
        setErrorMessage(FALLBACK_ERROR);
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setErrorMessage(FALLBACK_ERROR);
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      labelledBy="contact-title"
      className="bg-band"
      backdrop={<DecorativeBackdrop />}
    >
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              titleId="contact-title"
              lead={contact.lead}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href={siteConfig.phoneHref}
              className="mt-8 inline-block font-serif text-4xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-5xl"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.emailHref}
              className="mt-2 flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4 shrink-0" />
              {siteConfig.email}
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href={siteConfig.smsHref}>
                  <MessageSquareText className="size-4" />
                  Text Me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" />
                  Call Me
                </a>
              </Button>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {contact.voicemailNote}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            {status === "success" ? (
              <div>
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 aria-hidden="true" className="size-6" />
                </span>
                <h3
                  ref={successHeadingRef}
                  tabIndex={-1}
                  className="mt-4 font-serif text-xl font-semibold text-foreground outline-none"
                >
                  {contact.form.success.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {contact.form.success.subtitle}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <a href={siteConfig.smsHref}>
                      <MessageSquareText className="size-4" />
                      {contact.form.success.textLabel}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={siteConfig.phoneHref}>
                      <Phone className="size-4" />
                      {contact.form.success.callLabel}
                    </a>
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="ghost"
                    onClick={() => setStatus("idle")}
                  >
                    {contact.form.success.resetLabel}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-foreground">
                  {contact.form.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {contact.form.subtitle}
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mt-7 space-y-5"
                >
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-9999px] h-px w-px overflow-hidden opacity-0"
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Name</Label>
                      <Input
                        id="contact-name"
                        autoComplete="name"
                        placeholder="Your name"
                        aria-invalid={errors.name ? true : undefined}
                        {...register("name")}
                      />
                      {errors.name ? (
                        <p className="text-xs font-medium text-destructive">
                          {errors.name.message}
                        </p>
                      ) : null}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Best number to reach you"
                        aria-invalid={errors.phone ? true : undefined}
                        {...register("phone")}
                      />
                      {errors.phone ? (
                        <p className="text-xs font-medium text-destructive">
                          {errors.phone.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      aria-invalid={errors.email ? true : undefined}
                      {...register("email")}
                    />
                    {errors.email ? (
                      <p className="text-xs font-medium text-destructive">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-intent">I want to</Label>
                    <Controller
                      control={control}
                      name="intent"
                      render={({ field }) => (
                        <Select
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            id="contact-intent"
                            className="w-full"
                            aria-invalid={errors.intent ? true : undefined}
                          >
                            <SelectValue placeholder="Choose one" />
                          </SelectTrigger>
                          <SelectContent>
                            {contact.form.intents.map((intent) => (
                              <SelectItem key={intent.value} value={intent.value}>
                                {intent.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.intent ? (
                      <p className="text-xs font-medium text-destructive">
                        {errors.intent.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message (optional)</Label>
                    <Textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Anything that helps: areas, timeline, price range, or the address for a value review"
                      aria-invalid={errors.message ? true : undefined}
                      {...register("message")}
                    />
                    {errors.message ? (
                      <p className="text-xs font-medium text-destructive">
                        {errors.message.message}
                      </p>
                    ) : null}
                  </div>

                  {status === "error" ? (
                    <div className="flex items-start gap-2.5 rounded-md border border-destructive/30 bg-destructive/10 p-3.5 text-sm text-destructive">
                      <TriangleAlert
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0"
                      />
                      <p>{errorMessage}</p>
                    </div>
                  ) : null}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        {contact.form.submittingLabel}
                      </>
                    ) : (
                      contact.form.submitLabel
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
