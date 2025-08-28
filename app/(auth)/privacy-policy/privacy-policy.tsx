export const PrivacyPolicy: React.FC = () => {
  const privacyPolicy = [
    {
      title: "1. Information We Collect",
      content:
        "We collect personal and health-related data you provide, such as symptoms, age, and medical history, to generate AI-based predictions and improve our platform. This includes data entered during account creation and usage.",
    },
    {
      title: "2. How We Use Your Data",
      content:
        "• To deliver personalized health predictions.\n• To enhance platform accuracy and user experience.\n• To comply with legal and regulatory requirements.",
    },
    {
      title: "3. Data Security",
      content:
        "Your data is encrypted and stored securely using industry-standard practices. We implement measures to protect against unauthorized access, loss, or misuse.",
    },
    {
      title: "4. Data Sharing",
      content:
        "We do not sell or share your data with third parties except as required by law or with your explicit consent for specific purposes outlined in our Terms.",
    },
    {
      title: "5. Your Rights",
      content:
        "• You can request access to, correction of, or deletion of your data.\n• You may opt out of non-essential data processing by contacting support.\n• See our Terms for more details on exercising these rights.",
    },
    {
      title: "6. Cookies and Tracking",
      content:
        "We use cookies to improve functionality and analyze usage. You can manage cookie preferences through your browser settings.",
    },
    {
      title: "7. Changes to This Policy",
      content:
        "We may update this Privacy Policy periodically. Changes will be communicated in-app or via email, and continued use signifies acceptance.",
    },
    {
      title: "8. Contact Us",
      content: "For questions or concerns, reach us at: support@medintel.com",
    },
  ];

  return (
    <section className="flex my-auto items-center justify-center p-4 pt-24 text-foreground">
      <div className="w-full flex flex-col gap-6 max-w-md rounded-lg bg-[#FFFFFF] dark:bg-[#000000] p-6 shadow-sm backdrop-blur-sm shadow-[#00000040] dark:shadow-[#FFFFFF40]">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl font-semibold text-center">Privacy Policy</h2>
          <p className="text-sm text-muted-foreground text-left">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
        <p className="text-[#081207] dark:text-[#FFFFFF] text-base">
          Welcome to MedIntel’s Privacy Policy. This policy explains how we
          collect, use, and protect your data on our AI-powered health
          prediction platform. By using our services, you agree to the practices
          outlined here. If you disagree, please discontinue use.
        </p>
        <div className="flex flex-col gap-4">
          {privacyPolicy.map((section, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
            >
              <h3 className="text-lg font-medium text-[#081207] dark:text-[#FFFFFF] mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-[#081207] dark:text-[#FFFFFF] leading-relaxed">
                {section.content.split("\n").map((line, i) => (
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
