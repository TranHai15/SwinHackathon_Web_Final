export default function UserGuide() {
  return (
    <div className="container mx-auto p-4">
      <main>
        {/* Hero Section */}
        <section className="hero bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">
            User Guide for PCB Checking
          </h2>
          <p className="text-lg">
            We provide a detailed user guide to help you use our PCB checking
            service effectively.
          </p>
        </section>

        {/* Getting Started Section */}
        <section className="getting-started mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li className="text-lg">Register an account on our website.</li>
            <li className="text-lg">
              Log in to your account and select the PCB checking service.
            </li>
            <li className="text-lg">
              Upload/Record your PCB circuits and select the checking options,
              such as camera or image.
            </li>
            <li className="text-lg">
              View the checking results.
            </li>
          </ol>
        </section>

        {/* Features Section */}
        <section className="features mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
          <ul className="list-decimal list-inside space-y-3">
            <li className="text-lg">Accurate and fast PCB checking.</li>
            <li className="text-lg">
            Support for multiple types of PCBs.
            </li>
            <li className="text-lg">
            Data security and customer information protection.
            </li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="faq mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-4">
            <li className="text-lg">
              <p className="font-semibold">Q: How do I upload a PCB file?</p>
              <p>
                A: You can upload a PCB file by clicking the "Upload files"
                button and selecting the file from your computer.
              </p>
            </li>
            <li className="text-lg">
              <p className="font-semibold">
                Q: How do I view the checking results?
              </p>
              <p>
                A: You can view the checking results by clicking the "View
                results" button after uploading your PCB file.
              </p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="text-center mt-10">
        <p className="text-sm">
          &copy; 2024 PCB Checking. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
