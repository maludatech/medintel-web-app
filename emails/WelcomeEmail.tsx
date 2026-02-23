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

interface WelcomeEmailProps {
  email: string;
  username: string;
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://medintel.app";

export default function WelcomeEmail({ email, username }: WelcomeEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        `}</style>
      </Head>
      <Preview>
        Welcome to MedIntel, {username} — your health dashboard is ready
      </Preview>
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
            <Heading style={s.heading}>Welcome, {username}.</Heading>
            <Text style={s.subtext}>
              Your MedIntel account is ready. You're signed in as{" "}
              <span style={s.emailSpan}>{email}</span>.
            </Text>
          </Section>

          {/* Features */}
          <Section style={s.featuresSection}>
            <Text style={s.featuresLabel}>What's included</Text>
            <div style={s.featureList}>
              {[
                { icon: "🧠", label: "AI Health Insights" },
                { icon: "📋", label: "Medical History" },
                { icon: "💊", label: "Symptom Checker" },
                { icon: "📊", label: "Health Dashboard" },
              ].map((f) => (
                <div key={f.label} style={s.featureItem}>
                  <span style={s.featureIcon}>{f.icon}</span>
                  <span style={s.featureText}>{f.label}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Button */}
          <Section style={s.buttonSection}>
            <a href={`${APP_URL}/dashboard`} style={s.button}>
              Go to your dashboard
            </a>
            <Text style={s.subCta}>
              Or{" "}
              <a href={`${APP_URL}/profile`} style={s.subCtaLink}>
                complete your profile
              </a>{" "}
              to get personalised insights.
            </Text>
          </Section>

          {/* Notes */}
          <Section style={s.notes}>
            <Text style={s.note}>
              🔒 Your data is encrypted and never sold to third parties.
            </Text>
            <Text style={s.note}>
              Didn't create this account?{" "}
              <a href={`${APP_URL}/support`} style={s.inlineLink}>
                Contact support
              </a>
              .
            </Text>
          </Section>

          {/* Divider */}
          <div style={s.divider} />

          {/* Footer */}
          <Section style={s.footer}>
            <Text style={s.footerText}>
              © {new Date().getFullYear()} MedIntel · All rights reserved
            </Text>
            <Text style={s.footerLinks}>
              <a href={`${APP_URL}/privacy-policy`} style={s.footerLink}>
                Privacy Policy
              </a>
              {" · "}
              <a href={`${APP_URL}/terms-of-service`} style={s.footerLink}>
                Terms of Service
              </a>
              {" · "}
              <a href={`${APP_URL}/unsubscribe`} style={s.footerLink}>
                Unsubscribe
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

  // Header
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

  // Features
  featuresSection: {
    marginBottom: "28px",
  },
  featuresLabel: {
    color: "#a1a1aa",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    margin: "0 0 12px",
  },
  featureList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    border: "1px solid #e4e4e7",
    borderRadius: "8px",
    padding: "10px 12px",
    gap: "8px",
  },
  featureIcon: {
    fontSize: "14px",
    flexShrink: 0,
  },
  featureText: {
    color: "#3f3f46",
    fontSize: "13px",
    fontWeight: 500,
  },

  // Button
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
    marginBottom: "12px",
  },
  subCta: {
    color: "#71717a",
    fontSize: "13px",
    margin: 0,
  },
  subCtaLink: {
    color: "#18181b",
    fontWeight: 500,
    textDecoration: "underline",
  },

  // Notes
  notes: {
    marginBottom: "28px",
  },
  note: {
    color: "#71717a",
    fontSize: "13px",
    lineHeight: "1.6",
    margin: "0 0 8px",
  },
  inlineLink: {
    color: "#18181b",
    fontWeight: 500,
    textDecoration: "underline",
  },

  // Divider
  divider: {
    height: "1px",
    backgroundColor: "#f4f4f5",
    margin: "0 0 24px",
  },

  // Footer
  footer: {},
  footerText: {
    color: "#a1a1aa",
    fontSize: "12px",
    margin: "0 0 6px",
  },
  footerLinks: {
    color: "#a1a1aa",
    fontSize: "12px",
    margin: 0,
  },
  footerLink: {
    color: "#a1a1aa",
    textDecoration: "none",
  },
};
