"use client";

import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageSquareText, Phone } from "lucide-react";
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
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { siteConfig } from "@/lib/site-config";

const intentValues = ["buy", "sell", "home-value", "other"] as const;

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter the number to reach you at." }),
  email: z.email({ message: "Please enter a valid email." }),
  intent: z.enum(intentValues, {
    message: "Choose one so Maher can prepare.",
  }),
  message: z
    .string()
    .trim()
    .max(600, { message: "Please keep it under 600 characters." })
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

type ReadyMessage = { body: string; smsUrl: string };

export function Contact() {
  const { contact } = siteConfig;
  const [ready, setReady] = useState<ReadyMessage | null>(null);
  const readyHeadingRef = useRef<HTMLHeadingElement>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  useEffect(() => {
    if (ready) readyHeadingRef.current?.focus();
  }, [ready]);

  const onSubmit = (values: FormValues) => {
    const intentLabel =
      contact.form.intents.find((intent) => intent.value === values.intent)
        ?.label ?? values.intent;
    const lines = [
      `Hi Maher, this is ${values.name}.`,
      `I want to: ${intentLabel}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
    ];
    if (values.message) lines.push(`Notes: ${values.message}`);
    lines.push("(Sent from your website)");
    const body = lines.join("\n");
    setReady({
      body,
      smsUrl: `${siteConfig.smsHref}?body=${encodeURIComponent(body)}`,
    });
  };

  return (
    <Section id="contact" labelledBy="contact-title" className="bg-band">
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
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" />
                  Call Maher
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.smsHref}>
                  <MessageSquareText className="size-4" />
                  Text Maher
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
            <h3 className="text-lg font-semibold text-foreground">
              {contact.form.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {contact.form.subtitle}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className={ready ? "hidden" : "mt-7 space-y-5"}
              aria-hidden={ready ? true : undefined}
            >
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

              <Button type="submit" size="lg" className="w-full">
                {contact.form.submitLabel}
              </Button>
            </form>

            {ready ? (
              <div className="mt-7">
                <h4
                  ref={readyHeadingRef}
                  tabIndex={-1}
                  className="font-serif text-xl font-semibold text-foreground outline-none"
                >
                  {contact.form.ready.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {contact.form.ready.subtitle}
                </p>
                <div className="mt-4 whitespace-pre-line rounded-md border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-foreground/90">
                  {ready.body}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <a href={ready.smsUrl}>
                      <MessageSquareText className="size-4" />
                      {contact.form.ready.sendLabel}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={siteConfig.phoneHref}>
                      <Phone className="size-4" />
                      {contact.form.ready.callLabel}
                    </a>
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="ghost"
                    onClick={() => setReady(null)}
                  >
                    {contact.form.ready.editLabel}
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
