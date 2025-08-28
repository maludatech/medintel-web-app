import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Heading,
  Button,
  Section,
  Tailwind,
  Img,
} from "@react-email/components";

interface WelcomeEmailProps {
  email: string;
  username: string;
}

export default function WelcomeEmail({ email, username }: WelcomeEmailProps) {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "oklch(0.75 0.2 142)",
                muted: "#6b7280",
                background: "#ffffff",
                foreground: "#111827",
              },
            },
          },
        }}
      >
        <Body className="bg-background text-foreground font-sans">
          <Container className="mx-auto p-6 max-w-xl">
            <Section className="bg-card rounded-lg shadow-lg border border-gray-200 p-8 text-center">
              <Img
                src="https://res.cloudinary.com/dlnvweuhv/image/upload/v1756344834/medintel-icon.png"
                alt="MedIntel Logo"
                width="120"
                height="auto"
                className="mx-auto mb-6"
              />
              <Heading className="text-2xl font-bold text-foreground mb-4">
                Welcome to MedIntel, {username}!
              </Heading>

              <Text className="text-muted mb-4">
                Your account (<span className="font-medium">{email}</span>) has
                been successfully created. 🎉 MedIntel helps you get instant
                AI-powered health insights, track your medical history, and make
                informed decisions about your well-being.
              </Text>

              <Button
                href={`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`}
                className="bg-primary text-white font-semibold py-3 px-6 rounded-md inline-block mb-6"
              >
                Go to Your Health Dashboard
              </Button>

              <Text className="text-muted mb-4">
                From checking symptoms to keeping your medical records in one
                place, MedIntel is here to empower you with reliable health
                tools.
              </Text>

              <Text className="text-muted text-sm">
                © {new Date().getFullYear()} MedIntel. All rights reserved.
                <br />
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`}
                  className="underline text-primary"
                >
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/terms-of-service`}
                  className="underline text-primary"
                >
                  Terms of Service
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
