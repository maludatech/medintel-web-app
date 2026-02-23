import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Section,
  Img,
  Preview,
} from "@react-email/components";

interface PasswordResetEmailProps {
  email: string;
  resetUrl: string;
}

export default function PasswordResetEmail({
  email,
  resetUrl,
}: PasswordResetEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        `}</style>
      </Head>
      <Preview>Reset your MedIntel password — link expires in 1 hour</Preview>
      <Body style={s.body}>
        <Container style={s.container}>
          {/* Header */}
          <Section style={s.header}>
            <Img
              src="https://res.cloudinary.com/dlnvweuhv/image/upload/v1756344834/medintel-icon.png"
              alt="MedIntel"
              width="24"
              height="24"
              style={{ display: "block", marginBottom: "24px" }}
            />
            <Heading style={s.heading}>Reset your password</Heading>
            <Text style={s.subtext}>
              We received a request to reset the password for{" "}
              <span style={s.emailSpan}>{email}</span>. Click the button below
              to choose a new one.
            </Text>
          </Section>

          {/* Button */}
          <Section style={s.buttonSection}>
            <a href={resetUrl} style={s.button}>
              Reset password
            </a>
          </Section>

          {/* Notes */}
          <Section style={s.notes}>
            <Text style={s.note}>This link expires in 1 hour.</Text>
            <Text style={s.note}>
              If you didn't request a password reset, you can safely ignore this
              email — your password won't change.
            </Text>
          </Section>

          {/* Divider */}
          <div style={s.divider} />

          {/* Footer */}
          <Section style={s.footer}>
            <Text style={s.footerText}>MedIntel · All rights reserved</Text>
            <Text style={s.footerUrl}>
              Or copy this link into your browser:{" "}
              <a href={resetUrl} style={s.urlLink}>
                {resetUrl}
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const s: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: "#f4f4f5",
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    margin: 0,
    padding: 0,
    WebkitFontSmoothing: "antialiased",
  },
  container: {
    backgroundColor: "#ffffff",
    maxWidth: "480px",
    margin: "40px auto",
    borderRadius: "12px",
    padding: "40px 40px 32px",
    border: "1px solid #e4e4e7",
  },

  header: {
    marginBottom: "28px",
  },
  heading: {
    color: "#09090b",
    fontSize: "22px",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    lineHeight: "1.3",
    margin: "0 0 12px",
  },
  subtext: {
    color: "#52525b",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: 0,
  },
  emailSpan: {
    color: "#09090b",
    fontWeight: 500,
  },

  buttonSection: {
    marginBottom: "28px",
  },
  button: {
    backgroundColor: "#18181b",
    borderRadius: "8px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "15px",
    fontWeight: 500,
    padding: "13px 24px",
    textDecoration: "none",
    letterSpacing: "-0.01em",
  },

  notes: {
    marginBottom: "28px",
  },
  note: {
    color: "#71717a",
    fontSize: "13px",
    lineHeight: "1.6",
    margin: "0 0 8px",
  },

  divider: {
    height: "1px",
    backgroundColor: "#f4f4f5",
    margin: "0 0 24px",
  },

  footer: {},
  footerText: {
    color: "#a1a1aa",
    fontSize: "12px",
    margin: "0 0 8px",
  },
  footerUrl: {
    color: "#a1a1aa",
    fontSize: "11px",
    lineHeight: "1.6",
    margin: 0,
  },
  urlLink: {
    color: "#71717a",
    textDecoration: "underline",
    wordBreak: "break-all",
  },
};
