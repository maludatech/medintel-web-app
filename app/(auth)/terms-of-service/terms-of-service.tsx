export const TermsOfService: React.FC = () => {
  const termsOfService = [
    {
      title: "1. Purpose of the App",
      content:
        "MedIntel uses artificial intelligence to provide health-related predictions, trends, and recommendations based on the data you enter. Our services are for informational purposes only and should not be considered medical advice, diagnosis, or treatment. Always consult a licensed medical professional before making health decisions.",
    },
    {
      title: "2. Eligibility & Account Responsibility",
      content:
        "• You must be at least 18 years old to use this app.\n• You agree to provide accurate, up-to-date, and complete information when creating an account and during usage.\n• You are responsible for maintaining the confidentiality of your login details and any activity under your account.",
    },
    {
      title: "3. Data Collection & Privacy",
      content:
        "We collect personal and health-related data you provide in order to:\n• Generate AI-based predictions.\n• Improve platform accuracy and user experience.\n• Maintain compliance with applicable laws.\nYour data is stored securely and will never be sold to third parties. See our Privacy Policy for full details.",
    },
    {
      title: "4. Acceptable Use",
      content:
        "You agree not to:\n• Share false or misleading information.\n• Use the app for any illegal or harmful purposes.\n• Attempt to reverse engineer, hack, or damage the platform.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "We make no guarantees regarding the accuracy, completeness, or reliability of predictions. You acknowledge that:\n• AI results are probabilistic, not certain.\n• We are not liable for medical or lifestyle decisions made based on the app's outputs.\n• Use of this platform is at your own risk.",
    },
    {
      title: "6. Modifications",
      content:
        "We may update these Terms, our features, or our pricing at any time. Updates will be communicated in-app or via email. Continued use after changes means you accept the updated Terms.",
    },
    {
      title: "7. Termination",
      content:
        "We reserve the right to suspend or delete accounts that violate these Terms without prior notice.",
    },
    {
      title: "8. Contact Us",
      content:
        "If you have questions or concerns, reach us at: support@yourapp.com",
    },
  ];

  return (
    <section className="flex my-auto items-center justify-center p-4 pt-24 text-foreground">
      <div className="w-full flex flex-col gap-6 max-w-lg rounded-lg bg-[#FFFFFF] dark:bg-[#000000] p-6 shadow-sm backdrop-blur-sm shadow-[#00000040] dark:shadow-[#FFFFFF40]">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl font-semibold text-center">
            Terms and Conditions
          </h2>
          <p className="text-sm text-muted-foreground text-left">
            Last Updated: {new Date("2025-04-06").toLocaleDateString()}
          </p>
        </div>
        <p className="text-[#081207] dark:text-[#FFFFFF] text-base">
          Welcome to MedIntel, These Terms and Conditions govern your use of our
          AI-powered health prediction platform. By creating an account or using
          our services, you confirm that you have read, understood, and agreed
          to these Terms. If you do not agree, please discontinue use
          immediately.
        </p>
        <div className="flex flex-col gap-4">
          {termsOfService.map((term, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
            >
              <h3 className="text-lg font-medium text-[#081207] dark:text-[#FFFFFF] mb-2">
                {term.title}
              </h3>
              <p className="text-sm text-[#081207] dark:text-[#FFFFFF] leading-relaxed">
                {term.content.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
